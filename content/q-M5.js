QUESTIONS({
  chunk: 'M5',
  questions: [
    {
      id: 'm5-q-01', module: 'm5', topic: 'm5-comp-methods', type: 'decide', level: 2,
      q: `<p>A pharma team wants to study how a <b>large protein</b> (tens of thousands of atoms) folds and moves over nanoseconds, with no need to model bond breaking. A second team wants the <b>energy barrier of a small bond-breaking reaction</b>. Which method suits each?</p>`,
      options: ['Both: ab initio', 'Protein: molecular dynamics with molecular mechanics forces; reaction: DFT or ab initio', 'Protein: DFT; reaction: molecular mechanics', 'Both: molecular mechanics'],
      correct: 1,
      answer: `<p><b>Protein: MD with MM forces. Reaction: DFT or ab initio.</b></p>`,
      explain: `<p>MM treats atoms as balls and bonds as springs, so it is cheap enough for huge systems, and MD adds motion over time. But MD of this kind is <b>not an electronic structure method</b>: bond breaking and making cannot be studied with it. For a reaction barrier you need forces from semi-empirical, ab initio or DFT calculations.</p>`,
      points: ['MM and MD: classical, cheap, no bond breaking', 'Reactions need quantum methods', 'Cost rises with accuracy and size']
    },
    {
      id: 'm5-q-02', module: 'm5', topic: 'm5-comp-methods', type: 'explain', level: 2,
      q: `<p>A researcher has to screen thousands of medium-sized molecules for a property and says ab initio is too slow, but molecular mechanics is not accurate enough for electronic properties. Which two alternatives from the course sit in between, and what does each simplify?</p>`,
      options: null, correct: null,
      answer: `<p><b>Semi-empirical</b> and <b>DFT</b>.</p>`,
      explain: `<p><b>Semi-empirical</b> methods simplify Hartree–Fock by approximating or omitting integrals and using experimental parameters (parameterisation). They are slower than MM but much faster than ab initio. <b>DFT</b> bypasses the wavefunction and works with the electron density through functionals, often reaching accuracy comparable to advanced ab initio at a much lower cost.</p>`,
      points: ['Semi-empirical: approximations plus parameters', 'DFT: electron density and functionals', 'Both cheaper than ab initio']
    },
    {
      id: 'm5-q-03', module: 'm5', topic: 'm5-comp-methods', type: 'decide', level: 2,
      q: `<p>A group studies a bond-breaking step at the <b>active site of an enzyme</b>. The enzyme has thousands of atoms and sits in water. Treating everything with DFT is too expensive, and plain molecular mechanics cannot describe the bond breaking. What should they use?</p>`,
      options: ['DFT on every atom, on a bigger computer', 'Molecular mechanics for the whole system', 'QM/MM: a QM region for the atoms that react, an MM region for the protein and solvent', 'Molecular dynamics with molecular mechanics forces'],
      correct: 2,
      answer: `<p><b>QM/MM</b>, with the reacting atoms in the QM region and the protein and solvent in the MM region.</p>`,
      explain: `<p>QM/MM splits the system. The <b>QM region</b> holds the atoms involved in bond breaking, bond formation or electron transfer, and its electronic structure is treated explicitly. The <b>MM region</b> (surrounding protein and solvent) uses classical force fields, which reduces the cost. The two regions are coupled through electrostatic and van der Waals interactions. This is cheaper than full QM and gives a more realistic reactive region than MM alone.</p>`,
      points: ['QM region: reacting atoms', 'MM region: protein and solvent', 'Coupled by electrostatic and van der Waals terms']
    },
    {
      id: 'm5-q-04', module: 'm5', topic: 'm5-qm-calculations', type: 'decide', level: 2,
      q: `<p>A student runs one calculation on the <b>fluoride anion F<sup>−</sup></b> and another on an <b>iron complex</b>. Which basis set features should each calculation use?</p>`,
      options: ['F⁻: diffuse functions (e.g. 6-31+G); iron: an effective core potential (e.g. LANL2DZ)', 'F⁻: minimal basis (STO-3G); iron: diffuse functions', 'F⁻: effective core potential; iron: polarisation functions only', 'Both calculations need only a minimal basis set'],
      correct: 0,
      answer: `<p><b>Diffuse</b> functions for F<sup>−</sup>; an <b>effective core potential</b> basis set for iron.</p>`,
      explain: `<p>Anions hold electrons far from the nucleus, so they need <b>diffuse</b> basis sets such as 6-31+G or 6-31++G (also used for excited states and weak interactions). Transition metals and heavy atoms such as Fe, Co and Ni use <b>effective core potential</b> basis sets (LANL2DZ, Stuttgart–Dresden, Def2), which replace the core electrons with an effective potential to save cost.</p>`,
      points: ['Diffuse: anions, excited states, weak interactions', 'ECP: transition metals and heavy atoms', 'Minimal sets are fast but only for small molecules']
    },
    {
      id: 'm5-q-05', module: 'm5', topic: 'm5-atomic-orbitals', type: 'numerical', level: 2,
      q: `<p>For the principal quantum number <b>n = 3</b>, list the allowed values of l and m<sub>l</sub>, and find how many <b>spatial orbitals</b> there are. How many spin-orbitals does that give?</p>`,
      options: null, correct: null,
      answer: `<p>l = 0, 1, 2; <b>9 spatial orbitals</b>; <b>18 spin-orbitals</b>.</p>`,
      explain: `<div class="worked"><div class="given"><ul><li>l = 0, 1, …, (n − 1); m<sub>l</sub> = −l … +l, giving 2l + 1 values</li></ul></div><div class="solve"><div class="eq">l = 0: 1 value; l = 1: 3 values; l = 2: 5 values</div><div class="eq">1 + 3 + 5 = 9 spatial orbitals</div><div class="eq">9 × 2 (m<sub>s</sub> = ±½) = 18 spin-orbitals</div></div><div class="result"><b>9 spatial orbitals, 18 spin-orbitals</b></div></div><p>A spatial orbital is fixed by n, l, m<sub>l</sub>; adding m<sub>s</sub> gives a spin-orbital.</p>`,
      points: ['l runs 0 to n − 1', 'm_l has 2l + 1 values', 'Spin-orbital = spatial orbital plus m_s']
    },
    {
      id: 'm5-q-06', module: 'm5', topic: 'm5-orbital-overlap', type: 'predict', level: 2,
      q: `<p>Two helium atoms, each with a filled 1s orbital, approach each other. Their 1s orbitals have the same energy and symmetry and overlap well, so they form a bonding and an antibonding MO. Does a stable bond form?</p>`,
      options: ['Yes: the bonding MO is lower, so the system is always stabilised', 'Yes: two bonding electrons are enough for a bond', 'Only if the atoms stay far apart', 'No: all four electrons fill both MOs, and the antibonding destabilisation cancels the bonding stabilisation'],
      correct: 3,
      answer: `<p><b>No stable bond.</b> The filled antibonding MO cancels the benefit of the filled bonding MO.</p>`,
      explain: `<p>Constructive overlap gives a bonding MO below the AOs and destructive overlap an antibonding MO above them. A stable bond forms only when the <b>stabilisation from bonding interactions outweighs the destabilisation from antibonding interactions</b>. Four electrons fill both MOs, so there is no net lowering of energy (the antibonding MO is raised at least as much as the bonding MO is lowered), and He<sub>2</sub> does not form. Conditions such as comparable energy, symmetry and overlap are met, but they are not enough on their own.</p>`,
      points: ['Bonding MO lower, antibonding MO higher', 'Bond needs bonding stabilisation to outweigh antibonding', 'Meeting the overlap conditions is not enough']
    },
    {
      id: 'm5-q-07', module: 'm5', topic: 'm5-molecular-orbitals', type: 'explain', level: 2,
      q: `<p>Two atoms lie along the z-axis. A student tries to form a molecular orbital by combining the <b>2p<sub>z</sub></b> orbital of atom A with the <b>2p<sub>x</sub></b> orbital of atom B. Which condition for LCAO is broken, and which combination would work?</p>`,
      options: null, correct: null,
      answer: `<p>The <b>same-symmetry-about-the-molecular-axis</b> condition. 2p<sub>z</sub> with 2p<sub>z</sub> would work.</p>`,
      explain: `<p>For a proper linear combination the AOs need (1) the <b>same energy</b>, (2) the <b>same symmetry about the molecular axis</b> and (3) effective <b>overlap and orientation</b>. Here the energies match (both 2p), but 2p<sub>z</sub> and 2p<sub>x</sub> have different symmetry about the z-axis, so they do not overlap effectively. Combining 2p<sub>z</sub> with 2p<sub>z</sub> satisfies all three conditions.</p>`,
      points: ['Three LCAO conditions: energy, symmetry, overlap', '2pz with 2pz can combine', 'Different symmetry about the axis means no effective overlap']
    },
    {
      id: 'm5-q-08', module: 'm5', topic: 'm5-potential-energy-surface', type: 'numerical', level: 2,
      q: `<p>A student wants the full potential energy surface of <b>ammonia (NH<sub>3</sub>)</b>. How many coordinates describe its vibration, and why can the surface not be drawn in full, unlike the curve of a diatom?</p>`,
      options: null, correct: null,
      answer: `<p><b>6 vibrational coordinates</b>; the surface is a <b>hypersurface</b> that cannot be drawn in full.</p>`,
      explain: `<div class="worked"><div class="given"><ul><li>N = 4 atoms, non-linear: 3N coordinates, minus 3 translation and 3 rotation</li></ul></div><div class="solve"><div class="eq">3(4) − 6 = 6</div></div><div class="result"><b>6 vibrational coordinates</b></div></div><p>The PES is E = f(R<sub>1</sub>, … R<sub>N</sub>), a function of 6 coordinates, so with energy it needs seven dimensions. A diatom has a 2-D curve and a triatomic a 3-D surface; larger molecules have a hypersurface, which is shown only as slices or contour diagrams with the other coordinates held fixed.</p>`,
      points: ['3N − 6 vibrational coordinates for non-linear molecules', 'Diatom curve, triatomic surface, larger hypersurface', 'Contour diagrams show slices']
    },
    {
      id: 'm5-q-09', module: 'm5', topic: 'm5-geometry-frequency', type: 'numerical', level: 2,
      q: `<p>A computational chemist runs frequency calculations on CO<sub>2</sub> (linear, 3 atoms) and SO<sub>2</sub> (bent, 3 atoms). How many vibrational normal modes should each give? A colleague reports 4 modes for SO<sub>2</sub>: what is the likely mistake?</p>`,
      options: null, correct: null,
      answer: `<p>CO<sub>2</sub>: <b>4</b> modes. SO<sub>2</sub>: <b>3</b> modes. Four for SO<sub>2</sub> comes from using the linear formula.</p>`,
      explain: `<div class="worked"><div class="given"><ul><li>Linear: 3N − 5. Non-linear: 3N − 6. N = 3</li></ul></div><div class="solve"><div class="eq">CO<sub>2</sub>: 3(3) − 5 = 4</div><div class="eq">SO<sub>2</sub>: 3(3) − 6 = 3</div></div><div class="result"><b>4 and 3</b></div></div><p>A linear molecule has only two rotational degrees of freedom, so it keeps one more vibration than a bent molecule of the same size. Reporting 4 for SO<sub>2</sub> means the 3N − 5 formula was applied to a non-linear molecule. Water also has 3 modes, ammonia 6 and methane 9.</p>`,
      points: ['Linear 3N−5, non-linear 3N−6', 'Check molecular shape first', 'Water 3, NH3 6, CH4 9']
    },
    {
      id: 'm5-q-10', module: 'm5', topic: 'm5-geometry-frequency', type: 'troubleshoot', level: 3,
      q: `<p>A student optimises a geometry hoping to find a stable reaction <b>intermediate</b>, then runs a frequency calculation. The output shows <b>one imaginary (negative) frequency</b>. What did the optimisation find, and what should the student do?</p>`,
      options: ['A minimum; nothing more is needed', 'A transition state (first-order saddle point); distort the structure along the imaginary mode and re-optimise', 'An intermediate; the imaginary frequency is a numerical error', 'A global minimum; use a larger basis set'],
      correct: 1,
      answer: `<p>A <b>transition state</b>. Displace along the imaginary mode and optimise again.</p>`,
      explain: `<p>An intermediate is a <b>local minimum</b> with <b>zero</b> imaginary frequencies and all real, positive frequencies. A transition state is a <b>first-order saddle point</b> with <b>exactly one</b> imaginary frequency. One negative frequency therefore means the structure sits at an energy maximum along the reaction coordinate. Moving the atoms along that imaginary mode and re-optimising should lead towards a real minimum. The frequency calculation is what verifies the optimised structure.</p>`,
      points: ['Intermediate: 0 imaginary frequencies, local minimum', 'Transition state: exactly 1, saddle point', 'Frequency calculation verifies optimised structures']
    },
    {
      id: 'm5-q-11', module: 'm5', topic: 'm5-geometry-frequency', type: 'explain', level: 2,
      q: `<p>Two students optimise the same molecule with the <b>same method and the same basis set</b> but start from different input structures, and get different energies for the optimised structure. One says the program is broken. Explain what is going on.</p>`,
      options: null, correct: null,
      answer: `<p>The surface has <b>several minima</b>, and each optimisation falls into the one nearest its starting structure.</p>`,
      explain: `<p>Optimisation calculates the energy and force, moves the atoms slightly to lower the energy, and repeats until the force is about zero and the energy change is within tolerance. The stationary point it reaches depends on the <b>initial geometry</b>. Different starts can end in different minima (for example different conformers), so the energies differ. The program is working correctly; comparing the minima, and starting from sensible structures, shows which is the most stable.</p>`,
      points: ['Many local minima on the PES', 'Start geometry decides which minimum', 'Same method and basis set does not guarantee the same result']
    },
    {
      id: 'm5-q-12', module: 'm5', topic: 'm5-geometry-frequency', type: 'numerical', level: 3,
      q: `<p>Using ν = (1/2π)√(k/μ), compare the stretching frequency of a <b>C–H</b> bond with that of a <b>C–D</b> bond (D = deuterium, mass 2 u). Assume the force constant k is the same, and use masses C = 12 u and H = 1 u.</p>`,
      options: null, correct: null,
      answer: `<p>The C–D frequency is about <b>0.73 times</b> the C–H frequency, so it is lower.</p>`,
      explain: `<div class="worked"><div class="given"><ul><li>ν ∝ (k/μ)<sup>1/2</sup>, same k</li><li>μ = m<sub>A</sub>m<sub>B</sub>/(m<sub>A</sub> + m<sub>B</sub>)</li></ul></div><div class="solve"><div class="eq">μ(C–H) = (12 × 1)/13 = 0.923 u</div><div class="eq">μ(C–D) = (12 × 2)/14 = 1.714 u</div><div class="eq">ν(C–D)/ν(C–H) = √(0.923/1.714) = 0.73</div></div><div class="result"><b>ν(C–D) ≈ 0.73 ν(C–H)</b></div></div><p>A higher reduced mass gives a lower frequency, as the slide states. Only the mass changed, not the bond strength.</p>`,
      points: ['ν = (1/2π)√(k/μ)', 'Higher reduced mass, lower frequency', 'Same k means same bond strength']
    },
    {
      id: 'm5-q-13', module: 'm5', topic: 'm5-reaction-mechanisms', type: 'predict', level: 2,
      q: `<p>A group computes the SN2 reaction of Cl<sup>−</sup> with an alkyl halide, first in the gas phase and then in water. In water they find the barrier is much higher and the rate far lower. What explains this?</p>`,
      options: ['Water destabilises the nucleophile', 'Water changes the leaving group', 'Water stabilises the Cl⁻ nucleophile strongly but the transition state less, so the barrier rises', 'Water turns SN2 into SN1 automatically'],
      correct: 2,
      answer: `<p><b>Solvation stabilises the nucleophile more than the transition state</b>, raising the barrier.</p>`,
      explain: `<p>In the gas phase there is no solvent stabilisation, so SN2 is very fast but hard to control, with a double-well PES (ID1, one TS, ID2). In water, the localised Cl<sup>−</sup> is strongly solvated, while the charge in the transition state is more spread out and gains less stabilisation. The gap between reactant and TS grows, and the rate can drop by up to 20 orders of magnitude.</p>`,
      points: ['Gas phase: very fast, double-well PES', 'Solvation stabilises the localised anion more', 'Barrier up, rate down by orders of magnitude']
    },
    {
      id: 'm5-q-14', module: 'm5', topic: 'm5-reaction-mechanisms', type: 'troubleshoot', level: 3,
      q: `<p>While studying ketone enolization, a student finds a candidate proton-transfer structure whose frequency calculation shows <b>exactly one imaginary mode</b>. The student wants to be sure it is the transition state between the keto and enol forms. What further check does the workflow call for, and what should be compared afterwards?</p>`,
      options: null, correct: null,
      answer: `<p>Run an <b>IRC (pathway) check</b> to verify it connects the keto and enol structures, then compare the energies.</p>`,
      explain: `<p>One imaginary frequency classifies the structure as a <b>candidate</b> transition state. Whether it connects the intended structures is shown by tracing the <b>intrinsic reaction coordinate</b> from the TS towards reactants and towards products (TS connectivity). The workflow is: propose structures, optimise them, calculate frequencies at the optimised structures, verify TS connectivity, compare energies. The energy profile then gives E<sub>a</sub>, ΔE and ΔG, and shows which proton-transfer steps limit the rate.</p>`,
      points: ['One imaginary mode: candidate TS', 'IRC verifies connectivity to keto and enol', 'Then compare energies: Ea, ΔE, ΔG']
    },
    {
      id: 'm5-q-15', module: 'm5', topic: 'm5-ai-ml-screening', type: 'design', level: 2,
      q: `<p>A materials team has trained a model on known crystals and used it to rank thousands of <b>unexamined</b> materials by predicted band gap. Before they report new semiconductor discoveries, what must they do?</p>`,
      options: ['Validate the top predictions with high-level calculations and experimental measurements', 'Nothing: the ranking is already final', 'Remove duplicates and standardise units in the data', 'Go back and redefine the goal'],
      correct: 0,
      answer: `<p><b>Validate the predictions</b> with high-level calculations and experiments.</p>`,
      explain: `<p>The AI-driven screening workflow runs: define the goal, collect data, prepare data (remove duplicates, standardise units, handle missing values, add descriptors), train the model, screen candidates (predict and rank unexamined materials), and finally <b>validate the predictions</b> with high-level theoretical or computational calculations and with experiment, before drawing conclusions. A model is fast but data dependent, so its predictions need checking against physics-based methods or measurement.</p>`,
      points: ['Screening ranks unexamined materials', 'Validation is the last step', 'AI/ML is fast but data dependent']
    }
  ]
});
