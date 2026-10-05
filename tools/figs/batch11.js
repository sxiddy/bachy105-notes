// node tools/figs/batch11.js figs-svg -> Module 4: instruments, X-rays, diffraction and interference.
const fs = require('fs'), path = require('path');
const { T, L, A, P, R, C, WAVE, mkSvg } = require('./lib');
const OUT = process.argv[2] || 'figs-svg', svg = mkSvg(OUT);
const H = (t, c = 'dt') => T(300, 34, t, { s: 28, b: 1, c, a: 'middle' });
const box = (x, y, w, h, cls, lines, tc = 'dt', s = 24) => R(x, y, w, h, cls, 'rx="10" fill-opacity=".3" stroke-width="3"') + lines.map((t, i) => T(x + w / 2, y + h / 2 + 8 - (lines.length - 1) * 15 + i * 30, t, { a: 'middle', c: tc, s })).join('');
const down = (x, y1, y2, c = 'w') => A(`M${x} ${y1}V${y2}`, c, 3);
const sine = (x0, y0, amp, len, cyc, cls, w = 4, ph = 0) => { let d = ''; for (let i = 0; i <= 80; i++) d += (i ? 'L' : 'M') + (x0 + len * i / 80).toFixed(1) + ' ' + (y0 - amp * Math.sin(ph + cyc * 2 * Math.PI * i / 80)).toFixed(1); return P(d, cls, w); };
let seed = 11; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const hex = (cx, cy, r, cls, w = 3) => `<path d="M${cx - r} ${cy}l${r / 2} ${-r * 0.87}h${r}l${r / 2} ${r * 0.87}l${-r / 2} ${r * 0.87}h${-r}z" class="${cls}" fill-opacity=".3" stroke-width="${w}"/>`;

(function () { // UV-vis photo -> schematic
  let s = H('A benchtop UV-Vis instrument');
  s += R(60, 150, 480, 150, 'df2 ds', 'rx="14" stroke-width="4"') + `<path d="M80 150L120 80H300L340 150z" class="dfb dsb" fill-opacity=".3" stroke-width="3"/>` + T(210, 125, 'lid over sample', { a: 'middle', c: 'dt', s: 22 }) + T(210, 150, '', {});
  s += R(360, 170, 160, 100, 'df3 ds', 'stroke-width="3"') + P('M375 250Q410 190 440 235T505 200', 'dsg', 4) + [0, 1, 2].map((i) => R(110 + i * 40, 230, 28, 28, 'dfw', 'fill-opacity=".5"')).join('');
  s += T(440, 295, '', {}) + L(14, 360, ['Built-in screen plots the spectrum;', 'keypad sets wavelength and scan.'], { c: 'dt2' }) + T(440, 140, 'screen', { a: 'middle', c: 'dt', s: 22 }) + T(170, 285, 'keypad', { a: 'middle', c: 'dt', s: 22 });
  svg(420, s, 'm4-uv-vis-photo');
})();

(function () { // double beam
  let s = H('Double-beam spectrometer');
  s += box(20, 56, 160, 50, 'dfp dsp', ['D₂ lamp'], 'dt', 22) + box(220, 56, 160, 50, 'dfy dsy', ['tungsten lamp'], 'dt', 22) + down(100, 106, 134) + down(300, 106, 134);
  s += box(60, 138, 300, 46, 'df2 ds2', ['mirror'], 'dt') + down(210, 184, 206) + box(110, 210, 200, 46, 'dfb dsb', ['filter wheel'], 'dt') + down(210, 256, 278) + box(110, 282, 200, 46, 'dfb dsb', ['monochromator'], 'dt') + down(210, 328, 350) + box(110, 354, 200, 46, 'df2 ds2', ['beam splitter'], 'dt');
  s += A('M160 400V430', 'w', 3) + A('M260 400V430', 'w', 3) + box(30, 434, 160, 56, 'dfg dsg', ['sample'], 'dt') + box(230, 434, 160, 56, 'dfo dso', ['reference'], 'dt');
  s += A('M110 490V516', 'w', 3) + A('M310 490V516', 'w', 3) + box(30, 520, 160, 50, 'df3 ds', ['photodiode'], 'dt', 22) + box(230, 520, 160, 50, 'df3 ds', ['photodiode'], 'dt', 22);
  s += P('M110 570V595H310V570', 'ds', 3) + A('M210 595V612', 'w', 3) + box(80, 616, 260, 50, 'dfr dsr', ['data processing'], 'dt') + down(210, 666, 690) + box(80, 694, 260, 50, 'df2 ds2', ['absorbance readout'], 'dt');
  svg(770, s, 'm4-double-beam');
})();

