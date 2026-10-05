// node tools/figs/batch6.js figs-svg -> Module 2 tail (solar-energy, PEC junction, DSSC set) + first Module 3 figures.
const fs = require('fs'), path = require('path');
const { T, L, A, P, R, C, WAVE, mkSvg } = require('./lib');
const OUT = process.argv[2] || 'figs-svg', svg = mkSvg(OUT);
const H = (t, c = 'dt') => T(300, 34, t, { s: 28, b: 1, c, a: 'middle' });
const bullets = (x, y, items, c) => items.map((ln, i) => (Array.isArray(ln) ? ln : [ln]).map((l, j) => T(x, (y += 30), (j ? '   ' : '• ') + l, { c })).join('')).join('');
// same drawing as an earlier figure (the slide shows the same thing again)
fs.copyFileSync(path.join(OUT, 'm2-daniell-cell.svg'), path.join(OUT, 'm2-electrochemical-cells.svg'));
fs.copyFileSync(path.join(OUT, 'm2-cell-differences-table.svg'), path.join(OUT, 'm2-batteries.svg'));

// solar energy: tilted panels under the Sun
(function () {
  let s = C(300, 90, 46, 'dfy', 'fill-opacity=".8"');
  for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6, x1 = 300 + 62 * Math.cos(a), y1 = 90 + 62 * Math.sin(a); s += P(`M${x1.toFixed(0)} ${y1.toFixed(0)}L${(300 + 82 * Math.cos(a)).toFixed(0)} ${(90 + 82 * Math.sin(a)).toFixed(0)}`, 'dsy', 4); }
  [[110, 4], [330, 4]].forEach(([x]) => (s += `<path d="M${x} 330L${x + 70} 250H${x + 200}L${x + 130} 330z" class="dfb dsb" fill-opacity=".5" stroke-width="3"/>` + P(`M${x + 20} 305L${x + 90} 250M${x + 60} 305L${x + 130} 250M${x + 100} 305L${x + 170} 250`, 'dsb', 2) + P(`M${x + 65} 330V360`, 'ds', 4)));
  s += P('M20 362H580', 'dsg', 5) + A('M200 190L210 230', 'y', 3) + A('M400 190L390 230', 'y', 3);
  s += T(300, 420, 'Flat panels tilted towards the Sun', { a: 'middle', c: 'dt' }) + T(300, 452, 'a practical slice of ≈ 600 TW of sunlight', { a: 'middle' });
  svg(480, s, 'm2-solar-energy');
})();

// semiconductor | liquid junction cell
(function () {
  let s = H('Semiconductor | liquid junction');
  s += R(30, 170, 540, 190, 'dfb', 'fill-opacity=".25"') + R(30, 170, 150, 190, 'dfo', 'fill-opacity=".4"') + R(500, 170, 70, 190, 'df3 ds', 'stroke-width="2"');
  s += WAVE(60, 100, 3, 'dsy', 4) + T(60, 150, 'hν', { c: 'dty', b: 1 });
  s += T(40, 215, 'CB', { b: 1, c: 'dt' }) + P('M75 205H175', 'ds', 4) + T(40, 335, 'VB', { b: 1, c: 'dt' }) + P('M75 325H175', 'ds', 4);
  s += A('M125 320V212', 'y', 4);
  s += T(75, 262, 'e⁻', { c: 'dtb', b: 1 }) + T(190, 322, 'h⁺', { c: 'dtr', b: 1 });
  s += P('M105 170V100H260M340 100H535V170', 'ds', 4) + C(300, 100, 30, 'df2 ds', 'stroke-width="4"') + A('M286 114L314 86', 'w', 3);
  s += A('M180 100H200', 'b', 3) + T(150, 80, 'e⁻', { c: 'dtb', b: 1 }) + T(535, 150, 'e⁻', { c: 'dtb', b: 1, a: 'middle' }).replace('y="150"', 'y="150"');
  s += T(240, 260, 'Red → Ox', { c: 'dtr', b: 1 }) + T(380, 300, 'Ox → Red', { c: 'dtb', b: 1 });
  s += L(30, 400, ['A lit semiconductor and a metal electrode', 'share one electrolyte, joined by a meter.', 'Holes oxidise Red at the semiconductor;', 'electrons reduce Ox at the metal.'], { c: 'dt2' });
  svg(540, s, 'm2-pec-liquid-junction');
})();

