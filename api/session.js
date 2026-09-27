// GET /api/session -> { paid, keyId, price, owner, free }
const { send, hasAccess, PRICE, handle } = require('./_lib');
module.exports = handle(async (req, res) => {
  const t = await hasAccess(req);
  const p = t ? String(t.p) : '';
  send(res, 200, { paid: !!t, owner: p === 'owner', free: p.startsWith('free:'), price: PRICE, keyId: process.env.RAZORPAY_KEY_ID || null, dev: process.env.DEV_BYPASS === '1' });
});
