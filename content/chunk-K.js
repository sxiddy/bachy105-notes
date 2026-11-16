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
          <h3>Devices and materials (Fall 2026-27 deck)</h3>
          <table class="tbl">
            <thead><tr><th>Area</th><th>Device</th><th>What it is used for</th></tr></thead>
            <tbody>
              <tr><td rowspan="3"><b>Electronics</b></td><td>Diodes</td><td>Let current pass one way only, so they act as <b>rectifiers</b> (AC to DC) and voltage regulators.</td></tr>
              <tr><td>Transistors</td><td>Work as <b>amplifiers</b> and switches.</td></tr>
              <tr><td>Integrated circuits (ICs)</td><td>Millions of transistors on one Si chip, making <b>microprocessors and memory chips</b>.</td></tr>
              <tr><td><b>Power devices</b></td><td>SCR (silicon controlled rectifier), IGBT (insulated gate bipolar transistor), power MOSFET</td><td><b>Power control</b> in converters, inverters and motor drives.</td></tr>
              <tr><td rowspan="3"><b>Optoelectronics</b></td><td>LEDs (<b>GaAs</b>)</td><td>Light sources in displays and indicators.</td></tr>
              <tr><td>Laser diodes (<b>GaAs</b>)</td><td><b>Optical communication</b> and CD/DVD players.</td></tr>
              <tr><td>Photodiodes, solar cells</td><td>Photodiodes turn light into a current for <b>light detection</b>; solar cells do the same for renewable energy.</td></tr>
              <tr><td rowspan="2"><b>Communication and computing</b></td><td>GaAs and <b>InP</b> chips</td><td>High-speed computers and <b>5G/6G</b> communication devices.</td></tr>
              <tr><td>Semiconductor sensors</td><td>Sense temperature, pressure, infrared and biological signals (biosensors).</td></tr>
              <tr><td><b>Everyday use</b></td><td>Consumer electronics</td><td>Mobile phones, computers, televisions, digital cameras and smart appliances.</td></tr>
            </tbody>
          </table>
          <h3>Intrinsic and compound semiconductors</h3>
          <ul>
            <li>In an <b>intrinsic</b> (pure) semiconductor such as pure Si or Ge, conductivity arises <b>only from thermally generated electron–hole pairs</b>: heat lifts a few electrons across the gap, each leaving a hole. At 0 K it is an insulator; at room temperature it conducts a little.</li>
            <li><b>Compound semiconductors</b> are made from two or more elements and are used in high-frequency and optoelectronic devices. <b>Gallium arsenide (GaAs)</b> goes into LEDs, laser diodes and microwave ICs; <b>indium phosphide (InP)</b> into high-speed electronics and optical communication.</li>
          </ul>
          <div class="note why"><p>GaAs has a direct band gap (1.42 eV), so an electron dropping across the gap gives out its energy as a photon efficiently. Si has an indirect gap and mostly gives heat instead, which is why LEDs and laser diodes use GaAs, not Si.</p></div>
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
        ` },
        { title: 'Materials & applications', html: `
          <p class="lead">The Fall 2026-27 deck defines <b>insulators</b> as materials that do not allow electric current to pass through easily. The valence band is full, the conduction band empty, and the gap is <b>very large (typically &gt; 5 eV)</b>, so valence electrons cannot reach the conduction band under normal conditions.</p>
          <h3>Band gap values</h3>
          <div class="kv">
            <div><span>Diamond</span><b>~5.5 eV (excellent insulator)</b></div>
            <div><span>Glass</span><b>~9 eV</b></div>
            <div><span>PVC, rubber</span><b>very high, ≫ 6 eV</b></div>
          </div>
          <h3>Properties</h3>
          <ul>
            <li><b>Very high resistivity</b>, 10<sup>8</sup>–10<sup>16</sup> Ω m, so conductivity is negligible under normal conditions.</li>
            <li><b>Negative temperature coefficient of resistance</b>: heating frees a few more carriers, so resistance falls slightly as temperature rises.</li>
            <li>They give <b>electrical isolation</b> between conducting parts.</li>
            <li>Generally <b>strong dielectrics</b>: they withstand high voltages without breakdown.</li>
          </ul>
          <h3>Common insulating materials</h3>
          <table class="tbl">
            <thead><tr><th>Group</th><th>Materials</th></tr></thead>
            <tbody>
              <tr><td>Non-metals</td><td>Rubber, glass, plastic, wood, <b>mica</b></td></tr>
              <tr><td>Ceramics</td><td><b>Porcelain</b>, alumina, silicon dioxide</td></tr>
              <tr><td>Others</td><td><b>PVC</b> (polyvinyl chloride), <b>Bakelite</b>, and <b>paper impregnated with oil</b> for cables</td></tr>
            </tbody>
          </table>
          <h3>Applications</h3>
          <table class="tbl">
            <thead><tr><th>Where</th><th>Insulator used</th><th>Why it suits</th></tr></thead>
            <tbody>
              <tr><td>Electrical wiring insulation</td><td>Plastic coatings, <b>PVC</b>, rubber</td><td>Flexible coatings that stop shocks and leakage between wires.</td></tr>
              <tr><td>Transmission lines</td><td><b>Porcelain or glass</b> insulators on pylons</td><td>Hard, weatherproof and able to hold off very high voltages between the line and the tower.</td></tr>
              <tr><td>Transformers and capacitors</td><td><b>Mica</b>, ceramics, impregnated paper</td><td>Good dielectrics that separate windings or plates and stand up to heat.</td></tr>
              <tr><td>Printed circuit boards (PCBs)</td><td><b>Epoxy resins, fibreglass</b></td><td>A rigid insulating board that holds the copper tracks apart.</td></tr>
              <tr><td>High-voltage equipment</td><td>Ceramic insulators, vacuum, or <b>SF<sub>6</sub> gas</b> as the insulating medium</td><td>Withstand very high fields without breaking down or arcing.</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>The older slides draw the insulator gap as 15 eV; the Fall deck says "typically &gt; 5 eV" and gives diamond 5.5 eV and glass 9 eV. For a definition, write "very large, more than about 5 eV".</p></div>
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
          <h3>From the Fall 2026-27 deck</h3>
          <ul>
            <li>A <b>superconductor</b> is a material that, when cooled below a certain critical temperature (T<sub>c</sub>), <b>loses all electrical resistance</b> and lets current flow <b>without any energy loss</b>.</li>
            <li>Kamerlingh Onnes was the first to <b>liquefy helium</b>, cooling it to near <b>1.5 K</b>, the coldest temperature reached on Earth at the time. Using liquid helium to study solid mercury, he found in 1911 that its resistance vanishes at <b>4.2 K</b>.</li>
            <li>In <b>1933</b> Meissner found that superconductors <b>expel a magnetic field</b>; the magnetic repulsion can levitate them.</li>
            <li><b>High-temperature superconductors (HTS)</b> were discovered in <b>1986</b> by <b>Bednorz and Müller</b>, with T<sub>c</sub> above <b>77 K</b> (liquid nitrogen temperature). Both won the <b>Nobel Prize in Physics in 1987</b>. Modern research focuses on these.</li>
          </ul>
          <div class="note heads-up"><p>The older slides round mercury's T<sub>c</sub> to 4 K; the Fall 2026-27 deck gives <b>4.2 K</b>, which is the standard value. Write 4.2 K unless a question quotes 4 K.</p></div>
        ` },
        { title: 'Critical field & current', html: `
          <p class="lead">Superconductivity survives only inside three limits: temperature below <b>T<sub>c</sub></b>, magnetic field below <b>H<sub>c</sub></b>, and current density below <b>J<sub>c</sub></b>. Cross any one and the material returns to its normal, resistive state.</p>
          <table class="tbl">
            <thead><tr><th>Quantity</th><th>Definition</th><th>Unit</th></tr></thead>
            <tbody>
              <tr><td><b>Critical temperature, T<sub>c</sub></b></td><td>The temperature below which the material is superconducting (zero resistance) and above which it behaves as a normal conductor.</td><td>K</td></tr>
              <tr><td><b>Critical magnetic field, H<sub>c</sub></b></td><td>The maximum external magnetic field a superconductor can withstand at a given temperature and still stay superconducting. A stronger field destroys superconductivity even below T<sub>c</sub>.</td><td>A m<sup>−1</sup> (or as B<sub>c</sub> in tesla)</td></tr>
              <tr><td><b>Critical current density, J<sub>c</sub></b></td><td>The maximum current per unit cross-sectional area a superconductor can carry with zero resistance. A larger current makes its own magnetic field exceed H<sub>c</sub> at the surface, so superconductivity is lost.</td><td>A m<sup>−2</sup> (often A cm<sup>−2</sup>)</td></tr>
            </tbody>
          </table>
          <div class="eq" data-label="Hc depends on temperature">H<sub>c</sub>(T) = H<sub>0</sub> [1 − (T/T<sub>c</sub>)<sup>2</sup>]</div>
          <p>H<sub>0</sub> is the critical field at 0 K. H<sub>c</sub> is largest at 0 K and falls to <b>zero at T<sub>c</sub></b>, so the colder the sample, the stronger the field (and the larger the current) it can take.</p>
          <div class="note why"><p>J<sub>c</sub> and H<sub>c</sub> are linked: a current in a wire makes a magnetic field around it. Push enough current and that self-field alone reaches H<sub>c</sub>. That is why a superconducting magnet coil has a maximum current as well as a maximum field.</p></div>
          <figure data-fig="m3-hc-temperature"></figure>
          <h3>Resistance below T<sub>c</sub> is exactly zero</h3>
          <div class="worked">
            <div class="given"><p>A lead superconductor has T<sub>c</sub> = 7.2 K. Its resistance just above T<sub>c</sub> is 1.2 µΩ. Find its resistance at 4.2 K.</p></div>
            <div class="solve">
              <p>Compare the temperature with T<sub>c</sub>: 4.2 K &lt; 7.2 K, so lead is in the superconducting state at 4.2 K (assuming no field or current above the critical values).</p>
              <p>In the superconducting state the resistance does not just fall a little; it drops sharply to zero at T<sub>c</sub> and stays zero below it. The 1.2 µΩ value applies only to the normal state above T<sub>c</sub>.</p>
            </div>
            <div class="result"><p>R (4.2 K) = <b>0 Ω</b></p></div>
          </div>
          <div class="note trap"><p>Do not scale the 1.2 µΩ down with temperature as you would for a normal metal. Below T<sub>c</sub> the answer is zero, not a smaller number.</p></div>
          <div class="note exam"><p>For "define T<sub>c</sub>, H<sub>c</sub> and J<sub>c</sub>": one full sentence each, with units, then add that exceeding any one of them destroys superconductivity, and sketch H<sub>c</sub> against T falling to zero at T<sub>c</sub>.</p></div>
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
        { title: 'Type I vs Type II', html: `
          <p class="lead">Superconductors are split into two types by how they respond to a rising magnetic field. <b>Type I</b> expels the field completely and then fails all at once at one critical field. <b>Type II</b> lets the field in gradually between two critical fields, <b>H<sub>c1</sub></b> and <b>H<sub>c2</sub></b>.</p>
          <div class="vs">
            <div class="side"><h4>Type I (soft superconductors)</h4>
              <ul>
                <li>Show the <b>complete Meissner effect</b>: no flux inside at all while superconducting.</li>
                <li><b>Sharp transition</b> between the normal and superconducting states at a single field H<sub>c</sub>.</li>
                <li><b>Low critical field</b>, so even a modest magnet kills superconductivity; not useful for strong magnets.</li>
                <li>Examples: <b>Pb, Hg, Al</b> (pure metals).</li>
              </ul>
            </div>
            <div class="side"><h4>Type II (hard superconductors)</h4>
              <ul>
                <li><b>Partial penetration of flux</b> as thin tubes called <b>vortices</b>, while the rest stays superconducting.</li>
                <li><b>Two critical fields</b>: at <b>H<sub>c1</sub></b> flux starts penetrating; at <b>H<sub>c2</sub></b> superconductivity is destroyed.</li>
                <li><b>High current-carrying capacity</b> and very high H<sub>c2</sub>, so they make the strong magnets in MRI, maglev and accelerators.</li>
                <li>Examples: <b>NbTi, Nb<sub>3</sub>Sn, YBa<sub>2</sub>Cu<sub>3</sub>O<sub>7</sub></b> (YBCO, also called Y123).</li>
              </ul>
            </div>
          </div>
          <table class="tbl">
            <thead><tr><th>Field range</th><th>Type I</th><th>Type II</th></tr></thead>
            <tbody>
              <tr><td>Below H<sub>c</sub> (Type I) or H<sub>c1</sub> (Type II)</td><td>Superconducting, field fully expelled (Meissner state)</td><td>Superconducting, field fully expelled (Meissner state)</td></tr>
              <tr><td>Between H<sub>c1</sub> and H<sub>c2</sub></td><td>Does not exist for Type I</td><td><b>Mixed (vortex) state</b>: flux threads through in vortices, current still flows with zero resistance</td></tr>
              <tr><td>Above H<sub>c</sub> (Type I) or H<sub>c2</sub> (Type II)</td><td>Normal metal, field passes through</td><td>Normal state, field passes through</td></tr>
            </tbody>
          </table>
          <figure data-fig="m3-type1-type2"></figure>
          <h3>Superconductivity and critical magnetic field (Fall deck table)</h3>
          <table class="tbl">
            <thead><tr><th>Material</th><th>T<sub>c</sub> (K)</th><th>Type</th></tr></thead>
            <tbody>
              <tr><td>Mercury (Hg)</td><td><b>4.2</b></td><td>I</td></tr>
              <tr><td>Lead (Pb)</td><td><b>7.2</b></td><td>I</td></tr>
              <tr><td>Niobium (Nb)</td><td>9.2</td><td>II</td></tr>
              <tr><td>NbTi alloy</td><td>10</td><td>II</td></tr>
              <tr><td>Nb<sub>3</sub>Sn</td><td>18</td><td>II</td></tr>
              <tr><td>YBa<sub>2</sub>Cu<sub>3</sub>O<sub>7</sub> (YBCO)</td><td><b>92</b></td><td>II (HTS)</td></tr>
              <tr><td>Bi<sub>2</sub>Sr<sub>2</sub>Ca<sub>2</sub>Cu<sub>3</sub>O<sub>10</sub> (BSCCO)</td><td>~110</td><td>II (HTS)</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>The two decks differ slightly: the older table gives Nb 9.5 K and YBCO 93 K, the Fall deck 9.2 K and 92 K. The standard values are about 9.2 K for Nb and 92–93 K for YBCO, so either YBCO figure is accepted.</p></div>
          <div class="note exam"><p>For "Type I vs Type II": draw magnetisation against applied field. Type I falls straight to zero at H<sub>c</sub>; Type II drops slowly between H<sub>c1</sub> and H<sub>c2</sub>. Then give the four contrasts (Meissner complete or partial, one or two critical fields, low or high field, examples).</p></div>
        ` },
        { title: 'YBCO', html: `
          <p class="lead"><b>YBa<sub>2</sub>Cu<sub>3</sub>O<sub>7</sub></b> (yttrium barium copper oxide, YBCO or Y123) is a <b>ceramic high-temperature superconductor</b> with T<sub>c</sub> ≈ <b>92 K</b>. It was the first material to superconduct above 77 K, so it can be cooled with cheap liquid nitrogen instead of liquid helium.</p>
          <h3>Characteristics</h3>
          <ul>
            <li><b>Ceramic copper oxide (cuprate)</b>: a layered, oxygen-deficient perovskite structure. The current flows mainly in the <b>CuO<sub>2</sub> planes</b>.</li>
            <li><b>T<sub>c</sub> ≈ 92 K</b>, above the boiling point of liquid nitrogen (77 K), so cooling is cheap and simple.</li>
            <li><b>Type II</b> superconductor with a very high upper critical field H<sub>c2</sub>, so it keeps superconducting in strong magnetic fields.</li>
            <li><b>Oxygen content controls it</b>: the formula is often written YBa<sub>2</sub>Cu<sub>3</sub>O<sub>7−δ</sub>. Near O<sub>7</sub> it superconducts; as oxygen is lost (δ toward 1) T<sub>c</sub> falls and it stops superconducting.</li>
            <li><b>Anisotropic</b>: it carries current much better along the CuO<sub>2</sub> planes than across them.</li>
            <li><b>Brittle</b> like other ceramics, so it is hard to draw into wires; it is used as thin films and coated tapes.</li>
            <li>Above T<sub>c</sub> it behaves as a <b>poor metal</b>; below T<sub>c</sub> resistance falls vertically to zero.</li>
          </ul>
          <h3>Five applications</h3>
          <ol>
            <li><b>Power cables</b>: YBCO-coated tapes carry large currents with no resistive loss, cooled only by liquid nitrogen.</li>
            <li><b>Fault current limiters</b>: a surge pushes the YBCO above J<sub>c</sub>, it turns resistive instantly and limits the current, protecting the grid.</li>
            <li><b>Magnetic levitation</b>: a magnet floats over a YBCO pellet (the Meissner and flux-pinning demo); the same idea underlies maglev and frictionless bearings.</li>
            <li><b>SQUIDs</b>: YBCO SQUIDs work at 77 K and detect extremely weak magnetic fields, for brain mapping (MEG) and mineral exploration.</li>
            <li><b>High-field magnets and motors</b>: compact magnets for MRI, research magnets and ship-propulsion motors, because YBCO tolerates strong fields.</li>
          </ol>
          <div class="note why"><p>Liquid nitrogen costs far less than liquid helium and is much easier to handle. Moving T<sub>c</sub> above 77 K is what turned superconductors from a lab curiosity into usable devices.</p></div>
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
          <h3>Full list from the Fall 2026-27 deck</h3>
          <table class="tbl">
            <thead><tr><th>Area</th><th>Device</th><th>What it does and where</th></tr></thead>
            <tbody>
              <tr><td rowspan="4"><b>Power and energy</b></td><td>Superconducting power cables</td><td>Carry huge currents without losses; used in cities such as <b>Essen (Germany)</b> and in near-grid demonstrations.</td></tr>
              <tr><td>Generators and motors</td><td>Smaller and more efficient than conventional machines; used in <b>naval propulsion</b> and industrial machinery.</td></tr>
              <tr><td>Fault current limiters (FCLs)</td><td>Protect power grids by <b>limiting surge currents instantly</b>.</td></tr>
              <tr><td>Superconducting magnetic energy storage (SMES)</td><td>Stores electrical energy <b>in the form of magnetic fields</b> in a superconducting coil and gives instant back-up power.</td></tr>
              <tr><td rowspan="2"><b>Medical</b></td><td>MRI</td><td>Superconducting magnets create strong, stable magnetic fields; they have <b>replaced older resistive magnets</b> in hospitals.</td></tr>
              <tr><td>NMR spectroscopy</td><td>A research tool for working out <b>molecular structure</b>, using the same kind of magnet.</td></tr>
              <tr><td rowspan="2"><b>Transportation</b></td><td>Maglev trains</td><td>Superconducting magnets <b>levitate and propel</b> the train; Japan's <b>SCMaglev</b> has passed <b>600 km/h</b> in tests.</td></tr>
              <tr><td>Space</td><td>Compact superconducting magnets are being considered for <b>spacecraft propulsion</b>.</td></tr>
              <tr><td rowspan="3"><b>Electronics and computing</b></td><td>Josephson junctions</td><td>Superfast switches made of <b>two superconductors separated by a thin insulator</b>; used in RSFQ (rapid single flux quantum) logic circuits.</td></tr>
              <tr><td>SQUIDs (superconducting quantum interference devices)</td><td>Ultra-sensitive magnetometers that detect <b>femto-tesla</b> fields; used for brain mapping (<b>MEG</b>), mineral exploration and detecting submarines.</td></tr>
              <tr><td>Quantum computing</td><td><b>Superconducting qubits</b> form the basis of many quantum computers.</td></tr>
              <tr><td rowspan="3"><b>Scientific research</b></td><td>Particle accelerators</td><td>The <b>LHC at CERN</b> uses superconducting magnets to guide protons; superconducting RF cavities accelerate particles efficiently.</td></tr>
              <tr><td>Fusion reactors (tokamaks, ITER)</td><td>Superconducting magnets <b>confine plasma</b> at millions of degrees.</td></tr>
              <tr><td>Sensitive detectors</td><td>Infrared detectors and detectors in astronomical telescopes.</td></tr>
              <tr><td><b>Demonstrations and military</b></td><td>Levitation demos, radar, ship propulsion</td><td>Magnets floating on <b>YBCO pellets</b>; compact, high-power radar and naval ship propulsion.</td></tr>
            </tbody>
          </table>
          <div class="note exam"><p>For "applications of superconductors", pick five from different areas (cables, MRI, maglev, SQUID/MEG, LHC or fusion magnets) and give one line each on what the superconductor does: zero-loss current, strong stable field, levitation, or detecting tiny fields.</p></div>
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
        { front: 'Resistivity of a normal metal as T → 0?', back: 'Levels off at a <b>finite value</b>. A superconductor drops to <b>zero</b> at T<sub>c</sub>.' },
        { front: 'Define critical magnetic field H<sub>c</sub> and critical current density J<sub>c</sub>.', back: 'H<sub>c</sub>: the <b>largest field</b> a superconductor can stand and stay superconducting. J<sub>c</sub>: the <b>largest current per unit area</b> it can carry with zero resistance.' },
        { front: 'Type I vs Type II superconductors?', back: 'Type I: <b>complete Meissner effect</b>, one low H<sub>c</sub> (Pb, Hg, Al). Type II: <b>flux vortices</b>, two fields H<sub>c1</sub> and H<sub>c2</sub>, high current (NbTi, Nb<sub>3</sub>Sn, YBCO).' },
        { front: 'Pb has T<sub>c</sub> = 7.2 K and R = 1.2 µΩ just above it. R at 4.2 K?', back: '<b>Zero</b>: 4.2 K is below T<sub>c</sub>, so lead is superconducting.' }
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
    { id: 'm3-hc-temperature', src: null, crop: null,
      caption: 'Critical field against temperature: Hc = H₀[1 − (T/Tc)²] is largest at 0 K and falls to zero at Tc. Below the curve the material is superconducting; above it, normal.',
      alt: 'A downward parabola from H0 on the vertical axis to Tc on the temperature axis, with the region under it shaded and labelled superconducting and the region above labelled normal state.' },
    { id: 'm3-type1-type2', src: null, crop: null,
      caption: 'Magnetisation (−M) against applied field. Type I: −M rises linearly (complete Meissner effect) and drops to zero at one field Hc. Type II: field fully expelled up to Hc1, then −M falls gradually through the mixed (vortex) state to zero at Hc2.',
      alt: 'Two stacked graphs of minus magnetisation against applied field; the Type I line rises straight and drops vertically at Hc; the Type II line rises to Hc1 and then curves down to zero at Hc2, with the region between labelled mixed vortex state.' },
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
