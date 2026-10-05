// node tools/figs/batch12.js figs-svg -> Module 4: the last 14 figures (XRD patterns, Bragg geometry, diffractometer, grains, peak width).
const { T, L, A, P, R, C, WAVE, mkSvg } = require('./lib');
const OUT = process.argv[2] || 'figs-svg', svg = mkSvg(OUT);
const H = (t, c = 'dt') => T(300, 34, t, { s: 28, b: 1, c, a: 'middle' });
const box = (x, y, w, h, cls, lines, tc = 'dt', s = 24) => R(x, y, w, h, cls, 'rx="10" fill-opacity=".3" stroke-width="3"') + lines.map((t, i) => T(x + w / 2, y + h / 2 + 8 - (lines.length - 1) * 15 + i * 30, t, { a: 'middle', c: tc, s })).join('');
const down = (x, y1, y2, c = 'w') => A(`M${x} ${y1}V${y2}`, c, 3);
const g = (x, m, s) => Math.exp(-((x - m) ** 2) / (2 * s * s));
// pattern: base line y0, x from x0..x1, shape f(x) in 0..1 scaled by h
const pat = (x0, x1, y0, h, f, cls, w = 4) => { let d = ''; for (let x = x0; x <= x1; x += 2) d += (x === x0 ? 'M' : 'L') + x + ' ' + (y0 - h * f(x)).toFixed(1); return P(d, cls, w); };
const ax = (x0, x1, y0, h, xl) => P(`M${x0} ${y0 - h}V${y0}H${x1}`, 'ds', 4) + T((x0 + x1) / 2, y0 + 34, xl, { a: 'middle', c: 'dt2' });
let seed = 9; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

(function () { // SiO2 patterns
  let s = H('Three forms of SiO₂'), y = 60;
  [['Quartz', (x) => g(x, 180, 4) + 0.15 * g(x, 340, 4) + 0.1 * g(x, 420, 4), 'dsb'], ['Cristobalite', (x) => g(x, 120, 4) + 0.1 * g(x, 300, 4), 'dsr'], ['Glass', (x) => 0.7 * g(x, 140, 70), 'dsg']].forEach(([t, f, c]) => { s += T(14, y + 20, t, { s: 26, b: 1, c: 'dt' }) + ax(40, 570, y + 170, 120, '') + pat(40, 570, y + 170, 120, f, c, 5); y += 210; });
  s += T(40, 20, '', {}) + T(300, y + 6, '2θ: 15° → 40°', { a: 'middle', c: 'dt2' });
  s += L(14, y + 50, ['Quartz and cristobalite: sharp peaks at', 'their own 2θ. Glass: one broad hump.'], { c: 'dt2' });
  svg(y + 110, s, 'm4-sio2-patterns');
})();

(function () { // mixture
  let s = H('XRD of an SiO₂ mixture');
  s += ax(40, 570, 330, 240, '2θ') + pat(40, 570, 330, 240, (x) => 0.3 * g(x, 220, 80) + 0.9 * g(x, 170, 3) + 0.7 * g(x, 330, 3) + 0.15 * g(x, 410, 3) + 0.12 * g(x, 450, 3), 'dsg', 5);
  s += L(14, 420, ['Sharp crystalline peaks ride on the', 'broad glass hump.'], { c: 'dt2' });
  svg(480, s, 'm4-xrd-mixture');
})();

(function () { // Bragg geometry
  let s = H("Bragg's law geometry");
  s += P('M40 200H560M40 290H560', 'ds', 4) + T(560, 188, '(hkl)', { a: 'end', c: 'dt', s: 22 }) + T(560, 318, '(hkl)', { a: 'end', c: 'dt', s: 22 });
  s += A('M150 80L296 197', 'b', 4) + A('M150 170L296 287', 'b', 4) + A('M304 197L450 80', 'b', 4) + A('M304 287L450 170', 'b', 4);
  s += P('M300 200L256 255M300 200L344 255', 'dsr', 3) + P('M256 255L300 290L344 255', 'dsr', 6) + T(300, 188, 'A', { a: 'middle', c: 'dt', b: 1 }) + T(300, 318, 'B', { a: 'middle', c: 'dt', b: 1 }) + T(236, 262, 'C', { a: 'middle', c: 'dt', b: 1 }) + T(364, 262, 'D', { a: 'middle', c: 'dt', b: 1 });
  s += A('M510 205V285', 'y', 3).replace('marker-end="url(#y)"', 'marker-end="url(#y)" marker-start="url(#y)"') + T(525, 250, 'd', { c: 'dty', b: 1 }) + T(220, 190, 'θ', { c: 'dty', b: 1 });
  s += L(14, 380, ['The lower ray travels extra CB + BD,', 'each equal to d sin θ: 2d sin θ in all.', '', 'Path difference nλ: the waves reinforce.', 'Anything else: they cancel.'], { c: 'dt2' });
  s += T(14, 570, '2d sin θ = nλ', { c: 'dt', b: 1, s: 28, m: 1 });
  svg(610, s, 'm4-bragg-geometry');
})();

