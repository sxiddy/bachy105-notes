SUMMARY({
  module: 'm5',
  tldr: `<p>Computational chemistry uses computers to predict structures, energies, spectra and reaction paths. <b>Molecular mechanics and dynamics</b> treat atoms classically; <b>ab initio, semi-empirical and DFT</b> solve the Schrödinger equation with different approximations; <b>QM/MM</b> combines the two. Molecular orbitals come from <b>LCAO</b>, and energy against geometry gives <b>potential energy surfaces</b>. Geometry optimisation finds stationary points, frequency calculations tell intermediates (no imaginary frequency) from transition states (one), and AI/ML adds speed to the screening of materials.</p>`,
  storyline: [
    { title: 'What and why', html: `<p>Definitions, scope, and the computers, software and skills needed.</p>` },
    { title: 'Methods', html: `<p>MM, MD, ab initio, semi-empirical, DFT, QM/MM, then methods and basis sets.</p>` },
    { title: 'Orbitals', html: `<p>Atomic orbitals, orbital interaction, then <b>LCAO</b> molecular orbitals, HOMO and LUMO.</p>` },
    { title: 'Surfaces', html: `<p>PEC, PES and ESP, then optimisation, frequency, intermediates and transition states.</p>` },
    { title: 'Applications', html: `<p>Reaction mechanisms (SN1, SN2, enolization) and AI/ML screening of semiconductors.</p>` }
  ],
  bigIdeas: [
    { title: 'What it is', topic: 'm5-comp-intro', html: `<p>Mathematical models and computer simulation of structures, properties and reactions. Laptop, workstation or HPC cluster by system size.</p>` },
    { title: 'Methods', topic: 'm5-comp-methods', html: `<p><b>MM</b> balls and springs; <b>MD</b> motion over time; <b>ab initio</b> first principles; <b>semi-empirical</b> parameters; <b>DFT</b> electron density; <b>QM/MM</b> QM region plus MM region.</p>` },
    { title: 'Calculations', topic: 'm5-qm-calculations', html: `<p>A method plus a basis set: minimal, split-valence, polarisation, diffuse, correlation consistent, ECP.</p>` },
    { title: 'Atomic orbitals', topic: 'm5-atomic-orbitals', html: `<p>l = 0 to n − 1; m<sub>l</sub> has 2l + 1 values; Aufbau, Pauli, Hund.</p>` },
    { title: 'Orbital interactions', topic: 'm5-orbital-overlap', html: `<p>Comparable energy, suitable symmetry, effective overlap. Constructive gives bonding, destructive antibonding.</p>` },
    { title: 'Molecular orbitals', topic: 'm5-molecular-orbitals', html: `<p>Hund and Mulliken; LCAO; HOMO and LUMO; atomic orbitals are localised, molecular orbitals delocalised.</p>` },
    { title: 'PES', topic: 'm5-potential-energy-surface', html: `<p>Curve for a diatom, surface for a triatomic, hypersurface beyond; <b>3N − 6</b> vibrations. ESP maps show red negative, blue positive.</p>` },
    { title: 'Optimisation and frequency', topic: 'm5-geometry-frequency', html: `<p>Force about zero at a stationary point. <b>ν = (1/2π)√(k/μ)</b>; modes <b>3N − 5</b> (linear), <b>3N − 6</b>. Intermediate: 0 imaginary frequencies; TS: 1.</p>` },
    { title: 'Mechanisms', topic: 'm5-reaction-mechanisms', html: `<p>Optimise, propose steps, find TS, trace IRC, energy profile. SN2 gas-phase double-well PES; solvent can raise the barrier by many orders of magnitude.</p>` },
    { title: 'AI and ML', topic: 'm5-ai-ml-screening', html: `<p>Accurate but slow plus fast but data dependent. Six steps from goal to validation.</p>` }
  ],
  compare: [
    { title: 'Computational methods', html: `<table class="tbl"><thead><tr><th>Method</th><th>Physics</th><th>Cost</th></tr></thead><tbody><tr><td>Molecular mechanics</td><td>Classical, springs</td><td>Lowest</td></tr><tr><td>Semi-empirical</td><td>Approximate Schrödinger + parameters</td><td>Low</td></tr><tr><td>QM/MM</td><td>QM region + MM region</td><td>Below full QM</td></tr><tr><td>DFT</td><td>Electron density</td><td>Moderate</td></tr><tr><td>Ab initio</td><td>Schrödinger, first principles</td><td>High</td></tr></tbody></table>` },
    { title: 'Intermediate and transition state', html: `<table class="tbl"><thead><tr><th>Feature</th><th>Intermediate</th><th>Transition state</th></tr></thead><tbody><tr><td>On the PES</td><td>Local minimum</td><td>First-order saddle point</td></tr><tr><td>Imaginary frequencies</td><td>0</td><td>1</td></tr><tr><td>Stability</td><td>Relatively stable</td><td>Unstable, at the barrier</td></tr></tbody></table>` }
  ],
  numbers: [
    { value: '3N − 5 / 3N − 6', what: 'Vibrational modes of linear / non-linear molecules' },
    { value: '3, 6, 4, 9', what: 'Modes of H₂O, NH₃, CO₂, CH₄' },
    { value: 'up to 20 orders', what: 'SN2 rate drop from gas phase to water' }
  ],
  traps: [
    `<p>Out-of-phase LCAO gives an <b>antibonding</b> orbital (the slide calls it non-bonding).</p>`,
    `<p>Check the molecule is <b>linear or not</b> before counting vibrational modes.</p>`,
    `<p>MM-based dynamics cannot describe <b>bond breaking</b>; use QM or QM/MM.</p>`,
    `<p>A transition state has <b>one</b> imaginary frequency; an intermediate has <b>none</b>.</p>`
  ]
});
