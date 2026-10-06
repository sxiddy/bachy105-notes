// node tools/figs/batch17.js figs-svg -> Module 3 (new units, chunk K): resistivity geometry, band formation, three classes, donor/acceptor levels, superconductor resistivity, Meissner effect.
const { T, L, A, P, R, C, mkSvg } = require('./lib');
const { axes, dash } = require('./m1lib');
const OUT = process.argv[2] || 'figs-svg', svg = mkSvg(OUT);
const H = (t) => T(300, 34, t, { s: 28, b: 1, c: 'dt', a: 'middle' });
const band = (x, y, w, h, cls, t) => R(x, y, w, h, cls, 'rx="6" fill-opacity=".3" stroke-width="3"') + T(x + w / 2, y + h / 2 + 8, t, { a: 'middle', c: 'dt', s: 22, b: 1 });

(function () { // resistivity geometry
  let s = H('Resistance of a wire');
  s += R(100, 110, 340, 100, 'dfo dso', 'rx="10" fill-opacity=".25" stroke-width="4"') + `<ellipse cx="440" cy="160" rx="22" ry="50" class="dfo dso" fill-opacity=".45" stroke-width="4"/>`;
  s += A('M30 160H90', 'r', 5) + T(60, 140, 'I', { a: 'middle', c: 'dtr', b: 1 }) + A('M470 160H560', 'r', 5);
  s += A('M270 240H100', 'w', 3) + A('M270 240H438', 'w', 3) + T(270, 276, 'length l', { a: 'middle', c: 'dt', b: 1 });
  s += T(440, 94, 'area A', { a: 'middle', c: 'dt', b: 1 });
  s += T(300, 350, 'R = ρ l / A', { a: 'middle', c: 'dt', b: 1, m: 1, s: 30 });
  s += L(14, 400, ['Longer wire: more resistance.', 'Thicker wire: less resistance.', 'ρ is the material, free of shape.'], { c: 'dt2', s: 22 });
  svg(490, s, 'm3-resistivity-geometry');
})();

(function () { // band formation
  let s = H('How energy bands form');
  s += P('M70 60V400H570', 'ds', 4) + T(92, 76, 'energy', { c: 'dt2', b: 1 }) + T(570, 434, 'atoms packed closer', { a: 'end', c: 'dt2', b: 1 });
  const fan = (y0, cls) => Array.from({ length: 6 }, (_, i) => P(`M110 ${y0}C190 ${y0} 230 ${y0 + (i - 2.5) * 14} 350 ${y0 + (i - 2.5) * 14}`, cls, 4)).join('');
  s += fan(130, 'dsb') + fan(290, 'dsg');
  s += R(344, 85, 12, 90, 'dfb', 'fill-opacity=".25"') + R(344, 245, 12, 90, 'dfg', 'fill-opacity=".25"');
  s += T(376, 134, 'upper band', { c: 'dtb', b: 1, s: 24 }) + T(376, 294, 'lower band', { c: 'dtg', b: 1, s: 24 }) + T(376, 214, 'gap', { c: 'dt2', s: 22 });
  s += T(110, 366, 'single atom: one level each', { c: 'dt', s: 22 });
  s += L(14, 480, ['Neighbouring atoms shift each level', 'up or down. Many close levels merge', 'into a band; inner levels barely move.'], { c: 'dt2', s: 22 });
  svg(570, s, 'm3-band-formation');
})();

(function () { // three classes
  let s = H('Bands of the three classes');
  const col = (x, title) => T(x + 85, 74, title, { a: 'middle', c: 'dt', b: 1, s: 22 });
  s += col(20, 'Conductor') + col(215, 'Semiconductor') + col(410, 'Insulator');
  s += band(20, 90, 170, 90, 'dfo dso', 'CB') + band(20, 150, 170, 120, 'dfb dsb', 'VB');
  s += band(215, 90, 170, 60, 'dfo dso', 'CB') + band(215, 190, 170, 80, 'dfb dsb', 'VB') + T(300, 176, '≈ 1 eV', { a: 'middle', c: 'dt', s: 22 });
  s += band(410, 90, 170, 40, 'dfo dso', 'CB') + band(410, 230, 170, 40, 'dfb dsb', 'VB') + T(495, 188, 'wide gap', { a: 'middle', c: 'dt', s: 22 });
  s += T(105, 304, 'no gap', { a: 'middle', c: 'dt2', s: 22 }) + T(300, 304, 'small gap', { a: 'middle', c: 'dt2', s: 22 }) + T(495, 304, 'large gap', { a: 'middle', c: 'dt2', s: 22 });
  s += L(14, 360, ['CB conduction band, VB valence band.', 'The gap decides whether a solid conducts.'], { c: 'dt2', s: 22 });
  svg(430, s, 'm3-band-classes');
})();

