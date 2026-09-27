// POST /api/restore { phone, paymentId? } -> re-issues access on a new browser/device
// Numbers on the owner's free list (set on /stats.html) unlock without a payment.
// With only a phone number, looks through recent Razorpay payments for a completed ₹50 UPI payment from it.
const { send, body, checkPayment, accessCookie, razorpay, isOurs, last10, deviceIdFrom, claimDevice, handle } = require('./_lib');
const store = require('./_store');

const PAGES = 20; // up to 2,000 recent payments scanned (100 per page)

async function findByPhone(phone) {
  const from = Math.floor(Date.now() / 1000) - 400 * 24 * 3600;
  for (let page = 0; page < PAGES; page++) {
    const list = await razorpay('GET', `/payments?from=${from}&count=100&skip=${page * 100}`);
    const items = list.items || [];
    const hit = items.find((p) => isOurs(p) && last10(p.contact) === phone);
    if (hit) return hit.id;
    if (items.length < 100) break;
  }
  return null;
}

module.exports = handle(async (req, res) => {
  if (req.method !== 'POST') return send(res, 405, { error: 'POST only' });
  const b = await body(req);
  const phone = last10(b.phone);
  if (phone.length < 10) return send(res, 400, { error: 'Enter your 10-digit phone number.' });
  if (store.configured()) {
    const [granted] = await store.pipeline([['HEXISTS', 'free', phone]]);
    if (granted) {
      const id = 'free:' + phone, dev = deviceIdFrom(b), claim = await claimDevice(id, dev, req, phone);
      if (!claim.ok) return send(res, 403, { error: claim.why });
      return send(res, 200, { ok: true, free: true, deviceId: dev }, { 'Set-Cookie': accessCookie(id, dev) });
    }
  }
  let pid = String(b.paymentId || '').trim();
  if (!pid) {
    pid = await findByPhone(phone);
    if (!pid) return send(res, 404, { error: 'No completed UPI payment found for that number. Check the number, or enter your payment ID too.' });
  }
  const chk = await checkPayment(pid); // confirms UPI, amount, product, captured
  if (!chk.ok) return send(res, 402, { error: chk.why });
  if (last10(chk.payment.contact) !== phone) return send(res, 403, { error: 'That phone number does not match this payment.' });
  const dev = deviceIdFrom(b), claim = await claimDevice(pid, dev, req, phone);
  if (!claim.ok) return send(res, 403, { error: claim.why });
  send(res, 200, { ok: true, deviceId: dev }, { 'Set-Cookie': accessCookie(pid, dev) });
});
