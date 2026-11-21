// node tools/figs/batch24.js figs-svg -> the last four slide crops: nanoscale chart, quantum-dot core/shell,
// UV-Vis optical layout, X-ray bands and uses. Stacked vertically for phones (figs-svg/README.md rules).
const { T, L, A, P, R, C, mkSvg } = require('./lib');
const OUT = process.argv[2] || 'figs-svg', svg = mkSvg(OUT);
const H = (t, y = 34) => T(300, y, t, { s: 28, b: 1, c: 'dt', a: 'middle' });

(function () { // nanoscale: a vertical log scale, the 10-100 nm window highlighted with the nanodevices
  let s = H('The nanoscale');
  const top = 80, step = 52, x = 150; // one decade per row, 10^-1 at the top
  const rows = [['10⁻¹', 'Water molecule'], ['1', 'Glucose'], ['10', 'Antibody'], ['10²', 'Virus'], ['10³', 'Bacterium'], ['10⁴', 'Cancer cell'], ['10⁵', ''], ['10⁶', 'A full stop (.)'], ['10⁷', ''], ['10⁸', 'Tennis ball']];
  const y = (i) => top + i * step;
  // the nano window 10-100 nm (rows 2..3)
  s += R(x - 120, y(2) - 20, 560, step + 40, 'dfb dsb', 'rx="10" fill-opacity=".18" stroke-width="2"');
  s += P(`M${x} ${y(0)}V${y(9)}`, 'ds', 4);
  rows.forEach(([v, name], i) => {
    s += P(`M${x - 12} ${y(i)}H${x + 12}`, 'ds', 4);
    s += T(x - 24, y(i) + 8, v, { a: 'end', c: 'dt', s: 24, m: 1 });
    if (name) s += T(x + 32, y(i) + 8, name, { c: i === 2 || i === 3 ? 'dt' : 'dt2', s: 24, b: i === 2 || i === 3 ? 1 : 0 });
  });
  s += T(x - 24, y(9) + 50, 'nanometres (log scale)', { c: 'dt3', s: 22 });
  s += T(560, y(2) + 8, '10–100 nm', { a: 'end', c: 'dtb', s: 22, b: 1 });
  // nanodevices box
  const by = y(9) + 80;
  s += R(40, by, 520, 230, 'dfb dsb', 'rx="12" fill-opacity=".12" stroke-width="3"');
  s += T(300, by + 40, 'Nanodevices (same size range)', { a: 'middle', c: 'dt', s: 24, b: 1 });
  s += L(80, by + 84, ['Nanopores', 'Dendrimers', 'Nanotubes'], { c: 'dt2', s: 24 });
  s += L(330, by + 84, ['Quantum dots', 'Nanoshells', 'Fullerenes'], { c: 'dt2', s: 24 });
  s += T(300, by + 205, 'they work alongside antibodies and viruses', { a: 'middle', c: 'dt3', s: 22 });
  svg(by + 250, s, 'm3-nanoscale-chart');
})();

(function () { // quantum dot: cut-away layers, short waves in, longer waves out
  let s = H('Inside a core–shell quantum dot');
  const cx = 300, cy = 250;
  s += C(cx, cy, 150, 'df2 ds2', 'fill-opacity=".35" stroke-width="3"');
  s += C(cx, cy, 98, 'dfr dsr', 'fill-opacity=".55" stroke-width="3"');
  s += C(cx, cy, 52, 'dfb dsb', 'fill-opacity=".85" stroke-width="3"');
  // short-wavelength light in (left), long-wavelength out (right)
  const wave = (x0, y0, n, amp, len, cls) => { let d = `M${x0} ${y0}`; for (let i = 0; i < n; i++) d += `q${len / 4} ${-amp} ${len / 2} 0t${len / 2} 0`; return P(d, cls, 4); };
  s += wave(18, cy, 6, 12, 18, 'dsb') + A(`M126 ${cy}H144`, 'b', 4);
  s += wave(456, cy - 40, 2, 18, 44, 'dsr') + A(`M548 ${cy - 40}H578`, 'r', 4);
  s += wave(456, cy + 40, 2, 18, 44, 'dsr') + A(`M548 ${cy + 40}H578`, 'r', 4);
  s += T(80, cy + 50, 'short λ in', { a: 'middle', c: 'dtb', s: 22, b: 1 });
  s += T(520, cy + 92, 'longer λ out', { a: 'middle', c: 'dtr', s: 22, b: 1 });
  // key below
  const ky = 440;
  const key = (y, cls, t, d) => C(70, y - 8, 14, cls, 'stroke-width="3"') + T(100, y, t, { c: 'dt', s: 24, b: 1 }) + T(100, y + 30, d, { c: 'dt2', s: 22 });
  s += key(ky, 'dfb dsb', 'QD core', 'semiconductor that absorbs and glows');
  s += key(ky + 80, 'dfr dsr', 'QD shell', 'second semiconductor around the core');
  s += key(ky + 160, 'df2 ds2', 'Protective shell', 'outer coating that keeps it stable');
  svg(ky + 210, s, 'm3-qd-core-shell');
})();

