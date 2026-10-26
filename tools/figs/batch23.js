// node tools/figs/batch23.js figs-svg -> Module 5, rebuilt from the latest slides (Oct 2026): method tree with QM/MM, QM/MM regions,
// HOMO and LUMO, intermediate against transition state, geometry optimisation loop, mechanism workflow, enolization, AI screening workflow.
const { T, L, A, P, R, C, mkSvg } = require('./lib');
const OUT = process.argv[2] || 'figs-svg', svg = mkSvg(OUT);
const H = (t) => T(300, 34, t, { s: 28, b: 1, c: 'dt', a: 'middle' });
const box = (x, y, w, h, cls, t, s = 24) => R(x, y, w, h, cls, 'rx="10" fill-opacity=".3" stroke-width="3"') + T(x + w / 2, y + h / 2 + 8, t, { a: 'middle', c: 'dt', s, b: 1 });
// a box with a bold title and smaller lines under it
const box2 = (x, y, w, h, cls, title, lines = [], s = 22) => R(x, y, w, h, cls, 'rx="10" fill-opacity=".3" stroke-width="3"') + T(x + w / 2, y + 30, title, { a: 'middle', c: 'dt', s, b: 1 }) + lines.map((t, i) => T(x + w / 2, y + 56 + i * 22, t, { a: 'middle', c: 'dt2', s: 17 })).join('');
const e2 = (x, y) => A(`M${x - 10} ${y - 4}V${y - 40}`, 'w', 3) + A(`M${x + 10} ${y - 40}V${y - 4}`, 'w', 3); // an electron pair on a level
const COLS = ['dfb dsb', 'dfg dsg', 'dfp dsp', 'dfo dso', 'dfy dsy', 'dfr dsr'];
// a vertical chain of boxes joined by arrows (title + one line each)
const stack = (items, bh, gap) => items.map((it, i) => {
  const y = 58 + i * (bh + gap);
  return R(70, y, 460, bh, COLS[i % COLS.length], 'rx="10" fill-opacity=".3" stroke-width="3"') + T(300, y + bh / 2 - 4, it[0], { a: 'middle', c: 'dt', s: 22, b: 1 }) + T(300, y + bh / 2 + 24, it[1], { a: 'middle', c: 'dt2', s: 18 }) + (i < items.length - 1 ? A(`M300 ${y + bh}V${y + bh + gap - 2}`, 'w', 3) : '');
}).join('');

(function () { // method tree with QM/MM
  let s = H('Computational chemistry methods');
  s += box(150, 56, 300, 50, 'dfw dsw', 'Computational methods', 22);
  s += P('M300 106V126M103 126H497M103 126V150M300 126V150M497 126V150', 'ds', 3);
  const lvl2 = (cx, cls, a, b) => R(cx - 93, 150, 186, 64, cls, 'rx="10" fill-opacity=".3" stroke-width="3"') + T(cx, 178, a, { a: 'middle', c: 'dt', s: 21, b: 1 }) + T(cx, 202, b, { a: 'middle', c: 'dt', s: 21, b: 1 });
  s += lvl2(103, 'dfb dsb', 'Quantum', 'mechanics') + lvl2(300, 'dfo dso', 'Classical', 'mechanics') + lvl2(497, 'dfg dsg', 'Hybrid', 'QM/MM');
  s += P('M103 214V238', 'ds', 3) + box2(10, 238, 186, 94, 'dfb dsb', 'Ab initio', ['HF, MP2, CI,', 'CC, MCSCF, CASSCF']);
  s += P('M103 332V344', 'ds', 3) + box2(10, 344, 186, 70, 'dfb dsb', 'DFT', ['TD, TD-DFT']);
  s += P('M103 414V426', 'ds', 3) + box2(10, 426, 186, 70, 'dfb dsb', 'Semi-empirical', ['AM1, PM3, PM6'], 21);
  s += P('M300 214V238', 'ds', 3) + box2(207, 238, 186, 72, 'dfo dso', 'Molecular', ['mechanics']);
  s += P('M300 310V322', 'ds', 3) + box2(207, 322, 186, 72, 'dfo dso', 'Molecular', ['dynamics']);
  s += L(408, 250, ['QM region for the', 'reacting atoms,', 'MM region for the', 'surroundings'], { c: 'dt2', s: 18 });
  svg(520, s, 'm5-method-tree');
})();

