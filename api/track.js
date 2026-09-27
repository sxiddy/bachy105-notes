// POST /api/track { topic } or { visit: true } -> anonymous counters (no personal data stored)
//   topic: +1 to that topic's open count     visit: +1 to today's visitor count (sent once per browser per day)
const { send, body, handle } = require('./_lib');
const store = require('./_store');

module.exports = handle(async (req, res) => {
  if (req.method !== 'POST') return send(res, 405, { error: 'POST only' });
  if (!store.configured()) return send(res, 200, { ok: true, stored: false });
  const b = await body(req);
  const cmds = [];
  if (b.visit) cmds.push(['HINCRBY', 'visits', store.today(), 1]);
  const topic = String(b.topic || '');
  if (/^m[0-9]+-[a-z0-9-]{2,60}$/.test(topic)) cmds.push(['HINCRBY', 'views', topic, 1]);
  if (cmds.length) await store.pipeline(cmds);
  send(res, 200, { ok: true });
});
