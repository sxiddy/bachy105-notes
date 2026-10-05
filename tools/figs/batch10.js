// node tools/figs/batch10.js figs-svg -> Module 4: Jablonski, levels, dyes, colour wheel, spectra, UV-vis instrument figures.
const { T, L, A, P, R, C, WAVE, mkSvg } = require('./lib');
const OUT = process.argv[2] || 'figs-svg', svg = mkSvg(OUT);
const H = (t, c = 'dt') => T(300, 34, t, { s: 28, b: 1, c, a: 'middle' });
const box = (x, y, w, h, cls, lines, tc = 'dt', s = 24) => R(x, y, w, h, cls, 'rx="10" fill-opacity=".3" stroke-width="3"') + lines.map((t, i) => T(x + w / 2, y + h / 2 + 8 - (lines.length - 1) * 15 + i * 30, t, { a: 'middle', c: tc, s })).join('');
const down = (x, y1, y2, c = 'w') => A(`M${x} ${y1}V${y2}`, c, 3);
const curve = (f, x0, x1, base, scale, cls, w = 4) => { let d = ''; for (let x = x0; x <= x1; x += 5) d += (x === x0 ? 'M' : 'L') + x + ' ' + (base - scale * f(x)).toFixed(1); return P(d, cls, w); };
const g = (x, m, s) => Math.exp(-((x - m) ** 2) / (2 * s * s));
const axes = (x0, x1, y0, y1, xl, yl) => P(`M${x0} ${y1}V${y0}M${x0} ${y1}H${x1}`, 'ds', 4) + T((x0 + x1) / 2, y1 + 38, xl, { a: 'middle', c: 'dt2' }) + `<g transform="translate(${x0 - 14} ${(y0 + y1) / 2}) rotate(-90)">${T(0, 0, yl, { a: 'middle', c: 'dt2' })}</g>`;

(function () { // Jablonski
  let s = H('Jablonski diagram');
  const num = (x, y, n) => C(x, y, 15, 'dfy dsy', 'fill-opacity=".9" stroke-width="2"') + T(x, y + 8, n, { a: 'middle', c: 'dt', s: 22, b: 1 });
  [[330, 'S₀'], [150, 'S₁']].forEach(([y, t]) => (s += P(`M60 ${y}H300`, 'ds', 5) + T(14, y + 8, t, { c: 'dt', b: 1, s: 26 }) + P(`M60 ${y - 14}H300`, 'ds3', 2) + P(`M60 ${y - 28}H300`, 'ds3', 2)));
  s += P('M360 230H560', 'ds', 5) + T(570, 238, 'T₁', { c: 'dt', b: 1, s: 26, a: 'end' }).replace('x="570"', 'x="565"').replace('y="238"', 'y="268"');
  s += A('M100 326V156', 'r', 5) + num(130, 250, '1');
  s += P('M200 124q-10 8 0 16t0 16', 'dsg', 4) + num(240, 100, '2');
  s += A('M260 156V324', 'r', 5) + num(230, 250, '3');
  s += P('M300 150Q340 150 380 226', 'dsb', 4, 'marker-end="url(#b)"') + num(345, 160, '4');
  s += A('M460 236V326', 'r', 5) + num(500, 290, '5') + P('M360 330H560', 'ds', 5).replace('M360 330H560', 'M330 330H560').replace('330H560', '330H560').replace('M330 330H560', 'M60 330H60');
  s += L(14, 420, ['1  absorption: S₀ up to S₁', '2  vibrational relaxation in S₁', '3  fluorescence: S₁ straight back to S₀', '4  intersystem crossing to T₁', '5  phosphorescence: T₁ down to S₀'], { c: 'dt2' });
  svg(600, s, 'm4-jablonski');
})();

(function () { // emission levels
  let s = H('Emission to level 2');
  const y = { 2: 400, 3: 300, 4: 240, 5: 205, 6: 180 };
  Object.entries(y).forEach(([n, yy]) => (s += P(`M60 ${yy}H540`, 'ds', 4) + T(30, yy + 8, n, { c: 'dt', b: 1 })));
  s += A('M90 396V184', 'y', 5).replace('M90 396V184', 'M100 392V186') + T(112, 300, 'absorb', { c: 'dty' });
  [[3, 'red', 'r', 200], [4, 'green', 'g', 280], [5, 'blue', 'b', 360], [6, 'violet', 'p', 440]].forEach(([n, nm, c, x]) => (s += A(`M${x} ${y[n] + 4}V396`, c, 5) + T(x, 440, `${n}→2`, { a: 'middle', c: 'dt', s: 22 }) + T(x, 468, nm, { a: 'middle', c: 'dt2' })));
  s += L(14, 520, ['A bigger drop means a more energetic,', 'bluer photon.'], { c: 'dt2' });
  svg(580, s, 'm4-emission-levels');
})();

