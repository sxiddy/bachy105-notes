const fs = require('fs');
const out = [];
for (const f of fs.readdirSync('content').filter((f) => /^chunk-.*\.js$/.test(f))) {
  const t = fs.readFileSync('content/' + f, 'utf8');
  const re = /\{\s*id:\s*'([^']+)',[^]*?caption:\s*'((?:[^'\\]|\\.)*)',\s*alt:\s*'((?:[^'\\]|\\.)*)'/g;
  let m;
  while ((m = re.exec(t))) if (!fs.existsSync('figs-svg/' + m[1] + '.svg')) out.push([m[1], m[2], m[3]]);
}
fs.existsSync('tmp') && fs.writeFileSync('tmp/todo.json', JSON.stringify(out));
console.log(out.length, out.map((o) => o[0]).join(' '));
const n = +process.argv[2] || 0, k = +process.argv[3] || 0;
if (k) out.slice(n, n + k).forEach((o) => console.log('\n## ' + o[0] + '\nCAP: ' + o[1] + '\nALT: ' + o[2]));