(function () { // QM/MM regions
  let s = H('QM/MM: two regions');
  s += R(30, 60, 540, 300, 'dfo dso', 'rx="26" fill-opacity=".12" stroke-width="3"');
  s += T(52, 94, 'MM region: protein, solvent', { s: 20, b: 1, c: 'dto' }) + T(52, 118, 'classical force field', { s: 17, c: 'dt2' });
  const atoms = [[90, 190], [135, 235], [85, 290], [150, 330], [215, 340], [385, 340], [460, 325], [500, 280], [480, 215], [520, 170], [440, 130], [330, 110]];
  const bonds = [[0, 1], [1, 2], [2, 3], [3, 4], [5, 6], [6, 7], [7, 8], [8, 9], [8, 10], [10, 11]];
  s += bonds.map(([a, b]) => P(`M${atoms[a][0]} ${atoms[a][1]}L${atoms[b][0]} ${atoms[b][1]}`, 'ds2', 3)).join('');
  s += atoms.map(([x, y]) => C(x, y, 9, 'dfo dso', 'fill-opacity=".5" stroke-width="2"')).join('');
  s += R(190, 170, 220, 140, 'dfb dsb', 'rx="40" fill-opacity=".25" stroke-width="4"');
  s += T(300, 206, 'QM region', { a: 'middle', s: 22, b: 1, c: 'dtb' }) + T(300, 236, 'bond breaking', { a: 'middle', s: 17, c: 'dt2' }) + T(300, 258, 'bond formation', { a: 'middle', s: 17, c: 'dt2' }) + T(300, 280, 'electron transfer', { a: 'middle', s: 17, c: 'dt2' });
  s += A('M160 240H186', 'w', 3) + A('M440 240H414', 'w', 3);
  s += T(300, 392, 'Coupled through electrostatic and', { a: 'middle', s: 18, c: 'dt2' }) + T(300, 416, 'van der Waals interactions', { a: 'middle', s: 18, c: 'dt2' });
  svg(440, s, 'm5-qmmm-regions');
})();

(function () { // HOMO and LUMO
  let s = H('HOMO and LUMO');
  s += A('M50 430V70', 'w', 3) + T(50, 56, 'Energy', { a: 'middle', s: 20, c: 'dt2' });
  const lv = (y, lab, cls, full, labcls) => P(`M150 ${y}H300`, 'ds', 4) + T(138, y + 7, lab, { a: 'end', s: 20, b: !!labcls, c: labcls || 'dt2' }) + (full ? e2(195, y) + e2(255, y) : '');
  s += lv(100, 'empty', null, false) + lv(160, 'LUMO', null, false, 'dto') + lv(290, 'HOMO', null, true, 'dtb') + lv(345, 'filled', null, true) + lv(400, 'filled', null, true);
  s += A('M335 288V164', 'y', 4) + T(350, 232, 'HOMO–LUMO gap', { s: 20, b: 1, c: 'dt' });
  s += T(300, 458, 'Methane, B3LYP / 6-31G*', { a: 'middle', s: 19, c: 'dt2' });
  svg(480, s, 'm5-homo-lumo');
})();

(function () { // intermediate against transition state
  let s = H('Intermediate and transition state');
  s += A('M60 420V60', 'w', 3) + A('M60 420H560', 'w', 3) + T(300, 452, 'Reaction coordinate', { a: 'middle', s: 20, c: 'dt2' }) + T(60, 50, 'Energy', { a: 'middle', s: 20, c: 'dt2' });
  s += P('M75 350C115 350 135 160 190 160C245 160 245 270 300 270C355 270 365 200 420 200C475 200 485 330 540 330', 'dsb', 4);
  s += C(190, 160, 9, 'dfo dso', 'fill-opacity=".6" stroke-width="2"') + T(190, 134, 'TS', { a: 'middle', s: 20, b: 1, c: 'dto' });
  s += C(420, 200, 9, 'dfo dso', 'fill-opacity=".6" stroke-width="2"') + T(420, 174, 'TS', { a: 'middle', s: 20, b: 1, c: 'dto' });
  s += C(300, 270, 9, 'dfg dsg', 'fill-opacity=".6" stroke-width="2"') + T(300, 304, 'Intermediate', { a: 'middle', s: 20, b: 1, c: 'dtg' });
  s += T(75, 384, 'Reactants', { a: 'middle', s: 18, c: 'dt2' }) + T(540, 364, 'Products', { a: 'middle', s: 18, c: 'dt2' });
  s += T(14, 490, 'Transition state: one imaginary frequency (a saddle point).', { s: 18, c: 'dt2' }) + T(14, 516, 'Intermediate: no imaginary frequency (a local minimum).', { s: 18, c: 'dt2' });
  svg(540, s, 'm5-ts-vs-intermediate');
})();

