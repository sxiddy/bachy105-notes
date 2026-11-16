CHUNK({
  chunk: 'L',
  module: 'm3',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm3-magnetic-basics',
      title: 'Magnetic dipoles, moments and quantities',
      short: 'Magnetic basics',
      blurb: 'Poles and dipoles, magnetic field, origin of the magnetic moment (spin and orbital), Bohr magneton, and permeability, magnetization and susceptibility.',
      source: 'Pages 31–41',
      tabs: [
        { title: 'Dipole & field', html: `
          <p class="lead">The ends of a magnet, where the magnetic effect is strongest, are its <b>poles</b>. Every magnet has two: one <b>north</b>, one <b>south</b>.</p>
          <figure data-fig="m3-bar-magnet-field"></figure>
          <ul>
            <li>Any two opposite poles separated by a finite distance form a <b>magnetic dipole</b>.</li>
            <li>The <b>magnetic field</b> is the space around a magnet in which its influence is felt.</li>
            <li>Field lines run from N to S outside the magnet.</li>
            <li>Materials respond differently to a magnetic field, and magnetism is the study of that response.</li>
          </ul>
        ` },
        { title: 'Origin of the moment', html: `
          <p class="lead">A material's magnetic behaviour traces back to its <b>atomic structure</b>. Each electron contributes a magnetic moment in two ways.</p>
          <div class="vs">
            <div class="side"><h4>Spin motion</h4><p>A spinning electron gives a <b>spin magnetic moment</b>, pointing N up or N down depending on the spin quantum number m<sub>s</sub>.</p></div>
            <div class="side"><h4>Orbital motion</h4><p>An electron orbiting the nucleus gives an <b>orbital magnetic moment</b>, a field around the atom (N up or N down).</p></div>
          </div>
          <p>The <b>Bohr magneton (µ<sub>B</sub>)</b> is the strength of the magnetic moment of an electron due to its spin. Moments are measured in Bohr magnetons (BM).</p>
          <div class="eq" data-label="Spin-only moment">µ<sub>eff</sub> = 2√[S(S+1)] = √[n(n+2)] BM</div>
          <p>n is the number of <b>unpaired electrons</b>. If orbital angular momentum also contributes:</p>
          <div class="eq">µ = √[L(L+1) + 4S(S+1)]</div>
          <div class="worked"><div class="given"><p>Spin-only moment of an ion with 5 unpaired electrons (e.g. Cr, Mn in the 3d table).</p></div>
          <div class="solve"><div class="eq">µ = √[n(n+2)] = √(5 × 7) = √35</div></div>
          <div class="result">≈ <b>5.92 BM</b></div></div>
          <ul>
            <li><b>All materials are magnetic to some extent.</b> Their magnetic properties are decided mainly by their <b>electron configurations</b>, especially the number of <b>unpaired electrons</b>.</li>
            <li>The <b>magnetic dipole moment</b> is a <b>vector</b>: it has a magnitude and a direction. The net atomic moment is the vector sum of the orbital and spin contributions.</li>
          </ul>
          <h3>Worked: Ti<sup>3+</sup> and Fe<sup>2+</sup></h3>
          <p>Method: write the configuration of the atom, remove electrons from <b>4s first</b>, then from 3d, fill the 3d box one electron per orbital before pairing (Hund's rule), count unpaired electrons n, and put n into µ = √[n(n+2)].</p>
          <div class="worked">
            <div class="given"><p>Spin-only magnetic moment of <b>Ti<sup>3+</sup></b> (Z = 22).</p></div>
            <div class="solve">
              <p>Ti: [Ar] 3d<sup>2</sup> 4s<sup>2</sup>. Remove 3 electrons (two 4s, one 3d): Ti<sup>3+</sup> = [Ar] <b>3d<sup>1</sup></b>.</p>
              <p>3d box: ↑ _ _ _ _, so <b>n = 1</b>.</p>
              <div class="eq">µ = √[n(n+2)] = √[1 × (1+2)] = √3</div>
            </div>
            <div class="result"><p>µ ≈ <b>1.73 BM</b></p></div>
          </div>
          <div class="worked">
            <div class="given"><p>Spin-only magnetic moment of <b>Fe<sup>2+</sup></b> (Z = 26).</p></div>
            <div class="solve">
              <p>Fe: [Ar] 3d<sup>6</sup> 4s<sup>2</sup>. Remove the two 4s electrons: Fe<sup>2+</sup> = [Ar] <b>3d<sup>6</sup></b>.</p>
              <p>3d box: ↑↓ ↑ ↑ ↑ ↑, so <b>n = 4</b>.</p>
              <div class="eq">µ = √[n(n+2)] = √[4 × (4+2)] = √24</div>
            </div>
            <div class="result"><p>µ ≈ <b>4.90 BM</b></p></div>
          </div>
          <div class="note trap"><p>Transition-metal ions lose their <b>4s electrons first</b>. Fe<sup>2+</sup> is 3d<sup>6</sup>, not 3d<sup>4</sup>4s<sup>2</sup>; taking electrons from 3d would give n = 4 here by luck but goes wrong for other ions (Fe<sup>3+</sup> is 3d<sup>5</sup>, n = 5, 5.92 BM).</p></div>
        ` },
        { title: '3d and 4s spins', html: `
          <p class="lead">The number of unpaired electrons in the 3d and 4s orbitals of the first transition series sets how magnetic the atom is.</p>
          <table class="tbl">
            <thead><tr><th>Element</th><th>3d</th><th>4s</th><th>Unpaired</th></tr></thead>
            <tbody>
              <tr><td>Sc</td><td>↑</td><td>↑↓</td><td>1</td></tr>
              <tr><td>Ti</td><td>↑ ↑</td><td>↑↓</td><td>2</td></tr>
              <tr><td>V</td><td>↑ ↑ ↑</td><td>↑↓</td><td>3</td></tr>
              <tr><td>Cr</td><td>↑ ↑ ↑ ↑ ↑</td><td>↑</td><td><b>6</b></td></tr>
              <tr><td>Mn</td><td>↑ ↑ ↑ ↑ ↑</td><td>↑↓</td><td><b>5</b></td></tr>
              <tr><td>Fe</td><td>↑↓ ↑ ↑ ↑ ↑</td><td>↑↓</td><td>4</td></tr>
              <tr><td>Co</td><td>↑↓ ↑↓ ↑ ↑ ↑</td><td>↑↓</td><td>3</td></tr>
              <tr><td>Ni</td><td>↑↓ ↑↓ ↑↓ ↑ ↑</td><td>↑↓</td><td>2</td></tr>
              <tr><td>Cu</td><td>all five paired</td><td>↑</td><td>1</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>Chromium has the most unpaired electrons (six) because one 4s electron moves into 3d to give a half-filled set. Copper keeps a single 4s electron for a filled 3d shell.</p></div>
        ` },
        { title: 'Permeability & susceptibility', html: `
          <p class="lead">Three quantities describe how a material responds to an applied field H.</p>
          <div class="kv">
            <div><span>Magnetic permeability (µ)</span><b>ratio of induction to field; how easily flux lines flow through the material</b></div>
            <div><span>Magnetization (M)</span><b>total magnetic moment per unit volume</b></div>
            <div><span>Susceptibility (χ)</span><b>ratio of magnetization to applied field</b></div>
          </div>
          <div class="eq" data-label="Permeability">B ∝ H, B = µH, µ = B/H</div>
          <div class="eq" data-label="Relative permeability">µ<sub>r</sub> = µ/µ<sub>0</sub> = (B/H)/(B<sub>0</sub>/H) = B/B<sub>0</sub></div>
          <div class="eq" data-label="Magnetization">M ∝ H, M = χ<sub>m</sub> H, χ<sub>m</sub> = M/H</div>
          <ul>
            <li><b>Magnetization</b> is the process of converting a non-magnetic material into a magnetic one. Its intensity is directly related to the applied field.</li>
            <li>In a material, B = µH = µ<sub>0</sub>H + µ<sub>0</sub>M. In vacuum, B = µ<sub>0</sub>H. The gap between the two lines is µ<sub>0</sub>M.</li>
            <li>A current through a coil sets up a field H with flux density B. B is higher when a <b>magnetic core</b> sits inside the coil.</li>
          </ul>
        ` }
      ],
      flashcards: [
        { front: 'What is a magnetic dipole?', back: 'Two <b>opposite poles</b> separated by a finite distance.' },
        { front: 'What is the Bohr magneton?', back: 'The strength of the magnetic moment of an electron due to its <b>spin</b>.' },
        { front: 'Spin-only magnetic moment formula?', back: '<b>µ = √[n(n+2)] BM</b>, n = number of unpaired electrons.' },
        { front: 'Spin-only moments of Ti<sup>3+</sup> and Fe<sup>2+</sup>?', back: 'Ti<sup>3+</sup> 3d<sup>1</sup>, n = 1: <b>1.73 BM</b>. Fe<sup>2+</sup> 3d<sup>6</sup>, n = 4: <b>4.90 BM</b>.' },
        { front: 'Moment with orbital contribution?', back: '<b>µ = √[L(L+1) + 4S(S+1)]</b>.' },
        { front: 'Define permeability.', back: '<b>µ = B/H</b>: how easily magnetic flux lines flow through a material.' },
        { front: 'Relative permeability?', back: '<b>µ<sub>r</sub> = µ/µ<sub>0</sub> = B/B<sub>0</sub></b>.' },
        { front: 'Define magnetization and susceptibility.', back: 'M = moment per unit volume. <b>χ = M/H</b>.' },
        { front: 'Which 3d element has the most unpaired electrons?', back: '<b>Chromium</b> (six: five in 3d and one in 4s).' }
      ],
      oneLiners: [
        'Electron magnetism has two sources: spin and orbital motion.',
        'Spin-only moment = √[n(n+2)] Bohr magnetons.',
        'B = µH; relative permeability µr = µ/µ0.',
        'M = χH; susceptibility χ is magnetization per unit field.',
        'In a material B = µ0H + µ0M; in vacuum B = µ0H.'
      ],
      formulas: [
        { name: 'Spin-only moment', html: `µ<sub>eff</sub> = √[n(n+2)] BM`, note: 'n = unpaired electrons.' },
        { name: 'Moment with orbital part', html: `µ = √[L(L+1) + 4S(S+1)]`, note: '' },
        { name: 'Permeability', html: `µ = B / H, µ<sub>r</sub> = µ / µ<sub>0</sub>`, note: '' },
        { name: 'Susceptibility', html: `χ = M / H`, note: 'B = µ<sub>0</sub>(H + M).' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm3-magnetic-classes',
      title: 'Dia-, para-, ferro-, antiferro- and ferrimagnetism',
      short: 'Types of magnetism',
      blurb: 'The five classes of magnetic material: origin, susceptibility, temperature dependence, Curie and Néel temperatures, and the ordering of spins.',
      source: 'Pages 42–58',
      tabs: [
        { title: 'Five classes', html: `
          <p class="lead">Every substance is an assembly of atoms that are either magnetic or non-magnetic. By response to a field, materials fall into five classes.</p>
          <div class="chips"><span class="chip">diamagnetic</span><span class="chip">paramagnetic</span><span class="chip">ferromagnetic</span><span class="chip">antiferromagnetic</span><span class="chip">ferrimagnetic</span></div>
          <p>Ferro-, antiferro- and ferrimagnetism need no new kind of moment. They are different ways the <b>same moments are coupled (arranged)</b>.</p>
          <figure data-fig="m3-spin-arrangements"></figure>
          <table class="tbl">
            <thead><tr><th>Type</th><th>Spin arrangement</th></tr></thead>
            <tbody>
              <tr><td>Paramagnetic</td><td>Random</td></tr>
              <tr><td>Ferromagnetic</td><td>All parallel</td></tr>
              <tr><td>Antiferromagnetic</td><td>Alternating, equal and opposite</td></tr>
              <tr><td>Ferrimagnetic</td><td>Alternating, unequal and opposite</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Diamagnetism', html: `
          <p class="lead">Found in substances whose atoms have <b>no unpaired electrons</b>, so no net magnetic moment.</p>
          <ul>
            <li>It comes from the <b>orbital motion of filled (paired) electrons</b>. The orbits have different orientations, so the net moment is zero.</li>
            <li>An applied field changes the orbital motion and <b>induces a moment opposite to the field</b>. Lines of force are repelled.</li>
            <li>The induced magnetization is very weak.</li>
            <li>It exists in magnetic substances too, but is weak and masked there.</li>
            <li><b>Relative permeability is slightly less than 1.</b> Susceptibility is <b>independent of field strength</b>.</li>
          </ul>
          <table class="tbl">
            <thead><tr><th>Susceptibility</th><th>Temperature dependence</th><th>Examples</th></tr></thead>
            <tbody>
              <tr><td>Small, negative</td><td>Independent</td><td>Organic materials, light elements</td></tr>
              <tr><td>Intermediate, negative</td><td>Below 20 K varies with field and temperature</td><td>Alkaline earths, bismuth</td></tr>
              <tr><td>Large, negative</td><td>Exists only below the critical temperature (Meissner effect)</td><td>Superconductors</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Paramagnetism', html: `
          <p class="lead">Atoms with <b>unpaired electrons</b> and unfilled shells have a net moment, oriented at random on different atoms.</p>
          <ul>
            <li>With no field, thermal fluctuation keeps the moments random, so there is <b>no magnetization</b>.</li>
            <li>An applied field tends to align the dipoles and gives an <b>induced positive moment</b>. That is paramagnetic behaviour.</li>
            <li>Susceptibility is <b>small and positive</b>, independent of field strength.</li>
            <li>The unpaired spins can interact, giving cooperative effects such as ferromagnetism.</li>
          </ul>
          <div class="eq" data-label="Curie law">χ = C / T</div>
          <p>C is the Curie constant. Examples: alkali metals, transition metals, rare earths.</p>
        ` },
        { title: 'Ferromagnetism', html: `
          <p class="lead">Strong magnetization <b>even with no applied field</b>, from unpaired electrons interacting cooperatively.</p>
          <ul>
            <li>It comes from <b>exchange coupling</b> between adjacent atoms, which gives <b>spontaneous magnetization</b>.</li>
            <li>Spins align <b>parallel</b>.</li>
            <li>In a field it attracts the lines of force very strongly.</li>
            <li>Each ferromagnet has a <b>Curie temperature θ<sub>f</sub></b>; spontaneous magnetization exists below it.</li>
            <li>Ferromagnets show <b>hysteresis</b> and consist of many small regions called <b>domains</b>.</li>
          </ul>
          <div class="eq" data-label="Curie–Weiss law">χ = C / (T − θ)</div>
          <p>Susceptibility is very large and positive. The material is <b>paramagnetic above θ<sub>f</sub></b> and <b>ferromagnetic below it</b>. Examples: <b>Fe, Co, Ni, Gd</b>.</p>
        ` },
        { title: 'Antiferromagnetism', html: `
          <p class="lead">Macroscopically like paramagnetism, a <b>weak</b> form of magnetism. When interacting atoms are close, exchange forces favour <b>antiparallel</b> spins on neighbouring atoms.</p>
          <ul>
            <li>Susceptibility <b>rises with temperature to a maximum at the Néel temperature T<sub>N</sub></b>, then falls above it.</li>
            <li>Small and positive.</li>
            <li><b>χ = C/(T + θ)</b> for T &gt; T<sub>N</sub>; <b>χ ∝ T</b> for T &lt; T<sub>N</sub>.</li>
          </ul>
          <p>Examples: <b>NiO, MnO</b>.</p>
        ` },
        { title: 'Ferrimagnetism', html: `
          <p class="lead">A special case of antiferromagnetism where the antiparallel sublattice moments have <b>different magnitudes</b>. The net magnetization is not zero, so the material has a <b>net moment</b>.</p>
          <ul>
            <li>The moment disappears above a Curie temperature (like the Néel temperature). Above T<sub>C</sub>, thermal energy randomises the moments and the material becomes <b>paramagnetic</b>.</li>
            <li>Ferrimagnetic domains become <b>magnetic bubbles that act as memory elements</b>.</li>
            <li>Susceptibility is very large and positive.</li>
          </ul>
          <p>Example: <b>ferrites</b>.</p>
          <div class="note heads-up"><p>The slide table says "χ = C/(T ± θ) when T &gt; T<sub>N</sub>; when T &lt; T<sub>N</sub> behaves as paramagnetic". The slide text says paramagnetic <b>above</b> the Curie temperature, so the table has the direction reversed and uses T<sub>N</sub> where T<sub>C</sub> is meant. Use the text version.</p></div>
        ` },
        { title: 'Summary table', html: `
        <figure data-fig="m3-chi-temperature"></figure>
        <div data-viz="curie-temperature"></div>
          <table class="tbl">
            <thead><tr><th>Type</th><th>Susceptibility</th><th>Atomic behaviour</th><th>Example (χ)</th></tr></thead>
            <tbody>
              <tr><td>Diamagnetism</td><td>Small, negative</td><td>Atoms have no magnetic moment</td><td>Au −2.74×10<sup>−6</sup>; Cu −0.77×10<sup>−6</sup></td></tr>
              <tr><td>Paramagnetism</td><td>Small, positive</td><td>Randomly oriented moments</td><td>β-Sn 0.19×10<sup>−6</sup>; Pt 21.04×10<sup>−6</sup>; Mn 66.10×10<sup>−6</sup></td></tr>
              <tr><td>Ferromagnetism</td><td>Large, positive; depends on field and microstructure</td><td>Parallel aligned moments</td><td>Fe ~100 000</td></tr>
              <tr><td>Antiferromagnetism</td><td>Small, positive</td><td>Mixed parallel and antiparallel moments</td><td>Cr 3.6×10<sup>−6</sup></td></tr>
              <tr><td>Ferrimagnetism</td><td>Large, positive; depends on field and microstructure</td><td>Antiparallel aligned moments</td><td>Ba ferrite ~3</td></tr>
            </tbody>
          </table>
          <div class="kv">
            <div><span>Paramagnet</span><b>χ falls as T rises (Curie law, 1/χ through the origin)</b></div>
            <div><span>Ferromagnet</span><b>1/χ meets the T axis at +θ (Curie–Weiss)</b></div>
            <div><span>Antiferromagnet</span><b>χ peaks (cusp) at T<sub>N</sub>; extrapolated 1/χ meets the T axis at −θ</b></div>
          </div>
        ` },
        { title: 'Curie and Néel temperatures', html: `
          <table class="tbl">
            <thead><tr><th>Element</th><th>T<sub>C</sub> (K)</th><th>T<sub>N</sub> (K)</th></tr></thead>
            <tbody>
              <tr><td>Cr</td><td>–</td><td>308</td></tr><tr><td>Mn</td><td>–</td><td>100</td></tr>
              <tr><td>Fe</td><td>1043</td><td>–</td></tr><tr><td>Co</td><td>1404</td><td>–</td></tr><tr><td>Ni</td><td>631</td><td>–</td></tr>
              <tr><td>Ce</td><td>–</td><td>12.5</td></tr><tr><td>Pr</td><td>–</td><td>25</td></tr><tr><td>Nd</td><td>–</td><td>19</td></tr><tr><td>Sm</td><td>–</td><td>14.8</td></tr><tr><td>Eu</td><td>–</td><td>90</td></tr>
              <tr><td>Gd</td><td>293</td><td>–</td></tr><tr><td>Tb</td><td>222</td><td>229</td></tr><tr><td>Dy</td><td>85</td><td>179</td></tr><tr><td>Ho</td><td>20</td><td>131</td></tr><tr><td>Er</td><td>20</td><td>84</td></tr><tr><td>Tm</td><td>25</td><td>56</td></tr>
            </tbody>
          </table>
          <h3>Ferromagnetism in metals</h3>
          <ul>
            <li>Two ways to understand it: (i) moments <b>localised on atoms</b>, used in molecular field theory and Heisenberg's approach; (ii) the <b>band structure</b> of metals, which gives <b>itinerant electrons</b>.</li>
            <li>Even in Fe most electrons behave as localised. Of 8 valence electrons in the (3d + 4s) bands, only about <b>0.95 (4s)</b> are free or itinerant and about <b>7.05</b> sit in the localised 3d band.</li>
          </ul>
        ` }
      ],
      flashcards: [
        { front: 'Diamagnetism: origin and sign of χ?', back: 'Paired electrons; the field induces a moment <b>opposing</b> it. χ is <b>small and negative</b>, µ<sub>r</sub> slightly below 1.' },
        { front: 'Paramagnetism: origin and law?', back: 'Unpaired electrons with random moments. χ small, positive, <b>Curie law χ = C/T</b>.' },
        { front: 'Ferromagnetism: key points?', back: '<b>Parallel</b> spins by exchange coupling, spontaneous magnetization, domains, hysteresis. <b>χ = C/(T − θ)</b>. Fe, Co, Ni, Gd.' },
        { front: 'Antiferromagnetism: key points?', back: '<b>Antiparallel equal</b> spins. χ peaks at the <b>Néel temperature</b>. NiO, MnO.' },
        { front: 'Ferrimagnetism: key points?', back: 'Antiparallel but <b>unequal</b> moments, so a net moment. Ferrites; magnetic bubbles for memory.' },
        { front: 'Curie temperature vs Néel temperature?', back: 'Curie: ferro/ferri to paramagnetic. Néel: antiferro to paramagnetic.' },
        { front: 'Curie temperatures of Fe, Co, Ni?', back: '<b>1043 K, 1404 K, 631 K</b>.' },
        { front: 'Itinerant vs localised electrons in Fe?', back: 'About <b>0.95</b> itinerant (4s) and <b>7.05</b> localised (3d).' }
      ],
      oneLiners: [
        'Dia: no unpaired electrons, weak, opposes the field. Para: unpaired, random, weakly attracted.',
        'Ferro: parallel spins, spontaneous magnetization, domains, hysteresis, Curie temperature.',
        'Antiferro: equal antiparallel spins, Néel temperature; ferri: unequal antiparallel, net moment.',
        'Curie law χ = C/T; Curie–Weiss law χ = C/(T − θ).',
        'Fe, Co, Ni and Gd are the ferromagnetic elements; NiO and MnO are antiferromagnets.'
      ],
      formulas: [
        { name: 'Curie law', html: `χ = C / T`, note: 'Paramagnets.' },
        { name: 'Curie–Weiss law', html: `χ = C / (T − θ)`, note: 'Ferromagnets above the Curie temperature.' },
        { name: 'Antiferromagnet', html: `χ = C / (T + θ), T &gt; T<sub>N</sub>`, note: 'χ ∝ T below the Néel temperature.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm3-hysteresis-storage',
      title: "Superexchange, hysteresis and applications in storage devices",
      short: "Hysteresis & storage",
      blurb: 'Superexchange in NiO, the hysteresis loop with saturation, remanence and coercivity, hard and soft magnets, and magnetic recording materials and heads.',
      source: 'Pages 59–68',
      tabs: [
        { title: 'Superexchange', html: `
          <p class="lead">In the paramagnetic state the moments of ions with unpaired electrons are random. An applied field only partly aligns them.</p>
          <figure data-fig="m3-superexchange"></figure>
          <ul>
            <li>In the ferro and antiferro states the dipoles align <b>spontaneously</b>, because of a positive interaction energy between spins. This cooperative interaction is <b>quantum mechanical</b> in origin.</li>
            <li>One mechanism behind antiferromagnetism in <b>NiO</b> is <b>superexchange</b>: the single electrons in the d<sub>z²</sub> and d<sub>x²−y²</sub> orbitals of one Ni<sup>2+</sup> couple antiferromagnetically with those of a neighbouring Ni<sup>2+</sup>, <b>through the p orbital of the oxide ion</b>.</li>
          </ul>
          <div class="note why"><p>The two nickel ions never touch. The O<sup>2−</sup> between them passes the spin information along the Ni–O–Ni line, and the paired electrons in the oxygen p orbital force the two nickel spins to point opposite ways.</p></div>
        ` },
        { title: 'Hysteresis loop', html: `
          <p class="lead">The striking property of ferromagnets is the relation between magnetization M and field H, called <b>hysteresis</b>. Ferromagnets contain <b>domains</b>, with parallel spins inside each. At saturation all domains share one orientation.</p>
          <figure data-fig="m3-hysteresis-loop"></figure>
          <ol class="steps">
            <li><b>Virgin curve.</b> Start unmagnetised (M = 0) and raise H. M rises to a maximum at P, the <b>saturation magnetization M<sub>s</sub></b>. More field adds no more moment.</li>
            <li><b>Remanence.</b> Reduce H to zero. M falls only to Q, the <b>residual magnetization M<sub>r</sub></b>.</li>
            <li><b>Coercivity.</b> Push H negative. M reaches zero at R, where the field is the <b>coercivity H<sub>c</sub></b>.</li>
            <li><b>Reverse saturation.</b> Increase the reverse field and M peaks at S (−M<sub>s</sub>).</li>
            <li><b>Close the loop.</b> Reverse the polarity and raise it again. M falls to the residual value, to zero, then back to saturation and rejoins the original curve.</li>
          </ol>
          <div class="note exam"><p><b>The area of the loop equals the energy wasted per cycle.</b> Large loop, large loss.</p></div>
          <figure data-fig="m3-hard-soft-loops"></figure>
          <div data-viz="hysteresis-loop"></div>
          <div class="vs">
            <div class="side"><h4>Hard magnetic material</h4><p>Large loop, high coercivity. Example: <b>Alnico alloy</b>. Used for permanent magnets.</p></div>
            <div class="side"><h4>Soft magnetic material</h4><p>Small loop, <b>low coercivity</b>. Example: <b>ferrous-nickel alloy</b>. Used for cores.</p></div>
          </div>
        ` },
        { title: 'Applications', html: `
          <p class="lead">The loop shape decides the job.</p>
          <ul>
            <li><b>Soft magnetic materials:</b> ferromagnets used to <b>enhance the flux density B</b> produced when current flows. Cores for electromagnets, motors, transformers, generators and other electrical equipment.</li>
            <li><b>Data storage materials.</b></li>
            <li><b>Permanent magnets:</b> strong, hard magnets.</li>
          </ul>
          <div class="note why"><p>Cores are switched back and forth thousands of times per second, so they need a thin loop to waste little energy. Permanent magnets need the opposite: a fat loop that resists being demagnetised.</p></div>
        ` },
        { title: 'Recording materials', html: `
          <table class="tbl">
            <thead><tr><th>Material</th><th>Particle length (µm)</th><th>Aspect ratio</th><th>B<sub>r</sub> (Wb/m²)</th><th>H<sub>c</sub> (kA/m)</th><th>Curie temp (°C)</th></tr></thead>
            <tbody>
              <tr><td>γ-Fe<sub>2</sub>O<sub>3</sub></td><td>0.20</td><td>5:1</td><td>0.44</td><td>22–34</td><td>600</td></tr>
              <tr><td>Co-γ-Fe<sub>2</sub>O<sub>3</sub></td><td>0.20</td><td>6:1</td><td>0.48</td><td>30–75</td><td>700</td></tr>
              <tr><td>CrO<sub>2</sub></td><td>0.20</td><td>10:1</td><td>0.50</td><td>30–75</td><td>125</td></tr>
              <tr><td>Fe</td><td>0.15</td><td>10:1</td><td>1.40*</td><td>56–176</td><td>770</td></tr>
              <tr><td>Barium ferrite</td><td>0.05 (0.02 µm thick)</td><td>–</td><td>0.40</td><td>56–240</td><td>350</td></tr>
            </tbody>
          </table>
          <p>Other columns on the slide: B<sub>r</sub> in emu/cc (350, 380, 400, 1100*, 320), H<sub>c</sub> in Oe (420, 940, 950, 2200, 3000) and surface area in m²/g (15–30, 20–35, 18–55, 20–60, 20–25). *For overcoated, stable particles use only 50–80% of the value.</p>
          <p>Soft magnetic materials have <b>low coercivity</b>.</p>
        ` },
        { title: 'Magnetic storage', html: `
          <p class="lead">Magnetic oxides matter for <b>non-volatile memory</b> such as hard disk drives (HDDs) and magnetic RAM (MRAM), because they keep their magnetization when power is removed.</p>
          <ul>
            <li><b>MgFe<sub>2</sub>O<sub>4</sub> ferrites</b> are used in transformer cores, magnetic recording and information-storage devices.</li>
            <li><b>Cassettes, tapes and floppy disks</b> record data as variations in magnetisation on the surface of the medium: a polymer film with tiny <b>CrO<sub>2</sub> or γ-Fe<sub>2</sub>O<sub>3</sub></b> particles, or a thin magnetic film on a substrate.</li>
            <li>Each particle or domain is magnetised in one of two directions, representing <b>0 or 1</b>.</li>
            <li>The <b>read–write head</b> is a tiny electromagnet of a soft material such as <b>MnZn ferrite</b>.</li>
            <li><b>FeCr multilayers</b> show <b>giant magnetoresistance</b> and are used in high-density hard drives. Magnetoresistance is the change in resistance when a magnetic field is applied.</li>
            <li>For high-density hard disks the material is <b>SmCo<sub>5</sub> alloy</b>.</li>
          </ul>
          <h3>Read–write head</h3>
          <p>A soft-magnetic core with a coil on one arm and a narrow gap at the top. A <b>fringing field</b> bulges out of the gap into the recording medium, which holds the bits as alternating up and down magnetised regions.</p>
        ` }
      ],
      flashcards: [
        { front: 'What is superexchange?', back: 'Coupling of spins on two metal ions <b>through the p orbital of an oxide ion</b> (antiferromagnetic in NiO).' },
        { front: 'Define saturation magnetization, remanence, coercivity.', back: '<b>M<sub>s</sub></b>: maximum M. <b>M<sub>r</sub></b>: M left at H = 0. <b>H<sub>c</sub></b>: reverse field that brings M to zero.' },
        { front: 'What does the area of the hysteresis loop represent?', back: '<b>Energy wasted per cycle.</b>' },
        { front: 'Hard vs soft magnetic material?', back: 'Hard: large loop, high coercivity, Alnico, permanent magnets. Soft: small loop, low coercivity, ferrous-nickel, cores.' },
        { front: 'Uses of soft magnetic materials?', back: 'Cores for <b>electromagnets, motors, transformers, generators</b>.' },
        { front: 'Material of the read–write head?', back: 'A soft material such as <b>MnZn ferrite</b>.' },
        { front: 'Which multilayer shows giant magnetoresistance?', back: '<b>FeCr multilayers</b>, used in high-density hard drives.' },
        { front: 'Recording particles on tapes and floppy disks?', back: '<b>CrO<sub>2</sub> or γ-Fe<sub>2</sub>O<sub>3</sub></b>.' }
      ],
      oneLiners: [
        'Superexchange: Ni²⁺–O²⁻–Ni²⁺ spins couple antiparallel through the oxide p orbital.',
        'Hysteresis loop: virgin curve to Ms, remanence Mr at H = 0, coercivity Hc where M = 0.',
        'Loop area = energy lost per cycle.',
        'Hard magnets (Alnico) have fat loops; soft magnets (Fe–Ni alloy, MnZn ferrite) thin ones.',
        'Magnetic recording stores bits as up or down magnetised particles of CrO2 or γ-Fe2O3.',
        'FeCr multilayers: giant magnetoresistance for hard-drive heads.'
      ],
      formulas: []
    }
  ],
  figures: [
    { id: 'm3-bar-magnet-field', src: null, crop: null,
      caption: 'A bar magnet is a dipole: field lines leave the north pole and curve round to the south pole outside the magnet.',
      alt: 'A bar magnet drawn as a red N block next to a blue S block with curved field lines with arrows looping above and below from the N end to the S end.' },
    { id: 'm3-spin-arrangements', src: null, crop: null,
      caption: 'The same moments arranged four ways: random (paramagnetic), all parallel (ferromagnetic), alternating and equal (antiferromagnetic), alternating and unequal (ferrimagnetic).',
      alt: 'Four rows of arrows: randomly oriented, all pointing up, alternately up and down with equal lengths, and alternately up and down with unequal lengths.' },
    { id: 'm3-chi-temperature', src: null, crop: null,
      caption: 'Susceptibility against temperature: paramagnets follow C/T, ferromagnets follow Curie-Weiss above their Curie temperature, antiferromagnets peak at the Neel temperature.',
      alt: 'Three small graphs of susceptibility against temperature: a falling hyperbola, a curve diverging near the Curie temperature, and a rise to a peak at the Neel temperature followed by a fall.' },
    { id: 'm3-hysteresis-loop', src: null, crop: null,
      caption: 'Magnetisation against field for a ferromagnet: saturation at P, remanence Mr at Q, coercivity Hc at R, reverse saturation at S. The dashed curve is the first magnetisation.',
      alt: 'An S-shaped loop on M against H axes with labelled points P, Q, R and S, a dashed first-magnetisation curve from the origin, and Ms, Mr and Hc marked.' },
    { id: 'm3-hard-soft-loops', src: null, crop: null,
      caption: 'A hard magnet has a wide loop and high coercivity, suited to permanent magnets. A soft magnet has a narrow loop and low coercivity, suited to cores with low loss.',
      alt: 'Two hysteresis loops on the same axes scale: a wide red loop for a hard material and a narrow blue loop for a soft material.' },
    { id: 'm3-superexchange', src: null, crop: null,
      caption: 'Superexchange in NiO: the oxygen between two nickel ions passes the spin along the Ni-O-Ni line, so the two nickel spins point opposite ways.',
      alt: 'Three circles in a row labelled Ni2+, O2- and Ni2+ with spin arrows: up on the left Ni, a down and an up pair on oxygen, and down on the right Ni.' }
  ]
});
