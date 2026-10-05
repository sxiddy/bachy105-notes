// node tools/figs/pv-batch5.js figs-svg -> pv-si-structures, mono/poly/amorphous cells, pn-depletion, cell-circuit, inside-eia, pec-band-diagram
// (the two gap tables come from tools/figs/tables/). 600 wide, phone-size text (figs-svg/README.md).
const fs = require('fs'), path = require('path');
const OUT = process.argv[2] || 'figs-svg';
const mk = (id, c) => `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto"><path d="M0 0 10 5 0 10z" class="${c}"/></marker>`;
const defs = `<defs>${mk('b', 'dfb')}${mk('o', 'dfo')}${mk('y', 'dfy')}${mk('w', 'dfw')}${mk('r', 'dfr')}</defs>`;
const T = (x, y, t, o = {}) => `<text x="${x}" y="${y}" font-size="${o.s || 22}"${o.b ? ' font-weight="700"' : ''} class="${o.c || 'dt2'}${o.m ? ' mono' : ''}"${o.a ? ` text-anchor="${o.a}"` : ''}>${t}</text>`;
const L = (x, y, arr, o) => arr.map((t, i) => T(x, y + i * 30, t, o)).join('');
const A = (d, c, w = 4) => `<path d="${d}" class="ds${c}" fill="none" stroke-width="${w}" marker-end="url(#${c})"/>`;
const P = (d, cls, w = 3, extra = '') => `<path d="${d}" class="${cls}" fill="none" stroke-width="${w}" ${extra}/>`;
const R = (x, y, w, h, cls, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" class="${cls}" ${extra}/>`;
const svg = (h, body, name) => fs.writeFileSync(path.join(OUT, name + '.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 ${h}">\n${defs}\n${body}\n</svg>\n`);
let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const sph = (x, y, c) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="11" class="${c}" fill-opacity=".4" stroke-width="2"/>`;

// 1. three atom arrangements, stacked
(function () {
  const W = 536, H = 170, X0 = 32; let s = '', y = 0;
  const panel = (title, note, fn) => {
    s += T(300, y + 30, title, { s: 28, b: 1, c: 'dt', a: 'middle' });
    s += R(X0, y + 46, W, H, 'ds3', 'fill="none" stroke-width="2"');
    s += `<g transform="translate(${X0} ${y + 46})"><clipPath id="c${y}"><rect width="${W}" height="${H}"/></clipPath><g clip-path="url(#c${y})">${fn()}</g></g>`;
    s += T(300, y + 46 + H + 30, note, { a: 'middle' });
    y += 46 + H + 56;
  };
  panel('Single crystal (mono)', 'every atom in a perfect pattern', () => {
    let o = '';
    for (let r = 0; r < 6; r++) for (let c = 0; c < 19; c++) o += sph(16 + c * 28 + (r % 2) * 14, 17 + r * 27.5, 'dfb dsb');
    return o;
  });
  panel('Polycrystalline', 'patches tilted differently, with gaps', () => {
    const seeds = [[100, 60, 0.0, 'dfb dsb'], [300, 100, 0.5, 'dfo dso'], [460, 40, 0.95, 'dfg dsg'], [170, 150, 0.3, 'dfp dsp'], [440, 140, 0.7, 'dfy dsy']];
    let o = '';
    for (let r = -8; r < 14; r++) for (let c = -8; c < 26; c++) for (let k = 0; k < seeds.length; k++) {
      const [sx, sy, a, cls] = seeds[k];
      const px = c * 28 + (r % 2) * 14, py = r * 27.5, ca = Math.cos(a), sa = Math.sin(a);
      const x = sx + px * ca - py * sa, y2 = sy + px * sa + py * ca;
      if (x < 8 || x > W - 8 || y2 < 8 || y2 > H - 8) continue;
      let d = [], best = 1e9, bi = -1;
      seeds.forEach((q, i) => { const dd = Math.hypot(x - q[0], y2 - q[1]); d.push(dd); if (dd < best) { best = dd; bi = i; } });
      const second = Math.min(...d.filter((_, i) => i !== bi));
      if (bi === k && second - best > 16) o += sph(x, y2, cls);
    }
    return o;
  });
  panel('Amorphous', 'no pattern at all', () => {
    const pts = []; let o = '';
    for (let n = 0; n < 4000 && pts.length < 120; n++) {
      const x = 12 + rnd() * (W - 24), y2 = 12 + rnd() * (H - 24);
      if (pts.every((p) => Math.hypot(p[0] - x, p[1] - y2) > 24)) pts.push([x, y2]);
    }
    pts.forEach((p) => (o += sph(p[0], p[1], 'dfw ds2')));
    return o;
  });
  svg(y, s, 'm2-pv-si-structures');
})();

// 2. mono cell: 2x2 octagonal cells, white corner gaps
(function () {
  let s = T(300, 34, 'Monocrystalline cell', { s: 28, b: 1, c: 'dt', a: 'middle' });
  const cell = (x, y) => {
    const c = 36, w = 230, p = `M${x + c} ${y}H${x + w - c}L${x + w} ${y + c}V${y + w - c}L${x + w - c} ${y + w}H${x + c}L${x} ${y + w - c}V${y + c}z`;
    let o = `<path d="${p}" class="dfb dsb" fill-opacity=".55" stroke-width="3"/>`;
    for (let i = 1; i < 8; i++) o += P(`M${x + 8} ${y + i * 28}H${x + w - 8}`, 'ds3', 1.5);
    o += P(`M${x + 80} ${y + 6}V${y + w - 6}M${x + 150} ${y + 6}V${y + w - 6}`, 'ds', 4);
    return o;
  };
  [[40, 60], [330, 60], [40, 350], [330, 350]].forEach(([x, y]) => (s += cell(x, y)));
  s += `<path d="M300 290L270 320L300 350L330 320z" class="df2 ds2" stroke-width="2"/>`;
  s += L(40, 620, ['uniform dark blue', 'silver bus bars (thick) and fingers (thin)', 'round-ingot corners cut off: white gaps'], { c: 'dt2' });
  svg(700, s, 'm2-pv-mono-cell');
})();

// 3. poly cell: irregular grains
(function () {
  let s = T(300, 34, 'Polycrystalline cell', { s: 28, b: 1, c: 'dt', a: 'middle' });
  const n = 5, S = 70, X = 125, Y = 56, g = [];
  for (let r = 0; r <= n; r++) { g.push([]); for (let c = 0; c <= n; c++) g[r].push([X + c * S + (c % n ? (rnd() - .5) * 44 : 0), Y + r * S + (r % n ? (rnd() - .5) * 44 : 0)]); }
  const cls = ['dfb', 'dfp', 'dfo', 'dfg'];
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) {
    const q = [g[r][c], g[r][c + 1], g[r + 1][c + 1], g[r + 1][c]].map((p) => p.map((v) => v.toFixed(0)).join(' '));
    s += `<path d="M${q.join('L')}z" class="${cls[Math.floor(rnd() * 4)]} dsb" fill-opacity="${(.3 + rnd() * .4).toFixed(2)}" stroke-width="2"/>`;
  }
  s += P(`M${X + 175} ${Y}V${Y + 350}`, 'ds', 4) + P(`M${X} ${Y + 175}H${X + 350}`, 'ds', 4);
  s += L(40, 460, ['speckled, flaky look', 'many separate crystal grains', 'each tilted its own way'], { c: 'dt2' });
  svg(540, s, 'm2-pv-poly-cell');
})();

// 4. amorphous thin film: smooth tiles
(function () {
  let s = T(300, 34, 'Amorphous silicon thin film', { s: 28, b: 1, c: 'dt', a: 'middle' });
  [[40, 60, 240], [296, 60, 264], [90, 160, 240], [346, 160, 214], [40, 260, 200], [256, 260, 304]].forEach(([x, y, w]) => (s += R(x, y, w, 84, 'dfb dsb', 'rx="6" fill-opacity=".45" stroke-width="3"')));
  s += L(40, 400, ['smooth and even', 'no grain pattern at all', 'thin film laid on a panel'], { c: 'dt2' });
  svg(480, s, 'm2-pv-amorphous-film');
})();

// 5. p-n junction with depletion layer and potential graph
(function () {
  let s = T(300, 34, 'Diffusion', { s: 24, b: 1, c: 'dt', a: 'middle' }) + P('M200 52H400', 'dso', 4, 'marker-end="url(#o)" marker-start="url(#o)"');
  s += R(20, 80, 220, 180, 'dfb', 'fill-opacity=".25"') + R(240, 80, 120, 180, 'dfy', 'fill-opacity=".3"') + R(360, 80, 220, 180, 'dfo', 'fill-opacity=".25"');
  s += R(240, 80, 120, 180, 'ds3', 'fill="none" stroke-width="2" stroke-dasharray="8 6"');
  s += T(130, 110, 'N-region', { s: 26, b: 1, c: 'dtb', a: 'middle' }) + T(470, 110, 'P-region', { s: 26, b: 1, c: 'dto', a: 'middle' });
  const e = (x, y) => `<circle cx="${x}" cy="${y}" r="13" class="df ds" stroke-width="2.5"/><path d="M${x - 7} ${y}h14" class="ds" stroke-width="3"/>`;
  const h = (x, y) => `<circle cx="${x}" cy="${y}" r="13" class="df ds" stroke-width="2.5"/><path d="M${x - 7} ${y}h14M${x} ${y - 7}v14" class="ds" stroke-width="3"/>`;
  [[60, 160], [110, 190], [160, 150], [200, 215], [70, 230], [140, 240]].forEach(([x, y]) => (s += e(x, y)));
  [[410, 160], [470, 195], [540, 150], [430, 235], [520, 235], [560, 190]].forEach(([x, y]) => (s += h(x, y)));
  [[270, 150], [270, 215]].forEach(([x, y]) => (s += `<circle cx="${x}" cy="${y}" r="13" class="dfy ds" stroke-width="2.5"/><path d="M${x - 7} ${y}h14M${x} ${y - 7}v14" class="ds" stroke-width="3"/>`));
  [[330, 150], [330, 215]].forEach(([x, y]) => (s += `<circle cx="${x}" cy="${y}" r="13" class="dfy ds" stroke-width="2.5"/><path d="M${x - 7} ${y}h14" class="ds" stroke-width="3"/>`));
  s += P('M240 262V282M360 262V282', 'ds', 3) + P('M244 272H356', 'ds', 3, 'marker-end="url(#w)" marker-start="url(#w)"') + T(300, 312, 'Depletion layer', { a: 'middle', c: 'dt' });
  // potential graph
  s += P('M20 350V470M20 470H580', 'ds2', 3) + T(20, 340, 'Volts', { c: 'dt2' }) + T(34, 372, '+', { s: 26, b: 1, c: 'dt' }) + T(34, 466, '−', { s: 26, b: 1, c: 'dt' });
  s += P('M240 282V490M360 282V490', 'ds3', 2, 'stroke-dasharray="8 6"');
  s += P('M20 380H240C300 380 300 450 360 450H580', 'dsb', 5);
  s += T(300, 520, 'Potential steps down from N to P', { a: 'middle', c: 'dt' });
  // legend
  [['−', 'dfw', 'free electron'], ['+', 'dfw', 'hole'], ['+', 'dfy', 'donor ion (fixed, positive)'], ['−', 'dfy', 'acceptor ion (fixed, negative)']].forEach(([sg, c, t], i) => {
    const y = 570 + i * 40;
    s += `<circle cx="40" cy="${y - 7}" r="13" class="${c === 'dfy' ? 'dfy' : 'df'} ds" stroke-width="2.5"/><path d="M33 ${y - 7}h14${sg === '+' ? `M40 ${y - 14}v14` : ''}" class="ds" stroke-width="3"/>` + T(66, y, t);
  });
  svg(740, s, 'm2-pv-pn-depletion');
})();

// 6. PV cell in a circuit
(function () {
  let s = T(190, 30, 'Light energy', { s: 26, b: 1, c: 'dt', a: 'middle' });
  [80, 160, 240, 320].forEach((x) => (s += A(`M${x} 50L${x + 6} 205`, 'o', 5).replace('ds', 'dso').replace('url(#o)', 'url(#o)')));
  s += R(30, 205, 340, 14, 'df3 ds', 'stroke-width="2"') + [60, 140, 220, 300].map((x) => R(x, 187, 40, 18, 'df3 ds', 'stroke-width="2"')).join('');
  s += R(30, 219, 340, 12, 'df2 ds2', 'stroke-width="2"');
  s += R(30, 231, 340, 100, 'dfb', 'fill-opacity=".35"') + R(30, 331, 340, 110, 'dfo', 'fill-opacity=".35"') + R(30, 441, 340, 14, 'df3 ds', 'stroke-width="2"');
  s += T(200, 262, 'N-type silicon', { s: 24, b: 1, c: 'dtb', a: 'middle' }) + T(200, 400, 'P-type silicon', { s: 24, b: 1, c: 'dto', a: 'middle' });
  const pair = (x, y) => `<circle cx="${x}" cy="${y}" r="14" class="df ds" stroke-width="2.5"/><path d="M${x - 8} ${y}h16M${x} ${y - 8}v16" class="ds" stroke-width="3"/><circle cx="${x + 36}" cy="${y}" r="14" class="df ds" stroke-width="2.5"/><path d="M${x + 28} ${y}h16" class="ds" stroke-width="3"/>`;
  s += pair(60, 331) + pair(280, 331);
  [[96, 316, 96, 240], [316, 316, 316, 240]].forEach(([a, b, c, d]) => (s += A(`M${a} ${b}L${c} ${d}`, 'y', 4)));
  [[60, 346, 60, 430], [280, 346, 280, 430]].forEach(([a, b, c, d]) => (s += A(`M${a} ${b}L${c} ${d}`, 'y', 4)));
  // circuit
  s += P('M370 197H500V260M500 340V510H200V455', 'ds', 4) + `<circle cx="500" cy="300" r="40" class="df2 ds" stroke-width="4"/>` + P('M470 300q8-14 15 0t15 0t15 0', 'dsy', 3) + T(500, 372, 'Load', { c: 'dt', a: 'middle' });
  s += A('M420 197H470', 'b', 4) + T(445, 182, 'e⁻', { c: 'dtb', a: 'middle' });
  s += `<circle cx="400" cy="165" r="14" class="df ds" stroke-width="2.5"/><path d="M392 165h16" class="ds" stroke-width="3"/>` + `<circle cx="160" cy="500" r="14" class="df ds" stroke-width="2.5"/><path d="M152 500h16M160 492v16" class="ds" stroke-width="3"/>`;
  s += L(14, 560, ['Top electrode (−): electrons leave here,', 'pass through the load, return to the', 'bottom electrode (+). Conventional', 'current runs the opposite way.'], { c: 'dt2' });
  s += L(14, 690, ['Anti-reflection coating: the thin grey', 'layer under the electrode fingers.'], { c: 'dt2' });
  svg(750, s, 'm2-pv-cell-circuit');
})();

// 7. inside a PV cell (EIA)
(function () {
  let s = T(300, 34, 'Layers of a PV cell', { s: 28, b: 1, c: 'dt', a: 'middle' });
  s += '<path d="M120 60q10-14 20 0t20 0M270 60q10-14 20 0t20 0M420 60q10-14 20 0t20 0" class="dsy" fill="none" stroke-width="3"/>' + T(300, 98, 'energy from light', { a: 'middle', c: 'dty' });
  const layer = (y, h, cls, label, lc) => (s += R(40, y, 520, h, cls, 'fill-opacity=".4" stroke-width="2"') + T(300, y + h / 2 + 8, label, { a: 'middle', c: lc || 'dt', s: 24 }));
  layer(120, 50, 'dfb dsb', 'glass', 'dtb'); layer(170, 40, 'dfb dsb', 'transparent negative terminal (−)', 'dtb'); layer(210, 60, 'dfb dsb', 'n-type layer (semiconductor)', 'dtb');
  s += P('M40 270H560', 'dsy', 3, 'stroke-dasharray="8 6"') + T(300, 296, 'junction', { a: 'middle', c: 'dty' });
  layer(310, 60, 'dfo dso', 'p-type layer (semiconductor)', 'dto'); layer(370, 40, 'dfr dsr', 'positive terminal (+)', 'dtr');
  const mini = (y, title, body, extra, bulb) => {
    s += P(`M0 ${y - 20}H600`, 'ds3', 2) + T(14, y + 14, title, { s: 26, b: 1, c: 'dt' });
    s += R(30, y + 40, 200, 40, 'dfb', 'fill-opacity=".4"') + R(30, y + 80, 200, 40, 'dfo', 'fill-opacity=".4"') + P(`M30 ${y + 80}H230`, 'dsy', 2, 'stroke-dasharray="6 5"') + extra;
    s += L(260, y + 60, body, { c: 'dt2' });
  };
  const dot = (x, y) => `<circle cx="${x}" cy="${y}" r="9" class="dfy ds" stroke-width="2"/>`;
  mini(470, '1  Light frees electrons', ['light knocks electrons', 'loose near the junction'], P('M70 508q8 10 16 0t16 0t16 0', 'dsy', 3) + A('M92 524V558', 'y', 3) + dot(92, 566));
  mini(640, '2  Junction sorts them', ['electrons drift to the n side;', 'holes are filled from below'], dot(70, 690) + A('M70 685V650', 'b', 3) + dot(150, 760) + A('M150 755V735', 'b', 3));
  mini(810, '3  Electrons flow out', ['out of the (−) terminal, through', 'the bulb, back in at (+); they', 'fill the holes. This is the current.'], A('M70 850H230', 'b', 3) + A('M70 920H170', 'b', 3), 1);
  s += T(300, 985, 'Source: U.S. Energy Information Administration', { a: 'middle', c: 'dt3' });
  svg(1010, s, 'm2-pv-inside-eia');
})();

// 10. PEC band diagram: n-type photoanode
(function () {
  let s = '';
  s += L(120, 28, ['Semiconductor', 'electrode'], { a: 'middle', c: 'dt', s: 24, b: 1 }) + T(310, 28, 'Electrolyte', { a: 'middle', c: 'dt', s: 24, b: 1 }) + L(490, 28, ['Counter-', 'electrode'], { a: 'middle', c: 'dt', s: 24, b: 1 });
  s += R(20, 90, 200, 380, 'dfo', 'fill-opacity=".25"') + R(220, 90, 180, 380, 'dfb', 'fill-opacity=".3"') + R(400, 90, 180, 380, 'df3', 'fill-opacity=".4"');
  s += P('M60 230H110C150 230 170 190 220 170', 'ds', 5) + P('M60 400H110C150 400 170 360 220 340', 'ds', 5);
  s += T(24, 238, 'Ec', { c: 'dt', b: 1 }) + T(24, 408, 'Ev', { c: 'dt', b: 1 });
  s += P('M30 330q8-12 16 0t16 0t16 0', 'dsy', 3, 'marker-end="url(#y)"') + T(30, 366, 'hν', { c: 'dty', b: 1 });
  s += A('M96 394V240', 'y', 4) + A('M90 232Q70 216 52 232', 'b', 3) + T(70, 208, 'e⁻', { c: 'dtb', b: 1 }) + A('M104 394Q150 394 190 354', 'r', 3) + T(150, 430, 'h⁺', { c: 'dtr', b: 1, a: 'middle' });
  s += T(310, 220, 'Red', { s: 26, b: 1, c: 'dt', a: 'middle' }) + T(310, 380, 'Ox', { s: 26, b: 1, c: 'dt', a: 'middle' });
  s += A('M262 240Q246 300 262 358', 'r', 3) + A('M358 358Q374 300 358 240', 'b', 3);
  s += T(490, 280, 'e⁻', { c: 'dtb', b: 1, a: 'middle' }) + P('M420 300H560', 'ds', 3, 'stroke-dasharray="8 6"');
  s += P('M120 470V520H270M330 520H490V470', 'ds', 4) + `<circle cx="300" cy="520" r="30" class="df2 ds" stroke-width="4"/>` + A('M285 534L316 506', 'w', 3) + A('M130 500H175', 'b', 3);
  s += L(14, 590, ['Photon lifts an electron from Ev to Ec.', 'The band bend sends the electron to the bulk', '(then through the meter) and the hole to the', 'surface.'], { c: 'dt2' });
  s += L(14, 730, ['At the surface: Red + h⁺ → Ox', 'At the counter-electrode: Ox + e⁻ → Red'], { c: 'dt', m: 1 });
  svg(800, s, 'm2-pec-band-diagram');
})();
