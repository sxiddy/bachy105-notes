// POST /api/login { credential, deviceId } -> signs a student in with their Google account.
// Only @<STUDENT_DOMAIN> (default vitstudent.ac.in) accounts are accepted, so staff and personal accounts are refused.
// The device limit (1 phone + 1 laptop/PC unless the owner changed it) is applied here.
// Local testing only: with DEV_LOGIN=1 (never on Vercel) { devEmail } signs in without Google.
const { send, body, handle, verifyGoogle, isStudentEmail, normEmail, deviceIdFrom, claimDevice, userCookie, DOMAIN } = require('./_lib');

module.exports = handle(async (req, res) => {
  if (req.method !== 'POST') return send(res, 405, { error: 'POST only' });
  const b = await body(req);
  let email;
  if (process.env.DEV_LOGIN === '1' && !process.env.VERCEL && b.devEmail) email = normEmail(b.devEmail);
  else {
    const g = await verifyGoogle(b.credential);
    if (g.hd && g.hd !== DOMAIN) return send(res, 403, { error: `Please use your VIT student account (…@${DOMAIN}).` });
    email = g.email;
  }
  if (!isStudentEmail(email)) return send(res, 403, { error: `Only VIT student accounts (…@${DOMAIN}) can use this site. You signed in as ${email}.` });
  const dev = deviceIdFrom(b), claim = await claimDevice(email, dev, req);
  if (!claim.ok) return send(res, 403, { error: claim.why });
  send(res, 200, { ok: true, email }, { 'Set-Cookie': userCookie(email, dev) });
});