// Gratzel cell (DSSC)
(function () {
  let s = H('Dye-sensitised solar cell (Grätzel)');
  s += R(70, 150, 36, 200, 'df3 ds', 'stroke-width="2"') + R(106, 150, 74, 200, 'dfw', 'fill-opacity=".25"') + R(180, 150, 260, 200, 'dfb', 'fill-opacity=".25"') + R(440, 150, 36, 200, 'df3 ds', 'stroke-width="2"');
  [175, 215, 255, 295, 335].forEach((y) => (s += C(126, y, 10, 'dfr') + C(160, y + 12, 10, 'dfr')));
  [200, 270, 320].forEach((y) => (s += A(`M14 ${y}H64`, 'y', 4)));
  s += T(14, 380, 'light', { c: 'dty', b: 1 });
  s += T(74, 142, 'glass', { c: 'dt2', a: 'middle' }) + T(160, 142, 'TiO₂', { c: 'dt2', a: 'middle' }) + T(458, 142, 'Pt', { c: 'dt2', a: 'middle' });
  s += P('M88 150V90H260M340 90H458V150', 'ds', 4) + C(300, 90, 30, 'df2 ds', 'stroke-width="4"') + A('M286 104L314 76', 'w', 3);
  s += T(210, 215, 'I⁻', { c: 'dtb', b: 1, s: 26 }) + T(385, 215, 'I₃⁻', { c: 'dtb', b: 1, s: 26 }) + A('M240 330Q300 300 360 330', 'b', 3).replace('M240 330Q300 300 360 330', 'M370 300Q300 330 230 300');
  s += T(126, 130, '', {});
  s += L(14, 430, ['1  dye S absorbs light, becomes S*', '2  S* injects an electron into TiO₂', '3  e⁻ runs through glass, bulb, Pt', '4  I₃⁻ + 2e⁻ → 3I⁻ at the Pt electrode', '5  3I⁻ + 2S⁺ → I₃⁻ + 2S, dye is restored'], { c: 'dt2' });
  svg(600, s, 'm2-dssc-schematic');
})();

// Ru dyes
(function () {
  let s = H('Ruthenium dye: the common design');
  s += C(300, 200, 40, 'dfp', 'fill-opacity=".5"') + T(300, 210, 'Ru', { s: 28, b: 1, c: 'dt', a: 'middle' }).replace('font-size="28"', 'font-size="28"');
  [[130, 130], [130, 270]].forEach(([x, y]) => (s += P(`M${x + 60} ${y}L262 190M${x + 60} ${y}L262 210`, 'ds', 3) + R(x - 50, y - 30, 110, 60, 'dfb dsb', 'fill-opacity=".3" stroke-width="3" rx="10"') + T(x + 5, y + 8, 'bipy', { c: 'dtb', b: 1, a: 'middle' }) + T(x - 10, y + 62, '–COOH', { c: 'dto', b: 1, a: 'middle' })));
  [[470, 130], [470, 270]].forEach(([x, y]) => (s += P(`M${x - 80} ${y}L338 200`, 'ds', 3) + R(x - 50, y - 25, 110, 50, 'dfg dsg', 'fill-opacity=".3" stroke-width="3" rx="10"') + T(x + 5, y + 8, 'NCS', { c: 'dtg', b: 1, a: 'middle' })));
  s += P('M40 345H560', 'dso', 6) + T(300, 378, 'TiO₂ surface', { c: 'dt', a: 'middle' }) + P('M85 328V345M85 328', 'dso', 3);
  s += L(14, 430, ['Bipyridine (bipy) rings carry –COOH', 'groups: the anchors that bind the dye', 'to TiO₂. Other dyes in the family swap', 'in thiophene chains or CF₃ groups.'], { c: 'dt2' });
  svg(560, s, 'm2-dssc-ru-dyes');
})();

// natural dyes
(function () {
  let s = H('Natural dyes for the cell');
  s += T(14, 80, 'Sources', { s: 26, b: 1, c: 'dt' }) + bullets(14, 80, ['beetroot', 'grape skin', 'raspberry', 'black plum', 'mangosteen'], 'dt2');
  s += P('M0 262H600', 'ds3', 2) + T(14, 304, 'Pigments (structures)', { s: 26, b: 1, c: 'dt' }) + bullets(14, 304, ['betanin', 'cyanidin', 'pelargonidin', 'peonidin', 'mangostin'], 'dt2');
  s += L(14, 510, ['Anthocyanin-type pigments (cyanidin,', 'pelargonidin, peonidin) give the reds and', 'purples; betanin is the beetroot red.'], { c: 'dt3' });
  svg(580, s, 'm2-dssc-natural-dyes');
})();

// hibiscus cell
(function () {
  let s = H('Hibiscus-tea Grätzel cell');
  s += `<path d="M120 210L570 210L540 330L90 330z" class="dfp dsp" fill-opacity=".6" stroke-width="3"/>`;
  s += `<path d="M60 260L510 260L480 380L30 380z" class="df3 ds" fill-opacity=".7" stroke-width="3"/>`;
  s += P('M300 190V290M270 190V290', 'dso', 6, 'stroke-linecap="round"') + P('M270 190Q285 150 300 190', 'dso', 6);
  s += T(300, 100, 'paper clip holds the plates', { a: 'middle', c: 'dt3' }) + A('M300 110L300 150', 'w', 3);
  s += L(14, 450, ['Upper plate (dark): dye-coated', 'TiO₂ plate = anode', ''], { c: 'dtp', b: 1 }) + L(14, 520, ['Lower plate: graphite-coated', 'conductor = cathode'], { c: 'dt', b: 1 });
  svg(600, s, 'm2-dssc-hibiscus-cell');
})();

