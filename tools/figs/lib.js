// Shared helpers for the figure generators (600-wide viewBox, classes from app/css/app.css; see figs-svg/README.md).
const fs = require('fs'), path = require('path');
const mk = (id, c) => `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto"><path d="M0 0 10 5 0 10z" class="${c}"/></marker>`;
const defs = `<defs>${mk('b', 'dfb')}${mk('o', 'dfo')}${mk('y', 'dfy')}${mk('w', 'dfw')}${mk('r', 'dfr')}${mk('g', 'dfg')}${mk('p', 'dfp')}</defs>`;
// text (size s, bold b, class c, mono m, anchor a) and a block of lines
// a bare < or & in label text (T < T c, dG < 0) is not valid XML and made the whole diagram fail to load
const xml = (t) => String(t).replace(/&(?![a-z]+;|#\d+;|#x[\da-f]+;)/gi, '&amp;').replace(/<(?=[\s\d=])/g, '&lt;');
const T = (x, y, t, o = {}) => `<text x="${x}" y="${y}" font-size="${o.s || 22}"${o.b ? ' font-weight="700"' : ''} class="${o.c || 'dt2'}${o.m ? ' mono' : ''}"${o.a ? ` text-anchor="${o.a}"` : ''}>${xml(t)}</text>`;
const L = (x, y, arr, o) => arr.map((t, i) => T(x, y + i * 30, t, o)).join('');
const A = (d, c, w = 4) => `<path d="${d}" class="ds${c}" fill="none" stroke-width="${w}" marker-end="url(#${c})"/>`;
const P = (d, cls, w = 3, extra = '') => `<path d="${d}" class="${cls}" fill="none" stroke-width="${w}" ${extra}/>`;
const R = (x, y, w, h, cls, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" class="${cls}" ${extra}/>`;
const C = (x, y, r, cls, extra = '') => `<circle cx="${x}" cy="${y}" r="${r}" class="${cls}" ${extra}/>`;
const WAVE = (x, y, n, cls = 'dsy', w = 3) => P(`M${x} ${y}` + 'q8-10 16 0t16 0'.repeat(1) + 't16 0'.repeat(n - 2), cls, w);
const mkSvg = (out) => (h, body, name) => fs.writeFileSync(path.join(out, name + '.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 ${h}">\n${defs}\n${body}\n</svg>\n`);
module.exports = { T, L, A, P, R, C, WAVE, mkSvg };
