// node tools/figs/batch7.js figs-svg -> Module 3 figures 4-13 (dimensions, categories, colours, surface area, confinement, routes, milling, siloxane).
const { T, L, A, P, R, C, WAVE, mkSvg } = require('./lib');
const OUT = process.argv[2] || 'figs-svg', svg = mkSvg(OUT);
const H = (t, c = 'dt') => T(300, 34, t, { s: 28, b: 1, c, a: 'middle' });
const box = (x, y, w, h, cls, lines, tc = 'dt', s = 24) => R(x, y, w, h, cls, 'rx="10" fill-opacity=".3" stroke-width="3"') + lines.map((t, i) => T(x + w / 2, y + h / 2 + 8 - (lines.length - 1) * 15 + i * 30, t, { a: 'middle', c: tc, s })).join('');
let seed = 3; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

(function () { // dimensions 0D-3D
  let s = H('How many directions are long?'), y = 60;
  const row = (lab, sub, f) => { s += P(`M0 ${y - 10}H600`, 'ds3', 2) + T(14, y + 26, lab, { b: 1, s: 26, c: 'dt' }) + T(14, y + 58, sub, { c: 'dt2' }) + `<g transform="translate(330 ${y})">${f()}</g>`; y += 130; };
  row('0D', 'nanoparticles', () => [[20, 30, 'dfb'], [70, 70, 'dfr'], [110, 25, 'dfg'], [150, 65, 'dfo'], [200, 40, 'dfp']].map(([x, yy, c]) => C(x, yy, 14, c, 'fill-opacity=".7"')).join(''));
  row('1D', 'nanowires', () => [0, 1, 2, 3].map((i) => P(`M${10 + i * 8} ${20 + i * 22}L${230 - i * 6} ${10 + i * 28}`, 'dsb', 4)).join(''));
  row('2D', 'a flat sheet', () => `<path d="M20 90L70 20H240L190 90z" class="dfg dsg" fill-opacity=".4" stroke-width="3"/>`);
  row('3D', 'a stack of sheets', () => [0, 1, 2, 3].map((i) => `<path d="M20 ${95 - i * 18}L70 ${40 - i * 18}H220L170 ${95 - i * 18}z" class="dfp dsp" fill-opacity=".35" stroke-width="3"/>`).join(''));
  svg(y + 10, s, 'm3-nano-dims-images');
})();

(function () { // categories tree
  let s = box(160, 10, 280, 56, 'dfb dsb', ['Nanomaterials'], 'dt'), y = 100;
  s += P('M60 66V' + (y + 360), 'ds', 4);
  [['Carbon-based', 'dfg dsg', ['fullerenes', 'carbon nanotubes']], ['Inorganic', 'dfo dso', ['metal oxides: ZnO, FeO, CeO₂', 'metals: Au, Ag, Fe', 'quantum dots: CdS, CdSe']], ['Polymeric', 'dfp dsp', ['polymer-based particles']]].forEach(([t, c, items]) => {
    const h = 56 + items.length * 30;
    s += P(`M60 ${y + 28}H90`, 'ds', 3) + box(90, y, 480, 46, c, [t], 'dt') + items.map((it, i) => T(110, y + 76 + i * 30, '• ' + it, { c: 'dt2' })).join('');
    y += h + 20;
  });
  svg(y + 10, s.replace('V' + (100 + 360), 'V' + (y - 40)), 'm3-nano-categories');
})();

(function () { // gold macro vs nano
  let s = H('Same element, two looks');
  s += [0, 1, 2].map((i) => `<path d="M${40 + i * 14} ${180 - i * 30}L${70 + i * 14} ${150 - i * 30}H${150 - i * 14}L${180 - i * 14} ${180 - i * 30}z" class="dfy dsy" fill-opacity=".7" stroke-width="3"/>`).join('');
  s += T(110, 215, 'gold bars: macro', { a: 'middle', c: 'dt' }) + A('M215 150H285', 'w', 4);
  s += `<path d="M370 100H430V140L470 200Q480 215 460 215H340Q320 215 330 200L370 140z" class="dfr dsr" fill-opacity=".6" stroke-width="3"/>` + T(400, 252, 'gold nanoparticles', { a: 'middle', c: 'dt' }) + T(400, 282, 'in liquid: nano', { a: 'middle', c: 'dt' });
  s += L(14, 340, ['Shiny yellow metal at the macro scale;', 'deep red liquid at the nano scale.'], { c: 'dt2' });
  svg(400, s, 'm3-gold-macro-nano');
})();

