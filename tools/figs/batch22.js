// node tools/figs/batch22.js figs-svg -> last extras: entropy vs ln T (isobaric/isochoric), G vs reaction progress, metal resistivity vs T, resistivity bars, insulator breakdown.
const { T, L, A, P, R, C, mkSvg } = require('./lib');
const { axes, curve, line, dash } = require('./m1lib');
const OUT = process.argv[2] || 'figs-svg', svg = mkSvg(OUT);
const H = (t) => T(300, 34, t, { s: 28, b: 1, c: 'dt', a: 'middle' });
const key = (y, cls, t) => P(`M24 ${y - 7}H70`, cls, 5) + T(82, y, t, { s: 22, c: 'dt' });

(function () { // S vs ln T
  let s = H('Entropy rise on heating');
  s += axes(80, 60, 570, 400, 'ln T', 'S');
  s += P('M110 360L530 130', 'dsr', 5) + P('M110 360L530 230', 'dsb', 5) + C(110, 360, 7, 'dfw');
  s += T(110, 436, 'T initial', { a: 'middle', s: 22 }) + T(520, 436, 'T final', { a: 'end', s: 22 });
  s += key(480, 'dsr', 'constant P: slope Cp') + key(514, 'dsb', 'constant V: slope Cv');
  s += T(14, 560, 'Cp > Cv, so heating at constant P', { c: 'dt2', s: 22 }) + T(14, 590, 'raises the entropy more.', { c: 'dt2', s: 22 });
  svg(620, s, 'm1-entropy-isobaric-isochoric');
})();

(function () { // G vs reaction progress
  let s = H('Free energy along a reaction');
  const sx = (x) => 80 + x * 480, sy = (g) => 380 - g * 260;
  s += axes(80, 60, 570, 400, 'progress', 'G') + line(curve((x) => 1.6 * (x - 0.62) * (x - 0.62) + 0.05, 0.02, 0.98, sx, sy), 'dsb');
  s += A('M130 200L210 260', 'g', 5) + A('M520 230L460 290', 'r', 5);
  s += T(110, 180, 'ΔG < 0', { c: 'dtg', b: 1 }) + T(500, 210, 'ΔG > 0', { c: 'dtr', b: 1, a: 'middle' });
  s += C(sx(0.62), sy(0.05), 8, 'dfw') + T(sx(0.62), 436, 'equilibrium', { a: 'middle', s: 22 });
  s += T(80, 436, 'reactants', { s: 22 }) + T(570, 462, 'products', { a: 'end', s: 22 });
  s += L(14, 500, ['Forward is spontaneous where G falls', '(ΔG negative). The reaction settles at', 'the minimum of G.'], { c: 'dt2', s: 22 });
  svg(580, s, 'm1-gibbs-reaction-progress');
})();

(function () { // metal resistivity vs T
  let s = H('Metal resistivity against T');
  s += axes(80, 60, 570, 400, 'T', 'ρ');
  s += P('M110 300L540 150', 'dsb', 5) + P('M110 220L540 70', 'dsr', 5);
  s += dash('M110 300V400M110 220V300');
  s += A('M330 190V165', 'y', 3).replace('M330 190V165', 'M330 214V176') ;
  s += key(470, 'dsb', 'pure metal: rises with T') + key(504, 'dsr', 'with impurities: shifted up');
  s += T(14, 550, 'Impurities scatter electrons, so ρ is higher', { c: 'dt2', s: 22 }) + T(14, 580, 'at every temperature.', { c: 'dt2', s: 22 });
  svg(610, s, 'm3-metal-resistivity-temperature');
})();

(function () { // resistivity bars
  let s = H('Resistivity of metals');
  const data = [['Silver', 1.58, 'dfg dsg'], ['Copper', 1.68, 'dfo dso'], ['Gold', 2.21, 'dfy dsy'], ['Aluminium', 2.65, 'dfb dsb']];
  data.forEach(([n, v, c], i) => { const y = 70 + i * 80, w = v * 130; s += T(14, y + 36, n, { s: 24, b: 1, c: 'dt' }) + R(170, y, w, 52, c, 'rx="6" fill-opacity=".35" stroke-width="3"') + T(170 + w + 12, y + 36, String(v), { s: 24, b: 1, c: 'dt' }); });
  s += T(14, 420, 'µΩ·cm: lower resistivity, better conductor.', { c: 'dt2', s: 22 }) + T(14, 450, 'Copper is the standard; aluminium is lighter.', { c: 'dt2', s: 22 });
  svg(490, s, 'm3-metal-resistivity-bars');
})();

(function () { // insulator breakdown
  let s = H('Insulator under a rising field');
  s += axes(80, 60, 570, 400, 'field', 'current');
  s += P('M80 394H380C430 394 450 380 465 300C478 230 485 150 490 80', 'dsr', 5);
  s += dash('M470 300V400') + T(470, 462, 'breakdown', { a: 'middle', c: 'dtr', b: 1, s: 22 });
  s += T(110, 366, 'almost no current', { c: 'dt', s: 22 });
  s += L(14, 486, ['The wide gap keeps electrons in the valence', 'band. Only a very high field pushes enough', 'across, and the insulator breaks down.'], { c: 'dt2', s: 22 });
  svg(570, s, 'm3-insulator-breakdown');
})();