(function () { // Q2 structure
  let s = H('Sort the groups A–E');
  s += hex(240, 210, 50, 'dfw dsw') + hex(327, 260, 50, 'dfw dsw').replace('M277 260', 'M277 260');
  s += P('M200 150L170 100', 'ds', 4) + C(160, 85, 22, 'dfy dsy', 'fill-opacity=".8" stroke-width="2"') + T(160, 93, 'A', { a: 'middle', c: 'dt', b: 1 });
  s += P('M377 260H440', 'ds', 4) + C(470, 260, 22, 'dfy dsy', 'fill-opacity=".8" stroke-width="2"') + T(470, 268, 'B', { a: 'middle', c: 'dt', b: 1 });
  s += C(285, 235, 20, 'dfy dsy', 'fill-opacity=".8" stroke-width="2"') + T(285, 243, 'C', { a: 'middle', c: 'dt', b: 1 });
  s += P('M215 300L190 360', 'ds', 4) + C(180, 385, 22, 'dfy dsy', 'fill-opacity=".8" stroke-width="2"') + T(180, 393, 'D', { a: 'middle', c: 'dt', b: 1 });
  s += P('M300 320L380 380', 'ds', 4) + C(400, 395, 22, 'dfy dsy', 'fill-opacity=".8" stroke-width="2"') + T(400, 403, 'E', { a: 'middle', c: 'dt', b: 1 });
  s += L(14, 460, ['A  –OH', 'B  –CH=N– (linked to a cyclopentadiene ring)', 'C  the naphthalene ring system', 'D  a propyl chain', 'E  an amide, –CONH₂'], { c: 'dt' });
  s += T(14, 630, 'Task: sort them into chromophores and auxochromes.', { c: 'dt3' });
  svg(670, s, 'm4-q2-structure');
})();

(function () { // X-rays on the spectrum
  let s = H('Where X-rays sit'), x = 30;
  [['visible', 'dfg', 80], ['UV', 'dfb', 90], ['soft X', 'dfp', 120], ['hard X', 'dfr', 130], ['γ', 'dfw', 120]].forEach(([t, c, w]) => { s += R(x, 66, w, 50, c + ' ' + c.replace('df', 'ds'), 'fill-opacity=".4" stroke-width="3"') + T(x + w / 2, 98, t, { a: 'middle', c: 'dt', s: 22 }); x += w; });
  s += A('M30 150H570', 'y', 3) + T(30, 190, 'longer λ, lower energy', { c: 'dt3' }) + T(570, 190, 'shorter λ, higher energy', { c: 'dt3', a: 'end' });
  s += L(14, 260, ['Soft X-rays border the UV;', 'hard X-rays run into gamma rays.'], { c: 'dt2' }) + L(14, 350, ['Each use works in its own slice of', 'photon energy:'], { c: 'dt' });
  ['X-ray crystallography', 'mammography', 'medical CT', 'airport security'].forEach((t, i) => (s += box(30, 410 + i * 64, 300, 50, 'df2 ds2', [t], 'dt')));
  svg(690, s, 'm4-xrays');
})();