(function () { // MO ladder
  let s = H('Orbital energy ladder');
  const y = { 'σ*': 90, 'π*': 160, n: 330, π: 400, σ: 470 };
  Object.entries(y).forEach(([n, yy]) => (s += P(`M60 ${yy}H540`, 'ds', 4) + T(24, yy + 8, n, { c: 'dt', b: 1, s: 26 })));
  [['n→π*', 'n', 'π*', 150], ['π→π*', 'π', 'π*', 250], ['n→σ*', 'n', 'σ*', 350], ['σ→σ*', 'σ', 'σ*', 450]].forEach(([t, a, b, x]) => (s += A(`M${x} ${y[a] - 4}V${y[b] + 6}`, 'r', 5) + T(x, 520, t, { a: 'middle', c: 'dtr', s: 22 })));
  s += T(300, 560, 'arrow length = energy the transition needs', { a: 'middle', c: 'dt2' });
  svg(600, s, 'm4-mo-ladder');
})();

(function () { // chromophore
  let s = H('Parts of an azo dye');
  s += box(20, 120, 150, 90, 'df2 ds', ['ring system'], 'dt') + box(430, 120, 150, 90, 'df2 ds', ['ring system'], 'dt');
  s += P('M170 165H240M360 165H430', 'ds', 4) + C(300, 165, 52, 'dfr dsr', 'fill-opacity=".25" stroke-width="4"') + T(300, 173, '–N=N–', { a: 'middle', c: 'dtr', b: 1, s: 26 });
  [[95, 80], [505, 80], [505, 250]].forEach(([x, y], i) => (s += P(`M${x} ${y < 150 ? 120 : 210}V${y < 150 ? y + 20 : y - 10}`, 'ds', 3) + R(x - 62, y - 30, 124, 50, 'dfb dsb', 'rx="25" fill-opacity=".3" stroke-width="3"').replace(/y="[\d.-]+"/, `y="${y < 150 ? 40 : 250}"`) + T(x, y < 150 ? 74 : 284, 'SO₃⁻Na⁺', { a: 'middle', c: 'dtb', s: 22 })));
  s += R(10, 105, 580, 120, 'ds2', 'fill="none" rx="16" stroke-dasharray="8 6" stroke-width="3"') + T(300, 98, '', {});
  s += L(14, 350, ['red: chromophore (–N=N–), makes the colour', 'blue: auxochromes (–SO₃⁻Na⁺), deepen it', 'dashed: chromogen (rings + chromophore)'], { c: 'dt2' });
  svg(440, s, 'm4-dye-chromophore');
})();

(function () { // shifts
  let s = H('Shifts in the absorption band');
  s += axes(70, 560, 60, 360, 'wavelength (nm): 200 → 700', 'absorbance') + curve((x) => g(x, 320, 60), 80, 550, 340, 220, 'dsb', 5);
  s += A('M380 180H500', 'o', 4) + T(440, 160, 'bathochromic', { a: 'middle', c: 'dto', b: 1, s: 22 }) + T(440, 212, '(to longer λ)', { a: 'middle', c: 'dto', s: 22 });
  s += A('M260 180H140', 'g', 4) + T(200, 160, 'hypsochromic', { a: 'middle', c: 'dtg', b: 1, s: 22 }) + T(200, 212, '(to shorter λ)', { a: 'middle', c: 'dtg', s: 22 });
  s += A('M320 128V80', 'r', 4) + T(430, 100, 'hyperchromic (up)', { c: 'dtr', s: 22, a: 'middle' }).replace('x="430"', 'x="420"') + A('M320 250V300', 'p', 4) + T(430, 292, 'hypochromic (down)', { c: 'dtp', s: 22 }).replace('x="430"', 'x="340"').replace('y="292"', 'y="320"');
  svg(440, s, 'm4-shift-diagram');
})();

(function () { // shift examples
  let s = H('Shift examples'), y = 56;
  const row = (name, a, b, arrow) => { s += T(14, y + 26, name, { s: 26, b: 1, c: 'dt' }); y += 40; s += box(14, y, 250, 90, 'dfb dsb', a, 'dt', 22) + A(`M264 ${y + 45}H336`, 'w', 4) + box(336, y, 250, 90, 'dfo dso', b, 'dt', 22) + T(300, y + 34, '', {}); y += 120; };
  row('Aniline in acid', ['aniline', 'λmax 280 nm, ε 1430'], ['anilinium ion', 'λmax 265 nm, ε 160']);
  row('Methyl group on pyridine', ['pyridine', 'λmax 257 nm, ε 2750'], ['2-methylpyridine', 'λmax 260 nm, ε 3560']);
  svg(y + 10, s, 'm4-shift-examples');
})();

