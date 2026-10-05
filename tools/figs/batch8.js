// node tools/figs/batch8.js figs-svg -> Module 3: sol-gel routes, quantum dots, cooling, and m4-spectroscopy.
const { T, L, A, P, R, C, WAVE, mkSvg } = require('./lib');
const OUT = process.argv[2] || 'figs-svg', svg = mkSvg(OUT);
const H = (t, c = 'dt') => T(300, 34, t, { s: 28, b: 1, c, a: 'middle' });
const box = (x, y, w, h, cls, lines, tc = 'dt', s = 24) => R(x, y, w, h, cls, 'rx="10" fill-opacity=".3" stroke-width="3"') + lines.map((t, i) => T(x + w / 2, y + h / 2 + 8 - (lines.length - 1) * 15 + i * 30, t, { a: 'middle', c: tc, s })).join('');
const down = (x, y1, y2, c = 'w') => A(`M${x} ${y1}V${y2}`, c, 3);
const rainbow = ['dfp', 'dfb', 'dfb', 'dfg', 'dfy', 'dfo', 'dfr', 'dfr'];
const dsOf = (c) => c.replace('df', 'ds');
let seed = 5; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

(function () { // sol-gel routes
  let s = H('Sol-gel routes');
  s += box(160, 54, 280, 50, 'dfb dsb', ['solution of precursors']) + down(300, 104, 124) + T(310, 120, '', {}) + box(160, 128, 280, 50, 'dfb dsb', ['sol']) + L(450, 128, ['hydrolysis,', 'polymerisation'], { c: 'dt3' }).replace('x="450"', 'x="450"');
  s += P('M300 178V204M300 204H150V224M300 204H450V224', 'ds', 3, 'marker-end="url(#w)"').replace('marker-end="url(#w)"', '');
  s += A('M150 204V226', 'w', 3) + A('M450 204V226', 'w', 3);
  s += T(150, 214, '', {}) + box(30, 230, 240, 90, 'dfg dsg', ['(a) spin- or dip-coat', 'the sol on a surface']) + box(330, 230, 240, 90, 'dfo dso', ['(b) condense and', 'gel: wet gel']);
  s += down(150, 320, 344) + down(450, 320, 344) + box(30, 348, 240, 56, 'df2 ds2', ['xerogel film']) + box(330, 348, 240, 56, 'df2 ds2', ['evaporate: xerogel']);
  s += down(150, 404, 428) + down(450, 404, 428) + T(150, 420, '', {}) + box(30, 432, 240, 70, 'dfr dsr', ['heat treatment:', 'dense film']) + box(330, 432, 240, 70, 'dfr dsr', ['heat treatment:', 'dense ceramic']);
  svg(530, s, 'm3-sol-gel-routes');
})();

(function () { // quantum dot structure
  let s = H('A quantum dot, layer by layer');
  s += C(300, 200, 100, 'dfw', 'fill-opacity=".12" stroke-width="3" stroke="none"') + C(300, 200, 100, 'dsw', 'fill="none" stroke-width="3" stroke-dasharray="8 6"') + C(300, 200, 72, 'dfr dsr', 'fill-opacity=".45" stroke-width="3"') + C(300, 200, 36, 'dfb dsb', 'fill-opacity=".7" stroke-width="3"');
  s += WAVE(20, 200, 4, 'dsb', 4) + A('M96 200H132', 'b', 4).replace('M96 200H132', 'M84 200H110') + WAVE(500, 200, 4, 'dsr', 4);
  s += T(60, 245, 'short', { a: 'middle', c: 'dtb' }) + T(540, 245, 'longer', { a: 'middle', c: 'dtr' });
  s += L(14, 350, ['centre: semiconductor core (blue)', 'QD shell around it (red)', 'outer protective shell (dashed)'], { c: 'dt' });
  s += T(14, 460, 'Short-wavelength light in, longer-wavelength', { c: 'dt2' }) + T(14, 490, 'glow out.', { c: 'dt2' });
  svg(520, s, 'm3-quantum-dots');
})();

