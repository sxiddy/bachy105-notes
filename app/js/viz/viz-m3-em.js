/* Module 3 (electrical and magnetic units): interactive widgets */
(function () {
  'use strict';
  const Tx = (api, p, x, y, s, o) => api.svg('text', Object.assign({ x, y, 'font-size': 13, fill: api.C.text, 'text-anchor': 'middle', text: s }, o || {}), p);
  const clear = (g) => { while (g.firstChild) g.removeChild(g.firstChild); };
  const path = (api, p, pts, stroke, w) => api.svg('path', { d: pts.map((q, i) => (i ? 'L' : 'M') + q[0].toFixed(1) + ' ' + q[1].toFixed(1)).join(''), fill: 'none', stroke, 'stroke-width': w || 3, 'stroke-linejoin': 'round' }, p);
  const axes = (api, p, b, xl, yl) => {
    api.svg('path', { d: `M${b.x} ${b.y}V${b.y + b.h}H${b.x + b.w}`, fill: 'none', stroke: api.C.line2, 'stroke-width': 2 }, p);
    Tx(api, p, b.x + b.w, b.y + b.h + 18, xl, { 'text-anchor': 'end', fill: api.C.dim });
    Tx(api, p, b.x + 6, b.y + 4, yl, { 'text-anchor': 'start', fill: api.C.dim });
  };
  const arrow = (api, p, x, y, up, col, len) => {
    const h = len || 14, y1 = up ? y + h : y - h, y2 = up ? y - h : y + h, d = up ? 1 : -1;
    api.svg('path', { d: `M${x} ${y1}V${y2}M${x - 5} ${y2 + 7 * d}L${x} ${y2}L${x + 5} ${y2 + 7 * d}`, fill: 'none', stroke: col, 'stroke-width': 3, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, p);
  };
  const sci = (v) => (v === 0 ? '0' : v.toExponential(1).replace('e', ' × 10^').replace('+', ''));

  // ---------------------------------------------------------------- resistance of a wire
  VIZ.register('resistance-wire', {
    title: 'Resistance of a wire', kind: 'Interactive',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 230', body, 'A wire whose length and diameter set its resistance'), g = api.svg('g', null, s);
      const MAT = { Silver: 1.58, Copper: 1.68, Gold: 2.21, Aluminium: 2.65 };
      let mat = 'Copper', len = 10, dia = 1.5;
      const ctl = api.controls();
      api.segmented(Object.keys(MAT).map((k) => ({ value: k, label: k })), mat, (v) => { mat = v; paint(); }, ctl);
      api.slider({ label: 'Length L', min: 1, max: 100, step: 1, value: len, format: (v) => v + ' m' }, (v) => { len = v; paint(); }, ctl);
      api.slider({ label: 'Diameter d', min: 0.5, max: 5, step: 0.1, value: dia, format: (v) => v.toFixed(1) + ' mm' }, (v) => { dia = v; paint(); }, ctl);
      const ro = api.readouts(), r1 = api.readout('Resistivity ρ', ro), r2 = api.readout('Resistance R = ρL/A', ro), r3 = api.readout('Voltage drop at 10 A', ro);
      api.caption('Resistance grows with <b>length</b> and falls with <b>cross-section</b>: R = ρL/A. Doubling the diameter cuts R to a quarter.');
      function paint() {
        clear(g);
        const w = 80 + len / 100 * 400, h = 14 + dia / 5 * 70, x0 = 60, y0 = 105;
        api.svg('rect', { x: x0, y: y0 - h / 2, width: w, height: h, rx: h / 2 > 16 ? 16 : h / 2, fill: 'rgba(255,181,107,0.35)', stroke: C.cat, 'stroke-width': 3 }, g);
        api.svg('path', { d: `M${x0 - 40} ${y0}H${x0}M${x0 + w} ${y0}H${x0 + w + 40}`, stroke: C.line2, 'stroke-width': 3 }, g);
        api.svg('path', { d: `M${x0} ${y0 + 62}H${x0 + w}M${x0} ${y0 + 56}V${y0 + 68}M${x0 + w} ${y0 + 56}V${y0 + 68}`, stroke: C.dim, 'stroke-width': 2, fill: 'none' }, g);
        Tx(api, g, x0 + w / 2, y0 + 88, 'L = ' + len + ' m', { fill: C.dim });
        Tx(api, g, x0 + w + 48, y0 - h / 2 - 8, 'd = ' + dia.toFixed(1) + ' mm', { 'text-anchor': 'start', fill: C.dim });
        for (let i = 0; i < 12; i++) { const ex = x0 + 20 + (i * 37) % (w - 30), ey = y0 + ((i * 53) % 100 / 100 - 0.5) * (h - 12); api.svg('circle', { cx: ex, cy: ey, r: 4, fill: C.e }, g); }
        const rho = MAT[mat] * 1e-8, A = Math.PI * Math.pow(dia * 1e-3 / 2, 2), R = rho * len / A;
        r1.set(MAT[mat] + ' µΩ·cm'); r2.set((R * 1000).toFixed(R < 0.1 ? 2 : 1) + ' mΩ'); r3.set((R * 10).toFixed(3) + ' V');
      }
      paint();
    }
  });

  // ---------------------------------------------------------------- band gap picker
  VIZ.register('band-gap-picker', {
    title: 'Band gap and carriers', kind: 'Interactive',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 300', body, 'Valence band, band gap and conduction band with thermally excited electrons'), g = api.svg('g', null, s);
      let Eg = 1.1, T = 300;
      const ctl = api.controls();
      api.slider({ label: 'Band gap E<sub>g</sub>', min: 0, max: 6, step: 0.05, value: Eg, format: (v) => v.toFixed(2) + ' eV' }, (v) => { Eg = v; paint(); }, ctl);
      api.slider({ label: 'Temperature T', min: 100, max: 1000, step: 10, value: T, format: (v) => v + ' K' }, (v) => { T = v; paint(); }, ctl);
      const ro = api.readouts(), r1 = api.readout('Class', ro), r2 = api.readout('Excited fraction e^(−Eg/2kT)', ro);
      api.caption('Only electrons with enough thermal energy cross the gap. Dots show the conduction-band population on a <b>log scale</b>: raise T or shrink E<sub>g</sub> and it fills up. Silicon is near 1.1 eV, a typical insulator above 3 eV.');
      const rnd = []; for (let i = 0; i < 40; i++) rnd.push([(i * 0.6180339) % 1, (i * 0.7548776) % 1]);
      function paint() {
        clear(g);
        const x = 90, w = 300, gapH = 10 + Eg * 24, top = 30, vbTop = top + 70 + gapH, vbH = 70;
        api.svg('rect', { x, y: top, width: w, height: 70, fill: 'rgba(122,162,255,0.25)', stroke: C.cat, 'stroke-width': 2 }, g);
        api.svg('rect', { x, y: vbTop, width: w, height: vbH, fill: 'rgba(255,181,107,0.25)', stroke: C.heat, 'stroke-width': 2 }, g);
        Tx(api, g, x + w + 12, top + 40, 'conduction band', { 'text-anchor': 'start', fill: C.cat });
        Tx(api, g, x + w + 12, vbTop + 40, 'valence band', { 'text-anchor': 'start', fill: C.heat });
        api.svg('path', { d: `M${x - 20} ${top + 70}V${vbTop}M${x - 26} ${top + 78}L${x - 20} ${top + 70}L${x - 14} ${top + 78}M${x - 26} ${vbTop - 8}L${x - 20} ${vbTop}L${x - 14} ${vbTop - 8}`, stroke: C.white, 'stroke-width': 2, fill: 'none' }, g);
        Tx(api, g, x - 28, (top + 70 + vbTop) / 2 + 5, 'Eg', { 'text-anchor': 'end', fill: C.white });
        const kT = 8.617e-5 * T, f = Eg < 0.02 ? 1 : Math.exp(-Eg / (2 * kT)), n = f > 0 ? Math.round(Math.max(0, Math.min(1, (22 + Math.log10(f)) / 22)) * 36) : 0;
        for (let i = 0; i < 36; i++) {
          const q = rnd[i], ex = x + 12 + q[0] * (w - 24);
          if (i < n) api.svg('circle', { cx: ex, cy: top + 10 + q[1] * 50, r: 5, fill: C.e }, g); else api.svg('circle', { cx: ex, cy: vbTop + 10 + q[1] * (vbH - 20), r: 5, fill: C.e }, g);
        }
        const cls = Eg < 0.1 ? 'Conductor (bands overlap)' : Eg <= 3 ? 'Semiconductor' : 'Insulator';
        r1.set(cls); r2.set(Eg < 0.1 ? '≈ 1' : sci(f));
        Tx(api, g, x + w / 2, 288, 'filled dots in the conduction band carry current', { fill: C.dim });
      }
      paint();
    }
  });

  // ---------------------------------------------------------------- superconductor transition
  VIZ.register('superconductor-transition', {
    title: 'Superconducting transition', kind: 'Interactive',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 300', body, 'Resistance against temperature and magnetic field lines around a superconductor'), g = api.svg('g', null, s);
      const MAT = { Aluminium: 1.2, Mercury: 4.2, Niobium: 9.2, YBCO: 92 };
      let mat = 'Mercury', T = 20;
      const ctl = api.controls();
      api.segmented(Object.keys(MAT).map((k) => ({ value: k, label: k + ' (' + MAT[k] + ' K)' })), mat, (v) => { mat = v; paint(); }, ctl);
      api.slider({ label: 'Temperature T', min: 0, max: 150, step: 1, value: T, format: (v) => v + ' K' }, (v) => { T = v; paint(); }, ctl);
      const ro = api.readouts(), r1 = api.readout('State', ro), r2 = api.readout('Resistance', ro), r3 = api.readout('Above 77 K (liquid N₂)?', ro);
      api.caption('Below the critical temperature <b>T<sub>c</sub></b> resistance drops to exactly zero <b>and</b> the field is pushed out of the material (the Meissner effect). Only YBCO stays superconducting in cheap liquid nitrogen.');
      const b = { x: 50, y: 30, w: 270, h: 220 };
      function paint() {
        clear(g);
        const Tc = MAT[mat], sc = T < Tc;
        axes(api, g, b, 'T (K)', 'R');
        const x = (t) => b.x + t / 150 * b.w, y = (r) => b.y + b.h - r * b.h * 0.85;
        const R = (t) => (t < Tc ? 0 : 0.18 + 0.82 * Math.min(1, (t - Tc) / (150 - Tc + 40)) * 0.8);
        const pts = [[x(0), y(0)], [x(Tc), y(0)], [x(Tc), y(0.18)]]; for (let t = Tc + 2; t <= 150; t += 2) pts.push([x(t), y(R(t))]);
        path(api, g, pts, C.e, 3);
        api.svg('path', { d: `M${x(77)} ${b.y}V${b.y + b.h}`, stroke: C.dim, 'stroke-width': 2, 'stroke-dasharray': '6 5' }, g);
        Tx(api, g, x(77) + 4, b.y + 14, '77 K', { 'text-anchor': 'start', fill: C.dim });
        Tx(api, g, x(Tc), b.y + b.h + 34, 'Tc', { fill: C.good });
        api.svg('circle', { cx: x(T), cy: y(R(T)), r: 7, fill: sc ? C.good : C.bad }, g);
        const cx = 480, cy = 140;
        api.svg('rect', { x: cx - 50, y: cy - 38, width: 100, height: 76, rx: 10, fill: sc ? 'rgba(134,212,169,0.3)' : 'rgba(255,181,107,0.2)', stroke: sc ? C.good : C.line2, 'stroke-width': 3 }, g);
        for (let i = -3; i <= 3; i++) {
          const fx = cx + i * 22;
          if (sc && Math.abs(i) <= 2) path(api, g, [[fx, 40], [fx, 70], [cx + i * 36 + (i < 0 ? -22 : i > 0 ? 22 : 0), 105], [cx + i * 36 + (i < 0 ? -22 : i > 0 ? 22 : 0), 175], [fx, 210], [fx, 260]], C.cat, 2);
          else path(api, g, [[fx, 40], [fx, 260]], C.cat, 2);
        }
        Tx(api, g, cx, 285, sc ? 'field excluded' : 'field passes through', { fill: C.dim });
        r1.set(sc ? 'Superconducting' : 'Normal metal'); r2.set(sc ? '0 Ω' : 'finite'); r3.set(Tc > 77 ? 'Yes: works in liquid N₂' : 'No: needs liquid helium');
      }
      paint();
    }
  });

  // ---------------------------------------------------------------- hysteresis loop
  VIZ.register('hysteresis-loop', {
    title: 'Hysteresis loop', kind: 'Animation',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 320', body, 'Magnetisation against applied field for a soft and a hard magnet'), g = api.svg('g', null, s);
      const P = { soft: { Hc: 0.1, w: 0.22 }, hard: { Hc: 0.55, w: 0.18 } };
      let kind = 'soft', H = 0, dir = 1, auto = true, t = 0, M = 0;
      const ctl = api.controls();
      api.segmented([{ value: 'soft', label: 'Soft (transformer core)' }, { value: 'hard', label: 'Hard (permanent magnet)' }], kind, (v) => { kind = v; M = 0; H = 0; paint(); }, ctl);
      api.button('Sweep / pause', () => { auto = !auto; }, ctl);
      api.slider({ label: 'Applied field H (drag to pause the sweep)', min: -1, max: 1, step: 0.01, value: 0, format: (v) => v.toFixed(2) }, (v) => { auto = false; dir = v >= H ? 1 : -1; H = v; paint(); }, ctl);
      const ro = api.readouts(), r1 = api.readout('Magnetisation M/Ms', ro), r2 = api.readout('Remanence (H = 0)', ro), r3 = api.readout('Coercive field', ro);
      api.caption('M lags behind H. Sweeping H up and down traces a <b>loop</b>; the area is energy lost as heat each cycle. A <b>soft</b> magnet has a thin loop, a <b>hard</b> magnet a wide one that keeps its magnetisation when the field is removed.');
      const b = { x: 40, y: 20, w: 300, h: 260 }, cx = b.x + b.w / 2, cy = b.y + b.h / 2;
      const up = (h, p) => Math.tanh((h - p.Hc) / p.w), dn = (h, p) => Math.tanh((h + p.Hc) / p.w);
      function paint() {
        clear(g);
        const p = P[kind], sx = (h) => cx + h * (b.w / 2 - 14), sy = (m) => cy - m * (b.h / 2 - 14);
        api.svg('path', { d: `M${b.x} ${cy}H${b.x + b.w}M${cx} ${b.y}V${b.y + b.h}`, stroke: C.line2, 'stroke-width': 2 }, g);
        Tx(api, g, b.x + b.w, cy + 18, 'H', { 'text-anchor': 'end', fill: C.dim }); Tx(api, g, cx + 8, b.y + 12, 'M', { 'text-anchor': 'start', fill: C.dim });
        const pu = [], pd = []; for (let h = -1; h <= 1.001; h += 0.02) { pu.push([sx(h), sy(up(h, p))]); pd.push([sx(h), sy(dn(h, p))]); }
        path(api, g, pu, C.cat, 3); path(api, g, pd, C.bad, 3);
        M = dir > 0 ? up(H, p) : dn(H, p);
        api.svg('circle', { cx: sx(H), cy: sy(M), r: 7, fill: C.white }, g);
        // domains
        const gx = 400, gy = 70;
        Tx(api, g, gx + 100, 36, 'domains', { fill: C.dim });
        const frac = (1 + M) / 2;
        for (let r = 0; r < 5; r++) for (let c = 0; c < 4; c++) {
          const k = r * 4 + c, th = ((k * 0.61803) % 1), upv = th < frac;
          arrow(api, g, gx + 20 + c * 54, gy + 28 + r * 44, upv, upv ? C.cat : C.bad, 14);
        }
        Tx(api, g, gx + 100, 306, 'orange: along +H, red: against', { fill: C.dim });
        r1.set(M.toFixed(2)); r2.set(Math.abs(up(0, p)).toFixed(2) + ' of Ms'); r3.set('±' + p.Hc.toFixed(2));
      }
      paint();
      api.loop((dt) => { if (!auto) return; t += dt * 0.5; const ph = t % (2 * Math.PI); const nh = Math.sin(ph) * 1.0; dir = Math.cos(ph) >= 0 ? 1 : -1; H = nh; paint(); });
    }
  });

  // ---------------------------------------------------------------- Curie temperature
  VIZ.register('curie-temperature', {
    title: 'Heating a magnet past T_C', kind: 'Animation',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 300', body, 'Spin order against temperature with an arrow grid'), g = api.svg('g', null, s);
      const MAT = { Nickel: ['f', 627], Iron: ['f', 1043], Gadolinium: ['f', 292], MnO: ['a', 116] };
      let mat = 'Nickel', T = 300, tick = 0, seed = [];
      const ctl = api.controls();
      api.segmented(Object.keys(MAT).map((k) => ({ value: k, label: k })), mat, (v) => { mat = v; paint(); }, ctl);
      api.slider({ label: 'Temperature T', min: 0, max: 1400, step: 5, value: T, format: (v) => v + ' K' }, (v) => { T = v; paint(); }, ctl);
      const ro = api.readouts(), r1 = api.readout('Type and critical T', ro), r2 = api.readout('Order m = M/M₀', ro), r3 = api.readout('State', ro);
      api.caption('Thermal motion fights the exchange coupling. Heat a ferromagnet above its <b>Curie temperature</b> (an antiferromagnet above its <b>Néel temperature</b>) and the order is lost: the spins turn <b>paramagnetic</b> and flicker at random.');
      const th = []; for (let i = 0; i < 40; i++) th.push((i * 0.61803) % 1);
      const b = { x: 40, y: 20, w: 250, h: 230 };
      function paint() {
        clear(g);
        const [type, Tc] = MAT[mat], m = T < Tc ? Math.sqrt(1 - T / Tc) : 0, x = (t) => b.x + t / 1400 * b.w, y = (v) => b.y + b.h - v * (b.h - 14);
        axes(api, g, b, 'T (K)', type === 'f' ? 'M' : 'order');
        const pts = []; for (let t = 0; t < Tc; t += 4) pts.push([x(t), y(Math.sqrt(1 - t / Tc))]); pts.push([x(Tc), y(0)]); pts.push([x(1400), y(0)]);
        path(api, g, pts, C.e, 3);
        api.svg('circle', { cx: x(T), cy: y(m), r: 7, fill: C.white }, g);
        Tx(api, g, x(Tc), b.y + b.h + 34, type === 'f' ? 'Tc' : 'TN', { fill: C.good });
        const gx = 340, gy = 50, frac = (1 + m) / 2;
        for (let r = 0; r < 5; r++) for (let c = 0; c < 8; c++) {
          const k = r * 8 + c; let upv;
          if (m === 0) upv = ((k * 7 + tick * 13 + Math.floor(k * 1.7) * tick) % 5) < 2.5;
          else if (type === 'f') upv = th[k] < frac;
          else upv = ((r + c) % 2 === 0) ? th[k] < frac : th[k] >= 1 - frac;
          arrow(api, g, gx + 18 + c * 34, gy + 20 + r * 44, upv, upv ? C.cat : C.bad, 13);
        }
        Tx(api, g, gx + 140, 285, m === 0 ? 'random: paramagnetic' : type === 'f' ? 'aligned: ferromagnetic' : 'alternating: antiferromagnetic', { fill: C.dim });
        r1.set((type === 'f' ? 'Ferromagnet, Tc = ' : 'Antiferromagnet, TN = ') + Tc + ' K'); r2.set(m.toFixed(2)); r3.set(m === 0 ? 'Paramagnetic' : type === 'f' ? 'Ferromagnetic' : 'Antiferromagnetic');
      }
      paint();
      let acc = 0; api.loop((dt) => { acc += dt; if (acc > 0.25) { acc = 0; tick++; if (T >= MAT[mat][1]) paint(); } });
    }
  });
})();
