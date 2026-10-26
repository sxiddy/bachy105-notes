CHUNK({
  chunk: 'M',
  module: 'm5',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm5-comp-intro',
      title: "Introduction to computational chemistry",
      short: "Computational chemistry",
      blurb: 'How computational chemistry is defined, what it is used for, and the computers, knowledge, software and programming languages you need.',
      source: 'Slides 3–6',
      tabs: [
        { title: 'Definitions', html: `
          <p class="lead">Computational chemistry is the use of <b>computers</b> to study chemical systems. The slides collect six definitions that say much the same thing.</p>
          <table class="tbl">
            <thead><tr><th>Source</th><th>Definition</th></tr></thead>
            <tbody>
              <tr><td>IUPAC Gold Book</td><td>Use of <b>mathematical models and computer simulations</b> to study the <b>structures, properties and reactions</b> of chemical systems.</td></tr>
              <tr><td>Frank Jensen</td><td>A branch of chemistry that uses <b>computer simulation</b> to help solve chemical problems.</td></tr>
              <tr><td>Christopher Cramer</td><td>Development and application of <b>theoretical chemistry methods</b> in computer programs to calculate the properties of <b>molecules and solids</b>.</td></tr>
              <tr><td>Szabo and Ostlund</td><td>Applies <b>quantum mechanics and other theoretical methods</b> on computers to calculate molecular structures and properties.</td></tr>
              <tr><td>American Chemical Society</td><td>Uses computers to <b>calculate molecular properties, predict reactions and simulate</b> chemical systems.</td></tr>
              <tr><td>University course material</td><td>Computer-based models and simulations to <b>understand, predict and explain</b> chemical phenomena.</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>The most common word across the definitions is <b>computer</b>.</p></div>
        ` },
        { title: 'Scope and applications', html: `
          <p class="lead">Computational studies cover fourteen areas, each with a typical example.</p>
          <table class="tbl">
            <thead><tr><th>Area</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td><b>Molecular structure determination</b></td><td>Geometry optimisation</td></tr>
              <tr><td><b>Energy calculations</b></td><td>Total energy, relative stability of isomers</td></tr>
              <tr><td><b>Spectroscopic properties</b></td><td>Frequency calculation</td></tr>
              <tr><td><b>Reaction mechanism studies</b></td><td>Reaction pathways, intermediates</td></tr>
              <tr><td><b>Thermodynamic properties</b></td><td>Enthalpy (ΔH), reaction spontaneity</td></tr>
              <tr><td><b>Kinetic studies</b></td><td>Rate constant</td></tr>
              <tr><td><b>Electronic structure analysis</b></td><td>Frontier molecular orbitals (HOMO, LUMO)</td></tr>
              <tr><td><b>Biological and biophysical</b></td><td>DNA simulation, protein structure prediction</td></tr>
              <tr><td><b>Industrial</b></td><td>Battery design, energy research</td></tr>
              <tr><td><b>Environmental chemistry</b></td><td>Climate chemistry, pollution modelling</td></tr>
              <tr><td><b>Catalysis studies</b></td><td>Catalyst efficiency</td></tr>
              <tr><td><b>Materials science</b></td><td>Semiconductors, nanomaterials</td></tr>
              <tr><td><b>Drug design and pharmaceutical</b></td><td>Protein–ligand binding, new drug design</td></tr>
              <tr><td><b>Simulation of chemical systems</b></td><td>Molecular dynamics simulations</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Resources and knowledge', html: `
          <p class="lead">The size of the molecule decides how much computer you need.</p>
          <div class="kv">
            <div><span>Desktop or laptop</span><b>smaller molecules and systems</b></div>
            <div><span>Workstation</span><b>moderate molecules and systems</b></div>
            <div><span>HPC cluster</span><b>larger molecules and systems (high performance computing)</b></div>
          </div>
          <h3>Knowledge required</h3>
          <div class="chips"><span class="chip">mathematics</span><span class="chip">quantum mechanics</span><span class="chip">basic chemistry</span></div>
          <h3>Software and technical requirements</h3>
          <table class="tbl">
            <thead><tr><th>Type</th><th>Examples</th></tr></thead>
            <tbody>
              <tr><td>Quantum chemistry software</td><td>Gaussian, ORCA, Molpro, TURBOMOLE, Q-Chem, NWChem, Psi4, GAMESS, CP2K</td></tr>
              <tr><td>Molecular dynamics software</td><td>GROMACS, LAMMPS, AMBER, NAMD</td></tr>
              <tr><td>Plotting and data analysis</td><td>XMGrace, Gnuplot, MATLAB, Python</td></tr>
              <tr><td>Visualisation</td><td>GaussView, Avogadro, VMD, XCrySDen, Jmol</td></tr>
              <tr><td>Numerical libraries</td><td>BLAS, LAPACK, MPI, OpenMP</td></tr>
              <tr><td>Compilers</td><td>gfortran, ifort, GCC</td></tr>
              <tr><td>Operating system</td><td>Ubuntu, CentOS, Debian, Windows</td></tr>
            </tbody>
          </table>
          <h3>Programming (preferred)</h3>
          <div class="chips"><span class="chip">Fortran</span><span class="chip">Python</span><span class="chip">C/C++</span></div>
        ` }
      ],
      flashcards: [
        { front: 'Define computational chemistry (IUPAC).', back: 'Use of <b>mathematical models and computer simulations</b> to study the <b>structures, properties and reactions</b> of chemical systems.' },
        { front: 'Most common word in the definitions?', back: '<b>Computer</b>.' },
        { front: 'Which computer suits small, moderate and large systems?', back: '<b>Desktop or laptop, workstation, HPC cluster</b>.' },
        { front: 'Knowledge needed for computational chemistry?', back: '<b>Mathematics, quantum mechanics, basic chemistry</b>.' },
        { front: 'Name four quantum chemistry programs.', back: '<b>Gaussian, ORCA, Molpro, TURBOMOLE</b> (also Q-Chem, NWChem, Psi4, GAMESS, CP2K).' },
        { front: 'Name four molecular dynamics programs.', back: '<b>GROMACS, LAMMPS, AMBER, NAMD</b>.' },
        { front: 'Visualisation software?', back: '<b>GaussView, Avogadro, VMD, XCrySDen, Jmol</b>.' },
        { front: 'Preferred programming languages?', back: '<b>Fortran, Python, C/C++</b>.' },
        { front: 'Which application area uses HOMO and LUMO analysis?', back: '<b>Electronic structure analysis</b>.' }
      ],
      oneLiners: [
        'Computational chemistry uses mathematical models and computer simulation to study structures, properties and reactions.',
        'The most common word in its definitions is computer.',
        'It covers structure, energy, spectra, mechanisms, thermodynamics, kinetics and electronic structure, plus biology, industry, environment, catalysis, materials and drugs.',
        'Laptop for small systems, workstation for moderate ones, HPC cluster for large ones.',
        'You need mathematics, quantum mechanics and basic chemistry.',
        'Fortran, Python and C/C++ are the preferred programming languages.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm5-comp-methods',
      title: "Quantum mechanical calculations and methods",
      short: "QM methods",
      blurb: 'The classification of computational methods: molecular mechanics, molecular dynamics, ab initio, semi-empirical, DFT and QM/MM, the Schrödinger equation, and the balance of cost and accuracy.',
      source: 'Slides 7–15',
      tabs: [
        { title: 'Classification', html: `
          <p class="lead">Computational methods are classified as <b>quantum mechanics</b>, <b>classical mechanics</b> and a <b>hybrid</b> of the two.</p>
          <figure data-fig="m5-method-tree"></figure>
          <div class="vs">
            <div class="side"><h4>Quantum mechanics</h4><ul><li><b>Ab initio</b>, wavefunction based (HF, MP2, CI, CC, MCSCF, CASSCF)</li><li><b>Density functional theory</b> (TD, TD-DFT)</li><li><b>Semi-empirical</b> (AM1, PM3, PM6)</li></ul></div>
            <div class="side"><h4>Classical mechanics</h4><ul><li><b>Molecular mechanics</b> (MM)</li><li><b>Molecular dynamics</b> (MD)</li></ul></div>
            <div class="side"><h4>Hybrid</h4><ul><li><b>QM/MM</b>, quantum mechanics with molecular mechanics</li></ul></div>
          </div>
        ` },
        { title: 'MM and MD', html: `
          <h3>Molecular mechanics (MM)</h3>
          <p class="lead">MM treats a molecule as a collection of <b>atoms (balls) connected by bonds that behave like springs</b>. Classical mechanics, the physics of everyday objects, gives the <b>potential energy</b>.</p>
          <ul>
            <li>The energy depends on how far the actual geometry <b>deviates from ideal values</b>.</li>
            <li><b>Geometry optimisation</b> adjusts atom positions until the lowest possible energy is found.</li>
          </ul>
          <h3>Molecular dynamics (MD)</h3>
          <p>MD applies the <b>laws of classical mechanics</b> to simulate the movement of atoms and molecules <b>over time</b>. The laws of motion are applied to molecules that change shape or move.</p>
          <ul>
            <li>MD is <b>not an electronic structure method</b>. Covalent <b>bond breaking and bond making</b>, as opposed to conformational change, <b>cannot</b> be studied with MD programs that use this method.</li>
            <li>For chemical reactions, use forces from <b>semi-empirical, ab initio or density functional</b> methods.</li>
          </ul>
        ` },
        { title: 'Ab initio', html: `
          <p class="lead"><em>Ab initio</em> means "from the beginning" (Latin). These methods try to solve the Schrödinger equation from <b>first principles</b>, <b>without experimental data</b>. The equation describes the behaviour of quantum particles such as electrons in a molecule.</p>
          <ul>
            <li>They start from only the <b>fundamental physical constants</b> and the <b>atomic numbers and positions</b> of the atoms.</li>
            <li>They usually solve the Schrödinger equation of a molecule and give the <b>energy and the wavefunction</b>.</li>
            <li>The wavefunction is a mathematical function that gives the <b>electron distribution</b>.</li>
            <li>From the distribution you can decide the <b>polarity</b> of the molecule and which parts are attacked by <b>nucleophiles or electrophiles</b>.</li>
          </ul>
        ` },
        { title: 'Schrödinger equation', html: `
          <p class="lead">The Schrödinger equation comes in a <b>time-dependent</b> (TDSE) and a <b>time-independent</b> (TISE) form.</p>
          <div class="vs">
            <div class="side"><h4>TDSE</h4><div class="eq">iħ ∂Ψ(x,t)/∂t = Ĥ Ψ(x,t)</div><p>Ψ is the wavefunction of coordinate and time; Ĥ is the Hamiltonian. For a single non-relativistic particle of mass m:</p><div class="eq">Ĥ = −(ħ²/2m) ∂²/∂x² + V(x,t)</div><p>The first term is the <b>kinetic energy</b>, the second the (time-dependent) <b>potential energy</b>.</p></div>
            <div class="side"><h4>TISE</h4><div class="eq">Ĥ ψ(x) = E ψ(x)</div><p>ψ is the wavefunction, E the energy. For a single non-relativistic particle of mass m:</p><div class="eq">Ĥ = −(ħ²/2m) d²/dx² + V(x)</div><p>The first term is the <b>kinetic energy</b>, the second the (time-independent) <b>potential energy</b>.</p></div>
          </div>
          <h3>Relevance</h3>
          <div class="vs">
            <div class="side"><h4>TDSE</h4><ul><li>Describes the <b>time evolution</b> of a quantum system and its wavefunction.</li><li>Useful for <b>time-dependent phenomena</b>, such as atoms and molecules interacting with electromagnetic radiation.</li><li>The starting point for understanding <b>quantum transitions and dynamical processes</b>.</li></ul></div>
            <div class="side"><h4>TISE</h4><ul><li>Gives the <b>energy eigenvalues</b> and the stationary-state spatial wavefunctions.</li><li>Gives the quantised energies of the <b>particle in a box, harmonic oscillator and hydrogen atom</b>.</li><li>Heavily used in computational chemistry to find <b>molecular properties</b>.</li></ul></div>
          </div>
          <div class="note why"><p>You can go from the TDSE to the TISE only when the Hamiltonian, specifically the potential, does <b>not depend on time</b>.</p></div>
        ` },
        { title: 'Semi-empirical', html: `
          <p class="lead">Semi-empirical calculations balance <b>accuracy against speed and cost</b>. They simplify ab initio methods with approximations and experimental parameters. They are still based on the Schrödinger equation, with more approximations to solve it.</p>
          <ul>
            <li>They start with ab initio <b>Hartree–Fock</b> calculations and simplify them by approximating or omitting certain integrals.</li>
            <li>Plugging experimental values into the mathematical procedure to get the best calculated values is called <b>parameterisation</b>.</li>
            <li>They are <b>slower than molecular mechanics</b> (MM is parameterised too) but <b>much faster than ab initio</b>.</li>
          </ul>
        ` },
        { title: 'DFT', html: `
          <p class="lead">DFT rests on the idea that the <b>electronic structure of a molecule is completely determined by its electron density</b>, the probability of finding an electron at a point in space.</p>
          <ul>
            <li>Instead of the wavefunction (as in ab initio methods), DFT calculates the <b>electron density</b> directly.</li>
            <li>It uses <b>functionals</b> (mathematical functions of functions) to approximate the link between electron density and energy.</li>
            <li>It is generally <b>more accurate than Hartree–Fock</b> and often comparable to more advanced ab initio methods, at a <b>significantly lower cost</b>.</li>
            <li>It can be applied to a wide range of molecules and properties.</li>
          </ul>
        ` },
        { title: 'QM/MM', html: `
          <p class="lead">QM/MM is a <b>hybrid</b> method that combines quantum mechanics (QM) and molecular mechanics (MM) to study complex chemical systems.</p>
          <figure data-fig="m5-qmmm-regions"></figure>
          <div class="vs">
            <div class="side"><h4>QM region</h4><p>Electronic structure is treated explicitly. It usually holds the atoms directly involved in the reaction: <b>bond breaking, bond formation and electron transfer</b>.</p></div>
            <div class="side"><h4>MM region</h4><p>Atoms are described by classical force fields. It usually holds the surrounding <b>protein, solvent or other environment</b>, which cuts the computational cost.</p></div>
          </div>
          <ul>
            <li>The two regions are <b>coupled</b> to account for <b>electrostatic and van der Waals</b> interactions.</li>
            <li>QM/MM can use <b>mechanical embedding, electrostatic embedding</b> or more advanced embedding schemes to describe the interaction between the regions.</li>
            <li>It is <b>cheaper than treating the whole system quantum mechanically</b> and gives a <b>more realistic description of the reactive region</b> than MM alone.</li>
          </ul>
          <h3>Used in</h3>
          <div class="chips"><span class="chip">enzymatic reactions</span><span class="chip">homogeneous and heterogeneous catalysis</span><span class="chip">drug research</span><span class="chip">photochemistry</span><span class="chip">reactions in solution</span></div>
        ` },
        { title: 'Cost and accuracy', html: `
          <p class="lead">Every method balances <b>cost against accuracy</b>.</p>
          <table class="tbl">
            <thead><tr><th>Method</th><th>Basis</th><th>Cost</th></tr></thead>
            <tbody>
              <tr><td>Molecular mechanics</td><td>Balls and springs, classical</td><td>Lowest</td></tr>
              <tr><td>Semi-empirical</td><td>Approximate Schrödinger equation plus parameters</td><td>Low</td></tr>
              <tr><td>QM/MM</td><td>QM for the reactive part, MM for the rest</td><td>Below full QM</td></tr>
              <tr><td>DFT</td><td>Electron density, bypasses the wavefunction</td><td>Moderate</td></tr>
              <tr><td>Ab initio</td><td>Schrödinger equation from first principles</td><td>High</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>The slide chart (Chem. Rev. 2021, 121, 5633) is a picture. The order in this table follows the slide statements: MM is faster than semi-empirical, semi-empirical is much faster than ab initio, DFT is cheaper than ab initio at similar accuracy, and QM/MM is cheaper than full QM.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Two classical computational methods?', back: '<b>Molecular mechanics</b> and <b>molecular dynamics</b>.' },
        { front: 'Three quantum methods and the hybrid method?', back: '<b>Ab initio, semi-empirical, DFT</b>; the hybrid is <b>QM/MM</b>.' },
        { front: 'How does MM model a molecule?', back: '<b>Balls (atoms) joined by springs (bonds)</b>; classical potential energy from deviation from ideal values.' },
        { front: 'What can MD not study?', back: '<b>Bond breaking and bond making</b>; MD is not an electronic structure method.' },
        { front: 'What does ab initio mean?', back: '"From the beginning": solves the Schrödinger equation from <b>fundamental constants only</b>, no experimental data.' },
        { front: 'TDSE vs TISE?', back: 'TDSE: <b>time evolution</b>, potential depends on time. TISE: <b>energies and stationary states</b>, potential independent of time.' },
        { front: 'Parameterisation?', back: 'Plugging <b>experimental values</b> into a method, as in semi-empirical calculations.' },
        { front: 'What does DFT compute instead of the wavefunction?', back: 'The <b>electron density</b>, using functionals.' },
        { front: 'What goes in the QM and MM regions of QM/MM?', back: 'QM: atoms in <b>bond breaking, bond formation, electron transfer</b>. MM: surrounding <b>protein, solvent</b>.' },
        { front: 'How are the QM and MM regions coupled?', back: 'Through <b>electrostatic and van der Waals</b> interactions (mechanical or electrostatic embedding).' }
      ],
      oneLiners: [
        'MM and MD are classical; ab initio, semi-empirical and DFT are quantum; QM/MM combines QM and MM.',
        'MM: atoms as balls, bonds as springs, energy from deviations from ideal geometry.',
        'MD simulates motion over time; it cannot make or break bonds.',
        'Ab initio = first principles, no experimental data; semi-empirical uses parameters.',
        'TDSE gives time evolution; TISE gives energies and stationary states, and needs a time-independent potential.',
        'DFT uses electron density and functionals: near ab initio accuracy at lower cost.',
        'QM/MM puts the reacting atoms in a QM region and the surroundings in an MM region.'
      ],
      formulas: [
        { name: 'Time-independent Schrödinger equation', html: `Ĥ ψ = E ψ`, note: 'Ĥ = Hamiltonian, ψ = wavefunction, E = energy.' },
        { name: 'Time-dependent Schrödinger equation', html: `iħ ∂Ψ/∂t = Ĥ Ψ`, note: 'Ψ depends on coordinate and time.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm5-qm-calculations',
      title: "Quantum chemical calculations: methods and basis sets",
      short: "Methods & basis sets",
      blurb: 'What quantum chemical calculations are, the methods and basis sets in common use, and when each basis set is chosen.',
      source: 'Slides 16–19',
      tabs: [
        { title: 'What they are', html: `
          <p class="lead">Quantum chemical calculations are computational methods used to determine <b>properties such as energy and frequency</b> of quantum particles (atoms, molecules, ions) using the <b>principles of quantum mechanics</b>.</p>
          <h3>A categorised list</h3>
          <div class="chips"><span class="chip">energy calculation</span><span class="chip">geometry optimisation</span><span class="chip">frequency calculation</span><span class="chip">molecular property calculation</span><span class="chip">excited state calculation</span><span class="chip">reaction path determination</span><span class="chip">solvent effect calculation</span><span class="chip">molecular orbital analysis</span><span class="chip">spectroscopic property calculations</span></div>
        ` },
        { title: 'Methods and basis sets', html: `
          <p class="lead">Every calculation needs a <b>method</b> and a <b>basis set</b>.</p>
          <div class="vs">
            <div class="side"><h4>Methods</h4><ul><li>Hartree–Fock (HF)</li><li>Density functional theory (DFT)</li><li>Configuration interaction (CI)</li><li>Perturbation theory (MP2, MP3)</li><li>Coupled cluster theory (CCSD, CCSD(T))</li><li>Multi-configurational self-consistent field (MCSCF)</li><li>Complete active space self-consistent field (CASSCF)</li></ul></div>
            <div class="side"><h4>Basis sets</h4><ul><li>Minimal</li><li>Split-valence</li><li>Polarisation</li><li>Diffuse</li><li>Correlation consistent</li><li>Effective core potential (ECP)</li></ul></div>
          </div>
        ` },
        { title: 'Basis sets', html: `
          <p class="lead">A <b>basis set</b> is a set of mathematical functions used to represent the <b>atomic orbitals</b> of the electrons in a molecule. Basis sets differ in size, flexibility and accuracy.</p>
          <table class="tbl">
            <thead><tr><th>Basis set</th><th>Description</th><th>Examples</th><th>Features and use</th></tr></thead>
            <tbody>
              <tr><td><b>Minimal</b></td><td>Minimum number of functions for every atomic orbital</td><td>STO-3G, STO-6G</td><td>Small, fast, low cost, limited accuracy; small molecules (H<sub>2</sub>, H<sub>2</sub>O, NH<sub>3</sub>)</td></tr>
              <tr><td><b>Split-valence</b></td><td>More than one function for the valence orbitals, so more flexible</td><td>3-21G, 4-31G, 6-31G, 6-311G</td><td>Better than minimal and widely used; organic molecules (hydrocarbons, aldehydes)</td></tr>
              <tr><td><b>Polarisation</b></td><td>Extra functions let orbitals distort during bonding</td><td>6-31G*, 6-31G**, 6-311G(d,p)</td><td>Good for chemical bonding, energy and geometry; bond bending, lone-pair effects</td></tr>
              <tr><td><b>Diffuse</b></td><td>Very spread-out functions for electrons far from the nucleus</td><td>6-31+G, 6-31++G, 6-311++G</td><td>Anions (OH<sup>−</sup>, F<sup>−</sup>, Cl<sup>−</sup>, CN<sup>−</sup>, NO<sub>3</sub><sup>−</sup>), excited states, weak interactions</td></tr>
              <tr><td><b>Correlation consistent</b></td><td>For high-level electron correlation calculations</td><td>cc-pVDZ, cc-pVTZ, cc-pVQZ</td><td>High-accuracy ab initio work; correlated methods</td></tr>
              <tr><td><b>Effective core potential</b></td><td>Replaces core electrons with an effective potential to cut cost</td><td>LANL2DZ, Stuttgart–Dresden, Def2 family</td><td>Transition metals and heavy atoms (Fe, Co, Ni)</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Methods in brief', html: `
          <table class="tbl">
            <thead><tr><th>Method</th><th>Description</th><th>Applications</th></tr></thead>
            <tbody>
              <tr><td><b>Hartree–Fock (HF)</b></td><td>A fundamental ab initio method giving an approximate solution for many-electron systems</td><td>Molecular orbitals, total energy, dipole moments, basis for post-HF methods</td></tr>
              <tr><td><b>DFT</b></td><td>Widely used for the electronic structure of atoms, molecules and solids, using electron density</td><td>Molecular geometry and structure, surface chemistry and catalysis, band structure of materials</td></tr>
              <tr><td><b>Configuration interaction (CI)</b></td><td>Post-HF method that improves accuracy by including electron correlation</td><td>Excited states, electronic spectroscopy, accurate molecular energies</td></tr>
              <tr><td><b>Perturbation theory</b></td><td>Post-HF method that includes electron correlation effects</td><td>Accurate molecular energies, reaction energies, weak intermolecular interactions</td></tr>
              <tr><td><b>Coupled cluster (CC)</b></td><td>Post-HF method with electron correlation; one of the most reliable for high precision</td><td>High-precision energies, reaction energies and barriers, benchmarks, spectroscopic properties</td></tr>
              <tr><td><b>MCSCF</b></td><td>For systems where a single electronic configuration is not enough, mainly bond breaking and excited states</td><td>Photochemistry, spectroscopy, bond breaking, reaction mechanisms, excited states</td></tr>
              <tr><td><b>CASSCF</b></td><td>A special case of MCSCF, for systems where several configurations contribute significantly to the wavefunction</td><td>Photochemistry, excited states, spectroscopy, bond dissociation, reaction mechanisms</td></tr>
            </tbody>
          </table>
        ` }
      ],
      flashcards: [
        { front: 'What are quantum chemical calculations?', back: 'Methods that determine <b>energy, frequency and other properties</b> of atoms, molecules and ions using <b>quantum mechanics</b>.' },
        { front: 'What is a basis set?', back: 'Mathematical functions used to represent the <b>atomic orbitals</b> of electrons in a molecule.' },
        { front: 'Examples of a minimal basis set?', back: '<b>STO-3G, STO-6G</b>: fast, limited accuracy, small molecules.' },
        { front: 'When do you need a diffuse basis set?', back: 'For <b>anions, excited states and weak interactions</b> (6-31+G, 6-31++G).' },
        { front: 'What does a polarisation basis set add?', back: 'Extra functions so orbitals can <b>distort during bonding</b> (6-31G*, 6-311G(d,p)).' },
        { front: 'Which basis sets suit transition metals?', back: '<b>Effective core potential</b> sets: LANL2DZ, Stuttgart–Dresden, Def2.' },
        { front: 'Which basis sets go with high-accuracy ab initio work?', back: '<b>Correlation consistent</b>: cc-pVDZ, cc-pVTZ, cc-pVQZ.' },
        { front: 'Which methods include electron correlation after HF?', back: '<b>CI, perturbation theory (MP2, MP3), coupled cluster</b>.' },
        { front: 'When are MCSCF and CASSCF used?', back: 'When <b>one configuration is not enough</b>: bond breaking, excited states, photochemistry.' }
      ],
      oneLiners: [
        'A quantum chemical calculation needs a method and a basis set.',
        'Methods: HF, DFT, CI, perturbation theory, coupled cluster, MCSCF, CASSCF.',
        'Minimal basis sets are fast and rough; split-valence is the everyday choice for organics.',
        'Polarisation functions let orbitals distort; diffuse functions suit anions and weak interactions.',
        'Correlation consistent basis sets are for high-accuracy work; ECP basis sets for heavy atoms.',
        'Coupled cluster is among the most reliable methods; CASSCF handles several important configurations.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm5-atomic-orbitals',
      title: 'Atomic orbitals',
      short: 'Atomic orbitals',
      blurb: 'Quantum numbers and the number of orbitals, the Aufbau principle, Pauli exclusion principle and Hund\'s rule, and the shapes of the orbitals.',
      source: 'Slides 20–22',
      tabs: [
        { title: 'Quantum numbers', html: `
          <p class="lead">The principal quantum number <b>n</b> fixes the allowed values of the others.</p>
          <div class="kv">
            <div><span>l</span><b>0, 1, 2, … , (n − 1)</b></div>
            <div><span>m<sub>l</sub></span><b>−l, −(l − 1), … , 0, … , (l − 1), +l: a total of 2l + 1 values</b></div>
          </div>
          <ul>
            <li><b>n, l, m<sub>l</sub></b> together define a <b>spatial orbital</b>.</li>
            <li><b>n, l, m<sub>l</sub>, m<sub>s</sub></b> together define a <b>spin-orbital</b>.</li>
            <li>The <b>Aufbau principle, Pauli exclusion principle and Hund's rule</b> then give the electronic configuration.</li>
          </ul>
        ` },
        { title: 'Filling rules', html: `
          <p class="lead">The electronic configuration follows three rules.</p>
          <figure data-fig="m5-filling-rules"></figure>
          <div class="kv">
            <div><span>Aufbau principle</span><b>fill the lowest-energy orbitals first</b></div>
            <div><span>Pauli exclusion principle</span><b>no two electrons have the same four quantum numbers (two per orbital, opposite spins)</b></div>
            <div><span>Hund's rule</span><b>fill degenerate orbitals singly with parallel spins before pairing</b></div>
          </div>
          <div class="note heads-up"><p>The slides name these three rules and show the Aufbau filling order as pictures. The one-line statements above are the standard ones.</p></div>
        ` },
        { title: 'Orbital shapes', html: `
          <p class="lead">The slides show the shapes as pictures.</p>
          <figure data-fig="m5-orbital-shapes"></figure>
          <table class="tbl">
            <thead><tr><th>Orbital</th><th>Shape</th></tr></thead>
            <tbody>
              <tr><td><b>s</b></td><td>Spherical</td></tr>
              <tr><td><b>p</b> (p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub>)</td><td>Dumbbell, along each axis</td></tr>
              <tr><td><b>d</b> (five orbitals)</td><td>Mostly four-lobed (cloverleaf); d<sub>z²</sub> has two lobes and a ring</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>The d shapes are pictures on the slides, so these descriptions are the standard ones.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Allowed values of l for a given n?', back: '<b>0, 1, 2, … , n − 1</b>.' },
        { front: 'Allowed values of m<sub>l</sub> and how many?', back: '<b>−l to +l</b>, a total of <b>2l + 1</b> values.' },
        { front: 'What do n, l and m<sub>l</sub> define?', back: 'A <b>spatial orbital</b>. Adding m<sub>s</sub> gives a <b>spin-orbital</b>.' },
        { front: 'Three rules for the electronic configuration?', back: '<b>Aufbau, Pauli exclusion, Hund\'s rule</b>.' },
        { front: 'Shape of s and p orbitals?', back: 's: <b>spherical</b>. p: <b>dumbbell</b>.' }
      ],
      oneLiners: [
        'l runs from 0 to n − 1 and m<sub>l</sub> from −l to +l, giving 2l + 1 values.',
        'n, l, m<sub>l</sub> make a spatial orbital; adding m<sub>s</sub> makes a spin-orbital.',
        'Orbitals fill by Aufbau, Pauli and Hund.',
        's is spherical, p is dumbbell-shaped.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm5-orbital-overlap',
      title: "Orbital interactions and chemical bonding",
      short: "Orbital interactions",
      blurb: 'How atomic orbitals interact when atoms approach, the three conditions, constructive and destructive overlap, energy changes and bond formation.',
      source: 'Slide 23',
      tabs: [
        { title: 'Orbital interaction', html: `
          <p class="lead"><b>Orbital interaction</b> is the interaction between the atomic orbitals (AOs) of different atoms when they approach each other. It leads to <b>molecular orbitals (MOs)</b> and, under suitable conditions, <b>chemical bonds</b>.</p>
          <p><b>Orbital overlap:</b> effective interaction needs <b>sufficient overlap</b> between the atomic orbitals. Greater overlap usually means a <b>stronger interaction</b> and more stabilisation of the bonding MO.</p>
          <h3>Conditions of orbital interaction</h3>
          <div class="chips"><span class="chip">comparable energies</span><span class="chip">suitable symmetry</span><span class="chip">effective overlap</span></div>
        ` },
        { title: 'Overlap and energy', html: `
          <p class="lead">The type of overlap decides which MO forms.</p>
          <figure data-fig="m5-orbital-overlap"></figure>
          <div class="vs">
            <div class="side"><h4>Constructive overlap</h4><p>Gives a <b>bonding MO</b>, <b>lower</b> in energy than the interacting AOs.</p></div>
            <div class="side"><h4>Destructive overlap</h4><p>Gives an <b>antibonding MO</b>, <b>higher</b> in energy than the interacting AOs.</p></div>
          </div>
          <div class="note why"><p><b>Bond formation:</b> a stable bond generally forms when the stabilisation from bonding interactions <b>outweighs</b> the destabilisation from antibonding interactions, so the molecular system ends up at <b>lower energy</b>.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'What is orbital interaction?', back: 'Interaction of <b>atomic orbitals of different atoms</b> as they approach, forming <b>molecular orbitals</b> and possibly bonds.' },
        { front: 'Three conditions of orbital interaction?', back: '<b>Comparable energies, suitable symmetry, effective overlap</b>.' },
        { front: 'Constructive vs destructive overlap?', back: 'Constructive gives a <b>bonding MO</b>; destructive gives an <b>antibonding MO</b>.' },
        { front: 'Energy of bonding and antibonding MOs?', back: 'Bonding is <b>lower</b> than the AOs; antibonding is <b>higher</b>.' },
        { front: 'When does a stable bond form?', back: 'When <b>stabilisation from bonding</b> outweighs <b>destabilisation from antibonding</b>, lowering the energy of the system.' }
      ],
      oneLiners: [
        'Orbital interaction needs comparable energies, suitable symmetry and effective overlap.',
        'Constructive overlap gives a bonding MO, destructive overlap an antibonding MO.',
        'The bonding MO lies below the AOs and the antibonding MO above.',
        'A bond forms when bonding stabilisation outweighs antibonding destabilisation.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm5-molecular-orbitals',
      title: 'Molecular orbital theory and LCAO',
      short: 'Molecular orbitals',
      blurb: 'MO theory, linear combination of atomic orbitals and its conditions, MO diagrams, the HOMO and LUMO of methane, and atomic against molecular orbitals.',
      source: 'Slides 24–27',
      tabs: [
        { title: 'MO theory', html: `
          <p class="lead"><b>Molecular orbital theory</b> is a theory of chemical bonding developed at the beginning of the twentieth century by <b>F. Hund and R. S. Mulliken</b> to describe the structure and properties of molecules.</p>
          <ul>
            <li>The <b>limitations of valence bond theory (VBT)</b> were another reason for developing it.</li>
          </ul>
        ` },
        { title: 'LCAO', html: `
          <p class="lead">Molecular orbitals can be expressed as a <b>linear combination of atomic orbitals (LCAO)</b>. LCAOs help estimate how the orbitals form in the bonding between the atoms of a molecule.</p>
          <ul>
            <li>It is an <b>approximate</b> method for representing molecular orbitals, more of a <b>superimposition</b> method.</li>
            <li><b>Constructive interference</b> of two atomic wavefunctions produces a <b>bonding</b> molecular orbital.</li>
            <li><b>Destructive interference</b> produces an <b>antibonding</b> molecular orbital.</li>
          </ul>
          <div class="note heads-up"><p>The slide says destructive interference gives a "non-bonding" orbital. The correct term for the out-of-phase combination is antibonding. Non-bonding orbitals are a separate case with no net overlap.</p></div>
          <h3>Conditions for combining</h3>
          <ol>
            <li><b>Same energy.</b> The combining atomic orbitals should have comparable energy, so a 2p orbital of one atom combines with a 2p orbital of another.</li>
            <li><b>Same symmetry about the molecular axis.</b> For example, 2p<sub>z</sub> and 2p<sub>z</sub> can combine.</li>
            <li><b>Proper (effective) overlap and orientation.</b> The right orientation gives effective overlap.</li>
          </ol>
        ` },
        { title: 'MO diagrams', html: `
          <p class="lead">An MO diagram shows the bonding and antibonding MOs formed from the atomic orbitals. The slides give one for a <b>homonuclear</b> and one for a <b>heteronuclear</b> diatomic.</p>
          <h3>Homonuclear diatomic</h3>
          <p>Two identical atoms, such as H<sub>2</sub>. The two 1s orbitals give a lower bonding MO and a higher antibonding MO.</p>
          <figure data-fig="m5-mo-h2"></figure>
          <div data-viz="mo-builder"></div>
          <div class="eq" data-label="Bond order">Bond order = <span class="frac"><span>(bonding electrons) − (antibonding electrons)</span><span>2</span></span></div>
          <h3>Heteronuclear diatomic</h3>
          <p>Two different atoms. The two atomic levels sit at different energies, and the MOs still lie one below and one above them.</p>
          <figure data-fig="m5-mo-heteronuclear"></figure>
          <div class="note heads-up"><p>The slide only shows the diagrams. The bond-order rule above is the standard one, and is what the interactive builder uses.</p></div>
        ` },
        { title: 'HOMO and LUMO', html: `
          <p class="lead">The <b>HOMO</b> is the highest occupied molecular orbital and the <b>LUMO</b> is the lowest unoccupied molecular orbital. The slide shows both for <b>methane</b>.</p>
          <figure data-fig="m5-homo-lumo"></figure>
          <ul>
            <li>Method and basis set: <b>B3LYP / 6-31G*</b>.</li>
            <li>HOMO and LUMO are the frontier orbitals used in <b>electronic structure analysis</b>.</li>
          </ul>
        ` },
        { title: 'AO vs MO', html: `
          <table class="tbl">
            <thead><tr><th>Topic</th><th>Atomic orbital</th><th>Molecular orbital</th></tr></thead>
            <tbody>
              <tr><td>Scope</td><td>Individual atoms</td><td>Molecules and compounds</td></tr>
              <tr><td>Formation of orbital</td><td>Localised atomic orbital</td><td>Linear combination of atomic orbitals, delocalised</td></tr>
              <tr><td>Electron configuration</td><td>Within atoms</td><td>Within molecules</td></tr>
              <tr><td>Application</td><td>Atomic physics, quantum chemistry</td><td>Molecular chemistry, materials science, quantum chemistry</td></tr>
              <tr><td>Materials science</td><td>Limited</td><td>Significant</td></tr>
            </tbody>
          </table>
        ` }
      ],
      flashcards: [
        { front: 'Who developed MO theory?', back: '<b>F. Hund and R. S. Mulliken</b>, partly because of the limitations of valence bond theory.' },
        { front: 'What is LCAO?', back: '<b>Linear combination of atomic orbitals</b>: an approximate, superimposition method for MOs.' },
        { front: 'Constructive vs destructive interference in LCAO?', back: 'Constructive gives a <b>bonding</b> MO, destructive an <b>antibonding</b> MO.' },
        { front: 'Three conditions for combining atomic orbitals?', back: '<b>Same energy, same symmetry about the molecular axis, proper overlap and orientation</b>.' },
        { front: 'Which 2p orbitals can combine?', back: '2p<sub>z</sub> with 2p<sub>z</sub> (same symmetry about the axis).' },
        { front: 'Homonuclear vs heteronuclear diatomic?', back: 'Two <b>identical</b> atoms (H<sub>2</sub>) vs two <b>different</b> atoms.' },
        { front: 'What are HOMO and LUMO?', back: '<b>Highest occupied</b> and <b>lowest unoccupied</b> molecular orbitals.' },
        { front: 'Method and basis set for the methane MOs on the slide?', back: '<b>B3LYP / 6-31G*</b>.' },
        { front: 'Atomic orbital vs molecular orbital: scope?', back: 'AO: <b>individual atoms</b>, localised. MO: <b>molecules</b>, delocalised LCAO.' }
      ],
      oneLiners: [
        'MO theory (Hund and Mulliken) builds molecular orbitals as LCAOs.',
        'Constructive interference gives a bonding MO, destructive interference an antibonding MO.',
        'AOs combine only if they have similar energy, the same symmetry about the axis and good overlap.',
        'The HOMO is the highest occupied and the LUMO the lowest unoccupied MO.',
        'Atomic orbitals are localised on one atom; molecular orbitals are delocalised over the molecule.'
      ],
      formulas: [
        { name: 'Bond order', html: `(N<sub>b</sub> − N<sub>a</sub>) / 2`, note: 'N<sub>b</sub> bonding, N<sub>a</sub> antibonding electrons.' }
      ]
    }
  ],
  figures: [
    { id: 'm5-method-tree', src: null, crop: null,
      caption: 'Classification of computational methods: quantum mechanics (ab initio, DFT, semi-empirical), classical mechanics (molecular mechanics, molecular dynamics) and the hybrid QM/MM.',
      alt: 'A tree with Computational methods at the top and three branches: Quantum mechanics with Ab initio, DFT and Semi-empirical boxes below it, Classical mechanics with Molecular mechanics and Molecular dynamics, and Hybrid QM/MM.' },
    { id: 'm5-qmmm-regions', src: null, crop: null,
      caption: 'QM/MM: a small QM region around the atoms that react, inside a larger MM region of protein or solvent, coupled by electrostatic and van der Waals interactions.',
      alt: 'A large rounded region labelled MM region with bonded atoms around the edge and a smaller blue rounded region labelled QM region at the centre, with arrows joining them.' },
    { id: 'm5-orbital-shapes', src: null, crop: null,
      caption: 'Orbital shapes: s is a sphere, each p orbital is a dumbbell along one axis, d orbitals are mostly four-lobed cloverleafs, and dz2 has two lobes and a ring. Blue and orange mark opposite signs of the wave.',
      alt: 'A sphere for s, three dumbbells for px, py and pz, and below them dxy and dx2-y2 four-lobed shapes and a dz2 shape with two vertical lobes and a flat ring.' },
    { id: 'm5-filling-rules', src: null, crop: null,
      caption: 'Nitrogen shown in boxes: 1s and 2s are full pairs with opposite spins, and the three 2p boxes each hold one electron with parallel spins.',
      alt: 'Five boxes labelled 1s, 2s and three 2p: the 1s and 2s boxes each have an up and a down arrow, and each 2p box has a single up arrow.' },
    { id: 'm5-orbital-overlap', src: null, crop: null,
      caption: 'Overlap of two orbitals gives a bonding and an antibonding MO. Same-sign lobes merge in the bonding MO; opposite-sign lobes leave a node in the antibonding MO. Blue and orange are opposite signs.',
      alt: 'Three rows of lobe drawings, each with a bonding picture on the left where same-sign lobes merge and an antibonding picture on the right with a dashed node between opposite-sign lobes.' },
    { id: 'm5-mo-h2', src: null, crop: null,
      caption: 'Two 1s orbitals combine into a bonding sigma and an antibonding sigma-star orbital. Both electrons go into the bonding orbital, so the bond order is 1.',
      alt: 'Energy level diagram with a 1s level for each H atom at the sides, a lower sigma 1s level holding two electrons, a higher sigma-star 1s level empty, and dashed lines linking them.' },
    { id: 'm5-mo-heteronuclear', src: null, crop: null,
      caption: 'For two different atoms the lower MO sits mainly on the atom with the lower orbital energy (the more electronegative one), so the bonding electrons are drawn towards it.',
      alt: 'Energy level diagram with a low atomic level for A on the left, a higher level for B on the right, a bonding MO below both holding two electrons and an antibonding MO above both.' },
    { id: 'm5-homo-lumo', src: null, crop: null,
      caption: 'Frontier orbitals of methane (B3LYP/6-31G*): the HOMO is the highest filled level, the LUMO the lowest empty one, and the gap between them is the HOMO–LUMO gap.',
      alt: 'A vertical energy axis with three filled levels at the bottom, the top one labelled HOMO, two empty levels above, the lower one labelled LUMO, and an arrow marking the gap between HOMO and LUMO.' }
  ]
});
