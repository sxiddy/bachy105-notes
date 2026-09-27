// Owner-only stats. Send the ADMIN_KEY (Vercel env var) in the "x-admin-key" header.
//   GET  /api/stats                                 -> payments, visits, topic views, feedback
//   POST /api/stats { action: 'reset-devices', phone } -> frees the phone + PC device slots for that phone's payments
const { send, body, env, safeEqual, razorpay, PRICE, MAX_DEVICES, deviceKeys, handle } = require('./_lib');
const store = require('./_store');

const last10 = (s) => String(s || '').replace(/\D/g, '').slice(-10);

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
    if (b.action !== 'reset-devices') return send(res, 400, { error: 'Unknown action.' });
    const phone = last10(b.phone);
    if (phone.length < 10) return send(res, 400, { error: 'Enter a 10-digit phone number.' });
    if (!store.configured()) return send(res, 400, { error: 'Storage is not set up, so device limits are not active yet.' });
    const mine = (await paidPayments(20)).filter((p) => last10(p.contact) === phone);
    if (!mine.length) return send(res, 404, { error: 'No paid payment found for that number.' });
    await store.pipeline(mine.map((p) => ['DEL', ...deviceKeys(p.id)]));
    return send(res, 200, { ok: true, reset: mine.length });
  }

  const pays = await paidPayments(10);
  const byDay = {};
  pays.forEach((p) => { const d = new Date(p.created_at * 1000).toISOString().slice(0, 10); byDay[d] = (byDay[d] || 0) + 1; });
  let visits = null, views = null, feedback = null, devices = null;
  if (store.configured()) {
    const [v, w, f] = await store.pipeline([['HGETALL', 'visits'], ['HGETALL', 'views'], ['LRANGE', 'feedback', 0, 99]]);
    visits = store.pairs(v); views = store.pairs(w);
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
    visits, views, feedback, fullDeviceSlots: devices,
  });
});