(function () { // first radiograph
  let s = H('The first radiograph');
  s += R(100, 120, 140, 160, 'dfw', 'rx="20" fill-opacity=".25" stroke-width="0"') + [0, 1, 2, 3].map((i) => R(110 + i * 34, 40 + (i === 1 || i === 2 ? 0 : 30) + 20, 22, 100, 'dfw', 'rx="10" fill-opacity=".25"')).join('') + R(70, 190, 20, 70, 'dfw', 'rx="10" fill-opacity=".25"').replace('x="70"', 'x="76"');
  s += C(155, 120, 11, 'dfy dsy', 'fill-opacity=".9" stroke-width="3"').replace('cx="155" cy="120"', 'cx="154" cy="140"');
  s += T(300, 120, 'ring', { c: 'dty', s: 22 }) + P('M270 112L174 138', 'ds2', 2);
  s += L(14, 340, ['The hand of Anna Bertha Ludwig,', 'wife of Wilhelm Röntgen.', 'Bone and the ring show up: they absorb', 'X-rays more strongly than flesh.'], { c: 'dt2' });
  svg(470, s, 'm4-first-radiograph');
})();

(function () { // X-ray tube schematic
  let s = H('X-ray tube');
  s += R(30, 60, 540, 160, 'dfw', 'rx="40" fill-opacity=".08" stroke-width="0"') + R(30, 60, 540, 160, 'ds', 'fill="none" rx="40" stroke-width="3"');
  s += P('M110 140q15-14 30 0t30 0', 'dso', 5) + T(140, 108, 'heated filament', { a: 'middle', c: 'dto', s: 22 }) + T(140, 240, 'cathode (−)', { a: 'middle', c: 'dt', s: 22 });
  [100, 130, 160].forEach((y, i) => (s += A(`M190 ${y}H420`, 'b', 3)));
  s += `<path d="M440 80L500 120V220H440z" class="dfw dsw" fill-opacity=".4" stroke-width="3"/>` + T(480, 250, 'anode', { a: 'middle', c: 'dt', s: 22 }) + T(480, 276, '(water-cooled)', { a: 'middle', c: 'dt', s: 22 });
  s += T(300, 190, 'vacuum', { a: 'middle', c: 'dt3', s: 22 }) + A('M455 160L420 215', 'y', 4) + A('M455 160L455 215', 'y', 4).replace('M455 160L455 215', 'M470 170L480 225') + T(300, 262, 'X-rays', { a: 'middle', c: 'dty', b: 1 });
  s += P('M140 220V320H480V220', 'ds', 4) + C(310, 320, 30, 'df2 ds', 'stroke-width="4"') + T(310, 328, 'HV', { a: 'middle', c: 'dt', b: 1 });
  s += L(14, 390, ['The high voltage pulls electrons from the', 'hot cathode across the vacuum. X-rays leave', 'where they hit the metal target.'], { c: 'dt2' });
  svg(480, s, 'm4-xray-tube-schematic');
})();

(function () { // tube photos
  let s = H('Two X-ray tubes');
  s += T(14, 80, 'Modern sealed tube', { s: 26, b: 1, c: 'dt' }) + R(60, 110, 400, 90, 'df2 ds', 'rx="16" stroke-width="3"') + T(100, 165, 'cathode', { a: 'middle', c: 'dt', s: 22 }) + T(420, 165, 'anode', { a: 'middle', c: 'dt', s: 22 }) + A('M260 210V250', 'y', 4) + T(300, 240, 'X-ray exit', { c: 'dty', s: 22 });
  s += P('M0 290H600', 'ds3', 2) + T(14, 330, 'Old Crookes tube', { s: 26, b: 1, c: 'dt' }) + `<ellipse cx="300" cy="420" rx="150" ry="70" class="df2 ds" stroke-width="3" fill-opacity=".5"/>` + P('M150 420H190M410 420H450', 'ds', 5) + T(300, 428, 'glass bulb', { a: 'middle', c: 'dt3', s: 22 });
  svg(540, s, 'm4-xray-tube-photos');
})();

