QUESTIONS({
  chunk: 'M5',
  questions: [
    {
      id: 'm5-q-01', module: 'm5', topic: 'm5-comp-methods', type: 'decide', level: 2,
      q: `<p>A pharma team wants to study how a <b>large protein</b> (tens of thousands of atoms) folds and moves over nanoseconds, with no need to model bond breaking. A second team wants the <b>energy barrier of a small bond-breaking reaction</b>. Which method suits each?</p>`,
      options: ['Both: ab initio', 'Protein: molecular dynamics with molecular mechanics forces; reaction: DFT or ab initio', 'Protein: DFT; reaction: molecular mechanics', 'Both: molecular mechanics'],
      correct: 1,
      answer: `<p><b>Protein: MD with MM forces. Reaction: DFT or ab initio.</b></p>`,
      explain: `<p>MM treats atoms as balls and bonds as springs, so it is cheap enough for huge systems, and MD adds motion over time. But MM is <b>not an electronic structure method</b>: bond breaking and making cannot be studied with it. For a reaction barrier you need forces from semi-empirical, ab initio or DFT calculations.</p>`,
      points: ['MM and MD: classical, large systems, no bond breaking', 'Reactions need quantum methods', 'Cost rises with accuracy and size']
    },
    {
      id: 'm5-q-02', module: 'm5', topic: 'm5-comp-methods', type: 'explain', level: 2,
      q: `<p>A researcher has to screen thousands of medium-sized molecules for a property and says ab initio is too slow, but molecular mechanics is not accurate enough for electronic properties. Which two alternatives from the course sit in between, and what does each simplify?</p>`,
      options: null, correct: null,
      answer: `<p><b>Semi-empirical</b> and <b>DFT</b>.</p>`,
      explain: `<p><b>Semi-empirical</b> methods simplify Hartree–Fock by approximating or omitting integrals and using experimental parameters. They are slower than MM but much faster than ab initio. <b>DFT</b> bypasses the wavefunction and works with the electron density through functionals, often reaching accuracy comparable to advanced ab initio at a much lower cost.</p>`,
      points: ['Semi-empirical: approximations plus parameters', 'DFT: electron density and functionals', 'Both cheaper than ab initio']
    },
    {
      id: 'm5-q-03', module: 'm5', topic: 'm5-molecular-orbitals', type: 'numerical', level: 2,
      q: `<p>Using molecular orbital theory, a student compares H<sub>2</sub> and a hypothetical He<sub>2</sub>. H<sub>2</sub> has two electrons, He<sub>2</sub> four, filled into σ<sub>1s</sub> then σ*<sub>1s</sub>. Compute the bond orders and say which molecule is expected to exist.</p>`,
      options: ['H₂ = 1, He₂ = 1; both exist', 'H₂ = 1, He₂ = 0; only H₂ exists', 'H₂ = 0, He₂ = 1; only He₂ exists', 'H₂ = 2, He₂ = 0; only H₂ exists'],
      correct: 1,
      answer: `<p>H<sub>2</sub>: <b>1</b>. He<sub>2</sub>: <b>0</b>. Only H<sub>2</sub> is stable.</p>`,
      explain: `<div class="worked"><div class="given"><ul><li>Bond order = (bonding − antibonding)/2</li></ul></div><div class="solve"><div class="eq">H<sub>2</sub>: (2 − 0)/2 = 1</div><div class="eq">He<sub>2</sub>: (2 − 2)/2 = 0</div></div><div class="result"><b>H<sub>2</sub> bonds; He<sub>2</sub> does not</b></div></div><p>In He<sub>2</sub> the stabilisation from the two bonding electrons is cancelled by the two antibonding ones (and the antibonding orbital is pushed up by more than the bonding one is pulled down), so no net bond forms.</p>`,
      points: ['Bond order = (Nb − Na)/2', 'Antibonding electrons cancel bonding ones', 'Bond order 0 means no stable molecule']
    },
    {
      id: 'm5-q-04', module: 'm5', topic: 'm5-molecular-orbitals', type: 'predict', level: 2,
      q: `<p>In a molecule A–B, atom B is much more electronegative than atom A. In the molecular orbital picture, where is the electron density of the <b>bonding</b> orbital concentrated, and what does that say about the bond?</p>`,
      options: ['Equally on A and B', 'Mostly on B, so the bond is polar with B partly negative', 'Mostly on A, so B is partly positive', 'Nowhere: the bonding orbital has no density'],
      correct: 1,
      answer: `<p><b>Mostly on B</b>: the bond is polar, with B at the negative end.</p>`,
      explain: `<p>In a heteronuclear diatomic, the bonding MO Ψ<sub>1</sub> lies lower in energy and is mainly the atomic orbital of the atom with the lower α (the more electronegative atom), with only a small in-phase contribution from the other. The antibonding orbital is mostly the other atom's orbital. So the shared pair sits closer to the more electronegative atom.</p>`,
      points: ['Bonding MO resembles the lower-energy AO', 'Lower α = more electronegative atom', 'Unequal sharing gives a polar bond']
    },
    {
      id: 'm5-q-05', module: 'm5', topic: 'm5-geometry-frequency', type: 'numerical', level: 2,
      q: `<p>A computational chemist runs frequency calculations on CO<sub>2</sub> (linear, 3 atoms) and SO<sub>2</sub> (bent, 3 atoms). How many vibrational normal modes should each give? A colleague reports 4 modes for SO<sub>2</sub>: what is the likely mistake?</p>`,
      options: ['CO₂ 3, SO₂ 3', 'CO₂ 4, SO₂ 3', 'CO₂ 4, SO₂ 4', 'CO₂ 3, SO₂ 4'],
      correct: 1,
      answer: `<p>CO<sub>2</sub>: <b>4</b> modes. SO<sub>2</sub>: <b>3</b> modes. Four for SO<sub>2</sub> comes from using the linear formula.</p>`,
      explain: `<div class="worked"><div class="given"><ul><li>Linear: 3N − 5. Non-linear: 3N − 6. N = 3</li></ul></div><div class="solve"><div class="eq">CO<sub>2</sub>: 3(3) − 5 = 4</div><div class="eq">SO<sub>2</sub>: 3(3) − 6 = 3</div></div><div class="result"><b>4 and 3</b></div></div><p>A linear molecule has only two rotational degrees of freedom, so it keeps one more vibration than a bent molecule of the same size. Reporting 4 for SO<sub>2</sub> means the 3N − 5 formula was applied to a non-linear molecule.</p>`,
      points: ['Linear 3N−5, non-linear 3N−6', 'Check molecular shape first', 'Water also has 3 modes']
    },
    {
      id: 'm5-q-06', module: 'm5', topic: 'm5-geometry-frequency', type: 'troubleshoot', level: 3,
      q: `<p>A student optimises a geometry hoping to find a stable product, then runs a frequency calculation. The output shows <b>one imaginary (negative) frequency</b>. What did the optimisation actually find, and what should the student do to reach a true minimum?</p>`,
      options: ['A minimum; nothing more is needed', 'A transition state; displace the structure along the imaginary mode and re-optimise', 'A hilltop with several negative directions; discard the program', 'An excited state; change the basis set'],
      correct: 1,
      answer: `<p>A <b>transition state</b>. Distort along the imaginary mode and optimise again.</p>`,
      explain: `<p>A minimum has no imaginary frequencies, a transition state has exactly one, and a hilltop has more than one. One negative frequency means the structure sits at a saddle point on the PES. The imaginary mode points downhill toward reactant and product, so moving the atoms along it and re-optimising leads to a real minimum.</p>`,
      points: ['0 imaginary = minimum, 1 = transition state, 2+ = hilltop', 'Frequency calculation validates the structure', 'Displace along the imaginary mode to fall into a minimum']
    },
    {
      id: 'm5-q-07', module: 'm5', topic: 'm5-geometry-frequency', type: 'explain', level: 2,
      q: `<p>Two students optimise the same C<sub>4</sub> molecule starting from different input structures and get different energies. One says the program is broken. Explain what is going on.</p>`,
      options: null, correct: null,
      answer: `<p>The surface has <b>several minima</b>, and each optimisation falls into the one nearest its starting structure.</p>`,
      explain: `<p>Optimisation changes bond lengths and angles in small steps until it finds a stationary point. Which one it finds depends on the starting geometry: an input close to one isomer or conformer gives that one. A good input structure is needed to reach the nearest <b>global minimum</b>, and conformer analysis (as for propane) compares the minima.</p>`,
      points: ['Many local minima on the PES', 'Start geometry decides which minimum', 'Compare conformers to find the global minimum']
    },
    {
      id: 'm5-q-08', module: 'm5', topic: 'm5-potential-energy-surface', type: 'interpret', level: 2,
      q: `<p>A student needs to map the potential energy of the HOF molecule against its geometry and asks why she cannot just draw a single graph. How many geometric parameters are needed, and what is the object called?</p>`,
      options: ['Two parameters; a potential energy curve', 'Three parameters; a 4D potential energy hypersurface', 'One parameter; a surface', 'Four parameters; a 5D curve'],
      correct: 1,
      answer: `<p><b>Three parameters</b> (O–H length, O–F length, H–O–F angle), giving a <b>4D hypersurface</b>.</p>`,
      explain: `<p>One parameter plus energy gives a 2D curve (H<sub>2</sub>). Two parameters plus energy give a 3D surface (water, with one O–H length and one angle). Three parameters plus energy need four dimensions, which cannot be drawn, so it is a <b>potential energy hypersurface</b>, E = f(q<sub>1</sub>, q<sub>2</sub>, q<sub>3</sub>).</p>`,
      points: ['Dimensions = parameters + 1', 'H2 curve, water surface, HOF hypersurface', 'Slices are used to visualise high dimensions']
    },
    {
      id: 'm5-q-09', module: 'm5', topic: 'm5-reaction-mechanisms', type: 'predict', level: 2,
      q: `<p>A group computes the SN2 reaction of Cl<sup>−</sup> with an alkyl halide, first in the gas phase and then in water. In water they find the barrier is much higher and the rate far lower. What explains this?</p>`,
      options: ['Water destabilises the nucleophile', 'Water stabilises the Cl⁻ nucleophile strongly but the transition state less, so the barrier rises', 'Water changes the leaving group', 'Water turns SN2 into SN1 automatically'],
      correct: 1,
      answer: `<p><b>Solvation stabilises the nucleophile more than the transition state</b>, raising the barrier.</p>`,
      explain: `<p>In the gas phase there is no solvent stabilisation, so SN2 is very fast but hard to control. In water, the localised Cl<sup>−</sup> is strongly solvated, while the charge in the transition state is more spread out and gains less stabilisation. The gap between reactant and TS grows, and the rate can drop by up to 20 orders of magnitude.</p>`,
      points: ['Gas phase: very fast, double-well PES', 'Solvation stabilises the localised anion more', 'Barrier up, rate down by orders of magnitude']
    },
    {
      id: 'm5-q-10', module: 'm5', topic: 'm5-ai-ml-screening', type: 'design', level: 2,
      q: `<p>A materials startup wants to find candidate semiconductors from a database of crystals without running DFT on each. They have formation energy, lattice constants, density and total magnetisation for every material, and band gaps for a subset. Which learning setup should they use, and what is the target?</p>`,
      options: ['Unsupervised learning, with band gap as input', 'Supervised learning (regression/classification), band gap as the target', 'Unsupervised learning, with formation energy as target', 'No learning is possible without DFT on all materials'],
      correct: 1,
      answer: `<p><b>Supervised learning</b> with <b>band gap as the target</b>.</p>`,
      explain: `<p>Band gaps are known for some materials, so those are labelled data. Train a model (for example XGBoost) on formation energy, lattice constants, density and magnetisation to predict band gap, tune hyperparameters, and then predict the top candidates among the unlabelled rest. Unsupervised learning (clustering) can help group materials but needs no labels and does not predict a target value.</p>`,
      points: ['Labelled data means supervised learning', 'Features: formation energy, lattice constants, density, magnetisation', 'Target: band gap in eV']
    }
  ]
});
