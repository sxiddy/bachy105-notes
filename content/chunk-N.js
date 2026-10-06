CHUNK({
  chunk: 'N',
  module: 'm5',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm5-orbital-overlap',
      title: 'Orbital interaction and chemical bonding',
      short: 'Orbital overlap',
      blurb: 'p–p and s–p overlap giving bonding and antibonding orbitals, and orbital overlap in H₂, BeH₂, BF₃, CH₄, NH₃ and ethane.',
      source: 'Pages 47–56',
      tabs: [
        { title: 'p–p and s–p overlap', html: `
          <p class="lead">When two atomic orbitals overlap, they form a <b>bonding</b> and an <b>antibonding</b> molecular orbital. The type of overlap sets the type of bond.</p>
          <figure data-fig="m5-orbital-overlap"></figure>
          <div class="vs">
            <div class="side"><h4>p–p overlap</h4><p>Two p orbitals overlap to give a bonding and an antibonding orbital. Head-on overlap along the bond axis gives σ and σ*; sideways overlap gives π and π*.</p></div>
            <div class="side"><h4>s–p overlap</h4><p>An s orbital overlapping a p orbital gives a σ bonding orbital (in-phase) and a σ* antibonding orbital (out-of-phase).</p></div>
          </div>
          <div class="note heads-up"><p>These slides are mostly figures (after J. D. Lee). The σ and π labels are the standard naming for the overlaps drawn.</p></div>
        ` },
        { title: 'Simple molecules', html: `
          <p class="lead">The slides step up in size, using overlap of the valence orbitals to explain each shape.</p>
          <table class="tbl">
            <thead><tr><th>Molecule</th><th>Shape</th><th>Overlap shown</th></tr></thead>
            <tbody>
              <tr><td><b>H<sub>2</sub></b> (diatomic)</td><td>Linear</td><td>Two H atoms approach and an electron pair forms the bond (1s–1s)</td></tr>
              <tr><td><b>BeH<sub>2</sub></b> (triatomic)</td><td>Linear</td><td>1s of hydrogen with 2s of beryllium</td></tr>
              <tr><td><b>BF<sub>3</sub></b></td><td>Trigonal planar</td><td>Overlap of boron 2p/2s-derived orbitals with fluorine</td></tr>
              <tr><td><b>CH<sub>4</sub></b></td><td>Tetrahedral</td><td>2s (hybrid) of carbon with 1s of hydrogen</td></tr>
              <tr><td><b>NH<sub>3</sub></b></td><td>Trigonal pyramidal</td><td>2sp (hybrid) of nitrogen with 1s of hydrogen</td></tr>
              <tr><td><b>Ethane</b></td><td>Two tetrahedral carbons</td><td>C–C bond and C–H bonds</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>The shape of a molecule follows from which orbitals overlap and in what direction. Four equivalent C–H overlaps point to the corners of a tetrahedron; the lone pair on nitrogen pushes NH<sub>3</sub> into a pyramid.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'What forms when two atomic orbitals overlap?', back: 'A <b>bonding</b> and an <b>antibonding</b> molecular orbital.' },
        { front: 'Shape of BeH<sub>2</sub>, BF<sub>3</sub>, CH<sub>4</sub>, NH<sub>3</sub>?', back: '<b>Linear, trigonal planar, tetrahedral, trigonal pyramidal</b>.' },
        { front: 'Which orbitals overlap in CH<sub>4</sub>?', back: 'Carbon <b>2s (hybrid)</b> with hydrogen <b>1s</b>.' },
        { front: 'Which orbitals overlap in BeH<sub>2</sub>?', back: 'Beryllium <b>2s</b> with hydrogen <b>1s</b>; the molecule is linear.' },
        { front: 'What does p–p head-on overlap give?', back: 'A <b>σ</b> bonding and a <b>σ*</b> antibonding orbital.' }
      ],
      oneLiners: [
        'Overlap gives a bonding and an antibonding orbital.',
        'BeH2 linear, BF3 trigonal planar, CH4 tetrahedral, NH3 trigonal pyramidal.',
        'In ethane the C–C bond and the C–H bonds are all formed by orbital overlap.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm5-potential-energy-surface',
      title: 'Potential energy curves, surfaces and electrostatic potential',
      short: 'PES & ESP',
      blurb: 'Potential energy curve for a diatomic, harmonic and anharmonic models, surfaces and hypersurfaces, stationary points and the electrostatic potential.',
      source: 'Pages 57–68',
      tabs: [
        { title: 'Potential energy curve', html: `
          <p class="lead">A <b>potential energy curve (PEC)</b> is the relationship between a molecule's energy and its geometry (the positions of its atoms), drawn as a graph or equation.</p>
          <ul>
            <li>Potential energy is the energy an object has due to its relative position. <b>Chemical potential energy</b> is energy stored in bonds.</li>
            <li>In quantum chemistry it is the energy associated with the positions of atoms and molecules.</li>
            <li>Uses: understanding molecular interactions and reactions, predicting reaction rate, optimising molecular structure, molecular dynamics simulations.</li>
          </ul>
          <h3>Diatomic molecule AB</h3>
          <ul>
            <li>Picture the molecule as <b>balls and a spring</b>. Stretching or compressing the bond changes the potential energy.</li>
            <li>R<sub>e</sub> is the <b>equilibrium bond length</b>, the minimum of the curve.</li>
            <li>A molecule can never be stationary at zero potential energy.</li>
          </ul>
          <div class="vs">
            <div class="side"><h4>Harmonic oscillator</h4><p>Potential energy is a <b>parabola</b> in the displacement from equilibrium.</p><div class="eq">V = ½ k (R − R<sub>e</sub>)<sup>2</sup></div></div>
            <div class="side"><h4>Anharmonic oscillator</h4><p>Real molecules <b>deviate from a perfect parabola</b>.</p><div class="eq">V = D<sub>e</sub> (1 − e<sup>−a(R − R<sub>e</sub>)</sup>)<sup>2</sup></div></div>
          </div>
          <p>The slides show curves for <b>H<sub>2</sub></b> and <b>HCl</b>.</p>
          <figure data-fig="m5-pec-diatomic"></figure>
        ` },
        { title: 'Surface & hypersurface', html: `
          <p class="lead">A <b>potential energy surface (PES)</b> shows how energy changes with atomic positions. It looks like a terrain of <b>hills and valleys</b>.</p>
          <figure data-fig="m5-pes-contours"></figure>
          <ul>
            <li>It helps identify <b>transition states and intermediates</b>, predict rate, find the most stable configuration and trace the energy pathway.</li>
            <li>One variable (H<sub>2</sub>: a single bond length) gives a <b>2D curve</b>.</li>
            <li><b>Water</b>: one O–H length (both equal) plus one bond angle = <b>two parameters</b>. This is a 2D object but needs a <b>3D graph</b> once energy is added. That graph is a PES.</li>
            <li><b>HOF</b>: three parameters (O–H length, O–F length, H–O–F angle) need a <b>4D</b> graph, which cannot be drawn. It is a <b>potential energy hypersurface</b>, E = f(q<sub>1</sub>, q<sub>2</sub>, … q<sub>n</sub>).</li>
          </ul>
          <h3>Stationary points</h3>
          <p>A <b>stationary point</b> is where the surface is flat. Two kinds matter: <b>energy minima</b> and <b>saddle points</b>. The lowest-energy path connecting reactant, product and the <b>transition state</b> shows the barrier (the slides use ozone and isoozone as the example).</p>
        ` },
        { title: 'Electrostatic potential', html: `
          <p class="lead">The <b>electrostatic potential (ESP)</b> measures charge distribution. It is the energy needed to bring a unit positive charge (e.g. a proton) from infinity to a point P.</p>
          <ul>
            <li>It shows how molecules interact, which atoms attract or repel, the overall charge distribution, and the <b>reactive sites</b>.</li>
            <li>ESP maps show <b>electron-rich and electron-poor</b> regions. In the ammonia map, <b>red is negative, blue is positive</b>.</li>
            <li><b>Negative ESP</b> at P: a positive charge is attracted to it.</li>
            <li><b>Positive ESP</b> at P: a positive charge is repelled.</li>
          </ul>
          <div class="eq" data-label="Total ESP at point P">V<sub>P</sub><sup>tot</sup> = V<sub>P</sub><sup>nuc</sup> + V<sub>P</sub><sup>el</sup> = Σ<sub>A</sub> <span class="frac"><span>Z<sub>A</sub></span><span>|r<sub>P</sub> − r<sub>A</sub>|</span></span> − ∫ <span class="frac"><span>ρ(r)</span><span>|r<sub>P</sub> − r|</span></span> dr</div>
          <div class="kv">
            <div><span>V</span><b>potential</b></div>
            <div><span>P</span><b>point</b></div>
            <div><span>Z<sub>A</sub></span><b>charge of nucleus A</b></div>
            <div><span>r</span><b>distance</b></div>
            <div><span>ρ</span><b>electron (charge) density</b></div>
          </div>
          <p>The ESP of a point is the effect of the <b>positive nuclei plus the negative electrons</b>. The slide's table shows the ESP barely changes with the theory and basis set used.</p>
        ` }
      ],
      flashcards: [
        { front: 'What is a potential energy curve?', back: 'Molecular <b>energy against geometry</b> (atomic positions).' },
        { front: 'Harmonic oscillator potential?', back: '<b>V = ½k(R − R<sub>e</sub>)<sup>2</sup></b>, a parabola.' },
        { front: 'Anharmonic (Morse-type) potential?', back: '<b>V = D<sub>e</sub>(1 − e<sup>−a(R−R<sub>e</sub>)</sup>)<sup>2</sup></b>.' },
        { front: 'Why does water need a 3D graph for its PES?', back: 'Two parameters (O–H length, H–O–H angle) plus energy.' },
        { front: 'What is a hypersurface?', back: 'A PES with <b>three or more</b> geometric parameters, e.g. HOF (4D).' },
        { front: 'Two kinds of stationary point?', back: '<b>Energy minimum</b> and <b>saddle point</b> (transition state).' },
        { front: 'Define electrostatic potential.', back: 'Energy to bring a <b>unit positive charge from infinity</b> to a point.' },
        { front: 'Colours in an ESP map?', back: '<b>Red negative</b>, <b>blue positive</b>.' }
      ],
      oneLiners: [
        'PEC = energy vs geometry; its minimum is the equilibrium bond length Re.',
        'Harmonic is a parabola; real molecules are anharmonic.',
        'H2 has a 2D curve, water a 3D surface, HOF a 4D hypersurface.',
        'Stationary points are minima or saddle points; the saddle is the transition state.',
        'ESP shows electron-rich (negative) and electron-poor (positive) regions and reactive sites.'
      ],
      formulas: [
        { name: 'Harmonic oscillator', html: `V = ½ k (R − R<sub>e</sub>)<sup>2</sup>`, note: '' },
        { name: 'Anharmonic oscillator', html: `V = D<sub>e</sub> (1 − e<sup>−a(R − R<sub>e</sub>)</sup>)<sup>2</sup>`, note: '' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm5-geometry-frequency',
      title: 'Geometry optimisation and frequency calculations',
      short: 'Geometry & frequency',
      blurb: 'Finding stationary points, why the starting structure matters, applications, vibrational modes (3N−5 and 3N−6), frequency calculation and telling minima, transition states and hilltops apart.',
      source: 'Pages 69–79',
      tabs: [
        { title: 'Geometry optimisation', html: `
          <p class="lead">Characterising a <b>stationary point</b> on the PES is <b>geometry optimisation</b>. The stationary point can be a minimum, a transition state or a saddle point.</p>
          <ol class="steps">
            <li><b>Input structure</b> close to a possible stationary structure.</li>
            <li><b>Change geometry</b>: the computer changes the geometry until it finds a stationary point.</li>
            <li><b>Many small steps</b>: each time the bond lengths and angles change a little. It cannot be done in one step.</li>
          </ol>
          <ul>
            <li>It finds the <b>minimum potential energy structure</b>.</li>
            <li>The start matters: an initial structure closer to one isomer gives that isomer. The same input does <b>not</b> always lead to the same stationary point. A good input is needed to reach the nearest <b>global minimum</b>.</li>
            <li>Three kinds of stationary point: <b>hilltop</b> (at most a maximum), <b>transition state</b>, and <b>minimum</b> (local minimum energy). Propane conformers are the slide example of conformer analysis.</li>
          </ul>
          <h3>Why it is needed</h3>
          <div class="chips"><span class="chip">accurate bond lengths, angles and dipole moments</span><span class="chip">reaction mechanism</span><span class="chip">reaction energy and activation barrier</span><span class="chip">interpreting spectra</span><span class="chip">most stable structures</span><span class="chip">transition states and intermediates</span><span class="chip">designing stable drug molecules</span></div>
        ` },
        { title: 'Frequency', html: `
          <p class="lead"><b>Frequency</b> is the number of times a molecule vibrates per second. A frequency calculation checks what kind of stationary point optimisation found.</p>
          <ul>
            <li>It gives <b>vibrational frequencies</b>, thermodynamic properties (<b>entropy and enthalpy</b>), structure validation, and <b>IR and Raman spectra</b>.</li>
            <li>It identifies transition states, minima and hilltops, and helps build reaction mechanisms.</li>
            <li><b>Normal modes:</b> all atoms move together in a synchronised way, reaching maximum and minimum displacement and passing through equilibrium at the same time. Each mode has one frequency.</li>
          </ul>
          <div class="vs">
            <div class="side"><h4>Linear molecule</h4><div class="eq">3N − 5 modes</div></div>
            <div class="side"><h4>Non-linear molecule</h4><div class="eq">3N − 6 modes</div></div>
          </div>
          <p>N is the number of atoms.</p>
          <figure data-fig="m5-water-normal-modes"></figure>
          <div class="worked"><div class="given"><p>How many normal modes does water have?</p></div>
          <div class="solve"><p>Water is non-linear with N = 3.</p><div class="eq">3(3) − 6 = 3</div></div>
          <div class="result"><b>3 normal modes</b></div></div>
        ` },
        { title: 'Computing frequencies', html: `
          <p class="lead">Frequencies come from <b>force constants and atomic masses</b>. The force constant is the <b>second derivative of energy</b> with respect to geometric position.</p>
          <div class="eq" data-label="Diatomic molecule">ν̃ = <span class="frac"><span>1</span><span>2πc</span></span> (<span class="frac"><span>k</span><span>μ</span></span>)<sup>1/2</sup></div>
          <div class="kv">
            <div><span>c</span><b>velocity of light</b></div>
            <div><span>k</span><b>vibration force constant</b></div>
            <div><span>μ</span><b>reduced mass = m<sub>A</sub>m<sub>B</sub>/(m<sub>A</sub> + m<sub>B</sub>)</b></div>
          </div>
          <div class="eq" data-label="Force constant">k = d<sup>2</sup>E / dq<sup>2</sup> (the curvature, E = ½kq<sup>2</sup>)</div>
          <ul>
            <li>The method approximates a <b>harmonic oscillator</b> and solves the Schrödinger equation.</li>
            <li>A <b>high k</b> means a stiffer bond.</li>
            <li>Real molecules are polyatomic, so the full calculation handles many coupled modes.</li>
            <li>Computed IR spectra can be compared with experiment, as done for the three normal modes of ammonia.</li>
          </ul>
        ` },
        { title: 'Reading the frequencies', html: `
          <p class="lead">Count the <b>imaginary (negative) frequencies</b> to know what you found.</p>
          <table class="tbl">
            <thead><tr><th>Stationary point</th><th>Imaginary frequencies</th></tr></thead>
            <tbody>
              <tr><td><b>Energy minimum</b></td><td><b>None</b> (all frequencies real; the structure vibrates stably)</td></tr>
              <tr><td><b>Transition state</b></td><td><b>Exactly one</b></td></tr>
              <tr><td><b>Hilltop</b></td><td><b>More than one</b></td></tr>
            </tbody>
          </table>
          <h3>Criteria for a transition state</h3>
          <ol>
            <li>The model lies <b>between reactant and product</b>.</li>
            <li>There is <b>only one imaginary frequency</b>.</li>
            <li>The animation of that mode is clear (it moves the structure from reactant towards product).</li>
            <li>Its energy is <b>higher than both</b> reactant and product.</li>
          </ol>
          <div class="note why"><p>A negative curvature means the surface bends down along that direction, so the structure falls away rather than vibrating. One downhill direction is the reaction path (transition state). Two or more downhill directions is a hilltop.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'What is geometry optimisation?', back: 'Adjusting atomic positions in small steps until a <b>stationary point</b> (usually a minimum) is found.' },
        { front: 'Does the starting structure matter?', back: '<b>Yes.</b> A start near an isomer gives that isomer; a good input reaches the nearest global minimum.' },
        { front: 'Number of normal modes?', back: '<b>3N − 5</b> (linear), <b>3N − 6</b> (non-linear).' },
        { front: 'Normal modes of water?', back: '<b>3</b>.' },
        { front: 'Frequency of a diatomic?', back: '<b>ν̃ = (1/2πc)√(k/μ)</b>, μ = reduced mass.' },
        { front: 'Force constant is what derivative?', back: 'The <b>second derivative of energy</b> with position.' },
        { front: 'Imaginary frequencies at a minimum, transition state, hilltop?', back: '<b>Zero, one, more than one</b>.' },
        { front: 'Criteria for a transition state?', back: 'Between reactant and product, <b>one imaginary frequency</b>, clear animation, energy <b>higher than both</b>.' }
      ],
      oneLiners: [
        'Optimisation finds stationary points; a frequency calculation says which kind.',
        'Linear molecules have 3N − 5 vibrational modes, non-linear 3N − 6.',
        'ν̃ = (1/2πc)√(k/μ); a stiffer bond (larger k) vibrates faster.',
        'Minimum: no imaginary frequency. Transition state: one. Hilltop: more than one.',
        'A transition state lies above both reactant and product in energy.'
      ],
      formulas: [
        { name: 'Vibrational modes', html: `3N − 5 (linear), 3N − 6 (non-linear)`, note: 'N = number of atoms.' },
        { name: 'Diatomic frequency', html: `ν̃ = (1/2πc) √(k/μ)`, note: 'μ = m<sub>A</sub>m<sub>B</sub>/(m<sub>A</sub> + m<sub>B</sub>).' },
        { name: 'Harmonic energy', html: `E = ½ k q<sup>2</sup>`, note: 'k = d²E/dq².' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm5-reaction-mechanisms',
      title: 'Reaction mechanisms and SN2 reactions',
      short: 'Reaction mechanisms',
      blurb: 'What a reaction mechanism is, absolute reactivity and frontier orbitals, nucleophilic reactions, and computational insight into SN1 and SN2 in gas phase and solution.',
      source: 'Pages 80–85',
      tabs: [
        { title: 'Reaction mechanism', html: `
          <p class="lead">A <b>reaction mechanism</b> is a step-by-step sequence of <b>elementary reactions</b> that describes how reactants convert into products. It gives insight into <b>transition states, intermediates and energy barriers</b>.</p>
          <h3>Why study it</h3>
          <ul>
            <li>Predicts <b>reactivity and selectivity</b>.</li>
            <li>Helps design <b>catalysts</b> and optimise reactions.</li>
            <li>Computational methods (DFT, frontier orbital theory) give <b>quantitative insight</b>.</li>
          </ul>
        ` },
        { title: 'Absolute reactivity', html: `
          <p class="lead">A chemical system must overcome an <b>energetic barrier</b> before it can react.</p>
          <ol>
            <li><b>Energy barrier.</b> Needed to break bonds and overcome electron repulsion.</li>
            <li><b>Frontier orbital interactions.</b> Stabilising interactions lower the barrier.</li>
            <li><b>Symmetry.</b> Decides whether a reaction path is allowed or forbidden. If the frontier orbital overlap is zero, the reaction is <b>forbidden</b>.</li>
          </ol>
          <h3>Bimolecular reactions</h3>
          <p>Two molecules collide to form products (for example <b>cycloadditions</b>). Energy is needed to bring the two reactants together. The reaction is allowed if the frontier orbitals (<b>HOMO and LUMO</b>) have the <b>same symmetry</b>.</p>
        ` },
        { title: 'Nucleophilic reactions', html: `
          <p class="lead">Nucleophilic reactions involving anions are organic reactions where negatively charged species donate electron pairs to <b>electrophilic (+) carbon atoms</b>.</p>
          <table class="tbl">
            <thead><tr><th>Type</th><th>What happens</th></tr></thead>
            <tbody>
              <tr><td><b>SN1 and SN2</b> (substitution)</td><td>Nucleophile attacks an <b>sp<sup>3</sup> carbon</b>. SN1: the bond breaks first, then forms. SN2: bond breaking and forming are <b>simultaneous</b>.</td></tr>
              <tr><td><b>Addition</b></td><td>Nucleophile attacks an <b>sp<sup>2</sup> or sp carbon</b> (1,2- and 1,4-additions). The nucleophile adds, then the electrophile follows.</td></tr>
              <tr><td><b>Addition–elimination</b> (at carbonyls)</td><td>Common in <b>carboxylic acid derivatives</b>. The bond forms first, then the leaving group departs.</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'SN1 and SN2 by computer', html: `
          <p class="lead">SN1 and SN2 are the <b>first reactions taught</b> in organic chemistry and key models for mechanisms. They let you predict regioselectivity, stereoselectivity, rates and solvent effects.</p>
          <ul>
            <li>Most quantum calculations are done in the <b>gas phase</b>.</li>
            <li><b>SN1 is rare in the gas phase</b>: the C–X bond breaking gives a carbocation and an anion, whose strong electrostatic attraction means a <b>high energy barrier</b>.</li>
            <li>So <b>SN2 is preferred</b> in computational studies, and the models give deep insight into it.</li>
          </ul>
          <h3>Gas-phase SN2 (Y<sup>−</sup> + RX)</h3>
          <ol class="steps">
            <li><b>Ion–dipole complex ID1.</b> The nucleophile and substrate come together into a stable complex.</li>
            <li><b>Backside attack.</b> The nucleophile attacks the central carbon from the back, pushing the leaving group X<sup>−</sup> out, through a <b>single transition state (TS)</b>.</li>
            <li><b>Exit complex ID2.</b> An exit ion–dipole complex forms before separation into products.</li>
          </ol>
          <p>The PES has a <b>double-well shape</b>: two valleys (ID1 and ID2) and one peak (the TS). This shape is universal for gas-phase SN2.</p>
          <figure data-fig="m5-sn2-profile"></figure>
        ` },
        { title: 'Solvent effect', html: `
          <p class="lead">Solvent changes SN2 dramatically.</p>
          <div class="vs">
            <div class="side"><h4>Gas phase</h4><p>Reactions are very <b>fast</b>, with no solvent stabilisation, but hard to control and to make selective.</p></div>
            <div class="side"><h4>In solution (e.g. water)</h4><p>The rate can drop by <b>up to 20 orders of magnitude</b>. Solvation stabilises the nucleophile (e.g. Cl<sup>−</sup>) but stabilises the TS less, so the barrier is <b>higher</b>.</p></div>
          </div>
          <p>The slide compares calculated HF/6-31G* gas-phase energies with the potential of mean force in aqueous solution for the same reaction.</p>
        ` }
      ],
      flashcards: [
        { front: 'What is a reaction mechanism?', back: 'A step-by-step sequence of <b>elementary reactions</b> from reactants to products.' },
        { front: 'Three factors in absolute reactivity?', back: '<b>Energy barrier, frontier orbital interactions, symmetry</b>.' },
        { front: 'When is a reaction forbidden?', back: 'When frontier orbital overlap is <b>zero</b>.' },
        { front: 'SN1 vs SN2 bond breaking?', back: 'SN1: <b>breaks first, then forms</b>. SN2: <b>simultaneous</b>.' },
        { front: 'Why is SN1 rare in the gas phase?', back: 'Separating carbocation and anion has a <b>high barrier</b> (strong electrostatic attraction).' },
        { front: 'Shape of the gas-phase SN2 PES?', back: '<b>Double well</b>: ID1 and ID2 valleys, one TS peak.' },
        { front: 'Effect of water on SN2 rate?', back: 'Can drop by <b>up to 20 orders of magnitude</b>, since solvation stabilises the nucleophile more than the TS.' }
      ],
      oneLiners: [
        'A mechanism is a sequence of elementary steps with transition states and intermediates.',
        'Reactivity needs an energy barrier to be crossed, favourable frontier orbitals and allowed symmetry.',
        'SN2 is the preferred computational model; SN1 is rare in the gas phase.',
        'Gas-phase SN2: ion–dipole complex, single transition state, exit complex (double-well PES).',
        'Solvent can slow SN2 by up to 20 orders of magnitude.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm5-ai-ml-screening',
      title: 'AI and machine learning for semiconductor screening',
      short: 'AI & ML screening',
      blurb: 'AI and ML basics, supervised and unsupervised learning, applications in chemistry and the workflow for predicting band gaps of semiconductor materials.',
      source: 'Pages 86–90',
      tabs: [
        { title: 'AI and ML', html: `
          <p class="lead"><b>Artificial intelligence</b> is the simulation of human intelligence in machines that are programmed to think. <b>Machine learning</b> is a subset of AI that lets systems <b>learn from data</b> and improve over time without being explicitly programmed.</p>
          <ul>
            <li>ML makes <b>predictions or decisions</b> based on data.</li>
            <li><b>Supervised learning</b> uses <b>labelled</b> data.</li>
            <li><b>Unsupervised learning</b> uses <b>unlabelled</b> data.</li>
          </ul>
        ` },
        { title: 'Applications', html: `
          <div class="chips"><span class="chip">predicting material properties such as conductivity and stability</span><span class="chip">classifying huge numbers of materials against a requirement</span><span class="chip">accelerating drug design</span><span class="chip">generative models for novel compounds</span><span class="chip">reaction prediction and optimisation</span><span class="chip">spectroscopy and structural analysis</span><span class="chip">pollutant behaviour and degradation</span></div>
        ` },
        { title: 'Screening semiconductors', html: `
          <p class="lead">The aim is to <b>screen and identify the optimal semiconductor material</b> from a large database.</p>
          <figure data-fig="m5-ml-workflow"></figure>
          <ol class="steps">
            <li><b>Data.</b> Formation energy, lattice constants, density and total magnetisation.</li>
            <li><b>Target.</b> Band gap (eV).</li>
            <li><b>Train</b> models for classification, regression and clustering.</li>
            <li><b>Tune.</b> Hyperparameters are optimised to get the best model.</li>
            <li><b>Predict.</b> The top semiconductors, with their band gaps, are listed.</li>
          </ol>
          <p>The slide shows a feature-importance plot for an <b>XGBoost</b> model and the predicted top ten materials.</p>
        ` }
      ],
      flashcards: [
        { front: 'Define machine learning.', back: 'A subset of AI where systems <b>learn from data</b> and improve without explicit programming.' },
        { front: 'Supervised vs unsupervised learning?', back: '<b>Labelled</b> data vs <b>unlabelled</b> data.' },
        { front: 'Inputs and target in semiconductor screening?', back: 'Inputs: <b>formation energy, lattice constants, density, total magnetisation</b>. Target: <b>band gap (eV)</b>.' },
        { front: 'Which model appears in the slide?', back: '<b>XGBoost</b>, with a feature-importance plot.' }
      ],
      oneLiners: [
        'ML is a subset of AI that learns from data.',
        'Supervised uses labelled data; unsupervised uses unlabelled data.',
        'Semiconductor screening predicts band gap from formation energy, lattice constants, density and magnetisation.'
      ],
      formulas: []
    }
  ],
  figures: [
    { id: 'm5-orbital-overlap', src: null, crop: null,
      caption: 'Overlap of two orbitals gives a bonding and an antibonding MO. Head-on p-p overlap gives sigma and sigma-star, sideways p-p overlap gives pi and pi-star, and s-p overlap gives sigma and sigma-star. Blue and orange are opposite signs.',
      alt: 'Three rows of lobe drawings, each with a bonding picture on the left where same-sign lobes merge and an antibonding picture on the right with a dashed node between opposite-sign lobes.' },
    { id: 'm5-pec-diatomic', src: null, crop: null,
      caption: 'Potential energy against bond length for a diatomic AB: the minimum is at the equilibrium bond length Re, De is the well depth, and the harmonic parabola matches the real curve only near the minimum.',
      alt: 'A U-shaped curve of potential energy against R with its minimum at Re, rising steeply on the left and levelling off to a dashed line on the right with the depth De marked, and a dashed parabola hugging the minimum.' },
    { id: 'm5-pes-contours', src: null, crop: null,
      caption: 'A PES seen from above as contours: two valleys (reactant and product minima) joined by a pass, the saddle point, which is the transition state.',
      alt: 'Contour map with concentric rings around a reactant and a product on the left and right, curved contour lines above and below the centre, and a dashed arrow along the path through the saddle point.' },
    { id: 'm5-sn2-profile', src: null, crop: null,
      caption: 'Gas-phase SN2 profile with two ion-dipole wells (ID1, ID2) and one transition state, compared with the single much higher barrier the reaction has in water.',
      alt: 'Energy against reaction coordinate: a blue curve with a well, a small peak labelled TS and a second well, and a dashed orange curve with one high peak over the same range.' },
    { id: 'm5-water-normal-modes', src: null, crop: null,
      caption: 'The three normal modes of water: symmetric stretch, bend and asymmetric stretch. All atoms move together at one frequency in each mode.',
      alt: 'Three small water molecules with orange arrows on the hydrogens: both moving outward, both moving up, and one moving outward while the other moves inward.' },
    { id: 'm5-ml-workflow', src: null, crop: null,
      caption: 'Screening workflow: collect data, train models, tune them, predict the band gap of each material, and rank the best semiconductors.',
      alt: 'Five stacked boxes joined by downward arrows: Data, Train models, Tune, Predict and Rank.' }
  ]
});