(function () { // bremsstrahlung
  let s = H('Bremsstrahlung') + '<g transform="translate(0 60)">';
  s += C(300, 200, 22, 'dfr dsr', 'fill-opacity=".7" stroke-width="3"') + T(300, 242, 'nucleus', { a: 'middle', c: 'dt', s: 22 });
  s += P('M20 195Q260 190 330 100', 'dsb', 4, 'marker-end="url(#b)"') + WAVE(360, 80, 4, 'dsy', 3) + T(430, 100, 'highest energy', { c: 'dty', s: 22 });
  s += P('M20 120Q240 120 360 40', 'dsb', 4).replace('M20 120Q240 120 360 40', 'M20 130Q300 140 520 100') + WAVE(450, 150, 4, 'dsy', 3).replace(/M450 150/, 'M440 150') + T(430, 180, 'medium', { c: 'dty', s: 22 }) + P('M20 60Q300 60 560 30', 'dsb', 4, 'marker-end="url(#b)"') + T(300, 52, 'lowest energy (distant)', { a: 'middle', c: 'dty', s: 22 });
  s += '</g>';
  s += L(14, 380, ['Electrons that pass close to the nucleus bend', 'hard and give high-energy photons; distant', 'ones lose little. Together: a continuous', 'X-ray spectrum.'], { c: 'dt2' });
  svg(500, s, 'm4-bremsstrahlung');
})();

(function () { // characteristic emission
  let s = H('Characteristic X-ray emission');
  s += C(300, 200, 140, 'ds3', 'fill="none" stroke-width="2"') + C(300, 200, 90, 'ds3', 'fill="none" stroke-width="2"') + C(300, 200, 45, 'ds3', 'fill="none" stroke-width="2"') + C(300, 200, 10, 'dfr') + T(300, 130, 'K', { a: 'middle', c: 'dt', b: 1 }) + T(300, 80, 'L', { a: 'middle', c: 'dt', b: 1 }).replace('y="80"', 'y="105"') + T(300, 62, 'M', { a: 'middle', c: 'dt', b: 1 }).replace('y="62"', 'y="58"');
  s += A('M30 200L250 200', 'b', 4) + T(40, 180, 'incoming e⁻', { c: 'dtb', s: 22 }) + C(255, 215, 8, 'dfb') + A('M262 210L330 270', 'b', 3) + T(340, 290, 'ejected e⁻', { c: 'dtb', s: 22 }) + A('M250 190L180 120', 'b', 3) + T(60, 110, 'scattered', { c: 'dtb', s: 22 }) + C(345, 175, 8, 'dfb') + A('M350 168L320 235', 'b', 2).replace('M350 168L320 235', 'M345 175L318 213') + WAVE(400, 100, 4, 'dsy', 4) + T(480, 100, 'X-ray', { c: 'dty', b: 1 });
  s += L(14, 400, ['The incoming electron ejects a K-shell electron.', 'An outer electron falls into the hole and', 'releases a characteristic X-ray photon.'], { c: 'dt2' });
  svg(500, s, 'm4-characteristic-emission');
})();

(function () { // line spectrum
  let s = H('X-ray spectrum');
  s += P('M70 340V60M70 340H570', 'ds', 4) + T(320, 380, 'wavelength', { a: 'middle', c: 'dt2' }) + `<g transform="translate(40 200) rotate(-90)">${T(0, 0, 'intensity', { a: 'middle', c: 'dt2' })}</g>`;
  let d = 'M120 340'; for (let x = 120; x <= 560; x += 10) d += `L${x} ${340 - 170 * Math.exp(-((x - 260) ** 2) / 6000) - 6}`; s += P(d, 'dsb', 5);
  s += P('M190 330V120', 'dsr', 5) + T(190, 105, 'Kα', { a: 'middle', c: 'dtr', b: 1 }) + P('M222 330V160', 'dsr', 5) + T(235, 145, 'Kβ', { a: 'middle', c: 'dtr', b: 1 }).replace('x="235"', 'x="150"').replace('y="145"', 'y="140"') + P('M420 335V260', 'dsr', 4) + T(420, 245, 'L', { a: 'middle', c: 'dtr', b: 1 });
  s += T(14, 440, 'smooth hump: continuous X-rays;', { c: 'dt2' }) + T(14, 470, 'sharp lines: characteristic X-rays', { c: 'dt2' });
  s += P('M0 495H600', 'ds3', 2) + [['K', 530], ['L', 585], ['M', 640], ['N', 680]].map(([n, y]) => P(`M60 ${y}H200`, 'ds', 4) + T(30, y + 8, n, { c: 'dt', b: 1 })).join('') + A('M110 580V534', 'r', 4) + A('M150 635V588', 'r', 4);
  s += T(230, 560, 'electrons dropping into the K and L', { c: 'dt2' }).replace('x="230"', 'x="230"') + T(230, 590, 'shells make the lines', { c: 'dt2' });
  svg(720, s, 'm4-line-spectrum');
})();

