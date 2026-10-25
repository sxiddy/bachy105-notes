CHUNK({
  chunk: 'K',
  module: 'm3',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm3-ohm-resistivity',
      title: "Ohm's law and resistivity",
      short: "Ohm's law & resistivity",
      blurb: "How easily a solid carries current: V = IR, R = ρl/A, and the five factors that change resistivity.",
      source: 'Pages 1–2',
      tabs: [
        { title: "Ohm's law", html: `
          <p class="lead">One of the most important electrical properties of a solid is <b>how easily it carries an electric current</b>. Ohm's law measures that.</p>
          <div class="eq" data-label="Ohm's law">V = I R</div>
          <div class="kv">
            <div><span>V</span><b>potential difference (volts)</b></div>
            <div><span>I</span><b>current (amperes)</b></div>
            <div><span>R</span><b>resistance (ohms)</b></div>
          </div>
          <ul>
            <li>Ohm's law applies to most materials, <b>but not all</b>.</li>
            <li>R depends on the <b>specimen configuration</b> (size, shape) and on the <b>material properties</b>.</li>
            <li>For many materials R is independent of the current.</li>
          </ul>
        ` },
        { title: 'Resistivity', html: `
          <p class="lead">Resistance depends on the shape of the specimen. <b>Resistivity ρ</b> removes the shape and keeps only the material.</p>
          <div class="eq" data-label="Resistance">R = ρ <span class="frac"><span>l</span><span>A</span></span></div>
          <figure data-fig="m3-resistivity-geometry"></figure>
          <div class="eq" data-label="Resistivity">ρ = <span class="frac"><span>R A</span><span>l</span></span> = <span class="frac"><span>V A</span><span>I l</span></span></div>
          <div class="kv">
            <div><span>l</span><b>length (cm)</b></div>
            <div><span>A</span><b>cross-sectional area (cm<sup>2</sup>)</b></div>
            <div><span>ρ</span><b>electrical resistivity (Ω·cm)</b></div>
          </div>
          <h3>Factors affecting resistivity</h3>
          <div class="chips"><span class="chip">temperature</span><span class="chip">alloying</span><span class="chip">mechanical stress</span><span class="chip">age hardening</span><span class="chip">cold working</span></div>
          <div class="note why"><p>A longer wire resists more (l in the numerator). A thicker wire resists less (A in the denominator).</p></div>
        ` }
      ],
      flashcards: [
        { front: "State Ohm's law.", back: '<b>V = IR</b>. Applies to most, not all, materials.' },
        { front: 'Formula for resistance in terms of resistivity?', back: '<b>R = ρl/A</b>.' },
        { front: 'Formula for resistivity?', back: '<b>ρ = RA/l = VA/(Il)</b>.' },
        { front: 'Unit of resistivity in the slides?', back: '<b>Ω·cm</b> (with l and A in cm).' },
        { front: 'Five factors affecting resistivity?', back: '<b>Temperature, alloying, mechanical stress, age hardening, cold working</b>.' },
        { front: 'What does resistance R depend on?', back: 'Specimen <b>size and shape</b> and the <b>material</b>.' }
      ],
      oneLiners: [
        "Ohm's law: V = IR.",
        'R = ρl/A, so resistivity ρ = RA/l is a material property.',
        'Temperature, alloying, stress, age hardening and cold working change resistivity.',
        'Longer wire raises R; larger cross-section lowers it.'
      ],
      formulas: [
        { name: "Ohm's law", html: `V = I R`, note: '' },
        { name: 'Resistance and resistivity', html: `R = ρ l / A, ρ = R A / l`, note: 'ρ in Ω·cm when l is in cm and A in cm².' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm3-band-theory',
      title: 'Energy bands: conductors, semiconductors, insulators',
      short: 'Energy bands',
      blurb: 'How energy bands form in a solid, the valence band, conduction band and forbidden gap, and how the gap sorts materials into conductors, semiconductors and insulators.',
      source: 'Pages 3–9',
      tabs: [
        { title: 'Energy band theory', html: `
          <p class="lead">In an isolated atom, each orbit has a <b>definite energy</b>. In a solid the atoms sit close together, and that changes the picture.</p>
          <figure data-fig="m3-band-formation"></figure>
          <ul>
            <li>The outer-orbit levels are affected by the neighbouring atoms. Outer electrons interact or are shared, so an outer electron of one atom is attracted by the neighbouring nucleus.</li>
            <li>The levels shift <b>higher or lower</b> than the original, so electrons in the same orbit end up with <b>different</b> energies.</li>
            <li>The grouping of these different levels is an <b>energy band</b>.</li>
            <li><b>Inner-orbit</b> levels are hardly affected by neighbouring atoms.</li>
          </ul>
        ` },
        { title: 'Three bands', html: `
          <p class="lead">Three bands matter: valence band, conduction band and forbidden gap.</p>
          <div class="vs">
            <div class="side"><h4>Valence band</h4><ul><li>Formed by grouping the levels of the <b>valence (outermost) electrons</b>.</li><li>Lies <b>below</b> the conduction band.</li><li>Electrons have lower energy and are loosely bound to the nucleus.</li></ul></div>
            <div class="side"><h4>Conduction band</h4><ul><li>Formed by grouping the levels of the <b>free electrons</b>.</li><li>Generally <b>empty</b>. With external energy, valence electrons jump in and become free electrons.</li><li>Electrons have higher energy and are not bound to the nucleus.</li></ul></div>
            <div class="side"><h4>Forbidden gap</h4><ul><li>The <b>energy gap</b> between the valence and conduction bands.</li><li>No electron can have an energy inside it.</li></ul></div>
          </div>
        ` },
        { title: 'Three classes', html: `
          <p class="lead">The size of the forbidden gap decides whether a solid conducts.</p>
          <figure data-fig="m3-band-classes"></figure>
          <div data-viz="band-gap-picker"></div>
          <div class="vs">
            <div class="side"><h4>Conductor</h4><p>The conduction band <b>overlaps</b> the valence band: <b>no band gap</b>. A small potential difference moves many electrons into conduction.</p></div>
            <div class="side"><h4>Semiconductor</h4><p>Valence band full, conduction band empty, a very <b>small gap, about 1 eV</b>. A small potential difference lets electrons jump across.</p><p>Behaves as an <b>insulator at low or room temperature</b>. As T rises, more electrons cross and conductivity rises. A hole is left behind for each electron that jumps.</p></div>
            <div class="side"><h4>Insulator</h4><p>Conduction band empty, valence band full, a quite <b>large gap</b> (15 eV in the slides; +5 eV in the diagram). Electrons need a very high field to cross, so conductivity is almost zero.</p></div>
          </div>
          <div class="note heads-up"><p>The slides give the insulator gap three ways: +5 eV in the band diagram (with a 15 eV box pasted over it), 15 eV in the text, and E<sub>G</sub> &gt; 5 eV in the comparison table. The safe line is "wide, more than 5 eV".</p></div>
        ` },
        { title: 'Comparison table', html: `
          <table class="tbl">
            <thead><tr><th></th><th>Conductor</th><th>Insulator</th><th>Semiconductor</th></tr></thead>
            <tbody>
              <tr><td>Definition</td><td>Lets current through very easily</td><td>Does not let current through</td><td>Lets current through partially</td></tr>
              <tr><td>Free electrons</td><td>Many</td><td>None</td><td>Few</td></tr>
              <tr><td>Type</td><td>Good conductor</td><td>Bad conductor</td><td>Partial conductor</td></tr>
              <tr><td>Resistivity</td><td><b>10<sup>−8</sup> to 10<sup>−6</sup> Ω·m</b></td><td><b>10<sup>12</sup> to 10<sup>18</sup> Ω·m</b></td><td><b>10<sup>0</sup> to 10<sup>2</sup> Ω·m</b></td></tr>
              <tr><td>Conductivity</td><td>Very high</td><td>Negligible</td><td>Very low</td></tr>
              <tr><td>Valence electrons</td><td>Fewer than four</td><td>More than four</td><td>Equal to four</td></tr>
              <tr><td>Forbidden gap</td><td>None (E<sub>G</sub> = 0 eV)</td><td>Wide (E<sub>G</sub> &gt; 5 eV)</td><td>Narrow (about 1 eV)</td></tr>
              <tr><td>Energy to cross</td><td>Very little</td><td>Very high</td><td>High</td></tr>
              <tr><td>Temp. coefficient of resistance</td><td><b>Positive</b></td><td>Negative</td><td><b>Negative</b></td></tr>
              <tr><td>Examples</td><td>Cu, Al, W, Ag</td><td>Paper, wood, glass, plastics</td><td>Ge, Si, Se, C</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>The slide prints the semiconductor gap as "E<sub>G</sub> &gt; 5 eV", copied from the insulator column. Elsewhere in the same deck it is about 1 eV, which is what the table above shows.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'What is an energy band?', back: 'The <b>grouping of the different energy levels</b> that electrons take in a solid because neighbouring atoms interact.' },
        { front: 'Valence band vs conduction band?', back: 'Valence: levels of the <b>outermost electrons</b>, lower energy, usually full. Conduction: <b>free electrons</b>, higher energy, generally empty.' },
        { front: 'What is the forbidden gap?', back: 'The <b>energy gap</b> between the valence and conduction bands.' },
        { front: 'Band picture of a conductor?', back: 'Conduction band <b>overlaps</b> the valence band: <b>no gap</b>.' },
        { front: 'Gap of a semiconductor? Insulator?', back: 'Semiconductor <b>≈ 1 eV</b>. Insulator <b>wide (&gt; 5 eV; 15 eV in the slides)</b>.' },
        { front: 'Temperature coefficient of resistance: conductor vs semiconductor?', back: 'Conductor <b>positive</b>; semiconductor and insulator <b>negative</b>.' },
        { front: 'Resistivity ranges?', back: 'Conductor 10<sup>−8</sup>–10<sup>−6</sup>; semiconductor 10<sup>0</sup>–10<sup>2</sup>; insulator 10<sup>12</sup>–10<sup>18</sup> Ω·m.' },
        { front: 'Valence electrons in conductor, semiconductor, insulator?', back: '<b>Fewer than 4</b>, <b>equal to 4</b>, <b>more than 4</b>.' }
      ],
      oneLiners: [
        'Close atoms spread each level into an energy band; inner orbits barely change.',
        'Valence band is full and lower; conduction band is empty and higher; the forbidden gap lies between.',
        'Conductor: overlapping bands. Semiconductor: gap about 1 eV. Insulator: very wide gap.',
        'Semiconductors act as insulators at low temperature and conduct more as T rises.',
        'Conductors have a positive temperature coefficient of resistance; semiconductors a negative one.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm3-conducting-materials',
      title: 'Conducting materials: copper and aluminium',
      short: 'Copper & aluminium',
      blurb: 'Required properties of low-resistivity metals, effect of impurities, and the properties and uses of copper and aluminium including ACSR.',
      source: 'Pages 10–13',
      tabs: [
        { title: 'Requirements', html: `
          <p class="lead">Low-resistivity metals are used for <b>windings</b> in electrical machines, apparatus and devices, and as <b>conductors</b> in transmission and distribution.</p>
          <ol>
            <li>Highest possible <b>conductivity</b> (that is, lowest resistivity).</li>
            <li>Least <b>temperature coefficient of resistance</b>.</li>
            <li>High <b>melting point</b>.</li>
            <li>High <b>mechanical strength</b>.</li>
            <li>High <b>ductility</b>, so it can be drawn into wire.</li>
            <li>High <b>corrosion resistance</b> (free from oxidation).</li>
            <li><b>Solderability</b>.</li>
            <li>Low <b>cost</b>.</li>
            <li>Long <b>life</b>.</li>
            <li>High <b>flexibility</b>.</li>
          </ol>
          <p>The properties needed vary with the purpose.</p>
          <div class="note why"><p>Any impurity, metallic or not, and even one of low resistivity, <b>raises</b> the resistivity of a metal. It creates lattice imperfections that scatter electrons.</p></div>
          <figure data-fig="m3-metal-resistivity-temperature"></figure>
          <div class="note heads-up"><p>The slide asks for "highest possible conductivity (ideally zero)". Ideally zero is the target for resistivity and for the temperature coefficient, not for conductivity.</p></div>
        ` },
        { title: 'Comparing the metals', html: `
        <figure data-fig="m3-metal-resistivity-bars"></figure>
        <div data-viz="resistance-wire"></div>
          <table class="tbl">
            <thead><tr><th>Metal</th><th>Resistivity (µΩ·cm)</th><th>Temp. coefficient of resistance (/°C)</th></tr></thead>
            <tbody>
              <tr><td>Silver</td><td>1.58</td><td>0.0038</td></tr>
              <tr><td>Copper</td><td>1.68</td><td>0.00386</td></tr>
              <tr><td>Gold</td><td>2.21</td><td>0.0034</td></tr>
              <tr><td>Aluminium</td><td>2.65</td><td>0.00429</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Copper', html: `
          <p class="lead">The most widely used high-conductivity conductor for electrical machines and equipment. Its key properties are <b>malleability, weldability and solderability</b>.</p>
          <div class="kv">
            <div><span>Resistivity</span><b>1.68 µΩ·cm</b></div>
            <div><span>Temp. coefficient at 20 °C</span><b>0.00386 /°C</b></div>
            <div><span>Melting point</span><b>1085 °C</b></div>
            <div><span>Specific gravity</span><b>8.96 g/cm<sup>3</sup></b></div>
          </div>
          <p>Pure copper conducts well; standard-grade copper conducts less because of impurities.</p>
          <div class="vs">
            <div class="side"><h4>Hard-drawn copper</h4><p>High mechanical strength. Used for <b>high-voltage underground cable, bus bars and conductors</b>.</p></div>
            <div class="side"><h4>Annealed (soft) copper</h4><p>Used for <b>insulated conductors in low-voltage cables, winding wires for machines and transformers, flexible wires and coils</b>.</p></div>
          </div>
        ` },
        { title: 'Aluminium', html: `
          <p class="lead">A silver-white, lightweight, soft, non-magnetic, ductile metal. It is the third most abundant element after O and Si and the <b>most abundant metal</b> in the earth's crust. Main ore: <b>bauxite</b>.</p>
          <p>Low density, high ductility, good corrosion resistance and good conductivity make it suited to transmission and distribution.</p>
          <div class="kv">
            <div><span>Resistivity</span><b>2.65 µΩ·cm</b></div>
            <div><span>Temp. coefficient at 20 °C</span><b>0.00429 /°C</b></div>
            <div><span>Melting point</span><b>660 °C</b></div>
            <div><span>Specific gravity</span><b>2.70 g/cm<sup>3</sup></b></div>
          </div>
          <ul>
            <li>Soft and highly ductile, so it is used in <b>flexible electric wires</b>.</li>
            <li>Conductor for <b>power transmission and distribution</b>, overhead lines and bus bars.</li>
            <li>Most important use: <b>ACSR conductors</b> (hard-drawn aluminium).</li>
          </ul>
          <div class="note example"><p><b>ACSR = Aluminium Conductor Steel Reinforced.</b> A central core of steel wires surrounded by layers of aluminium wires. The steel carries the load; the aluminium carries the current.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Name four requirements of a good conducting metal.', back: 'Low resistivity, low temperature coefficient, <b>high melting point</b>, <b>high ductility</b> (also strength, corrosion resistance, solderability, cost, life, flexibility).' },
        { front: 'Effect of impurities on a metal conductor?', back: 'They <b>raise resistivity</b> by creating lattice imperfections.' },
        { front: 'Resistivity of silver, copper, gold, aluminium?', back: '<b>1.58, 1.68, 2.21, 2.65 µΩ·cm</b>.' },
        { front: 'Copper: melting point and specific gravity?', back: '<b>1085 °C</b> and <b>8.96 g/cm<sup>3</sup></b>.' },
        { front: 'Hard-drawn vs annealed copper uses?', back: 'Hard-drawn: HV underground cable, bus bars. Annealed: low-voltage cables, winding wires, flexible wires, coils.' },
        { front: 'Aluminium: melting point, specific gravity, ore?', back: '<b>660 °C</b>, <b>2.70 g/cm<sup>3</sup></b>, ore <b>bauxite</b>.' },
        { front: 'What is ACSR?', back: '<b>Aluminium Conductor Steel Reinforced</b>: steel core wires with aluminium wires around them.' }
      ],
      oneLiners: [
        'Silver is the best conductor, then copper, gold, aluminium.',
        'Copper: 1.68 µΩ·cm, melts at 1085 °C, density 8.96 g/cm³.',
        'Aluminium: 2.65 µΩ·cm, melts at 660 °C, density 2.70 g/cm³, ore bauxite.',
        'Any impurity raises the resistivity of a metal.',
        'ACSR cable: steel core for strength, aluminium for conduction.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm3-semiconductor-types-uses',
      title: "Intrinsic and extrinsic semiconductors (n-type, p-type) and uses",
      short: "Intrinsic & extrinsic Si",
      blurb: 'Side-by-side comparison of n-type and p-type semiconductors, and where semiconductors are used.',
      source: 'Pages 14–22',
      tabs: [
        { title: 'Where this sits', html: `
          <p class="lead">The basics of semiconductors (intrinsic, extrinsic, doping, band gaps, compound semiconductors) are covered in <b>Module 2, Semiconductors as electrode materials</b>. This topic adds the n-type against p-type comparison and the uses from the electrical-materials unit.</p>
          <div class="kv">
            <div><span>Band gap Si</span><b>1.0 eV (slide value)</b></div>
            <div><span>Band gap Ge</span><b>0.7 eV</b></div>
            <div><span>n-type dopants</span><b>P, As, Sb</b></div>
            <div><span>p-type dopants</span><b>B, Al, In</b></div>
          </div>
        ` },
        { title: 'n-type vs p-type', html: `
          <table class="tbl">
            <thead><tr><th></th><th>n-type</th><th>p-type</th></tr></thead>
            <tbody>
              <tr><td>Impurity added</td><td><b>Pentavalent</b></td><td><b>Trivalent</b></td></tr>
              <tr><td>Impurity atom</td><td>One extra electron (five)</td><td>One electron short (three)</td></tr>
              <tr><td>Dopant called</td><td><b>Donor</b></td><td><b>Acceptor</b></td></tr>
              <tr><td>Doping produces</td><td>Many electrons</td><td>Many holes</td></tr>
              <tr><td>Majority carrier</td><td>Electrons (holes are minority)</td><td>Holes (electrons are minority)</td></tr>
              <tr><td>Conduction mainly by</td><td>Electrons</td><td>Holes</td></tr>
              <tr><td>Impurity atom becomes</td><td>Positively ionised by donating an electron</td><td>Negatively ionised by accepting an electron</td></tr>
              <tr><td>Examples</td><td>As, Sb, Bi, P</td><td>B, Ga, In, Al</td></tr>
            </tbody>
          </table>
          <div class="note trap"><p>Both n-type and p-type crystals are electrically <b>neutral</b>. The words positive and negative here describe the ionised impurity atom, not the crystal.</p></div>
          <figure data-fig="m3-donor-acceptor"></figure>
        ` },
        { title: 'Uses', html: `
          <p class="lead">Semiconductors sit inside most modern electronics.</p>
          <div class="chips"><span class="chip">temperature sensors</span><span class="chip">3D printing machines</span><span class="chip">microchips</span><span class="chip">self-driving cars</span><span class="chip">calculators</span><span class="chip">solar plates</span><span class="chip">computers</span><span class="chip">transistors</span><span class="chip">MOSFETs</span></div>
          <p>Transistors and <b>MOSFETs</b> (metal-oxide-semiconductor field-effect transistors) are used as <b>switches</b> in circuits.</p>
        ` }
      ],
      flashcards: [
        { front: 'n-type: impurity type and dopant name?', back: '<b>Pentavalent</b> impurity, called a <b>donor</b> (P, As, Sb, Bi).' },
        { front: 'p-type: impurity type and dopant name?', back: '<b>Trivalent</b> impurity, called an <b>acceptor</b> (B, Al, Ga, In).' },
        { front: 'Majority carriers in n-type and p-type?', back: 'n-type: <b>electrons</b>. p-type: <b>holes</b>.' },
        { front: 'What happens to the donor atom after donating?', back: 'It becomes <b>positively ionised</b>.' },
        { front: 'What happens to the acceptor atom after accepting?', back: 'It becomes <b>negatively ionised</b>.' },
        { front: 'What is a MOSFET used for?', back: 'As a <b>switch</b> in circuits.' }
      ],
      oneLiners: [
        'n-type: pentavalent donor, electrons are the majority carriers.',
        'p-type: trivalent acceptor, holes are the majority carriers.',
        'Donor atoms become positive ions; acceptor atoms become negative ions.',
        'Semiconductors go into sensors, chips, solar plates, transistors and MOSFET switches.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm3-insulators',
      title: 'Insulators',
      short: 'Insulators',
      blurb: 'Band picture of an insulator, why insulators matter, and examples.',
      source: 'Pages 23–24',
      tabs: [
        { title: 'Band picture', html: `
          <p class="lead">An insulator has an <b>empty conduction band</b>, a valence band holding many electrons, and a <b>very wide forbidden gap</b> (15 eV in the slides).</p>
          <figure data-fig="m3-insulator-breakdown"></figure>
          <ul>
            <li>Valence electrons lack the energy to reach the conduction band, so conductivity is <b>almost zero</b>.</li>
            <li>They need a very high electric field to cross the gap.</li>
            <li>Insulators have very high resistivity and offer very high resistance to current.</li>
          </ul>
        ` },
        { title: 'Uses & examples', html: `
          <div class="note why"><p>In domestic wiring, insulation <b>protects us from shock</b> and prevents leakage current. Insulators play an important part in all electrical and electronic circuits.</p></div>
          <h3>Examples</h3>
          <div class="chips"><span class="chip">asbestos and asbestos products</span><span class="chip">glass</span><span class="chip">insulating resins and their products</span><span class="chip">laminates</span><span class="chip">adhesives</span><span class="chip">enamels</span></div>
        ` }
      ],
      flashcards: [
        { front: 'Band picture of an insulator?', back: 'Empty conduction band, full valence band, <b>very wide gap</b> (15 eV in the slides).' },
        { front: 'Why is insulator conductivity almost zero?', back: 'Valence electrons <b>cannot gain enough energy</b> to cross the gap.' },
        { front: 'Role of insulators in wiring?', back: 'Protect from <b>shock</b> and prevent <b>leakage current</b>.' },
        { front: 'Name some insulating materials.', back: 'Asbestos, glass, insulating resins, laminates, adhesives, enamels.' }
      ],
      oneLiners: [
        'Insulator: wide gap, empty conduction band, conductivity almost zero.',
        'Insulation in wiring prevents shock and leakage current.',
        'Examples: asbestos, glass, resins, laminates, adhesives, enamels.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm3-superconductors',
      title: 'Superconductors and the Meissner effect',
      short: 'Superconductors',
      blurb: 'Discovery, critical temperature, Meissner effect, a table of superconducting materials, and applications such as maglev and MRI.',
      source: 'Pages 25–30',
      tabs: [
        { title: 'Superconductivity', html: `
          <p class="lead">Cool some materials below a certain temperature and their <b>resistivity vanishes</b>. They show <b>infinite conductivity</b>.</p>
          <figure data-fig="m3-superconductor-resistivity"></figure>
          <ul>
            <li>Discovered in <b>1911 in Leiden</b> by the Dutch physicist <b>Heike Kamerlingh Onnes</b>, who won the <b>Nobel Prize in Physics in 1913</b> for low-temperature research.</li>
            <li>The <b>critical (transition) temperature, T<sub>c</sub></b> is the temperature at which a metal changes from the normal conducting state to the superconducting state.</li>
            <li>Example: <b>mercury</b> becomes superconducting at <b>4 K</b>.</li>
            <li>In the superconducting state, the material <b>expels the magnetic field</b>.</li>
          </ul>
          <div class="vs">
            <div class="side"><h4>Normal metal</h4><p>Resistivity falls as T falls but levels off at a <b>finite value</b> as T → 0.</p></div>
            <div class="side"><h4>Superconductor</h4><p>Resistivity <b>drops sharply to zero</b> at T<sub>c</sub>.</p></div>
          </div>
        ` },
        { title: 'Meissner effect', html: `
          <p class="lead">The <b>Meissner effect</b> is the <b>exclusion of magnetic flux</b> (ejection of lines of magnetic induction) from the interior of a bulk superconductor when it is cooled below its transition temperature.</p>
          <figure data-fig="m3-meissner-effect"></figure>
          <div data-viz="superconductor-transition"></div>
          <ul>
            <li>Found by <b>Walther Meissner and Robert Ochsenfeld in 1933</b>, by measuring the magnetic-field distribution outside superconducting <b>tin and lead</b> samples.</li>
            <li>A superconductor with little or no magnetic field inside is in the <b>Meissner state</b>.</li>
            <li>Above T<sub>c</sub> the field lines pass straight through the sample. Below T<sub>c</sub> they bend around it.</li>
          </ul>
          <div class="note example"><p>The classic demonstration: a magnet <b>levitates</b> above a superconductor cooled by <b>liquid nitrogen</b> in a foam container.</p></div>
        ` },
        { title: 'Materials and Tc', html: `
          <table class="tbl">
            <thead><tr><th>Class</th><th>Substance: T<sub>c</sub> (K)</th></tr></thead>
            <tbody>
              <tr><td>Metals</td><td>Hg 4; V 5.4; Pb 7.2; Nb 9.5; Tc 7.8</td></tr>
              <tr><td>Alloys</td><td>Nb<sub>3</sub>Ge 23.2; Nb<sub>3</sub>Sn 18; Nb<sub>3</sub>Al 17.5; V<sub>3</sub>Si 17; V<sub>3</sub>Ga 16.5; NbN 16</td></tr>
              <tr><td>Non-cuprate oxides</td><td>LiTi<sub>2</sub>O<sub>4</sub> 12; BaPb<sub>0.75</sub>Bi<sub>0.25</sub>O<sub>3</sub> 13; Ba<sub>0.6</sub>K<sub>0.4</sub>BiO<sub>3</sub> 30</td></tr>
              <tr><td>Cuprates</td><td>La<sub>1.85</sub>Sr<sub>0.15</sub>CuO<sub>4</sub> 40; <b>YBa<sub>2</sub>Cu<sub>3</sub>O<sub>7</sub> 93</b>; Bi<sub>2</sub>Sr<sub>2</sub>Ca<sub>2</sub>Cu<sub>3</sub>O<sub>10</sub> (BiSCCO) 110; HgBa<sub>2</sub>Ca<sub>2</sub>Cu<sub>3</sub>O<sub>10</sub> 138; Sr<sub>2</sub>CuO<sub>4</sub> 1.5; Tl<sub>2</sub>Ba<sub>2</sub>CuO<sub>6</sub> 80; Tl<sub>2</sub>Ba<sub>2</sub>CaCu<sub>2</sub>O<sub>8</sub> 105; Tl<sub>2</sub>Ba<sub>2</sub>Ca<sub>2</sub>Cu<sub>3</sub>O<sub>10</sub> 125; Tl<sub>2</sub>Ba<sub>2</sub>Ca<sub>3</sub>Cu<sub>4</sub>O<sub>12</sub> 115</td></tr>
              <tr><td>Organics</td><td>(ET)<sub>2</sub>Cu(NCS)<sub>2</sub> 11.4</td></tr>
              <tr><td>Others</td><td>YNi<sub>2</sub>B<sub>2</sub>C 15.5; fullerenes e.g. Cs<sub>2</sub>RbC<sub>60</sub> 33; Chevrel phases e.g. HoMo<sub>6</sub>S<sub>8</sub> 0.7–1.8; sulfur 10 (at 93 GPa) and 17 (at 160 GPa); MgB<sub>2</sub> 39; LaO<sub>1−x</sub>F<sub>x</sub>FeAs 28; SmO<sub>1−x</sub>F<sub>x</sub>FeAs 55; ErRh<sub>4</sub>B<sub>4</sub> 1.0–8.7</td></tr>
            </tbody>
          </table>
          <p>For YBa<sub>2</sub>Cu<sub>3</sub>O<sub>7</sub> the resistance falls vertically to zero at T<sub>c</sub> ≈ <b>93 K</b>, above the boiling point of liquid nitrogen (77 K), which is why cuprates matter. Above T<sub>c</sub> it behaves as a normal metal.</p>
        ` },
        { title: 'Applications', html: `
          <table class="tbl">
            <thead><tr><th>Area</th><th>Use</th></tr></thead>
            <tbody>
              <tr><td><b>Transportation</b></td><td><b>Maglev trains.</b> Superconducting magnets let trains levitate above the track and travel fast with minimal friction and energy loss.</td></tr>
              <tr><td><b>Medical imaging</b></td><td><b>MRI.</b> Superconducting magnets create strong, stable fields for high-resolution images.</td></tr>
              <tr><td><b>Power</b></td><td>Superconducting cables carry electricity over long distances with minimal loss; energy storage.</td></tr>
              <tr><td><b>Computing</b></td><td>Superconducting circuits are used to develop <b>quantum computers</b>.</td></tr>
            </tbody>
          </table>
          <div class="note example"><p>In a maglev, superconducting magnets in the train body sit above a track of electromagnets. Matching poles repel and opposite poles attract, which lifts and guides the train.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Who discovered superconductivity and when?', back: '<b>Heike Kamerlingh Onnes, 1911, Leiden</b>. Nobel Prize in Physics 1913.' },
        { front: 'What is the critical temperature?', back: 'The temperature at which a metal changes from <b>normal to superconducting</b> state.' },
        { front: 'T<sub>c</sub> of mercury?', back: '<b>4 K</b>.' },
        { front: 'What is the Meissner effect?', back: '<b>Expulsion of magnetic flux</b> from a superconductor cooled below T<sub>c</sub>.' },
        { front: 'Who found the Meissner effect and with what samples?', back: '<b>Meissner and Ochsenfeld, 1933</b>, tin and lead.' },
        { front: 'T<sub>c</sub> of YBa<sub>2</sub>Cu<sub>3</sub>O<sub>7</sub>?', back: '<b>93 K</b>.' },
        { front: 'Name four applications of superconductors.', back: '<b>Maglev trains, MRI, power cables and storage, quantum computers</b>.' },
        { front: 'Resistivity of a normal metal as T → 0?', back: 'Levels off at a <b>finite value</b>. A superconductor drops to <b>zero</b> at T<sub>c</sub>.' }
      ],
      oneLiners: [
        'Superconductors lose all resistance below the critical temperature Tc.',
        'Discovered 1911 by Kamerlingh Onnes (Hg at 4 K); Nobel Prize 1913.',
        'Meissner effect: magnetic field is expelled below Tc, and a magnet levitates.',
        'YBa2Cu3O7 has Tc about 93 K, above the boiling point of liquid nitrogen.',
        'Uses: maglev, MRI magnets, loss-free cables, quantum computers.'
      ],
      formulas: []
    }
  ],
  figures: [
    { id: 'm3-resistivity-geometry', src: null, crop: null,
      caption: 'A wire of length l and cross-sectional area A: resistance grows with length and shrinks with area, while resistivity is a property of the material alone.',
      alt: 'A cylindrical wire with current arrows at both ends, its length l marked below and its end-face area A labelled, with the formula R equals rho l over A.' },
    { id: 'm3-band-formation', src: null, crop: null,
      caption: 'As atoms are packed closer, each single-atom level splits into many close levels that merge into a band. The outer levels spread most.',
      alt: 'Energy against closeness of atoms: two single levels on the left each fan out into six lines that end as an upper band and a lower band with a gap between them.' },
    { id: 'm3-band-classes', src: null, crop: null,
      caption: 'Conductor: bands overlap. Semiconductor: small gap of about 1 eV. Insulator: very wide gap.',
      alt: 'Three pairs of stacked blocks for conduction and valence bands: overlapping for a conductor, a small gap for a semiconductor, a large gap for an insulator.' },
    { id: 'm3-donor-acceptor', src: null, crop: null,
      caption: 'A donor level sits just below the conduction band and gives electrons to it. An acceptor level sits just above the valence band and takes electrons from it, leaving holes.',
      alt: 'Two band diagrams. n-type: a dashed donor level with electrons just under the conduction band and an arrow up. p-type: a dashed acceptor level just above the valence band with an arrow up from the valence band.' },
    { id: 'm3-superconductor-resistivity', src: null, crop: null,
      caption: 'A normal metal levels off at a finite resistivity as T falls. A superconductor drops sharply to zero at its critical temperature.',
      alt: 'Graph of resistivity against temperature: a blue normal-metal curve that flattens at a finite value near zero temperature, and a green line at zero resistivity up to a critical temperature where it jumps up to meet the blue curve.' },
    { id: 'm3-meissner-effect', src: null, crop: null,
      caption: 'Above Tc the field lines pass straight through the sample. Below Tc the superconductor pushes them out and they bend around it.',
      alt: 'Two panels of parallel field lines with arrows around an ellipse: straight through it above Tc, curving around it below Tc.' },
    { id: 'm3-metal-resistivity-temperature', src: null, crop: null,
      caption: 'Resistivity of a metal rises with temperature. Impurities shift the whole line upward, so the alloy has a higher resistivity at every temperature.',
      alt: 'Graph of resistivity against temperature with two parallel rising lines: a lower blue line for the pure metal and a higher red line for the metal with impurities, joined by an upward arrow.' },
    { id: 'm3-metal-resistivity-bars', src: null, crop: null,
      caption: 'Resistivity in microohm centimetres: silver 1.58, copper 1.68, gold 2.21 and aluminium 2.65. Lower is the better conductor.',
      alt: 'Horizontal bars for silver, copper, gold and aluminium with lengths increasing in that order and the values printed at the bar ends.' },
    { id: 'm3-insulator-breakdown', src: null, crop: null,
      caption: 'An insulator carries almost no current as the field rises, until the field is high enough to push electrons across the wide gap and it breaks down.',
      alt: 'Graph of current against field: a curve hugging zero for most of the field range and then rising almost vertically at the breakdown field.' }
  ]
});
