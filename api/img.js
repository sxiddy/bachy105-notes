// GET /img/<id>.webp (rewritten to /api/img?f=<id>.webp) -> figures. Signed-in VIT students (or the owner) only;
// free modules (content/modules.json) need nothing more, the rest need payment or free access.
const fs = require('fs'), path = require('path');
const { hasAccess, getUser, isOwner, handle } = require('./_lib');
const { freeModules } = require('./_access.json');
module.exports = handle(async (req, res) => {
  const f = new URL(req.url, 'http://x').searchParams.get('f') || '';
  if (!/^m\d+-[a-z0-9-]+\.webp$/.test(f)) { res.statusCode = 404; return res.end('not found'); }
  const deny = (code) => { res.statusCode = code; res.setHeader('Cache-Control', 'no-store'); return res.end(); };
  if (!getUser(req) && !isOwner(req)) return deny(401);
  const mod = f.split('-')[0], free = freeModules.includes(mod);
  if (!free) { const t = await hasAccess(req); if (!t || (t.modules && !t.modules.includes(mod))) return deny(402); }
  const p = path.join(process.cwd(), 'protected', 'img', f);
  if (!fs.existsSync(p)) { res.statusCode = 404; return res.end('not found'); }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/webp');
  res.setHeader('Cache-Control', 'private, max-age=86400');
  res.end(fs.readFileSync(p));
});
