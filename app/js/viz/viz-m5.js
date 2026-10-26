/* Module 5: computational chemistry widgets */
(function () {
  'use strict';
  const Tx = (api, p, x, y, s, o) => api.svg('text', Object.assign({ x, y, 'font-size': 13, fill: api.C.text, 'text-anchor': 'middle', text: s }, o || {}), p);
  const clear = (g) => { while (g.firstChild) g.removeChild(g.firstChild); };
  const path = (api, p, pts, stroke, w, extra) => api.svg('path', Object.assign({ d: pts.map((q, i) => (i ? 'L' : 'M') + q[0].toFixed(1) + ' ' + q[1].toFixed(1)).join(''), fill: 'none', stroke, 'stroke-width': w || 3, 'stroke-linejoin': 'round' }, extra || {}), p);
  const axes = (api, p, b, xl, yl) => {
    api.svg('path', { d: `M${b.x} ${b.y}V${b.y + b.h}H${b.x + b.w}`, fill: 'none', stroke: api.C.line2, 'stroke-width': 2 }, p);
    Tx(api, p, b.x + b.w, b.y + b.h + 18, xl, { 'text-anchor': 'end', fill: api.C.dim });
    Tx(api, p, b.x + 6, b.y + 4, yl, { 'text-anchor': 'start', fill: api.C.dim });
  };

  // ---------------------------------------------------------------- Morse curve
  VIZ.register('morse-curve', {
    title: 'Potential energy curve of a bond', kind: 'Animation',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 320', body, 'Morse potential with harmonic approximation and a vibrating bond'), g = api.svg('g', null, s);
      let R = 1.3, a = 1.6, E = 0.35, mode = 'drag', t = 0;
      const ctl = api.controls();
      api.segmented([{ value: 'drag', label: 'Set bond length' }, { value: 'vib', label: 'Vibrate' }], mode, (v) => { mode = v; paint(); }, ctl);
      api.slider({ label: 'Bond length R/Rₑ', min: 0.65, max: 3, step: 0.01, value: R, format: (v) => v.toFixed(2) }, (v) => { R = v; mode = 'drag'; paint(); }, ctl);
      api.slider({ label: 'Vibrational energy E/Dₑ', min: 0.05, max: 0.95, step: 0.01, value: E, format: (v) => v.toFixed(2) }, (v) => { E = v; paint(); }, ctl);
      const ro = api.readouts(), r1 = api.readout('Potential V/Dₑ', ro), r2 = api.readout('Force direction', ro), r3 = api.readout('Harmonic error', ro);
      api.caption('The energy is lowest at the equilibrium bond length <b>Rₑ</b>. Compress and the atoms repel steeply; stretch and the curve flattens to the dissociation energy <b>Dₑ</b>. The harmonic parabola only fits near the minimum, and vibration is lopsided (anharmonic).');
      const b = { x: 60, y: 20, w: 330, h: 250 }, x = (r) => b.x + (r - 0.5) / 2.6 * b.w, y = (v) => b.y + b.h - Math.max(-0.05, Math.min(1.25, v)) / 1.25 * (b.h - 10);
      const V = (r) => Math.pow(1 - Math.exp(-a * (r - 1)), 2), Vh = (r) => Math.pow(a * (r - 1), 2);
      function paint() {
        clear(g); axes(api, g, b, 'R', 'V');
        api.svg('path', { d: `M${b.x} ${y(1)}H${b.x + b.w}`, stroke: C.dim, 'stroke-width': 2, 'stroke-dasharray': '6 5' }, g);
        Tx(api, g, b.x + b.w - 4, y(1) - 8, 'Dₑ', { 'text-anchor': 'end', fill: C.dim });
        const pm = [], ph = []; for (let r = 0.62; r <= 3.1; r += 0.03) pm.push([x(r), y(V(r))]); for (let r = 0.7; r <= 1.5; r += 0.03) ph.push([x(r), y(Vh(r))]);
        path(api, g, pm, C.e, 3); path(api, g, ph, C.cat, 2, { 'stroke-dasharray': '7 5' });
        Tx(api, g, x(1.5), y(Vh(1.5)) + 4, 'harmonic', { 'text-anchor': 'start', fill: C.cat }); Tx(api, g, x(2.9), y(0.8), 'real bond', { fill: C.e });
        Tx(api, g, x(1), b.y + b.h + 34, 'Rₑ', { fill: C.good });
        let r = R;
        if (mode === 'vib') {
          const sq = Math.sqrt(E), lo = 1 - Math.log(1 + sq) / a, hi = 1 - Math.log(1 - sq) / a;
          r = lo + (hi - lo) * (1 - Math.cos(t)) / 2;
          api.svg('path', { d: `M${x(lo)} ${y(E)}H${x(hi)}`, stroke: C.good, 'stroke-width': 2 }, g);
        }
        api.svg('circle', { cx: x(r), cy: y(V(r)), r: 8, fill: C.white }, g);
        // molecule
        const mx = 520, d = 18 + r * 36;
        api.svg('path', { d: `M${mx - d / 2} 150H${mx + d / 2}`, stroke: C.line2, 'stroke-width': 4, 'stroke-dasharray': r > 1.9 ? '4 6' : '0' }, g);
        api.svg('circle', { cx: mx - d / 2, cy: 150, r: 16, fill: C.cat }, g); api.svg('circle', { cx: mx + d / 2, cy: 150, r: 16, fill: C.cat }, g);
        Tx(api, g, mx, 200, 'R = ' + r.toFixed(2) + ' Rₑ', { fill: C.dim });
        const v = V(r); r1.set(v.toFixed(2)); r2.set(Math.abs(r - 1) < 0.03 ? 'balanced (minimum)' : r < 1 ? 'pushes atoms apart' : r > 2.2 ? 'almost free atoms' : 'pulls atoms together');
        r3.set(r < 1.6 ? (Math.abs(Vh(r) - v) / Math.max(v, 1e-6) * 100).toFixed(0) + ' %' : 'huge');
      }
      paint();
      api.loop((dt) => { if (mode === 'vib') { t += dt * 3; paint(); } });
    }
  });

  // ---------------------------------------------------------------- MO builder
  VIZ.register('mo-builder', {
    title: 'Build the MO diagram', kind: 'Interactive',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 340', body, 'Molecular orbital energy diagram of a homonuclear diatomic'), g = api.svg('g', null, s);
      const MOL = { H2: 2, He2: 4, Li2: 2, Be2: 4, B2: 6, C2: 8, N2: 10, O2: 12, F2: 14, Ne2: 16 };
      let mol = 'N2';
      const ctl = api.controls();
      api.segmented(Object.keys(MOL).map((k) => ({ value: k, label: k.replace('2', '₂') })), mol, (v) => { mol = v; paint(); }, ctl);
      const ro = api.readouts(), r1 = api.readout('Valence electrons', ro), r2 = api.readout('Bond order', ro), r3 = api.readout('Magnetism', ro);
      api.caption('Electrons fill from the bottom, one per orbital first (Hund) and then in pairs. <b>Bond order = (bonding − antibonding) / 2</b>. For B₂ to N₂ the π orbitals lie <b>below</b> σ2p; from O₂ onwards σ2p drops below π.');
      function levels(m) {
        if (m === 'H2' || m === 'He2') return [['σ1s', 1, 1], ['σ*1s', 1, 0]];
        const swap = (m === 'O2' || m === 'F2' || m === 'Ne2'), sg = ['σ2p', 1, 1], pi = ['π2p', 2, 1];
        return [['σ2s', 1, 1], ['σ*2s', 1, 0]].concat(swap ? [sg, pi] : [pi, sg], [['π*2p', 2, 0], ['σ*2p', 1, 0]]);
      }
      function paint() {
        clear(g);
        const lv = levels(mol), n = lv.length;
        let left = MOL[mol], bond = 0, anti = 0, unp = 0;
        api.svg('path', { d: 'M60 20V300', stroke: C.line2, 'stroke-width': 2 }, g); Tx(api, g, 70, 18, 'E', { 'text-anchor': 'start', fill: C.dim });
        lv.forEach(([name, deg, bd], i) => {
          const y = 290 - i * (260 / (n - 1)), slots = [];
          let k = Math.min(left, deg * 2); left -= k;
          const occ = new Array(deg).fill(0); for (let e = 0; e < k; e++) occ[e % deg]++;
          const cx0 = 270 - (deg - 1) * 50;
          for (let q = 0; q < deg; q++) {
            const cx = cx0 + q * 100;
            api.svg('path', { d: `M${cx - 32} ${y}H${cx + 32}`, stroke: bd ? C.good : C.bad, 'stroke-width': 4 }, g);
            if (occ[q] >= 1) api.svg('path', { d: `M${cx - 9} ${y - 3}V${y - 25}M${cx - 14} ${y - 19}L${cx - 9} ${y - 25}L${cx - 4} ${y - 19}`, stroke: C.white, 'stroke-width': 3, fill: 'none', 'stroke-linecap': 'round' }, g);
            if (occ[q] === 2) api.svg('path', { d: `M${cx + 9} ${y - 25}V${y - 3}M${cx + 4} ${y - 9}L${cx + 9} ${y - 3}L${cx + 14} ${y - 9}`, stroke: C.white, 'stroke-width': 3, fill: 'none', 'stroke-linecap': 'round' }, g);
            if (occ[q] === 1) unp++;
          }
          if (bd) bond += k; else anti += k;
          Tx(api, g, cx0 + (deg - 1) * 100 + 52, y + 5, name, { 'text-anchor': 'start', fill: bd ? C.good : C.bad });
        });
        const bo = (bond - anti) / 2;
        Tx(api, g, 480, 120, bd2(bo), { fill: C.white, 'font-size': 28 }); Tx(api, g, 480, 148, 'bond order', { fill: C.dim });
        Tx(api, g, 480, 230, 'green: bonding', { fill: C.good }); Tx(api, g, 480, 252, 'red: antibonding', { fill: C.bad });
        r1.set(MOL[mol]); r2.set(bo <= 0 ? '0 (no stable bond)' : String(bo)); r3.set(unp ? 'Paramagnetic (' + unp + ' unpaired)' : 'Diamagnetic');
      }
      const bd2 = (bo) => String(bo);
      paint();
    }
  });

  // ---------------------------------------------------------------- SN2 path
  VIZ.register('sn2-path', {
    title: 'An SN2 reaction path', kind: 'Animation',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 320', body, 'Geometry and energy along the SN2 reaction coordinate'), g = api.svg('g', null, s);
      let u = 0, env = 'gas', play = true;
      const ctl = api.controls();
      api.segmented([{ value: 'gas', label: 'Gas phase' }, { value: 'water', label: 'In water' }], env, (v) => { env = v; paint(); }, ctl);
      api.slider({ label: 'Reaction coordinate', min: 0, max: 1, step: 0.01, value: 0, format: (v) => v.toFixed(2) }, (v) => { play = false; u = v; paint(); }, ctl);
      api.button('Play / pause', () => { play = !play; }, ctl);
      const ro = api.readouts(), r1 = api.readout('Stage', ro), r2 = api.readout('Energy', ro);
      api.caption('Y⁻ attacks from the back while X⁻ leaves, with one transition state. In the <b>gas phase</b> ion-dipole wells sit on either side of a barrier below the reactants; in <b>water</b> the nucleophile is solvated, so one high barrier remains.');
      const pts = { gas: [[0, 0.55], [0.18, 0.22], [0.5, 0.45], [0.82, 0.22], [1, 0.5]], water: [[0, 0.2], [0.5, 0.78], [1, 0.25]] };
      const E = (uu) => { const P = pts[env]; for (let i = 0; i < P.length - 1; i++) if (uu <= P[i + 1][0]) { const f = (uu - P[i][0]) / (P[i + 1][0] - P[i][0]); return P[i][1] + (P[i + 1][1] - P[i][1]) * (1 - Math.cos(Math.PI * f)) / 2; } return P[P.length - 1][1]; };
      const b = { x: 40, y: 20, w: 330, h: 250 };
      function paint() {
        clear(g); axes(api, g, b, 'reaction coordinate', 'E');
        const x = (q) => b.x + 14 + q * (b.w - 28), y = (e) => b.y + b.h - e * (b.h - 20);
        const c = []; for (let q = 0; q <= 1.001; q += 0.02) c.push([x(q), y(E(q))]); path(api, g, c, env === 'gas' ? C.e : C.cat, 3);
        api.svg('circle', { cx: x(u), cy: y(E(u)), r: 8, fill: C.white }, g);
        const mx = 520, my = 150, sm = u * u * (3 - 2 * u), dY = 120 - 70 * sm, dX = 50 + 70 * sm;
        const cx = mx, Yx = cx - dY, Xx = cx + dX;
        api.svg('path', { d: `M${Yx} ${my}H${cx - 18}`, stroke: C.line2, 'stroke-width': 3, 'stroke-dasharray': sm < 0.85 ? '5 5' : '0' }, g);
        api.svg('path', { d: `M${cx + 18} ${my}H${Xx}`, stroke: C.line2, 'stroke-width': 3, 'stroke-dasharray': sm > 0.15 ? '5 5' : '0' }, g);
        api.svg('circle', { cx, cy: my, r: 18, fill: C.cat }, g); Tx(api, g, cx, my + 5, 'C', { fill: '#111' });
        const tilt = 22 * (1 - Math.abs(2 * sm - 1)) ;
        [[-1, -1], [0, 1], [1, -1]].forEach(([k], i) => { const hx = cx + (i - 1) * 22, hy = my - 38 - tilt * (i === 1 ? 0.2 : 0); api.svg('path', { d: `M${cx} ${my - 18}L${hx} ${hy}`, stroke: C.line2, 'stroke-width': 3 }, g); api.svg('circle', { cx: hx, cy: hy, r: 8, fill: C.dim }, g); });
        api.svg('circle', { cx: Yx, cy: my, r: 14, fill: C.good }, g); Tx(api, g, Yx, my + 5, 'Y', { fill: '#111' });
        api.svg('circle', { cx: Xx, cy: my, r: 14, fill: C.bad }, g); Tx(api, g, Xx, my + 5, 'X', { fill: '#111' });
        Tx(api, g, mx, 240, u < 0.15 ? 'Y⁻ + CH₃X' : u > 0.85 ? 'CH₃Y + X⁻' : Math.abs(u - 0.5) < 0.1 ? 'transition state: both partial bonds' : 'bond forming and breaking', { fill: C.dim });
        r1.set(u < 0.12 ? 'Reactants' : u > 0.88 ? 'Products' : Math.abs(u - 0.5) < 0.08 ? 'Transition state' : env === 'gas' && Math.abs(u - 0.18) < 0.08 ? 'Intermediate 1' : env === 'gas' && Math.abs(u - 0.82) < 0.08 ? 'Intermediate 2' : 'En route');
        r2.set(E(u).toFixed(2) + ' (relative)');
      }
      paint();
      api.loop((dt) => { if (play) { u += dt * 0.12; if (u > 1) u = 0; paint(); } });
    }
  });

  // ---------------------------------------------------------------- water normal modes
  VIZ.register('normal-modes', {
    title: 'Normal modes of water', kind: 'Animation',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 300', body, 'Animated vibrational modes of a water molecule'), g = api.svg('g', null, s);
      const MODE = { sym: ['Symmetric stretch', 3657], bend: ['Bend', 1595], asym: ['Asymmetric stretch', 3756] };
      let mode = 'sym', amp = 1, t = 0;
      const ctl = api.controls();
      api.segmented(Object.keys(MODE).map((k) => ({ value: k, label: MODE[k][0] })), mode, (v) => { mode = v; }, ctl);
      api.slider({ label: 'Amplitude', min: 0.2, max: 1.5, step: 0.05, value: amp, format: (v) => v.toFixed(2) }, (v) => { amp = v; }, ctl);
      const ro = api.readouts(), r1 = api.readout('Wavenumber', ro), r2 = api.readout('Modes: 3N − 6', ro), r3 = api.readout('Changes dipole?', ro);
      api.caption('A non-linear molecule of N = 3 atoms has <b>3N − 6 = 3</b> normal modes. In each, every atom moves in step at one frequency. All three change the dipole moment, so all are <b>IR active</b>.');
      const ox = 320, oy = 150, hx = 90, hy = -70;
      function paint() {
        clear(g);
        const sn = Math.sin(t) * 22 * amp;
        let h1 = [ox - hx, oy + hy], h2 = [ox + hx, oy + hy], o = [ox, oy];
        const u1 = [-hx, hy], u2 = [hx, hy], nrm = (v) => { const l = Math.hypot(v[0], v[1]); return [v[0] / l, v[1] / l]; }, d1 = nrm(u1), d2 = nrm(u2);
        if (mode === 'sym') { h1 = [h1[0] + d1[0] * sn, h1[1] + d1[1] * sn]; h2 = [h2[0] + d2[0] * sn, h2[1] + d2[1] * sn]; o = [ox, oy + sn * 0.25]; }
        if (mode === 'asym') { h1 = [h1[0] + d1[0] * sn, h1[1] + d1[1] * sn]; h2 = [h2[0] - d2[0] * sn, h2[1] - d2[1] * sn]; o = [ox + sn * 0.2, oy - sn * 0.1]; }
        if (mode === 'bend') { const th = sn * 0.02; const rot = (p, sg) => [ox + (p[0] - ox) * Math.cos(sg * th) - (p[1] - oy) * Math.sin(sg * th), oy + (p[0] - ox) * Math.sin(sg * th) + (p[1] - oy) * Math.cos(sg * th)]; h1 = rot(h1, 1); h2 = rot(h2, -1); o = [ox, oy + sn * 0.3]; }
        api.svg('path', { d: `M${h1[0]} ${h1[1]}L${o[0]} ${o[1]}L${h2[0]} ${h2[1]}`, fill: 'none', stroke: C.line2, 'stroke-width': 5, 'stroke-linejoin': 'round' }, g);
        api.svg('circle', { cx: o[0], cy: o[1], r: 24, fill: C.bad }, g); Tx(api, g, o[0], o[1] + 5, 'O', { fill: '#111' });
        [h1, h2].forEach((h) => { api.svg('circle', { cx: h[0], cy: h[1], r: 15, fill: C.cat }, g); Tx(api, g, h[0], h[1] + 5, 'H', { fill: '#111' }); });
        Tx(api, g, 320, 280, MODE[mode][0], { fill: C.dim });
        r1.set(MODE[mode][1] + ' cm⁻¹'); r2.set('3'); r3.set('Yes: IR active');
      }
      paint();
      api.loop((dt) => { t += dt * 5; paint(); });
    }
  });

  // ---------------------------------------------------------------- Molecular dynamics (slide 9)
  VIZ.register('md-sim', {
    title: 'Molecular dynamics: atoms moving over time', kind: 'Animation',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 320', body, 'Atoms joined by springs moving according to classical mechanics'), g = api.svg('g', null, s);
      let temp = 1, time = 0;
      const L = 70, K = 6, ctl = api.controls();
      api.slider({ label: 'Temperature (relative)', min: 0.2, max: 3, step: 0.1, value: temp, format: (v) => v.toFixed(1) }, (v) => { temp = v; }, ctl);
      const ro = api.readouts(), r1 = api.readout('Time', ro), r2 = api.readout('Longest bond', ro), r3 = api.readout('Bonds broken', ro);
      api.caption('MD applies <b>Newton\'s laws</b> to every atom, step after step. Bonds are springs, so they stretch and bend (<b>conformational change</b>) but never break: MD with molecular mechanics is <b>not an electronic structure method</b>.');
      const cx = 320, cy = 150;
      const A = [[-L / 2, -L / 2], [L / 2, -L / 2], [L / 2, L / 2], [-L / 2, L / 2], [L * 1.4, 0], [-L * 1.4, 0]].map((p) => ({ x: cx + p[0], y: cy + p[1], vx: (Math.random() - 0.5) * 60, vy: (Math.random() - 0.5) * 60, fx: 0, fy: 0 }));
      const B = [[0, 1], [1, 2], [2, 3], [3, 0], [1, 4], [2, 4], [3, 5], [0, 5], [0, 2]];
      const rest = B.map(([i, j]) => Math.hypot(A[i].x - A[j].x, A[i].y - A[j].y));
      const trail = [];
      function step(h) {
        A.forEach((a) => { a.fx = 0; a.fy = 0; });
        B.forEach(([i, j], n) => { const a = A[i], b = A[j], dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy) || 1, f = K * (d - rest[n]); a.fx += f * dx / d; a.fy += f * dy / d; b.fx -= f * dx / d; b.fy -= f * dy / d; });
        A.forEach((a) => { a.fx -= (a.x - cx) * 0.4; a.fy -= (a.y - cy) * 0.4; a.vx += a.fx * h; a.vy += a.fy * h; });
        let ke = 0; A.forEach((a) => { ke += 0.5 * (a.vx * a.vx + a.vy * a.vy); });
        const want = 600 * temp, sc = Math.sqrt(Math.max(0.2, Math.min(3, want / (ke || 1)))), m = 1 + (sc - 1) * 0.02;
        A.forEach((a) => { a.vx *= m; a.vy *= m; a.x += a.vx * h; a.y += a.vy * h; });
      }
      function paint() {
        clear(g);
        let mx = 0;
        B.forEach(([i, j], n) => { const a = A[i], b = A[j], d = Math.hypot(a.x - b.x, a.y - b.y); mx = Math.max(mx, d / rest[n]); api.svg('path', { d: `M${a.x} ${a.y}L${b.x} ${b.y}`, stroke: C.line2, 'stroke-width': 4 }, g); });
        trail.push([A[4].x, A[4].y]); if (trail.length > 60) trail.shift();
        path(api, g, trail, C.good, 2, { 'stroke-opacity': 0.6 });
        A.forEach((a, i) => api.svg('circle', { cx: a.x, cy: a.y, r: i < 4 ? 14 : 11, fill: i < 4 ? C.bad : C.cat }, g));
        r1.set((time * 10).toFixed(0) + ' fs'); r2.set((mx * 100).toFixed(0) + ' % of rest length'); r3.set('0 (not possible in MD)');
      }
      paint();
      api.loop(() => { for (let k = 0; k < 6; k++) { step(0.008); time += 0.008; } paint(); });
    }
  });

  // ---------------------------------------------------------------- Geometry optimisation (slide 36)
  VIZ.register('geom-opt', {
    title: 'Geometry optimisation step by step', kind: 'Animation',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 320', body, 'A point moving downhill on an energy curve until the force is zero'), g = api.svg('g', null, s);
      let x0 = 1.5, x = x0, n = 0, acc = 0, done = false;
      const ctl = api.controls();
      api.slider({ label: 'Initial geometry (start)', min: -1.7, max: 1.7, step: 0.05, value: x0, format: (v) => v.toFixed(2) }, (v) => { x0 = v; x = v; n = 0; acc = 0; done = false; paint(); }, ctl);
      const ro = api.readouts(), r1 = api.readout('Step', ro), r2 = api.readout('Energy', ro), r3 = api.readout('Force', ro), r4 = api.readout('Status', ro);
      api.caption('<b>Calculate energy and force, nudge the atoms, repeat</b> until the force is about 0 and the energy barely changes. A different <b>initial geometry</b> can end in a different minimum, with a different energy.');
      const E = (q) => Math.pow(q * q - 1, 2) + 0.3 * q, F = (q) => -(4 * q * (q * q - 1) + 0.3);
      const b = { x: 60, y: 20, w: 520, h: 240 }, X = (q) => b.x + (q + 1.9) / 3.8 * b.w, Y = (v) => b.y + b.h - (v + 0.6) / 4.2 * b.h;
      function paint() {
        clear(g); axes(api, g, b, 'geometry', 'E');
        const pts = []; for (let q = -1.85; q <= 1.85; q += 0.04) pts.push([X(q), Y(E(q))]);
        path(api, g, pts, C.e, 3);
        const f = F(x), len = Math.max(-60, Math.min(60, f * 20));
        if (!done) api.svg('path', { d: `M${X(x)} ${Y(E(x)) - 26}H${X(x) + len}`, stroke: C.cat, 'stroke-width': 3 }, g);
        api.svg('circle', { cx: X(x), cy: Y(E(x)) - 10, r: 9, fill: done ? C.good : C.white }, g);
        r1.set(String(n)); r2.set(E(x).toFixed(3)); r3.set(f.toFixed(3)); r4.set(done ? 'converged: force ≈ 0' : 'optimising…');
      }
      paint();
      api.loop((dt) => { if (done) return; acc += dt; if (acc < 0.12) return; acc = 0; const f = F(x); if (Math.abs(f) < 0.02) { done = true; } else { x += 0.04 * f; n++; } paint(); });
    }
  });

  // ---------------------------------------------------------------- Intermediate and transition state (slide 41)
  VIZ.register('ts-explorer', {
    title: 'Intermediate or transition state?', kind: 'Animation',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 320', body, 'A point disturbed at a minimum stays near it, at a saddle point it rolls away'), g = api.svg('g', null, s);
      const gs = (q, m, w) => Math.exp(-Math.pow((q - m) / w, 2));
      const E = (q) => 0.6 + 1.1 * gs(q, 0.25, 0.09) + 0.9 * gs(q, 0.72, 0.09) - 0.45 * gs(q, 0.47, 0.1) - 0.5 * gs(q, 0, 0.12) - 0.7 * gs(q, 1, 0.12) - 0.1 * q;
      const dE = (q) => (E(q + 1e-4) - E(q - 1e-4)) / 2e-4, d2E = (q) => (E(q + 2e-3) + E(q - 2e-3) - 2 * E(q)) / 4e-6;
      const near = (a) => { let best = a; for (let q = a - 0.06; q <= a + 0.06; q += 0.001) if (Math.abs(dE(q)) < Math.abs(dE(best))) best = q; return best; };
      const PT = { r: ['Reactants', 0.0, 'min'], t1: ['TS 1', 0.25, 'ts'], i: ['Intermediate', 0.47, 'min'], t2: ['TS 2', 0.72, 'ts'], p: ['Products', 1.0, 'min'] };
      const pos = {}; Object.keys(PT).forEach((k) => { pos[k] = near(PT[k][1]); });
      let key = 'i', q = pos.i + 0.012, v = 0, t = 0;
      const ctl = api.controls();
      api.segmented(Object.keys(PT).map((k) => ({ value: k, label: PT[k][0] })), key, (k) => { key = k; q = pos[k] + 0.012; v = 0; t = 0; }, ctl);
      const ro = api.readouts(), r1 = api.readout('Curvature (d²E/dq²)', ro), r2 = api.readout('Imaginary frequencies', ro), r3 = api.readout('Type of point', ro);
      api.caption('Nudge the structure at a stationary point. At a <b>minimum</b> (reactant, intermediate, product) it vibrates back: <b>zero imaginary frequencies</b>. At a <b>transition state</b> it falls off the top: <b>exactly one imaginary frequency</b>.');
      const b = { x: 60, y: 20, w: 520, h: 240 }, X = (u) => b.x + u * b.w, Y = (e) => b.y + b.h - (e + 0.1) / 1.9 * b.h;
      function paint() {
        clear(g); axes(api, g, b, 'reaction coordinate', 'E');
        const pts = []; for (let u = 0; u <= 1.0001; u += 0.01) pts.push([X(u), Y(E(u))]);
        path(api, g, pts, C.e, 3);
        Object.keys(PT).forEach((k) => { api.svg('circle', { cx: X(pos[k]), cy: Y(E(pos[k])), r: 5, fill: PT[k][2] === 'ts' ? C.bad : C.good }, g); });
        api.svg('circle', { cx: X(q), cy: Y(E(q)) - 10, r: 9, fill: C.white }, g);
        const c = d2E(pos[key]), isTs = PT[key][2] === 'ts';
        r1.set((c > 0 ? '+' : '') + c.toFixed(1)); r2.set(isTs ? '1 (one downhill direction)' : '0'); r3.set(isTs ? 'transition state (first-order saddle point)' : key === 'i' ? 'intermediate (local minimum)' : 'minimum');
      }
      paint();
      api.loop((dt) => { t += dt; const h = Math.min(dt, 0.03); v += -dE(q) * 6 * h; q += v * h; if (q < -0.1 || q > 1.1 || t > 5) { q = pos[key] + 0.012; v = 0; t = 0; } paint(); });
    }
  });
})();
