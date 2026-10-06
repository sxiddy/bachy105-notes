// node tools/figs/batch20.js figs-svg -> Module 5 (chunk N): orbital overlap, potential energy curve, PES contours, SN2 profile, water normal modes, ML workflow.
const { T, L, A, P, R, C, mkSvg } = require('./lib');
const { axes, curve, line, dash } = require('./m1lib');
const OUT = process.argv[2] || 'figs-svg', svg = mkSvg(OUT);
const H = (t) => T(300, 34, t, { s: 28, b: 1, c: 'dt', a: 'middle' });
const key = (y, cls, t) => P(`M24 ${y - 7}H70`, cls, 5) + T(82, y, t, { s: 22, c: 'dt' });
const box = (x, y, w, h, cls, lines) => R(x, y, w, h, cls, 'rx="10" fill-opacity=".3" stroke-width="3"') + lines.map((t, i) => T(x + w / 2, y + h / 2 + 8 - (lines.length - 1) * 14 + i * 28, t, { a: 'middle', c: 'dt', s: i ? 22 : 24, b: !i })).join('');
const lobe = (cx, cy, rx, ry, cls) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" class="${cls}" fill-opacity=".4" stroke-width="3"/>`;
const POS = 'dfb dsb', NEG = 'dfo dso';
const node = (x, y) => P(`M${x} ${y - 44}V${y + 44}`, 'ds2', 2, 'stroke-dasharray="5 5"');

(function () { // orbital overlap
  let s = H('Orbital overlap');
  const rows = [
    ['σ and σ*: p–p head-on', 150, (cx, y, anti) => lobe(cx - 77, y, 22, 17, NEG) + lobe(cx - 13, y, 34, 20, POS) + lobe(cx + 13, y, 34, 20, anti ? NEG : POS) + lobe(cx + 77, y, 22, 17, anti ? POS : NEG) + (anti ? node(cx, y) : '')],
    ['π and π*: p–p sideways', 360, (cx, y, anti) => lobe(cx - 22, y - 30, 24, 32, POS) + lobe(cx + 22, y - 30, 24, 32, anti ? NEG : POS) + lobe(cx - 22, y + 30, 24, 32, NEG) + lobe(cx + 22, y + 30, 24, 32, anti ? POS : NEG) + (anti ? P(`M${cx} ${y - 66}V${y + 66}`, 'ds2', 2, 'stroke-dasharray="5 5"') : '')],
    ['σ and σ*: s–p', 570, (cx, y, anti) => C(cx - 45, y, 30, POS, 'fill-opacity=".4" stroke-width="3"') + lobe(cx + 13, y, 34, 20, anti ? NEG : POS) + lobe(cx + 77, y, 22, 17, anti ? POS : NEG) + (anti ? node(cx - 16, y) : '')]
  ];
  rows.forEach(([t, y, fn]) => { s += T(14, y - 84, t, { s: 24, b: 1, c: 'dt' }) + fn(165, y, false) + fn(435, y, true) + T(165, y + 86, 'bonding', { a: 'middle', c: 'dtg', b: 1, s: 22 }) + T(435, y + 86, 'antibonding', { a: 'middle', c: 'dtr', b: 1, s: 22 }); });
  svg(700, s, 'm5-orbital-overlap');
})();

(function () { // potential energy curve
  let s = H('Potential energy curve of AB');
  const sx = (r) => 200 + (r - 1) * 150, sy = (v) => 390 - v * 260, a = 1.6;
  s += axes(80, 60, 570, 390, 'R', 'V');
  s += dash(`M${sx(0.9)} ${sy(1)}H570`) + line(curve((r) => Math.pow(1 - Math.exp(-a * (r - 1)), 2), 0.62, 3.2, sx, sy), 'dsb') + line(curve((r) => Math.pow(a * (r - 1), 2), 0.7, 1.45, sx, sy), 'dso').replace('/>', 'stroke-dasharray="8 6"/>');
  s += dash(`M${sx(1)} ${sy(0)}V420`) + C(sx(1), sy(0), 7, 'dfw') + T(sx(1), 436, 'Rₑ', { a: 'middle', c: 'dt', b: 1 });
  s += A(`M510 ${sy(0.5)}V${sy(1) + 4}`, 'y', 4) + A(`M510 ${sy(0.5)}V${sy(0) - 4}`, 'y', 4) + T(498, sy(0.5) + 8, 'Dₑ', { a: 'end', c: 'dty', b: 1 });
  s += key(480, 'dsb', 'real molecule (anharmonic)') + key(514, 'dso', 'harmonic: V = ½k(R − Rₑ)²');
  s += T(14, 560, 'Energy is lowest at the bond length Rₑ.', { c: 'dt2', s: 22 });
  svg(590, s, 'm5-pec-diatomic');
})();

