// node tools/figs/batch13.js figs-svg -> Module 1: P-V diagrams for expansion work and the Carnot cycle (P-V and T-S).
const { T, L, A, P, R, C, mkSvg } = require('./lib');
const { axes, curve, path, line, mid, dash } = require('./m1lib');
const OUT = process.argv[2] || 'figs-svg', svg = mkSvg(OUT);
const H = (t) => T(300, 34, t, { s: 28, b: 1, c: 'dt', a: 'middle' });
const dot = (x, y) => C(x, y, 7, 'dfw');

(function () { // isothermal reversible vs irreversible
  const sx = (v) => 80 + v * 110, sy = (p) => 400 - p * 100, k = 3;
  let s = H('Isothermal expansion work');
  s += axes(80, 60, 570, 400, 'V', 'P');
  const area = path(curve((v) => k / v, 1, 3, sx, sy)) + `L${sx(3)} 400L${sx(1)} 400Z`;
  s += `<path d="${area}" class="dfb" fill-opacity=".28"/>` + P(`M${sx(1)} ${sy(1)}H${sx(3)}V400H${sx(1)}Z`, 'dfo dso', 3, 'fill-opacity=".5"');
  s += line(curve((v) => k / v, 0.9, 3.6, sx, sy), 'dsb') + dot(sx(1), sy(3)) + dot(sx(3), sy(1));
  s += dash(`M${sx(1)} ${sy(3)}V400M${sx(1)} ${sy(3)}H80M${sx(3)} ${sy(1)}H80`);
  s += T(sx(1), 432, 'V₁', { a: 'middle' }) + T(sx(3), 432, 'V₂', { a: 'middle' }) + T(70, sy(3) + 8, 'P₁', { a: 'end' }) + T(70, sy(1) + 8, 'P₂', { a: 'end' });
  s += T(sx(3) + 16, sy(1) - 36, 'isotherm', { c: 'dtb', b: 1 }) + T(sx(2), 372, 'irreversible', { a: 'middle', c: 'dt', s: 22 });
  s += L(14, 480, ['Blue plus orange: reversible,', 'w = −nRT ln(V₂/V₁)', 'Orange only: against the final pressure,', 'w = −P₂(V₂ − V₁), the smaller area'], { c: 'dt2', s: 22 });
  svg(600, s, 'm1-pv-isothermal');
})();

(function () { // adiabat vs isotherm
  const sx = (v) => 80 + v * 110, sy = (p) => 400 - p * 100, g = 1.4;
  let s = H('Adiabat against isotherm');
  s += axes(80, 60, 570, 400, 'V', 'P');
  s += line(curve((v) => 3 / v, 1, 3.2, sx, sy), 'dsb') + line(curve((v) => 3 * Math.pow(v, -g), 1, 3.2, sx, sy), 'dsr');
  s += dot(sx(1), sy(3)) + dot(sx(3.2), sy(3 / 3.2)) + dot(sx(3.2), sy(3 * Math.pow(3.2, -g)));
  s += T(sx(1) + 10, sy(3) - 14, 'A', { b: 1, c: 'dt' }) + T(sx(3.2) + 16, sy(3 / 3.2) + 4, 'B isotherm', { c: 'dtb', b: 1 }) + T(sx(3.2) + 16, sy(3 * Math.pow(3.2, -g)) + 10, 'C adiabat', { c: 'dtr', b: 1 });
  s += dash(`M${sx(3.2)} ${sy(0.3)}V400`) + T(sx(3.2), 432, 'V₂', { a: 'middle' }) + T(sx(1), 432, 'V₁', { a: 'middle' });
  s += L(14, 485, ['Same volume change from A.', 'The adiabat is steeper and ends lower,', 'since the gas cools as it does work.'], { c: 'dt2', s: 22 });
  svg(580, s, 'm1-pv-adiabatic');
})();

(function () { // isobaric and isochoric
  const sx = (v) => 80 + v * 110, sy = (p) => 250 - p * 70;
  let s = H('Isobaric and isochoric paths');
  s += T(14, 76, 'Isobaric: P constant', { s: 26, b: 1, c: 'dtb' }) + axes(80, 96, 570, 250, 'V', 'P');
  s += R(sx(1), sy(2), sx(3) - sx(1), 250 - sy(2), 'dfb', 'fill-opacity=".3"') + A(`M${sx(1)} ${sy(2)}H${sx(3) - 6}`, 'b', 5) + dot(sx(1), sy(2));
  s += T(sx(2), sy(1) + 4, 'w = −PΔV', { a: 'middle', c: 'dt', b: 1 }) + T(sx(2), 290, 'shaded area is the work', { a: 'middle', c: 'dt2', s: 22 });
  s += T(14, 350, 'Isochoric: V constant', { s: 26, b: 1, c: 'dto' }) + axes(80, 370, 570, 530, 'V', 'P');
  s += A(`M${sx(2)} 400V500`, 'o', 5) + dot(sx(2), 400);
  s += T(sx(2) + 24, 450, 'no area under it,', { c: 'dt', b: 1 }) + T(sx(2) + 24, 482, 'so w = 0', { c: 'dt', b: 1 });
  svg(575, s, 'm1-pv-isobaric-isochoric');
})();

