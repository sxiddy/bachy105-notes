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
        { title: 'Why computational chemistry', html: `
          <p class="lead">Many chemical questions are <b>difficult, expensive, dangerous or impossible</b> to answer by experiment. Computational chemistry answers them with theory and computer calculations instead of only lab work.</p>
          <h3>What it draws on</h3>
          <ul>
            <li><b>Quantum mechanics</b> is used when electronic structure matters, for example when bonds form or break.</li>
            <li><b>Classical mechanics</b> describes molecular structure and motion without treating the electrons explicitly.</li>
            <li><b>Statistical mechanics</b> links the behaviour of single molecules to bulk properties such as temperature and pressure.</li>
            <li><b>Numerical methods and computing</b> make it possible to solve the complex equations for realistic molecules.</li>
          </ul>
          <h3>Merits over conventional (experimental) chemistry</h3>
          <ol>
            <li><b>Lower cost.</b> Large numbers of molecules can be screened on a computer before anything is made, so only the promising ones are synthesised. Calculations keep getting cheaper while experiments keep getting more expensive.</li>
            <li><b>Saves time.</b> Computational screening narrows down promising structures or reaction pathways faster than trying each one in the lab.</li>
            <li><b>Safety.</b> Unstable, toxic, explosive or highly reactive species can be studied without anyone handling them, so there is no explosion risk and no toxic exposure.</li>
            <li><b>Easy to perform.</b> A calculation only needs a structure and a method, whereas the matching experiment may need difficult synthesis and equipment.</li>
            <li><b>Works on any chemical system.</b> Experiments are limited to what can be made and measured; a calculation can be done on any structure you can write down.</li>
            <li><b>Inaccessible species.</b> Short-lived intermediates and transition states, which live too briefly to measure, can be examined directly.</li>
            <li><b>Molecular-level information.</b> Calculations show electron distribution, bonding, orbital interactions and reaction pathways, which experiments only infer.</li>
            <li><b>Direct information.</b> A calculation gives the property directly, while interpreting an experimental observation is often uncertain.</li>
            <li><b>Isolated molecules.</b> Calculations give fundamental information about a single molecule <b>without complicating solvents</b>; solvent can be added later on purpose.</li>
            <li><b>Prediction.</b> Properties of molecules or materials that have <b>not yet been synthesised</b> can be estimated, which helps new material and drug design.</li>
            <li><b>Interpretation of experiments.</b> Results explain <b>why</b> an experimentally observed trend occurs.</li>
          </ol>
          <div class="note trap"><p>Computational chemistry does <b>not replace experiment</b>. It is most useful when it supports, predicts, interprets or complements experimental results. Its accuracy depends on the <b>theoretical method, the approximations, the model and the quality of the input structure</b>.</p></div>
          <table class="tbl">
            <thead><tr><th>Point</th><th>Computational chemistry</th><th>Conventional chemistry</th></tr></thead>
            <tbody>
              <tr><td>How it works</td><td>Solves mathematical models of molecules on a computer</td><td>Makes and measures real samples in a laboratory</td></tr>
              <tr><td>Cost and time</td><td>Cheap per molecule and quick to repeat for many candidates</td><td>Chemicals, instruments and synthesis make each test slow and costly</td></tr>
              <tr><td>Hazard</td><td>No risk, even for toxic or explosive species</td><td>Dangerous species need special handling</td></tr>
              <tr><td>Short-lived species</td><td>Transition states and intermediates can be located and studied</td><td>Usually too short-lived to observe directly</td></tr>
              <tr><td>Reliability</td><td>Depends on the method, basis set and model chosen</td><td>Gives the real behaviour, including solvent and impurities</td></tr>
            </tbody>
          </table>
          <div class="note exam"><p>"Merits of computational chemistry compared to conventional chemistry" (5 marks): one line on what it is, then 6–8 merits each with a reason (cost, time, safety, inaccessible species, molecular-level information, prediction, interpretation, isolated molecules without solvent, direct information), then one line that it complements experiment and its accuracy depends on the method.</p></div>
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
        { front: 'Which application area uses HOMO and LUMO analysis?', back: '<b>Electronic structure analysis</b>.' },
        { front: 'Four merits of computational over conventional chemistry?', back: '<b>Lower cost, saves time, safe for toxic or explosive species, studies short-lived intermediates and transition states</b> (also prediction, interpretation, isolated molecules without solvent).' },
        { front: 'Four fields computational chemistry draws on?', back: '<b>Quantum mechanics, classical mechanics, statistical mechanics, numerical methods and computing</b>.' },
        { front: 'What does the accuracy of a calculation depend on?', back: 'The <b>theoretical method, approximations, model and quality of the input structure</b>.' }
      ],
      oneLiners: [
        'Computational chemistry is cheaper, faster and safer than experiment and can study transition states and unmade molecules, but it complements experiment rather than replacing it.',
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
          <div class="note why"><p><b>Quantum</b> methods treat the <b>electrons</b> explicitly, so they can describe bonds forming and breaking. <b>Classical</b> methods treat atoms as simple balls and ignore electrons, so they are fast but cannot describe bond changes. <b>Electronic structure</b> just means how the electrons are arranged in a molecule.</p></div>
          <h3>Abbreviations in the list</h3>
          <div class="kv">
            <div><span>HF</span><b>Hartree–Fock: the basic ab initio method; each electron feels only the average field of the others</b></div>
            <div><span>MP2</span><b>Møller–Plesset perturbation theory, 2nd order: a correction added on top of HF</b></div>
            <div><span>CI, CC</span><b>configuration interaction, coupled cluster: more accurate (and costly) corrections to HF</b></div>
            <div><span>MCSCF, CASSCF</span><b>multi-configurational methods, for cases where one electron arrangement is not enough</b></div>
            <div><span>TD-DFT</span><b>time-dependent DFT, used for excited states and spectra</b></div>
            <div><span>AM1, PM3, PM6</span><b>names of semi-empirical parameter sets</b></div>
          </div>
          <p>The later tabs and the next topic explain each family; for now only the three groups matter.</p>
        ` },
        { title: 'MM and MD', html: `
          <h3>Molecular mechanics (MM)</h3>
          <p class="lead">MM treats a molecule as a collection of <b>atoms (balls) connected by bonds that behave like springs</b>. Classical mechanics, the physics of everyday objects, gives the <b>potential energy</b>.</p>
          <ul>
            <li>The energy depends on how far the actual geometry <b>deviates from ideal values</b>.</li>
            <li><b>Geometry optimisation</b> adjusts atom positions until the lowest possible energy is found.</li>
          </ul>
          <div class="note why"><p>The set of spring stiffnesses and ideal bond lengths and angles used by MM is called a <b>force field</b>. <b>Potential energy</b> is stored energy due to position: a stretched or squeezed spring stores more of it, so a strained geometry has higher energy.</p></div>
          <h3>Molecular dynamics (MD)</h3>
          <p>MD applies the <b>laws of classical mechanics</b> to simulate the movement of atoms and molecules <b>over time</b>. The laws of motion are applied to molecules that change shape or move.</p>
          <ul>
            <li>A <b>conformational change</b> is a change of shape by rotating or bending around bonds, with no bond broken (for example a chain twisting).</li>
            <li>MD is <b>not an electronic structure method</b>. Covalent <b>bond breaking and bond making</b>, as opposed to conformational change, <b>cannot</b> be studied with MD programs that use this method.</li>
            <li>For chemical reactions, use forces from <b>semi-empirical, ab initio or density functional</b> methods.</li>
          </ul>
          <div data-viz="md-sim"></div>
        ` },
        { title: 'Ab initio', html: `
          <p class="lead"><em>Ab initio</em> means "from the beginning" (Latin). These methods try to solve the Schrödinger equation from <b>first principles</b>, <b>without experimental data</b>. The equation describes the behaviour of quantum particles such as electrons in a molecule.</p>
          <ul>
            <li>They start from only the <b>fundamental physical constants</b> and the <b>atomic numbers and positions</b> of the atoms.</li>
            <li>They usually solve the Schrödinger equation of a molecule and give the <b>energy and the wavefunction</b>.</li>
            <li>The wavefunction is a mathematical function that gives the <b>electron distribution</b>.</li>
            <li>From the distribution you can decide the <b>polarity</b> of the molecule and which parts are attacked by <b>nucleophiles or electrophiles</b>.</li>
          </ul>
          <div class="kv">
            <div><span>First principles</span><b>only the basic laws of physics, no fitted numbers</b></div>
            <div><span>Polarity</span><b>uneven sharing of electrons, so one end is slightly − and the other slightly +</b></div>
            <div><span>Nucleophile</span><b>"nucleus-loving": electron-rich species that attacks electron-poor (+) sites, e.g. OH<sup>−</sup></b></div>
            <div><span>Electrophile</span><b>"electron-loving": electron-poor species that attacks electron-rich (−) sites, e.g. H<sup>+</sup></b></div>
          </div>
        ` },
        { title: 'Schrödinger equation', html: `
          <p class="lead">The Schrödinger equation comes in a <b>time-dependent</b> (TDSE) and a <b>time-independent</b> (TISE) form.</p>
          <h3>Symbols first</h3>
          <div class="kv">
            <div><span>Ψ, ψ (psi)</span><b>wavefunction; its square gives where the electron is likely to be</b></div>
            <div><span>Ĥ (H-hat)</span><b>Hamiltonian operator: a recipe that acts on ψ and gives the total energy (kinetic + potential). The hat means "operator"</b></div>
            <div><span>E</span><b>energy of the state</b></div>
            <div><span>ħ (h-bar)</span><b>Planck's constant divided by 2π</b></div>
            <div><span>i</span><b>the imaginary number √(−1)</b></div>
            <div><span>∂/∂t, d²/dx²</span><b>rate of change with time; second derivative (how curved the function is) along x</b></div>
            <div><span>V</span><b>potential energy</b></div>
            <div><span>Non-relativistic</span><b>ignoring Einstein's relativity, fine for light atoms</b></div>
          </div>
          <div class="note why"><p>An <b>eigenvalue</b> equation has the form "operator acting on a function = number × the same function". In Ĥψ = Eψ, the allowed numbers E are the <b>energy eigenvalues</b>, and the matching ψ are <b>stationary states</b> (states whose probability pattern does not change with time).</p></div>
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
            <li>Solving the equation means evaluating a huge number of <b>integrals</b> (sums over all space, one for each pair or set of orbitals). Skipping or estimating many of them is where the speed comes from.</li>
            <li>Plugging experimental values into the mathematical procedure to get the best calculated values is called <b>parameterisation</b>.</li>
            <li>They are <b>slower than molecular mechanics</b> (MM is parameterised too) but <b>much faster than ab initio</b>.</li>
          </ul>
        ` },
        { title: 'DFT', html: `
          <p class="lead">DFT rests on the idea that the <b>electronic structure of a molecule is completely determined by its electron density</b>, the probability of finding an electron at a point in space.</p>
          <ul>
            <li>Instead of the wavefunction (as in ab initio methods), DFT calculates the <b>electron density</b> directly.</li>
            <li>It uses <b>functionals</b> (mathematical functions of functions) to approximate the link between electron density and energy. A normal function turns a number into a number; a functional turns a whole function (here the density over all space) into one number (the energy). <b>B3LYP</b> is a popular functional.</li>
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
            <li>QM/MM can use <b>mechanical embedding, electrostatic embedding</b> or more advanced embedding schemes to describe the interaction between the regions. In <b>mechanical embedding</b> the MM atoms only push on the QM atoms (shape and contact); in <b>electrostatic embedding</b> the charges of the MM atoms also pull on the QM electrons.</li>
            <li><b>Van der Waals</b> interactions are weak attractions and short-range repulsions between all atoms, even neutral ones.</li>
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
          <div class="note why"><p>The <b>method</b> is the level of physics (how electron–electron interactions are treated). The <b>basis set</b> is the toolkit of functions used to build the orbitals. Results are written <b>method/basis set</b>, e.g. <b>B3LYP/6-31G*</b> = DFT with the B3LYP functional and the 6-31G* basis set.</p></div>
          <div class="vs">
            <div class="side"><h4>Methods</h4><ul><li>Hartree–Fock (HF)</li><li>Density functional theory (DFT)</li><li>Configuration interaction (CI)</li><li>Perturbation theory (MP2, MP3)</li><li>Coupled cluster theory (CCSD, CCSD(T))</li><li>Multi-configurational self-consistent field (MCSCF)</li><li>Complete active space self-consistent field (CASSCF)</li></ul></div>
            <div class="side"><h4>Basis sets</h4><ul><li>Minimal</li><li>Split-valence</li><li>Polarisation</li><li>Diffuse</li><li>Correlation consistent</li><li>Effective core potential (ECP)</li></ul></div>
          </div>
        ` },
        { title: 'Basis sets', html: `
          <p class="lead">A <b>basis set</b> is a set of mathematical functions used to represent the <b>atomic orbitals</b> of the electrons in a molecule. Basis sets differ in size, flexibility and accuracy.</p>
          <div class="note why"><p>Think of building a curve from Lego pieces: <b>more functions = more flexible orbitals = more accurate, but slower</b>. <b>Core</b> electrons are the inner ones that do not take part in bonding; <b>valence</b> electrons are the outer ones that form bonds, so they get extra functions first. An <b>anion</b> is a negative ion; its extra electron sits far out, which is why it needs spread-out (diffuse) functions.</p></div>
          <div class="kv">
            <div><span>STO-3G</span><b>each orbital built from 3 Gaussian functions (STO = Slater-type orbital)</b></div>
            <div><span>6-31G</span><b>core orbitals from 6 functions; valence split into two parts made of 3 and 1 functions</b></div>
            <div><span>* or (d)</span><b>adds polarisation (d-type) functions on heavy atoms; ** or (d,p) also adds p functions on H</b></div>
            <div><span>+ / ++</span><b>adds diffuse functions on heavy atoms / also on H</b></div>
          </div>
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
          <div class="kv">
            <div><span>Electron correlation</span><b>electrons dodge each other instantly; HF only uses their average repulsion, so it misses this and the energy is slightly too high</b></div>
            <div><span>Post-HF</span><b>methods that start from the HF answer and add the missing correlation (CI, MP2, CC)</b></div>
            <div><span>Configuration</span><b>one particular way of placing the electrons in the orbitals</b></div>
            <div><span>Excited state</span><b>a state where an electron has been lifted to a higher orbital, e.g. by absorbing light</b></div>
          </div>
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
          <table class="tbl">
            <thead><tr><th>Symbol</th><th>Name</th><th>What it tells you</th></tr></thead>
            <tbody>
              <tr><td><b>n</b></td><td>principal</td><td>shell and size/energy (1, 2, 3 …)</td></tr>
              <tr><td><b>l</b></td><td>azimuthal</td><td>shape: l = 0, 1, 2, 3 are <b>s, p, d, f</b></td></tr>
              <tr><td><b>m<sub>l</sub></b></td><td>magnetic</td><td>orientation in space (e.g. p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub>)</td></tr>
              <tr><td><b>m<sub>s</sub></b></td><td>spin</td><td>electron spin, +½ (↑) or −½ (↓)</td></tr>
            </tbody>
          </table>
          <div class="note example"><p>n = 2: l = 0 (2s, one orbital) or l = 1 (2p, m<sub>l</sub> = −1, 0, +1, three orbitals).</p></div>
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
          <div class="note why"><p><b>Degenerate</b> orbitals have exactly the same energy, like the three 2p orbitals. <b>Parallel spins</b> means all ↑.</p></div>
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
          <div class="note why"><p><b>Overlap</b> means the two orbital clouds occupy the same region of space. <b>Symmetry</b> here means the orbitals look alike when turned about the bond axis, so their matching lobes can meet. Orbital lobes carry a <b>phase</b> sign (+ or −, like wave crests and troughs): same-sign lobes meeting add up, opposite signs cancel.</p></div>
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
      blurb: 'MO theory, LCAO and its conditions, the Schrödinger treatment with α, β and S, MO diagrams including O₂, heteronuclear diatomics, the Hückel method, HOMO and LUMO, and atomic against molecular orbitals.',
      source: 'Slides 24–27',
      tabs: [
        { title: 'MO theory', html: `
          <p class="lead"><b>Molecular orbital theory</b> is a theory of chemical bonding developed at the beginning of the twentieth century by <b>F. Hund and R. S. Mulliken</b> to describe the structure and properties of molecules.</p>
          <ul>
            <li>The <b>limitations of valence bond theory (VBT)</b> were another reason for developing it.</li>
          </ul>
          <div class="vs">
            <div class="side"><h4>Valence bond theory</h4><p>A bond is a pair of electrons <b>shared between two atoms</b>, sitting in the overlap of their atomic orbitals. Electrons stay localised.</p></div>
            <div class="side"><h4>MO theory</h4><p>Atomic orbitals merge into new <b>molecular orbitals that spread over the whole molecule</b>; electrons fill these MOs.</p></div>
          </div>
          <h3>MO labels used in this topic</h3>
          <div class="kv">
            <div><span>σ (sigma)</span><b>MO with electron density along the line joining the two nuclei (end-on overlap)</b></div>
            <div><span>π (pi)</span><b>MO with density above and below that line (side-on overlap of p orbitals)</b></div>
            <div><span>* (star)</span><b>antibonding, e.g. σ*1s</b></div>
            <div><span>Node</span><b>a place where the electron density is zero</b></div>
            <div><span>Homonuclear / heteronuclear</span><b>two identical atoms (H<sub>2</sub>, O<sub>2</sub>) / two different atoms (HCl, CO)</b></div>
          </div>
        ` },
        { title: 'LCAO', html: `
          <p class="lead">Molecular orbitals can be expressed as a <b>linear combination of atomic orbitals (LCAO)</b>. LCAOs help estimate how the orbitals form in the bonding between the atoms of a molecule.</p>
          <div class="note why"><p><b>Linear combination</b> just means adding (or subtracting) the atomic orbitals, each multiplied by a number: Ψ = c<sub>1</sub>φ<sub>1</sub> ± c<sub>2</sub>φ<sub>2</sub>. Adding = in phase; subtracting = out of phase.</p></div>
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
        { title: 'Schrödinger treatment', html: `
          <p class="lead">The MO treatment of a diatomic molecule solves the <b>time-independent Schrödinger equation</b> for the molecule with the LCAO wavefunction. The answer is two MOs and their two energies.</p>
          <div class="eq" data-label="TISE">ĤΨ = EΨ</div>
          <ul>
            <li><b>Ĥ, the Hamiltonian</b>, is the operator for the <b>total energy</b> (kinetic plus potential) of the system. It is a <b>Hermitian operator</b>, which guarantees that the energies it gives are <b>real numbers</b> and so physically meaningful.</li>
            <li><b>Ψ, the wavefunction</b>, describes the quantum state of the electron. <b>|Ψ|²</b> is the <b>probability density</b> of finding the electron in a region of space.</li>
            <li>A valid Ψ must be <b>normalised</b>: the total probability of finding the electron somewhere is 1, ∫|Ψ|²dτ = 1.</li>
          </ul>
          <div class="note why"><p>Notation: <b>dτ</b> is a tiny volume element, so ∫…dτ means "add up over all space". <b>⟨Ψ|Ĥ|Ψ⟩</b> is shorthand for ∫ΨĤΨdτ, and <b>⟨Ψ|Ψ⟩</b> for ∫ΨΨdτ. A <b>secular equation</b> is the condition (a determinant set to zero) that the coefficients c<sub>1</sub>, c<sub>2</sub> must satisfy; its roots are the allowed energies.</p></div>
          <h3>Procedure</h3>
          <ol class="steps">
            <li><b>Fix the nuclei</b> at a chosen distance from each other.</li>
            <li><b>Write the TISE</b> for the molecule and integrate over all space: ⟨Ψ|Ĥ|Ψ⟩ = E⟨Ψ|Ψ⟩, which gives the energy E.</li>
            <li><b>Use the LCAO form</b> Ψ = c<sub>1</sub>φ<sub>1</sub> + c<sub>2</sub>φ<sub>2</sub>, where φ<sub>1</sub> and φ<sub>2</sub> are the atomic orbital wavefunctions and c<sub>1</sub>, c<sub>2</sub> are coefficients giving each AO's contribution to the MO.</li>
            <li><b>Solve the secular equation</b> that results, giving two allowed energies and two MOs.</li>
          </ol>
          <h3>The three integrals</h3>
          <table class="tbl">
            <thead><tr><th>Integral</th><th>Expression</th><th>Meaning</th></tr></thead>
            <tbody>
              <tr><td><b>Coulomb integral α</b></td><td>α = ∫φ<sub>A</sub>Ĥφ<sub>A</sub>dτ</td><td>Approximate energy of an electron in the AO of the isolated atom. Always negative; larger in magnitude for more electronegative atoms.</td></tr>
              <tr><td><b>Resonance integral β</b></td><td>β = ∫φ<sub>A</sub>Ĥφ<sub>B</sub>dτ</td><td>Measures how strongly the two AOs interact. A larger |β| means a stronger interaction and a stronger A–B bond.</td></tr>
              <tr><td><b>Overlap integral S</b></td><td>S = ∫φ<sub>A</sub>φ<sub>B</sub>dτ</td><td>How much the two AOs share the same region of space; near zero when they do not overlap.</td></tr>
            </tbody>
          </table>
          <h3>Secular equation and energies</h3>
          <div class="eq" data-label="Secular equation">(α<sub>A</sub> − E)(α<sub>B</sub> − E) − (β − ES)<sup>2</sup> = 0</div>
          <p>For a <b>homonuclear</b> molecule α<sub>A</sub> = α<sub>B</sub> = α, so (α − E) = ±(β − ES), which gives:</p>
          <div class="eq" data-label="Bonding">E<sub>1</sub> = <span class="frac"><span>α + β</span><span>1 + S</span></span>   Ψ<sub>1</sub> = <span class="frac"><span>1</span><span>√[2(1 + S)]</span></span> (φ<sub>1</sub> + φ<sub>2</sub>)</div>
          <div class="eq" data-label="Antibonding">E<sub>2</sub> = <span class="frac"><span>α − β</span><span>1 − S</span></span>   Ψ<sub>2</sub> = <span class="frac"><span>1</span><span>√[2(1 − S)]</span></span> (φ<sub>1</sub> − φ<sub>2</sub>)</div>
          <ul>
            <li>β is negative, so <b>E<sub>1</sub> lies below α</b>: Ψ<sub>1</sub> is the in-phase, <b>bonding</b> MO with more electron density between the nuclei.</li>
            <li><b>E<sub>2</sub> lies above α</b>: Ψ<sub>2</sub> is the out-of-phase, <b>antibonding</b> MO with a node between the nuclei.</li>
            <li>Because of the (1 − S) denominator, the antibonding MO is <b>raised more</b> than the bonding MO is lowered. So a molecule's stability depends on how many electrons sit in each: with three electrons, two are stabilised in Ψ<sub>1</sub> and one is destabilised in Ψ<sub>2</sub>.</li>
            <li>E<sub>1</sub> and E<sub>2</sub> are the <b>only energies</b> allowed; electrons fill them by the <b>Aufbau, Pauli and Hund</b> rules.</li>
          </ul>
          <div class="note example"><p><b>H<sub>2</sub>:</b> 1s<sub>A</sub> + 1s<sub>B</sub> → σ1s + σ*1s. Both electrons go into σ1s with opposite spins, so H<sub>2</sub> = (σ1s)<sup>2</sup> and bond order = (2 − 0)/2 = <b>1</b>. H<sub>2</sub> is more stable than two separate H atoms.</p></div>
          <div class="note heads-up"><p>One older slide prints the antibonding MO as 1/√[2(1 + S)](φ<sub>1</sub> − φ<sub>2</sub>). The normalisation factor for the minus combination is <b>1/√[2(1 − S)]</b>, as in the newer notes.</p></div>
          <div class="note exam"><p>"MO treatment of diatomic bond formation using the TISE" (5–10 marks): write ĤΨ = EΨ and say Ĥ is Hermitian (real energies); write the LCAO Ψ = c<sub>1</sub>φ<sub>1</sub> + c<sub>2</sub>φ<sub>2</sub>; define α, β and S; give the secular equation and E = (α ± β)/(1 ± S) with the two MOs; draw the H<sub>2</sub> MO diagram and work out bond order 1.</p></div>
        ` },
        { title: 'MO diagrams', html: `
          <p class="lead">An MO diagram shows the bonding and antibonding MOs formed from the atomic orbitals. The slides give one for a <b>homonuclear</b> and one for a <b>heteronuclear</b> diatomic.</p>
          <h3>Homonuclear diatomic</h3>
          <p>Two identical atoms, such as H<sub>2</sub>. The two 1s orbitals give a lower bonding MO and a higher antibonding MO.</p>
          <figure data-fig="m5-mo-h2"></figure>
          <div data-viz="mo-builder"></div>
          <div class="eq" data-label="Bond order">Bond order = <span class="frac"><span>(bonding electrons) − (antibonding electrons)</span><span>2</span></span></div>
          <p>Bond order 1 = single bond, 2 = double, 3 = triple; 0 means no bond (the molecule does not exist).</p>
          <h3>Heteronuclear diatomic</h3>
          <p>Two different atoms. The two atomic levels sit at different energies, and the MOs still lie one below and one above them.</p>
          <figure data-fig="m5-mo-heteronuclear"></figure>
          <div class="note heads-up"><p>The slide only shows the diagrams. The bond-order rule above is the standard one, and is what the interactive builder uses.</p></div>
          <h3>Worked: O<sub>2</sub></h3>
          <p>Each O atom has 8 electrons (1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>4</sup>), so O<sub>2</sub> has 16. For O<sub>2</sub> the σ2p<sub>z</sub> level lies <b>below</b> the two π2p levels. Levels from top to bottom:</p>
          <figure data-fig="m5-mo-o2"></figure>
          <table class="tbl">
            <thead><tr><th>MO</th><th>Type</th><th>Electrons</th></tr></thead>
            <tbody>
              <tr><td>σ*2p<sub>z</sub></td><td>antibonding</td><td>empty</td></tr>
              <tr><td>π*2p<sub>x</sub>, π*2p<sub>y</sub></td><td>antibonding, a degenerate pair</td><td><b>↑ and ↑</b>, one each, unpaired (Hund's rule)</td></tr>
              <tr><td>π2p<sub>x</sub>, π2p<sub>y</sub></td><td>bonding, a degenerate pair</td><td>↑↓ and ↑↓</td></tr>
              <tr><td>σ2p<sub>z</sub></td><td>bonding</td><td>↑↓</td></tr>
              <tr><td>σ*2s</td><td>antibonding</td><td>↑↓</td></tr>
              <tr><td>σ2s</td><td>bonding</td><td>↑↓</td></tr>
              <tr><td>σ1s, σ*1s</td><td>inner (KK) shell</td><td>↑↓, ↑↓</td></tr>
            </tbody>
          </table>
          <div class="eq" data-label="Configuration">O<sub>2</sub>: KK (σ2s)<sup>2</sup> (σ*2s)<sup>2</sup> (σ2p<sub>z</sub>)<sup>2</sup> (π2p<sub>x</sub>)<sup>2</sup> (π2p<sub>y</sub>)<sup>2</sup> (π*2p<sub>x</sub>)<sup>1</sup> (π*2p<sub>y</sub>)<sup>1</sup></div>
          <div class="eq" data-label="Bond order">Bond order = (10 − 6)/2 = <b>2</b></div>
          <p>Counting all 16 electrons: 10 bonding and 6 antibonding (or 8 and 4 if you count only the valence shell, same answer). O<sub>2</sub> has a <b>double bond</b> and, with <b>two unpaired electrons</b> in π*2p, it is <b>paramagnetic</b>. Valence bond theory pairs every electron and wrongly predicts O<sub>2</sub> to be diamagnetic; MO theory explains the observed paramagnetism.</p>
          <div class="note why"><p><b>Paramagnetic</b>: has unpaired electrons, so it is pulled into a magnetic field. <b>Diamagnetic</b>: all electrons paired, weakly pushed out. <b>KK</b> is shorthand for the filled inner K shells (σ1s and σ*1s) of both atoms, which cancel out in bonding.</p></div>
          <div class="note heads-up"><p>O<sub>2</sub> is not worked on the slides, but it has been asked in a final exam ("draw the MO diagram of O<sub>2</sub>, predict bond order and magnetic property"). This is the standard textbook treatment.</p></div>
        ` },
        { title: 'Heteronuclear diatomic', html: `
          <p class="lead">A <b>heteronuclear diatomic</b> molecule has two different atoms A and B, so their AOs have <b>different energies</b> (α<sub>A</sub> ≠ α<sub>B</sub>) and contribute <b>unequally</b> to the MOs.</p>
          <div class="eq" data-label="Bonding">Ψ<sub>bonding</sub> = c<sub>A</sub>φ<sub>A</sub> + c<sub>B</sub>φ<sub>B</sub></div>
          <div class="eq" data-label="Antibonding">Ψ<sub>antibonding</sub> = c′<sub>A</sub>φ<sub>A</sub> − c′<sub>B</sub>φ<sub>B</sub></div>
          <p>Take <b>α<sub>A</sub> &lt; α<sub>B</sub></b>, so φ<sub>A</sub> is the lower AO (A is the more electronegative atom). Putting this LCAO into the TISE gives the same secular equation, (α<sub>A</sub> − E)(α<sub>B</sub> − E) − (β − ES)<sup>2</sup> = 0, now with two different α values.</p>
          <ul>
            <li>The bonding MO Ψ<sub>1</sub> lies <b>below α<sub>A</sub></b> and is mostly <b>φ<sub>A</sub></b>, with a small in-phase share of φ<sub>B</sub>. Its electrons spend more time near atom A.</li>
            <li>The antibonding MO Ψ<sub>2</sub> lies <b>above α<sub>B</sub></b> and is mostly <b>φ<sub>B</sub></b>, with a small out-of-phase share of φ<sub>A</sub>.</li>
            <li>The destabilisation of Ψ<sub>2</sub> relative to α<sub>B</sub> is always <b>larger</b> than the stabilisation of Ψ<sub>1</sub> relative to α<sub>A</sub>.</li>
          </ul>
          <div class="eq" data-label="Stabilisation of Ψ1 (approx.)">α<sub>A</sub> − E<sub>1</sub> ≈ <span class="frac"><span>(β − α<sub>A</sub>S)<sup>2</sup></span><span>α<sub>B</sub> − α<sub>A</sub></span></span></div>
          <h3>Effect of the AO energy gap Δα</h3>
          <div class="vs">
            <div class="side"><h4>Small Δα</h4><p>Similar AO energies give <b>strong mixing</b> and a strong interaction. Both MOs move far from the AO levels.</p></div>
            <div class="side"><h4>Large Δα</h4><p>Very different AO energies give <b>weak mixing</b>. Each MO looks almost like one of the original AOs and the bond is weaker.</p></div>
          </div>
          <p>The gap sits in the denominator above, so the stabilisation of Ψ<sub>1</sub> and the destabilisation of Ψ<sub>2</sub> both <b>increase as the α<sub>A</sub>–α<sub>B</sub> gap decreases</b>. Effective mixing needs <b>similar energy, correct symmetry and good overlap</b>.</p>
          <h3>Mulliken population analysis</h3>
          <p>Once the MOs are filled, <b>Mulliken population analysis</b> divides the electron population among the atoms. It gives approximate <b>electron populations on each atom, atomic charges</b> and the electron-rich and electron-poor regions: MO calculation → electron distribution → Mulliken population → approximate atomic charge. The charges are only rough and change with the method and basis set.</p>
          <div class="note exam"><p>"Apply the TISE to a heteronuclear diatomic MO": write the two LCAO MOs with unequal coefficients, the secular equation, the diagram with α<sub>A</sub> &lt; α<sub>B</sub> (bonding mostly A, antibonding mostly B), and the Δα rule.</p></div>
        ` },
        { title: 'Hückel method', html: `
          <p class="lead">The <b>Hückel molecular orbital (HMO) method</b>, introduced by Hückel in <b>1931</b>, is a simplified quantum method for <b>conjugated π-electron systems</b>. It keeps the <b>σ framework fixed</b> and treats only the delocalised <b>π electrons</b> explicitly.</p>
          <div class="note why"><p>A <b>conjugated</b> system has alternating single and double bonds (e.g. butadiene CH<sub>2</sub>=CH–CH=CH<sub>2</sub>, benzene), so the p orbitals on neighbouring carbons line up side by side. Their π electrons are <b>delocalised</b>: spread over the whole chain instead of belonging to one bond. The <b>σ framework</b> is the skeleton of single (σ) bonds, which Hückel leaves untouched. In the table, <b>H<sub>ij</sub></b> is the Hamiltonian integral between orbitals i and j (H<sub>ii</sub> = α, H<sub>ij</sub> = β as in the Schrödinger treatment tab) and <b>S<sub>ij</sub></b> is their overlap integral.</p></div>
          <h3>Approximations</h3>
          <table class="tbl">
            <thead><tr><th>Term</th><th>Value</th><th>Meaning</th></tr></thead>
            <tbody>
              <tr><td>H<sub>ii</sub></td><td><b>α</b></td><td>Energy of an electron in a carbon p orbital, the same for every carbon</td></tr>
              <tr><td>H<sub>ij</sub>, neighbours</td><td><b>β</b></td><td>Interaction between p orbitals on bonded neighbouring atoms</td></tr>
              <tr><td>H<sub>ij</sub>, non-neighbours</td><td><b>0</b></td><td>Atoms that are not bonded are assumed not to interact</td></tr>
              <tr><td>S<sub>ij</sub> (i ≠ j)</td><td><b>0</b></td><td>Overlap between different orbitals is neglected</td></tr>
              <tr><td>S<sub>ii</sub></td><td><b>1</b></td><td>Each orbital is normalised</td></tr>
            </tbody>
          </table>
          <h3>Why use it</h3>
          <ul>
            <li>It gives a quick <b>"back of an envelope"</b> answer without a full quantum calculation, which is often all an experimentalist needs.</li>
            <li>Its formalism is closely <b>analogous to perturbation methods</b>.</li>
            <li>Modern Hückel programs take the <b>molecular structure as input</b>.</li>
            <li>It gives qualitative <b>π-MO energies, electron distribution, delocalisation, bond order</b> and the <b>relative stability</b> of conjugated molecules.</li>
            <li>Main advantage: <b>simplicity and low computational effort</b>.</li>
          </ul>
          <h3>Heteroatoms</h3>
          <p>Any non-hydrogen atom is a <b>heavy atom</b>, and any heavy atom other than carbon (N, O …) is a <b>heteroatom</b>. Hückel theory treats all carbons alike, so their α and β never change. A heteroatom X has a different orbital energy and a different interaction with carbon, so the parameters are modified:</p>
          <div class="eq" data-label="Heteroatom X">α<sub>X</sub> = α + kβ</div>
          <div class="eq" data-label="C–X bond">β<sub>CX</sub> = hβ</div>
          <p><b>k</b> adjusts the orbital energy of the heteroatom and <b>h</b> adjusts the carbon–heteroatom interaction.</p>
        ` },
        { title: 'HOMO and LUMO', html: `
          <p class="lead">The <b>HOMO</b> is the highest occupied molecular orbital and the <b>LUMO</b> is the lowest unoccupied molecular orbital. The slide shows both for <b>methane</b>.</p>
          <figure data-fig="m5-homo-lumo"></figure>
          <ul>
            <li>Method and basis set: <b>B3LYP / 6-31G*</b>.</li>
            <li>HOMO and LUMO are the frontier orbitals used in <b>electronic structure analysis</b>.</li>
          </ul>
          <div class="note why"><p>They are called <b>frontier</b> orbitals because they sit at the border between filled and empty levels. In a reaction a molecule usually <b>gives electrons from its HOMO</b> and <b>accepts electrons into its LUMO</b>. The <b>HOMO–LUMO gap</b> is their energy difference: a small gap usually means a more reactive molecule that absorbs longer-wavelength light. B3LYP/6-31G* means the DFT functional B3LYP with the 6-31G* basis set.</p></div>
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
        { front: 'Atomic orbital vs molecular orbital: scope?', back: 'AO: <b>individual atoms</b>, localised. MO: <b>molecules</b>, delocalised LCAO.' },
        { front: 'Why must the Hamiltonian be Hermitian?', back: 'A Hermitian operator gives <b>real energies</b>, so the results are physically meaningful.' },
        { front: 'Define α, β and S.', back: '<b>α</b> = ∫φ<sub>A</sub>Ĥφ<sub>A</sub>dτ, energy of an electron in the AO; <b>β</b> = ∫φ<sub>A</sub>Ĥφ<sub>B</sub>dτ, strength of AO interaction; <b>S</b> = ∫φ<sub>A</sub>φ<sub>B</sub>dτ, extent of overlap.' },
        { front: 'Energies of the bonding and antibonding MOs of a homonuclear diatomic?', back: '<b>E = (α + β)/(1 + S)</b> and <b>E = (α − β)/(1 − S)</b>.' },
        { front: 'O<sub>2</sub>: bond order and magnetism?', back: 'Bond order <b>2</b>; two unpaired π* electrons, so <b>paramagnetic</b>.' },
        { front: 'Heteronuclear diatomic with α<sub>A</sub> &lt; α<sub>B</sub>: which AO dominates each MO?', back: 'Bonding MO mostly <b>φ<sub>A</sub></b> (lower AO); antibonding MO mostly <b>φ<sub>B</sub></b>.' },
        { front: 'Effect of a large AO energy gap Δα?', back: '<b>Weak mixing</b>: each MO looks almost like one original AO.' },
        { front: 'Hückel approximations?', back: 'H<sub>ii</sub> = <b>α</b>, H<sub>ij</sub> = <b>β</b> for neighbours and <b>0</b> otherwise, S<sub>ij</sub> = <b>0</b>, S<sub>ii</sub> = <b>1</b>; σ framework fixed, π electrons only.' },
        { front: 'Hückel parameters for a heteroatom X?', back: '<b>α<sub>X</sub> = α + kβ</b> and <b>β<sub>CX</sub> = hβ</b>.' },
        { front: 'What does Mulliken population analysis give?', back: 'Approximate <b>electron population and atomic charge</b> on each atom.' }
      ],
      oneLiners: [
        'MO theory (Hund and Mulliken) builds molecular orbitals as LCAOs.',
        'Constructive interference gives a bonding MO, destructive interference an antibonding MO.',
        'AOs combine only if they have similar energy, the same symmetry about the axis and good overlap.',
        'The HOMO is the highest occupied and the LUMO the lowest unoccupied MO.',
        'Atomic orbitals are localised on one atom; molecular orbitals are delocalised over the molecule.',
        'The Hamiltonian is Hermitian, so its energies are real; the secular equation gives E = (α ± β)/(1 ± S) for a homonuclear diatomic.',
        'O2 has bond order 2 and two unpaired π* electrons, so it is paramagnetic.',
        'In a heteronuclear diatomic the bonding MO is mostly the lower-energy AO; a large Δα means weak mixing.',
        'Hückel theory treats only π electrons and uses α + kβ and hβ for heteroatoms.'
      ],
      formulas: [
        { name: 'Bond order', html: `(N<sub>b</sub> − N<sub>a</sub>) / 2`, note: 'N<sub>b</sub> bonding, N<sub>a</sub> antibonding electrons.' },
        { name: 'LCAO', html: `Ψ = c<sub>1</sub>φ<sub>1</sub> + c<sub>2</sub>φ<sub>2</sub>`, note: 'c = contribution of each atomic orbital.' },
        { name: 'Secular equation (two orbitals)', html: `(α<sub>A</sub> − E)(α<sub>B</sub> − E) − (β − ES)<sup>2</sup> = 0`, note: 'α Coulomb, β resonance, S overlap integral.' },
        { name: 'Homonuclear MO energies', html: `E<sub>±</sub> = (α ± β)/(1 ± S)`, note: '+ bonding, − antibonding.' },
        { name: 'Hückel heteroatom parameters', html: `α<sub>X</sub> = α + kβ;  β<sub>CX</sub> = hβ`, note: 'k adjusts orbital energy, h the C–X interaction.' }
      ]
    }
  ],
  figures: [
    { id: 'm5-mo-o2', src: null, crop: null,
      caption: 'MO diagram of O₂ (valence shell): 8 bonding and 4 antibonding electrons give bond order 2, and the two unpaired electrons in π*2p make O₂ paramagnetic.',
      alt: 'Energy level diagram with the 2s and 2p levels of each O atom at the sides and, in the centre from the bottom, sigma 2s, sigma-star 2s, sigma 2p, the pair of pi 2p levels, the pair of pi-star 2p levels with one electron each, and an empty sigma-star 2p level.' },
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
