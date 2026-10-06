// node tools/figs/wire.js <spec.json>: for each {file, after, id, caption, alt} insert <figure data-fig> after the line
// containing `after` (must be unique in the file) and append { id, src: null, caption, alt } to that file's figures[].
const fs = require('fs');
const spec = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const q = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
for (const f of spec) {
  const p = 'content/' + f.file;
  let t = fs.readFileSync(p, 'utf8');
  if (t.split(f.after).length !== 2) throw new Error('anchor not unique/found: ' + f.after);
  const i = t.indexOf(f.after), e = t.indexOf('\n', i);
  const indent = (t.slice(t.lastIndexOf('\n', i) + 1, i).match(/^\s*/) || [''])[0];
  t = t.slice(0, e + 1) + `${indent}<figure data-fig="${f.id}"></figure>\n` + t.slice(e + 1);
  const entry = `    { id: '${f.id}', src: null, crop: null,\n      caption: '${q(f.caption)}',\n      alt: '${q(f.alt)}' }`;
  if (/figures: \[\]/.test(t)) t = t.replace('figures: []', `figures: [\n${entry}\n  ]`);
  else t = t.replace(/(figures: \[[^]*?)(\n  \]\n\}\);\s*)$/, `$1,\n${entry}$2`);
  fs.writeFileSync(p, t);
}