(function () { // gold/silver colours
  let s = H('Colour depends on size and shape'), y = 50;
  const blk = (name, cls, rows) => { s += T(14, y + 26, name, { s: 26, b: 1, c: cls }); y += 40; rows.forEach(([r, t, col]) => { s += C(50, y + 30, r, 'dfw', 'fill-opacity=".35"') + T(110, y + 38, t, { c: 'dt' }) + A(`M330 ${y + 30}H390`, 'w', 3) + C(440, y + 30, 22, col) + T(480, y + 38, col === 'dfr' ? 'red' : col === 'dfg' ? 'green' : col === 'dfo' ? 'orange' : col === 'dfy' ? 'yellow' : 'blue', { c: 'dt2' }); y += 70; }); y += 14; };
  blk('Gold', 'dty', [[8, '25 nm spheres', 'dfr'], [14, '50 nm spheres', 'dfg'], [22, '100 nm spheres', 'dfo']]);
  s += P(`M0 ${y - 8}H600`, 'ds3', 2);
  blk('Silver', 'dt', [[22, '100 nm spheres', 'dfy'], [9, '40 nm spheres', 'dfb'], [22, '100 nm prisms', 'dfr']]);
  svg(y + 4, s, 'm3-au-ag-colours');
})();

(function () { // cube surface area
  let s = H('Smaller pieces, more surface');
  [[0, 1, 6], [1, 2, 12], [2, 3, 18]].forEach(([i, n, a]) => {
    const x = 20 + i * 190, size = 150;
    s += R(x, 70, size, size, 'dfb dsb', 'fill-opacity=".3" stroke-width="3"');
    for (let k = 1; k < n; k++) s += P(`M${x + k * size / n} 70V${70 + size}M${x} ${70 + k * size / n}H${x + size}`, 'dsb', 2);
    s += T(x + size / 2, 262, [`1 cube`, `8 cubes`, `27 cubes`][i], { a: 'middle', c: 'dt' }) + T(x + size / 2, 296, `area ${a} cm²`, { a: 'middle', c: 'dto', b: 1 });
  });
  s += L(14, 370, ['Volume stays 1 cm³ but the area grows', '6 → 12 → 18 cm². More surface means', 'better catalytic efficiency.'], { c: 'dt2' });
  svg(470, s, 'm3-cube-surface-area');
})();

(function () { // confinement bands
  let s = H('Quantum confinement');
  s += A('M40 66H560', 'w', 3) + T(300, 100, 'size decreases → band gap increases', { a: 'middle', c: 'dt' });
  const cols = [[75, 'bulk', 0], [225, 'large QD', 1], [375, 'medium QD', 2], [525, 'small QD', 3]];
  cols.forEach(([cx, lab, k]) => {
    s += (k ? C(cx, 160, 46 - k * 8, 'dfb', 'fill-opacity=".5"') : R(cx - 36, 124, 72, 72, 'dfb dsb', 'fill-opacity=".5" stroke-width="3"')) + T(cx, 245, lab, { a: 'middle', c: 'dt' });
    const g = 60 + k * 40, top = 420 - g / 2, bot = 420 + g / 2;
    if (!k) s += R(cx - 36, top - 70, 72, 70, 'dfb', 'fill-opacity=".6"') + R(cx - 36, bot, 72, 70, 'dfr', 'fill-opacity=".6"');
    else for (let i = 0; i < 4 - k + 1; i++) s += P(`M${cx - 36} ${top - i * 22}H${cx + 36}`, 'dsb', 4) + P(`M${cx - 36} ${bot + i * 22}H${cx + 36}`, 'dsr', 4);
    s += P(`M${cx + 48} ${top}V${bot}`, 'dsy', 3, 'marker-start="url(#y)" marker-end="url(#y)"');
  });
  s += T(14, 560, 'blue = conduction band, red = valence band', { c: 'dt2' }) + T(14, 592, 'yellow = band gap', { c: 'dty' });
  svg(620, s, 'm3-confinement-bands');
})();

(function () { // top-down / bottom-up
  let s = H('Two routes to nanoparticles');
  const col = (y0, title, tc, steps, cls, ex) => {
    s += T(14, y0, title, { s: 26, b: 1, c: tc });
    steps.forEach((t, i) => { s += box(40, y0 + 24 + i * 76, 270, 52, cls, [t]); if (i < steps.length - 1) s += A(`M175 ${y0 + 76 + i * 76}V${y0 + 98 + i * 76}`, 'w', 3); });
    s += box(340, y0 + 60, 240, 100, 'df2 ds2', ex, 'dt2', 22);
  };
  col(70, 'Top-down', 'dtb', ['bulk material', 'powder', 'nanoparticles'], 'dfb dsb', ['methods, e.g.', 'ball milling']);
  s += P('M0 340H600', 'ds3', 2);
  col(380, 'Bottom-up', 'dtg', ['atoms / molecules', 'nuclei (clusters)', 'nanoparticles'], 'dfg dsg', ['methods, e.g.', 'sol-gel, chemical growth']);
  svg(680, s, 'm3-topdown-bottomup-map');
})();

