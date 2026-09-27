// Shared helpers for the payment + content functions (files starting with _ are not deployed as endpoints).
const crypto = require('crypto');

const PRICE = parseInt(process.env.PRICE_PAISE || '5000', 10); // ₹50
const COOKIE = 'bn_access';
const MAX_AGE = 400 * 24 * 3600; // browsers cap cookies at 400 days

function env(name) {
  const v = process.env[name];
  if (!v) throw Object.assign(new Error(`Server is missing ${name}. Set it in Vercel → Settings → Environment Variables.`), { status: 500 });
  return v;
}

function send(res, status, obj, headers) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  if (headers) for (const k in headers) res.setHeader(k, headers[k]);
  res.end(JSON.stringify(obj));
}

async function body(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') { try { return JSON.parse(req.body); } catch (e) { return {}; } }
  const chunks = [];
  for await (const c of req) chunks.push(c);
  try { return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}'); } catch (e) { return {}; }
}

const b64u = (buf) => Buffer.from(buf).toString('base64').replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
const hmac = (key, msg) => crypto.createHmac('sha256', key).update(msg).digest();

function safeEqual(a, b) {
  const x = Buffer.from(String(a)), y = Buffer.from(String(b));
  return x.length === y.length && crypto.timingSafeEqual(x, y);
}

function makeToken(paymentId, deviceId) {
  const payload = b64u(JSON.stringify({ p: paymentId, d: deviceId || null, t: Math.floor(Date.now() / 1000) }));
  return payload + '.' + b64u(hmac(env('SESSION_SECRET'), payload));
}

