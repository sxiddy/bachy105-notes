CHUNK({
  chunk: 'M',
  module: 'm5',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm5-comp-intro',
      title: 'What computational chemistry is',
      short: 'Computational chemistry',
      blurb: 'From classical to quantum mechanics, the Nobel milestones, what computational chemistry is, why use it, and what it can calculate.',
      source: 'Pages 3–16',
      tabs: [
        { title: 'From Newton to DFT', html: `
          <p class="lead">Chemistry on a computer rests on a short history: classical mechanics failed for the atom, quantum mechanics replaced it, and DFT made the quantum equations practical.</p>
          <ol class="steps">
            <li><b>Classical mechanics.</b> Sir Isaac Newton (1642–1727), F = ma. It explains the solar system.</li>
            <li><b>Electron discovery.</b> J. J. Thomson (1856–1940) found the electron. F = ma could not explain the atom.</li>
            <li><b>Quantum mechanics.</b> Erwin Schrödinger (1887–1961) gave the <b>Schrödinger equation</b>, ĤΨ = EΨ.</li>
            <li><b>DFT.</b> Walter Kohn and John Pople made the Schrödinger equations "easy" with <b>Density Functional Theory</b>.</li>
          </ol>
        ` },
        { title: 'Nobel milestones', html: `
          <table class="tbl">
            <thead><tr><th>Year</th><th>Laureates</th><th>Contribution</th></tr></thead>
            <tbody>
              <tr><td>1998</td><td>Walter Kohn and John Pople</td><td>DFT and computational quantum chemistry</td></tr>
              <tr><td>2013</td><td>Karplus, Levitt and Warshel</td><td>Multiscale modelling: blending quantum and classical physics</td></tr>
              <tr><td>2024</td><td>Baker, Hassabis and Jumper</td><td>Computational protein design and structure prediction (AI-driven)</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>Computational chemistry is <b>interdisciplinary</b>: chemistry, physics, computing and, more recently, AI all feed it.</p></div>
        ` },
        { title: 'Definition', html: `
          <p class="lead">The <b>study, prediction and comprehension of chemical reactions, molecular structures and material properties through the use of computers</b> is computational chemistry.</p>
          <p>Chemists investigate molecular behaviour by <b>simulation</b>, based on the principles of <b>quantum mechanics, classical physics and statistical mechanics</b>, instead of running the experiment in a lab.</p>
        ` },
        { title: 'Why use it', html: `
          <p class="lead">Calculations are often easier, safer and cheaper than the experiment they replace.</p>
          <ul>
            <li>Calculations are <b>easy to perform</b>, whereas experiments are difficult.</li>
            <li>Calculations are <b>safe</b>, where many experiments are dangerous.</li>
            <li>Calculations are becoming <b>less costly</b>, while experiments are becoming more expensive.</li>
            <li>Calculations can be performed on <b>any chemical system</b>, whereas experiments are relatively limited.</li>
            <li>Calculations give <b>direct information</b>, whereas interpreting experiments is often uncertain.</li>
            <li>Calculations give fundamental information about <b>isolated molecules</b>, without complicating solvents.</li>
          </ul>
          <h3>More reasons from the slides</h3>
          <div class="chips"><span class="chip">predicts the future of chemistry and materials science</span><span class="chip">used by top research institutions and industries</span><span class="chip">works for systems hard to study experimentally</span><span class="chip">new material and drug design</span><span class="chip">atomic-level detail of reactions</span><span class="chip">no explosions or toxic exposure</span><span class="chip">reduces experimental costs</span><span class="chip">faster than traditional experiments</span></div>
        ` },
        { title: 'What it calculates', html: `
          <p class="lead">It answers questions about energy, structure and properties.</p>
          <ul>
            <li>What is the energy of a given geometry?</li>
            <li>How does the energy vary when the geometry changes?</li>
            <li>Which geometries are stable?</li>
            <li>How do atoms rearrange to form new molecules?</li>
            <li>How do structure, energy and properties change over time?</li>
          </ul>
          <h3>Properties it can calculate</h3>
          <div class="chips"><span class="chip">geometry optimisation</span><span class="chip">stability and reaction mechanism</span><span class="chip">transition-state structures</span><span class="chip">dipole moments and polarisabilities</span><span class="chip">electron and hole density maps</span><span class="chip">vibrational frequencies, IR and Raman spectra</span><span class="chip">NMR spectra</span><span class="chip">electronic excitations and UV spectra</span><span class="chip">thermochemical data</span></div>
        ` }
      ],
      flashcards: [
        { front: 'Define computational chemistry.', back: 'Study and prediction of <b>reactions, structures and properties using computers</b>, based on quantum, classical and statistical mechanics.' },
        { front: 'Who gave the Schrödinger equation and what is it?', back: '<b>Erwin Schrödinger</b>: ĤΨ = EΨ, the basis of quantum mechanics.' },
        { front: 'What does DFT stand for and who won the 1998 Nobel for it?', back: '<b>Density Functional Theory</b>; Walter <b>Kohn</b> and John <b>Pople</b>.' },
        { front: '2013 Chemistry Nobel for computation?', back: 'Karplus, Levitt, Warshel: <b>multiscale modelling</b> blending quantum and classical physics.' },
        { front: '2024 Chemistry Nobel for computation?', back: 'Baker, Hassabis, Jumper: <b>protein design and structure prediction</b> (AI-driven).' },
        { front: 'Three advantages of calculations over experiments?', back: '<b>Safe, cheap, applicable to any system</b> (also direct information, isolated molecules).' },
        { front: 'Name properties computational chemistry can predict.', back: 'Geometry, <b>IR/Raman, NMR, UV spectra</b>, dipole moments, transition states, thermochemistry.' }
      ],
      oneLiners: [
        'Newton for the solar system, Schrödinger for the atom, DFT made quantum chemistry practical.',
        'Nobel milestones: 1998 DFT, 2013 multiscale modelling, 2024 AI protein design.',
        'Computational chemistry replaces some experiments with simulations.',
        'Safe, cheaper, any system, no solvent complications: the case for calculations.',
        'It computes geometries, spectra, transition states and thermochemical data.'
      ],
      formulas: [
        { name: 'Schrödinger equation', html: `Ĥ Ψ = E Ψ`, note: 'Ĥ = Hamiltonian, Ψ = wavefunction, E = energy.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm5-comp-methods',
      title: 'Computational methods',
      short: 'Computational methods',
      blurb: 'Molecular mechanics, molecular dynamics, ab initio, semi-empirical and DFT methods, the Schrödinger equation behind them, and accuracy against cost.',
      source: 'Pages 17–26',
      tabs: [
        { title: 'The method tree', html: `
          <p class="lead">Methods split by the physics they use.</p>
          <div class="vs">
            <div class="side"><h4>Quantum mechanics</h4><ul><li><b>Ab initio</b> methods</li><li><b>Semi-empirical</b> methods</li><li><b>Density Functional Theory</b> (DFT)</li></ul></div>
            <div class="side"><h4>Classical mechanics</h4><ul><li><b>Molecular mechanics</b> (MM)</li><li><b>Molecular dynamics</b> (MD)</li></ul></div>
          </div>
        ` },
        { title: 'Molecular mechanics', html: `
          <p class="lead">MM predicts the structure, energy and properties of molecules, particularly <b>large systems</b> such as proteins, polymers and biomolecules, <b>without using quantum mechanics</b>.</p>
          <ul>
            <li>It treats a molecule as <b>balls (atoms) connected by springs (bonds)</b> and uses classical mechanics to compute the <b>potential energy</b>.</li>
            <li>The energy depends on how far the actual geometry <b>deviates from ideal values</b>.</li>
            <li><b>Geometry optimisation</b> adjusts atom positions until the lowest possible energy is found.</li>
          </ul>
        ` },
        { title: 'Molecular dynamics', html: `
          <p class="lead">MD is a computer simulation of the <b>motion and behaviour of atoms and molecules over time</b>, solving <b>Newton's equations of motion</b> for each particle.</p>
          <ul>
            <li>It applies classical mechanics to molecules that change shape or move.</li>
            <li>MM is <b>not an electronic structure method</b>. Bond breaking and bond making (as opposed to conformational change) <b>cannot</b> be studied with MD that uses MM forces.</li>
            <li>For chemical reactions, use forces from <b>semi-empirical, ab initio or DFT</b> methods.</li>
          </ul>
        ` },
        { title: 'Schrödinger equation', html: `
          <p class="lead">The <b>time-independent Schrödinger equation (TISE)</b> relates energy and wavefunction for a system whose potential energy does not change with time. It gives a complete description of the electronic structure of a molecule.</p>
          <div class="eq">Ĥ Ψ = E Ψ</div>
          <ul>
            <li>It can be solved <b>exactly only for simple systems</b>: rigid rotor, harmonic oscillator, particle in a box, hydrogen atom.</li>
            <li>For many-electron atoms and molecules, you need <b>approximations</b> and numerical solution. Accurate results are still possible.</li>
            <li>The <b>cost</b> of a calculation rises with the accuracy wanted and with the size of the system.</li>
          </ul>
        ` },
        { title: 'Ab initio', html: `
          <p class="lead"><em>Ab initio</em> means "from the beginning" (Latin). These methods attempt to solve the Schrödinger equation from <b>first principles</b>, without experimental data.</p>
          <ul>
            <li>They start only from the <b>fundamental physical constants</b> and the atomic numbers and positions of the atoms.</li>
            <li>They give an <b>energy and a wavefunction</b>. The wavefunction gives the <b>electron distribution</b>.</li>
            <li>From the electron distribution you can tell how <b>polar</b> a molecule is and which parts are attacked by <b>nucleophiles or electrophiles</b>.</li>
          </ul>
        ` },
        { title: 'Semi-empirical', html: `
          <p class="lead">Semi-empirical methods trade some accuracy for speed. They are based on the Schrödinger equation but use <b>more approximations</b> and <b>experimental parameters</b>.</p>
          <ul>
            <li>They start from ab initio <b>Hartree–Fock</b> calculations and simplify them by approximating or omitting certain integrals.</li>
            <li>Plugging experimental values into the procedure is called <b>parameterisation</b>.</li>
            <li>They are <b>slower than molecular mechanics</b> (which is parameterised too) but <b>much faster than ab initio</b>.</li>
          </ul>
        ` },
        { title: 'DFT', html: `
          <p class="lead">DFT rests on the idea that the <b>electronic structure of a molecule is completely determined by its electron density</b>, the probability of finding an electron at a point in space.</p>
          <ul>
            <li>Instead of the wavefunction (as in ab initio), DFT calculates the <b>electron density</b> directly.</li>
            <li>It uses <b>functionals</b> (functions of functions) to link density to energy.</li>
            <li>It is generally <b>more accurate than Hartree–Fock</b> and often comparable to advanced ab initio methods, at a <b>much lower cost</b>.</li>
            <li>It works for a wide range of molecules and properties.</li>
          </ul>
          <table class="tbl">
            <thead><tr><th>Method</th><th>Basis</th><th>Cost</th></tr></thead>
            <tbody>
              <tr><td>Molecular mechanics</td><td>Ball-and-springs, classical</td><td>Lowest</td></tr>
              <tr><td>Semi-empirical</td><td>Approximate Schrödinger + parameters</td><td>Low</td></tr>
              <tr><td>DFT</td><td>Electron density, bypasses the wavefunction</td><td>Moderate</td></tr>
              <tr><td>Ab initio</td><td>Schrödinger from first principles</td><td>High</td></tr>
              <tr><td>Molecular dynamics</td><td>Molecules in motion over time</td><td>Depends on forces used</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>The cost column orders the methods by the slide statements (MM faster than semi-empirical, semi-empirical much faster than ab initio, DFT cheaper than ab initio at similar accuracy). The slide chart on approaches and cost is an image.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Two classical computational methods?', back: '<b>Molecular mechanics</b> and <b>molecular dynamics</b>.' },
        { front: 'Three quantum methods?', back: '<b>Ab initio, semi-empirical, DFT</b>.' },
        { front: 'How does MM model a molecule?', back: '<b>Balls and springs</b>: atoms joined by bonds that behave like springs, classical potential energy.' },
        { front: 'What can MD not study?', back: '<b>Bond breaking and making</b> when it uses MM forces.' },
        { front: 'What does ab initio mean?', back: '"From the beginning": solves the Schrödinger equation from <b>fundamental constants only</b>.' },
        { front: 'Parameterisation?', back: 'Plugging <b>experimental values</b> into a method, as in semi-empirical calculations.' },
        { front: 'What does DFT compute instead of the wavefunction?', back: 'The <b>electron density</b>, using functionals.' },
        { front: 'Exactly solvable quantum systems?', back: '<b>Rigid rotor, harmonic oscillator, particle in a box, hydrogen atom</b>.' }
      ],
      oneLiners: [
        'MM and MD are classical; ab initio, semi-empirical and DFT are quantum methods.',
        'MM: atoms as balls, bonds as springs, energy from deviations from ideal geometry.',
        'MD solves Newton\'s equations over time; MM-based MD cannot make or break bonds.',
        'Ab initio = first principles, no experimental data; semi-empirical uses parameters.',
        'DFT uses electron density and functionals: near ab initio accuracy at lower cost.',
        'Cost rises with accuracy and system size.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm5-atomic-orbitals',
      title: 'Atomic orbitals',
      short: 'Atomic orbitals',
      blurb: 'Atomic orbital theory, quantum numbers, filling rules and the shapes of s, p, d and f orbitals.',
      source: 'Pages 27–32',
      tabs: [
        { title: 'Atomic orbital theory', html: `
          <p class="lead"><b>Atomic orbital theory</b> is the branch of quantum mechanics that describes the behaviour of electrons <b>within individual atoms</b>. It defines energy levels and orbitals within atoms.</p>
          <ul>
            <li><b>Individual atom focus:</b> it describes how electrons are arranged in the various atomic orbitals.</li>
            <li><b>Quantum numbers (n, l, m, s):</b> describe the <b>energy level, shape, orientation and spin</b> of an orbital.</li>
            <li><b>Energy levels:</b> electrons fill orbitals according to the <b>Aufbau principle, Pauli exclusion principle and Hund's rule</b>.</li>
          </ul>
        ` },
        { title: 'Filling rules', html: `
          <p class="lead">Occupancy of atomic orbitals is set by three rules.</p>
          <div class="kv">
            <div><span>Aufbau principle</span><b>fill the lowest-energy orbitals first</b></div>
            <div><span>Pauli exclusion principle</span><b>no two electrons have the same four quantum numbers (two per orbital, opposite spins)</b></div>
            <div><span>Hund's rule</span><b>fill degenerate orbitals singly with parallel spins before pairing</b></div>
          </div>
          <div class="note heads-up"><p>The slides name these rules but state only the Aufbau principle as a heading; the one-line statements above are the standard ones.</p></div>
        ` },
        { title: 'Orbital shapes', html: `
          <p class="lead">The shapes come from the slide figures (after J. D. Lee).</p>
          <table class="tbl">
            <thead><tr><th>Orbital</th><th>Shape</th></tr></thead>
            <tbody>
              <tr><td><b>s</b></td><td>Spherical</td></tr>
              <tr><td><b>p</b> (p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub>)</td><td>Dumbbell, along each axis</td></tr>
              <tr><td><b>d</b> (five orbitals)</td><td>Mostly four-lobed (cloverleaf); d<sub>z²</sub> has two lobes and a ring</td></tr>
              <tr><td><b>f</b> (seven orbitals)</td><td>More complex, multi-lobed</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>The d and f shapes are pictures on the slides, so these descriptions are the standard ones.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'What does atomic orbital theory describe?', back: 'Behaviour of electrons <b>within individual atoms</b>.' },
        { front: 'What do the quantum numbers n, l, m, s describe?', back: '<b>Energy level, shape, orientation, spin</b>.' },
        { front: 'Three rules for filling orbitals?', back: '<b>Aufbau, Pauli exclusion, Hund\'s rule</b>.' },
        { front: 'Shape of s and p orbitals?', back: 's: <b>spherical</b>. p: <b>dumbbell</b>.' }
      ],
      oneLiners: [
        'Quantum numbers n, l, m, s give energy, shape, orientation and spin of an orbital.',
        'Orbitals fill by Aufbau, Pauli and Hund.',
        's is spherical, p is dumbbell-shaped.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm5-molecular-orbitals',
      title: 'Molecular orbital theory and LCAO',
      short: 'Molecular orbitals',
      blurb: 'MO theory, linear combination of atomic orbitals, conditions for combining, bond order, the α, β and S integrals, heteronuclear molecules, Hückel theory and AO against MO.',
      source: 'Pages 33–46',
      tabs: [
        { title: 'MO theory', html: `
          <p class="lead"><b>Molecular orbital theory</b> was developed early in the twentieth century by <b>F. Hund and R. S. Mulliken</b> to describe molecular structure and properties. Bonding is described as a <b>combination of atomic orbitals</b>.</p>
          <ul>
            <li>It predicts how electrons are distributed in a molecule, and so <b>shape, magnetism and bond order</b>.</li>
            <li>It approximates molecular states as a <b>linear combination of atomic orbitals (LCAO)</b>.</li>
            <li>The approximations are made by applying <b>DFT or Hartree–Fock</b> models to the Schrödinger equation.</li>
          </ul>
        ` },
        { title: 'LCAO', html: `
          <p class="lead">Molecular orbitals are expressed as a <b>linear combination of atomic orbitals</b>. It is a superposition method.</p>
          <div class="eq">Ψ = c<sub>1</sub>φ<sub>1</sub> + c<sub>2</sub>φ<sub>2</sub></div>
          <p>c<sub>1</sub> and c<sub>2</sub> are coefficients giving each atomic orbital's contribution; φ<sub>1</sub> and φ<sub>2</sub> are the atomic orbitals.</p>
          <ul>
            <li><b>Constructive interference</b> (in-phase) gives a <b>bonding</b> molecular orbital.</li>
            <li><b>Destructive interference</b> (out-of-phase) gives an <b>antibonding</b> orbital.</li>
          </ul>
          <div class="note heads-up"><p>The slide says destructive interference gives a "non-bonding" orbital. The correct term for the out-of-phase combination is antibonding (σ*). Non-bonding orbitals are a separate case with no net overlap.</p></div>
          <h3>Conditions for combining</h3>
          <ol>
            <li><b>Same energy.</b> The combining orbitals must have comparable energy, e.g. 2p with 2p.</li>
            <li><b>Same symmetry about the molecular axis.</b> A 2p<sub>z</sub> can combine with a 2p<sub>z</sub> but not with 2p<sub>x</sub> or 2p<sub>y</sub>, which have different axes of symmetry.</li>
            <li><b>Proper overlap</b> between the orbitals, with the same axis of symmetry.</li>
          </ol>
        ` },
        { title: 'Homonuclear diatomics', html: `
          <p class="lead">Molecules made of two identical atoms, such as H<sub>2</sub>, are <b>homonuclear diatomic</b>. The MOs are solutions of the Schrödinger equation for <b>one electron</b>, filled by the Aufbau and Pauli principles and Hund's rule.</p>
          <div class="eq" data-label="Bond order">Bond order = <span class="frac"><span>(bonding electrons) − (antibonding electrons)</span><span>2</span></span></div>
          <div class="worked"><div class="given"><p>Bond order of H<sub>2</sub>: two electrons in the bonding σ<sub>1s</sub>, none in σ*<sub>1s</sub>.</p></div>
          <div class="solve"><div class="eq">(2 − 0)/2</div></div>
          <div class="result">Bond order = <b>1</b></div></div>
          <h3>Procedure</h3>
          <ol class="steps">
            <li>Hold the two nuclei at a fixed distance.</li>
            <li>Write the TISE for the molecule, ĤΨ = EΨ, and integrate over all space: <b>⟨Ψ|Ĥ|Ψ⟩ = E⟨Ψ|Ψ⟩</b>, a way to calculate the energy.</li>
            <li>Write each MO as a combination of AOs, Ψ = c<sub>1</sub>φ<sub>1</sub> + c<sub>2</sub>φ<sub>2</sub>.</li>
          </ol>
          <div class="eq" data-label="Energies">E<sub>1</sub> = <span class="frac"><span>α + β</span><span>1 + S</span></span>, E<sub>2</sub> = <span class="frac"><span>α − β</span><span>1 − S</span></span></div>
          <div class="eq" data-label="Orbitals">Ψ<sub>1</sub> = <span class="frac"><span>1</span><span>√[2(1+S)]</span></span> (φ<sub>1</sub> + φ<sub>2</sub>), Ψ<sub>2</sub> = <span class="frac"><span>1</span><span>√[2(1−S)]</span></span> (φ<sub>1</sub> − φ<sub>2</sub>)</div>
          <ul>
            <li>E<sub>1</sub> and E<sub>2</sub> are the only energies an electron in the molecule can have.</li>
            <li>Ψ<sub>1</sub> lies <b>below</b> the isolated AOs (<b>bonding</b>). Ψ<sub>2</sub> lies <b>above</b> (<b>antibonding</b>).</li>
            <li>The destabilisation of Ψ<sub>2</sub> is <b>larger</b> than the stabilisation of Ψ<sub>1</sub>, so stability depends on the number of electrons. With three electrons, the two in Ψ<sub>1</sub> are stabilised and the one in Ψ<sub>2</sub> destabilised.</li>
          </ul>
          <div class="note heads-up"><p>The slide prints Ψ<sub>2</sub> with a factor 1/√[2(1+S)], the same as Ψ<sub>1</sub>. The normalisation for the antibonding combination uses (1 − S), as shown above.</p></div>
        ` },
        { title: 'α, β and S', html: `
          <p class="lead">Three integrals control the energies.</p>
          <div class="vs">
            <div class="side"><h4>Coulomb integral α</h4><p>To a first approximation, the energy of an electron in the orbital of the <b>isolated atom</b>. Always <b>negative</b>, and larger in absolute value for a <b>more electronegative</b> atom.</p></div>
            <div class="side"><h4>Resonance integral β</h4><p>Its absolute value measures the <b>A–B bond strength</b>, the strength of the bonding interaction from orbital overlap.</p></div>
            <div class="side"><h4>Overlap integral S</h4><p>Measures how much two orbitals φ<sub>i</sub> and φ<sub>j</sub> overlap. Space splits into four regions; the value of S comes almost entirely from <b>region 4</b>, where both orbitals are finite.</p></div>
          </div>
          <p><b>Mulliken population analysis</b> uses these results to calculate <b>atomic charges</b>, a rough picture of the electronic charge distribution in a molecule.</p>
        ` },
        { title: 'Heteronuclear diatomics', html: `
          <p class="lead">A <b>heteronuclear</b> diatomic has two different atoms A and B, with orbitals φ<sub>A</sub> (energy α<sub>A</sub>) and φ<sub>B</sub> (energy α<sub>B</sub>).</p>
          <div class="eq" data-label="Secular equation">(α<sub>A</sub> − E)(α<sub>B</sub> − E) − (β − ES)<sup>2</sup> = 0</div>
          <p>With α<sub>A</sub> &lt; α<sub>B</sub>, combining the two AOs gives two MOs:</p>
          <ul>
            <li><b>Ψ<sub>1</sub></b> lies lower than α<sub>A</sub>. It is mainly φ<sub>A</sub> with a small in-phase contribution from φ<sub>B</sub>.</li>
            <li><b>Ψ<sub>2</sub></b> lies higher than α<sub>B</sub>. It is mainly φ<sub>B</sub> with a small out-of-phase contribution from φ<sub>A</sub>.</li>
            <li>The destabilisation of Ψ<sub>2</sub> is <b>always larger</b> than the stabilisation of Ψ<sub>1</sub>.</li>
            <li>The stabilisation of Ψ<sub>1</sub> and the destabilisation of Ψ<sub>2</sub> <b>increase as the energy gap α<sub>A</sub> − α<sub>B</sub> decreases</b>.</li>
          </ul>
          <div class="note why"><p>The bonding orbital sits mostly on the <b>more electronegative</b> atom (lower α), which is why the electrons in a polar bond are drawn towards it.</p></div>
        ` },
        { title: 'Hückel MOs', html: `
          <p class="lead">In <b>1931</b> Hückel proposed considering only the <b>delocalised π electrons</b> moving in a framework of π bonds.</p>
          <ul>
            <li>Experimentalists often need only rapid "back of an envelope" answers, and Hückel gives them.</li>
            <li>There is a close analogy between Hückel's formalism and perturbation methods.</li>
            <li>Modern Hückel programs accept the molecular structure as input.</li>
          </ul>
          <h3>Parameters for heteroatoms</h3>
          <p>Any non-hydrogen atom is a <b>heavy atom</b>; any heavy atom other than carbon is a <b>heteroatom</b>. In the Hückel model all carbon atoms are the same, so their Coulomb and resonance integrals stay α and β. For heteroatom X:</p>
          <div class="eq">α<sub>X</sub> = α + kβ</div>
          <div class="eq">β<sub>CX</sub> = hβ</div>
        ` },
        { title: 'AO vs MO', html: `
          <table class="tbl">
            <thead><tr><th></th><th>Atomic orbital</th><th>Molecular orbital</th></tr></thead>
            <tbody>
              <tr><td>Scope</td><td>Individual atoms</td><td>Molecules and compounds</td></tr>
              <tr><td>Formation</td><td>Localised atomic orbital</td><td>Linear combination of atomic orbitals</td></tr>
              <tr><td>Energy levels</td><td>Discrete</td><td>Varying</td></tr>
              <tr><td>Electron configuration</td><td>Within atoms</td><td>Within molecules</td></tr>
              <tr><td>Chemical bonding</td><td>Atom level</td><td>Molecular level</td></tr>
              <tr><td>Wave–particle duality</td><td>Electron behaviour</td><td>Extended to molecules</td></tr>
              <tr><td>Application</td><td>Atomic physics, quantum chemistry</td><td>Molecular chemistry, materials science, quantum chemistry</td></tr>
              <tr><td>Quantum chemistry</td><td>Less common</td><td>Fundamental</td></tr>
              <tr><td>Materials science</td><td>Limited</td><td>Significant</td></tr>
            </tbody>
          </table>
        ` }
      ],
      flashcards: [
        { front: 'Who developed MO theory?', back: '<b>F. Hund and R. S. Mulliken</b>.' },
        { front: 'What is LCAO?', back: '<b>Linear combination of atomic orbitals</b>: Ψ = c<sub>1</sub>φ<sub>1</sub> + c<sub>2</sub>φ<sub>2</sub>.' },
        { front: 'Three conditions for combining atomic orbitals?', back: '<b>Same energy, same symmetry about the molecular axis, proper overlap</b>.' },
        { front: 'Bond order formula?', back: '<b>(bonding e<sup>−</sup> − antibonding e<sup>−</sup>)/2</b>. H<sub>2</sub> = 1.' },
        { front: 'Bonding vs antibonding MO?', back: 'Bonding Ψ<sub>1</sub> is <b>lower</b> than the AOs (in-phase). Antibonding Ψ<sub>2</sub> is <b>higher</b> (out-of-phase).' },
        { front: 'What does the Coulomb integral α represent?', back: 'Energy of an electron in an orbital of the <b>isolated atom</b>; negative, larger for more electronegative atoms.' },
        { front: 'What does β measure?', back: 'The <b>bond strength</b> from orbital overlap (resonance integral).' },
        { front: 'What does Hückel theory include?', back: 'Only the <b>delocalised π electrons</b> (1931).' },
        { front: 'What is Mulliken population analysis?', back: 'A method to compute <b>atomic charges</b> in a molecule.' }
      ],
      oneLiners: [
        'MO theory builds molecular orbitals as LCAOs; in-phase gives bonding, out-of-phase antibonding.',
        'AOs combine only if they have similar energy, the same symmetry and good overlap.',
        'Bond order = (bonding − antibonding electrons)/2.',
        'E1 = (α+β)/(1+S) and E2 = (α−β)/(1−S): antibonding is pushed up more than bonding is pulled down.',
        'Heteronuclear: the bonding MO is mostly on the more electronegative atom.',
        'Hückel theory treats only the delocalised π electrons.'
      ],
      formulas: [
        { name: 'LCAO', html: `Ψ = c<sub>1</sub>φ<sub>1</sub> + c<sub>2</sub>φ<sub>2</sub>`, note: '' },
        { name: 'Bond order', html: `(N<sub>b</sub> − N<sub>a</sub>) / 2`, note: 'N<sub>b</sub> bonding, N<sub>a</sub> antibonding electrons.' },
        { name: 'Diatomic MO energies', html: `E<sub>1</sub> = (α + β)/(1 + S), E<sub>2</sub> = (α − β)/(1 − S)`, note: '' },
        { name: 'Heteroatom parameters (Hückel)', html: `α<sub>X</sub> = α + kβ, β<sub>CX</sub> = hβ`, note: '' }
      ]
    }
  ],
  figures: []
});
