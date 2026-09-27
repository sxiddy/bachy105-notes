// POST /api/restore { paymentId, phone } -> re-issues access on a new browser/device
const { send, body, checkPayment, accessCookie, handle } = require('./_lib');
module.exports = handle(async (req, res) => {
  if (req.method !== 'POST') return send(res, 405, { error: 'POST only' });
  const b = await body(req);
  const pid = String(b.paymentId || '').trim(), phone = String(b.phone || '').replace(/\D/g, '');
  if (phone.length < 10) return send(res, 400, { error: 'Enter the 10-digit phone number you paid with.' });
  const chk = await checkPayment(pid);
  if (!chk.ok) return send(res, 402, { error: chk.why });
  const contact = String(chk.payment.contact || '').replace(/\D/g, '');
  if (!contact.endsWith(phone.slice(-10))) return send(res, 403, { error: 'That phone number does not match this payment.' });
  send(res, 200, { ok: true }, { 'Set-Cookie': accessCookie(pid) });
});