(function () { // donor / acceptor levels
  let s = H('Doped semiconductors');
  s += T(14, 66, 'n-type: donor level', { s: 24, b: 1, c: 'dtb' }) + band(60, 84, 330, 40, 'dfo dso', 'conduction band') + band(60, 220, 330, 40, 'dfb dsb', 'valence band');
  s += P('M60 156H390', 'dsg', 4, 'stroke-dasharray="10 6"') + C(150, 156, 7, 'dfw') + C(230, 156, 7, 'dfw') + C(310, 156, 7, 'dfw') + A('M230 148V128', 'g', 4) + T(400, 162, 'donor', { c: 'dtg', b: 1, s: 22 });
  s += T(14, 300, 'Electrons are the majority carriers.', { c: 'dt2', s: 22 });
  s += T(14, 362, 'p-type: acceptor level', { s: 24, b: 1, c: 'dto' }) + band(60, 380, 330, 40, 'dfo dso', 'conduction band') + band(60, 516, 330, 40, 'dfb dsb', 'valence band');
  s += P('M60 488H390', 'dsr', 4, 'stroke-dasharray="10 6"') + C(150, 488, 7, 'dfw', 'fill-opacity=".05" stroke="currentColor" stroke-width="3"') + C(230, 488, 7, 'dfw', 'fill-opacity=".05" stroke="currentColor" stroke-width="3"') + A('M230 514V496', 'r', 4) + T(400, 494, 'acceptor', { c: 'dtr', b: 1, s: 22 });
  s += T(14, 596, 'Holes are the majority carriers.', { c: 'dt2', s: 22 });
  svg(626, s, 'm3-donor-acceptor');
})();

(function () { // superconductor resistivity
  let s = H('Resistivity near T c');
  s += axes(80, 60, 570, 400, 'T', 'ρ');
  const nm = 'C200 290 300 235 540 110';
  s += P(`M80 300${nm}`, 'dsb', 5) + P('M80 400H260', 'dsg', 6) + P('M260 400V287', 'dsg', 6) + dash('M260 400V400');
  s += P('M260 287C340 252 420 200 540 110', 'dsb', 5).replace('stroke-width="5"', 'stroke-width="5" stroke-opacity="0"');
  s += dash('M260 287V400') + T(260, 434, 'T c', { a: 'middle', c: 'dt', b: 1 });
  s += T(100, 190, 'normal metal: levels off', { c: 'dtb', b: 1, s: 22 }) + T(100, 218, 'at a finite ρ', { c: 'dtb', b: 1, s: 22 });
  s += T(270, 380, 'superconductor: ρ = 0', { c: 'dtg', b: 1, s: 22 }).replace('x="270"', 'x="276"');
  s += L(14, 480, ['Below T c the resistivity drops to zero.', 'Mercury: T c = 4 K.'], { c: 'dt2', s: 22 });
  svg(550, s, 'm3-superconductor-resistivity');
})();

(function () { // Meissner effect
  let s = H('The Meissner effect');
  const panel = (cy, title, expel) => {
    let p = T(14, cy - 98, title, { s: 24, b: 1, c: expel ? 'dtg' : 'dtb' });
    [-90, -70, -50, -30, -10, 10, 30, 50, 70, 90].forEach((dy) => {
      const y = cy + dy, sg = dy < 0 ? -1 : 1, yo = cy + sg * Math.max(Math.abs(dy), 55);
      p += A(expel ? `M40 ${y}H190C240 ${y} 250 ${yo} 300 ${yo}C350 ${yo} 360 ${y} 410 ${y}H560` : `M40 ${y}H560`, 'b', 3);
    });
    p += `<ellipse cx="300" cy="${cy}" rx="70" ry="48" class="${expel ? 'dfg dsg' : 'dfo dso'}" fill-opacity=".5" stroke-width="4"/>` + T(300, cy + 8, expel ? 'T < T c' : 'T > T c', { a: 'middle', c: 'dt', b: 1, s: 22 });
    return p;
  };
  s += panel(190, 'Above T c: field passes through', false) + panel(450, 'Below T c: field is pushed out', true);
  svg(600, s, 'm3-meissner-effect');
})();
