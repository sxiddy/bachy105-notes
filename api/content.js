// GET /data/<file>.js (rewritten to /api/content?f=<file>) -> protected notes, paid users only
const fs = require('fs'), path = require('path');
const { readToken, handle } = require('./_lib');
module.exports = handle(async (req, res) => {
  const f = new URL(req.url, 'http://x').searchParams.get('f') || '';
  if (!/^((chunk|q|summary)-[A-Za-z0-9]+|figs)\.js$/.test(f)) { res.statusCode = 404; return res.end('not found'); }
  if (!readToken(req)) { res.statusCode = 402; res.setHeader('Cache-Control', 'no-store'); return res.end('/* payment required */'); }
  const buf = fs.readFileSync(path.join(process.cwd(), 'protected', 'data', f));
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/javascript; charset=utf-8');
  res.setHeader('Cache-Control', 'private, max-age=3600');
  res.end(buf);
});
