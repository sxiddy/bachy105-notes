// node tools/figs/batch14.js figs-svg -> Module 1: dG vs T (four sign cases), entropy vs T, [A] vs t for three orders, linear integrated plots.
const { T, L, A, P, R, C, mkSvg } = require('./lib');
const { axes, curve, path, line, dash } = require('./m1lib');
const OUT = process.argv[2] || 'figs-svg', svg = mkSvg(OUT);
const H = (t) => T(300, 34, t, { s: 28, b: 1, c: 'dt', a: 'middle' });
// legend row: short coloured line, then text
const key = (y, cls, tc, t) => P(`M24 ${y - 7}H70`, cls, 5) + T(82, y, t, { s: 22, c: 'dt' });

(function () { // dG vs T, four sign cases
  let s = H('ΔG° against temperature');
  s += P('M80 60V430', 'ds', 4) + P('M80 240H570', 'ds', 4) + T(570, 276, 'T', { a: 'end', c: 'dt2', b: 1 }) + T(92, 76, 'ΔG°', { c: 'dt2', b: 1 }) + T(92, 232, 'ΔG° = 0', { c: 'dt2', s: 22 });
  const ln = (y1, y2, cls, t, tc) => P(`M80 ${y1}L540 ${y2}`, cls, 5) + T(556, y2 + 8, t, { b: 1, c: tc });
  s += ln(255, 390, 'dsg', 'a', 'dtg') + ln(190, 320, 'dsb', 'b', 'dtb') + ln(310, 130, 'dso', 'c', 'dto') + ln(120, 62, 'dsr', 'd', 'dtr');
  s += T(300, 462, 'ΔG° = ΔH° − TΔS°: intercept ΔH°, slope −ΔS°', { a: 'middle', c: 'dt2', s: 22 });
  s += key(500, 'dsg', 'dtg', 'a  ΔH −, ΔS +: always negative') + key(534, 'dsb', 'dtb', 'b  ΔH +, ΔS +: negative at high T') + key(568, 'dso', 'dto', 'c  ΔH −, ΔS −: negative at low T') + key(602, 'dsr', 'dtr', 'd  ΔH +, ΔS −: always positive');
  svg(630, s, 'm1-gibbs-four-cases');
})();

(function () { // entropy vs T
  let s = H('Entropy against temperature');
  s += axes(80, 60, 570, 400, 'T', 'S');
  s += P('M80 400C120 396 165 372 200 335', 'dsb', 5) + P('M200 285C250 275 290 265 330 250', 'dsb', 5) + P('M330 130C400 118 470 108 540 100', 'dsb', 5);
  s += A('M200 335V290', 'r', 4) + A('M330 250V135', 'r', 4);
  s += dash('M200 335V400M330 250V400');
  s += T(200, 432, 'T melt', { a: 'middle', s: 22 }) + T(330, 432, 'T boil', { a: 'middle', s: 22 });
  s += T(150, 305, 'solid', { c: 'dtb', b: 1, a: 'middle' }) + T(268, 232, 'liquid', { c: 'dtb', b: 1, a: 'middle' }) + T(470, 152, 'gas', { c: 'dtb', b: 1, a: 'middle' });
  s += T(214, 332, 'ΔS fus', { c: 'dtr', s: 22 }) + T(318, 190, 'ΔS vap', { a: 'end', c: 'dtr', s: 22 });
  s += T(92, 392, '0', { s: 22, c: 'dt2' }).replace('x="92"', 'x="56"');
  s += L(14, 486, ['S = 0 for a perfect crystal at 0 K.', 'Entropy rises with T and jumps at each', 'phase change: ΔS = ΔH / T.'], { c: 'dt2', s: 22 });
  svg(590, s, 'm1-entropy-temperature');
})();

(function () { // [A] against t, three orders
  let s = H('[A] against time');
  s += axes(80, 60, 570, 400, 't', '[A]');
  const sx = (t) => 80 + t * 230, sy = (a) => 400 - a * 320;
  s += line(curve((t) => 1 - 0.5 * t, 0, 2, sx, sy, 20), 'dsg') + line(curve((t) => Math.exp(-0.5 * t), 0, 2, sx, sy), 'dsb') + line(curve((t) => 1 / (1 + 0.5 * t), 0, 2, sx, sy), 'dso');
  s += T(70, sy(1) + 8, '[A]₀', { a: 'end', s: 22 });
  s += key(480, 'dsg', 'dtg', 'zero order: straight line to zero') + key(514, 'dsb', 'dtb', 'first order: exponential decay') + key(548, 'dso', 'dto', 'second order: slows most, long tail');
  s += T(14, 590, 'Same [A]₀ and same starting rate.', { c: 'dt2', s: 22 });
  svg(610, s, 'm1-order-conc-time');
})();

(function () { // linear plots
  let s = H('Straight-line plots by order');
  const panel = (y0, title, cls, tc, yl, up, note) => {
    let p = T(14, y0, title, { s: 24, b: 1, c: tc }) + axes(80, y0 + 34, 570, y0 + 164, 't', yl);
    p += P(up ? `M100 ${y0 + 150}L540 ${y0 + 50}` : `M100 ${y0 + 50}L540 ${y0 + 150}`, cls, 5);
    p += T(560, up ? y0 + 90 : y0 + 90, note, { a: 'end', c: 'dt', b: 1, s: 22 }).replace(/y="[\d.]+"/, `y="${y0 + (up ? 130 : 60)}"`);
    return p;
  };
  s += panel(70, 'Zero order', 'dsg', 'dtg', '[A]', false, 'slope = −k');
  s += panel(300, 'First order', 'dsb', 'dtb', 'ln[A]', false, 'slope = −k');
  s += panel(530, 'Second order', 'dso', 'dto', '1/[A]', true, 'slope = +k');
  svg(760, s, 'm1-linear-rate-plots');
})();
