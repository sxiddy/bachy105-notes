// GET /img/<id>.webp (rewritten to /api/img?f=<id>.webp) -> figures; free modules (content/modules.json) for everyone, the rest paid only
const fs = require('fs'), path = require('path');
const { readToken, handle } = require('./_lib');
const { freeModules } = require('./_access.json');
module.exports = handle(async (req, res) => {
  const f = new URL(req.url, 'http://x').searchParams.get('f') || '';
  if (!/^m\d+-[a-z0-9-]+\.webp$/.test(f)) { res.statusCode = 404; return res.end('not found'); }
  const free = freeModules.includes(f.split('-')[0]);
  if (!free && !readToken(req)) { res.statusCode = 402; res.setHeader('Cache-Control', 'no-store'); return res.end(); }
  const p = path.join(process.cwd(), 'protected', 'img', f);
  if (!fs.existsSync(p)) { res.statusCode = 404; return res.end('not found'); }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/webp');
  res.setHeader('Cache-Control', free ? 'public, max-age=86400' : 'private, max-age=86400');
  res.end(fs.readFileSync(p));
});
