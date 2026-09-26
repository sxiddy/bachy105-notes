#!/usr/bin/env node
// Assemble the app.
//   node tools/build.js          -> app/index.html (local, separate files) + publish/index.html (single page, inline CSS/JS) + publish/img
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const APP = path.join(ROOT, 'app');
const PUB = path.join(ROOT, 'publish');
const CONTENT = path.join(ROOT, 'content');

const TITLE = 'BACHY105 Notes';
const FONTS = 'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;0,8..60,600;1,8..60,400;1,8..60,500&display=swap';

fs.mkdirSync(path.join(APP, 'data'), { recursive: true });
for (const f of fs.readdirSync(path.join(APP, 'data'))) fs.unlinkSync(path.join(APP, 'data', f));

const order = (f) => (f.startsWith('chunk-') ? 0 : f.startsWith('q-') ? 1 : f.startsWith('summary-') ? 2 : 3);
const contentFiles = fs.existsSync(CONTENT)
  ? fs.readdirSync(CONTENT).filter((f) => /^(chunk|q|summary)-[A-Za-z0-9]+\.js$/.test(f)).sort((a, b) => order(a) - order(b) || a.localeCompare(b))
  : [];
for (const f of contentFiles) fs.copyFileSync(path.join(CONTENT, f), path.join(APP, 'data', f));

// figure dimensions
const dims = {};
for (const f of fs.readdirSync(path.join(APP, 'img')).filter((f) => /^manifest-.*\.json$/.test(f))) {
  Object.assign(dims, JSON.parse(fs.readFileSync(path.join(APP, 'img', f), 'utf8')));
}
fs.writeFileSync(path.join(APP, 'data', 'figs.js'), `FIGDIMS(${JSON.stringify(dims)});\n`);

const vizFiles = fs.existsSync(path.join(APP, 'js', 'viz')) ? fs.readdirSync(path.join(APP, 'js', 'viz')).filter((f) => /\.js$/.test(f)).sort() : [];
const scripts = [
  'js/boot.js',
  ...contentFiles.map((f) => 'data/' + f),
  'data/figs.js',
  'js/viz-core.js',
  ...vizFiles.map((f) => 'js/viz/' + f),
  'js/app.js',
];

const head = `<title>${TITLE}</title>
<meta name="description" content="Applied Chemistry (BACHY105) modules 2–4 as tabbed study notes with slide diagrams, interactive models and scenario questions.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${FONTS}">`;

// local version
const local = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
${head}
<link rel="stylesheet" href="css/app.css">
</head>
<body>
<div id="app"></div>
${scripts.map((s) => `<script src="${s}"></script>`).join('\n')}
</body>
</html>
`;
fs.writeFileSync(path.join(APP, 'index.html'), local);

// publish version: a page fragment (the host adds doctype/html/head/body), CSS + JS inline, images as files
fs.rmSync(PUB, { recursive: true, force: true });
fs.mkdirSync(path.join(PUB, 'img'), { recursive: true });
const css = fs.readFileSync(path.join(APP, 'css', 'app.css'), 'utf8');
const safe = (s) => s.replace(/<\/script/gi, '<\\/script');
const js = scripts.map((s) => `/* ${s} */\n` + safe(fs.readFileSync(path.join(APP, s), 'utf8'))).join('\n;\n');
const pub = `${head}
<style>
${css}
</style>
<div id="app"></div>
<script>
${js}
</script>
`;
fs.writeFileSync(path.join(PUB, 'index.html'), pub);

// copy only the figures that exist in content
let figCount = 0, figBytes = 0;
const wanted = new Set(Object.keys(dims));
for (const f of fs.readdirSync(path.join(APP, 'img')).filter((f) => f.endsWith('.webp'))) {
  if (!wanted.has(f.replace(/\.webp$/, ''))) continue;
  fs.copyFileSync(path.join(APP, 'img', f), path.join(PUB, 'img', f));
  figCount++; figBytes += fs.statSync(path.join(APP, 'img', f)).size;
}
console.log(`content files: ${contentFiles.length} (${contentFiles.join(', ')})`);
console.log(`viz files: ${vizFiles.length} (${vizFiles.join(', ')})`);
console.log(`figures: ${figCount} (${(figBytes / 1024 / 1024).toFixed(1)} MB)`);
console.log(`publish/index.html: ${(Buffer.byteLength(pub) / 1024).toFixed(0)} KB`);
