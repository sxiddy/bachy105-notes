// node tools/figs/batch9.js figs-svg -> Module 4 figures: heat, waves, spectrum, spectroscopy trees, levels, probes, UV-vis window, atom vs molecule.
const { T, L, A, P, R, C, WAVE, mkSvg } = require('./lib');
const OUT = process.argv[2] || 'figs-svg', svg = mkSvg(OUT);
const H = (t, c = 'dt') => T(300, 34, t, { s: 28, b: 1, c, a: 'middle' });
const box = (x, y, w, h, cls, lines, tc = 'dt', s = 24) => R(x, y, w, h, cls, 'rx="10" fill-opacity=".3" stroke-width="3"') + lines.map((t, i) => T(x + w / 2, y + h / 2 + 8 - (lines.length - 1) * 15 + i * 30, t, { a: 'middle', c: tc, s })).join('');
const sine = (x0, y0, amp, len, cyc, cls, w = 4, ph = 0) => { let d = ''; for (let i = 0; i <= 80; i++) { const x = x0 + len * i / 80, y = y0 - amp * Math.sin(ph + cyc * 2 * Math.PI * i / 80); d += (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1); } return P(d, cls, w); };
const tree = (name, rootTxt, groups, h0 = 70) => { let s = box(120, 10, 360, 50, 'dfb dsb', [rootTxt]), y = h0 + 20; const top = y; groups.forEach(([t, c, items]) => { s += P(`M40 ${y + 22}H70`, 'ds', 3) + box(70, y, 500, 44, c, [t]) + items.map((it, i) => T(90, y + 74 + i * 30, '• ' + it, { c: 'dt2' })).join(''); y += 44 + items.length * 30 + 36; }); s = P(`M40 60V${y - 40}`, 'ds', 4) + s; svg(y + 10, s, name); };

(function () { // heat transfer
  let s = H('Three ways heat moves');
  s += R(150, 120, 220, 110, 'dfb dsb', 'rx="8" fill-opacity=".3" stroke-width="3"') + R(370, 140, 150, 22, 'df3 ds', 'stroke-width="3"');
  s += `<path d="M190 330Q210 280 230 330Q250 270 270 330Q290 280 310 330Q330 270 350 330z" class="dfo dso" fill-opacity=".6" stroke-width="3"/>`;
  s += A('M520 151H470', 'r', 4).replace('M520 151H470', 'M395 151H495') + T(445, 128, 'conduction', { a: 'middle', c: 'dtr', b: 1 }) + P('M200 160Q260 200 320 160', 'dsb', 4, 'marker-end="url(#b)"') + T(260, 215, 'convection', { a: 'middle', c: 'dtb', b: 1 });
  s += A('M170 300L110 270', 'o', 4) + A('M370 300L430 270', 'o', 4) + T(300, 372, 'radiation', { a: 'middle', c: 'dto', b: 1 });
  s += L(14, 420, ['Conduction warms the handle; convection', 'currents circulate the water; radiation', 'spreads heat out from the flame.'], { c: 'dt2' });
  svg(520, s, 'm4-heat-transfer');
})();

(function () { // particle vs wave
  let s = H('Particles vs waves behind a barrier'), y0 = 60;
  [['Particles: sharp shadow', 0], ['Waves: bend into the shadow', 1]].forEach(([t, k]) => {
    s += T(14, y0 + 20, t, { s: 26, b: 1, c: 'dt' }) + R(280, y0 + 80, 24, 120, 'dfw', 'fill-opacity=".6"') + C(60, y0 + 140, 18, 'dfy');
    if (!k) { [90, 110, 130, 150, 170, 190].forEach((y, i) => { s += P(`M100 ${y + y0 + 0}H${i < 2 || i > 4 ? 560 : 270}`, 'dsb', 3, 'stroke-dasharray="4 8"'); }); s += R(310, y0 + 80, 250, 120, 'df3', 'fill-opacity=".4"').replace('fill-opacity=".4"', 'fill-opacity=".4" stroke="none"') + T(430, y0 + 148, 'shadow', { a: 'middle', c: 'dt3' }); }
    else { [0, 1, 2].forEach((i) => (s += P(`M${120 + i * 40} ${y0 + 80}Q${140 + i * 40} ${y0 + 140} ${120 + i * 40} ${y0 + 200}`, 'dsb', 3))); [0, 1, 2].forEach((i) => (s += P(`M${340 + i * 50} ${y0 + 76}Q${300 + i * 50 + 20} ${y0 + 110} ${340 + i * 50} ${y0 + 170}Q${380 + i * 50} ${y0 + 190} ${340 + i * 50} ${y0 + 220}`, 'dsb', 3))); }
    y0 += 250;
  });
  svg(y0 + 20, s, 'm4-particle-wave');
})();

