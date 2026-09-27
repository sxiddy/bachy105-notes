// Owner-only admin API. Send the ADMIN_KEY (Vercel env var) in the "x-admin-key" header.
//   GET  /api/stats -> payments, visits, topic views, funnel, quiz + "Confusing?" insights, feedback, lists, settings
//   POST /api/stats { action, ... }:
//     unlock-me                          owner access cookie on this browser (no device limit)
//     lookup { email }                   everything about one student: payments, free access, limits, devices
//     grant { email, name?, modules? }   free access (modules: ['m3'] for one module, empty/absent = all)
//     revoke { email }                   remove free access
//     set-limits { email, phones, pcs }  custom device limits;  clear-limits { email }  back to 1 + 1
//     reset-devices { email }            free that student's device slots
//     set-price { rupees }               price for new payments
//     set-banner { text, on }            announcement shown at the top of the site
//     feedback-status { id, status }     mark a mistake report open / fixed / ignored
const crypto = require('crypto');
const { send, body, env, safeEqual, razorpay, isOurs, settings, MAX_DEVICES, deviceKeys, normEmail, isStudentEmail, DOMAIN, ownerCookie, parseLimits, handle } = require('./_lib');
const store = require('./_store');
const { paidModules = [] } = require('./_access.json');

async function paidPayments(pages) {
  const from = Math.floor(Date.now() / 1000) - 400 * 24 * 3600, out = [];
  for (let page = 0; page < pages; page++) {
    const list = await razorpay('GET', `/payments?from=${from}&count=100&skip=${page * 100}`);
    const items = list.items || [];
    out.push(...items.filter(isOurs));
    if (items.length < 100) break;
  }
  return out;
}
const iso = (sec) => new Date(sec * 1000).toISOString();
const feedbackId = (x) => x.id || crypto.createHash('sha1').update(String(x.at) + '|' + String(x.text)).digest('hex').slice(0, 12);
const parseJSON = (s, d) => { try { return JSON.parse(s) ?? d; } catch (e) { return d; } };
const lastDays = (n) => Array.from({ length: n }, (_, i) => new Date(Date.now() - i * 864e5).toISOString().slice(0, 10));