(function () { // absorb / emit
  let s = H('Absorb, then emit');
  [[150, 'Absorption'], [450, 'Emission']].forEach(([cx, t], k) => {
    s += T(cx, 80, t, { a: 'middle', b: 1, c: 'dt', s: 26 }) + C(cx, 220, 110, 'df2 ds2', 'stroke-width="3" fill-opacity=".3"');
    s += P(`M${cx - 60} 280H${cx + 60}`, 'ds', 4) + P(`M${cx - 60} 160H${cx + 60}`, 'ds', 4) + T(cx + 66, 168, 'high', { c: 'dt3' }) + T(cx + 66, 288, 'low', { c: 'dt3' });
    s += k ? C(cx - 20, 290, 12, 'dfb') + A(`M${cx - 20} 260V190`, 'b', 3).replace(`M${cx - 20} 260V190`, `M${cx - 20} 170V262`) + WAVE(cx + 20, 215, 4, 'dsr', 4) : C(cx - 20, 150, 12, 'dfb').replace('150', '290') + A(`M${cx - 20} 260V180`, 'b', 3) + WAVE(cx - 120, 280, 4, 'dsy', 4).replace('', '');
  });
  s += T(150, 380, 'energy in lifts an electron', { a: 'middle', c: 'dt2' }) + T(450, 380, 'electron falls: light out', { a: 'middle', c: 'dt2' });
  svg(420, s, 'm3-qd-absorb-emit');
})();

(function () { // bulk vs dot
  let s = H('Bulk vs quantum dot');
  s += R(20, 56, 40, 40, 'dfb dsb', 'fill-opacity=".5" stroke-width="3"') + T(75, 85, 'bulk: bands, small gap', { c: 'dt' });
  s += R(70, 120, 220, 70, 'dfb', 'fill-opacity=".5"') + R(70, 230, 220, 70, 'dfr', 'fill-opacity=".5"') + P('M300 190V230', 'dsy', 4, 'marker-start="url(#y)" marker-end="url(#y)"') + T(310, 216, 'gap', { c: 'dty', b: 1 });
  s += R(320, 120, 260, 180, 'ds3', 'fill="none" stroke-width="2" stroke-dasharray="6 5"');
  s += [140, 164, 188].map((y) => P(`M340 ${y - 20}H480`, 'dsb', 5)).join('') + [250, 274, 298].map((y) => P(`M340 ${y + 20}H480`, 'dsr', 5)).join('');
  s += P('M505 136V298', 'dsy', 4, 'marker-start="url(#y)" marker-end="url(#y)"') + T(520, 222, 'gap', { c: 'dty', b: 1 }).replace('x="520"', 'x="515"');
  s += T(330, 340, 'quantum dot: few discrete', { c: 'dt' }) + T(330, 370, 'lines, much bigger gap', { c: 'dt' }) + T(30, 340, 'continuous bands', { c: 'dt' });
  svg(400, s, 'm3-qd-bulk-vs-dot');
})();

(function () { // vials
  let s = H('Colour of dots depends on size');
  const names = ['violet', 'blue', 'cyan', 'green', 'yellow', 'orange', 'red', 'deep red'];
  names.forEach((n, i) => { const x = 40 + i * 66; s += R(x, 80, 44, 130, rainbow[i] + ' ' + dsOf(rainbow[i]), 'rx="12" fill-opacity=".7" stroke-width="3"') + `<g transform="translate(${x + 4} 270) rotate(-60)">${T(0, 0, n, { c: 'dt', s: 22 })}</g>`; });
  s += T(40, 40, '', {});
  s += T(40, 395, 'smallest dots', { c: 'dt2' }) + T(560, 395, 'largest dots', { c: 'dt2', a: 'end' });
  svg(420, s, 'm3-qd-vials');
})();

(function () { // emission spectra vs radius
  let s = H('Bigger dot, smaller gap');
  const names = ['blue', 'green', 'yellow', 'orange', 'red'], cl = ['dfb', 'dfg', 'dfy', 'dfo', 'dfr'], nm = [473, 520, 560, 600, 655];
  names.forEach((n, i) => { const x = 60 + i * 100, g = 150 - i * 24; s += R(x - 14, 220 - g, 28, g, cl[i] + ' ' + dsOf(cl[i]), 'fill-opacity=".6" stroke-width="2"') + C(x, 260, 8 + i * 4, cl[i], 'fill-opacity=".8"') + T(x, 310, nm[i] + ' nm', { a: 'middle', c: 'dt', s: 22 }); });
  s += P('M30 225H570', 'ds', 3);
  s += A('M60 345H540', 'w', 3) + T(300, 380, 'QD radius grows →', { a: 'middle', c: 'dt' });
  s += L(14, 430, ['Peak emission slides from 473 nm (blue)', 'to 655 nm (deep red) as the radius grows.', 'Bar height = energy gap.'], { c: 'dt2' });
  svg(500, s, 'm3-qd-emission-spectra');
})();

