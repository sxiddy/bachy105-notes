// POST /api/verify-payment { razorpay_order_id, razorpay_payment_id, razorpay_signature }
// Checks Razorpay's signature and the payment itself, then records it against the signed-in student's email.
const { send, body, hmac, safeEqual, env, checkPayment, recordPaid, getUser, handle } = require('./_lib');
const store = require('./_store');
module.exports = handle(async (req, res) => {
  if (req.method !== 'POST') return send(res, 405, { error: 'POST only' });
  const u = getUser(req);
  if (!u) return send(res, 401, { error: 'Please sign in with your VIT student account first.' });
  const b = await body(req);
  const { razorpay_order_id: o, razorpay_payment_id: p, razorpay_signature: sig } = b;
  if (!o || !p || !sig) return send(res, 400, { error: 'Missing payment details.' });
  const expected = hmac(env('RAZORPAY_KEY_SECRET'), o + '|' + p).toString('hex');
  if (!safeEqual(expected, sig)) return send(res, 400, { error: 'Payment signature did not match.' });
  const chk = await checkPayment(p, o);
  if (!chk.ok) return send(res, 402, { error: chk.why });
  if (chk.email !== u.e) return send(res, 403, { error: 'This payment was made from a different account.' });
  await recordPaid(u.e, chk.payment);
  if (store.configured()) await store.pipeline([['HINCRBY', 'funnel', store.today() + ':paid', 1]]).catch(() => {});
  send(res, 200, { ok: true, paymentId: p });
});
