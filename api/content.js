// GET /data/<file>.js (rewritten to /api/content?f=<file>) -> notes, questions, summaries and paid diagram code.
// Free modules (content/modules.json) are open to everyone; everything else needs payment.
const fs = require('fs'), path = require('path');
const { hasAccess, handle } = require('./_lib');
const FREE = new Set(require('./_access.json').freeFiles);
module.exports = handle(async (req, res) => {
  const f = new URL(req.url, 'http://x').searchParams.get('f') || '';
  if (!/^((chunk|q|summary|viz)-[A-Za-z0-9]+|figs)\.js$/.test(f)) { res.statusCode = 404; return res.end('not found'); }
  if (!FREE.has(f) && !(await hasAccess(req))) { res.statusCode = 402; res.setHeader('Cache-Control', 'no-store'); return res.end('/* payment required */'); }
  const p = path.join(process.cwd(), 'protected', 'data', f);
  if (!fs.existsSync(p)) { res.statusCode = 404; return res.end('not found'); }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/javascript; charset=utf-8');
  res.setHeader('Cache-Control', FREE.has(f) ? 'public, max-age=300' : 'private, max-age=3600');
  res.end(fs.readFileSync(p));
});