(function () { // EM wave
  let s = H('An electromagnetic wave');
  s += A('M30 260H570', 'w', 3) + T(570, 345, 'direction of travel', { a: 'end', c: 'dt3' });
  s += sine(40, 260, 100, 500, 2.5, 'dsb', 5) + sine(40, 260, 50, 500, 2.5, 'dso', 5, 0).replace(/d="([^"]+)"/, (m, d) => `d="${d.replace(/(-?\d+\.?\d*) (-?\d+\.?\d*)/g, (mm, x, y) => `${(+x + (260 - +y) * 0.5).toFixed(1)} ${(260 + (+y - 260) * 0.8).toFixed(1)}`)}"`);
  s += T(100, 120, 'E: electric field', { c: 'dtb', b: 1 }) + T(100, 150, '(vertical)', { c: 'dtb' }) + T(100, 380, 'B: magnetic field', { c: 'dto', b: 1 }) + T(100, 410, '(at right angles to E)', { c: 'dto' });
  s += L(14, 460, ['Both fields oscillate at right angles to', 'each other and to the direction of travel.'], { c: 'dt2' });
  svg(530, s, 'm4-em-wave');
})();

(function () { // wavelength and frequency
  let s = H('Wavelength, amplitude, frequency');
  s += sine(40, 130, 60, 520, 2, 'dsb', 5) + P('M40 130H560', 'ds3', 2, 'stroke-dasharray="6 6"');
  s += P('M155 52H35', 'ds3', 0) + A('M193 215H350', 'y', 3).replace('M193 215H350', 'M171 200H300') + P('M171 190V210M300 190V210', 'dsy', 3) + T(235, 235, 'wavelength λ', { a: 'middle', c: 'dty', b: 1 });
  s += P('M70 70V130', 'dsr', 3) + T(76, 100, 'amplitude', { c: 'dtr', b: 1, s: 22 }).replace('x="76"', 'x="320"').replace('y="100"', 'y="60"');
  s += T(40, 300, 'Higher frequency', { c: 'dtg', b: 1, s: 24 }) + sine(40, 350, 30, 520, 5, 'dsg', 4) + T(40, 430, 'Lower frequency', { c: 'dto', b: 1, s: 24 }) + sine(40, 480, 30, 520, 2, 'dso', 4);
  s += L(14, 545, ['Same window: the higher-frequency wave', 'fits more cycles in.'], { c: 'dt2' });
  svg(610, s, 'm4-wavelength-frequency');
})();

(function () { // EMR + matter
  let s = H('Light meets the sample');
  s += box(14, 56, 120, 56, 'dfy dsy', ['source'], 'dt') + box(166, 56, 206, 56, 'dfp dsp', ['monochromator'], 'dt', 22) + A('M134 84H166', 'w', 3) + A('M372 84H410', 'w', 3);
  s += box(410, 40, 170, 90, 'dfb dsb', ['sample'], 'dt') + A('M495 130V170', 'w', 3);
  ['reflection', 'refraction', 'absorption', 'transmission', 'scattering', 'emission'].forEach((t, i) => (s += box(40 + (i % 2) * 270, 180 + Math.floor(i / 2) * 76, 230, 56, 'df2 ds2', [t], 'dt')));
  s += L(14, 440, ['The sample can reflect, refract, absorb,', 'transmit, scatter or re-emit the light.', 'Detectors pick up each route.'], { c: 'dt2' });
  svg(540, s, 'm4-emr-matter');
})();

