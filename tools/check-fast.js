// node tools/check-fast.js <repo>  — checks content/why-*.js and content/fast-*.js against the questions and topics.
const fs = require('fs'), path = require('path');
const C = path.resolve(process.argv[2], 'content');
const load = (f, name) => { let d; global[name] = (x) => { d = x; }; delete require.cache[path.join(C, f)]; require(path.join(C, f)); return d; };
const mods = JSON.parse(fs.readFileSync(path.join(C, 'modules.json'), 'utf8'));
let errors = 0; const err = (m) => { errors++; console.log('  ERROR ' + m); };
let nMcq = 0, nWhy = 0;
for (const m of mods) {
  const topics = [];
  for (const ch of m.chunks) { const p = `chunk-${ch}.js`; if (!fs.existsSync(path.join(C, p))) continue; const d = load(p, 'CHUNK'); (d.topics || []).forEach((t) => topics.push(t.id)); }
  const mcqs = {};
  for (const qf of [].concat(m.questions || [])) {
    const d = load(qf, 'QUESTIONS'); const wf = qf.replace(/^q-/, 'why-');
    const why = fs.existsSync(path.join(C, wf)) ? load(wf, 'WHY') : null;
    if (!why) err(`${wf} missing`);
    const ids = new Set();
    for (const q of d.questions.filter((q) => q.options)) {
      nMcq++; mcqs[q.id] = q; ids.add(q.id);
      const w = why && why[q.id];
      if (!w) { if (why) err(`${wf}: no reasons for ${q.id}`); continue; }
      nWhy++;
      if (!Array.isArray(w) || w.length !== q.options.length) { err(`${q.id}: ${w && w.length} reasons for ${q.options.length} options`); continue; }
      w.forEach((r, k) => {
        if (k === q.correct) { if (r !== '') err(`${q.id}: reason given at the correct index ${k}`); }
        else if (typeof r !== 'string' || r.trim().length < 15) err(`${q.id}: option ${'ABCD'[k]} reason missing/too short`);
        else if (r.length > 260) err(`${q.id}: option ${'ABCD'[k]} reason over 260 chars`);
      });
    }
    if (why) for (const id of Object.keys(why)) if (!ids.has(id)) err(`${wf}: ${id} is not an MCQ in ${qf}`);
  }
  const ff = `fast-${m.id}.js`;
  if (!fs.existsSync(path.join(C, ff))) { err(`${ff} missing`); continue; }
  const f = load(ff, 'FAST');
  if (f.module !== m.id) err(`${ff}: module ${f.module}`);
  const nf = (f.facts || []).length, nh = (f.hy || []).length, want = Math.min(10, Object.keys(mcqs).length);
  if (nf < 12 || nf > 18) err(`${ff}: ${nf} facts (12-18)`);
  (f.facts || []).forEach((x, i) => { if (!topics.includes(x.t)) err(`${ff}: fact ${i + 1} topic ${x.t} not in module`); if (!x.html || typeof x.star !== 'boolean') err(`${ff}: fact ${i + 1} malformed`); });
  const lo = Math.ceil(topics.length * 0.3), hi = Math.floor(topics.length * 0.4);
  if (nh < Math.min(lo, hi) || nh > Math.max(lo, hi)) err(`${ff}: ${nh} hy of ${topics.length} topics (want ${lo}-${hi})`);
  (f.hy || []).forEach((t) => { if (!topics.includes(t)) err(`${ff}: hy ${t} not a topic of ${m.id}`); });
  if (new Set(f.hy).size !== nh) err(`${ff}: duplicate hy`);
  if ((f.mcqs || []).length !== want) err(`${ff}: ${(f.mcqs || []).length} MCQs (want ${want})`);
  (f.mcqs || []).forEach((id) => { if (!mcqs[id]) err(`${ff}: ${id} is not an MCQ of ${m.id}`); });
  if (new Set(f.mcqs).size !== (f.mcqs || []).length) err(`${ff}: duplicate MCQ ids`);
  if (!(f.minutes > 0)) err(`${ff}: minutes`);
  console.log(`${m.id}: ${Object.keys(mcqs).length} MCQs · ${nf} facts (${(f.facts || []).filter((x) => x.star).length} starred) · hy ${nh}/${topics.length} topics · ${(f.mcqs || []).length} fast MCQs · ${f.minutes} min`);
}
console.log(`\n${nWhy}/${nMcq} MCQs with reasons · ${errors} error(s)`);
process.exitCode = errors ? 1 : 0;
