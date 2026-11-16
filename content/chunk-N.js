CHUNK({
  chunk: 'N',
  module: 'm5',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm5-potential-energy-surface',
      title: "Potential energy curves, surfaces and electrostatic potentials",
      short: "PES & ESP",
      blurb: 'Potential energy curve of a diatomic, harmonic and anharmonic bonds, the potential energy surface and its degrees of freedom, ozone and contour diagrams, stationary points and the electrostatic potential.',
      source: 'Slides 28–35',
      tabs: [
        { title: 'Potential energy curve', html: `
          <p class="lead">A <b>potential energy curve (PEC)</b> is a graph of the potential energy of a <b>diatomic</b> molecular system against the <b>internuclear distance</b> between the two atoms.</p>
          <figure data-fig="m5-pec-diatomic"></figure>
          <div data-viz="morse-curve"></div>
          <p>Comparing the <b>harmonic bond approximation</b> with the exact PEC shows that <b>all real bonds are anharmonic</b>. Chemistry exists because of the anharmonicity of real chemical bonds.</p>
          <h3>Features</h3>
          <ul>
            <li>The minimum is the <b>equilibrium bond distance</b>, the most stable configuration.</li>
            <li>The <b>repulsive region</b> and the <b>attractive region</b>.</li>
            <li>The <b>dissociation limit</b> (dissociation energy).</li>
          </ul>
          <h3>Importance</h3>
          <div class="chips"><span class="chip">chemical bonding</span><span class="chip">vibrational motion of diatoms</span><span class="chip">dissociation energy</span><span class="chip">spectroscopic transitions</span><span class="chip">molecular (diatom) stability</span></div>
        ` },
        { title: 'Harmonic and Morse', html: `
          <p class="lead">A bond behaves roughly like a <b>spring</b> joining two atoms. Squeezing or stretching it away from R<sub>e</sub> raises the potential energy, and the shape of that rise is modelled in two ways.</p>
          <div class="vs">
            <div class="side"><h4>Harmonic oscillator</h4><div class="eq">V = ½k(R − R<sub>e</sub>)<sup>2</sup></div><ul><li>k is the <b>force constant</b>, R the bond length, R<sub>e</sub> the equilibrium bond length.</li><li>The curve is a <b>symmetrical parabola</b>.</li><li>It works well only for <b>small displacements</b> around R<sub>e</sub>.</li><li>A larger k means a bond that is <b>harder to stretch</b>.</li></ul></div>
            <div class="side"><h4>Anharmonic (Morse) oscillator</h4><div class="eq">V = D<sub>e</sub>(1 − e<sup>−a(R − R<sub>e</sub>)</sup>)<sup>2</sup></div><ul><li><b>D<sub>e</sub></b> is the <b>depth of the well</b>, the energy needed to break the bond measured from the minimum; <b>a</b> sets how wide or narrow the curve is.</li><li>Real bonds are not perfect springs; on large stretching the curve stops being a parabola.</li><li>It gives a <b>more realistic</b> description of real vibrations and of the approach to <b>dissociation</b>.</li><li>At large R it differs strongly from the harmonic model: it levels off at D<sub>e</sub> instead of rising for ever.</li></ul></div>
          </div>
          <figure data-fig="m5-morse-harmonic"></figure>
          <h3>Calculated curves: H<sub>2</sub> and HCl</h3>
          <p>A program changes the bond length step by step (the <b>scan coordinate</b>, in Å) and calculates the total energy at each step (in Hartree; 1 Hartree ≈ 2626 kJ mol<sup>−1</sup>). For a diatomic the bond length is the only geometric variable, so the result is a <b>2-D curve</b>.</p>
          <table class="tbl">
            <thead><tr><th>Feature</th><th>H<sub>2</sub></th><th>HCl</th></tr></thead>
            <tbody>
              <tr><td>Minimum (equilibrium bond length)</td><td>About <b>0.74 Å</b></td><td>About <b>1.3 Å</b></td></tr>
              <tr><td>Short distances</td><td>Energy rises steeply because the two nuclei repel each other</td><td>Energy rises very steeply for the same reason</td></tr>
              <tr><td>Long distances</td><td>Energy rises as the bond is stretched and broken</td><td>Curve becomes almost flat: H and Cl no longer interact, so the bond is broken (dissociation)</td></tr>
              <tr><td>Lesson</td><td>The minimum marks the preferred internuclear distance</td><td>The curve is not symmetric, so only the anharmonic Morse form can describe it</td></tr>
            </tbody>
          </table>
          <div class="note exam"><p>"Define reaction coordinate and discuss the potential energy of H<sub>2</sub> (or HCl) along it": the <b>reaction coordinate</b> is the geometric parameter (or path) along which the energy is followed; for a diatomic it is the <b>internuclear distance R</b>. Sketch the curve and mark the repulsive wall (nuclear repulsion), the minimum at R<sub>e</sub> (attraction and repulsion balanced, most stable), the well depth D<sub>e</sub> and the flat dissociation limit. Add the harmonic and Morse equations and say why real bonds are anharmonic.</p></div>
        ` },
        { title: 'Potential energy surface', html: `
          <p class="lead">A <b>potential energy surface (PES)</b> is a <b>multidimensional surface</b> giving the potential energy of a molecular system as a function of the <b>nuclear coordinates</b>.</p>
          <div class="eq" data-label="Mathematical form">E = f(R<sub>1</sub>, R<sub>2</sub>, R<sub>3</sub>, … R<sub>N</sub>)</div>
          <p>R<sub>i</sub> is the i-th nuclear coordinate. A molecule of N atoms can change its energy in <b>3N ways</b>, since every atom has 3 coordinates.</p>
          <ul>
            <li>3 coordinates describe molecular <b>translation</b>.</li>
            <li>3 coordinates describe molecular <b>rotation</b>.</li>
            <li>That leaves <b>3N − 6</b> coordinates for molecular <b>vibration</b> (<b>3N − 5</b> for a linear molecule).</li>
          </ul>
          <p>So the PES of a non-linear polyatomic molecule is a function of <b>3N − 6</b> vibrational modes, and of <b>3N − 5</b> for a linear molecule.</p>
        ` },
        { title: 'Ozone and contour diagrams', html: `
          <p class="lead">Slides 32 and 33 show how a surface is drawn for real molecules.</p>
          <div class="worked"><div class="given"><p><b>Ozone</b> (O<sub>3</sub>) is a non-linear triatomic with N = 3.</p></div>
          <div class="solve"><div class="eq">3(3) − 6 = 3 vibrational degrees of freedom</div></div>
          <div class="result">For the PES shown, <b>one O–O distance is kept fixed</b> (or both O–O distances are kept the same) so that it can be drawn against the reaction coordinate.</div></div>
          <h3>Contour diagrams</h3>
          <p>A contour diagram is a <b>2-D representation of a 3-D surface</b>. The slides give contour diagrams for <b>NO<sub>2</sub></b> and <b>H<sub>2</sub>O</b>, and mark the <b>equilibrium structure</b> on them.</p>
          <figure data-fig="m5-pes-contours"></figure>
        ` },
        { title: 'Surface features', html: `
          <p class="lead">A PES has a few landmark points and paths.</p>
          <div class="vs">
            <div class="side"><h4>Features</h4><ul><li>Global minima</li><li>Local minima</li><li>Saddle points, the <b>transition states</b></li><li>Energy barrier</li><li>Reaction pathway, the <b>minimum energy path (MEP)</b></li><li>Surface curvature</li></ul></div>
            <div class="side"><h4>Importance</h4><ul><li>Understanding chemical reactions</li><li>Reaction rate prediction</li><li>Analysis of molecular stability</li><li>Spectroscopic analysis</li><li>Molecular dynamics simulations</li><li>Drug design and materials science</li></ul></div>
          </div>
          <h3>Dimensions</h3>
          <table class="tbl">
            <thead><tr><th>System</th><th>PES</th></tr></thead>
            <tbody>
              <tr><td><b>Diatom</b></td><td>A <b>2-D curve</b>, a special, limiting case of the general PES</td></tr>
              <tr><td><b>Triatomic</b></td><td>A <b>3-D surface</b></td></tr>
              <tr><td><b>Larger molecules</b></td><td>A surface of higher dimensions, a <b>hypersurface</b></td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Water, HOF and ozone', html: `
          <p class="lead">A PES is like a <b>map of hills and valleys</b>: valleys (minima) are stable structures, ridges and passes are higher-energy regions and reaction barriers. Three examples show how the dimension grows with the number of geometric parameters.</p>
          <h3>Water: a 3-D surface</h3>
          <p>With both O–H bonds kept equal, water needs two parameters: <b>q<sub>1</sub> = O–H bond length</b> and <b>q<sub>2</sub> = H–O–H bond angle</b>. With energy as the third axis this gives a 3-D surface, where each point is the energy of one possible geometry. The lowest point, <b>P<sub>min</sub></b>, is at <b>q<sub>1</sub> = 0.958 Å</b> and <b>q<sub>2</sub> = 104.5°</b>, the equilibrium geometry of water.</p>
          <h3>HOF: a hypersurface</h3>
          <p>HOF needs three independent parameters: the <b>O–H length, O–F length and H–O–F angle</b>. With energy that makes four axes, which cannot be drawn, so it is a <b>potential energy hypersurface</b>. A computer can still calculate and search it mathematically.</p>
          <div class="eq" data-label="General">E = f(q<sub>1</sub>, q<sub>2</sub>, q<sub>3</sub>, …, q<sub>n</sub>)</div>
          <ul>
            <li><b>One</b> changing coordinate gives a potential energy <b>curve</b>.</li>
            <li><b>Two</b> coordinates give a potential energy <b>surface</b>.</li>
            <li><b>Three or more</b> give a <b>hypersurface</b>; bigger molecules simply need more coordinates.</li>
          </ul>
          <h3>Ozone → isoozone</h3>
          <p><b>Ozone</b> is a bent O<sub>3</sub> (O–O–O angle about <b>120°</b>); <b>isoozone</b> is a triangle of three O atoms (angle <b>60°</b>). On the surface plotted against the O–O–O angle and the O–O bond length:</p>
          <ul>
            <li>Ozone sits in the deepest valley, the <b>global minimum</b>.</li>
            <li>Isoozone sits in a higher valley, a <b>local (relative) minimum</b>, so ozone is more stable.</li>
            <li>The <b>transition state</b> is the <b>saddle point</b> between them, like a mountain pass: a maximum along the path but a minimum in the other direction.</li>
            <li>The lowest-energy route, the <b>intrinsic reaction coordinate (IRC)</b>, runs ozone → transition state → isoozone; the energy rises to a maximum at the TS, then falls to isoozone.</li>
            <li>All three are <b>stationary points</b>, where the surface is flat.</li>
          </ul>
          <div class="note exam"><p>"What is a hypersurface? Discuss with an example": define PES, say a molecule with three or more geometric parameters needs a 4-D or higher plot, use HOF (O–H, O–F, H–O–F), write E = f(q<sub>1</sub> … q<sub>n</sub>), and contrast with H<sub>2</sub> (curve) and water (surface, P<sub>min</sub> 0.958 Å, 104.5°).</p></div>
        ` },
        { title: 'PEC vs PES', html: `
          <p class="lead">A PES is the extension of a PEC to molecules whose geometry cannot be described by <b>one coordinate</b>.</p>
          <table class="tbl">
            <thead><tr><th>Point</th><th>Potential energy curve (PEC)</th><th>Potential energy surface (PES)</th></tr></thead>
            <tbody>
              <tr><td>Definition</td><td>Shows how the energy changes when <b>one</b> geometric parameter changes</td><td>Shows how the energy changes when <b>two or more</b> geometric parameters change</td></tr>
              <tr><td>Systems</td><td>Diatomic molecules such as H<sub>2</sub> and HCl, where bond length is the only variable</td><td>Polyatomic molecules such as H<sub>2</sub>O and O<sub>3</sub>; larger ones need a hypersurface</td></tr>
              <tr><td>Variables</td><td>E = f(R), with R the internuclear distance</td><td>E = f(q<sub>1</sub>, q<sub>2</sub>, …, q<sub>n</sub>), with 3N − 6 (or 3N − 5) vibrational coordinates</td></tr>
              <tr><td>Plot</td><td>A 2-D graph, energy against bond length</td><td>A 3-D surface for two parameters; 4-D or more cannot be drawn and is searched by computer</td></tr>
              <tr><td>Stationary points</td><td>Only one minimum, the equilibrium bond length R<sub>e</sub></td><td>Global and local minima plus saddle points (transition states)</td></tr>
              <tr><td>Reactions</td><td>Shows only bond dissociation into atoms</td><td>Shows reaction paths, barriers, intermediates and the minimum energy path between minima</td></tr>
              <tr><td>Example result</td><td>H<sub>2</sub> minimum at about 0.74 Å</td><td>Water minimum at 0.958 Å and 104.5°</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>The PEC is the special, limiting case of the PES for one coordinate. The idea is the same in every case: <b>energy depends on geometry</b>.</p></div>
        ` },
        { title: 'Electrostatic potential', html: `
          <p class="lead">The <b>electrostatic potential</b> is the work done in bringing a <b>unit positive test charge from infinity</b> to a point in the space around a molecule, without acceleration.</p>
          <ul>
            <li>It is the <b>potential energy per unit charge</b> at a point of the molecule.</li>
            <li>It varies across space because of the <b>uneven charge distribution</b> in a molecule.</li>
          </ul>
          <h3>Significance</h3>
          <ul>
            <li><b>Charge distribution.</b> Negative potential means <b>electron-rich</b> (a nucleophilic site); positive potential means <b>electron-deficient</b> (an electrophilic site).</li>
            <li><b>Chemical reactivity.</b> It predicts the likely sites of electrophilic and nucleophilic attack.</li>
            <li><b>Non-covalent interactions</b>: hydrogen bonding, dipole–dipole interaction, van der Waals forces.</li>
            <li><b>Drug–receptor interaction</b> and molecular recognition.</li>
          </ul>
          <h3>MEP maps</h3>
          <p>The potential is shown as a <b>molecular electrostatic potential (MEP) map</b>, a colour-coded surface: <b>red is negative</b> regions and <b>blue is positive</b> regions. The slide shows the map for <b>ammonia</b>.</p>
        ` }
      ],
      flashcards: [
        { front: 'What is a potential energy curve?', back: 'Potential energy of a <b>diatomic</b> system against <b>internuclear distance</b>.' },
        { front: 'What does the PEC minimum represent?', back: 'The <b>equilibrium bond distance</b>, the most stable configuration.' },
        { front: 'Why are real bonds not harmonic?', back: 'All real bonds are <b>anharmonic</b>; chemistry exists because of this.' },
        { front: 'What is a PES?', back: 'A multidimensional surface of <b>potential energy against nuclear coordinates</b>, E = f(R<sub>1</sub> … R<sub>N</sub>).' },
        { front: 'Split the 3N coordinates of a molecule.', back: '<b>3 translation, 3 rotation, 3N − 6 vibration</b> (3N − 5 for linear).' },
        { front: 'Vibrational degrees of freedom of ozone?', back: '3(3) − 6 = <b>3</b>.' },
        { front: 'PES of a diatom, triatom, larger molecule?', back: '<b>2-D curve, 3-D surface, hypersurface</b>.' },
        { front: 'Features of a PES?', back: '<b>Global and local minima, saddle points (TS), energy barrier, minimum energy path, curvature</b>.' },
        { front: 'Define electrostatic potential.', back: 'Work to bring a <b>unit positive test charge from infinity</b> to a point near the molecule.' },
        { front: 'Colours in an MEP map?', back: '<b>Red negative</b> (electron-rich, nucleophilic), <b>blue positive</b> (electron-deficient, electrophilic).' },
        { front: 'Morse potential?', back: '<b>V = D<sub>e</sub>(1 − e<sup>−a(R − R<sub>e</sub>)</sup>)<sup>2</sup></b>; D<sub>e</sub> = well depth, a = width of the curve.' },
        { front: 'Harmonic potential and its limit?', back: '<b>V = ½k(R − R<sub>e</sub>)<sup>2</sup></b>; good only for small displacements around R<sub>e</sub>.' },
        { front: 'Equilibrium bond lengths on the calculated H<sub>2</sub> and HCl curves?', back: 'H<sub>2</sub> about <b>0.74 Å</b>; HCl about <b>1.3 Å</b>.' },
        { front: 'Minimum of the water PES?', back: '<b>q<sub>1</sub> = 0.958 Å</b> (O–H), <b>q<sub>2</sub> = 104.5°</b> (H–O–H).' },
        { front: 'Why is HOF described by a hypersurface?', back: 'It needs <b>three parameters</b> (O–H, O–F, H–O–F), so with energy it needs <b>four axes</b>.' },
        { front: 'Ozone and isoozone on the PES?', back: 'Ozone (120°) is the <b>global minimum</b>, isoozone (60°) a <b>local minimum</b>, joined through a <b>saddle point</b> TS.' }
      ],
      oneLiners: [
        'A PEC plots energy against internuclear distance; its minimum is the equilibrium bond distance.',
        'All real bonds are anharmonic; the harmonic approximation only fits near the minimum.',
        'A PES gives energy as a function of nuclear coordinates: 3N − 6 vibrations (3N − 5 if linear).',
        'A diatom has a 2-D curve, a triatomic a 3-D surface and larger molecules a hypersurface.',
        'Saddle points on the PES are transition states; the minimum energy path joins reactants to products.',
        'Negative ESP (red) marks electron-rich nucleophilic sites; positive ESP (blue) marks electrophilic sites.',
        'Harmonic V = ½k(R − Re)² fits only near the minimum; the Morse curve levels off at De and describes dissociation.',
        'One coordinate gives a curve (H2), two a surface (water, 0.958 Å and 104.5°), three or more a hypersurface (HOF).'
      ],
      formulas: [
        { name: 'Harmonic potential', html: `V = ½k(R − R<sub>e</sub>)<sup>2</sup>`, note: 'k = force constant, R<sub>e</sub> = equilibrium bond length.' },
        { name: 'Morse potential', html: `V = D<sub>e</sub>(1 − e<sup>−a(R − R<sub>e</sub>)</sup>)<sup>2</sup>`, note: 'D<sub>e</sub> = well depth, a = curve width.' },
        { name: 'Potential energy surface', html: `E = f(R<sub>1</sub>, R<sub>2</sub>, … R<sub>N</sub>)`, note: 'R<sub>i</sub> = i-th nuclear coordinate.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm5-geometry-frequency',
      title: 'Geometry optimisation and frequency calculations',
      short: 'Geometry & frequency',
      blurb: 'The geometry optimisation workflow, why the starting structure matters, vibrational frequency and force constants, normal modes of water, calculated frequencies, minima, transition states and hilltops, and the HCN → HNC profile.',
      source: 'Slides 36–41',
      tabs: [
        { title: 'Geometry optimisation', html: `
          <p class="lead"><b>Geometry optimisation</b> adjusts the relative positions of the atoms in a molecule to find the arrangement with <b>minimum potential energy</b> on the PES. In simple terms, it finds the most stable geometry: <b>bond lengths, bond angles and dihedral angles</b>.</p>
          <h3>The workflow</h3>
          <figure data-fig="m5-geometry-loop"></figure>
          <ol class="steps">
            <li>Start with an <b>initial guess</b> of the molecular structure.</li>
            <li>Calculate the <b>energy and the force</b> on each atom.</li>
            <li>Change the atom positions slightly to <b>reduce the energy</b>.</li>
            <li>Repeat until the <b>force is about 0</b> and the energy change is very small, within the pre-set tolerance.</li>
          </ol>
          <div data-viz="geom-opt"></div>
          <div class="note heads-up"><p>The slide compares optimisations with the <b>same method</b>, the <b>same basis set</b> and <b>different initial geometries</b>. They can end with different energies for the optimised structure, because the start decides which minimum is reached.</p></div>
        ` },
        { title: 'Optimised geometry', html: `
          <div class="vs">
            <div class="side"><h4>Features</h4><ul><li>The structure with <b>minimum energy</b>, a <b>stationary point</b> on the PES.</li><li>The <b>net forces on the atoms are zero</b>.</li><li>It corresponds to the stable structure, <b>sometimes the transition state</b>.</li><li>Further calculations (such as frequency) can be started from it.</li></ul></div>
            <div class="side"><h4>Importance</h4><ul><li>Molecular structure determination.</li><li>Starting point of further calculations (frequency, spectroscopic).</li><li>Understanding stability: low energy means more stable.</li><li>Reaction mechanism: locating reactant, product and transition state.</li></ul></div>
          </div>
        ` },
        { title: 'Starting structure', html: `
          <p class="lead">An optimisation does not search the whole PES. It changes bond lengths and angles step by step and stops at the <b>nearest stationary point</b> it can reach, so the answer depends on the <b>starting geometry</b>.</p>
          <div class="vs">
            <div class="side"><h4>Local minimum</h4><p>Lower in energy than all the geometries <b>immediately around it</b>, though another minimum elsewhere may be lower.</p></div>
            <div class="side"><h4>Global minimum</h4><p>The <b>lowest-energy</b> structure among all the minima considered: the most stable structure.</p></div>
          </div>
          <p>A calculation started in one valley moves down into that valley; it does not cross a barrier to look at other regions. So <b>several starting structures</b> may have to be optimised before the most stable one is found.</p>
          <h3>Example: propen-2-ol</h3>
          <p>Propen-2-ol, CH<sub>2</sub>=C(OH)CH<sub>3</sub>, is the enol form of acetone. Rotating its O–H and CH<sub>3</sub> groups gives <b>six stationary points</b>:</p>
          <table class="tbl">
            <thead><tr><th>Structure</th><th>Energy (kJ mol<sup>−1</sup>)</th><th>Type</th></tr></thead>
            <tbody>
              <tr><td>1</td><td><b>0</b></td><td>Minimum, the global minimum and most stable</td></tr>
              <tr><td>3</td><td><b>7.9</b></td><td>Minimum, a local minimum</td></tr>
              <tr><td>2, 4, 5</td><td>about 5.8, 11.6 and 14.4</td><td>Transition states, one imaginary frequency each</td></tr>
              <tr><td>6</td><td>18.3</td><td>Hilltop with <b>two imaginary frequencies</b></td></tr>
            </tbody>
          </table>
          <p>An optimisation started near structure 3 usually <b>stops at 3</b>, even though structure 1 is more stable. Different starting geometries → different pathways → different stationary points.</p>
          <h3>Conformer analysis: propane</h3>
          <p>Rotation about single bonds gives conformations of different energy; <b>more eclipsing interactions mean higher energy</b>. Rotating the two CH<sub>3</sub> groups of propane gives three stationary points:</p>
          <ul>
            <li><b>A, hilltop:</b> both CH<sub>3</sub> groups eclipsed, <b>6 eclipsing interactions</b>, highest energy.</li>
            <li><b>B, transition state:</b> one group eclipsed and one staggered, <b>3 eclipsing interactions</b>, intermediate energy.</li>
            <li><b>C, minimum:</b> both groups staggered, <b>no eclipsing</b>, the most stable conformer.</li>
          </ul>
          <p>Conformer analysis finds the stable conformations, the <b>rotational barriers</b> and the lowest-energy arrangement.</p>
          <div class="note exam"><p>"Two methods used in optimising geometry": the slides do not name two. Build the answer from the notes: (1) <b>molecular mechanics optimisation</b>, where a force field (balls and springs) gives the energy, fast and suited to large molecules but blind to electrons; (2) <b>quantum mechanical optimisation</b> (semi-empirical, ab initio or DFT with a chosen basis set), where energy and forces come from the electronic structure, slower but able to handle bond breaking and transition states. In both the loop is the same: energy and forces, a small move downhill, repeat until the forces are about zero. Add that the starting structure decides which minimum is reached.</p></div>
          <div class="note heads-up"><p>Some answers read "two methods" as the two kinds of search instead: <b>minimisation</b> to a minimum and a <b>transition-state search</b> to a saddle point. The notes support this too, since optimisation can also be used to search for transition states. If you have space, mention both readings.</p></div>
        ` },
        { title: 'Frequency', html: `
          <p class="lead">Atoms in a molecule are never still. They <b>vibrate continuously</b> because of thermal energy, around their <b>equilibrium positions</b>.</p>
          <ul>
            <li>Real vibrations are <b>anharmonic</b>, but can be treated as <b>harmonic</b> up to a certain limit.</li>
            <li><b>Vibrational frequency</b> is the number of complete vibrational cycles (oscillations) the atoms of the molecule perform per unit time.</li>
          </ul>
          <div class="eq" data-label="Harmonic approximation">ν = <span class="frac"><span>1</span><span>2π</span></span> (<span class="frac"><span>k</span><span>μ</span></span>)<sup>1/2</sup></div>
          <div class="kv">
            <div><span>ν</span><b>frequency (Hz)</b></div>
            <div><span>k</span><b>force constant</b></div>
            <div><span>μ</span><b>reduced mass</b></div>
          </div>
          <ul>
            <li><b>High force constant</b>: higher frequency, stronger bond.</li>
            <li><b>Higher reduced mass</b>: lower frequency.</li>
            <li>Units: <b>Hz (s<sup>−1</sup>)</b>, or <b>cm<sup>−1</sup></b> for spectroscopic applications.</li>
          </ul>
          <h3>Wavenumber, reduced mass and force constant</h3>
          <p>A diatomic is treated as two masses joined by a spring (harmonic oscillator). In wavenumbers:</p>
          <div class="eq" data-label="Wavenumber">ν̃ = <span class="frac"><span>1</span><span>2πc</span></span> (<span class="frac"><span>k</span><span>μ</span></span>)<sup>1/2</sup></div>
          <div class="eq" data-label="Reduced mass">μ = <span class="frac"><span>m<sub>A</sub>m<sub>B</sub></span><span>m<sub>A</sub> + m<sub>B</sub></span></span></div>
          <p>c is the speed of light and m<sub>A</sub>, m<sub>B</sub> are the atomic masses. The <b>force constant k</b> measures bond <b>stiffness</b>, how strongly the bond resists stretching or compression. It is set by the <b>curvature</b> (second derivative) of the energy at the minimum:</p>
          <div class="eq" data-label="Force constant">d<sup>2</sup>E/dq<sup>2</sup> = 2k   (for E = k(q − q<sub>e</sub>)<sup>2</sup>)</div>
          <ul>
            <li>The factor 2 comes only from how the energy is written; with V = ½k(R − R<sub>e</sub>)<sup>2</sup> the second derivative is simply k.</li>
            <li>A <b>steep</b> energy curve means a <b>stiff bond</b> (high k, greater resistance to deformation); low k means the bond stretches or compresses easily.</li>
            <li>For <b>polyatomic</b> molecules one stretching equation is not enough: the program uses all the <b>atomic masses and force constants</b> to get every normal mode, in which several atoms move together at one frequency.</li>
          </ul>
        ` },
        { title: 'Number of modes', html: `
          <div class="vs">
            <div class="side"><h4>Non-linear molecule</h4><div class="eq">3N − 6 modes</div></div>
            <div class="side"><h4>Linear molecule</h4><div class="eq">3N − 5 modes</div></div>
          </div>
          <p>N is the number of atoms.</p>
          <table class="tbl">
            <thead><tr><th>Molecule</th><th>Shape</th><th>Atoms</th><th>Vibrational modes</th></tr></thead>
            <tbody>
              <tr><td><b>Water</b> (H<sub>2</sub>O)</td><td>Non-linear</td><td>3</td><td>3(3) − 6 = <b>3</b></td></tr>
              <tr><td><b>Ammonia</b> (NH<sub>3</sub>)</td><td>Non-linear</td><td>4</td><td>3(4) − 6 = <b>6</b></td></tr>
              <tr><td><b>Carbon dioxide</b> (CO<sub>2</sub>)</td><td>Linear</td><td>3</td><td>3(3) − 5 = <b>4</b></td></tr>
              <tr><td><b>Methane</b> (CH<sub>4</sub>)</td><td>Non-linear</td><td>5</td><td>3(5) − 6 = <b>9</b></td></tr>
            </tbody>
          </table>
          <figure data-fig="m5-water-normal-modes"></figure>
          <div data-viz="normal-modes"></div>
          <p>A <b>normal mode</b> is one independent pattern of vibration in which all the atoms move in a coordinated way with the <b>same frequency</b>, reaching maximum displacement and passing through equilibrium together. Translations and rotations move or turn the whole molecule without changing its shape, so they are not vibrations.</p>
          <h3>Water's three modes</h3>
          <table class="tbl">
            <thead><tr><th>Mode</th><th>What the atoms do</th><th>Calculated frequency</th></tr></thead>
            <tbody>
              <tr><td><b>Bending</b></td><td>The H–O–H angle opens and closes</td><td><b>1595 cm<sup>−1</sup></b></td></tr>
              <tr><td><b>Symmetric stretch</b></td><td>Both O–H bonds lengthen and shorten together</td><td><b>3652 cm<sup>−1</sup></b></td></tr>
              <tr><td><b>Asymmetric stretch</b></td><td>One O–H bond lengthens while the other shortens</td><td><b>3756 cm<sup>−1</sup></b></td></tr>
            </tbody>
          </table>
          <p>Bending needs less energy than stretching, so it appears at a much lower wavenumber. For CO<sub>2</sub> (linear, 3(3) − 5 = 4) the bend is <b>counted twice</b> because it can happen in two perpendicular planes, alongside the symmetric and asymmetric stretches.</p>
          <div class="note exam"><p>"Number of normal modes of water and how they are found computationally": 3N − 6 = 3; name and describe the three modes with 1595, 3652 and 3756 cm<sup>−1</sup>. Then the method: optimise the geometry, run a frequency calculation (masses and force constants give the normal modes), check there is no imaginary frequency, animate each mode to assign it, and compare the calculated IR spectrum with experiment.</p></div>
        ` },
        { title: 'Calculated frequencies', html: `
          <p class="lead">Methane has 9 modes. The slide lists them from an ORCA calculation at <b>B3LYP / 6-31G*</b>.</p>
          <table class="tbl">
            <thead><tr><th>Mode</th><th>Type</th><th>Frequency (cm<sup>−1</sup>)</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>bending</td><td>1372.17</td></tr>
              <tr><td>2</td><td>bending</td><td>1372.44</td></tr>
              <tr><td>3</td><td>bending</td><td>1372.77</td></tr>
              <tr><td>4</td><td>bending</td><td>1592.84</td></tr>
              <tr><td>5</td><td>bending</td><td>1593.04</td></tr>
              <tr><td>6</td><td>symmetric stretch</td><td>3050.93</td></tr>
              <tr><td>7</td><td>asymmetric stretch</td><td>3159.36</td></tr>
              <tr><td>8</td><td>asymmetric stretch</td><td>3159.95</td></tr>
              <tr><td>9</td><td>asymmetric stretch</td><td>3160.16</td></tr>
            </tbody>
          </table>
          <p>The major application is <b>IR spectrum</b> determination, prediction and explanation. For <b>ammonia</b> the slide shows its normal modes of vibration and compares the <b>calculated IR spectrum</b> with the <b>experimental</b> one.</p>
        ` },
        { title: 'Intermediate and TS', html: `
          <p class="lead">Optimisation and frequency calculations together tell a <b>reaction intermediate</b> from a <b>transition state</b>.</p>
          <figure data-fig="m5-ts-vs-intermediate"></figure>
          <div data-viz="ts-explorer"></div>
          <table class="tbl">
            <thead><tr><th>Feature</th><th>Reaction intermediate</th><th>Transition state</th></tr></thead>
            <tbody>
              <tr><td>Nature of the structure</td><td>Local minimum on the PES</td><td>First-order saddle point on the PES</td></tr>
              <tr><td>Imaginary frequencies</td><td><b>Zero</b></td><td><b>Exactly one</b></td></tr>
              <tr><td>Sign of the frequencies</td><td>All real, positive</td><td>One imaginary, usually written as a negative frequency in cm<sup>−1</sup></td></tr>
              <tr><td>Position on the PES</td><td>In a local energy minimum</td><td>At an energy maximum</td></tr>
              <tr><td>Chemical significance</td><td>Relatively stable species formed during a reaction</td><td>Unstable structure at the energy barrier between reactant and product</td></tr>
            </tbody>
          </table>
          <div class="vs">
            <div class="side"><h4>Importance of optimisation</h4><ul><li>Determination of stable structures</li><li>Identification of intermediates</li><li>Identification of transition-state geometries</li><li>Analysis of bond lengths and bond angles</li><li>Energy comparison</li></ul></div>
            <div class="side"><h4>Importance of frequency calculation</h4><ul><li>Confirmation of minima (global or local)</li><li>Identification of transition states</li><li>Identification of the reaction coordinate</li><li>Verification of optimised structures</li></ul></div>
          </div>
          <h3>Reading the frequency output</h3>
          <p>Optimisation alone does not say <b>what kind</b> of stationary point was found, so a frequency calculation is run after it. Programs print an imaginary frequency as a <b>negative number</b>.</p>
          <ul>
            <li><b>Minimum:</b> zero negative frequencies. No vibrational direction lowers the energy, so the optimisation is validated.</li>
            <li><b>Transition state:</b> exactly one negative frequency, and its motion must match the expected movement along the reaction coordinate.</li>
            <li><b>Hilltop</b> (higher-order stationary point): <b>more than one</b> negative frequency. It is unstable in more than one direction, so it is neither a minimum nor a true first-order TS.</li>
          </ul>
          <h3>Criteria for a transition state</h3>
          <ol>
            <li>The structure lies <b>between reactant and product</b>.</li>
            <li>It has <b>only one imaginary frequency</b>.</li>
            <li><b>Animating</b> that mode clearly shows the expected bond-breaking or bond-forming motion.</li>
            <li>Its energy is <b>higher than both reactant and product</b>.</li>
          </ol>
          <p>Finding a high-energy structure is not enough; the imaginary mode must be chemically meaningful. Frequencies also give <b>thermodynamic quantities (entropy, enthalpy)</b> and <b>IR and Raman spectra</b>.</p>
        ` },
        { title: 'HCN → HNC profile', html: `
          <p class="lead">The isomerisation of <b>HCN (H–C≡N)</b> to <b>HNC (H–N≡C)</b> shows optimisation, frequency calculation and energy correction used together. The H atom moves from carbon to nitrogen through a high-energy bent transition state.</p>
          <ul>
            <li><b>HCN</b> is a minimum and the more stable structure; it is taken as the <b>zero of energy</b>.</li>
            <li>The <b>transition state</b> is the highest-energy structure between HCN and HNC.</li>
            <li><b>HNC</b> is another minimum, higher in energy than HCN.</li>
            <li>Frequencies confirm this: HCN and HNC have <b>no imaginary frequency</b>; the TS has <b>one</b>, the motion of H from C toward N.</li>
          </ul>
          <figure data-fig="m5-hcn-hnc-profile"></figure>
          <h3>Zero-point energy (ZPE) correction</h3>
          <p>Even at 0 K a molecule keeps its lowest vibrational energy, the ZPE, which the frequency calculation gives. The profile is drawn twice: with the <b>raw ab initio energies</b> and with <b>ZPE-corrected</b> energies. Energies are in Hartree; to convert, <b>multiply by 2626</b> (1 Hartree ≈ 2625.5 kJ mol<sup>−1</sup>).</p>
          <div class="worked">
            <div class="given"><p>ZPE(HCN) = 0.01798 Hartree; ZPE(TS) = 30.49 kJ mol<sup>−1</sup>; raw barrier 219 kJ mol<sup>−1</sup>; raw E(HNC) = 52.2 kJ mol<sup>−1</sup>.</p></div>
            <div class="solve">
              <div class="eq">ZPE(HCN) = 0.01798 × 2626 = 47.22 kJ mol<sup>−1</sup></div>
              <div class="eq">Corrected ΔE = raw ΔE − [ZPE(HCN) − ZPE(X)]</div>
              <div class="eq">Barrier = 219 − (47.22 − 30.49) = 219 − 16.73 = 202.3 ≈ 202 kJ mol<sup>−1</sup></div>
              <p>The TS has a smaller ZPE than HCN (one vibration has turned into the imaginary reaction-coordinate motion), so the correction <b>lowers the barrier</b>.</p>
            </div>
            <div class="result">Barrier <b>219 → 202 kJ mol<sup>−1</sup></b>; HNC <b>52.2 → 49.7 kJ mol<sup>−1</sup></b> above HCN.</div>
          </div>
          <div class="note heads-up"><p>The HNC drop of 2.5 kJ mol<sup>−1</sup> means ZPE(HNC) ≈ 47.22 − 2.5 = 44.7 kJ mol<sup>−1</sup>; this value is worked back from the source numbers, not printed in the text. Using 2625.5 instead of 2626 gives 47.21 instead of 47.22 kJ mol<sup>−1</sup> and does not change the rounded answers.</p></div>
          <div class="eq" data-label="Path">HCN (minimum) → transition state → HNC (minimum)</div>
        ` }
      ],
      flashcards: [
        { front: 'What is geometry optimisation?', back: 'Adjusting atomic positions to find the arrangement of <b>minimum potential energy</b> on the PES.' },
        { front: 'Steps of the optimisation workflow?', back: '<b>Initial guess, energy and force, move atoms, repeat</b> until force is about 0 and energy change is within tolerance.' },
        { front: 'What is true of the forces at an optimised geometry?', back: 'The <b>net force on each atom is zero</b>: a stationary point.' },
        { front: 'Frequency in the harmonic approximation?', back: '<b>ν = (1/2π)√(k/μ)</b>; k = force constant, μ = reduced mass.' },
        { front: 'Effect of k and μ on frequency?', back: 'Higher <b>k</b>: higher frequency. Higher <b>μ</b>: lower frequency.' },
        { front: 'Number of vibrational modes?', back: '<b>3N − 6</b> (non-linear), <b>3N − 5</b> (linear).' },
        { front: 'Modes of H<sub>2</sub>O, NH<sub>3</sub>, CO<sub>2</sub>, CH<sub>4</sub>?', back: '<b>3, 6, 4, 9</b>.' },
        { front: 'Imaginary frequencies in an intermediate and a transition state?', back: '<b>Zero</b> and <b>exactly one</b>.' },
        { front: 'Nature of an intermediate and a transition state on the PES?', back: 'Intermediate: <b>local minimum</b>. TS: <b>first-order saddle point</b>.' },
        { front: 'Major application of calculated frequencies?', back: '<b>IR spectra</b>: determination, prediction and explanation.' },
        { front: 'Why can an optimisation miss the most stable structure?', back: 'It stops at the <b>nearest minimum</b> (a local minimum) reachable from the starting geometry.' },
        { front: 'Propen-2-ol stationary points?', back: 'Minima <b>1 (0)</b> and <b>3 (7.9 kJ mol<sup>−1</sup>)</b>, TSs 2, 4, 5, hilltop 6 (18.3, two imaginary frequencies).' },
        { front: 'Propane conformers A, B, C?', back: 'A hilltop (<b>6 eclipsing</b>), B TS (<b>3 eclipsing</b>), C minimum (<b>staggered</b>).' },
        { front: 'Water mode frequencies?', back: 'Bend <b>1595</b>, symmetric stretch <b>3652</b>, asymmetric stretch <b>3756 cm<sup>−1</sup></b>.' },
        { front: 'Negative frequencies of a minimum, TS and hilltop?', back: '<b>0, 1, more than 1</b>.' },
        { front: 'Force constant from the energy curve?', back: '<b>d<sup>2</sup>E/dq<sup>2</sup> = 2k</b> for E = k(q − q<sub>e</sub>)<sup>2</sup>; high k = stiff bond.' },
        { front: 'HCN → HNC: effect of ZPE correction?', back: 'Barrier <b>219 → 202 kJ mol<sup>−1</sup></b>; HNC <b>52.2 → 49.7 kJ mol<sup>−1</sup></b>.' },
        { front: 'Hartree to kJ mol<sup>−1</sup>?', back: 'Multiply by <b>2626</b> (2625.5).' }
      ],
      oneLiners: [
        'Optimisation reaches the nearest minimum, not always the global one, so try several starting structures.',
        'Water modes: bend 1595, symmetric stretch 3652, asymmetric stretch 3756 cm⁻¹.',
        'Minimum 0, transition state 1, hilltop more than 1 imaginary (negative) frequency.',
        'ZPE correction lowers the HCN → HNC barrier from 219 to 202 kJ mol⁻¹ and HNC from 52.2 to 49.7 kJ mol⁻¹.',
        'Optimisation moves atoms until the force is about zero and the energy stops changing.',
        'The result is a stationary point: usually a minimum, sometimes a transition state.',
        'ν = (1/2π)√(k/μ): a stiffer bond vibrates faster, a heavier one slower.',
        'Linear molecules have 3N − 5 vibrational modes, non-linear 3N − 6.',
        'Water 3, ammonia 6, CO2 4, methane 9 modes.',
        'Intermediate: local minimum, no imaginary frequency. Transition state: saddle point, exactly one.',
        'Frequencies confirm minima and transition states, and give IR spectra.'
      ],
      formulas: [
        { name: 'Vibrational modes', html: `3N − 5 (linear), 3N − 6 (non-linear)`, note: 'N = number of atoms.' },
        { name: 'Harmonic frequency', html: `ν = (1/2π) √(k/μ)`, note: 'k = force constant, μ = reduced mass.' },
        { name: 'Harmonic wavenumber', html: `ν̃ = (1/2πc) √(k/μ);  μ = m<sub>A</sub>m<sub>B</sub>/(m<sub>A</sub> + m<sub>B</sub>)`, note: 'c = speed of light.' },
        { name: 'Force constant', html: `d<sup>2</sup>E/dq<sup>2</sup> = 2k`, note: 'For E = k(q − q<sub>e</sub>)<sup>2</sup>.' },
        { name: 'Hartree conversion', html: `E (kJ mol<sup>−1</sup>) = E (Hartree) × 2626`, note: '1 Hartree = 2625.5 kJ mol<sup>−1</sup>.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm5-reaction-mechanisms',
      title: 'Reaction mechanisms and SN2 reactions',
      short: 'Reaction mechanisms',
      blurb: 'The step-wise computational procedure for a mechanism, nucleophilic reactions, SN1 and SN2, the gas-phase SN2 surface, solvent effects and ketone enolization.',
      source: 'Slides 42–48',
      tabs: [
        { title: 'Reaction mechanism', html: `
          <p class="lead">Predicting <b>reaction mechanisms</b> through computational chemistry is possible and is one of the central goals of the field.</p>
          <figure data-fig="m5-mechanism-workflow"></figure>
          <ol class="steps">
            <li><b>Optimise</b> the geometry of the reactants and products.</li>
            <li><b>Propose possible steps</b> from reactants to products using chemical intuition: bonds to be broken or formed, possible intermediates, rearrangements.</li>
            <li>Look for the <b>transition state (TS)</b>; a TS generally has <b>one imaginary frequency</b>.</li>
            <li>Analyse the <b>intrinsic reaction coordinate (IRC)</b>: trace the path from the TS to the products and from the TS to the reactants.</li>
            <li>Construct the <b>energy profile</b>: reactants, intermediates and TS, products. Find <b>E<sub>a</sub>, ΔE and ΔG</b>.</li>
          </ol>
        ` },
        { title: 'Nucleophilic reactions', html: `
          <p class="lead">Nucleophilic reactions involving anions are organic reactions where negatively charged species (anions) <b>donate electron pairs</b> to <b>electrophilic (+) carbon atoms</b>.</p>
          <table class="tbl">
            <thead><tr><th>Type</th><th>What happens</th></tr></thead>
            <tbody>
              <tr><td><b>SN1 and SN2</b> (substitution)</td><td>Nucleophile attacks an <b>sp<sup>3</sup> carbon</b>. SN1: the bond breaks first, then forms. SN2: bond breaking and forming are <b>simultaneous</b>.</td></tr>
              <tr><td><b>Addition</b></td><td>Nucleophile attacks an <b>sp<sup>2</sup> or sp carbon</b>, as in 1,2- and 1,4-additions. The nucleophile adds, then the electrophile follows.</td></tr>
              <tr><td><b>Addition–elimination</b> (at carbonyls)</td><td>Common in <b>carboxylic acid derivatives</b>. The bond forms first, then the leaving group departs.</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'SN1 and SN2', html: `
          <p class="lead">Nucleophilic substitution, <b>SN1 and SN2</b>, is why these reactions matter for computation.</p>
          <div class="vs">
            <div class="side"><h4>Why important</h4><ul><li>The <b>first reactions taught</b> in organic chemistry.</li><li>Key models for understanding reaction mechanisms.</li></ul></div>
            <div class="side"><h4>What we learn</h4><ul><li>Regioselectivity, stereoselectivity, reaction rates and solvent effects.</li><li>Computational models give deep insight, especially for SN2.</li></ul></div>
          </div>
          <h3>Gas phase against solution</h3>
          <ul>
            <li>Most quantum calculations are done in the <b>gas phase</b>.</li>
            <li><b>SN1 is rare in the gas phase</b> because of the ion-pair separation barrier: the C–X bond breaks to give a <b>carbocation and an anion</b>, and their strong electrostatic attraction means a <b>high energy barrier</b>.</li>
            <li><b>SN2 is preferred</b> in computational studies.</li>
          </ul>
        ` },
        { title: 'Gas-phase SN2', html: `
          <p class="lead">What happens in a gas-phase SN2 reaction, Y<sup>−</sup> + RX:</p>
          <ol class="steps">
            <li>The nucleophile (Y<sup>−</sup>) and the substrate (RX) come together to form a stable <b>ion–dipole complex (ID1)</b>.</li>
            <li>The nucleophile attacks the central carbon from the <b>backside</b>, pushing the leaving group (X<sup>−</sup>) out, through a <b>single transition state (TS)</b>.</li>
            <li>An <b>exit ion–dipole complex (ID2)</b> forms before the final separation into products.</li>
          </ol>
          <p>The PES has a <b>double-well shape</b>: two valleys (ID1 and ID2) and one peak (the TS). This shape is universal for SN2 reactions in the gas phase.</p>
          <figure data-fig="m5-sn2-profile"></figure>
          <div data-viz="sn2-path"></div>
        ` },
        { title: 'Effect of solvent', html: `
          <div class="vs">
            <div class="side"><h4>In the gas phase</h4><p>Reactions are very <b>fast</b> because there is no solvent stabilisation, but they are <b>hard to control</b> and to make selective.</p></div>
            <div class="side"><h4>In solution (e.g. water)</h4><p>The rate can drop by <b>up to 20 orders of magnitude</b>. Solvation stabilises the nucleophile (e.g. Cl<sup>−</sup>) but does not stabilise the TS as well, so the barrier is <b>higher</b>.</p></div>
          </div>
          <p>The slide figure shows calculated HF/6-31G* gas-phase energies (dashed curve) against the potential of mean force in aqueous solution (solid curve).</p>
        ` },
        { title: 'Ketone enolization', html: `
          <p class="lead">Ketone enolization is the mechanism worked through computational chemistry on the slides: from the <b>keto form</b> to the <b>enol form</b>, finding the possible pathways, intermediates and transition states.</p>
          <figure data-fig="m5-enolization"></figure>
          <h3>What calculations contribute</h3>
          <ul>
            <li><b>Geometry optimisation</b> locates candidate keto, enol, ionic and proton-transfer structures.</li>
            <li><b>Frequency analysis</b> classifies minima (zero imaginary modes) and candidate transition states (one imaginary mode).</li>
            <li><b>IRC or pathway checks</b> connect a transition state to the intended structures.</li>
          </ul>
          <h3>Mechanistic questions to test</h3>
          <ul>
            <li>Direct intramolecular proton transfer against acid- or base-assisted routes.</li>
            <li>Which proton-transfer steps are rate-limiting, and whether a discrete intermediate exists.</li>
            <li>How the catalyst, molecular geometry and hydrogen bonding change the pathway.</li>
          </ul>
        ` },
        { title: 'Gas and solution phase', html: `
          <p class="lead">The same enolization can be modelled in the gas phase or in solution.</p>
          <div class="vs">
            <div class="side"><h4>Gas phase</h4><ul><li>A <b>baseline</b> without bulk-solvent stabilisation.</li><li>Reveals <b>intrinsic proton-transfer pathways</b> and conformational effects.</li><li>Charge-separated structures may be relatively costly; results depend on whether a catalyst or explicit molecule is included.</li></ul></div>
            <div class="side"><h4>Solution phase</h4><ul><li>Model the bulk solvent with an <b>implicit model</b> (SMD or PCM); add <b>explicit solvent molecules</b> when specific H-bonds or proton shuttles matter.</li><li>Solvation can stabilise ions and polar transition states, changing relative barriers and pathway preference.</li><li>Solvent effects are system-dependent; the barrier does not always decrease.</li></ul></div>
          </div>
        ` }
      ],
      flashcards: [
        { front: 'Steps to compute a reaction mechanism?', back: '<b>Optimise reactants and products, propose steps, find the TS, trace the IRC, build the energy profile</b>.' },
        { front: 'How do you recognise a transition state computationally?', back: 'It generally has <b>one imaginary frequency</b>.' },
        { front: 'What does the IRC trace?', back: 'The path from the <b>TS to the products</b> and from the <b>TS to the reactants</b>.' },
        { front: 'Quantities read from the energy profile?', back: '<b>E<sub>a</sub>, ΔE and ΔG</b>.' },
        { front: 'SN1 vs SN2 bond breaking and forming?', back: 'SN1: <b>breaks first, then forms</b>. SN2: <b>simultaneous</b>.' },
        { front: 'Why is SN1 rare in the gas phase?', back: 'Separating carbocation and anion has a <b>high barrier</b> (strong electrostatic attraction).' },
        { front: 'Shape of the gas-phase SN2 PES?', back: '<b>Double well</b>: ID1 and ID2 valleys, one TS peak.' },
        { front: 'Effect of water on SN2 rate?', back: 'Can drop by <b>up to 20 orders of magnitude</b>: solvation stabilises the nucleophile more than the TS.' },
        { front: 'Keto and enol forms?', back: 'Keto: <b>R–CO–CH<sub>2</sub>R′</b>. Enol: <b>R–C(OH)=CHR′</b>, interconverting with H<sup>+</sup> or base.' },
        { front: 'How is solvent modelled in solution?', back: '<b>Implicit</b> models (SMD, PCM), plus <b>explicit</b> solvent molecules when H-bonds or proton shuttles matter.' }
      ],
      oneLiners: [
        'Mechanism workflow: optimise, propose steps, find the TS, trace the IRC, build the energy profile.',
        'A transition state generally has one imaginary frequency; the IRC links it to reactants and products.',
        'Nucleophilic reactions: substitution (SN1, SN2), addition, and addition–elimination.',
        'SN2 is the preferred computational model; SN1 is rare in the gas phase.',
        'Gas-phase SN2: ion–dipole complex, single transition state, exit complex (double-well PES).',
        'Solvent can slow SN2 by up to 20 orders of magnitude.',
        'Enolization is studied by optimising structures, calculating frequencies, checking the IRC and comparing energies.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm5-ai-ml-screening',
      title: "Application of AI to screen semiconductors",
      short: "AI & ML screening",
      blurb: 'How AI and machine learning combine with computational chemistry, AI-driven screening, the properties used for semiconductors and the six-step workflow.',
      source: 'Slides 49–51',
      tabs: [
        { title: 'Computational chemistry and AI/ML', html: `
          <p class="lead">Physics-based computational chemistry and data-driven AI/ML complement each other.</p>
          <table class="tbl">
            <thead><tr><th>Approach</th><th>How it works</th><th>Character</th></tr></thead>
            <tbody>
              <tr><td><b>Computational chemistry</b></td><td>Physics-based methods to investigate chemical systems</td><td>High accuracy but slow</td></tr>
              <tr><td><b>AI/ML</b></td><td>Data-driven: learns patterns and makes predictions</td><td>Fast but data dependent</td></tr>
              <tr><td><b>Combined</b></td><td>Both together</td><td><b>Accuracy with speed</b></td></tr>
            </tbody>
          </table>
          <h3>What AI/ML adds to computational chemistry</h3>
          <ul>
            <li>Faster prediction of molecular properties (energy, spectra, geometry).</li>
            <li>Faster reaction pathway analysis, giving efficient molecular dynamics simulations.</li>
            <li>Drug discovery and material design, prediction of biological activity.</li>
            <li>Acceleration of quantum chemistry methods: prediction of wavefunctions or electron densities.</li>
          </ul>
        ` },
        { title: 'AI-driven screening', html: `
          <p class="lead"><b>AI-driven screening</b> uses existing <b>materials data</b> and trained <b>machine-learning models</b> to predict the properties of potential new materials. AI/ML makes the process faster and more systematic.</p>
          <div class="chips"><span class="chip">Data</span><span class="chip">AI model</span><span class="chip">Decision / prediction</span></div>
          <h3>Properties used in semiconductor screening</h3>
          <table class="tbl">
            <thead><tr><th>Property</th><th>Significance</th></tr></thead>
            <tbody>
              <tr><td><b>Band gap</b></td><td>Minimum photon energy needed to excite electrons between bands</td></tr>
              <tr><td><b>Band-edge positions</b></td><td>Whether the material suits electronic contacts, photocatalysis or solar-energy conversion</td></tr>
              <tr><td><b>Carrier mobility</b></td><td>How readily electrons or holes move through the material</td></tr>
              <tr><td><b>Optical absorption</b></td><td>How well the material absorbs light at different wavelengths</td></tr>
              <tr><td><b>Structural stability</b></td><td>Whether the crystal structure is energetically or dynamically viable</td></tr>
              <tr><td><b>Defect properties</b></td><td>How vacancies, impurities and dopants affect electronic behaviour</td></tr>
              <tr><td><b>Thermal stability</b></td><td>Whether the material keeps its properties under operating conditions</td></tr>
              <tr><td><b>Elemental abundance and toxicity</b></td><td>Cost, availability and environmental suitability</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'The workflow', html: `
          <p class="lead">Screening follows six steps, from the goal to checking the result.</p>
          <figure data-fig="m5-ml-workflow"></figure>
          <ol class="steps">
            <li><b>Object or goal defining.</b> Select the required application and properties.</li>
            <li><b>Data collection.</b> Obtain reliable material structures and properties from databases, publications or computational calculations.</li>
            <li><b>Data preparation.</b> Remove duplicates, standardise units, deal with missing values and prepare suitable material descriptors.</li>
            <li><b>Model training.</b> Use known examples to teach the model how composition and structure relate to properties.</li>
            <li><b>Candidate screening.</b> Predict properties for materials not yet examined and rank them against the screening criteria.</li>
            <li><b>Validation of prediction.</b> Run high-level theoretical or computational calculations where appropriate, and experimental measurements, before drawing conclusions.</li>
          </ol>
          <h3>Common methods</h3>
          <div class="chips"><span class="chip">linear regression</span><span class="chip">random forest</span><span class="chip">gradient boosting</span><span class="chip">neural networks</span><span class="chip">graph neural networks</span><span class="chip">active learning</span></div>
          <h3>Advantages</h3>
          <div class="chips"><span class="chip">speed</span><span class="chip">reduced computational cost</span><span class="chip">efficient exploration</span></div>
        ` }
      ],
      flashcards: [
        { front: 'Computational chemistry vs AI/ML?', back: 'Computational chemistry: physics-based, <b>accurate but slow</b>. AI/ML: data-driven, <b>fast but data dependent</b>.' },
        { front: 'Benefit of combining them?', back: '<b>Accuracy with speed</b>.' },
        { front: 'What is AI-driven screening?', back: 'Using existing <b>materials data</b> and trained <b>ML models</b> to predict properties of potential new materials.' },
        { front: 'Why does band gap matter for a semiconductor?', back: 'It sets the <b>minimum photon energy</b> needed for electronic excitation between bands.' },
        { front: 'What do band-edge positions tell you?', back: 'Suitability for <b>electronic contacts, photocatalysis or solar-energy conversion</b>.' },
        { front: 'Six steps of the screening workflow?', back: '<b>Goal, data collection, data preparation, model training, candidate screening, validation</b>.' },
        { front: 'What happens in data preparation?', back: 'Remove duplicates, <b>standardise units</b>, address missing values, prepare <b>descriptors</b>.' },
        { front: 'How should predictions be validated?', back: 'High-level <b>theoretical or computational calculations</b> and <b>experimental measurements</b>.' },
        { front: 'Name common ML methods for screening.', back: '<b>Linear regression, random forest, gradient boosting, neural networks, graph neural networks, active learning</b>.' }
      ],
      oneLiners: [
        'Computational chemistry is accurate but slow; AI/ML is fast but data dependent; together they give accuracy with speed.',
        'AI-driven screening predicts properties of new materials from existing data with trained models.',
        'Semiconductor screening looks at band gap, band edges, mobility, absorption, stability, defects and abundance.',
        'Workflow: goal, data, preparation, training, screening, validation.',
        'Advantages: speed, lower computational cost, efficient exploration.'
      ],
      formulas: []
    }
  ],
  figures: [
    { id: 'm5-morse-harmonic', src: null, crop: null,
      caption: 'Potential energy against bond length: the Morse curve (steep repulsive wall, minimum at Rₑ, levelling off at the dissociation energy Dₑ) against the symmetric harmonic parabola, which matches it only near Rₑ.',
      alt: 'A Morse potential curve with a steep wall at short distance, a minimum at Re and a flat approach to a dashed dissociation line a height De above the minimum, overlaid with a dashed symmetric parabola touching the same minimum.' },
    { id: 'm5-hcn-hnc-profile', src: null, crop: null,
      caption: 'HCN → HNC energy profile, HCN taken as zero: raw ab initio barrier 219 and HNC 52.2 kJ mol⁻¹; after ZPE correction the barrier is 202 and HNC 49.7 kJ mol⁻¹.',
      alt: 'Energy level diagram with three steps, HCN at zero, the transition state high in the middle and HNC slightly above HCN, drawn twice: solid for raw energies 219 and 52.2, dashed for ZPE-corrected 202 and 49.7.' },
    { id: 'm5-pec-diatomic', src: null, crop: null,
      caption: 'Potential energy against bond length for a diatomic AB: the minimum is at the equilibrium bond length Re, De is the well depth, and the harmonic parabola matches the real curve only near the minimum.',
      alt: 'A U-shaped curve of potential energy against R with its minimum at Re, rising steeply on the left and levelling off to a dashed line on the right with the depth De marked, and a dashed parabola hugging the minimum.' },
    { id: 'm5-pes-contours', src: null, crop: null,
      caption: 'A PES seen from above as contours: two valleys (reactant and product minima) joined by a pass, the saddle point, which is the transition state.',
      alt: 'Contour map with concentric rings around a reactant and a product on the left and right, curved contour lines above and below the centre, and a dashed arrow along the path through the saddle point.' },
    { id: 'm5-geometry-loop', src: null, crop: null,
      caption: 'The geometry optimisation loop: guess a structure, calculate energy and force, move the atoms, and repeat until the force is about zero and the energy change is within tolerance.',
      alt: 'Flow chart: Initial structure guess, Energy and force on atoms, Move atoms to lower energy, then a decision box asking whether force is about zero; yes leads to Optimised geometry, no loops back up to the energy and force box.' },
    { id: 'm5-water-normal-modes', src: null, crop: null,
      caption: 'The three normal modes of water: symmetric stretch, bend and asymmetric stretch. All atoms move together at one frequency in each mode.',
      alt: 'Three small water molecules with orange arrows on the hydrogens: both moving outward, both moving up, and one moving outward while the other moves inward.' },
    { id: 'm5-ts-vs-intermediate', src: null, crop: null,
      caption: 'A two-step reaction profile: each peak is a transition state (one imaginary frequency, a saddle point) and the dip between them is an intermediate (no imaginary frequency, a local minimum).',
      alt: 'Energy against reaction coordinate curve with two peaks labelled TS and a valley between them labelled Intermediate, starting at Reactants and ending at Products.' },
    { id: 'm5-mechanism-workflow', src: null, crop: null,
      caption: 'Computing a mechanism: optimise reactants and products, propose steps, find the transition state, trace the IRC, then build the energy profile.',
      alt: 'Five stacked boxes joined by downward arrows: Optimise, Propose steps, Find the transition state, Trace the IRC, Build the energy profile.' },
    { id: 'm5-sn2-profile', src: null, crop: null,
      caption: 'Gas-phase SN2 profile with two ion-dipole wells (ID1, ID2) and one transition state, compared with the single much higher barrier the reaction has in water.',
      alt: 'Energy against reaction coordinate: a blue curve with a well, a small peak labelled TS and a second well, and a dashed orange curve with one high peak over the same range.' },
    { id: 'm5-enolization', src: null, crop: null,
      caption: 'Keto and enol forms interconvert with acid or base; the typical workflow proposes structures, optimises them, calculates frequencies, verifies the TS connectivity and compares energies.',
      alt: 'Two boxes, R-CO-CH2R-prime and R-C(OH)=CHR-prime, joined by a double arrow labelled H plus or base, with a five-step workflow list below.' },
    { id: 'm5-ml-workflow', src: null, crop: null,
      caption: 'AI-driven screening workflow: define the goal, collect data, prepare data, train the model, screen candidates, and validate the predictions.',
      alt: 'Six stacked boxes joined by downward arrows: Define the goal, Collect data, Prepare data, Train the model, Screen candidates and Validate.' }
  ]
});
