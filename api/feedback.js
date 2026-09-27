// POST /api/feedback { topic, tab, text, contact?, website? } -> stores a "found a mistake" report
const { send, body, handle } = require('./_lib');
const store = require('./_store');

module.exports = handle(async (req, res) => {
  if (req.method !== 'POST') return send(res, 405, { error: 'POST only' });
  const b = await body(req);
  if (b.website) return send(res, 200, { ok: true }); // honeypot: bots fill hidden fields
  const text = String(b.text || '').trim().slice(0, 1500);
  if (text.length < 5) return send(res, 400, { error: 'Please describe the problem in a few words.' });
  const item = {
    at: new Date().toISOString(),
    topic: String(b.topic || '').slice(0, 60),
    tab: String(b.tab || '').slice(0, 120),
    text,
    contact: String(b.contact || '').trim().slice(0, 120),
  };
  console.log('[feedback]', JSON.stringify(item)); // always visible in Vercel → Logs
  if (store.configured()) {
    const key = `rl:fb:${store.ipHash(req)}:${new Date().toISOString().slice(0, 13)}`;
    const [count] = await store.pipeline([['INCR', key], ['EXPIRE', key, 3600]]);
    if (count > 10) return send(res, 429, { error: 'Thanks. That is a lot of reports in one hour, please try again later.' });
    await store.pipeline([['LPUSH', 'feedback', JSON.stringify(item)], ['LTRIM', 'feedback', 0, 499]]);
  }
  send(res, 200, { ok: true, stored: store.configured() });
});