// pros and cons
(function () {
  let s = H('Dye-sensitised cells: pros and cons');
  s += T(14, 80, 'Advantages', { s: 26, b: 1, c: 'dtg' }) + bullets(14, 80, ['works at wide angles and low light', 'long life', 'good price/performance, low cost', 'mechanically robust', 'lower internal temperatures', 'lower electricity bills'], 'dt2');
  s += P('M0 300H600', 'ds3', 2) + T(14, 334, 'Disadvantages', { s: 26, b: 1, c: 'dtr' }) + bullets(14, 334, [['liquid electrolyte: temperature', 'stability problems'], 'costly ruthenium and platinum', 'volatile organic compounds'], 'dt2');
  svg(500, s, 'm2-dssc-pros-cons');
})();

// nanomaterials size scale (log)
(function () {
  let s = H('Size scale (nm, log)');
  const y = (e) => 90 + (8 - e) * 56, ax = 150;
  s += R(0, y(2), 600, y(1) - y(2), 'dfy', 'fill-opacity=".18"') + P(`M${ax} 76V${y(-1) + 20}`, 'ds', 4);
  for (let e = -1; e <= 8; e++) s += P(`M${ax - 8} ${y(e)}H${ax + 8}`, 'ds', 3) + T(ax - 16, y(e) + 8, '10' + String(e).replace('-', '⁻').replace(/\d/g, (d) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[d]), { a: 'end', c: 'dt3' });
  [[8, 'tennis ball'], [6, 'a full stop'], [4, 'cancer cell'], [3, 'bacterium'], [2, 'virus'], [1, 'antibody'], [0, 'glucose'], [-1, 'water molecule']].forEach(([e, t]) => (s += C(ax, y(e), 7, 'dfb') + T(ax + 24, y(e) + 8, t, { c: 'dt' })));
  s += T(300, y(1.5) + 8, '', {}) + T(470, y(2) - 16, '10–100 nm', { c: 'dty', b: 1, a: 'middle' }) + L(470, y(2) + 12, ['nanodevices', 'live here'], { a: 'middle', c: 'dty' }).replace(/y="(\d+)"/, 'y="$1"');
  s += L(14, y(-1) + 70, ['Nanodevices: nanopores, dendrimers,', 'nanotubes, quantum dots, nanoshells'], { c: 'dt2' });
  svg(y(-1) + 150, s, 'm3-nanomaterials');
})();

// gold nanoparticle vs hair
(function () {
  let s = H('Nano vs everyday');
  for (let r = 0; r < 5; r++) for (let c = 0; c < 5; c++) s += C(60 + c * 22, 80 + r * 22, 8, 'dfy', 'fill-opacity=".8"');
  s += P('M50 200H170', 'ds', 4) + T(110, 232, '1 nm', { a: 'middle', c: 'dt' }) + L(220, 100, ['Gold nanoparticle:', 'the atoms show as a grid'], { c: 'dt2' });
  s += P('M0 270H600', 'ds3', 2) + R(20, 310, 560, 46, 'df3 dso', 'rx="23" stroke-width="3"') + T(300, 342, 'human hair', { a: 'middle', c: 'dto', b: 1 });
  s += L(20, 400, ['50,000 – 100,000 nm across:', '50,000 to 100,000 times wider'], { c: 'dt2' });
  svg(470, s, 'm3-gold-np-hair');
})();

// nanotechnology uses
(function () {
  let s = R(100, 10, 400, 70, 'dfb dsb', 'rx="12" fill-opacity=".3" stroke-width="3"') + L(300, 38, ['Nanomaterials /', 'nanotechnology'], { c: 'dt', b: 1, s: 24, a: 'middle' });
  s += P('M60 80V560', 'ds', 4);
  ['Information technology', 'Mechanical engineering / robotics', 'Biotechnology', 'Transportation', 'National security and defence', 'Food and agriculture', 'Medicine / health', 'Aerospace', 'Energy and environment', 'Advanced materials and textiles'].forEach((t, i) => (s += P(`M60 ${130 + i * 46}H90`, 'ds', 3) + R(90, 108 + i * 46, 500, 44, 'df2 ds2', 'rx="10" stroke-width="2"') + T(106, 138 + i * 46, t, { c: 'dt', s: 24 })));
  svg(600, s, 'm3-nano-uses-map');
})();
