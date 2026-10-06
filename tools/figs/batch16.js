// node tools/figs/batch16.js figs-svg -> Module 1 (rest): first-law flows, Cv/Cp pistons, heat engine, rate slope, rate and half-life vs concentration, free expansion.
const { T, L, A, P, R, C, mkSvg } = require('./lib');
const { axes, curve, line, dash } = require('./m1lib');
const OUT = process.argv[2] || 'figs-svg', svg = mkSvg(OUT);
const H = (t) => T(300, 34, t, { s: 28, b: 1, c: 'dt', a: 'middle' });
const key = (y, cls, t) => P(`M24 ${y - 7}H70`, cls, 5) + T(82, y, t, { s: 22, c: 'dt' });
const dots = (cx, cy, r, n) => Array.from({ length: n }, (_, i) => { const a = i * 2.39996, d = r * Math.sqrt((i + 0.5) / n); return C((cx + d * Math.cos(a)).toFixed(1), (cy + d * Math.sin(a)).toFixed(1), 5, 'dfb'); }).join('');

(function () { // first law flows
  let s = H('Energy in and out of a system');
  s += R(190, 150, 220, 120, 'dfb dsb', 'rx="12" fill-opacity=".25" stroke-width="4"') + T(300, 200, 'system', { a: 'middle', c: 'dt', b: 1, s: 26 }) + T(300, 238, 'ΔU = q + w', { a: 'middle', c: 'dt', m: 1, s: 24 });
  s += A('M20 210H180', 'r', 5) + T(100, 190, 'q in (+)', { a: 'middle', c: 'dtr', b: 1 }) + A('M300 76V140', 'o', 5) + T(300, 66, 'w on system (+)', { a: 'middle', c: 'dto', b: 1 });
  s += A('M420 210H580', 'r', 5) + T(500, 190, 'q out (−)', { a: 'middle', c: 'dtr', b: 1 }) + A('M300 280V340', 'o', 5) + T(300, 372, 'w by system (−)', { a: 'middle', c: 'dto', b: 1 });
  s += L(14, 420, ['Energy in raises U; energy out lowers it.', 'q is heat, w is work, both counted from', 'the system side.'], { c: 'dt2', s: 22 });
  svg(500, s, 'm1-first-law-flows');
})();

(function () { // Cv vs Cp pistons
  let s = H('Why Cp is larger than Cv');
  const cyl = (y0, y1) => P(`M40 ${y0}V${y1}H190V${y0}`, 'ds', 5);
  s += T(14, 72, 'Constant volume', { s: 26, b: 1, c: 'dtb' });
  s += R(40, 96, 150, 114, 'dfb', 'fill-opacity=".2"') + cyl(86, 210) + P('M32 96H198', 'dsw', 8) + dots(115, 155, 48, 9) + A('M115 262V222', 'r', 5) + T(115, 290, 'heat q', { a: 'middle', c: 'dtr', s: 22 });
  s += L(225, 140, ['lid fixed, so w = 0', 'all the heat raises U', 'ΔU = q_v  gives Cv'], { c: 'dt', s: 22 });
  s += T(14, 345, 'Constant pressure', { s: 26, b: 1, c: 'dto' });
  s += R(40, 396, 150, 94, 'dfb', 'fill-opacity=".2"') + cyl(366, 490) + P('M32 396H198', 'dsw', 8) + P('M40 436H190', 'ds2', 2, 'stroke-dasharray="6 6"') + A('M115 430V404', 'o', 4) + dots(115, 450, 40, 8) + A('M115 542V502', 'r', 5) + T(115, 572, 'heat q', { a: 'middle', c: 'dtr', s: 22 });
  s += L(225, 420, ['piston rises, gas does work', 'heat pays for U and for w', 'ΔH = q_p  gives Cp'], { c: 'dt', s: 22 });
  s += T(14, 618, 'Same ΔT, more heat needed: Cp > Cv', { c: 'dtg', b: 1, s: 24 });
  svg(650, s, 'm1-cv-cp-pistons');
})();

(function () { // heat engine
  let s = H('A heat engine');
  s += R(150, 56, 300, 76, 'dfr dsr', 'rx="12" fill-opacity=".25" stroke-width="4"') + T(300, 104, 'hot reservoir, T hot', { a: 'middle', c: 'dt', b: 1, s: 24 });
  s += A('M300 138V200', 'r', 5) + T(316, 176, 'Q hot', { c: 'dtr', b: 1 });
  s += C(300, 262, 60, 'dfg dsg', 'fill-opacity=".25" stroke-width="4"') + T(300, 270, 'engine', { a: 'middle', c: 'dt', b: 1, s: 24 });
  s += A('M362 262H570', 'g', 5) + T(466, 244, 'work W', { a: 'middle', c: 'dtg', b: 1 });
  s += A('M300 328V390', 'b', 5) + T(316, 366, 'Q cold', { c: 'dtb', b: 1 });
  s += R(150, 396, 300, 76, 'dfb dsb', 'rx="12" fill-opacity=".25" stroke-width="4"') + T(300, 444, 'cold reservoir, T cold', { a: 'middle', c: 'dt', b: 1, s: 24 });
  s += L(14, 516, ['The engine runs in a cycle.', 'W = Q hot − Q cold (magnitudes)', 'efficiency = W / Q hot'], { c: 'dt2', s: 22 });
  svg(600, s, 'm1-heat-engine');
})();

