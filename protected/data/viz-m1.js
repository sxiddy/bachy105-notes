/* Module 1 diagrams: thermodynamics and kinetics */
(function () {
  'use strict';
  const MONO = 'JetBrains Mono, ui-monospace, monospace';
  const Tx = (api, p, x, y, s, o) => api.svg('text', Object.assign({ x, y, 'font-size': 13, fill: api.C.text, 'text-anchor': 'middle', text: s }, o || {}), p);
  const pth = (api, p, pts, stroke, w, extra) => api.svg('path', Object.assign({ d: pts.map((q, i) => (i ? 'L' : 'M') + q[0].toFixed(1) + ' ' + q[1].toFixed(1)).join(''), fill: 'none', stroke, 'stroke-width': w || 3, 'stroke-linejoin': 'round' }, extra || {}), p);
  const axes = (api, p, b, xl, yl) => {
    api.svg('path', { d: `M${b.x} ${b.y}V${b.y + b.h}H${b.x + b.w}`, fill: 'none', stroke: api.C.line2, 'stroke-width': 2 }, p);
    Tx(api, p, b.x + b.w, b.y + b.h + 18, xl, { 'text-anchor': 'end', fill: api.C.dim });
    Tx(api, p, b.x + 6, b.y + 4, yl, { 'text-anchor': 'start', fill: api.C.dim });
  };
  const clear = (g) => { while (g.firstChild) g.removeChild(g.firstChild); };
  const smp = (f, a, b, sx, sy, n) => { const r = []; n = n || 80; for (let i = 0; i <= n; i++) { const t = a + (b - a) * i / n; r.push([sx(t), sy(f(t))]); } return r; };
  const R = 8.314;

  // ---------------------------------------------------------------- P-V explorer
  VIZ.register('pv-explorer', {
    title: 'Work on a P-V diagram', kind: 'Interactive',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 330', body, 'P-V diagram of isothermal and adiabatic expansion');
      const b = { x: 70, y: 24, w: 540, h: 260 }, g = api.svg('g', null, s);
      axes(api, s, b, 'V', 'P');
      let r = 3, mode = 'both', how = 'rev';
      const ctl = api.controls();
      api.segmented([{ value: 'iso', label: 'Isothermal' }, { value: 'ad', label: 'Adiabatic' }, { value: 'both', label: 'Both' }], mode, (v) => { mode = v; paint(); }, ctl);
      api.segmented([{ value: 'rev', label: 'Reversible' }, { value: 'irr', label: 'One step (P2)' }], how, (v) => { how = v; paint(); }, ctl);
      api.slider({ label: 'Expansion ratio V₂/V₁', min: 1.2, max: 5, step: 0.05, value: r, format: (v) => v.toFixed(2) }, (v) => { r = v; paint(); }, ctl);
      const ro = api.readouts(), r1 = api.readout('Isothermal work (nRT)', ro), r2 = api.readout('Adiabatic work (nRT₁)', ro), r3 = api.readout('Adiabatic T₂/T₁', ro);
      api.caption('Work is the <b>area under the curve</b>. At the same volume change the isotherm stays higher than the adiabat, so the gas does <b>more work</b> on the isotherm: heat flows in to keep T constant. An adiabat has q = 0, so the gas cools.');
      const gam = 1.4, x = (v) => b.x + (v - 0.6) / 5.2 * b.w, y = (p) => b.y + b.h - p / 1.2 * b.h;
      function paint() {
        clear(g);
        if (mode !== 'ad') {
          if (how === 'rev') api.svg('path', { d: pth(api, g, smp((v) => 1 / v, 1, r, x, y, 60), 'none', 0).getAttribute('d') + `L${x(r)} ${b.y + b.h}L${x(1)} ${b.y + b.h}Z`, fill: 'rgba(124,192,255,0.22)', stroke: 'none' }, g);
          else api.svg('rect', { x: x(1), y: y(1 / r), width: x(r) - x(1), height: b.y + b.h - y(1 / r), fill: 'rgba(255,181,107,0.35)', stroke: C.cat, 'stroke-width': 2 }, g);
          pth(api, g, smp((v) => 1 / v, 0.8, 5.4, x, y, 60), C.e, 3);
        }
        if (mode !== 'iso') {
          if (mode === 'ad') api.svg('path', { d: pth(api, g, smp((v) => Math.pow(v, -gam), 1, r, x, y, 60), 'none', 0).getAttribute('d') + `L${x(r)} ${b.y + b.h}L${x(1)} ${b.y + b.h}Z`, fill: 'rgba(240,140,140,0.22)', stroke: 'none' }, g);
          pth(api, g, smp((v) => Math.pow(v, -gam), 0.8, 5.4, x, y, 60), C.bad, 3);
        }
        api.svg('circle', { cx: x(1), cy: y(1), r: 6, fill: C.white }, g);
        [[1, 'V₁'], [r, 'V₂']].forEach(([v, t]) => { Tx(api, g, x(v), b.y + b.h + 18, t, { fill: C.dim }); api.svg('line', { x1: x(v), x2: x(v), y1: b.y + b.h - 6, y2: b.y + b.h, stroke: C.dim }, g); });
        if (mode !== 'ad') Tx(api, g, x(5.4) - 4, y(1 / 5.4) - 10, 'isotherm', { 'text-anchor': 'end', fill: C.e });
        if (mode !== 'iso') Tx(api, g, x(5.4) - 4, y(Math.pow(5.4, -gam)) - 10, 'adiabat', { 'text-anchor': 'end', fill: C.bad });
        const wrev = -Math.log(r), wirr = -(r - 1) / r, T2 = Math.pow(r, 1 - gam);
        r1.set((how === 'rev' ? wrev : wirr).toFixed(3)); r2.set((2.5 * (T2 - 1)).toFixed(3)); r3.set(T2.toFixed(3));
      }
      paint();
    }
  });

  // ---------------------------------------------------------------- Carnot engine
  VIZ.register('carnot-engine', {
    title: 'A Carnot engine at work', kind: 'Animation',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 320', body, 'Carnot cycle on P-V and T-S diagrams');
      const A = { x: 50, y: 24, w: 270, h: 240 }, B = { x: 370, y: 24, w: 230, h: 240 }, g = api.svg('g', null, s);
      axes(api, s, A, 'V', 'P'); axes(api, s, B, 'S', 'T');
      let Th = 600, Tc = 300, t = 0, run = true;
      const ctl = api.controls();
      api.slider({ label: 'Hot reservoir T<sub>h</sub>', min: 400, max: 900, step: 10, value: Th, format: (v) => v + ' K' }, (v) => { Th = v; if (Tc > Th - 50) { Tc = Th - 50; sc.set(Tc); } build(); }, ctl);
      const sc = api.slider({ label: 'Cold reservoir T<sub>c</sub>', min: 200, max: 500, step: 10, value: Tc, format: (v) => v + ' K' }, (v) => { Tc = Math.min(v, Th - 50); if (Tc !== v) sc.set(Tc); build(); }, ctl);
      api.button('Pause / run', () => { run = !run; }, ctl);
      const ro = api.readouts(), r1 = api.readout('Efficiency 1 − T<sub>c</sub>/T<sub>h</sub>', ro), r2 = api.readout('Heat in (kJ/mol)', ro), r3 = api.readout('Heat out (kJ/mol)', ro), r4 = api.readout('Net work (kJ/mol)', ro);
      api.caption('One mole, <b>1 → 2</b> hot isothermal expansion (heat in), <b>2 → 3</b> adiabatic expansion, <b>3 → 4</b> cold isothermal compression (heat out), <b>4 → 1</b> adiabatic compression. Widen the gap between T<sub>h</sub> and T<sub>c</sub> and the loop and the efficiency grow.');
      const gam = 5 / 3;
      let P1, P2, P3, P4, V3, V4, segs;
      function build() {
        const V1 = 1, V2 = 2, k = Math.pow(Th / Tc, 1 / (gam - 1));
        V3 = V2 * k; V4 = V1 * k;
        const p = (T, V) => R * T / V;
        P1 = p(Th, V1); P2 = p(Th, V2); P3 = p(Tc, V3); P4 = p(Tc, V4);
        segs = [
          (u) => { const v = V1 + (V2 - V1) * u; return { v, p: p(Th, v), T: Th, S: u }; },
          (u) => { const v = V2 * Math.pow(V3 / V2, u); return { v, p: P2 * Math.pow(v / V2, -gam), T: Th - (Th - Tc) * u, S: 1 }; },
          (u) => { const v = V3 + (V4 - V3) * u; return { v, p: p(Tc, v), T: Tc, S: 1 - u }; },
          (u) => { const v = V4 * Math.pow(V1 / V4, u); return { v, p: P4 * Math.pow(v / V4, -gam), T: Tc + (Th - Tc) * u, S: 0 }; }
        ];
        const lq = R * Th * Math.log(2), lc = R * Tc * Math.log(2);
        r1.set(((1 - Tc / Th) * 100).toFixed(1) + ' %'); r2.set((lq / 1000).toFixed(2)); r3.set((lc / 1000).toFixed(2)); r4.set(((lq - lc) / 1000).toFixed(2));
      }
      const col = [C.heat, C.warn, C.e, C.warn];
      function paint() {
        clear(g);
        const x = (v) => A.x + (v - 0.8) / (V3 * 1.05 - 0.8) * A.w, y = (p) => A.y + A.h - p / (P1 * 1.1) * A.h;
        const xs = (S) => B.x + 24 + S * (B.w - 48), ys = (T) => B.y + B.h - (T - 100) / 850 * B.h;
        const pts = [];
        segs.forEach((f, i) => { const seg = []; for (let k = 0; k <= 40; k++) seg.push(f(k / 40)); pts.push(seg); pth(api, g, seg.map((q) => [x(q.v), y(q.p)]), col[i], 3); });
        api.svg('path', { d: pts.flat().map((q, i) => (i ? 'L' : 'M') + x(q.v).toFixed(1) + ' ' + y(q.p).toFixed(1)).join('') + 'Z', fill: 'rgba(134,212,169,0.15)', stroke: 'none' }, g);
        api.svg('path', { d: `M${xs(0)} ${ys(Th)}H${xs(1)}V${ys(Tc)}H${xs(0)}Z`, fill: 'rgba(134,212,169,0.15)', stroke: C.good, 'stroke-width': 3 }, g);
        [[0, 0, 'A'], [1, 0, 'B'], [2, 0, 'C'], [3, 0, 'D']].forEach(([i, , l]) => { const q = segs[i](0); Tx(api, g, x(q.v) + (i === 0 ? -12 : 12), y(q.p) - 8, l, { fill: C.white, 'font-weight': 700 }); });
        const seg = Math.floor(t) % 4, u = t - Math.floor(t), q = segs[seg](u);
        api.svg('circle', { cx: x(q.v), cy: y(q.p), r: 7, fill: C.white }, g);
        api.svg('circle', { cx: xs(q.S), cy: ys(q.T), r: 7, fill: C.white }, g);
        Tx(api, g, B.x + B.w / 2, ys(Th) - 8, 'T h', { fill: C.heat }); Tx(api, g, B.x + B.w / 2, ys(Tc) + 20, 'T c', { fill: C.e });
        Tx(api, g, A.x + A.w / 2, 300, ['hot isotherm: heat in', 'adiabat: T falls', 'cold isotherm: heat out', 'adiabat: T rises'][seg], { fill: col[seg] });
      }
      build(); paint();
      api.loop((dt) => { if (run) t = (t + dt * 0.35) % 4; paint(); });
    }
  });

  // ---------------------------------------------------------------- rate order plotter
  VIZ.register('rate-order-plotter', {
    title: 'Zero, first and second order decay', kind: 'Interactive',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 330', body, 'Concentration against time and its straight-line plot');
      const A = { x: 50, y: 26, w: 250, h: 230 }, B = { x: 370, y: 26, w: 230, h: 230 }, g = api.svg('g', null, s);
      axes(api, s, A, 't', '[A]'); axes(api, s, B, 't', '');
      let n = 1, k = 0.3, a0 = 1;
      const ctl = api.controls();
      api.segmented([{ value: 0, label: 'Zero order' }, { value: 1, label: 'First order' }, { value: 2, label: 'Second order' }], n, (v) => { n = v; paint(); }, ctl);
      api.slider({ label: 'Rate constant k', min: 0.05, max: 1, step: 0.01, value: k, format: (v) => v.toFixed(2) }, (v) => { k = v; paint(); }, ctl);
      api.slider({ label: 'Starting [A]<sub>0</sub>', min: 0.4, max: 2, step: 0.05, value: a0, format: (v) => v.toFixed(2) + ' M' }, (v) => { a0 = v; paint(); }, ctl);
      const ro = api.readouts(), r1 = api.readout('Half-life', ro), r2 = api.readout('Units of k', ro), r3 = api.readout('Straight line', ro), r4 = api.readout('Slope', ro);
      api.caption('Change the order and the shape of the curve changes. Only one choice of <b>[A], ln[A] or 1/[A]</b> against t gives a straight line: that is how the order is found, and the slope gives k. The dot marks one half-life.');
      const tmax = 12, f = [(t) => Math.max(0, a0 - k * t), (t) => a0 * Math.exp(-k * t), (t) => a0 / (1 + k * a0 * t)];
      function paint() {
        clear(g);
        const x = (t) => A.x + t / tmax * A.w, y = (a) => A.y + A.h - a / 2.1 * A.h;
        pth(api, g, smp(f[n], 0, tmax, x, y, 100), C.e, 3);
        const half = [a0 / (2 * k), Math.log(2) / k, 1 / (k * a0)][n];
        if (half < tmax) { api.svg('circle', { cx: x(half), cy: y(a0 / 2), r: 6, fill: C.photon }, g); api.svg('line', { x1: x(half), x2: x(half), y1: y(a0 / 2), y2: A.y + A.h, stroke: C.dim, 'stroke-dasharray': '4 4' }, g); Tx(api, g, x(half), A.y + A.h + 18, 't½', { fill: C.photon }); }
        const lin = [(t) => f[0](t), (t) => Math.log(Math.max(f[1](t), 1e-9)), (t) => 1 / f[2](t)][n];
        const ys = [[0, 2.1], [Math.log(a0 * Math.exp(-k * tmax)) - 0.2, Math.log(a0) + 0.2], [0, 1 / a0 + k * tmax + 0.3]][n];
        const y2 = (v) => B.y + B.h - (v - ys[0]) / (ys[1] - ys[0]) * B.h;
        const x2 = (t) => B.x + t / tmax * B.w;
        pth(api, g, smp(lin, 0, n === 0 ? Math.min(tmax, a0 / k) : tmax, x2, y2, 60), C.good, 3);
        Tx(api, g, B.x + 6, B.y + 4, ['[A]', 'ln[A]', '1/[A]'][n], { 'text-anchor': 'start', fill: C.dim });
        Tx(api, g, B.x + B.w / 2, B.y + B.h + 44, 'straight line for this order', { fill: C.good });
        r1.set(half.toFixed(2) + ' s'); r2.set(['M s⁻¹', 's⁻¹', 'M⁻¹ s⁻¹'][n]); r3.set(['[A] vs t', 'ln[A] vs t', '1/[A] vs t'][n]); r4.set(['−k', '−k', '+k'][n] + ' = ' + (n === 2 ? '' : '−') + k.toFixed(2));
      }
      paint();
    }
  });

  // ---------------------------------------------------------------- Arrhenius
  VIZ.register('arrhenius-slider', {
    title: 'Temperature, Ea and the rate constant', kind: 'Interactive',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 330', body, 'k against T and ln k against 1/T');
      const A = { x: 50, y: 26, w: 250, h: 230 }, B = { x: 370, y: 26, w: 230, h: 230 }, g = api.svg('g', null, s);
      axes(api, s, A, 'T', 'k'); axes(api, s, B, '1/T', 'ln k');
      let Ea = 60, T = 300;
      const ctl = api.controls();
      api.slider({ label: 'Activation energy E<sub>a</sub>', min: 20, max: 150, step: 1, value: Ea, format: (v) => v + ' kJ/mol' }, (v) => { Ea = v; paint(); }, ctl);
      api.slider({ label: 'Temperature T', min: 250, max: 600, step: 1, value: T, format: (v) => v + ' K' }, (v) => { T = v; paint(); }, ctl);
      const ro = api.readouts(), r1 = api.readout('k (s⁻¹), A = 10¹³', ro), r2 = api.readout('Fraction above E<sub>a</sub>', ro), r3 = api.readout('k(T+10)/k(T)', ro), r4 = api.readout('Slope −E<sub>a</sub>/R (K)', ro);
      api.caption('k = A e<sup>−E<sub>a</sub>/RT</sup>. Raise T and a much larger <b>fraction of molecules</b> clear the barrier, so k climbs non-linearly. On the right the same data is a straight line of slope −E<sub>a</sub>/R: a higher E<sub>a</sub> means a steeper line.');
      const kf = (t, e) => 1e13 * Math.exp(-e * 1000 / (R * t));
      function paint() {
        clear(g);
        const kmax = kf(600, Ea), x = (t) => A.x + (t - 250) / 350 * A.w, y = (k) => A.y + A.h - k / kmax * A.h;
        pth(api, g, smp((t) => kf(t, Ea), 250, 600, x, y, 80), C.e, 3);
        api.svg('circle', { cx: x(T), cy: y(kf(T, Ea)), r: 6, fill: C.white }, g);
        const lo = Math.log(kf(600, 150)), hi = Math.log(1e13), lx = (u) => B.x + (u - 1 / 600) / (1 / 250 - 1 / 600) * B.w, ly = (l) => B.y + B.h - (l - lo) / (hi - lo) * B.h;
        pth(api, g, smp((u) => -Ea * 1000 / R * u + Math.log(1e13), 1 / 600, 1 / 250, lx, ly, 2), C.good, 3);
        api.svg('circle', { cx: lx(1 / T), cy: ly(Math.log(kf(T, Ea))), r: 6, fill: C.white }, g);
        r1.set(api.sci(kf(T, Ea), 2)); r2.set(api.sci(Math.exp(-Ea * 1000 / (R * T)), 2)); r3.set((kf(T + 10, Ea) / kf(T, Ea)).toFixed(2) + '×'); r4.set(Math.round(-Ea * 1000 / R).toLocaleString());
      }
      paint();
    }
  });

  // ---------------------------------------------------------------- dG vs T
  VIZ.register('gibbs-temperature', {
    title: 'When is a reaction spontaneous?', kind: 'Interactive',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 320', body, 'Delta G against temperature'), b = { x: 60, y: 20, w: 540, h: 250 }, g = api.svg('g', null, s);
      let H = -40, S = 120;
      const ctl = api.controls();
      api.slider({ label: 'ΔH°', min: -200, max: 200, step: 5, value: H, format: (v) => v + ' kJ' }, (v) => { H = v; paint(); }, ctl);
      api.slider({ label: 'ΔS°', min: -300, max: 300, step: 5, value: S, format: (v) => v + ' J/K' }, (v) => { S = v; paint(); }, ctl);
      const ro = api.readouts(), r1 = api.readout('Case', ro), r2 = api.readout('ΔG° at 298 K', ro), r3 = api.readout('Crossover T', ro);
      api.caption('<b>ΔG° = ΔH° − TΔS°</b>. The intercept is ΔH°, the slope is −ΔS°. Green means ΔG negative (spontaneous). Same signs: temperature decides, with the crossover at T = ΔH°/ΔS°. Opposite signs: the answer never changes.');
      function paint() {
        clear(g);
        const lim = 400, y = (v) => b.y + b.h / 2 - v / lim * b.h / 2, x = (t) => b.x + t / 1000 * b.w, G = (t) => H - t * S / 1000;
        api.svg('rect', { x: b.x, y: b.y, width: b.w, height: b.h / 2, fill: 'rgba(240,140,140,0.07)' }, g);
        api.svg('rect', { x: b.x, y: b.y + b.h / 2, width: b.w, height: b.h / 2, fill: 'rgba(134,212,169,0.09)' }, g);
        api.svg('path', { d: `M${b.x} ${b.y}V${b.y + b.h}M${b.x} ${b.y + b.h / 2}H${b.x + b.w}`, fill: 'none', stroke: C.line2, 'stroke-width': 2 }, g);
        Tx(api, g, b.x + b.w, b.y + b.h / 2 - 8, 'T (K)', { 'text-anchor': 'end', fill: C.dim }); Tx(api, g, b.x + 6, b.y + 14, 'ΔG° (kJ)', { 'text-anchor': 'start', fill: C.dim });
        Tx(api, g, b.x + b.w - 8, b.y + 18, 'not spontaneous', { 'text-anchor': 'end', fill: C.bad, 'font-size': 12 }); Tx(api, g, b.x + b.w - 8, b.y + b.h - 8, 'spontaneous', { 'text-anchor': 'end', fill: C.good, 'font-size': 12 });
        const pts = smp(G, 0, 1000, x, (v) => y(Math.max(-lim, Math.min(lim, v))), 2);
        pth(api, g, pts, C.e, 4);
        const tc = S !== 0 ? H * 1000 / S : -1;
        if (tc > 0 && tc < 1000) { api.svg('circle', { cx: x(tc), cy: y(0), r: 6, fill: C.photon }, g); Tx(api, g, x(tc), y(0) + 22, Math.round(tc) + ' K', { fill: C.photon }); }
        const g298 = G(298);
        api.svg('circle', { cx: x(298), cy: y(Math.max(-lim, Math.min(lim, g298))), r: 5, fill: C.white }, g);
        r1.set(H < 0 && S > 0 ? 'always spontaneous' : H > 0 && S < 0 ? 'never spontaneous' : H > 0 ? 'spontaneous at high T' : H < 0 ? 'spontaneous at low T' : '—');
        r2.set(g298.toFixed(1) + ' kJ'); r3.set(tc > 0 ? Math.round(tc) + ' K' : 'none');
      }
      paint();
    }
  });

  // ---------------------------------------------------------------- gas spreading
  VIZ.register('entropy-expansion', {
    title: 'Why gases spread out', kind: 'Animation',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 280', body, 'Gas particles filling two chambers'), N = 40, W = 560, Hh = 150, X0 = 40, Y0 = 20;
      api.svg('rect', { x: X0, y: Y0, width: W, height: Hh, rx: 8, fill: C.bg2, stroke: C.line2, 'stroke-width': 2 }, s);
      const part = api.svg('line', { x1: X0 + W / 2, x2: X0 + W / 2, y1: Y0, y2: Y0 + Hh, stroke: C.cat, 'stroke-width': 4 }, s);
      let open = false, S = 0;
      const ps = Array.from({ length: N }, () => ({ x: X0 + 10 + Math.random() * (W / 2 - 20), y: Y0 + 10 + Math.random() * (Hh - 20), vx: (Math.random() - 0.5) * 140, vy: (Math.random() - 0.5) * 140, el: api.svg('circle', { r: 5, fill: C.e }, s) }));
      const bar = api.svg('rect', { x: X0, y: 214, width: 0, height: 16, rx: 4, fill: C.good }, s);
      Tx(api, s, X0, 206, 'entropy of the arrangement', { 'text-anchor': 'start', fill: C.dim, 'font-size': 12 }); Tx(api, s, X0 + W, 206, 'maximum (N ln 2)', { 'text-anchor': 'end', fill: C.dim, 'font-size': 12 });
      api.svg('rect', { x: X0, y: 214, width: W, height: 16, rx: 4, fill: 'none', stroke: C.line2 }, s);
      const ctl = api.controls();
      api.button('Remove partition', () => { open = true; part.setAttribute('opacity', '0'); }, ctl, { primary: true });
      api.button('Reset', () => { open = false; part.setAttribute('opacity', '1'); ps.forEach((p) => { p.x = X0 + 10 + Math.random() * (W / 2 - 20); }); }, ctl);
      const ro = api.readouts(), r1 = api.readout('Left chamber', ro), r2 = api.readout('Right chamber', ro), r3 = api.readout('S / S<sub>max</sub>', ro);
      api.caption('With the partition in, every particle is on the left: one arrangement, the lowest entropy. Remove it and the particles wander. There are enormously more ways to be spread out than bunched up, so the gas spreads and <b>never gathers back by itself</b>: ΔS<sub>total</sub> &gt; 0.');
      api.loop((dt) => {
        let left = 0;
        ps.forEach((p) => {
          p.x += p.vx * dt; p.y += p.vy * dt;
          const xmax = open ? X0 + W - 6 : X0 + W / 2 - 6;
          if (p.x < X0 + 6) { p.x = X0 + 6; p.vx = Math.abs(p.vx); } if (p.x > xmax) { p.x = xmax; p.vx = -Math.abs(p.vx); }
          if (p.y < Y0 + 6) { p.y = Y0 + 6; p.vy = Math.abs(p.vy); } if (p.y > Y0 + Hh - 6) { p.y = Y0 + Hh - 6; p.vy = -Math.abs(p.vy); }
          p.el.setAttribute('cx', p.x.toFixed(1)); p.el.setAttribute('cy', p.y.toFixed(1));
          if (p.x < X0 + W / 2) left++;
        });
        const f = left / N, h = (q) => (q > 0 ? -q * Math.log(q) : 0), sm = (h(f) + h(1 - f)) / Math.log(2);
        S += (sm - S) * Math.min(1, dt * 4);
        bar.setAttribute('width', (W * S).toFixed(1)); r1.set(left); r2.set(N - left); r3.set(S.toFixed(2));
      });
    }
  });

  // ---------------------------------------------------------------- catalyst
  VIZ.register('catalyst-barrier', {
    title: 'What a catalyst does to the barrier', kind: 'Interactive',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 300', body, 'Energy profile with and without a catalyst'), b = { x: 60, y: 20, w: 540, h: 240 }, g = api.svg('g', null, s);
      axes(api, s, b, 'reaction progress', 'energy');
      let cut = 40, T = 300;
      const ctl = api.controls();
      api.slider({ label: 'Barrier lowered by the catalyst', min: 0, max: 70, step: 1, value: cut, format: (v) => v + ' kJ/mol' }, (v) => { cut = v; paint(); }, ctl);
      api.slider({ label: 'Temperature', min: 250, max: 500, step: 5, value: T, format: (v) => v + ' K' }, (v) => { T = v; paint(); }, ctl);
      const ro = api.readouts(), r1 = api.readout('E<sub>a</sub> uncatalysed', ro), r2 = api.readout('E<sub>a</sub> catalysed', ro), r3 = api.readout('Rate speed-up', ro), r4 = api.readout('ΔE (reactants → products)', ro);
      api.caption('A catalyst gives another route with a <b>lower transition state</b>. The reactant and product levels, and so ΔE and the equilibrium position, do not move. The speed-up is e<sup>ΔE<sub>a</sub>/RT</sup>: even a modest cut makes the reaction thousands of times faster, and it speeds up <b>both directions</b>.');
      const EA = 90, DE = -30;
      function paint() {
        clear(g);
        const x = (u) => b.x + 20 + u * (b.w - 40), y = (e) => b.y + b.h - 30 - (e + 40) / 150 * (b.h - 50);
        const prof = (ea) => (u) => { const peak = Math.exp(-Math.pow((u - 0.42) / 0.16, 2)); return (DE * (1 / (1 + Math.exp(-(u - 0.62) * 9)))) + (ea) * peak; };
        pth(api, g, smp(prof(EA), 0, 1, x, y, 100), C.e, 3);
        pth(api, g, smp(prof(EA - cut), 0, 1, x, y, 100), C.good, 3, { 'stroke-dasharray': cut ? '0' : '6 4' });
        Tx(api, g, x(0.42), y(EA) - 10, 'uncatalysed', { fill: C.e }); if (cut) Tx(api, g, x(0.42), y(EA - cut) - 10, 'catalysed', { fill: C.good });
        Tx(api, g, x(0.04), y(0) - 12, 'reactants', { 'text-anchor': 'start' }); Tx(api, g, x(0.96), y(DE) + 24, 'products', { 'text-anchor': 'end' });
        r1.set(EA + ' kJ/mol'); r2.set((EA - cut) + ' kJ/mol'); r3.set(api.sci(Math.exp(cut * 1000 / (R * T)), 2) + '×'); r4.set(DE + ' kJ/mol (unchanged)');
      }
      paint();
    }
  });
})();