(function () { // diffraction through a door
  let s = H('Diffraction: light through a door');
  s += R(30, 70, 540, 300, 'dfw', 'fill-opacity=".05"') + R(30, 70, 540, 300, 'ds', 'fill="none" stroke-width="3"') + R(30, 70, 30, 120, 'dfw', 'fill-opacity=".6"') + R(30, 250, 30, 120, 'dfw', 'fill-opacity=".6"');
  s += `<path d="M60 190L560 90V340L60 250z" class="dfy" fill-opacity=".25"/>` + A('M10 220H58', 'y', 4);
  s += L(14, 420, ['Light spills through the gap and spreads', 'across the floor: the everyday face of', 'diffraction around corners.'], { c: 'dt2' });
  svg(500, s, 'm4-diffraction-door');
})();

(function () { // interference
  let s = H('Interference');
  const blk = (y, title, c, a2) => { s += T(14, y, title, { s: 26, b: 1, c }) + sine(30, y + 70, 24, 160, 2, 'dsb', 4) + T(210, y + 78, '+', { c: 'dt', b: 1, s: 28 }) + sine(240, y + 70, 24, 160, 2, 'dso', 4, a2 ? Math.PI : 0) + T(410, y + 78, '=', { c: 'dt', b: 1, s: 28 }) + (a2 ? P(`M440 ${y + 70}H570`, 'dsg', 5) : sine(440, y + 70, 48, 130, 2, 'dsg', 5)); };
  blk(60, 'Constructive: in phase, one taller wave', 'dtg', false);
  s += P('M0 220H600', 'ds3', 2);
  blk(250, 'Destructive: out of phase, a flat line', 'dtr', true);
  svg(380, s, 'm4-interference-waves');
})();

(function () { // Young double slit
  let s = H("Young's double slit");
  s += T(14, 90, 'laser', { c: 'dty', b: 1, s: 22 }) + A('M10 200H110', 'y', 5);
  s += R(120, 60, 16, 110, 'dfw', 'fill-opacity=".6"') + R(120, 188, 16, 24, 'dfw', 'fill-opacity=".6"').replace('y="188"', 'y="190"') + R(120, 230, 16, 110, 'dfw', 'fill-opacity=".6"');
  [180, 220].forEach((y) => [0, 1, 2].forEach((i) => (s += `<path d="M136 ${y}m0 ${-30 - i * 30}a${30 + i * 30} ${30 + i * 30} 0 0 1 0 ${(30 + i * 30) * 2}" class="dsb" fill="none" stroke-width="2"/>`.replace(/m0 -?\d+/, `m0 0`).replace(/a\d+ \d+ 0 0 1 0 \d+/, `a${30 + i * 40} ${30 + i * 40} 0 0 1 0 0`))));
  s += T(200, 190, 'overlapping waves', { c: 'dtb', s: 22 }) + T(200, 220, '(reinforce / cancel)', { c: 'dtb', s: 22 });
  s += R(460, 60, 30, 280, 'df3 ds', 'stroke-width="3"') + [0, 1, 2, 3, 4].map((i) => R(462, 80 + i * 56, 26, 28, 'dfr', 'fill-opacity=".8"')).join('') + T(475, 366, 'screen', { a: 'middle', c: 'dt2', s: 22 });
  s += L(14, 420, ['Coherent light through two slits: bright', 'bands where waves reinforce, dark bands', 'where they cancel.'], { c: 'dt2' });
  svg(500, s, 'm4-young-double-slit');
})();

(function () { // microstructure types = the silicon structures figure, relabelled
  let t = fs.readFileSync(path.join(OUT, 'm2-pv-si-structures.svg'), 'utf8');
  fs.writeFileSync(path.join(OUT, 'm4-microstructure-types.svg'), t.replace('Single crystal (mono)', 'Crystalline').replace('every atom in a perfect pattern', 'one regular array'));
})();
