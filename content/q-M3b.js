QUESTIONS({
  chunk: 'M3b',
  questions: [
    {
      id: 'm3-q-e01', module: 'm3', topic: 'm3-ohm-resistivity', type: 'numerical', level: 2,
      q: `<p>An electrician has <b>2.0 m</b> of copper wire with cross-section <b>1.0 mm<sup>2</sup></b>. Using the copper resistivity from the notes (1.68 µΩ·cm), what is its resistance? What current flows if 0.50 V is applied across it?</p>`,
      options: null, correct: null,
      answer: `<p>R ≈ <b>0.034 Ω</b>; I ≈ <b>15 A</b>.</p>`,
      explain: `<div class="worked"><div class="given"><ul><li>ρ = 1.68 µΩ·cm = 1.68 × 10<sup>−8</sup> Ω·m, l = 2.0 m, A = 1.0 × 10<sup>−6</sup> m<sup>2</sup></li></ul></div><div class="solve"><div class="eq">R = ρl/A = (1.68 × 10<sup>−8</sup> × 2.0)/(1.0 × 10<sup>−6</sup>) = 0.0336 Ω</div><div class="eq">I = V/R = 0.50/0.0336 ≈ 14.9 A</div></div><div class="result"><b>R ≈ 0.034 Ω, I ≈ 15 A</b></div></div><p>Convert µΩ·cm to Ω·m before combining with lengths in metres (1 µΩ·cm = 10<sup>−8</sup> Ω·m).</p>`,
      points: ['R = ρl/A', 'Unit conversion µΩ·cm to Ω·m', 'Ohm\'s law V = IR']
    },
    {
      id: 'm3-q-e02', module: 'm3', topic: 'm3-conducting-materials', type: 'decide', level: 2,
      q: `<p>A utility must string a long <b>overhead transmission line</b> across hills. Weight and cost matter, and the span needs mechanical strength. Which conductor from the notes fits best, and why not plain copper?</p>`,
      options: ['Annealed copper: highest conductivity and softest', 'ACSR: aluminium wires around a steel core, light but strong', 'Hard-drawn silver: lowest resistivity', 'Glass-insulated wire'],
      correct: 1,
      answer: `<p><b>ACSR</b> (Aluminium Conductor Steel Reinforced).</p>`,
      explain: `<p>Aluminium has low density (2.70 g/cm<sup>3</sup> against 8.96 for copper), good conductivity and corrosion resistance, but is soft. The <b>steel core</b> of ACSR carries the mechanical load while the aluminium carries the current. Copper is heavier and costlier, and silver is far too expensive for overhead lines.</p>`,
      points: ['Aluminium: low density, ductile, corrosion resistant', 'Steel core gives strength', 'Overhead lines and bus bars use aluminium']
    },
    {
      id: 'm3-q-e03', module: 'm3', topic: 'm3-band-theory', type: 'predict', level: 2,
      q: `<p>A temperature sensor is built from a silicon chip. At very low temperature it barely conducts, but when warmed to room temperature its conductivity rises noticeably. A copper wire in the same circuit shows the opposite trend (resistance rises with heating). Explain both behaviours with the band picture.</p>`,
      options: null, correct: null,
      answer: `<p>Silicon: <b>thermal excitation across a small gap</b> adds carriers. Copper: <b>no gap</b>, so heating only increases scattering.</p>`,
      explain: `<p>In a semiconductor the valence band is full and the conduction band empty, separated by a gap of about 1 eV. At low temperature it acts as an insulator. Heating lifts electrons across the gap and leaves holes, so conductivity <b>rises</b> (negative temperature coefficient of resistance). In a conductor the bands overlap, so carriers are always available; heating only makes the lattice scatter them more, so resistance <b>rises</b> (positive coefficient).</p>`,
      points: ['Semiconductor: small gap about 1 eV, carriers excited with T', 'Negative temperature coefficient for semiconductors', 'Metals: positive coefficient']
    },
    {
      id: 'm3-q-e04', module: 'm3', topic: 'm3-semiconductor-types-uses', type: 'decide', level: 1,
      q: `<p>A chip designer dopes pure silicon with <b>boron</b>. Which type of semiconductor results, what is the dopant called, and what carries most of the current?</p>`,
      options: ['n-type; donor; electrons', 'p-type; acceptor; holes', 'p-type; donor; holes', 'n-type; acceptor; electrons'],
      correct: 1,
      answer: `<p><b>p-type</b>, boron is an <b>acceptor</b>, and <b>holes</b> are the majority carriers.</p>`,
      explain: `<p>Boron is trivalent, one electron short of silicon's four. It accepts an electron from the lattice and leaves a hole, becoming a negatively ionised atom. The crystal as a whole stays neutral. Phosphorus, arsenic or antimony would give n-type instead.</p>`,
      points: ['Trivalent impurity gives p-type', 'Acceptor atom becomes negatively ionised', 'Holes are majority carriers']
    },
    {
      id: 'm3-q-e05', module: 'm3', topic: 'm3-superconductors', type: 'design', level: 3,
      q: `<p>A hospital wants a cheap way to keep MRI magnet coils superconducting. Compare mercury (T<sub>c</sub> = 4 K) with YBa<sub>2</sub>Cu<sub>3</sub>O<sub>7</sub> (T<sub>c</sub> = 93 K) as the coil material in terms of cooling, using that liquid nitrogen boils at 77 K and liquid helium at about 4 K.</p>`,
      options: null, correct: null,
      answer: `<p>YBa<sub>2</sub>Cu<sub>3</sub>O<sub>7</sub> can be cooled with <b>liquid nitrogen</b>; mercury needs <b>liquid helium</b>.</p>`,
      explain: `<p>A material is superconducting only below its critical temperature. Mercury at 4 K needs liquid helium, which is expensive and scarce. YBa<sub>2</sub>Cu<sub>3</sub>O<sub>7</sub> becomes superconducting at 93 K, which liquid nitrogen at 77 K stays below, so cooling is much cheaper. (Liquid nitrogen and helium boiling points are standard values, not from the slides.)</p>`,
      points: ['Superconductivity needs T below Tc', 'YBCO Tc 93 K above liquid-nitrogen temperature', 'Cheaper cryogen for high-Tc materials']
    },
    {
      id: 'm3-q-e06', module: 'm3', topic: 'm3-superconductors', type: 'interpret', level: 2,
      q: `<p>In a demonstration, a small magnet is placed on a disc that is then cooled in liquid nitrogen. Above a certain temperature the magnet sits on the disc; after cooling, it floats above it. What effect is shown, and what happens to the field inside the disc?</p>`,
      options: ['Ferromagnetism; the field inside grows', 'Meissner effect; the magnetic field is expelled from the interior', 'Paramagnetism; the field aligns with the magnet', 'Hysteresis; the field is stored'],
      correct: 1,
      answer: `<p>The <b>Meissner effect</b>: the field is expelled from the superconductor.</p>`,
      explain: `<p>Below its transition temperature the disc excludes magnetic flux from its interior, so the field lines bend around it and the magnet is repelled and floats. This is a property of the superconducting state (the Meissner state), not just zero resistance.</p>`,
      points: ['Flux exclusion below Tc', 'Levitation demonstrates the effect', 'Found by Meissner and Ochsenfeld, 1933']
    },
    {
      id: 'm3-q-m01', module: 'm3', topic: 'm3-magnetic-basics', type: 'numerical', level: 2,
      q: `<p>A chemist measures the magnetic moment of a transition metal complex and wants to count its unpaired electrons. Compute the spin-only moment for ions with 1, 2, 4 and 5 unpaired electrons, and say which count matches a measured value of about 4.9 BM.</p>`,
      options: ['1 unpaired', '2 unpaired', '4 unpaired', '5 unpaired'],
      correct: 2,
      answer: `<p>Moments: <b>1.73, 2.83, 4.90, 5.92 BM</b>. A reading of 4.9 BM means <b>4 unpaired electrons</b>.</p>`,
      explain: `<div class="worked"><div class="given"><ul><li>µ = √[n(n+2)] BM</li></ul></div><div class="solve"><div class="eq">n = 1: √3 = 1.73; n = 2: √8 = 2.83</div><div class="eq">n = 4: √24 = 4.90; n = 5: √35 = 5.92</div></div><div class="result"><b>4 unpaired electrons</b></div></div>`,
      points: ['Spin-only formula √[n(n+2)]', 'More unpaired electrons, larger moment', 'Use measured moment to count n']
    },
    {
      id: 'm3-q-m02', module: 'm3', topic: 'm3-magnetic-classes', type: 'interpret', level: 3,
      q: `<p>A material has susceptibility that <b>increases</b> with temperature up to 520 K, peaks, then falls on further heating as <b>χ = C/(T + θ)</b>. Its susceptibility is small and positive. Identify the type of magnetism and name the temperature at the peak.</p>`,
      options: ['Paramagnetic; Curie temperature', 'Ferromagnetic; Curie temperature', 'Antiferromagnetic; Néel temperature', 'Diamagnetic; critical temperature'],
      correct: 2,
      answer: `<p><b>Antiferromagnetic</b>; the peak is the <b>Néel temperature</b>.</p>`,
      explain: `<p>Antiferromagnets have neighbouring spins that align antiparallel, give a small positive χ, and χ rises with temperature (χ ∝ T) up to a maximum at T<sub>N</sub>, then follows χ = C/(T + θ) above it. NiO and MnO are examples. A paramagnet falls steadily with T (Curie law), and a ferromagnet has very large χ with a Curie temperature.</p>`,
      points: ['Antiferro: small positive χ, peak at TN', 'χ = C/(T + θ) above TN', 'Examples: NiO, MnO']
    },
    {
      id: 'm3-q-m03', module: 'm3', topic: 'm3-hysteresis-storage', type: 'design', level: 3,
      q: `<p>An engineer must choose magnetic materials for two jobs: (a) the <b>core of a transformer</b> reversing its field 50 times a second, and (b) a <b>permanent magnet</b> in a loudspeaker. Using the hysteresis loop, choose a type of material for each and justify the choice.</p>`,
      options: ['(a) hard magnet, (b) soft magnet', '(a) soft magnet with a small loop, (b) hard magnet with a large loop', 'Both soft magnets', 'Both hard magnets'],
      correct: 1,
      answer: `<p>(a) <b>Soft</b>, small loop (e.g. ferrous-nickel alloy). (b) <b>Hard</b>, large loop (e.g. Alnico).</p>`,
      explain: `<p>The area of the hysteresis loop is the energy wasted each cycle. A transformer core is magnetised and demagnetised constantly, so it needs a thin loop and <b>low coercivity</b> to waste little energy. A permanent magnet must keep its magnetisation and resist being demagnetised, so it needs high remanence and a wide loop with <b>high coercivity</b>.</p>`,
      points: ['Loop area = energy loss per cycle', 'Soft magnets: small loop, cores', 'Hard magnets: large loop, permanent magnets']
    },
    {
      id: 'm3-q-m04', module: 'm3', topic: 'm3-hysteresis-storage', type: 'explain', level: 2,
      q: `<p>A hard-drive designer says the read–write head and the recording medium need different magnetic properties. Which of the two should be a soft material and which should hold its magnetisation, and what do the stored 0 and 1 correspond to?</p>`,
      options: null, correct: null,
      answer: `<p>The <b>head is soft</b> (e.g. MnZn ferrite); the <b>medium holds magnetisation</b> (e.g. CrO<sub>2</sub>, γ-Fe<sub>2</sub>O<sub>3</sub>). Bits are the <b>two magnetisation directions</b>.</p>`,
      explain: `<p>The head is a tiny electromagnet that must switch quickly with little loss, so it uses a soft material. The medium must <b>keep</b> its magnetisation when power is off (non-volatile), so it uses particles with suitable coercivity. Each particle or domain is magnetised one of two ways, representing 0 or 1.</p>`,
      points: ['Head: soft magnetic material', 'Medium: retains magnetisation', 'Bit = direction of magnetisation']
    }
  ]
});
