// POST /api/logout -> signs the student out of this browser (their device slot stays theirs)
const { send, handle, clearUserCookie } = require('./_lib');
module.exports = handle(async (req, res) => {
  if (req.method !== 'POST') return send(res, 405, { error: 'POST only' });
  send(res, 200, { ok: true }, { 'Set-Cookie': clearUserCookie() });
});