(function () { // planetary ball mill
  let s = H('Planetary ball mill');
  s += C(300, 190, 110, 'df3 ds', 'fill-opacity=".5" stroke-width="3"') + C(300, 190, 56, 'df2 dsb', 'stroke-width="3"');
  for (let i = 0; i < 9; i++) { const a = i * Math.PI * 2 / 9; s += C(300 + 38 * Math.cos(a) * rnd() + 0, 190 + 38 * Math.sin(a) * rnd(), 8, 'dfw', 'fill-opacity=".5"'); }
  s += P('M300 190m-50 -80A100 100 0 0 1 380 120', 'dsb', 4, 'marker-end="url(#b)"') + T(300, 330, '', {});
  s += A('M300 190L300 90', 'r', 4) + T(310, 80, 'centrifugal force', { c: 'dtr' }) + P('M200 280A110 110 0 0 0 400 280', 'dso', 4, 'marker-end="url(#o)"') + T(300, 392, 'disc rotates, bowl spins the other way', { a: 'middle', c: 'dt2' });
  s += T(14, 440, 'A trapped particle goes through:', { c: 'dt', b: 1 });
  ['elastic deformation', 'plastic and shear deformation', 'fracture', 'amorphization', 'chemical reactions'].forEach((t, i) => (s += box(40, 460 + i * 62, 360, 46, 'dfo dso', [t], 'dt', 22) + (i < 4 ? A(`M220 ${506 + i * 62}V${522 + i * 62}`, 'w', 3) : '')));
  svg(800, s, 'm3-planetary-mill');
})();

(function () { // milling principle
  let s = H('Ball milling: the principle');
  s += C(200, 130, 60, 'dfw', 'fill-opacity=".4"') + C(380, 130, 60, 'dfw', 'fill-opacity=".4"') + A('M120 130H140', 'r', 5).replace('M120 130H140', 'M100 130H138') + A('M480 130H442', 'r', 5);
  [[285, 105], [292, 130], [286, 155]].forEach(([x, y]) => (s += C(x, y, 7, 'dfo')));
  s += T(290, 220, 'powder (≈ 50 µm) squeezed between two balls', { a: 'middle', c: 'dt' }) + T(290, 252, 'preferably under inert atmosphere', { a: 'middle', c: 'dt2' });
  s += R(100, 300, 400, 120, 'df3 ds', 'rx="14" stroke-dasharray="8 6" fill-opacity=".4" stroke-width="3"');
  [[170, 370], [250, 340], [330, 375], [420, 350]].forEach(([x, y]) => (s += C(x, y, 20, 'dfw', 'fill-opacity=".7"')));
  s += T(300, 460, 'vial with WC-coated balls and powder', { a: 'middle', c: 'dt' });
  s += T(14, 520, 'A shaker mill swings the vial so the balls', { c: 'dt2' }) + T(14, 550, 'collide with the powder again and again.', { c: 'dt2' });
  svg(580, s, 'm3-milling-principle');
})();

(function () { // sol-gel siloxane network
  let s = H('Sol-gel: silicon alkoxide → network');
  s += C(110, 140, 34, 'df2 dsp', 'stroke-width="3.5"') + T(110, 149, 'Si', { a: 'middle', c: 'dt', b: 1, s: 24 });
  [[110, 60, 'OR'], [30, 140, 'OR'], [110, 220, 'OR'], [190, 140, 'OR']].forEach(([x, y, t]) => (s += P(`M110 140L${x} ${y}`, 'ds', 3) + R(x - 28, y - 18, 56, 36, 'dfb', 'rx="8" fill-opacity=".3"') + T(x, y + 8, t, { a: 'middle', c: 'dtb', b: 1 })));
  s += T(110, 285, '+ H₂O', { a: 'middle', c: 'dtb', b: 1 }) + A('M240 140H340', 'w', 4) + L(290, 100, ['hydrolysis,', 'condensation'], { a: 'middle', c: 'dt2', s: 22 }).replace(/y="130"/, 'y="130"');
  const n = [[430, 100], [520, 100], [430, 190], [520, 190]];
  n.forEach(([x, y]) => (s += C(x, y, 22, 'df2 dsp', 'stroke-width="3"') + T(x, y + 8, 'Si', { a: 'middle', c: 'dt', b: 1 })));
  s += P('M452 100H498M430 122V168M520 122V168M452 190H498', 'ds', 4) + [[475, 90], [441, 148], [531, 148], [475, 180]].map(([x, y]) => T(x, y, 'O', { a: 'middle', c: 'dto', b: 1 })).join('');
  [[430, 60, 430, 78], [520, 60, 520, 78], [430, 232, 430, 212], [520, 232, 520, 212]].forEach(([x, y, x2, y2]) => (s += P(`M${x} ${y2}L${x2} ${y}`, 'ds', 3) + T(x, y + (y < 100 ? -6 : 24), 'OH', { a: 'middle', c: 'dtr', b: 1 })));
  s += L(14, 360, ['Water splits the alkoxy groups (OR) off', 'silicon. Neighbouring Si link through', 'O to form a branching Si–O–Si (siloxane)', 'network with leftover –OH: the gel starts.'], { c: 'dt2' });
  svg(500, s, 'm3-siloxane-network');
})();
