// POST /api/create-order -> Razorpay order at the current price (set on /stats.html, default PRICE_PAISE)
const { send, razorpay, settings, env, handle } = require('./_lib');
module.exports = handle(async (req, res) => {
  if (req.method !== 'POST') return send(res, 405, { error: 'POST only' });
  const { price } = await settings();
  if (!Number.isInteger(price) || price < 100) return send(res, 500, { error: 'The price must be at least ₹1.' });
  const order = await razorpay('POST', '/orders', {
    amount: price, currency: 'INR', receipt: 'bn_' + Date.now().toString(36),
    notes: { product: 'bachy105-notes' },
  });
  send(res, 200, { order_id: order.id, orderId: order.id, amount: order.amount, currency: order.currency, keyId: env('RAZORPAY_KEY_ID') });
});