(function () { // Nobel card
  let s = H('Nobel prizes for X-ray diffraction');
  s += box(30, 70, 540, 90, 'dfb dsb', ['Max von Laue', 'Nobel prize 1914'], 'dt') + box(30, 190, 540, 120, 'dfg dsg', ['W. H. Bragg and W. L. Bragg', 'father and son', 'Nobel prize 1915'], 'dt');
  svg(340, s, 'm4-nobel-xrd');
})();

(function () { // diffractometer layout
  let s = H('Diffractometer layout');
  s += T(14, 76, 'Beam path', { s: 26, b: 1, c: 'dtb' });
  ['high voltage supply', 'X-ray tube', 'primary filter, collimator', 'sample'].forEach((t, i) => { s += box(100, 90 + i * 64, 400, 48, 'dfb dsb', [t], 'dt'); if (i < 3) s += down(300, 138 + i * 64, 154 + i * 64); });
  s += P('M0 360H600', 'ds3', 2) + T(14, 400, 'Signal path', { s: 26, b: 1, c: 'dto' });
  ['detector and pre-amp', 'main amplifier', 'amplitude analyser', 'control unit', 'communication module', 'PC'].forEach((t, i) => { s += box(100, 414 + i * 62, 400, 46, 'dfo dso', [t], 'dt'); if (i < 5) s += down(300, 460 + i * 62, 476 + i * 62); });
  svg(810, s, 'm4-diffractometer-layout');
})();

(function () { // goniometer
  let s = H('A lab diffractometer');
  s += C(300, 240, 160, 'ds3', 'fill="none" stroke-width="3" stroke-dasharray="8 6"') + R(40, 200, 120, 70, 'dfy dsy', 'rx="8" fill-opacity=".3" stroke-width="3"') + T(100, 240, 'X-ray tube', { a: 'middle', c: 'dt', s: 22 }) + T(100, 300, '+ Göbel mirror', { a: 'middle', c: 'dt3', s: 22 });
  s += A('M160 235L284 240', 'y', 4) + C(300, 240, 14, 'dfw dsw', 'fill-opacity=".6" stroke-width="2"') + T(300, 275, 'sample', { a: 'middle', c: 'dt', s: 22 });
  s += A('M316 236L420 150', 'y', 4) + R(430, 100, 120, 80, 'dfg dsg', 'rx="8" fill-opacity=".3" stroke-width="3"') + T(490, 132, 'Soller slit', { a: 'middle', c: 'dt', s: 22 }) + T(490, 162, '+ detector', { a: 'middle', c: 'dt', s: 22 });
  s += P('M340 240H400', 'ds2', 2, 'stroke-dasharray="6 6"') + T(380, 215, '2θ', { c: 'dty', b: 1, s: 26 });
  s += T(300, 440, 'goniometer circle', { a: 'middle', c: 'dt3' }) + L(14, 480, ['Tube arm on the left, sample at the centre,', 'detector arm on the right at 2θ.'], { c: 'dt2' });
  svg(540, s, 'm4-goniometer');
})();