(function () { // colour wheel
  let s = H('Colour wheel'), cx = 300, cy = 190, r = 140;
  const seg = [['violet', 'dfp', '400–430'], ['blue', 'dfb', '430–490'], ['green', 'dfg', '490–560'], ['yellow', 'dfy', '560–580'], ['orange', 'dfo', '580–620'], ['red', 'dfr', '620–800']];
  seg.forEach(([n, c], i) => { const a0 = (i * 60 - 90) * Math.PI / 180, a1 = ((i + 1) * 60 - 90) * Math.PI / 180, m = (a0 + a1) / 2; s += `<path d="M${cx} ${cy}L${(cx + r * Math.cos(a0)).toFixed(1)} ${(cy + r * Math.sin(a0)).toFixed(1)}A${r} ${r} 0 0 1 ${(cx + r * Math.cos(a1)).toFixed(1)} ${(cy + r * Math.sin(a1)).toFixed(1)}z" class="${c} ${c.replace('df', 'ds')}" fill-opacity=".6" stroke-width="3"/>` + T((cx + 90 * Math.cos(m)).toFixed(0), (cy + 90 * Math.sin(m) + 8).toFixed(0), n, { a: 'middle', c: 'dt', s: 22, b: 1 }); });
  s += L(14, 390, ['Boundaries (nm): violet 400–430, blue 430–490,', 'green 490–560, yellow 560–580, orange 580–620,', 'red 620–800.'], { c: 'dt2' });
  s += L(14, 500, ['A solution looks the colour directly opposite', 'the band it absorbs.'], { c: 'dt', b: 1 });
  svg(570, s, 'm4-colour-wheel');
})();

(function () { // dye absorbance
  let s = H('Two dyes, two colours');
  s += axes(70, 570, 60, 360, 'wavelength (nm): 400 → 800', 'absorbance') + curve((x) => g(x, 160, 55) * 0.9 + g(x, 250, 70) * 0.05, 80, 560, 340, 260, 'dsr', 5) + curve((x) => 0.7 * g(x, 360, 40) + 0.35 * g(x, 300, 30) + 0.1, 80, 560, 340, 260, 'dsb', 5);
  s += T(180, 80, 'Congo red', { c: 'dtr', b: 1 }) + T(420, 120, 'methylene blue', { c: 'dtb', b: 1, a: 'middle' });
  s += L(14, 430, ['Congo red absorbs green near 500 nm: looks red.', 'Methylene blue absorbs orange-red (600–700 nm):', 'looks blue.'], { c: 'dt2' });
  svg(520, s, 'm4-dye-absorbance');
})();

(function () { // dye structures
  let s = H('Two dyes');
  s += T(14, 80, 'Methylene blue', { s: 26, b: 1, c: 'dtb' });
  [140, 270, 400].forEach((x) => (s += `<path d="M${x} 130l30-18 30 18v34l-30 18-30-18z" class="dfb dsb" fill-opacity=".3" stroke-width="3"/>`));
  s += T(300, 156, 'S  N⁺', { a: 'middle', c: 'dt', b: 1, s: 22 }) + T(10, 156, 'N(CH₃)₂', { c: 'dtb' }) + T(472, 156, 'N(CH₃)₂', { c: 'dtb' });
  s += T(14, 230, 'a three-ring cation with two', { c: 'dt2' }) + T(14, 260, 'dimethylamino groups', { c: 'dt2' });
  s += P('M0 290H600', 'ds3', 2) + T(14, 330, 'Congo red', { s: 26, b: 1, c: 'dtr' });
  [[14, 'dfp'], [114, 'dfo'], [214, 'dfo'], [314, 'dfp']].forEach(([x, c]) => (s += `<path d="M${x} 380l25-15 25 15v28l-25 15-25-15z" class="${c}" fill-opacity=".35" stroke-width="3" stroke="currentColor"/>`));
  s += T(300, 452, '', {}) + L(14, 480, ['bis-azo dye: a biphenyl centre with an', '–N=N– link on each side to sulfonated', 'naphthylamine ends (–SO₃⁻).'], { c: 'dt2' });
  s += L(14, 590, ['Both have long conjugated systems that absorb', 'in the visible.'], { c: 'dt', b: 1 });
  svg(650, s, 'm4-dye-structures');
})();