(function () { // PES contour
  let s = H('A potential energy surface');
  [[150, 200, 110, 52], [450, 200, 110, 52]].forEach(([cx, cy]) => { [[30, 18], [62, 38], [92, 60]].forEach(([rx, ry]) => { s += `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" class="ds2" fill="none" stroke-width="2.5"/>`; }); });
  s += P('M215 70C250 110 350 110 385 70M225 120C260 150 340 150 375 120M215 330C250 290 350 290 385 330M225 280C260 250 340 250 375 280', 'ds3', 2.5);
  s += P('M150 200H300H450', 'dso', 4, 'stroke-dasharray="8 6"') + A('M360 200H410', 'o', 5);
  s += C(150, 200, 8, 'dfw') + C(300, 200, 8, 'dfr') + C(450, 200, 8, 'dfw');
  s += T(150, 296, 'reactant', { a: 'middle', c: 'dt', b: 1, s: 22 }) + T(450, 296, 'product', { a: 'middle', c: 'dt', b: 1, s: 22 }) + T(300, 246, 'saddle', { a: 'middle', c: 'dtr', b: 1, s: 22 }) + T(300, 268, '(TS)', { a: 'middle', c: 'dtr', b: 1, s: 22 });
  s += L(14, 396, ['Contours of energy against two coordinates.', 'Two valleys are minima; the pass between', 'them is the saddle point (transition state).'], { c: 'dt2', s: 22 });
  svg(480, s, 'm5-pes-contours');
})();

(function () { // SN2 profile
  let s = H('Gas-phase SN2 profile');
  s += P('M60 60V400H570', 'ds', 4) + T(570, 434, 'reaction coordinate', { a: 'end', c: 'dt2', b: 1 }) + T(72, 76, 'energy', { c: 'dt2', b: 1 });
  s += P('M70 160C110 160 110 260 160 260C210 260 220 190 280 190C340 190 350 270 400 270C450 270 450 220 550 220', 'dsb', 5);
  s += P('M70 160C170 160 210 90 290 90C370 90 420 215 550 225', 'dso', 4, 'stroke-dasharray="9 7"');
  s += T(160, 296, 'ID1', { a: 'middle', c: 'dt', b: 1, s: 22 }) + T(280, 224, 'TS', { a: 'middle', c: 'dt', b: 1, s: 22 }) + T(400, 306, 'ID2', { a: 'middle', c: 'dt', b: 1, s: 22 });
  s += key(480, 'dsb', 'gas phase: two wells, one TS') + key(514, 'dso', 'in water: one much higher barrier');
  s += T(14, 560, 'Left: Y⁻ + RX. Right: products. One TS.', { c: 'dt2', s: 22 });
  svg(590, s, 'm5-sn2-profile');
})();

(function () { // water normal modes
  let s = H('Normal modes of water');
  const mol = (cx, mode, label) => {
    const o = [cx, 190], h1 = [cx - 44, 150], h2 = [cx + 44, 150];
    let p = P(`M${h1[0]} ${h1[1]}L${o[0]} ${o[1]}L${h2[0]} ${h2[1]}`, 'ds', 4) + C(o[0], o[1], 16, 'dfr dsr', 'fill-opacity=".4" stroke-width="3"') + C(h1[0], h1[1], 11, 'dfb dsb', 'fill-opacity=".4" stroke-width="3"') + C(h2[0], h2[1], 11, 'dfb dsb', 'fill-opacity=".4" stroke-width="3"');
    const out1 = [-0.8, -0.6], out2 = [0.8, -0.6], arr = (h, d, k) => A(`M${h[0] + d[0] * 14} ${h[1] + d[1] * 14}L${h[0] + d[0] * (14 + 34 * k)} ${h[1] + d[1] * (14 + 34 * k)}`, 'o', 4);
    if (mode === 0) p += arr(h1, out1, 1) + arr(h2, out2, 1);
    if (mode === 1) p += A(`M${h1[0]} ${h1[1] - 18}V${h1[1] - 58}`, 'o', 4) + A(`M${h2[0]} ${h2[1] - 18}V${h2[1] - 58}`, 'o', 4);
    if (mode === 2) p += arr(h1, out1, 1) + A(`M${h2[0] + 0.8 * 48} ${h2[1] - 0.6 * 48}L${h2[0] + 0.8 * 14} ${h2[1] - 0.6 * 14}`, 'o', 4);
    return p + label.map((t, i) => T(cx, 252 + i * 28, t, { a: 'middle', c: 'dt', b: 1, s: 22 })).join('');
  };
  s += mol(100, 0, ['symmetric', 'stretch']) + mol(300, 1, ['bend', '']) + mol(500, 2, ['asymmetric', 'stretch']);
  s += L(14, 340, ['Non-linear, N = 3 atoms:', '3N − 6 = 3 normal modes.', 'Atoms move in step, each mode at', 'one frequency.'], { c: 'dt2', s: 22 });
  svg(470, s, 'm5-water-normal-modes');
})();

(function () { // ML workflow
  let s = H('Screening semiconductors with ML');
  const items = [['Data', 'formation energy, lattice constants,', 'density, total magnetisation'], ['Train models', 'classification, regression,', 'clustering'], ['Tune', 'optimise the hyperparameters'], ['Predict', 'band gap (eV) of each material'], ['Rank', 'top semiconductors and their gaps']];
  items.forEach((it, i) => { const y = 60 + i * 124; s += box(70, y, 460, 96, ['dfb dsb', 'dfg dsg', 'dfp dsp', 'dfo dso', 'dfy dsy'][i], it); if (i < 4) s += A(`M300 ${y + 96}V${y + 122}`, 'w', 3); });
  svg(690, s, 'm5-ml-workflow');
})();