(function () { // theta-2theta geometry
  let s = H('θ–2θ geometry');
  s += `<path d="M60 300A240 240 0 0 1 540 300" class="ds3" fill="none" stroke-width="3" stroke-dasharray="8 6"/>` + C(90, 250, 20, 'dfy dsy', 'fill-opacity=".6" stroke-width="3"') + T(90, 215, 'fixed source', { a: 'middle', c: 'dt', s: 22 }) + C(510, 250, 20, 'dfg dsg', 'fill-opacity=".6" stroke-width="3"') + T(510, 215, 'rotating detector', { a: 'middle', c: 'dt', s: 22 });
  s += P('M200 300H400', 'ds', 4) + P('M200 335H400', 'ds', 4) + T(420, 306, 'plane 1', { c: 'dt2', s: 22 }) + T(420, 341, 'plane 2', { c: 'dt2', s: 22 });
  s += A('M110 255L270 296', 'y', 3) + A('M330 296L490 255', 'y', 3) + T(220, 280, 'θ', { c: 'dty', b: 1 }) + T(420, 280, 'θ', { c: 'dty', b: 1 }) + T(300, 238, '2θ', { a: 'middle', c: 'dtr', b: 1, s: 26 });
  s += A('M240 300V335', 'o', 3).replace('marker-end="url(#o)"', 'marker-end="url(#o)" marker-start="url(#o)"') + T(180, 325, 'd', { c: 'dto', b: 1 });
  s += R(240, 380, 120, 40, 'df3 ds', 'stroke-width="3"') + T(300, 408, 'specimen holder', { a: 'middle', c: 'dt', s: 22 }).replace('y="408"', 'y="445"');
  s += L(14, 500, ['Fixed source; the holder and the detector', 'rotate. Planes d apart: diffracted beam', 'leaves at 2θ; path gain d sin θ per plane.'], { c: 'dt2' });
  svg(600, s, 'm4-theta-2theta-geometry');
})();

(function () { // peak parameters
  let s = H('Reading a diffractogram');
  s += ax(40, 570, 340, 260, '2θ (10° → 30°, Mo radiation)') + pat(40, 570, 340, 260, (x) => 0.2 * g(x, 120, 6) + 0.95 * g(x, 220, 5) + 0.35 * g(x, 340, 12) + 0.3 * g(x, 450, 4), 'dsb', 5);
  s += A('M220 120V84', 'r', 3).replace('M220 120V84', 'M260 100H228') + T(270, 108, 'intensity (height)', { c: 'dtr', s: 22 });
  s += T(220, 372, '', {}) + A('M220 330V360', 'g', 3) + T(220, 395, 'position', { a: 'middle', c: 'dtg', b: 1, s: 22 }) + P('M310 285H370', 'dso', 4, 'marker-start="url(#o)" marker-end="url(#o)"') + T(420, 265, 'width', { c: 'dto', b: 1, s: 22 });
  s += L(14, 450, ['Read each peak for position on the 2θ axis,', 'intensity (height) and width.'], { c: 'dt2' });
  svg(520, s, 'm4-xrd-peak-parameters');
})();

(function () { // NaCl pattern
  let s = H('NaCl reference pattern');
  const pk = [[60, 13, '(111)'], [100, 100, '(200)'], [190, 55, '(220)'], [240, 5, '(311)'], [260, 14, '(222)'], [330, 7, '(400)'], [380, 2, '(331)'], [395, 14, '(420)'], [450, 8, '(422)'], [510, 3, '(511)']];
  s += ax(40, 570, 330, 240, '2θ: 10° → 90°');
  pk.forEach(([x, h, t], i) => (s += P(`M${40 + x} 330V${330 - h * 2.2}`, 'dsb', 4) + T(40 + x, 330 - h * 2.2 - 8 - (i % 2) * 24, t, { a: 'middle', c: 'dt', s: 22 })).replace(/font-size="22"/, 'font-size="22"'));
  s += L(14, 420, ['FCC, a = b = c = 5.64 Å, angles 90°, density 2.14.', '(200) is the strongest peak, then (220).'], { c: 'dt2' });
  svg(500, s, 'm4-nacl-pattern');
})();

(function () { // particle / grain / crystallite
  let s = H('Particle, grain, crystallite');
  s += `<ellipse cx="260" cy="200" rx="200" ry="140" class="df2 ds" fill-opacity=".4" stroke-width="5"/>`;
  s += P('M110 130Q260 190 400 120M250 175V335M110 270Q250 220 400 280M340 110Q330 200 380 300', 'dsb', 3);
  for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) s += C(140 + i * 18, 240 + j * 18, 4, 'dfr');
  s += R(125, 225, 66, 66, 'dfr dsr', 'fill-opacity=".2" stroke-width="3"') + T(100, 330, 'crystallite', { c: 'dtr', s: 22 });
  s += P('M490 100V300', 'ds', 3) + T(500, 205, 'particle', { c: 'dt', s: 22 }) + P('M470 150V250', 'dsb', 3) + T(430, 345, 'grain boundaries', { c: 'dtb', s: 22 });
  s += L(14, 400, ['Black outline: one particle. Blue lines split it', 'into grains. In a grain, the red block is a', 'crystallite with column length D, planes a', 'spacing d apart.'], { c: 'dt2' });
  svg(540, s, 'm4-particle-grain-crystallite');
})();

