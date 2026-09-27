// POST /api/verify { razorpay_order_id, razorpay_payment_id, razorpay_signature } -> sets the access cookie
const { send, body, hmac, safeEqual, env, checkPayment, accessCookie, deviceIdFrom, claimDevice, handle } = require('./_lib');
module.exports = handle(async (req, res) => {
  if (req.method !== 'POST') return send(res, 405, { error: 'POST only' });
  const b = await body(req);
  const { razorpay_order_id: o, razorpay_payment_id: p, razorpay_signature: sig } = b;
  if (!o || !p || !sig) return send(res, 400, { error: 'Missing payment details.' });
  const expected = hmac(env('RAZORPAY_KEY_SECRET'), o + '|' + p).toString('hex');
  if (!safeEqual(expected, sig)) return send(res, 400, { error: 'Payment signature did not match.' });
  const chk = await checkPayment(p, o);
  if (!chk.ok) return send(res, 402, { error: chk.why });
  const dev = deviceIdFrom(b), claim = await claimDevice(p, dev, req);
  if (!claim.ok) return send(res, 403, { error: claim.why });
  send(res, 200, { ok: true, paymentId: p, deviceId: dev }, { 'Set-Cookie': accessCookie(p, dev) });
});