module.exports = handle(async (req, res) => {
  const key = req.headers['x-admin-key'] || '';
  if (!key || !safeEqual(key, env('ADMIN_KEY'))) return send(res, 401, { error: 'Wrong admin key.' });

  if (req.method === 'POST') {
    const b = await body(req);
    const a = b.action;
    if (a === 'unlock-me') return send(res, 200, { ok: true }, { 'Set-Cookie': ownerCookie() });
    if (!store.configured()) return send(res, 400, { error: 'Storage is not set up yet (Vercel → Storage → Upstash).' });

    if (a === 'set-price') {
      const rs = Number(b.rupees);
      if (!Number.isInteger(rs) || rs < 1 || rs > 5000) return send(res, 400, { error: 'Enter a whole number of rupees, from 1 to 5000.' });
      await store.pipeline([['HSET', 'config', 'price', String(rs * 100)]]);
      return send(res, 200, { ok: true });
    }
    if (a === 'set-banner') {
      const text = String(b.text || '').trim().slice(0, 240);
      if (b.on && !text) return send(res, 400, { error: 'Type the announcement first.' });
      const prev = parseJSON((await store.pipeline([['HGET', 'config', 'banner']]))[0], {}) || {};
      const id = text && text === prev.text ? prev.id : crypto.randomBytes(4).toString('hex'); // new text shows again to people who closed the old one
      await store.pipeline([['HSET', 'config', 'banner', JSON.stringify({ id, text, on: !!b.on })]]);
      return send(res, 200, { ok: true });
    }
    if (a === 'feedback-status') {
      const id = String(b.id || '');
      if (!/^[a-f0-9]{6,16}$/.test(id) || !['open', 'fixed', 'ignored'].includes(b.status)) return send(res, 400, { error: 'Bad report id or status.' });
      await store.pipeline([b.status === 'open' ? ['HDEL', 'feedbackStatus', id] : ['HSET', 'feedbackStatus', id, b.status]]);
      return send(res, 200, { ok: true });
    }

    if (!['lookup', 'reset-devices', 'grant', 'revoke', 'set-limits', 'clear-limits'].includes(a)) return send(res, 400, { error: 'Unknown action.' });
    const email = normEmail(b.email);
    if (!isStudentEmail(email)) return send(res, 400, { error: `Enter a VIT student email (…@${DOMAIN}).` });

    if (a === 'grant') {
      const ids = paidModules.map((m) => m.id);
      const mods = Array.isArray(b.modules) ? b.modules.filter((m) => ids.includes(m)) : [];
      const item = { name: String(b.name || '').trim().slice(0, 60), at: new Date().toISOString(), modules: mods.length && mods.length < ids.length ? mods : null };
      await store.pipeline([['HSET', 'free', email, JSON.stringify(item)]]);
      return send(res, 200, { ok: true });
    }
    if (a === 'revoke') {
      await store.pipeline([['HDEL', 'free', email]]);
      return send(res, 200, { ok: true });
    }
    if (a === 'set-limits') {
      const n = (v) => parseInt(v, 10);
      const lim = { phone: n(b.phones), pc: n(b.pcs) };
      if (![lim.phone, lim.pc].every((x) => Number.isInteger(x) && x >= 0 && x <= 20)) return send(res, 400, { error: 'Use whole numbers from 0 to 20.' });
      await store.pipeline([['HSET', 'limits', email, JSON.stringify(lim)]]);
      return send(res, 200, { ok: true });
    }
    if (a === 'clear-limits') {
      await store.pipeline([['HDEL', 'limits', email]]);
      return send(res, 200, { ok: true });
    }
    if (a === 'reset-devices') {
      await store.pipeline([['DEL', ...deviceKeys(email)]]);
      return send(res, 200, { ok: true });
    }

    // lookup
    const mine = (await paidPayments(20)).filter((p) => normEmail((p.notes || {}).email) === email);
    const [paidRaw, freeRaw, limRaw, ...counts] = await store.pipeline([['HGET', 'paid', email], ['HGET', 'free', email], ['HGET', 'limits', email], ...deviceKeys(email).map((k) => ['SCARD', k])]);
    const pd = paidRaw != null ? parseJSON(paidRaw, {}) : null;
    const fr = freeRaw != null ? parseJSON(freeRaw, {}) : null;
    const lim = parseLimits(limRaw);
    const payments = mine.map((p) => ({ id: p.id, at: iso(p.created_at), amount: p.amount / 100 }));
    if (pd && pd.id && !payments.some((p) => p.id === pd.id)) payments.push({ id: pd.id, at: pd.at, amount: (pd.amount || 0) / 100 }); // e.g. an older payment claimed by ID
    return send(res, 200, {
      email,
      paid: !!pd,
      payments,
      free: fr ? { name: fr.name || '', at: fr.at || '', modules: fr.modules || null } : null,
      limits: { phones: lim.phone, pcs: lim.pc, custom: limRaw != null },
      devices: { phones: counts[0] || 0, pcs: counts[1] || 0 },
    });
  }

  const [pays, cfg] = await Promise.all([paidPayments(10), settings()]);
  const byDay = {};
  pays.forEach((p) => { const d = iso(p.created_at).slice(0, 10); byDay[d] = (byDay[d] || 0) + 1; });
  let visits = null, views = null, feedback = null, free = [], limits = [], quiz = [], confusing = [], funnel = null, banner = null;
  if (store.configured()) {
    const [v, w, f, fr, lm, qz, ql, cf, cl, fn, fs, bn] = await store.pipeline([
      ['HGETALL', 'visits'], ['HGETALL', 'views'], ['LRANGE', 'feedback', 0, 199], ['HGETALL', 'free'], ['HGETALL', 'limits'],
      ['HGETALL', 'quiz'], ['HGETALL', 'quizLabel'], ['HGETALL', 'confusing'], ['HGETALL', 'confusingLabel'], ['HGETALL', 'funnel'],
      ['HGETALL', 'feedbackStatus'], ['HGET', 'config', 'banner'],
    ]);
    visits = store.pairs(v); views = store.pairs(w);
    for (let i = 0; lm && i < lm.length; i += 2) { const l = parseLimits(lm[i + 1]); limits.push({ email: lm[i], phones: l.phone, pcs: l.pc }); }
    for (let i = 0; fr && i < fr.length; i += 2) { const x = parseJSON(fr[i + 1], {}) || {}; free.push({ email: fr[i], name: x.name || '', at: x.at || '', modules: x.modules || null }); }
    free.sort((a, b) => (b.at > a.at ? 1 : -1));
    const status = store.pairs(fs);
    feedback = (f || []).map((x) => { const it = parseJSON(x, { text: String(x) }) || {}; const id = feedbackId(it); return { ...it, id, status: status[id] || 'open' }; });

    // quiz: most-missed questions (at least 3 answers)
    const qc = store.pairs(qz), qlab = store.pairs(ql), qs = {};
    for (const k in qc) { const [id, rw] = k.split(':'); (qs[id] = qs[id] || { id, right: 0, wrong: 0 })[rw === 'r' ? 'right' : 'wrong'] += +qc[k] || 0; }
    quiz = Object.values(qs).map((q) => ({ ...q, total: q.right + q.wrong, label: qlab[q.id] || q.id }))
      .filter((q) => q.total >= 3).sort((a, b) => b.wrong / b.total - a.wrong / a.total || b.total - a.total).slice(0, 20);
    const answered = Object.values(qs).reduce((n, q) => n + q.right + q.wrong, 0);
    quiz = { top: quiz, answered, questions: Object.keys(qs).length };

    const cc = store.pairs(cf), clab = store.pairs(cl);
    confusing = Object.keys(cc).map((k) => ({ key: k, count: +cc[k] || 0, label: clab[k] || k })).filter((c) => c.count > 0).sort((a, b) => b.count - a.count).slice(0, 20);

    const fnl = store.pairs(fn), days = lastDays(30);
    funnel = { visitors: 0, paywall: 0, start: 0, paid: 0 };
    days.forEach((d) => { funnel.visitors += +(visits[d] || 0); ['paywall', 'start', 'paid'].forEach((s) => { funnel[s] += +(fnl[d + ':' + s] || 0); }); });
    banner = parseJSON(bn, null);
  }
  send(res, 200, {
    storage: store.configured(),
    maxDevices: MAX_DEVICES,
    paidModules,
    price: cfg.price / 100,
    banner,
    payments: {
      count: pays.length,
      revenue: pays.reduce((a, p) => a + p.amount, 0) / 100,
      fees: pays.reduce((a, p) => a + (p.fee || 0), 0) / 100,
      byDay,
      recent: pays.slice(0, 15).map((p) => ({ at: iso(p.created_at), email: normEmail((p.notes || {}).email) || '(before sign-in)', id: p.id, amount: p.amount / 100 })),
    },
    visits, views, feedback, free, limits, quiz, confusing, funnel,
  });
});
