/* One Pro tool open to everyone (Beer-Lambert law). The other interactive models stay in Pro. */
(function () {
  'use strict';
  const MONO = 'JetBrains Mono, ui-monospace, monospace';
  function T(api, p, x, y, s, o) { return api.svg('text', Object.assign({ x, y, 'font-size': 13, fill: api.C.text, 'text-anchor': 'middle', text: s }, o || {}), p); }

  // ---------------------------------------------------------------- Beer-Lambert
  VIZ.register('beer-lambert', {
    title: 'Beer–Lambert law', kind: 'Interactive',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 260', body, 'Light passing through a cuvette');
      const cell = api.svg('rect', { x: 180, y: 60, width: 160, height: 110, rx: 6, stroke: C.line2, 'stroke-width': 1.5 }, s);
      const gid = api.uid('bl'), defs = api.svg('defs', null, s), grad = api.svg('linearGradient', { id: gid }, defs);
      const st0 = api.svg('stop', { offset: 0 }, grad), st1 = api.svg('stop', { offset: 1 }, grad);
      const beamIn = api.svg('rect', { x: 30, y: 102, width: 150, height: 26, fill: C.photon }, s);
      const beamCell = api.svg('rect', { x: 180, y: 102, width: 160, height: 26, fill: `url(#${gid})` }, s);
      const beamOut = api.svg('rect', { x: 340, y: 102, width: 110, height: 26, fill: C.photon }, s);
      T(api, s, 90, 92, 'I₀', { fill: C.photon, 'font-size': 15 }); const iT = T(api, s, 400, 92, 'I', { fill: C.photon, 'font-size': 15 });
      const Ltxt = T(api, s, 260, 190, '', { fill: C.dim, 'font-size': 12, 'font-family': MONO });
      api.svg('rect', { x: 452, y: 96, width: 30, height: 38, rx: 4, fill: C.surface2, stroke: C.line2 }, s); T(api, s, 467, 150, 'detector', { fill: C.dim, 'font-size': 11 });
      const P = api.svg('g', { transform: 'translate(510,30)' }, s);
      api.svg('rect', { width: 110, height: 150, rx: 6, fill: C.surface2 }, P);
      const line = api.svg('line', { x1: 0, y1: 150, stroke: C.good, 'stroke-width': 2 }, P);
      const pt = api.svg('circle', { r: 5, fill: C.white }, P);
      T(api, P, 55, 168, 'A vs c', { fill: C.dim, 'font-size': 11 });
      const mols = Array.from({ length: 60 }, (_, i) => api.svg('circle', { cx: 0, cy: 0, r: 2.5, fill: C.an, opacity: 0 }, s));
      const st = { c: 5e-5, L: 1, e: 8400 };
      const ctl = api.controls();
      const sc = api.slider({ label: 'Concentration c', min: 0, max: 1.5e-4, step: 1e-6, value: st.c, format: (v) => api.sci(v, 2) + ' M' }, (v) => { st.c = v; paint(); }, ctl);
      const sL = api.slider({ label: 'Path length L', min: 0.2, max: 4, step: 0.1, value: st.L, format: (v) => v.toFixed(1) + ' cm' }, (v) => { st.L = v; paint(); }, ctl);
      const sE = api.slider({ label: 'ε', min: 1000, max: 20000, step: 100, value: st.e, format: (v) => v + ' L mol⁻¹ cm⁻¹' }, (v) => { st.e = v; paint(); }, ctl);
      api.button('Solve the slide example (A = 0.70)', () => { st.e = 8400; st.L = 1; st.c = 0.70 / 8400; sE.set(8400); sL.set(1); sc.set(st.c); paint(); }, api.controls(), { primary: true });
      const ro = api.readouts();
      const r = ['Absorbance A = εLc', 'Transmittance T = 10⁻ᴬ', 'Light through', 'Concentration'].map((l) => api.readout(l, ro));
      const cap = api.caption('');
      function paint() {
        const A = st.e * st.L * st.c, Tt = Math.pow(10, -A);
        const w = 40 + st.L * 30; cell.setAttribute('x', 260 - w / 2); cell.setAttribute('width', w); beamIn.setAttribute('width', 260 - w / 2 - 30); beamCell.setAttribute('x', 260 - w / 2); beamCell.setAttribute('width', w); beamOut.setAttribute('x', 260 + w / 2); beamOut.setAttribute('width', 452 - (260 + w / 2));
        cell.setAttribute('fill', `rgba(199,164,255,${Math.min(0.5, st.c / 1.5e-4 * 0.5)})`);
        st0.setAttribute('stop-color', C.photon); st1.setAttribute('stop-color', C.photon); st1.setAttribute('stop-opacity', Tt.toFixed(3));
        beamOut.setAttribute('opacity', Math.max(0.03, Tt).toFixed(3)); iT.setAttribute('opacity', Math.max(0.2, Tt));
        Ltxt.textContent = 'L = ' + st.L.toFixed(1) + ' cm';
        const n = Math.round(st.c / 1.5e-4 * 60 * Math.min(1, w / 160));
        mols.forEach((m, i) => { m.setAttribute('opacity', i < n ? 0.9 : 0); m.setAttribute('cx', 260 - w / 2 + 6 + ((i * 37) % 100) / 100 * (w - 12)); m.setAttribute('cy', 66 + ((i * 53) % 100) / 100 * 98); });
        const Amax = 20000 * 4 * 1.5e-4 * 0.25; // plot scale
        const slope = st.e * st.L;
        line.setAttribute('x2', 110); line.setAttribute('y2', 150 - Math.min(150, slope * 1.5e-4 / 2 * 150));
        pt.setAttribute('cx', st.c / 1.5e-4 * 110); pt.setAttribute('cy', 150 - Math.min(150, A / 2 * 150));
        r[0].set(api.fmt(A, 3)); r[1].set(api.fmt(Tt, 3)); r[2].set(api.fmt(Tt * 100, 1) + ' %'); r[3].set(api.sci(st.c, 3) + ' M');
        cap.set(`A = ε × L × c = ${st.e} × ${st.L.toFixed(1)} × ${api.sci(st.c, 2)} = <b>${api.fmt(A, 3)}</b>. Absorbance rises in a <b>straight line</b> with concentration and path length, while the transmitted light falls exponentially. Rearranged: <b>c = A / εL</b>.`);
      }
      paint();
    }
  });
})();