(function () { // rate as slope
  const sx = (t) => 80 + t * 115, sy = (a) => 400 - a * 320, f = (t) => Math.exp(-t);
  let s = H('Rate is the slope');
  s += axes(80, 60, 570, 400, 't', '[R]') + line(curve(f, 0, 4, sx, sy), 'dsb');
  const tan = (t0, d, cls) => { const m = -f(t0) * 320 / 115; const x0 = sx(t0 - d), x1 = sx(t0 + d), y = sy(f(t0)); return P(`M${x0} ${y + m * (x0 - sx(t0))}L${x1} ${y + m * (x1 - sx(t0))}`, cls, 4) + C(sx(t0), y, 7, 'dfw'); };
  s += tan(0.5, 0.5, 'dsr') + tan(2, 0.9, 'dso');
  s += T(sx(0.5) + 38, sy(f(0.5)) - 36, 'steep: fast', { c: 'dtr', b: 1, s: 22 }) + T(sx(2) + 8, sy(f(2)) - 40, 'flatter: slower', { c: 'dto', b: 1, s: 22 });
  s += L(14, 462, ['Reactant concentration falls with time.', 'rate = −slope of the [R] curve at that time.', 'Rate drops as the reactant is used up.'], { c: 'dt2', s: 22 });
  svg(570, s, 'm1-rate-slope');
})();

(function () { // rate and half-life against concentration
  let s = H('Rate and half-life against [A]');
  const sx = (a) => 80 + a * 460;
  s += T(14, 66, 'Rate against [A]', { s: 24, b: 1, c: 'dt' }) + axes(80, 98, 570, 238, '[A]', 'rate');
  const sy1 = (r) => 238 - r * 130;
  s += line(curve(() => 0.5, 0, 1, sx, sy1, 4), 'dsg') + line(curve((a) => a, 0, 1, sx, sy1, 4), 'dsb') + line(curve((a) => a * a, 0, 1, sx, sy1), 'dso');
  s += T(14, 300, 'Half-life against starting [A]', { s: 24, b: 1, c: 'dt' }) + axes(80, 332, 570, 472, '[A]₀', 't½');
  const sy2 = (r) => 472 - r * 130;
  s += line(curve((a) => a, 0, 1, sx, sy2, 4), 'dsg') + line(curve(() => 0.5, 0, 1, sx, sy2, 4), 'dsb') + line(curve((a) => 0.25 / a, 0.25, 1, sx, sy2), 'dso');
  s += key(528, 'dsg', 'zero order') + key(562, 'dsb', 'first order') + key(596, 'dso', 'second order');
  s += T(14, 636, 'First order: t½ does not depend on [A]₀.', { c: 'dt2', s: 22 });
  svg(660, s, 'm1-rate-halflife-conc');
})();

(function () { // free expansion
  let s = H('A spontaneous change');
  const bulbs = (y, filledRight) => C(150, y, 66, 'dsb', 'fill="none" stroke-width="4"') + C(450, y, 66, 'dsb', 'fill="none" stroke-width="4"') + P(`M216 ${y}H384`, 'ds', 4) + C(300, y, 12, 'dfo dso', 'fill-opacity=".5" stroke-width="3"') + dots(150, y, 50, 14) + (filledRight ? dots(450, y, 50, 14) : '');
  s += T(14, 62, 'Before: valve shut', { s: 24, b: 1, c: 'dt' }) + bulbs(150, false);
  s += A('M300 236V286', 'o', 5) + T(316, 270, 'valve opens', { c: 'dto', b: 1, s: 22 });
  s += T(14, 330, 'After: gas fills both bulbs', { s: 24, b: 1, c: 'dt' }) + bulbs(430, true).replace(/<circle cx="150" cy="430" r="50"[^>]*>/, '');
  s += L(14, 540, ['The gas spreads out on its own. It never', 'gathers back into one bulb by itself.', 'Total entropy rises: ΔS total > 0.'], { c: 'dt2', s: 22 });
  svg(620, s, 'm1-free-expansion');
})();
