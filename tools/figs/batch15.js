// node tools/figs/batch15.js figs-svg -> Module 1: energy profile, catalyst profile, Arrhenius plot, collision orientation.
const { T, L, A, P, R, C, mkSvg } = require('./lib');
const { dash } = require('./m1lib');
const OUT = process.argv[2] || 'figs-svg', svg = mkSvg(OUT);
const H = (t) => T(300, 34, t, { s: 28, b: 1, c: 'dt', a: 'middle' });
const key = (y, cls, t) => P(`M24 ${y - 7}H70`, cls, 5) + T(82, y, t, { s: 22, c: 'dt' });
const dbl = (x, y1, y2, c) => A(`M${x} ${(y1 + y2) / 2}V${y1 + 6}`, c, 4) + A(`M${x} ${(y1 + y2) / 2}V${y2 - 6}`, c, 4);

(function () { // energy profile
  let s = H('Energy profile of a reaction');
  s += P('M70 60V400H570', 'ds', 4) + T(570, 434, 'reaction progress', { a: 'end', c: 'dt2', b: 1 }) + T(82, 76, 'energy', { c: 'dt2', b: 1 });
  s += P('M80 230H170C230 230 240 100 300 100C360 100 370 330 430 330H540', 'dsb', 5);
  s += dash('M120 100H300M170 230H500');
  s += dbl(130, 100, 230, 'y') + T(116, 172, 'Eₐ', { a: 'end', c: 'dty', b: 1 });
  s += dbl(500, 230, 330, 'o') + T(486, 288, 'ΔE', { a: 'end', c: 'dto', b: 1 });
  s += T(300, 82, 'activated complex', { a: 'middle', c: 'dt', s: 22 });
  s += T(100, 262, 'reactants', { c: 'dt', s: 22 }) + T(440, 362, 'products', { c: 'dt', s: 22 });
  s += L(14, 482, ['Eₐ: from the reactants up to the top of', 'the barrier. The lower Eₐ, the larger k.', 'ΔE (here negative) does not change k.'], { c: 'dt2', s: 22 });
  svg(570, s, 'm1-energy-profile');
})();

(function () { // catalyst profile
  let s = H('Effect of a catalyst');
  s += P('M70 60V400H570', 'ds', 4) + T(570, 434, 'reaction progress', { a: 'end', c: 'dt2', b: 1 }) + T(82, 76, 'energy', { c: 'dt2', b: 1 });
  s += P('M80 250H170C230 250 240 90 300 90C360 90 370 340 430 340H540', 'dsb', 5);
  s += P('M170 250C230 250 240 190 300 190C360 190 370 340 430 340', 'dsg', 5);
  s += dash('M120 90H300M150 190H300');
  s += dbl(120, 90, 250, 'b') + dbl(150, 190, 250, 'g');
  s += T(300, 72, 'uncatalysed barrier', { a: 'middle', c: 'dtb', s: 22 });
  s += T(100, 282, 'reactants', { c: 'dt', s: 22 }) + T(440, 372, 'products', { c: 'dt', s: 22 });
  s += key(482, 'dsb', 'uncatalysed: high Eₐ') + key(516, 'dsg', 'catalysed: lower Eₐ') ;
  s += L(14, 560, ['Same reactants, products and ΔE.', 'Only the barrier changes, so both the', 'forward and reverse reactions speed up.'], { c: 'dt2', s: 22 });
  svg(650, s, 'm1-catalyst-profile');
})();

(function () { // Arrhenius plot
  let s = H('Arrhenius plot');
  s += P('M80 60V420H570', 'ds', 4) + T(570, 454, '1/T', { a: 'end', c: 'dt2', b: 1 }) + T(92, 76, 'ln k', { c: 'dt2', b: 1 });
  s += dash('M80 100L200 176M80 100L200 134');
  s += P('M200 176L540 390', 'dsr', 5) + P('M200 134L540 230', 'dsb', 5);
  s += C(80, 100, 7, 'dfw') + T(66, 108, 'ln A', { a: 'end', c: 'dt', b: 1, s: 22 });
  s += key(500, 'dsr', 'steep: high Eₐ, strong T effect') + key(534, 'dsb', 'shallow: low Eₐ, weak T effect');
  s += T(14, 580, 'ln k = ln A − Eₐ/RT', { c: 'dt', b: 1, m: 1, s: 24 }) + T(14, 612, 'Slope = −Eₐ/R, intercept = ln A', { c: 'dt2', s: 22 });
  svg(640, s, 'm1-arrhenius-plot');
})();

(function () { // collision orientation, Cl + NOCl
  const atom = (x, y, r, t, cls) => C(x, y, r, cls, 'fill-opacity=".3" stroke-width="3"') + T(x, y + 8, t, { a: 'middle', c: 'dt', s: 22 });
  const mol = (x, y) => atom(x, y, 22, 'O', 'dfr dsr') + P(`M${x + 22} ${y}H${x + 52}`, 'ds', 4) + atom(x + 74, y, 22, 'N', 'dfb dsb') + P(`M${x + 96} ${y}H${x + 126}`, 'ds', 4) + atom(x + 154, y, 28, 'Cl', 'dfg dsg');
  let s = H('Orientation of the collision');
  s += T(14, 78, 'Cl meets the Cl end: reacts', { s: 24, b: 1, c: 'dtg' }) + mol(150, 150) + atom(520, 150, 28, 'Cl', 'dfg dsg') + A('M480 150H410', 'g', 5);
  s += T(300, 224, 'NO + Cl₂ forms', { a: 'middle', c: 'dt', s: 22 });
  s += T(14, 290, 'Cl meets the O end: no reaction', { s: 24, b: 1, c: 'dtr' }) + mol(300, 362) + atom(80, 362, 28, 'Cl', 'dfg dsg') + A('M120 362H260', 'r', 5);
  s += T(300, 436, 'the Cl bounces off', { a: 'middle', c: 'dt', s: 22 });
  s += L(14, 486, ['A reaction needs enough energy and', 'the right orientation.'], { c: 'dt2', s: 22 });
  svg(540, s, 'm1-collision-orientation');
})();
