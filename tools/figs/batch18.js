// node tools/figs/batch18.js figs-svg -> Module 3 (new units, chunk L): bar magnet, spin arrangements, susceptibility vs T, hysteresis loop, hard vs soft loops, superexchange.
const { T, L, A, P, R, C, mkSvg } = require('./lib');
const { axes, curve, line, dash } = require('./m1lib');
const OUT = process.argv[2] || 'figs-svg', svg = mkSvg(OUT);
const H = (t) => T(300, 34, t, { s: 28, b: 1, c: 'dt', a: 'middle' });
const key = (y, cls, t) => P(`M24 ${y - 7}H70`, cls, 5) + T(82, y, t, { s: 22, c: 'dt' });

(function () { // bar magnet
  let s = H('Magnetic dipole and field');
  s += R(150, 150, 150, 70, 'dfr dsr', 'rx="6" fill-opacity=".35" stroke-width="4"') + R(300, 150, 150, 70, 'dfb dsb', 'rx="6" fill-opacity=".35" stroke-width="4"');
  s += T(225, 196, 'N', { a: 'middle', b: 1, c: 'dt', s: 30 }) + T(375, 196, 'S', { a: 'middle', b: 1, c: 'dt', s: 30 });
  [35, 70, 105].forEach((h) => { s += A(`M170 150C${110 - h * 0.4} ${150 - h * 1.3} ${490 + h * 0.4} ${150 - h * 1.3} 430 150`, 'b', 3) + A(`M170 220C${110 - h * 0.4} ${220 + h * 1.3} ${490 + h * 0.4} ${220 + h * 1.3} 430 220`, 'b', 3); });
  s += L(14, 420, ['Field lines run from N to S outside the', 'magnet. Two opposite poles a small distance', 'apart form a magnetic dipole.'], { c: 'dt', s: 22 });
  svg(500, s, 'm3-bar-magnet-field');
})();

(function () { // spin arrangements
  let s = H('Spin arrangements');
  const xs = [100, 160, 220, 280, 340, 400, 460, 520];
  const arrow = (x, y0, len, up, c) => A(up ? `M${x} ${y0 + 30}V${y0 + 30 - len}` : `M${x} ${y0}V${y0 + len}`, c, 4);
  const rot = [20, 160, 70, 235, 120, 300, 200, 40];
  const row = (y0, title, tc, fn) => T(14, y0, title, { s: 24, b: 1, c: tc }) + xs.map((x, i) => fn(x, i, y0 + 20)).join('');
  s += row(70, 'Paramagnetic: random', 'dto', (x, i, y) => A(`M${x - 16 * Math.cos(rot[i] * Math.PI / 180)} ${y + 40 + 16 * Math.sin(rot[i] * Math.PI / 180)}L${x + 16 * Math.cos(rot[i] * Math.PI / 180)} ${y + 40 - 16 * Math.sin(rot[i] * Math.PI / 180)}`, 'o', 4));
  s += row(176, 'Ferromagnetic: all parallel', 'dtb', (x, i, y) => arrow(x, y + 10, 50, true, 'b'));
  s += row(282, 'Antiferromagnetic: equal, opposite', 'dtg', (x, i, y) => i % 2 ? arrow(x, y + 10, 50, false, 'g') : arrow(x, y + 10, 50, true, 'g'));
  s += row(388, 'Ferrimagnetic: unequal, opposite', 'dtp', (x, i, y) => i % 2 ? arrow(x, y + 10, 26, false, 'p') : arrow(x, y + 10, 52, true, 'p'));
  s += T(14, 496, 'Net moment: zero, large, zero, partial.', { c: 'dt2', s: 22 });
  svg(520, s, 'm3-spin-arrangements');
})();

(function () { // susceptibility vs T
  let s = H('Susceptibility against T');
  const panel = (y0, title, tc, cls, fn, xmark, mark, note) => {
    let p = T(14, y0, title, { s: 24, b: 1, c: tc }) + axes(80, y0 + 34, 570, y0 + 164, 'T', 'χ');
    p += line(fn, cls, 5);
    if (xmark) p += dash(`M${xmark} ${y0 + 34}V${y0 + 164}`) + T(xmark, y0 + 192, mark, { a: 'middle', c: 'dt', b: 1, s: 22 });
    p += T(560, y0 + 66, note, { a: 'end', c: 'dt', b: 1, s: 22 });
    return p;
  };
  const sx = (t) => 80 + t * 460;
  s += panel(70, 'Paramagnetic', 'dto', 'dso', curve((t) => 0.15 / t, 0.13, 1, sx, (v) => 234 - v * 100), 0, '', 'χ = C/T');
  s += panel(310, 'Ferromagnetic', 'dtb', 'dsb', curve((t) => 0.1 / (t - 0.3), 0.36, 1, sx, (v) => 474 - Math.min(v, 1.2) * 100), sx(0.3), 'θ (Curie)', 'χ = C/(T − θ)');
  s += panel(580, 'Antiferromagnetic', 'dtg', 'dsg', curve((t) => (t < 0.35 ? 0.25 + t * 0.7 : 0.495 - (t - 0.35) * 0.45), 0.02, 1, sx, (v) => 744 - v * 160), sx(0.35), 'T N (Néel)', 'peak at T N');
  svg(830, s, 'm3-chi-temperature');
})();