(function () { // hot injection
  let s = H('Hot-injection synthesis');
  s += `<path d="M240 130V210L170 300Q160 330 200 330H400Q440 330 430 300L360 210V130" class="dfr dsr" fill-opacity=".35" stroke-width="3"/>` + R(180, 345, 240, 30, 'df3 ds', 'stroke-width="3"') + T(300, 396, 'heating mantle: > 200 °C', { a: 'middle', c: 'dto' });
  s += T(420, 90, 'syringe:', { c: 'dt2' }) + T(420, 118, 'precursors', { c: 'dt2' }) + A('M470 130L366 160', 'w', 3);
  s += T(130, 110, 'N₂ in', { a: 'middle', c: 'dtb', b: 1 }) + A('M130 125V170H240', 'b', 3);
  s += T(300, 110, 'condenser', { a: 'middle', c: 'dt2' });
  [0, 1, 2, 3].forEach((i) => (s += C(60, 250 + i * 40, 12, ['dfg', 'dfy', 'dfo', 'dfr'][i])));
  s += T(60, 232, '', {}) + L(14, 450, ['Precursors are injected into a hot,', 'high-boiling solvent under N₂. Dots grow', 'with time: green → yellow → orange → red.', 'Finished dots: core, shell and ligands.'], { c: 'dt2' });
  svg(580, s, 'm3-qd-hot-injection');
})();

(function () { // other synthesis routes
  let s = H('Three more QD routes'), y = 50;
  const blk = (t, cls, sub, f) => { s += P(`M0 ${y}H600`, 'ds3', 2) + T(14, y + 34, t, { s: 26, b: 1, c: 'dt' }) + L(14, y + 66, sub, { c: 'dt2' }) + `<g transform="translate(360 ${y})">${f()}</g>`; y += 190; };
  blk('1  Hydrothermal', '', ['Teflon-lined stainless', 'steel autoclave'], () => R(0, 30, 180, 120, 'dfw', 'rx="10" fill-opacity=".2" stroke-width="3"') + R(25, 55, 130, 70, 'dfb', 'fill-opacity=".4"') + T(90, 100, 'liner', { a: 'middle', c: 'dt' }));
  blk('2  Microwave', '', ['lab microwave reactor'], () => R(0, 40, 180, 100, 'df3 ds', 'rx="10" stroke-width="3"') + C(90, 90, 28, 'dfo', 'fill-opacity=".5"') + WAVE(40, 90, 4, 'dsy', 3));
  blk('3  Ultrasound', '', ['ultrasonic probe', 'in a beaker, ~15 min'], () => P('M90 20V90', 'dsw', 8) + `<path d="M30 80V150H150V80" class="dfb dsb" fill-opacity=".3" stroke-width="3" />` + WAVE(50, 125, 5, 'dsy', 3));
  svg(y + 10, s, 'm3-qd-synthesis-routes');
})();

(function () { // TEM
  let s = H('TEM image of quantum dots');
  for (let n = 0; n < 90; n++) s += C(30 + rnd() * 540, 60 + rnd() * 230, 14, 'dfw', 'fill-opacity=".45" stroke-width="2" stroke="none"');
  s += R(20, 56, 560, 240, 'ds3', 'fill="none" stroke-width="2"') + P('M440 276H540', 'ds', 6) + T(490, 262, '5 nm', { a: 'middle', c: 'dt', b: 1 });
  s += L(14, 340, ['Near-uniform round dots, each', 'a few nanometres wide.'], { c: 'dt2' });
  svg(400, s, 'm3-qd-tem');
})();

(function () { // applications
  let s = H('Quantum dots at work');
  s += T(14, 80, '1  Cell tagging', { s: 26, b: 1, c: 'dt' }) + [0, 1, 2].map((i) => C(110 + i * 90, 150, 26, 'dfg', 'fill-opacity=".6"') + C(110 + i * 90, 150, 8, 'dfg')).join('') + T(14, 220, 'tagged cancer cells glow green', { c: 'dt2' });
  s += P('M0 245H600', 'ds3', 2) + T(14, 285, '2  Metal-ion sensing grid', { s: 26, b: 1, c: 'dt' }) + L(14, 320, ['spot colour changes with the metal ion', 'added: Ni²⁺, Cd²⁺, Zn²⁺, Hg²⁺, Cu²⁺, Pb²⁺,', 'Ag⁺, Mn²⁺, Co²⁺, Cr(VI)'], { c: 'dt2' });
  [['dfr', 0], ['dfg', 1], ['dfy', 2], ['dfb', 3], ['dfo', 4]].forEach(([c, i]) => (s += C(60 + i * 60, 430, 20, c, 'fill-opacity=".8"')));
  s += P('M0 475H600', 'ds3', 2) + T(14, 515, '3  QD LEDs', { s: 26, b: 1, c: 'dt' }) + [['dfr', 'red'], ['dfg', 'green'], ['dfb', 'blue']].map(([c, n], i) => C(90 + i * 190, 575, 26, c) + T(90 + i * 190, 635, n, { a: 'middle', c: 'dt2' })).join('');
  svg(660, s, 'm3-qd-app-photos');
})();