(function () { // EM spectrum chart
  let s = H('The electromagnetic spectrum');
  const rows = [['radio waves', 'dfr'], ['microwaves', 'dfo'], ['infrared', 'dfy'], ['visible', 'dfg'], ['ultraviolet', 'dfb'], ['X-rays', 'dfp'], ['gamma rays', 'dfw']];
  rows.forEach(([t, c], i) => { const y = 60 + i * 56; s += R(90, y, 480, 44, c + ' ' + c.replace('df', 'ds'), 'rx="8" fill-opacity=".4" stroke-width="3"') + T(330, y + 31, t, { a: 'middle', c: 'dt', s: 24, b: i === 3 }); });
  s += A('M45 440V66', 'b', 4) + T(14, 478, 'longer λ', { c: 'dt2' }) + A('M45 66V440', 'b', 4).replace('M45 66V440', 'M30 66V70') + T(14, 52, 'shorter?', { c: 'dt2' }).replace(/<text.*<\/text>/, '');
  s += L(14, 480, ['Wavelength falls from ≈ 10³ m (radio) to', '10⁻¹² m (gamma); frequency rises from', '10⁴ to 10²⁰ Hz. Visible light is a narrow', 'band near the middle.'], { c: 'dt2' });
  svg(620, s.replace(T(14, 478, 'longer λ', { c: 'dt2' }), ''), 'm4-em-spectrum-chart');
})();

tree('m4-spectroscopy-tree', 'Spectroscopy', [['Electromagnetic spectrum', 'dfb dsb', ['radio, microwave, infrared', 'UV-visible, AAS', 'X-ray diffraction, gamma ray']], ['Alpha particles', 'dfo dso', []], ['Beta particles', 'dfo dso', []], ['Protons', 'dfg dsg', []], ['Neutrons', 'dfg dsg', []], ['Acoustic waves', 'dfp dsp', []], ['Seismic waves', 'dfp dsp', []]]);

(function () { // abs / em levels
  let s = H('Absorption and emission');
  s += P('M60 100H340', 'ds', 6) + T(360, 110, 'E₁ (excited)', { c: 'dt' }) + P('M60 330H340', 'ds', 6) + T(360, 340, 'E₀ (ground)', { c: 'dt' });
  s += A('M130 320V112', 'b', 5) + T(110, 230, 'ABS', { a: 'end', c: 'dtb', b: 1, s: 26 }) + A('M270 112V320', 'r', 5) + T(290, 230, 'EM', { c: 'dtr', b: 1, s: 26 });
  s += T(300, 410, 'hν = ΔE = E₁ − E₀', { a: 'middle', c: 'dt', s: 28, m: 1 }) + T(300, 450, 'either way', { a: 'middle', c: 'dt3' });
  svg(480, s, 'm4-abs-em-levels');
})();

tree('m4-spectroscopy-classes', 'Spectroscopy', [['Atomic', 'dfb dsb', ['absorption: atomic absorption', 'emission: flame emission', 'electronic transitions', 'gives a line spectrum']], ['Molecular', 'dfo dso', ['absorption: UV-visible, IR', 'emission: fluorescence,', '   phosphorescence', 'electronic + vibrational + rotational', 'gives a band spectrum']]]);

(function () { // Mars rover
  let s = H('A Mars rover');
  s += P('M20 330H580', 'dso', 5) + R(180, 190, 240, 60, 'dfw', 'rx="8" fill-opacity=".3" stroke-width="3"') + P('M240 190V110H300', 'ds', 5) + R(280, 90, 60, 36, 'df3 ds', 'stroke-width="3"') + `<path d="M420 200L520 170V230L420 240z" class="dfb dsb" fill-opacity=".5" stroke-width="3"/>` + `<path d="M180 200L90 170V230L180 240z" class="dfb dsb" fill-opacity=".5" stroke-width="3"/>`;
  [200, 300, 400].forEach((x) => (s += C(x, 290, 30, 'df2 ds', 'stroke-width="4"') + C(x, 290, 8, 'dfw')));
  s += T(310, 80, 'mast with instruments', { a: 'middle', c: 'dt2' }) + T(70, 160, 'solar panel', { a: 'middle', c: 'dtb' }) + T(300, 380, 'red Martian ground', { a: 'middle', c: 'dto' });
  s += L(14, 430, ['Its spectrometers analyse rock, soil', 'and atmosphere on the spot.'], { c: 'dt2' });
  svg(500, s, 'm4-mars-rover');
})();