(function () { // Carnot cycle on P-V
  const sx = (v) => 80 + v * 115, sy = (p) => 400 - p * 80, g = 2.2, kh = 4, V1 = 1, V2 = 2, V3 = 3.8, V4 = 1.9;
  const P2 = kh / V2, P3 = P2 * Math.pow(V3 / V2, -g), kc = P3 * V3;
  const c12 = curve((v) => kh / v, V1, V2, sx, sy), c23 = curve((v) => P2 * Math.pow(v / V2, -g), V2, V3, sx, sy);
  const c34 = curve((v) => kc / v, V3, V4, sx, sy), c41 = curve((v) => (kc / V4) * Math.pow(v / V4, -g), V4, V1, sx, sy);
  let s = H('Carnot cycle on a P-V diagram');
  s += axes(80, 60, 570, 400, 'V', 'P');
  s += `<path d="${path(c12)}${path(c23).replace('M', 'L')}${path(c34).replace('M', 'L')}${path(c41).replace('M', 'L')}Z" class="dfg" fill-opacity=".22"/>`;
  s += line(c12, 'dsr') + line(c23, 'dsy') + line(c34, 'dsb') + line(c41, 'dsy');
  s += mid(c12, 0.5, 'r') + mid(c23, 0.5, 'y') + mid(c34, 0.5, 'b') + mid(c41, 0.5, 'y');
  [[V1, kh / V1, 'A', -18, -12], [V2, P2, 'B', 14, -14], [V3, P3, 'C', 14, -14], [V4, kc / V4, 'D', -22, 28]].forEach(([v, p, t, dx, dy]) => { s += dot(sx(v), sy(p)) + T(sx(v) + dx, sy(p) + dy, t, { b: 1, c: 'dt', a: 'middle' }); });
  s += T(sx(1.5) + 50, sy(3) - 36, 'T hot', { c: 'dtr', b: 1 }) + T(sx(3.4) + 4, sy(1.6) + 44, 'T cold', { c: 'dtb', b: 1 });
  s += L(14, 460, ['A to B  isothermal expansion, heat in', 'B to C  adiabatic expansion, T falls', 'C to D  isothermal compression, heat out', 'D to A  adiabatic compression, T rises'], { c: 'dt2', s: 22 });
  s += T(14, 590, 'Enclosed area = net work done', { c: 'dtg', b: 1, s: 24 });
  svg(620, s, 'm1-carnot-pv');
})();

(function () { // Carnot cycle on T-S
  let s = H('Carnot cycle on a T-S diagram');
  s += axes(80, 60, 570, 360, 'S', 'T');
  s += R(190, 110, 290, 160, 'dfg', 'fill-opacity=".25"');
  s += P('M190 110H480', 'dsr', 5) + P('M480 110V270', 'dsy', 5) + P('M480 270H190', 'dsb', 5) + P('M190 270V110', 'dsy', 5);
  s += A('M300 110H340', 'r', 5) + A('M480 170V210', 'y', 5) + A('M370 270H330', 'b', 5) + A('M190 210V170', 'y', 5);
  s += T(176, 104, 'A', { b: 1, a: 'end', c: 'dt' }) + T(494, 104, 'B', { b: 1, c: 'dt' }) + T(494, 296, 'C', { b: 1, c: 'dt' }) + T(176, 296, 'D', { b: 1, a: 'end', c: 'dt' });
  s += T(335, 90, 'T hot', { c: 'dtr', b: 1, a: 'middle' }) + T(335, 304, 'T cold', { c: 'dtb', b: 1, a: 'middle' });
  s += T(335, 200, 'net work', { a: 'middle', c: 'dt', b: 1 });
  s += L(14, 420, ['Top: heat in, q = T hot × ΔS', 'Bottom: heat out, q = T cold × ΔS', 'Sides: adiabatic, S unchanged', '', 'Efficiency = 1 − T cold / T hot'], { c: 'dt2', s: 22 });
  svg(590, s, 'm1-carnot-ts');
})();
