SUMMARY({
  module: 'm5',
  tldr: `<p>Computational chemistry predicts structures, energies and spectra with computers instead of experiments. <b>Molecular mechanics and dynamics</b> treat atoms classically; <b>ab initio, semi-empirical and DFT</b> solve the Schrödinger equation with different approximations. Molecular orbitals come from <b>LCAO</b>. Energy against geometry gives <b>potential energy surfaces</b>, where geometry optimisation finds stationary points and frequency calculations tell minima, transition states and hilltops apart.</p>`,
  storyline: [
    { title: 'Why compute', html: `<p>Safe, cheap, any system; Nobel milestones 1998, 2013, 2024.</p>` },
    { title: 'Methods', html: `<p>MM, MD, ab initio, semi-empirical, DFT: accuracy against cost.</p>` },
    { title: 'Orbitals', html: `<p>Atomic orbitals, then <b>LCAO</b> molecular orbitals and bond order.</p>` },
    { title: 'Surfaces', html: `<p>PES, stationary points, optimisation and frequencies.</p>` },
    { title: 'Applications', html: `<p>Reaction mechanisms (SN2) and AI/ML screening of semiconductors.</p>` }
  ],
  bigIdeas: [
    { title: 'What it is', topic: 'm5-comp-intro', html: `<p>Study of reactions, structures and properties using computers; <b>ĤΨ = EΨ</b>; DFT (Kohn and Pople, 1998).</p>` },
    { title: 'Methods', topic: 'm5-comp-methods', html: `<p><b>MM</b> balls and springs; <b>MD</b> Newton over time; <b>ab initio</b> first principles; <b>semi-empirical</b> parameters; <b>DFT</b> electron density.</p>` },
    { title: 'Atomic orbitals', topic: 'm5-atomic-orbitals', html: `<p>Quantum numbers n, l, m, s; Aufbau, Pauli, Hund.</p>` },
    { title: 'Molecular orbitals', topic: 'm5-molecular-orbitals', html: `<p>LCAO: same energy, same symmetry, good overlap. <b>Bond order = (N<sub>b</sub> − N<sub>a</sub>)/2</b>.</p>` },
    { title: 'Orbital overlap', topic: 'm5-orbital-overlap', html: `<p>Overlap gives bonding and antibonding orbitals and explains molecular shapes.</p>` },
    { title: 'PES', topic: 'm5-potential-energy-surface', html: `<p>Energy vs geometry; curve, surface, hypersurface. ESP shows reactive sites.</p>` },
    { title: 'Optimisation and frequency', topic: 'm5-geometry-frequency', html: `<p>Modes <b>3N − 5</b> (linear), <b>3N − 6</b>. Imaginary frequencies: 0 minimum, 1 transition state, 2+ hilltop.</p>` },
    { title: 'Mechanisms', topic: 'm5-reaction-mechanisms', html: `<p>SN2 gas-phase double-well PES; solvent can raise the barrier by many orders of magnitude.</p>` },
    { title: 'AI and ML', topic: 'm5-ai-ml-screening', html: `<p>Supervised learning predicts band gap from formation energy, lattice constants, density and magnetisation.</p>` }
  ],
  compare: [
    { title: 'Computational methods', html: `<table class="tbl"><thead><tr><th>Method</th><th>Physics</th><th>Cost</th></tr></thead><tbody><tr><td>Molecular mechanics</td><td>Classical, springs</td><td>Lowest</td></tr><tr><td>Semi-empirical</td><td>Approximate Schrödinger + parameters</td><td>Low</td></tr><tr><td>DFT</td><td>Electron density</td><td>Moderate</td></tr><tr><td>Ab initio</td><td>Schrödinger, first principles</td><td>High</td></tr></tbody></table>` },
    { title: 'Stationary points', html: `<table class="tbl"><thead><tr><th>Point</th><th>Imaginary frequencies</th></tr></thead><tbody><tr><td>Minimum</td><td>0</td></tr><tr><td>Transition state</td><td>1</td></tr><tr><td>Hilltop</td><td>2 or more</td></tr></tbody></table>` }
  ],
  numbers: [
    { value: '1998 / 2013 / 2024', what: 'Nobel prizes: DFT, multiscale modelling, AI protein design' },
    { value: '3N − 5 / 3N − 6', what: 'Vibrational modes of linear / non-linear molecules' },
    { value: 'up to 20 orders', what: 'SN2 rate drop from gas phase to water' }
  ],
  traps: [
    `<p>Out-of-phase LCAO gives an <b>antibonding</b> orbital (the slide calls it non-bonding).</p>`,
    `<p>Check the molecule is <b>linear or not</b> before counting vibrational modes.</p>`,
    `<p>MM-based dynamics cannot describe <b>bond breaking</b>.</p>`
  ]
});