function readToken(req) {
  if (process.env.DEV_BYPASS === '1') return { p: 'dev' };
  const raw = (req.headers.cookie || '').split(/;\s*/).find((c) => c.startsWith(COOKIE + '='));
  if (!raw) return null;
  const [payload, sig] = raw.slice(COOKIE.length + 1).split('.');
  if (!payload || !sig) return null;
  let secret;
  try { secret = env('SESSION_SECRET'); } catch (e) { return null; }
  if (!safeEqual(sig, b64u(hmac(secret, payload)))) return null;
  try { return JSON.parse(Buffer.from(payload.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8')); } catch (e) { return null; }
}

// Who can see the paid modules: a paid token, the owner token, or a free-access token whose phone is still
// on the owner's free list (so removing someone from the list locks them out straight away).
const last10 = (s) => String(s || '').replace(/\D/g, '').slice(-10);
async function hasAccess(req) {
  const t = readToken(req);
  if (!t) return null;
  if (!String(t.p).startsWith('free:')) return t;
  const store = require('./_store');
  if (!store.configured()) return null;
  const [on] = await store.pipeline([['HEXISTS', 'free', String(t.p).slice(5)]]);
  return on ? t : null;
}

function accessCookie(paymentId, deviceId) {
  const secure = process.env.VERCEL ? '; Secure' : '';
  return `${COOKIE}=${makeToken(paymentId, deviceId)}; Path=/; Max-Age=${MAX_AGE}; HttpOnly; SameSite=Lax${secure}`;
}

async function razorpay(method, path, data) {
  const auth = Buffer.from(env('RAZORPAY_KEY_ID') + ':' + env('RAZORPAY_KEY_SECRET')).toString('base64');
  const r = await fetch('https://api.razorpay.com/v1' + path, {
    method,
    headers: { Authorization: 'Basic ' + auth, 'Content-Type': 'application/json' },
    body: data ? JSON.stringify(data) : undefined,
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) throw Object.assign(new Error((j.error && j.error.description) || 'Razorpay request failed'), { status: r.status === 401 ? 401 : 500 });
  return j;
}

// Confirms a payment is real, UPI, the right amount, and captured. Captures it if only authorized.
async function checkPayment(paymentId, orderId) {
  if (!/^pay_[A-Za-z0-9]+$/.test(paymentId || '')) return { ok: false, why: 'That does not look like a Razorpay payment ID (it starts with pay_).' };
  let p = await razorpay('GET', '/payments/' + paymentId);
  if (orderId && p.order_id !== orderId) return { ok: false, why: 'Payment does not belong to this order.' };
  if (p.method !== 'upi') return { ok: false, why: 'Only UPI payments unlock the notes.' };
  if (p.currency !== 'INR' || p.amount !== PRICE) return { ok: false, why: 'Payment amount does not match.' };
  if ((p.notes || {}).product !== 'bachy105-notes') {
    // payments made through our checkout carry the order's notes; fall back to the order
    if (p.order_id) { const o = await razorpay('GET', '/orders/' + p.order_id); if ((o.notes || {}).product !== 'bachy105-notes') return { ok: false, why: 'Payment was not for these notes.' }; }
    else return { ok: false, why: 'Payment was not for these notes.' };
  }
  if (p.status === 'authorized') p = await razorpay('POST', `/payments/${paymentId}/capture`, { amount: PRICE, currency: 'INR' });
  if (p.status !== 'captured') return { ok: false, why: `Payment is ${p.status}, not completed.` };
  return { ok: true, payment: p };
}

// Each payment unlocks one phone (or tablet) and one laptop/PC, unless the owner set a custom limit for that
// phone number on /stats.html (hash "limits": phone -> {"phone":n,"pc":n}). The kind comes from the browser's
// user agent; the browser keeps a random device id in localStorage, so clearing cookies reuses its slot.
// Needs the store; without one the limit is not enforced.
const DEVICE_KINDS = ['phone', 'pc'];
const MAX_DEVICES = DEVICE_KINDS.length;
const KIND_NAME = { phone: 'phone', pc: 'laptop/PC' };
function deviceIdFrom(b) {
  const d = String((b && b.deviceId) || '');
  return /^[a-f0-9]{32}$/.test(d) ? d : crypto.randomBytes(16).toString('hex');
}
const deviceKind = (req) => (/Mobi|Android|iPhone|iPad|iPod|Tablet/i.test((req && req.headers['user-agent']) || '') ? 'phone' : 'pc');
const deviceKeys = (paymentId) => DEVICE_KINDS.map((k) => `devices:${paymentId}:${k}`);
const DEFAULT_LIMITS = { phone: 1, pc: 1 };
function parseLimits(raw) {
  let x = {}; try { x = JSON.parse(raw || '{}') || {}; } catch (e) {}
  const n = (v, d) => (Number.isInteger(v) && v >= 0 && v <= 20 ? v : d);
  return { phone: n(x.phone, DEFAULT_LIMITS.phone), pc: n(x.pc, DEFAULT_LIMITS.pc) };
}
const plural = (n, k) => `${n} ${n === 1 ? KIND_NAME[k] : k === 'pc' ? 'laptops/PCs' : 'phones'}`;
async function claimDevice(paymentId, deviceId, req, phone) {
  const store = require('./_store');
  if (!store.configured()) return { ok: true, enforced: false };
  const kind = deviceKind(req), key = `devices:${paymentId}:${kind}`;
  const [isMember, count, raw] = await store.pipeline([['SISMEMBER', key, deviceId], ['SCARD', key], ['HGET', 'limits', last10(phone)]]);
  if (isMember) return { ok: true, enforced: true, kind };
  const lim = parseLimits(raw);
  if (count >= lim[kind]) {
    const why = lim[kind] === 0
      ? `This number can't be used on a ${KIND_NAME[kind]}. It works on ${plural(lim.phone, 'phone')} and ${plural(lim.pc, 'pc')}.`
      : `This number has reached its limit of ${plural(lim[kind], kind)}. It works on ${plural(lim.phone, 'phone')} and ${plural(lim.pc, 'pc')}. Use one of those, or ask the site owner to reset your devices.`;
    return { ok: false, why };
  }
  await store.pipeline([['SADD', key, deviceId]]);
  return { ok: true, enforced: true, kind };
}

function handle(fn) {
  return async (req, res) => {
    try { await fn(req, res); }
    catch (e) { send(res, e.status || 500, { error: e.message || 'Something went wrong' }); }
  };
}

module.exports = { PRICE, MAX_DEVICES, env, send, body, hmac, safeEqual, readToken, hasAccess, last10, accessCookie, razorpay, checkPayment, deviceIdFrom, deviceKeys, claimDevice, parseLimits, handle };