(function () { // engine cooling
  let s = H('Car engine cooling');
  s += box(20, 60, 230, 120, 'dfr dsr', ['engine block', 'water jacket round', 'the cylinders'], 'dt', 22) + box(350, 60, 230, 120, 'dfb dsb', ['radiator'], 'dt') + box(430, 220, 150, 60, 'df3 ds', ['fan'], 'dt');
  s += A('M250 90H350', 'b', 4) + T(300, 82, 'hot', { a: 'middle', c: 'dtr' }) + A('M350 150H250', 'b', 4) + T(300, 188, 'cooled', { a: 'middle', c: 'dtb' });
  s += A('M505 220V184', 'w', 3) + T(300, 330, '', {});
  s += L(14, 330, ['Pump: pushes water through the jacket.', 'Thermostat: controls the flow to the radiator.', 'Fan: pulls air through to cool it.', 'The radiator also has a pressure cap,', 'drain cock and overflow pipe.'], { c: 'dt2' });
  svg(500, s, 'm3-engine-cooling');
})();

(function () { // cold plate loop
  let s = H('Liquid cooling of electronics');
  s += box(30, 60, 180, 76, 'dfo dso', ['cold plate', 'on chip 1'], 'dt', 22) + box(30, 170, 180, 76, 'dfo dso', ['cold plate', 'on chip 2'], 'dt', 22);
  s += box(390, 70, 180, 56, 'dfb dsb', ['heat exchanger'], 'dt', 22) + box(390, 180, 180, 56, 'dfg dsg', ['pump'], 'dt', 22);
  s += A('M210 98H390', 'r', 4) + T(300, 88, 'hot liquid', { a: 'middle', c: 'dtr' }) + A('M480 126V180', 'b', 4) + A('M390 208H300V150H210V208', 'b', 4).replace('M390 208H300V150H210V208', 'M390 208H300V208H210').replace(/V\d+/g, '');
  s += T(300, 232, 'cool liquid', { a: 'middle', c: 'dtb' });
  s += L(14, 310, ['Cold plates sit on the chips; tubing carries', 'the liquid to a heat exchanger, and a pump', 'sends it back round.'], { c: 'dt2' });
  svg(420, s, 'm3-cold-plate-loop');
})();

(function () { // dielectric coolant tree
  let s = box(120, 10, 360, 50, 'dfb dsb', ['Dielectric coolants'], 'dt'), y = 90;
  s += P('M40 60V420', 'ds', 4);
  [['Aromatics', 'dfp dsp', ['e.g. synthetic aromatic oils']], ['Aliphatic', 'dfg dsg', ['e.g. mineral / hydrocarbon oils']], ['Fluorocarbons', 'dfo dso', ['split into two:', 'HFE: hydrofluoroethers', 'PFC: perfluorocarbons']], ['Silicones', 'dfy dsy', ['e.g. silicone oils']]].forEach(([t, c, items]) => {
    s += P(`M40 ${y + 22}H70`, 'ds', 3) + box(70, y, 500, 44, c, [t], 'dt') + items.map((it, i) => T(90, y + 74 + i * 30, '• ' + it, { c: 'dt2' })).join('');
    y += 44 + items.length * 30 + 40;
  });
  svg(y + 10, s.replace('V420', 'V' + (y - 40)), 'm3-dielectric-tree');
})();

(function () { // spectrometer optical path (stacked)
  let s = H('Basic optical path');
  const step = (y, t, sub, cls) => (s += box(120, y, 360, 56, cls, [t], 'dt') + (sub ? T(500, y + 34, sub, { c: 'dt3', s: 22 }) : ''));
  step(60, 'light source', '', 'dfy dsy'); s += down(300, 116, 140);
  step(140, 'collimating lens', '', 'dfb dsb'); s += down(300, 196, 220);
  step(220, 'prism or grating', '', 'dfp dsp'); s += T(40, 254, 'splits light', { c: 'dt3' }) + down(300, 276, 300);
  step(300, 'slit: one band, I₀', '', 'df2 ds2'); s += down(300, 356, 380);
  step(380, 'cuvette with sample', '', 'dfb dsb'); s += down(300, 436, 460);
  step(460, 'photocell: reads Iₜ', '', 'dfg dsg'); s += down(300, 516, 540);
  step(540, 'display (e.g. 0.20)', '', 'df2 ds2');
  svg(620, s, 'm4-spectroscopy');
})();
