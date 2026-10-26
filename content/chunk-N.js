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
        { front: 'Colours in an MEP map?', back: '<b>Red negative</b> (electron-rich, nucleophilic), <b>blue positive</b> (electron-deficient, electrophilic).' }
      ],
      oneLiners: [
        'A PEC plots energy against internuclear distance; its minimum is the equilibrium bond distance.',
        'All real bonds are anharmonic; the harmonic approximation only fits near the minimum.',
        'A PES gives energy as a function of nuclear coordinates: 3N − 6 vibrations (3N − 5 if linear).',
        'A diatom has a 2-D curve, a triatomic a 3-D surface and larger molecules a hypersurface.',
        'Saddle points on the PES are transition states; the minimum energy path joins reactants to products.',
        'Negative ESP (red) marks electron-rich nucleophilic sites; positive ESP (blue) marks electrophilic sites.'
      ],
      formulas: [
        { name: 'Potential energy surface', html: `E = f(R<sub>1</sub>, R<sub>2</sub>, … R<sub>N</sub>)`, note: 'R<sub>i</sub> = i-th nuclear coordinate.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm5-geometry-frequency',
      title: 'Geometry optimisation and frequency calculations',
      short: 'Geometry & frequency',
      blurb: 'The geometry optimisation workflow, vibrational frequency under the harmonic approximation, the number of modes, calculated frequencies, and telling an intermediate from a transition state.',
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
        { front: 'Major application of calculated frequencies?', back: '<b>IR spectra</b>: determination, prediction and explanation.' }
      ],
      oneLiners: [
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
        { name: 'Harmonic frequency', html: `ν = (1/2π) √(k/μ)`, note: 'k = force constant, μ = reduced mass.' }
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