(function () { // UV-Vis optical path, top to bottom
  let s = H('Path of light in a UV-Vis instrument');
  const parts = [
    ['dfy dsy', 'Light source', 'lamp gives all wavelengths'],
    ['df2 ds2', 'Collimator (lens)', 'makes the rays parallel'],
    ['dfp dsp', 'Monochromator', 'prism or grating splits the colours'],
    ['dfw ds', 'Wavelength selector (slit)', 'lets one band through: I₀'],
    ['dfb dsb', 'Sample in a cuvette', 'absorbs part of the light'],
    ['dfg dsg', 'Detector (photocell)', 'measures what comes out: Iₜ'],
    ['dfo dso', 'Display or meter', 'shows absorbance, e.g. 0.20'],
  ];
  const bh = 80, gap = 34;
  parts.forEach(([cls, t, d], i) => {
    const y = 64 + i * (bh + gap);
    s += R(60, y, 480, bh, cls, 'rx="10" fill-opacity=".25" stroke-width="3"');
    s += T(300, y + 34, t, { a: 'middle', c: 'dt', s: 24, b: 1 }) + T(300, y + 64, d, { a: 'middle', c: 'dt2', s: 22 });
    if (i < parts.length - 1) s += A(`M300 ${y + bh}V${y + bh + gap - 2}`, 'y', 4);
  });
  const yi = 64 + 3 * (bh + gap) + bh + gap / 2 + 8, yt = 64 + 4 * (bh + gap) + bh + gap / 2 + 8;
  s += T(330, yi, 'I₀', { c: 'dty', s: 22, b: 1, m: 1 }) + T(330, yt, 'Iₜ', { c: 'dty', s: 22, b: 1, m: 1 });
  svg(64 + 7 * (bh + gap) + 10, s, 'm4-optics-layout');
})();

(function () { // X-rays: one photon-energy scale with wavelengths, the bands, and four uses
  let s = H('Where X-rays sit, and what they are used for');
  const x0 = 50, x1 = 550, dec = 7, px = (eV) => x0 + (Math.log10(eV) / dec) * (x1 - x0); // 1 eV .. 10 MeV
  const ay = 120;
  s += T(300, 76, 'photon energy (top) · wavelength (bottom)', { a: 'middle', c: 'dt3', s: 22 });
  s += P(`M${x0} ${ay}H${x1}`, 'ds', 3);
  const E = ['1 eV', '', '100 eV', '', '10 keV', '', '1 MeV', ''], W = ['1.2 µm', '', '12 nm', '', '120 pm', '', '1.2 pm', ''];
  for (let k = 0; k <= dec; k++) {
    const x = px(10 ** k);
    s += P(`M${x} ${ay - 8}V${ay + 8}`, 'ds', 3);
    if (E[k]) s += T(x, ay - 16, E[k], { a: 'middle', c: 'dt', s: 22, m: 1 });
    if (W[k]) s += T(x, ay + 36, W[k], { a: 'middle', c: 'dt2', s: 22, m: 1 });
  }
  // bands (energy ranges from the slide)
  const band = (a, b, row, cls, t) => { const xa = px(a), xb = px(b), y = 190 + row * 52; return R(xa, y, xb - xa, 40, cls, 'rx="6" fill-opacity=".35" stroke-width="2"') + T(Math.min((xa + xb) / 2, xb - 70), y + 28, t, { a: 'middle', c: 'dt', s: 22, b: 1 }); };
  s += band(1.6, 3.3, 0, 'dfy dsy', '') + T(px(3.3) + 8, 218, 'visible', { c: 'dty', s: 22, b: 1 });
  s += band(3.3, 250, 1, 'dfp dsp', 'ultraviolet');
  s += band(120, 10e3, 2, 'dfb dsb', 'soft X-rays');
  s += band(6e3, 250e3, 3, 'dfo dso', 'hard X-rays');
  s += band(100e3, 1e7, 4, 'dfr dsr', 'gamma rays');
  // uses
  // uses: numbered markers on a line under the bands, then a key
  const my = 190 + 5 * 52 + 30;
  const uses = [[8e3, 'X-ray crystallography', '≈ 8 keV'], [20e3, 'Mammography', '≈ 20 keV'], [60e3, 'Medical CT', '≈ 60 keV'], [150e3, 'Airport security', '≈ 150 keV']];
  uses.forEach(([e], i) => { const x = px(e), yy = my + (i % 2) * 42; s += P(`M${x} ${my - 30}V${yy - 17}`, 'ds2', 2) + C(x, yy, 17, 'dfo dso', 'stroke-width="2"') + T(x, yy + 8, String(i + 1), { a: 'middle', c: 'dt', s: 22, b: 1 }); });
  s += T(x0, my + 100, 'Uses of X-rays', { c: 'dt', s: 24, b: 1 });
  uses.forEach(([, t, v], i) => { const y = my + 142 + i * 42; s += C(x0 + 17, y - 8, 17, 'dfo dso', 'stroke-width="2"') + T(x0 + 17, y, String(i + 1), { a: 'middle', c: 'dt', s: 22, b: 1 }) + T(x0 + 50, y, t, { c: 'dt', s: 22 }) + T(x1, y, v, { a: 'end', c: 'dt3', s: 22, m: 1 }); });
  svg(my + 142 + 4 * 42, s, 'm4-xray-em-uses');
})();
