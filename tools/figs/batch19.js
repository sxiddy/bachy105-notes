// node tools/figs/batch19.js figs-svg -> Module 5 (chunk M): method tree, orbital shapes, filling rules, H2 MO diagram, heteronuclear MO diagram.
const { T, L, A, P, R, C, mkSvg } = require('./lib');
const OUT = process.argv[2] || 'figs-svg', svg = mkSvg(OUT);
const H = (t) => T(300, 34, t, { s: 28, b: 1, c: 'dt', a: 'middle' });
const box = (x, y, w, h, cls, t, s = 24) => R(x, y, w, h, cls, 'rx="10" fill-opacity=".3" stroke-width="3"') + T(x + w / 2, y + h / 2 + 8, t, { a: 'middle', c: 'dt', s, b: 1 });
const lobe = (cx, cy, rx, ry, deg, cls) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" transform="rotate(${deg} ${cx} ${cy})" class="${cls}" fill-opacity=".4" stroke-width="3"/>`;
const POS = 'dfb dsb', NEG = 'dfo dso';
const up = (x, y) => A(`M${x} ${y}V${y - 46}`, 'w', 3), dn = (x, y) => A(`M${x} ${y - 46}V${y}`, 'w', 3);

(function () { // orbital shapes
  let s = H('Orbital shapes');
  const lab = (x, y, t) => T(x, y, t, { a: 'middle', c: 'dt', b: 1, s: 24 });
  s += C(75, 120, 36, POS, 'fill-opacity=".4" stroke-width="3"') + lab(75, 196, 's');
  s += lobe(225 - 38, 120, 38, 20, 0, POS) + lobe(225 + 38, 120, 38, 20, 0, NEG) + lab(225, 196, 'pₓ');
  s += lobe(375 - 27, 120 + 27, 38, 20, -45, POS) + lobe(375 + 27, 120 - 27, 38, 20, -45, NEG) + lab(375, 196, 'p_y');
  s += lobe(525, 120 - 38, 20, 38, 0, POS) + lobe(525, 120 + 38, 20, 38, 0, NEG) + lab(525, 196, 'p_z');
  const d1 = (cx, cy) => [[1, 1, POS], [-1, -1, POS], [1, -1, NEG], [-1, 1, NEG]].map(([a, b, c]) => lobe(cx + a * 30, cy + b * 30, 36, 18, (Math.atan2(b, a) * 180) / Math.PI, c)).join('');
  s += d1(100, 320) + lab(100, 396, 'dxy');
  s += lobe(300 - 40, 320, 36, 18, 0, POS) + lobe(300 + 40, 320, 36, 18, 0, POS) + lobe(300, 320 - 40, 18, 36, 0, NEG) + lobe(300, 320 + 40, 18, 36, 0, NEG) + lab(300, 396, 'dx²−y²');
  s += lobe(500, 320 - 40, 18, 34, 0, POS) + lobe(500, 320 + 40, 18, 34, 0, POS) + lobe(500, 320, 36, 9, 0, NEG) + lab(500, 396, 'dz²');
  s += L(14, 446, ['Blue and orange: opposite signs of the wave.', 'f orbitals have still more lobes.'], { c: 'dt2', s: 22 });
  svg(500, s, 'm5-orbital-shapes');
})();

(function () { // filling rules (nitrogen)
  let s = H('Filling orbitals: nitrogen');
  const cell = (x, ups, dns) => R(x, 70, 64, 64, 'df2 ds', 'stroke-width="3"') + (ups ? up(x + (dns ? 20 : 32), 118) : '') + (dns ? dn(x + 44, 118) : '');
  s += cell(40, 1, 1) + cell(150, 1, 1) + cell(290, 1, 0) + cell(360, 1, 0) + cell(430, 1, 0);
  s += T(72, 164, '1s', { a: 'middle', c: 'dt', s: 22 }) + T(182, 164, '2s', { a: 'middle', c: 'dt', s: 22 }) + T(392, 164, '2p', { a: 'middle', c: 'dt', s: 22 });
  s += T(300, 206, '1s² 2s² 2p³', { a: 'middle', c: 'dt', b: 1, m: 1, s: 24 });
  s += L(14, 262, ['Aufbau: fill the lowest levels first', 'Pauli: two electrons per box at most,', 'with opposite spins', 'Hund: fill equal-energy boxes singly,', 'spins parallel, before pairing up'], { c: 'dt', s: 22 });
  svg(430, s, 'm5-filling-rules');
})();

(function () { // H2 MO diagram
  let s = H('MO diagram of H₂');
  s += A('M36 400V70', 'w', 3) + T(48, 90, 'energy', { c: 'dt2', b: 1, s: 22 });
  const lv = (x1, x2, y, w = 5) => P(`M${x1} ${y}H${x2}`, 'ds', w);
  s += lv(90, 190, 220) + lv(410, 510, 220) + lv(250, 350, 130) + lv(250, 350, 310);
  s += P('M190 220L250 130M190 220L250 310M410 220L350 130M410 220L350 310', 'ds2', 2, 'stroke-dasharray="6 6"');
  s += up(140, 212) + dn(460, 212) + up(290, 302) + dn(310, 302);
  s += T(140, 252, '1s', { a: 'middle', c: 'dt', s: 22 }) + T(460, 252, '1s', { a: 'middle', c: 'dt', s: 22 }) + T(300, 112, 'σ*1s (antibonding)', { a: 'middle', c: 'dtr', b: 1, s: 22 }) + T(300, 346, 'σ1s (bonding)', { a: 'middle', c: 'dtg', b: 1, s: 22 });
  s += T(140, 290, 'H', { a: 'middle', c: 'dt2', s: 22 }) + T(460, 290, 'H', { a: 'middle', c: 'dt2', s: 22 });
  s += T(300, 394, 'Bond order = (2 − 0)/2 = 1', { a: 'middle', c: 'dt', b: 1, s: 24 });
  svg(430, s, 'm5-mo-h2');
})();

(function () { // heteronuclear MO diagram
  let s = H('MOs of a heteronuclear AB');
  s += A('M36 420V70', 'w', 3) + T(48, 90, 'energy', { c: 'dt2', b: 1, s: 22 });
  const lv = (x1, x2, y) => P(`M${x1} ${y}H${x2}`, 'ds', 5);
  s += lv(70, 170, 250) + lv(430, 530, 170) + lv(250, 350, 96) + lv(250, 350, 330);
  s += P('M170 250L250 330M170 250L250 96M430 170L350 96M430 170L350 330', 'ds2', 2, 'stroke-dasharray="6 6"');
  s += up(290, 322) + dn(310, 322);
  s += T(120, 286, 'φA, αA', { a: 'middle', c: 'dtg', b: 1, s: 22 }) + T(480, 206, 'φB, αB', { a: 'middle', c: 'dtb', b: 1, s: 22 });
  s += T(300, 78, 'Ψ₂: mostly φB', { a: 'middle', c: 'dt', s: 22 }) + T(300, 366, 'Ψ₁: mostly φA', { a: 'middle', c: 'dt', s: 22 });
  s += L(14, 412, ['A is more electronegative (lower α).', 'The bonding electrons sit mainly on A.'], { c: 'dt2', s: 22 });
  svg(470, s, 'm5-mo-heteronuclear');
})();