const tanh = Math.tanh;
(function () { // hysteresis loop
  const cx = 300, cy = 230, hc = 70, w = 70, ms = 150;
  const sx = (h) => cx + h, sy = (m) => cy - m;
  let s = H('Hysteresis loop');
  s += P(`M40 ${cy}H570`, 'ds', 4) + P(`M${cx} 56V410`, 'ds', 4) + T(570, cy + 30, 'H', { a: 'end', c: 'dt2', b: 1 }) + T(cx + 12, 72, 'M', { c: 'dt2', b: 1 });
  const desc = curve((h) => ms * tanh((h + hc) / w), -230, 230, sx, sy, 80), asc = curve((h) => ms * tanh((h - hc) / w), -230, 230, sx, sy, 80);
  s += line(desc, 'dsb', 5) + line(asc, 'dsb', 5) + line(curve((h) => ms * tanh(h / w), 0, 200, sx, sy, 40), 'dso', 4).replace('/>', 'stroke-dasharray="8 6"/>');
  const pt = (h, m, t, dx, dy) => C(sx(h), sy(m), 7, 'dfw') + T(sx(h) + dx, sy(m) + dy, t, { b: 1, c: 'dt', a: dx < 0 ? 'end' : 'start' });
  const mr = ms * tanh(hc / w);
  s += pt(230, ms * tanh(300 / w), 'P', -14, -14) + pt(0, mr, 'Q', 14, 30) + pt(-hc, 0, 'R', -14, 30) + pt(-230, -ms * tanh(300 / w), 'S', 14, 28);
  s += T(cx - 10, sy(ms) + 8, 'Ms', { a: 'end', c: 'dtb', b: 1, s: 22 }) + T(cx - 16, sy(mr) + 8, 'Mr', { a: 'end', c: 'dtb', b: 1, s: 22 }) + T(sx(hc), cy + 30, 'Hc', { a: 'middle', c: 'dtb', b: 1, s: 22 });
  s += L(14, 450, ['P saturation, Q remanence Mr, R coercivity Hc,', 'S reverse saturation. Dashed: first magnetisation.', 'Loop area = energy lost per cycle.'], { c: 'dt2', s: 22 });
  svg(540, s, 'm3-hysteresis-loop');
})();

(function () { // hard vs soft loops
  let s = H('Hard and soft magnets');
  const loop = (cy, hc, ms, w, cls, title, tc) => {
    const cx = 300, sx = (h) => cx + h, sy = (m) => cy - m;
    let p = T(14, cy - 100, title, { s: 24, b: 1, c: tc }) + P(`M40 ${cy}H570`, 'ds', 3) + P(`M${cx} ${cy - 90}V${cy + 90}`, 'ds', 3);
    p += `<path d="${[...curve((h) => ms * tanh((h + hc) / w), -230, 230, sx, sy, 80), ...curve((h) => ms * tanh((h - hc) / w), 230, -230, sx, sy, 80)].map((q, i) => (i ? 'L' : 'M') + q[0].toFixed(1) + ' ' + q[1].toFixed(1)).join('')}Z" class="${cls}" fill-opacity=".25" stroke-width="4"/>`;
    return p;
  };
  s += loop(190, 130, 70, 55, 'dfr dsr', 'Hard: wide loop, high coercivity', 'dtr') + loop(430, 22, 70, 22, 'dfb dsb', 'Soft: narrow loop, low coercivity', 'dtb');
  s += T(14, 590, 'Hard (Alnico): permanent magnets.', { c: 'dt2', s: 22 }) + T(14, 620, 'Soft (ferrous-nickel): cores, low loss.', { c: 'dt2', s: 22 });
  svg(650, s, 'm3-hard-soft-loops');
})();

(function () { // superexchange
  let s = H('Superexchange in NiO');
  const at = (x, r, t, cls) => C(x, 160, r, cls, 'fill-opacity=".3" stroke-width="4"') + T(x, 236 + (r > 55 ? 14 : 0), t, { a: 'middle', c: 'dt', b: 1, s: 24 });
  s += at(110, 52, 'Ni²⁺', 'dfb dsb') + at(300, 62, 'O²⁻', 'dfr dsr') + at(490, 52, 'Ni²⁺', 'dfb dsb');
  s += A('M110 190V130', 'b', 5) + A('M274 130V190', 'o', 5) + A('M326 190V130', 'b', 5) + A('M490 130V190', 'o', 5);
  s += L(14, 320, ['The two Ni ions never touch. The O²⁻', 'between them passes the spin along the line.', 'The paired spins on oxygen force the two', 'Ni spins to point opposite ways.'], { c: 'dt2', s: 22 });
  svg(450, s, 'm3-superexchange');
})();
