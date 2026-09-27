// Owner-only stats. Send the ADMIN_KEY (Vercel env var) in the "x-admin-key" header.
//   GET  /api/stats                                 -> payments, visits, topic views, feedback
//   POST /api/stats { action: 'reset-devices', phone } -> frees the phone + PC device slots for that phone's payments
//   POST /api/stats { action: 'grant', phone, name? } / { action: 'revoke', phone } -> free-access list
//   POST /api/stats { action: 'set-limits', phone, phones, pcs } / { action: 'clear-limits', phone } -> custom device limits
//   POST /api/stats { action: 'unlock-me' } -> owner access cookie on this browser (no device limit)
const { send, body, env, safeEqual, razorpay, PRICE, MAX_DEVICES, deviceKeys, last10, accessCookie, parseLimits, handle } = require('./_lib');
const store = require('./_store');

async function paidPayments(pages) {
  const from = Math.floor(Date.now() / 1000) - 400 * 24 * 3600, out = [];
  for (let page = 0; page < pages; page++) {
    const list = await razorpay('GET', `/payments?from=${from}&count=100&skip=${page * 100}`);
    const items = list.items || [];
    out.push(...items.filter((p) => p.status === 'captured' && p.method === 'upi' && p.amount === PRICE));
    if (items.length < 100) break;
  }
  return out;
}

module.exports = handle(async (req, res) => {
  const key = req.headers['x-admin-key'] || '';
  if (!key || !safeEqual(key, env('ADMIN_KEY'))) return send(res, 401, { error: 'Wrong admin key.' });

  if (req.method === 'POST') {
    const b = await body(req);
    if (b.action === 'unlock-me') return send(res, 200, { ok: true }, { 'Set-Cookie': accessCookie('owner', null) });
    if (!['reset-devices', 'grant', 'revoke', 'set-limits', 'clear-limits'].includes(b.action)) return send(res, 400, { error: 'Unknown action.' });
    const phone = last10(b.phone);
    if (phone.length < 10) return send(res, 400, { error: 'Enter a 10-digit phone number.' });
    if (!store.configured()) return send(res, 400, { error: 'Storage is not set up yet (Vercel → Storage → Upstash).' });
    if (b.action === 'grant') {
      const item = { name: String(b.name || '').trim().slice(0, 60), at: new Date().toISOString() };
      await store.pipeline([['HSET', 'free', phone, JSON.stringify(item)]]);
      return send(res, 200, { ok: true });
    }
    if (b.action === 'revoke') {
      await store.pipeline([['HDEL', 'free', phone], ['DEL', ...deviceKeys('free:' + phone)]]);
      return send(res, 200, { ok: true });
    }
    if (b.action === 'set-limits') {
      const n = (v) => parseInt(v, 10);
      const lim = { phone: n(b.phones), pc: n(b.pcs) };
      if (![lim.phone, lim.pc].every((x) => Number.isInteger(x) && x >= 0 && x <= 20)) return send(res, 400, { error: 'Use whole numbers from 0 to 20.' });
      await store.pipeline([['HSET', 'limits', phone, JSON.stringify(lim)]]);
      return send(res, 200, { ok: true });
    }
    if (b.action === 'clear-limits') {
      await store.pipeline([['HDEL', 'limits', phone]]);
      return send(res, 200, { ok: true });
    }
    const mine = (await paidPayments(20)).filter((p) => last10(p.contact) === phone).map((p) => p.id);
    const [isFree] = await store.pipeline([['HEXISTS', 'free', phone]]);
    if (isFree) mine.push('free:' + phone);
    if (!mine.length) return send(res, 404, { error: 'No payment or free access found for that number.' });
    await store.pipeline(mine.map((id) => ['DEL', ...deviceKeys(id)]));
    return send(res, 200, { ok: true, reset: mine.length });
  }

  const pays = await paidPayments(10);
  const byDay = {};
  pays.forEach((p) => { const d = new Date(p.created_at * 1000).toISOString().slice(0, 10); byDay[d] = (byDay[d] || 0) + 1; });
  let visits = null, views = null, feedback = null, devices = null, free = [], limits = [];
  if (store.configured()) {
    const [v, w, f, fr, lm] = await store.pipeline([['HGETALL', 'visits'], ['HGETALL', 'views'], ['LRANGE', 'feedback', 0, 99], ['HGETALL', 'free'], ['HGETALL', 'limits']]);
    for (let i = 0; lm && i < lm.length; i += 2) { const l = parseLimits(lm[i + 1]); limits.push({ number: lm[i], phones: l.phone, pcs: l.pc }); }
    visits = store.pairs(v); views = store.pairs(w);
    for (let i = 0; fr && i < fr.length; i += 2) { let x = {}; try { x = JSON.parse(fr[i + 1]); } catch (e) {} free.push({ phone: fr[i], name: x.name || '', at: x.at || '' }); }
    free.sort((a, b) => (b.at > a.at ? 1 : -1));
    feedback = (f || []).map((x) => { try { return JSON.parse(x); } catch (e) { return { text: String(x) }; } });
    const recent = pays.slice(0, 50), keys = recent.flatMap((p) => deviceKeys(p.id));
    const counts = keys.length ? await store.pipeline(keys.map((k) => ['SCARD', k])) : [];
    devices = recent.filter((p, i) => counts.slice(i * MAX_DEVICES, (i + 1) * MAX_DEVICES).every((c) => c >= 1)).length;
  }
  send(res, 200, {
    storage: store.configured(),
    maxDevices: MAX_DEVICES,
    payments: {
      count: pays.length,
      revenue: pays.reduce((a, p) => a + p.amount, 0) / 100,
      fees: pays.reduce((a, p) => a + (p.fee || 0), 0) / 100,
      byDay,
      recent: pays.slice(0, 15).map((p) => ({ at: new Date(p.created_at * 1000).toISOString(), phone: '••••••' + last10(p.contact).slice(-4), id: p.id })),
    },
    visits, views, feedback, fullDeviceSlots: devices, free, limits,
  });
});
