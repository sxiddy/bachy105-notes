// POST /api/create-order -> Razorpay order for the fixed price
const { send, razorpay, PRICE, env, handle } = require('./_lib');
module.exports = handle(async (req, res) => {
  if (req.method !== 'POST') return send(res, 405, { error: 'POST only' });
  if (!Number.isInteger(PRICE) || PRICE < 100) return send(res, 500, { error: 'PRICE_PAISE must be at least 100 paise.' });
  const order = await razorpay('POST', '/orders', {
    amount: PRICE, currency: 'INR', receipt: 'bn_' + Date.now().toString(36),
    notes: { product: 'bachy105-notes' },
  });
  send(res, 200, { order_id: order.id, orderId: order.id, amount: order.amount, currency: order.currency, keyId: env('RAZORPAY_KEY_ID') });
});
