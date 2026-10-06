// node tools/figs/batch21.js figs-svg -> Module 4 extras: Beer-Lambert calibration line and transmittance against absorbance.
const { T, L, A, P, R, C, mkSvg } = require('./lib');
const { axes, curve, line, dash } = require('./m1lib');
const OUT = process.argv[2] || 'figs-svg', svg = mkSvg(OUT);
const H = (t) => T(300, 34, t, { s: 28, b: 1, c: 'dt', a: 'middle' });

(function () { // calibration line
  let s = H('Absorbance against concentration');
  const sx = (c) => 80 + c * 46, sy = (a) => 400 - a * 300; // c in 1e-5 M, a up to 1.0
  s += axes(80, 60, 570, 400, 'C', 'A');
  s += P(`M80 400L${sx(10)} ${sy(0.84)}`, 'dsb', 5);
  s += dash(`M${sx(8.33)} ${sy(0.7)}V400M${sx(8.33)} ${sy(0.7)}H80`) + C(sx(8.33), sy(0.7), 8, 'dfw');
  s += T(70, sy(0.7) + 8, '0.70', { a: 'end', s: 22 }) + T(sx(8.33), 436, '8.33', { a: 'middle', s: 22 });
  s += T(130, 190, 'slope = εL', { c: 'dtb', b: 1 });
  s += L(14, 484, ['C in units of 10⁻⁵ M. A rises in a straight', 'line with C.', 'Read C from A: 0.70 gives 8.33 × 10⁻⁵ M', 'for ε = 8400 and L = 1 cm.'], { c: 'dt2', s: 22 });
  svg(600, s, 'm4-beer-calibration');
})();

(function () { // transmittance vs absorbance
  let s = H('Transmittance against absorbance');
  const sx = (a) => 80 + a * 200, sy = (t) => 400 - t * 3;
  s += axes(80, 60, 570, 400, 'A', '%T');
  s += line(curve((a) => 100 * Math.pow(10, -a), 0, 2.3, sx, sy), 'dso');
  [[0, '100%'], [1, '10%'], [2, '1%']].forEach(([a, t]) => { s += C(sx(a), sy(100 * Math.pow(10, -a)), 7, 'dfw') + dash(`M${sx(a)} ${sy(100 * Math.pow(10, -a))}V400`) + T(sx(a), 436, String(a), { a: 'middle', s: 22 }) + T(sx(a) + 14, sy(100 * Math.pow(10, -a)) + (a ? -12 : 30), t, { s: 22, c: 'dt', b: 1 }); });
  s += L(14, 484, ['A = −log T, so each extra unit of A', 'cuts the transmitted light tenfold.'], { c: 'dt2', s: 22 });
  svg(540, s, 'm4-transmittance-absorbance');
})();