(function () { // Chandrayaan
  let s = H('Chandrayaan-3 on the Moon');
  s += C(480, 100, 36, 'dfb', 'fill-opacity=".6"') + T(480, 160, 'Earth', { a: 'middle', c: 'dt3' });
  s += `<path d="M0 340Q300 310 600 340V400H0z" class="df3 ds2" fill-opacity=".7" stroke-width="3"/>`;
  s += `<path d="M140 220H240L260 300H120z" class="dfy dsy" fill-opacity=".6" stroke-width="3"/>` + P('M120 300L90 330M260 300L290 330', 'ds', 4) + T(190, 260, 'lander', { a: 'middle', c: 'dt' });
  s += R(340, 290, 90, 36, 'dfw', 'rx="6" fill-opacity=".4" stroke-width="3"') + C(355, 332, 12, 'df2 ds', 'stroke-width="3"') + C(415, 332, 12, 'df2 ds', 'stroke-width="3"') + T(385, 282, 'rover', { a: 'middle', c: 'dt' });
  s += L(14, 440, ['Lander and rover carry X-ray and', 'laser-based spectrometers among', 'other probes.'], { c: 'dt2' });
  svg(540, s, 'm4-chandrayaan');
})();

(function () { // UV-vis window
  let s = H('The UV-visible window');
  s += R(30, 70, 120, 56, 'df2 ds2', 'stroke-width="3"') + R(150, 70, 180, 56, 'dfp dsp', 'fill-opacity=".35" stroke-width="3"') + R(330, 70, 20, 56, 'dfb', 'fill-opacity=".5"') + R(350, 70, 40, 56, 'dfg', 'fill-opacity=".5"') + R(390, 70, 40, 56, 'dfy', 'fill-opacity=".5"') + R(430, 70, 60, 56, 'dfr', 'fill-opacity=".5"') + R(490, 70, 80, 56, 'df3 ds2', 'stroke-width="3"');
  s += T(90, 106, 'UV', { a: 'middle', c: 'dt', b: 1 }) + T(300, 106, 'visible', { a: 'middle', c: 'dt', b: 1, s: 22 }).replace('x="300"', 'x="320"').replace('y="106"', 'y="106"') + T(530, 106, 'IR', { a: 'middle', c: 'dt', b: 1 });
  [[30, '100'], [150, '250'], [330, '400'], [490, '700']].forEach(([x, t]) => (s += P(`M${x} 126V146`, 'ds', 3) + T(x, 176, t, { a: 'middle', c: 'dt' })));
  s += T(300, 206, 'wavelength (nm): far UV 100 → near UV 400 → red 700', { a: 'middle', c: 'dt3' }).replace('wavelength (nm): far UV 100 → near UV 400 → red 700', 'wavelength in nm');
  s += A('M500 260H100', 'y', 4) + T(300, 250, 'energy and frequency rise', { a: 'middle', c: 'dty' });
  s += L(40, 330, ['E = hν', 'ν = E/h', 'λ = hc/E'], { c: 'dt', s: 26, m: 1 });
  svg(450, s, 'm4-uv-vis-window');
})();

(function () { // atom vs molecule
  let s = H('Atom, small molecule, large molecule'), y0 = 50;
  const panel = (t, sub, f) => { s += T(14, y0 + 28, t, { s: 26, b: 1, c: 'dt' }) + T(14, y0 + 58, sub, { c: 'dt2' }) + P(`M40 ${y0 + 230}H560`, 'ds', 3) + f(y0 + 230) + P(`M0 ${y0 + 262}H600`, 'ds3', 2); y0 += 280; };
  panel('Atom', 'one sharp line', (b) => P(`M300 ${b}V${b - 140}`, 'dsb', 6));
  panel('Small molecule', 'a comb of vibrational peaks', (b) => [0, 1, 2, 3, 4, 5, 6].map((i) => P(`M${150 + i * 50} ${b}V${b - 140 + Math.abs(3 - i) * 20}`, 'dso', 5)).join(''));
  panel('Large molecule', 'sub-levels blur into one broad band', (b) => `<path d="M60 ${b}Q300 ${b - 280} 540 ${b}" class="dfg dsg" fill-opacity=".3" stroke-width="5"/>`);
  svg(y0 + 10, s, 'm4-atom-vs-molecule');
})();