(function () { // SEM grains
  let s = H('Polycrystalline surface (SEM)'), n = 5, S = 100, X = 40, Y = 60, gp = [];
  for (let r = 0; r <= n; r++) { gp.push([]); for (let c = 0; c <= n; c++) gp[r].push([X + c * S + (c % n ? (rnd() - .5) * 50 : 0), Y + r * S * 0.7 + (r % n ? (rnd() - .5) * 36 : 0)]); }
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) { const q = [gp[r][c], gp[r][c + 1], gp[r + 1][c + 1], gp[r + 1][c]].map((p) => p.map((v) => v.toFixed(0)).join(' ')); s += `<path d="M${q.join('L')}z" class="dfw dsw" fill-opacity="${(.1 + rnd() * .3).toFixed(2)}" stroke-width="3"/>`; }
  s += P('M40 460H140', 'ds', 6) + T(90, 492, '10 µm', { a: 'middle', c: 'dt', b: 1 }) + A('M440 440L400 390', 'y', 3) + T(430, 470, 'grain boundary', { a: 'middle', c: 'dty', s: 22 });
  s += L(14, 530, ['Each cell is a grain; the lines between', 'them are grain boundaries.'], { c: 'dt2' });
  svg(600, s, 'm4-sem-grains');
})();

(function () { // FWHM
  let s = H('Peak width: FWHM');
  s += ax(40, 570, 330, 250, '2θ') + pat(40, 570, 330, 240, (x) => g(x, 300, 40), 'dsb', 5) + P('M40 322H570', 'ds2', 2, 'stroke-dasharray="6 6"') + T(560, 312, 'background', { a: 'end', c: 'dt3', s: 22 });
  s += P('M300 330V90', 'ds3', 2, 'stroke-dasharray="6 6"') + T(300, 76, 'peak position 2θ', { a: 'middle', c: 'dt', s: 22 }) + T(60, 98, 'I_max', { c: 'dt', s: 22 }) + P('M130 210H470', 'ds3', 2, 'stroke-dasharray="6 6"') + T(54, 218, 'I_max/2', { c: 'dt', s: 22 }).replace('x="54"', 'x="40"').replace('y="218"', 'y="206"');
  s += P('M219 210H381', 'dso', 5, 'marker-start="url(#o)" marker-end="url(#o)"') + T(300, 245, 'FWHM', { a: 'middle', c: 'dto', b: 1, s: 26 });
  s += L(14, 430, ['FWHM: width at half the maximum height,', 'above the background. Integral breadth', 'is the other width measure (area/height).'], { c: 'dt2' });
  svg(520, s, 'm4-fwhm-peak');
})();

(function () { // peak broadening
  let s = H('Smaller blocks, wider peaks'), y = 56;
  [['Perfect lattice: thin peaks', 3, 1], ['Slight break: narrower hump', 8, 2], ['Broken into blocks: broad peaks', 22, 4]].forEach(([t, w, k]) => {
    s += T(14, y + 20, t, { s: 24, b: 1, c: 'dt' });
    for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) s += C(60 + i * 24 + (k > 2 && j > 1 ? 6 : 0), y + 50 + j * 22 + (k > 1 && i > 1 ? 4 : 0), 6, 'dfb');
    s += pat(220, 570, y + 150, 90, (x) => g(x, 340, w) + 0.8 * g(x, 450, w * 1.2), 'dsg', 4) + P(`M220 ${y + 150}H570`, 'ds', 3);
    y += 190;
  });
  s += T(300, y + 6, 'same Bragg angles, intensity vs angle', { a: 'middle', c: 'dt3', s: 22 });
  svg(y + 30, s, 'm4-peak-broadening');
})();

(function () { // Scherrer
  let s = H('P. H. Scherrer');
  s += box(60, 80, 480, 140, 'df2 ds2', ['Paul Scherrer', '1890 – 1969', 'linked peak width to crystallite size'], 'dt', 24);
  svg(250, s, 'm4-scherrer-portrait');
})();