(function () { // geometry optimisation loop
  let s = H('Geometry optimisation loop');
  s += box(150, 56, 300, 56, 'dfb dsb', 'Initial structure guess', 19) + A('M300 112V148', 'w', 3);
  s += box(150, 150, 300, 56, 'dfp dsp', 'Energy and force on atoms', 19) + A('M300 206V242', 'w', 3);
  s += box(150, 244, 300, 56, 'dfy dsy', 'Move atoms to lower energy', 19) + A('M300 300V336', 'w', 3);
  s += R(150, 338, 300, 76, 'dfo dso', 'rx="10" fill-opacity=".3" stroke-width="3"') + T(300, 369, 'Force ≈ 0 and energy', { a: 'middle', c: 'dt', s: 18, b: 1 }) + T(300, 393, 'change below tolerance?', { a: 'middle', c: 'dt', s: 18, b: 1 });
  s += A('M300 414V470', 'g', 3) + T(318, 448, 'yes', { s: 18, b: 1, c: 'dtg' });
  s += box(150, 472, 300, 56, 'dfg dsg', 'Optimised geometry', 19);
  s += A('M450 376H540V178H452', 'o', 3) + T(552, 282, 'no', { s: 18, b: 1, c: 'dto' });
  svg(550, s, 'm5-geometry-loop');
})();

(function () { // mechanism workflow
  const s = H('Computing a reaction mechanism') + stack([['Optimise', 'reactants and products'], ['Propose steps', 'bonds to break or form, intermediates'], ['Find the transition state', 'one imaginary frequency'], ['Trace the IRC', 'TS to reactants and TS to products'], ['Build the energy profile', 'find Ea, ΔE and ΔG']], 92, 26);
  svg(640, s, 'm5-mechanism-workflow');
})();

(function () { // ketone enolization
  let s = H('Ketone enolization');
  s += T(145, 62, 'Keto form', { a: 'middle', s: 20, b: 1, c: 'dtb' }) + T(455, 62, 'Enol form', { a: 'middle', s: 20, b: 1, c: 'dto' });
  s += box(30, 74, 230, 66, 'dfb dsb', 'R–CO–CH₂R′', 22) + box(340, 74, 230, 66, 'dfo dso', 'R–C(OH)=CHR′', 22);
  s += A('M264 96H336', 'w', 3) + A('M336 118H264', 'w', 3) + T(300, 160, 'H⁺ / base', { a: 'middle', s: 17, c: 'dt2' });
  s += T(300, 204, 'Typical workflow', { a: 'middle', s: 22, b: 1, c: 'dt' });
  ['Propose structures', 'Optimise the structures', 'Frequencies at the optimised structures', 'Verify TS connectivity (IRC)', 'Compare energies'].forEach((t, i) => {
    const y = 220 + i * 68;
    s += R(100, y, 400, 48, COLS[i], 'rx="10" fill-opacity=".3" stroke-width="3"') + T(300, y + 31, t, { a: 'middle', s: 19, b: 1, c: 'dt' }) + (i < 4 ? A(`M300 ${y + 48}V${y + 66}`, 'w', 3) : '');
  });
  svg(570, s, 'm5-enolization');
})();

(function () { // AI screening workflow
  const s = H('AI-driven screening workflow') + stack([['Define the goal', 'application and properties'], ['Collect data', 'databases, papers, calculations'], ['Prepare data', 'clean, standardise, add descriptors'], ['Train the model', 'learn composition to property'], ['Screen candidates', 'predict and rank new materials'], ['Validate', 'high-level calculation and experiment']], 84, 24);
  svg(710, s, 'm5-ml-workflow');
})();