(function () { // chlorophyll spectrum
  let s = H('Chlorophyll absorbs blue and red');
  s += axes(70, 570, 60, 360, 'wavelength (nm): 400 → 700', 'absorbance');
  const X = (nm) => 80 + (nm - 400) * 1.6;
  s += curve((x) => g(x, X(430), 22) * 0.95 + g(x, X(662), 20) * 0.65, 80, 560, 340, 260, 'dsg', 5) + curve((x) => g(x, X(460), 22) * 0.8 + g(x, X(642), 22) * 0.4, 80, 560, 340, 260, 'dsy', 5) + curve((x) => g(x, X(470), 50) * 0.55, 80, 560, 340, 260, 'dso', 4);
  s += T(90, 90, 'chlorophyll a', { c: 'dtg', b: 1 }) + T(90, 120, 'chlorophyll b', { c: 'dty', b: 1 }) + T(390, 90, 'carotenoids', { c: 'dto', b: 1 });
  s += L(14, 430, ['Little absorbed in the green: leaves look green.', 'Carotenoids absorb in the blue-green.'], { c: 'dt2' });
  svg(500, s, 'm4-chlorophyll-spectrum');
})();

(function () { // Beer-Lambert setup
  let s = H('Beer–Lambert law setup');
  s += box(10, 70, 100, 56, 'dfy dsy', ['source'], 'dt', 22) + A('M110 98H150', 'w', 3) + box(150, 50, 140, 96, 'dfp dsp', ['mono-', 'chromator'], 'dt', 22);
  s += A('M290 98H340', 'y', 4) + T(315, 80, 'I₀', { a: 'middle', c: 'dty', b: 1 });
  s += R(340, 50, 110, 150, 'dfb dsb', 'rx="6" fill-opacity=".3" stroke-width="3"') + P('M340 225H450', 'dsy', 3, 'marker-start="url(#y)" marker-end="url(#y)"') + T(395, 258, 'L', { a: 'middle', c: 'dty', b: 1 }) + T(395, 130, 'cuvette', { a: 'middle', c: 'dt', s: 22 });
  s += A('M450 98H520', 'y', 4) + T(485, 80, 'I', { a: 'middle', c: 'dty', b: 1 }) + R(520, 60, 20, 80, 'df3 ds', 'stroke-width="3"') + T(530, 165, 'screen', { a: 'middle', c: 'dt2', s: 22 });
  s += T(300, 330, 'A = εLC', { a: 'middle', c: 'dt', b: 1, s: 32, m: 1 }) + L(14, 390, ['A: absorbance, ε: molar absorptivity,', 'L: path length, C: concentration.', 'The fraction I/I₀ that gets through', 'falls as ε, L or C rise.'], { c: 'dt2' });
  svg(520, s, 'm4-beer-lambert-setup');
})();

(function () { // single beam path
  let s = H('Single-beam spectrometer'), y = 56;
  [['lamp and reflector', 'dfy dsy'], ['prism monochromator', 'dfp dsp'], ['slit', 'df2 ds2'], ['cuvette with sample', 'dfb dsb'], ['detector', 'dfg dsg'], ['amplifier', 'dfr dsr'], ['output: 0.122', 'df2 ds2']].forEach(([t, c], i) => { s += box(120, y, 360, 52, c, [t], 'dt'); if (i < 6) s += down(300, y + 52, y + 76); y += 76; });
  svg(y + 10, s, 'm4-single-beam');
})();

(function () { // Beckman card
  let s = H('Arnold O. Beckman');
  s += R(60, 80, 480, 150, 'df2 ds2', 'rx="14" stroke-width="3"') + L(300, 130, ['credited with creating', 'spectrophotometry', 'in 1940'], { a: 'middle', c: 'dt', s: 26 });
  svg(270, s, 'm4-beckman');
})();

(function () { // benchtop parts
  let s = H('A benchtop spectrometer');
  s += R(60, 70, 480, 220, 'df2 ds', 'rx="14" stroke-width="4"') + R(100, 100, 180, 80, 'dfb dsb', 'fill-opacity=".3" stroke-width="3"') + R(130, 120, 40, 60, 'dfw', 'fill-opacity=".5"') + R(330, 100, 170, 60, 'df3 ds', 'stroke-width="3"') + C(340, 240, 22, 'df3 ds', 'stroke-width="3"') + C(420, 240, 22, 'dfg dsg', 'fill-opacity=".5" stroke-width="3"') + C(490, 240, 14, 'dfr dsr', 'stroke-width="3"');
  [[190, 100, '1'], [150, 150, '2'], [415, 130, '3'], [340, 240, '4'], [420, 240, '5'], [490, 240, '6']].forEach(([x, y, n]) => (s += C(x, y, 17, 'dfy dsy', 'fill-opacity=".8" stroke-width="2"') + T(x, y + 8, n, { a: 'middle', c: 'dt', s: 22, b: 1 })));
  s += L(14, 340, ['1  sample compartment cover', '2  cuvette holder', '3  display', '4  wavelength adjustment', '5  zero setting (set T = 100 %)', '6  source lighting / on-off'], { c: 'dt' });
  svg(540, s, 'm4-benchtop-parts');
})();
