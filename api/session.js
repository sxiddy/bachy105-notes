// GET /api/session -> { paid, keyId, price }
const { send, readToken, PRICE, handle } = require('./_lib');
module.exports = handle(async (req, res) => {
  const t = readToken(req);
  send(res, 200, { paid: !!t, price: PRICE, keyId: process.env.RAZORPAY_KEY_ID || null, dev: process.env.DEV_BYPASS === '1' });
});
