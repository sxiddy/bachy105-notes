// POST /api/feedback { kind, topic?, tab?, text, contact?, website? } -> stores a "Help?" request or an "Any ideas?" idea
//   kind: 'mistake' (wrong in the notes) | 'suggestion' | 'bug' (something isn't working) | 'other' | 'idea'
// Both show up on the owner's page (/stats.html) with the student's email, so the owner can reply.
const { send, body, getUser, handle } = require('./_lib');
const store = require('./_store');
const crypto = require('crypto');

const KINDS = ['mistake', 'suggestion', 'bug', 'other', 'idea'];
const clean = (s, n) => String(s || '').split('').filter((ch) => ch.charCodeAt(0) >= 32 || ch === '\n').join('').trim().slice(0, n);

module.exports = handle(async (req, res) => {
  if (req.method !== 'POST') return send(res, 405, { error: 'POST only' });
  const b = await body(req);
  if (b.website) return send(res, 200, { ok: true }); // honeypot: bots fill hidden fields
  const text = clean(b.text, 1500);
  if (text.length < 5) return send(res, 400, { error: 'Please write a few words first.' });
  const u = getUser(req);
  const item = {
    id: crypto.randomBytes(6).toString('hex'),
    at: new Date().toISOString(),
    kind: KINDS.includes(b.kind) ? b.kind : 'mistake',
    topic: clean(b.topic, 60),
    tab: clean(b.tab, 120),
    text,
    email: u ? u.e : '',
    contact: clean(b.contact, 120),
  };
  console.log('[feedback]', JSON.stringify(item)); // always visible in Vercel → Logs
  if (store.configured()) {
    const key = `rl:fb:${u ? u.e : store.ipHash(req)}:${new Date().toISOString().slice(0, 13)}`;
    const [count] = await store.pipeline([['INCR', key], ['EXPIRE', key, 3600]]);
    if (count > 10) return send(res, 429, { error: 'Thanks! That is a lot of messages in one hour, please try again later.' });
    await store.pipeline([['LPUSH', 'feedback', JSON.stringify(item)], ['LTRIM', 'feedback', 0, 999]]);
  }
  send(res, 200, { ok: true, stored: store.configured() });
});
