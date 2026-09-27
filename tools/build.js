#!/usr/bin/env node
// Assemble the app.
//   node tools/build.js
// Public (app/): shell, styles, diagram code, payment gate.
// Protected (protected/): notes, questions, summaries (protected/data) and figures (protected/img),
// served only to paid users by api/content.js and api/img.js.
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const APP = path.join(ROOT, 'app');
const PDATA = path.join(ROOT, 'protected', 'data');
const PIMG = path.join(ROOT, 'protected', 'img');
const CONTENT = path.join(ROOT, 'content');

const TITLE = 'BACHY105 Notes';
const FONTS = 'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;0,8..60,600;1,8..60,400;1,8..60,500&display=swap';

fs.mkdirSync(PDATA, { recursive: true });
for (const f of fs.readdirSync(PDATA)) fs.unlinkSync(path.join(PDATA, f));
fs.rmSync(path.join(APP, 'data'), { recursive: true, force: true }); // never ship notes publicly

const order = (f) => (f.startsWith('chunk-') ? 0 : f.startsWith('q-') ? 1 : f.startsWith('summary-') ? 2 : 3);
const contentFiles = fs.readdirSync(CONTENT).filter((f) => /^(chunk|q|summary)-[A-Za-z0-9]+\.js$/.test(f)).sort((a, b) => order(a) - order(b) || a.localeCompare(b));
for (const f of contentFiles) fs.copyFileSync(path.join(CONTENT, f), path.join(PDATA, f));

const dims = {};
for (const f of fs.readdirSync(PIMG).filter((f) => /^manifest-.*\.json$/.test(f))) Object.assign(dims, JSON.parse(fs.readFileSync(path.join(PIMG, f), 'utf8')));
fs.writeFileSync(path.join(PDATA, 'figs.js'), `FIGDIMS(${JSON.stringify(dims)});\n`);

// paid diagram code (Modules 3 and 4) lives outside app/ and is served like the notes
const paidViz = fs.readdirSync(path.join(ROOT, 'viz-paid')).filter((f) => /\.js$/.test(f)).sort();
for (const f of paidViz) fs.copyFileSync(path.join(ROOT, 'viz-paid', f), path.join(PDATA, f));

// Modules (names, chunks, free or paid) come from content/modules.json — the one place to add a module.
const MODULES = JSON.parse(fs.readFileSync(path.join(CONTENT, 'modules.json'), 'utf8'));
const filesOf = (m) => [...m.chunks.map((c) => `chunk-${c}.js`), m.questions, `summary-${m.id}.js`].filter(Boolean);
const FREE = MODULES.filter((m) => m.free).flatMap(filesOf);
fs.writeFileSync(path.join(APP, 'js', 'modules.js'), `window.MODULES_CONFIG = ${JSON.stringify(MODULES.map(({ id, num, title, free, chunks, syllabus }) => ({ id, num, title, free, chunks, syllabus })))};\n`);
fs.writeFileSync(path.join(ROOT, 'api', '_access.json'), JSON.stringify({ freeFiles: [...FREE, 'figs.js'], freeModules: MODULES.filter((m) => m.free).map((m) => m.id) }, null, 1) + '\n');
// file lists the gate loads (names only, no content): free modules for everyone, the rest after payment.
const freeFiles = [...contentFiles.filter((f) => FREE.includes(f)), 'figs.js'];
const paidFiles = [...paidViz, ...contentFiles.filter((f) => !FREE.includes(f))];
const dataFiles = [...freeFiles, ...paidFiles];
fs.writeFileSync(path.join(APP, 'js', 'data-files.js'), `window.FREE_FILES = ${JSON.stringify(freeFiles)};\nwindow.PAID_FILES = ${JSON.stringify(paidFiles)};\n`);

const vizFiles = fs.readdirSync(path.join(APP, 'js', 'viz')).filter((f) => /\.js$/.test(f)).sort();
const scripts = ['js/boot.js', 'js/modules.js', 'js/viz-core.js', ...vizFiles.map((f) => 'js/viz/' + f), 'js/app.js', 'js/data-files.js', 'js/gate.js'];

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${TITLE}</title>
<meta name="description" content="Applied Chemistry (BACHY105) modules 2–4 as tabbed study notes with slide diagrams, interactive models and scenario questions.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${FONTS}">
<link rel="stylesheet" href="css/app.css">
</head>
<body>
<div id="app"></div>
${scripts.map((s) => `<script src="${s}"></script>`).join('\n')}
</body>
</html>
`;
fs.writeFileSync(path.join(APP, 'index.html'), html);
console.log(`protected data: ${dataFiles.length} files · figures: ${Object.keys(dims).length} · viz files: ${vizFiles.length}`);
