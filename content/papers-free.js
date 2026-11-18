// CAT-2 question papers, free for everyone signed in: the actual papers (typed out from the printed paper) with
// model answers written from the notes, and "asked" (topic id -> where it came up) for the badge on each topic.
PAPERS({
  index: [
    {
      id: 'cat2-b1tb1',
      kind: 'actual',
      title: 'CAT-2 · Slot B1+TB1 · 28-09-2026',
      sub: 'Actual paper · Fall 2026–27'
    },
    {
      id: 'cat2-b2tb2',
      kind: 'actual',
      title: 'CAT-2 · Slot B2+TB2 · 28-09-2026',
      sub: 'Actual paper · Fall 2026–27'
    },
    {
      id: 'cat1-b1tb1-2026',
      kind: 'actual',
      title: 'CAT-1 · Slot B1+TB1 · 10-08-2026',
      sub: 'Actual paper · Fall 2026–27'
    },
    {
      id: 'cat1-b2tb2-2026',
      kind: 'actual',
      title: 'CAT-1 · Slot B2+TB2 · 10-08-2026',
      sub: 'Actual paper · Fall 2026–27'
    },
    {
      id: 'cat1-d1td1-2026',
      kind: 'actual',
      title: 'CAT-1 · Slot D1+TD1 · 12-08-2026',
      sub: 'Actual paper · Fall 2026–27'
    },
    {
      id: 'cat2-g1tg1-2025',
      kind: 'actual',
      title: 'CAT-2 · Slot G1+TG1 · 11-10-2025',
      sub: 'Actual paper · Fall 2025–26'
    },
    {
      id: 'cat1-g1tg1-2025',
      kind: 'actual',
      title: 'CAT-1 · Slot G1+TG1 · 23-08-2025',
      sub: 'Actual paper · Fall 2025–26'
    },
    {
      id: 'cat1-g2tg2-2025',
      kind: 'actual',
      title: 'CAT-1 · Slot G2+TG2 · 23-08-2025',
      sub: 'Actual paper · Fall 2025–26'
    },
    {
      id: 'cat1-d2td2-2025',
      kind: 'actual',
      title: 'CAT-1 · Slot D2+TD2 · 20-08-2025',
      sub: 'Actual paper · Fall 2025–26'
    },
    {
      id: 'cat1-d1td1-2025',
      kind: 'actual',
      title: 'CAT-1 · Slot D1+TD1 · 20-08-2025',
      sub: 'Actual paper · Fall 2025–26'
    },
    {
      id: 'fat-g1tg1-2025',
      kind: 'actual',
      title: 'FAT · Slot G1+TG1 · Nov 2025',
      sub: 'Actual paper · Fall 2025–26',
      exam: 'fat'
    },
    {
      id: 'fat-b1tb1-2026',
      kind: 'actual',
      title: 'FAT · Slot B1+TB1 · Nov 2026',
      sub: 'Actual paper · Fall 2026–27',
      exam: 'fat'
    }  ],
  papers: [
    {
      id: 'cat2-b1tb1',
      kind: 'actual',
      title: 'CAT-2 · Slot B1+TB1 · 28-09-2026',
      short: 'B1+TB1 paper',
      sub: 'Actual paper · Fall 2026–27',
      meta: [['Slot', 'B1+TB1'], ['Date', '28-09-2026'], ['Duration', '90 minutes'], ['Max marks', '50'], [
        'Programme',
        'B.Tech. Computer Science and Engineering'
      ]],
      instructions: `<b>General instructions:</b> Answer All Questions. M – Max mark; CO – Course Outcome; BL – Blooms Taxonomy Level (1 – Remember, 2 – Understand, 3 – Apply, 4 – Analyse, 5 – Evaluate, 6 – Create).<br><b>Course Outcomes:</b> CO2: Use chemical concepts for the advancement of materials in electrical, magnetic, and energy domains. CO3: Demonstrate UV Visible spectroscopic and X-ray diffraction techniques.`,
      questions: [
        {
          n: '1',
          marks: '5+5',
          co: '2',
          bl: '3',
          prompt: `<p><b>(a)</b> A hydrogen–oxygen electrochemical power source is proposed for use in space vehicles. Identify the type of fuel cell and explain why it is particularly suitable for space-vehicle applications. With a neat diagram, explain the construction and working mechanism, indicating the movement of the ions and electrons through the cell. Write the anodic, cathodic and overall electrochemical reactions involved.</p>
<p><b>(b)</b> A nickel electrode is immersed in a 0.5 M Ni<sup>2+</sup> solution and a silver electrode in a 0.01 M Ag<sup>+</sup> solution. The standard reduction potentials of Ni<sup>2+</sup>/Ni and Ag<sup>+</sup>/Ag are −0.25 V and +0.80 V, respectively.</p>
<ol><li>Write the cell representation.</li><li>Write the oxidation and reduction half-cell reactions.</li><li>Calculate the cell potential (E<sub>cell</sub>) at 25 °C using the Nernst equation.</li></ol>`,
          answer: `<p><b>(a) The alkaline H<sub>2</sub>–O<sub>2</sub> fuel cell (AFC)</b>, the hydrogen–oxygen fuel cell with aqueous KOH as the electrolyte.</p>
<p><b>Why it suits space vehicles</b></p>
<ul><li>Its only product is <b>water</b>, which the crew can drink. Nothing toxic is released into a closed cabin.</li>
<li>Very high energy conversion (75–82%) with no combustion, so less fuel has to be carried for the same energy.</li>
<li>No moving parts: very quiet, low maintenance and highly reliable.</li>
<li>Extra: the H<sub>2</sub> and O<sub>2</sub> are already on board as rocket propellants.</li></ul>
<figure data-fig="m2-afc-diagram"></figure>
<p><b>Construction:</b> both electrodes are porous graphite with a Pt, Ag or metal-oxide catalyst. The pores let gas, electrolyte and catalyst meet at many three-way contact points. The electrolyte is aqueous KOH (or NaOH).</p>
<p><b>Working:</b> H<sub>2</sub> diffuses into the anode and is oxidised by OH<sup>−</sup> to water, releasing electrons. The electrons cannot pass through the electrolyte, so they travel through the external circuit to the cathode; that flow is the current. At the cathode O<sub>2</sub> takes up the electrons and water to form OH<sup>−</sup>, which migrates back through the KOH to the anode.</p>
<div class="eq">Anode: 2H<sub>2</sub> + 4OH<sup>−</sup> → 4H<sub>2</sub>O + 4e<sup>−</sup></div>
<div class="eq">Cathode: O<sub>2</sub> + 2H<sub>2</sub>O + 4e<sup>−</sup> → 4OH<sup>−</sup></div>
<div class="eq">Overall: 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</div>
<p><b>(b)</b> Ag<sup>+</sup>/Ag has the higher reduction potential, so silver is the cathode and nickel the anode.</p>
<ol><li><b>Cell:</b> Ni(s) | Ni<sup>2+</sup> (0.5 M) || Ag<sup>+</sup> (0.01 M) | Ag(s)</li>
<li><b>Oxidation (anode):</b> Ni → Ni<sup>2+</sup> + 2e<sup>−</sup>. <b>Reduction (cathode):</b> 2Ag<sup>+</sup> + 2e<sup>−</sup> → 2Ag. Overall: Ni + 2Ag<sup>+</sup> → Ni<sup>2+</sup> + 2Ag, with n = 2.</li>
<li><b>E<sub>cell</sub>:</b></li></ol>
<div class="eq">E°<sub>cell</sub> = E°<sub>cathode</sub> − E°<sub>anode</sub> = 0.80 − (−0.25) = 1.05 V</div>
<div class="eq">E<sub>cell</sub> = E°<sub>cell</sub> − (0.0591 / n) log ([Ni<sup>2+</sup>] / [Ag<sup>+</sup>]<sup>2</sup>)</div>
<div class="eq">= 1.05 − (0.0591 / 2) log (0.5 / (0.01)<sup>2</sup>) = 1.05 − 0.02955 × log 5000</div>
<div class="eq">= 1.05 − 0.02955 × 3.699 = 1.05 − 0.109 = <b>0.94 V</b></div>
<div class="note trap"><p>Forgetting to square [Ag<sup>+</sup>]: the balanced reaction has 2Ag<sup>+</sup>, so the quotient is [Ni<sup>2+</sup>]/[Ag<sup>+</sup>]<sup>2</sup>. Leaving it unsquared gives 1.05 − 0.02955 × log 50 = 1.00 V, which is wrong. Also, n = 2, not 1.</p></div>
<div class="note exam"><p>Five marks each part. In (a) the diagram with both arrows (e<sup>−</sup> through the wire, OH<sup>−</sup> through the KOH) and the three reactions carry most of the marks. In (b) show E°, the Nernst expression with the right quotient, and the final 0.94 V with its unit.</p></div>`,
          topics: ['m2-fuel-cells', 'm2-electrochemical-cells'],
          notes: ['m2-fuel-cells.3', 'm2-fuel-cells.4', 'm2-electrochemical-cells.3', 'm2-electrochemical-cells.4']
        },
        {
          n: '2',
          marks: 10,
          co: '2',
          bl: '3',
          prompt: `<p>A rechargeable electrochemical cell employed in electric vehicles and renewable-energy storage systems operates through the reversible movement of a light metal species between two layered host structures. Using a suitable diagram, analyse the ion and electron transport mechanism, formulate the electrode and overall charge–discharge reactions, and justify how the layered host structures facilitate reversible cycling and high energy density.</p>`,
          answer: `<p>This is the <b>lithium-ion battery</b>: Li<sup>+</sup> shuttles between a layered LiCoO<sub>2</sub> cathode and a layered graphite anode (a "rocking-chair" cell). It holds no metallic lithium.</p>
<figure data-fig="m2-liion-charge-discharge"></figure>
<p><b>Transport mechanism</b></p>
<ul><li><b>Charging:</b> Co<sup>3+</sup> in LiCoO<sub>2</sub> is oxidised towards Co<sup>4+</sup> and releases electrons. Li<sup>+</sup> leaves the oxide layers, crosses the electrolyte and separator, and slides in between the graphite sheets. The electrons are pushed round the outer circuit by the charger and meet the Li<sup>+</sup> in the graphite.</li>
<li><b>Discharging:</b> Li<sup>+</sup> leaves the graphite, migrates back through the electrolyte and re-enters the spaces between the oxide layers. Electrons flow from graphite to LiCoO<sub>2</sub> through the device and do the work.</li>
<li>Only Li<sup>+</sup> crosses the electrolyte; the separator lets ions through but stops the electrodes touching.</li></ul>
<p><b>Charging reactions</b></p>
<div class="eq">Positive: LiCoO<sub>2</sub> → Li<sub>1−n</sub>CoO<sub>2</sub> + nLi<sup>+</sup> + ne<sup>−</sup></div>
<div class="eq">Negative: C<sub>6</sub> + nLi<sup>+</sup> + ne<sup>−</sup> → Li<sub>n</sub>C<sub>6</sub></div>
<div class="eq">Overall: LiCoO<sub>2</sub> + C<sub>6</sub> → Li<sub>1−n</sub>CoO<sub>2</sub> + Li<sub>n</sub>C<sub>6</sub></div>
<p><b>Discharging reactions</b></p>
<div class="eq">Negative: Li<sub>n</sub>C<sub>6</sub> → C<sub>6</sub> + nLi<sup>+</sup> + ne<sup>−</sup></div>
<div class="eq">Positive: Li<sub>1−n</sub>CoO<sub>2</sub> + nLi<sup>+</sup> + ne<sup>−</sup> → LiCoO<sub>2</sub></div>
<div class="eq">Overall: Li<sub>1−n</sub>CoO<sub>2</sub> + Li<sub>n</sub>C<sub>6</sub> → LiCoO<sub>2</sub> + C<sub>6</sub></div>
<p>LiCoO<sub>2</sub> is always the positive plate and graphite the negative one. The names anode and cathode swap between charging and discharging, because the anode is wherever oxidation happens.</p>
<p><b>Why layered hosts work</b></p>
<ul><li><b>Intercalation, not plating:</b> Li<sup>+</sup> slips in and out between layers that stay intact, so there is no dissolving or rebuilding of electrodes and no lithium-metal dendrites. That makes thousands of cycles possible.</li>
<li><b>Small structural change:</b> the layers only expand and contract slightly as Li<sup>+</sup> enters and leaves, so the electrodes do not crack.</li>
<li><b>Fast diffusion:</b> the open 2D gaps let the small Li<sup>+</sup> ion move quickly, which supports high power.</li>
<li><b>High energy density:</b> lithium is very light (high energy per kg), and Li<sup>+</sup> has a very negative reduction potential, so each cell gives about 3.6–3.7 V, nearly three times a Ni–Cd cell (high energy per litre). Low self-discharge and no memory effect suit EVs and grid storage.</li></ul>`,
          topics: ['m2-li-ion', 'm2-batteries'],
          notes: ['m2-li-ion.3', 'm2-li-ion.4', 'm2-li-ion.5']
        },
        {
          n: '3',
          marks: 10,
          co: '2',
          bl: '2',
          prompt: `<p>A semiconductor-based photoelectrochemical device incorporates a photosensitizer to extend the semiconductor's light-absorption range. Design a suitable photoelectrochemical system with a neat diagram and explain the function of each component; illustrate the sequence of events from light absorption by the photosensitizer to charge separation, charge transport and current generation, and critically explain how these processes enable efficient production of electricity.</p>`,
          answer: `<p>This is the <b>dye-sensitized solar cell (DSSC, Grätzel cell)</b>, a regenerative PEC cell. TiO<sub>2</sub> alone absorbs only UV; a dye (the photosensitizer) absorbs the visible light and hands its electron to the TiO<sub>2</sub>.</p>
<figure data-fig="m2-dssc-schematic"></figure>
<p><b>Components and their functions</b></p>
<ul><li><b>Transparent conductive glass (FTO, SnO<sub>2</sub>:F or ITO, In<sub>2</sub>O<sub>3</sub>:Sn):</b> lets light in (&gt; 80% transparent) and collects current.</li>
<li><b>Nanoporous TiO<sub>2</sub> film:</b> wide-gap semiconductor. Its huge surface area holds a lot of dye, and its conduction band accepts and carries the injected electrons.</li>
<li><b>Photosensitizer (dye, e.g. Ru(bpy)<sub>3</sub><sup>2+</sup> or a natural dye):</b> absorbs visible light. It is anchored by –COOH or phosphoric acid groups and needs a hydrophobic periphery for stability.</li>
<li><b>Electrolyte (I<sup>−</sup>/I<sub>3</sub><sup>−</sup> redox couple):</b> gives an electron back to the oxidised dye and carries charge to the counter electrode.</li>
<li><b>Counter electrode (Pt or graphite):</b> catalyses the reduction of I<sub>3</sub><sup>−</sup> back to I<sup>−</sup>.</li></ul>
<p><b>Sequence of events</b></p>
<ol><li><b>Light absorption:</b> S + hν → S* (dye ground state to excited state).</li>
<li><b>Electron injection (charge separation):</b> S* → S<sup>+</sup> + e<sup>−</sup> (into the TiO<sub>2</sub> conduction band). The excited state lies above the CB, so injection happens within its nanosecond lifetime.</li>
<li><b>Carrier transport:</b> the electrons diffuse through the TiO<sub>2</sub> network to the FTO and collect at the −ve plate.</li>
<li><b>Current generation:</b> they flow through the external load to the counter electrode, doing work.</li>
<li><b>Reduction at the counter electrode:</b> I<sub>3</sub><sup>−</sup> + 2e<sup>−</sup> → 3I<sup>−</sup>.</li>
<li><b>Dye regeneration:</b> 2S<sup>+</sup> + 3I<sup>−</sup> → 2S + I<sub>3</sub><sup>−</sup>. The dye is ready to absorb again.</li></ol>
<p><b>Why this gives efficient electricity</b></p>
<ul><li>Absorption (dye) and transport (TiO<sub>2</sub>) are done by different materials, so each can be chosen for its job and the electron and the hole end up in different phases, which cuts recombination.</li>
<li>The nanoporous film gives an enormous dye-covered area, so most incoming light is caught even by a thin film.</li>
<li>The cell is regenerative: the electrolyte is oxidised at one electrode and reduced at the other, so nothing is used up.</li>
<li>It works in low light and at wide angles, and is cheap to make.</li>
<li><b>Limits:</b> the liquid electrolyte has temperature stability problems and volatile solvents, and Ru dyes and Pt are costly.</li></ul>
<div class="note trap"><p>Writing a plain silicon PV cell or an LJSC here misses the point: the question names a <b>photosensitizer</b>, so the answer is the DSSC. The dyed TiO<sub>2</sub> plate is the anode (−) and the counter electrode the cathode (+).</p></div>
<div class="note exam"><p>Ten marks: roughly the diagram, the five components with their jobs, the numbered sequence with the equations, and a short critical part (why it is efficient plus its limits).</p></div>`,
          topics: ['m2-dssc', 'm2-pec-cells'],
          notes: ['m2-dssc.0', 'm2-dssc.1', 'm2-pec-cells.0']
        },
        {
          n: '4',
          marks: 10,
          co: '2',
          bl: '2',
          prompt: `<p>Analyse why nanostructuring can result in electrical and optical properties that differ significantly from those of the corresponding bulk material, and discuss the factors responsible for these changes. Using a bottom-up approach, design a suitable synthetic route for nanoscale silica, illustrating the reaction equations and key processing steps involved in controlling its size and morphology, and critically evaluate the advantages and limitations of the chosen method.</p>`,
          answer: `<p><b>Why nano properties differ from bulk</b></p>
<ul><li><b>Large surface area to volume ratio:</b> cutting a solid into smaller pieces keeps the volume the same but raises the total surface area (6a<sup>2</sup>n for n cuts per edge). At the nanoscale a large fraction of atoms sit at the surface, with unsatisfied bonds and high surface energy, so reactivity, melting point and conductivity change.</li>
<li><b>Quantum confinement:</b> when the particle size approaches the de Broglie wavelength of the electrons, they are no longer free to move as in the bulk. Continuous bands break into discrete levels and the band gap widens as size falls. This drives a metal → semiconductor → insulator change in electrical behaviour.</li>
<li><b>Optical effects:</b> a bigger gap means absorption and emission shift to shorter wavelength, so colour depends on size. Bulk gold is yellow and shiny, nano gold is red to purple; quantum dots give tunable fluorescence.</li></ul>
<figure data-fig="m3-confinement-bands"></figure>
<ul>
<li><b>Factors:</b> particle size, shape and dimensionality (0D, 1D, 2D), surface atoms and defects, and the surrounding medium.</li></ul>
<p><b>Bottom-up route: sol–gel synthesis of silica nanoparticles</b></p>
<p>Precursor: a silicon alkoxide Si(OR)<sub>4</sub> in alcohol and water. Extra: the usual one is TEOS, Si(OC<sub>2</sub>H<sub>5</sub>)<sub>4</sub>.</p>
<ol><li><b>Hydrolysis:</b> –OR groups are replaced by –OH, giving a sol.
<div class="eq">Si(OR)<sub>4</sub> + 4H<sub>2</sub>O → Si(OH)<sub>4</sub> + 4ROH</div></li>
<li><b>Condensation (polycondensation):</b> Si–O–Si (siloxane) bridges form and grow into a network, the gel.
<div class="eq">(OR)<sub>3</sub>Si–OH + HO–Si(OR)<sub>3</sub> → (OR)<sub>3</sub>Si–O–Si(OR)<sub>3</sub> + H<sub>2</sub>O</div>
<div class="eq">(OR)<sub>3</sub>Si–OR + HO–Si(OR)<sub>3</sub> → (OR)<sub>3</sub>Si–O–Si(OR)<sub>3</sub> + ROH</div></li>
<li><b>Aging:</b> condensation continues; porosity decreases and the structure strengthens.</li>
<li><b>Drying:</b> water and alcohol are removed, giving a xerogel.</li>
<li><b>Calcination:</b> heating removes organic residue and gives SiO<sub>2</sub> nanoparticles.</li></ol>
<figure data-fig="m3-siloxane-network"></figure>
<p><b>Controlling size and morphology</b> (Extra: not in the course material): the water : alkoxide ratio, the acid or base catalyst (base, e.g. ammonia, favours separate spherical particles; acid favours chain-like networks), temperature, precursor concentration and aging time. Spin- or dip-coating the sol gives thin films instead of powder.</p>
<p><b>Advantages</b></p>
<ul><li>Works at very low temperature compared with melting glass or firing ceramics.</li>
<li>Monosized (uniform) nanoparticles of high purity and homogeneity are possible.</li>
<li>One sol can give powders, films or dense ceramics.</li></ul>
<p><b>Limitations</b></p>
<ul><li>Hard to control growth and to stop the particles agglomerating, since they carry a huge surface energy.</li>
<li>Hard to ensure complete reaction, so unreacted precursor or organic residue can remain; growth aids must be fully removed.</li>
<li>Very slow production rate of nanopowders. Extra: alkoxide precursors are costly.</li></ul>
<div class="note trap"><p>Ball milling is top-down, not bottom-up. And write the condensation equations as they are: the –OH + HO– condensation gives off H<sub>2</sub>O, the –OR + HO– one gives off ROH.</p></div>
<div class="note exam"><p>Ten marks, two halves: the reasons nano differs from bulk (surface area, quantum confinement, with an example), then the sol–gel route (equations, five steps, size control, pros and cons).</p></div>`,
          topics: ['m3-why-nano', 'm3-synthesis', 'm3-sol-gel'],
          notes: ['m3-why-nano.0', 'm3-why-nano.1', 'm3-sol-gel.3', 'm3-sol-gel.5']
        },
        {
          n: '5',
          marks: '5+5',
          co: '3',
          bl: '3',
          prompt: `<p><b>(a)</b> A series of organic compounds exhibits different absorption characteristics when interacting with electromagnetic radiation. Explain the fundamental principle of the appropriate spectroscopy. Using Congo red and methylene blue as representative coloured compounds, compare their absorption patterns and account for their intense colours in terms of chromophores, auxochromes, extent of conjugation and the electronic transitions involved. Relate the molecular structures of these compounds to their characteristic absorption in the visible region.</p>
<p><b>(b)</b> A crystalline material gives a diffraction peak at 2θ = 44.60° with an FWHM of 0.95° when analysed using X-rays of energy 6.93 keV. Taking the shape factor k = 0.9, determine the X-ray wavelength and the average crystallite size using the Scherrer equation, and critically comment on the significance of the calculated crystallite size in relation to the material's nanoscale properties. Given: h = 6.626 × 10<sup>−34</sup> J s, 1 eV = 1.602 × 10<sup>−19</sup> J.</p>`,
          answer: `<p><b>(a) UV-Visible spectroscopy</b></p>
<p><b>Principle:</b> molecules absorb light of 200–700 nm, whose energy matches the gap between electronic levels. A photon is absorbed only when hν = ΔE, lifting a valence electron from a bonding or lone-pair orbital to an antibonding one (π → π*, n → π*). The wavelength absorbed depends on the groups present, and the amount absorbed follows the Beer–Lambert law, A = εcl. A coloured compound absorbs one band of visible light and shows the complementary colour.</p>
<p><b>Terms:</b> a <b>chromophore</b> is an unsaturated group that absorbs (C=C, C=O, –N=N–, –NO<sub>2</sub>). An <b>auxochrome</b> (–OH, –NH<sub>2</sub>, –NR<sub>2</sub>, –SO<sub>3</sub>H, –COOH) is attached to it and shifts absorption to longer wavelength (bathochromic) and often raises intensity (hyperchromic). The more double bonds in conjugation, the smaller the π–π* gap and the longer the wavelength absorbed.</p>
<p><b>Congo red</b></p>
<ul><li>A bis-azo dye: two –N=N– chromophores join a central biphenyl to two naphthalene rings.</li>
<li>Auxochromes: –NH<sub>2</sub> and –SO<sub>3</sub><sup>−</sup>Na<sup>+</sup> on the naphthalene rings.</li>
<li>The azo groups and aromatic rings form one long conjugated system, so the π → π* band moves into the visible, with a weaker n → π* from the azo nitrogen lone pairs.</li>
<li>λ<sub>max</sub> ≈ 500 nm: it absorbs <b>green</b> light and looks <b>red</b>.</li></ul>
<p><b>Methylene blue</b></p>
<ul><li>A phenothiazinium dye: three fused rings with N and S in the central ring, carrying a delocalised positive charge.</li>
<li>Auxochromes: two –N(CH<sub>3</sub>)<sub>2</sub> groups whose lone pairs join the conjugation (a strong bathochromic push).</li>
<li>The flat, fully conjugated cationic ring system has a very small π–π* gap.</li>
<li>Absorbs at 600–700 nm (Extra: λ<sub>max</sub> ≈ 665 nm), <b>orange-red</b> light, so it looks <b>blue</b>.</li></ul>
<figure data-fig="m4-dye-structures"></figure>
<figure data-fig="m4-colour-wheel"></figure>
<p><b>Comparison:</b> methylene blue absorbs at a longer wavelength than Congo red because its rigid, planar ring and the two electron-donating –NMe<sub>2</sub> groups delocalise the π electrons over the whole cation, lowering the gap further. Both colours are intense because their π → π* transitions are allowed, with ε of the order of 10<sup>4</sup>–10<sup>5</sup> L mol<sup>−1</sup> cm<sup>−1</sup>.</p>
<p><b>(b) Wavelength</b> (c = 3.0 × 10<sup>8</sup> m s<sup>−1</sup>)</p>
<div class="eq">E = 6.93 × 10<sup>3</sup> × 1.602 × 10<sup>−19</sup> = 1.110 × 10<sup>−15</sup> J</div>
<div class="eq">λ = hc / E = (6.626 × 10<sup>−34</sup> × 3.0 × 10<sup>8</sup>) / 1.110 × 10<sup>−15</sup> = 1.79 × 10<sup>−10</sup> m = <b>0.179 nm (1.79 Å)</b></div>
<p>Extra: this matches Co Kα radiation. c is not given in the paper; use 3.0 × 10<sup>8</sup> m s<sup>−1</sup> and say so.</p>
<figure data-fig="m4-fwhm-peak"></figure>
<p><b>Crystallite size</b></p>
<div class="eq">θ = 44.60° / 2 = 22.30°, cos θ = 0.9252</div>
<div class="eq">β = 0.95° × π/180 = 0.01658 rad</div>
<div class="eq">D = kλ / (β cos θ) = (0.9 × 0.1791) / (0.01658 × 0.9252) = 0.1612 / 0.01534</div>
<div class="eq">D ≈ <b>10.5 nm</b></div>
<p><b>Significance:</b></p>
<ul><li>At about 10 nm the material is nanocrystalline (1–100 nm), so the broad peak is real size broadening.</li>
<li>A large fraction of atoms sit at the surface. Expect high surface area and reactivity, and possibly size-dependent optical or electronic behaviour (quantum effects become strong below roughly 10 nm).</li>
<li>Scherrer gives the size of the coherently diffracting crystallite, not of the particle. Particles (TEM) and grains (SEM) can be larger, since particle ≥ grain ≥ crystallite.</li>
<li>Instrument broadening and strain were not subtracted, so β is an overestimate and the true crystallite size is at least 10.5 nm.</li></ul>
<div class="note trap"><p>The two classic slips: using 2θ (44.60°) in cos θ instead of θ (22.30°), and leaving β in degrees. Also keep λ in nm so D comes out in nm, and use k = 0.9 as given, not 0.94.</p></div>
<div class="note exam"><p>Five marks each part. In (a) name both chromophores (–N=N– in Congo red, the conjugated phenothiazinium ring in methylene blue), the auxochromes, the π → π* transition, the absorbed band and the colour seen. In (b) show λ = hc/E, the Scherrer working and the comment.</p></div>`,
          topics: ['m4-uv-vis', 'm4-scherrer', 'm4-xrays'],
          notes: ['m4-uv-vis.5', 'm4-uv-vis.7', 'm4-scherrer.3', 'm4-scherrer.1']
        }
      ]
    },
    {
      id: 'cat2-b2tb2',
      kind: 'actual',
      title: 'CAT-2 · Slot B2+TB2 · 28-09-2026',
      short: 'B2+TB2 paper',
      sub: 'Actual paper · Fall 2026–27',
      meta: [['Slot', 'B2+TB2'], ['Date', '28-09-2026'], ['Duration', '90 minutes'], ['Max marks', '50'], [
        'Programme',
        'B.Tech. Computer Science and Engineering'
      ]],
      instructions: `<b>General instructions:</b> Answer All Questions. M – Max mark; CO – Course Outcome; BL – Blooms Taxonomy Level (1 – Remember, 2 – Understand, 3 – Apply, 4 – Analyse, 5 – Evaluate, 6 – Create).<br><b>Course Outcomes:</b> CO2: Use chemical concepts for the advancement of materials in electrical, magnetic, and energy domains. CO3: Demonstrate UV Visible spectroscopic and X-ray diffraction techniques.`,
      questions: [
        {
          n: '1',
          marks: '5+5',
          co: '2',
          bl: '3',
          prompt: `<p><b>(a)</b> Identify and explain an electrochemical power generation system that operates without any liquid or polymeric components, relying entirely on ceramic layers, with a diagram.</p>
<p><b>(b)</b> Write the half-cell reactions, the net reaction and calculate the cell EMF of the following cell at 298 K: Zn | Zn<sup>2+</sup> (0.001 M) || Ag<sup>+</sup> (0.1 M) | Ag. The standard reduction potentials are −0.76 V and 0.80 V respectively.</p>`,
          answer: `<p><b>(a) The solid oxide fuel cell (SOFC)</b>, also called a ceramic fuel cell: every layer is a solid ceramic, with no liquid electrolyte and no polymer membrane.</p>
<figure data-fig="m2-sofc-diagram"></figure>
<ul><li><b>Electrolyte:</b> yttria-stabilized zirconia (YSZ, ZrO<sub>2</sub> with Y<sub>2</sub>O<sub>3</sub>), which conducts O<sup>2−</sup> ions at 800–1000 °C.</li>
<li><b>Anode (fuel electrode):</b> porous Ni–YSZ cermet, so fuel reaches the electrolyte.</li>
<li><b>Cathode (air electrode):</b> porous ceramic such as LSM.</li>
<li><b>Fuels:</b> H<sub>2</sub> and CO; efficiency over 60%; relatively tolerant of sulphur.</li></ul>
<div class="eq">Cathode: O<sub>2</sub> + 4e<sup>−</sup> → 2O<sup>2−</sup></div>
<div class="eq">Anode: H<sub>2</sub> + CO + 2O<sup>2−</sup> → H<sub>2</sub>O + CO<sub>2</sub> + 4e<sup>−</sup></div>
<div class="eq">Overall: H<sub>2</sub> + CO + O<sub>2</sub> → H<sub>2</sub>O + CO<sub>2</sub></div>
<p><b>Pros:</b> all-solid, so no electrolyte loss or electrode corrosion; high efficiency and hot exhaust for cogeneration; low emissions. <b>Cons:</b> very high operating temperature, slow start-up, expensive materials.</p>
<p><b>(b)</b> Zn (−0.76 V) has the lower reduction potential, so Zn is the anode and Ag the cathode.</p>
<div class="eq">Anode: Zn → Zn<sup>2+</sup> + 2e<sup>−</sup></div>
<div class="eq">Cathode: 2Ag<sup>+</sup> + 2e<sup>−</sup> → 2Ag</div>
<div class="eq">Net: Zn + 2Ag<sup>+</sup> → Zn<sup>2+</sup> + 2Ag, n = 2</div>
<div class="eq">E°<sub>cell</sub> = 0.80 − (−0.76) = 1.56 V</div>
<div class="eq">E<sub>cell</sub> = E°<sub>cell</sub> − (0.0591 / 2) log ([Zn<sup>2+</sup>] / [Ag<sup>+</sup>]<sup>2</sup>) = 1.56 − 0.02955 log (0.001 / (0.1)<sup>2</sup>)</div>
<div class="eq">= 1.56 − 0.02955 × log 0.1 = 1.56 + 0.0296 = <b>1.59 V</b></div>
<div class="note trap"><p>Square [Ag<sup>+</sup>]: the balanced reaction has 2Ag<sup>+</sup>. Without the square, log(0.001/0.1) = −2 and you get 1.62 V, which is wrong. And n = 2, not 1.</p></div>
<div class="note exam"><p>Five marks each part. In (a): name the SOFC, the labelled three-layer diagram with the O<sup>2−</sup> arrow, and the three reactions. In (b): half reactions, net reaction, E°, the Nernst step and 1.59 V with its unit.</p></div>`,
          topics: ['m2-sofc', 'm2-electrochemical-cells'],
          notes: ['m2-sofc.1', 'm2-sofc.2', 'm2-electrochemical-cells.3']
        },
        {
          n: '2',
          marks: 10,
          co: '2',
          bl: '3',
          prompt: `<p>A team of researchers is developing a low-cost, translucent solar panel for smart windows. Instead of using highly purified silicon, they use an intense light-harvesting coloured monolayer on a semiconductor with a counter electrode and a liquid chemical redox shuttle. Recognise the device and explain with suitable diagram, mechanism, principle and applications.</p>`,
          answer: `<p>This is the <b>dye-sensitized solar cell (DSSC, Grätzel cell)</b>: the coloured monolayer is the dye, the semiconductor is nanoporous TiO<sub>2</sub>, and the redox shuttle is I<sup>−</sup>/I<sub>3</sub><sup>−</sup>.</p>
<p><b>Principle:</b> a dye absorbs visible light and injects an excited electron into the conduction band of a wide-gap semiconductor. The electron does work in the outer circuit and the redox electrolyte returns it to the dye, so nothing is used up (a regenerative photoelectrochemical cell).</p>
<figure data-fig="m2-dssc-schematic"></figure>
<p><b>Mechanism</b></p>
<ol><li>Light absorption: S + hν → S*</li>
<li>Electron injection: S* → S<sup>+</sup> + e<sup>−</sup> (into the TiO<sub>2</sub> conduction band)</li>
<li>Transport through TiO<sub>2</sub> to the FTO, then through the load to the counter electrode</li>
<li>At the counter electrode: I<sub>3</sub><sup>−</sup> + 2e<sup>−</sup> → 3I<sup>−</sup></li>
<li>Dye regeneration: 2S<sup>+</sup> + 3I<sup>−</sup> → 2S + I<sub>3</sub><sup>−</sup></li></ol>
<p><b>Why it suits smart windows:</b> the cell is transparent, cheap and works in low light and at wide angles; it needs no highly purified silicon.</p>
<p><b>Applications:</b> building-integrated windows and facades, indoor and low-light electronics (sensors, calculators), portable chargers, decorative panels.</p>
<div class="note trap"><p>The dyed TiO<sub>2</sub> side is the anode (−), not the cathode. And the dye is regenerated by I<sup>−</sup>, not by the counter electrode directly.</p></div>
<div class="note exam"><p>Ten marks: naming the DSSC, the labelled diagram, the five-step mechanism with equations, the principle and a few applications.</p></div>`,
          topics: ['m2-dssc', 'm2-pec-cells'],
          notes: ['m2-dssc.0', 'm2-dssc.1', 'm2-dssc.6']
        },
        {
          n: '3',
          marks: 10,
          co: '2',
          bl: '2',
          prompt: `<p>What type of electrochemical cell relies on the reversible intercalation of alkali metal ions into a graphite lattice to store energy? Explain with suitable diagram, mechanism, any one advantage and disadvantage with applications.</p>`,
          answer: `<p>The <b>lithium-ion battery</b>, a secondary cell in which Li<sup>+</sup> moves between a LiCoO<sub>2</sub> cathode and a graphite anode. No lithium metal is present.</p>
<figure data-fig="m2-liion-charge-discharge"></figure>
<p><b>Mechanism</b></p>
<ul><li><b>Charging:</b> Co<sup>3+</sup> is oxidised, Li<sup>+</sup> leaves LiCoO<sub>2</sub>, crosses the electrolyte and intercalates between graphite sheets; electrons are pushed by the charger to the graphite.</li>
<li><b>Discharging:</b> Li<sup>+</sup> leaves graphite and returns between the oxide layers; electrons flow through the device from graphite to LiCoO<sub>2</sub>.</li></ul>
<div class="eq">Charge: LiCoO<sub>2</sub> + C<sub>6</sub> → Li<sub>1−n</sub>CoO<sub>2</sub> + Li<sub>n</sub>C<sub>6</sub></div>
<div class="eq">Discharge: Li<sub>1−n</sub>CoO<sub>2</sub> + Li<sub>n</sub>C<sub>6</sub> → LiCoO<sub>2</sub> + C<sub>6</sub></div>
<p>Half reactions on discharge: Li<sub>n</sub>C<sub>6</sub> → C<sub>6</sub> + nLi<sup>+</sup> + ne<sup>−</sup> (negative) and Li<sub>1−n</sub>CoO<sub>2</sub> + nLi<sup>+</sup> + ne<sup>−</sup> → LiCoO<sub>2</sub> (positive).</p>
<p><b>One advantage:</b> high energy density, because lithium is light and each cell gives about 3.6–3.7 V. <b>One disadvantage:</b> it needs a protection circuit, since the flammable organic electrolyte can catch fire if overcharged or damaged.</p>
<p><b>Applications:</b> phones, laptops and cameras (LCO), power tools and medical devices (LMO, LFP, NMC), electric vehicles and grid storage (NCA).</p>
<div class="note trap"><p>"Anode" and "cathode" swap between charging and discharging; "positive" (LiCoO<sub>2</sub>) and "negative" (graphite) never do. Label the plates by polarity to stay safe.</p></div>
<div class="note exam"><p>Ten marks: the name, the diagram, charge and discharge mechanism with reactions, one advantage, one disadvantage and applications.</p></div>`,
          topics: ['m2-li-ion'],
          notes: ['m2-li-ion.5', 'm2-li-ion.3', 'm2-li-ion.7', 'm2-li-ion.6']
        },
        {
          n: '4',
          marks: 10,
          co: '2',
          bl: '2',
          prompt: `<p>What chemical synthesis route involves transforming a stable colloidal suspension of nanoparticles within a liquid into a continuous, interconnected three-dimensional solid network spanning the entire volume of the medium? Explain with suitable chemical reactions, advantages and disadvantages.</p>`,
          answer: `<p>The <b>sol–gel method</b>, a bottom-up route: a sol (tiny solid particles suspended in a liquid) turns into a gel (a 3D network through the whole volume). The precursor is a metal alkoxide M(OR)<sub>n</sub>, for example Si(OR)<sub>4</sub>.</p>
<p><b>Steps:</b> hydrolysis → condensation → aging → drying → calcination.</p>
<div class="eq">Hydrolysis: –M–OR + H<sub>2</sub>O → –M–OH + ROH</div>
<div class="eq">Si(OR)<sub>4</sub> + 4H<sub>2</sub>O → Si(OH)<sub>4</sub> + 4ROH</div>
<div class="eq">Condensation: –M–OH + HO–M– → –M–O–M– + H<sub>2</sub>O</div>
<div class="eq">–M–OH + RO–M– → –M–O–M– + ROH</div>
<ul><li><b>Hydrolysis</b> in water or with alcohol forms the sol.</li>
<li><b>Condensation</b> builds M–O–M (oxo) or M–OH–M (hydroxo) bridges; viscosity rises and the gel network forms (Si–O–Si siloxanes for silica).</li>
<li><b>Aging:</b> condensation continues; porosity decreases.</li>
<li><b>Drying:</b> water and solvent are removed, giving a xerogel.</li>
<li><b>Calcination:</b> heating gives the final metal-oxide nanoparticles.</li></ul>
<figure data-fig="m3-siloxane-network"></figure>
<figure data-fig="m3-sol-gel-routes"></figure>
<p><b>Advantages:</b> very low temperature compared with melting glass or firing ceramics; monosized particles are possible; one sol gives powders, films (spin or dip coating) or dense ceramics.</p>
<p><b>Disadvantages:</b> hard to control growth and stop agglomeration; hard to ensure complete reaction, so residues may stay; growth aids must be fully removed; very slow production of nanopowders.</p>
<div class="note trap"><p>Don't mix the two condensations: –OH + HO– gives off H<sub>2</sub>O, –OR + HO– gives off ROH.</p></div>
<div class="note exam"><p>Ten marks: naming sol–gel, the hydrolysis and condensation equations, the five steps, and the pros and cons.</p></div>`,
          topics: ['m3-sol-gel', 'm3-synthesis'],
          notes: ['m3-sol-gel.1', 'm3-sol-gel.2', 'm3-sol-gel.5']
        },
        {
          n: '5',
          marks: '5+5',
          co: '3',
          bl: '3',
          prompt: `<p><b>(a)</b> Identify and explain the principle and applications of the non-destructive technique which is used to differentiate single crystal, polycrystalline and amorphous silicon.</p>
<p><b>(b)</b> Calculate the average crystallite size (D) of a gold nanoparticle sample from the following X-ray diffraction (XRD) data: wavelength of X-ray 0.15406 nm; diffraction angle (38.2°); full width at half maximum (0.45°); and shape factor 0.9.</p>`,
          answer: `<p><b>(a) X-ray diffraction (XRD)</b>, which is nondestructive.</p>
<p><b>Principle:</b> the regularly spaced planes of a crystal act as a diffraction grating for X-rays, whose wavelength is close to the spacing between atoms. Waves reflected from successive planes add up only when the path difference is a whole number of wavelengths:</p>
<div class="eq">nλ = 2d sin θ (Bragg's law)</div>
<figure data-fig="m4-bragg-geometry"></figure>
<p>The diffractometer scans 2θ and records intensity; each peak position gives a d-spacing, and peak width falls as crystal size grows.</p>
<p><b>Telling the three forms of silicon apart</b></p>
<ul><li><b>Single crystal:</b> one lattice orientation, so only a few very sharp, intense reflections (spots rather than rings).</li>
<li><b>Polycrystalline:</b> many randomly oriented grains, so a full set of sharp peaks (rings) at the Si positions.</li>
<li><b>Amorphous:</b> no long-range order, so no sharp peaks, only a broad hump.</li></ul>
<figure data-fig="m4-sio2-patterns"></figure>
<p><b>Applications:</b> crystalline vs amorphous materials; identifying phases by matching JCPDS/ICSD patterns; unit-cell dimensions and symmetry; texture of polygrained materials; strain and crystallite size.</p>
<figure data-fig="m4-fwhm-peak"></figure>
<p><b>(b)</b> 38.2° is the 2θ value, so θ = 19.1°.</p>
<div class="eq">cos 19.1° = 0.9449</div>
<div class="eq">β = 0.45° × π/180 = 0.007854 rad</div>
<div class="eq">D = kλ / (β cos θ) = (0.9 × 0.15406) / (0.007854 × 0.9449) = 0.13865 / 0.007422</div>
<div class="eq">D ≈ <b>18.7 nm</b></div>
<p>About 18.7 nm, so the gold is nanocrystalline (1–100 nm).</p>
<div class="note trap"><p>Using 38.2° in cos θ instead of 19.1° gives 22.5 nm, which is wrong. Convert the FWHM to radians before dividing.</p></div>
<div class="note exam"><p>Five marks each part. In (a): name XRD, Bragg's law and what each form of silicon looks like. In (b): θ, β in radians, the Scherrer step and D with its unit.</p></div>`,
          topics: ['m4-xrd-patterns', 'm4-bragg', 'm4-scherrer'],
          notes: ['m4-bragg.2', 'm4-bragg.3', 'm4-xrd-patterns.4', 'm4-scherrer.2']
        }
      ]
    },
    {
      id: 'cat1-b1tb1-2026',
      kind: 'actual',
      title: 'CAT-1 · Slot B1+TB1 · 10-08-2026',
      short: 'B1+TB1 paper',
      sub: 'Actual paper · Fall 2026–27',
      meta: [['Slot', 'B1+TB1'], ['Date', '10-08-2026'], ['Duration', '90 minutes'], ['Max marks', '50'], [
        'Programme',
        'B.Tech. Computer Science and Engineering'
      ]],
      instructions: `<b>General instructions:</b> Answer All Questions. M – Max mark; CO – Course Outcome; BL – Blooms Taxonomy Level (1 – Remember, 2 – Understand, 3 – Apply, 4 – Analyse, 5 – Evaluate, 6 – Create).<br><b>Course Outcomes:</b> CO1: Understand the fundamental concepts in physical, analytical and materials chemistry.`,
      questions: [
        {
          n: '1',
          marks: 10,
          co: '1',
          bl: '2',
          prompt: `<p>Write down the expressions for the maximum work done in an isothermal and adiabatic expansion of reversible process with the help of PV diagram.</p>`,
          answer: `<p>Reversible work is the maximum work, the area under the P–V curve. Take 1 mole (or n moles) of ideal gas expanding from (P<sub>1</sub>, V<sub>1</sub>, T<sub>1</sub>) to V<sub>2</sub>.</p>
<p><b>Isothermal (T constant, PV = nRT, ΔU = 0, q = −w)</b></p>
<div class="eq">w<sub>max</sub> = −nRT ln(V<sub>2</sub>/V<sub>1</sub>) = −nRT ln(P<sub>1</sub>/P<sub>2</sub>)</div>
<figure data-fig="m1-pv-isothermal"></figure>
<p>Diagram: a hyperbola P = nRT/V falling from P<sub>1</sub>, V<sub>1</sub> to P<sub>2</sub>, V<sub>2</sub>; shade the area under it down to the V axis. Heat flows in from the surroundings to keep T constant.</p>
<p><b>Adiabatic (q = 0, so ΔU = w, T falls on expansion)</b></p>
<div class="eq">w<sub>max</sub> = ΔU = C<sub>v</sub>(T<sub>2</sub> − T<sub>1</sub>) (per mole; negative for expansion)</div>
<div class="eq">T<sub>1</sub>/T<sub>2</sub> = (V<sub>2</sub>/V<sub>1</sub>)<sup>γ−1</sup>, γ = C<sub>p</sub>/C<sub>v</sub>, so w = [R/(γ−1)](T<sub>2</sub> − T<sub>1</sub>)</div>
<figure data-fig="m1-pv-adiabatic"></figure>
<p>Diagram: on the same axes the adiabat PV<sup>γ</sup> = constant is steeper than the isotherm, because T also falls. Starting from the same point and ending at the same V<sub>2</sub>, the area under the adiabat is smaller, so less work is obtained than from the isothermal path.</p>
<div class="note trap"><p>Do not put ΔU = 0 for the adiabatic case: ΔU = 0 belongs to the isothermal process. Use C<sub>v</sub>ΔT for adiabatic work and keep the negative sign for expansion.</p></div>
<div class="note exam"><p>Ten marks: both expressions, both curves on one PV diagram with the labelled area, and the statement that the adiabatic work is smaller.</p></div>`,
          topics: ['m1-expansion-work'],
          notes: ['m1-expansion-work.0', 'm1-expansion-work.1']
        },
        {
          n: '2',
          marks: 10,
          co: '1',
          bl: '3',
          prompt: `<p>Derive the expression for the efficiency and work done by a Carnot cycle, with a suitable diagram.</p>`,
          answer: `<p>Working substance: 1 mol ideal gas between a hot source T<sub>h</sub> and a cold sink T<sub>c</sub>.</p>
<figure data-fig="m1-carnot-pv"></figure>
<p>Diagram: P–V plot A → B (isotherm at T<sub>h</sub>), B → C (adiabat), C → D (isotherm at T<sub>c</sub>), D → A (adiabat); the enclosed area is the net work.</p>
<ol><li><b>A → B isothermal expansion at T<sub>h</sub>:</b> q<sub>h</sub> = RT<sub>h</sub> ln(V<sub>B</sub>/V<sub>A</sub>) (heat absorbed).</li>
<li><b>B → C adiabatic expansion:</b> q = 0, T falls from T<sub>h</sub> to T<sub>c</sub>.</li>
<li><b>C → D isothermal compression at T<sub>c</sub>:</b> heat rejected, q<sub>c</sub> = RT<sub>c</sub> ln(V<sub>D</sub>/V<sub>C</sub>), which is negative (V<sub>D</sub> &lt; V<sub>C</sub>).</li>
<li><b>D → A adiabatic compression:</b> q = 0, T rises back to T<sub>h</sub>.</li></ol>
<p>For the two adiabats T V<sup>γ−1</sup> is constant: T<sub>h</sub>V<sub>B</sub><sup>γ−1</sup> = T<sub>c</sub>V<sub>C</sub><sup>γ−1</sup> and T<sub>h</sub>V<sub>A</sub><sup>γ−1</sup> = T<sub>c</sub>V<sub>D</sub><sup>γ−1</sup>. Dividing gives V<sub>B</sub>/V<sub>A</sub> = V<sub>C</sub>/V<sub>D</sub>.</p>
<div class="eq">Net work W = q<sub>h</sub> + q<sub>c</sub> = RT<sub>h</sub> ln(V<sub>B</sub>/V<sub>A</sub>) − RT<sub>c</sub> ln(V<sub>C</sub>/V<sub>D</sub>) = R(T<sub>h</sub> − T<sub>c</sub>) ln(V<sub>B</sub>/V<sub>A</sub>)</div>
<div class="eq">η = W/q<sub>h</sub> = R(T<sub>h</sub> − T<sub>c</sub>) ln(V<sub>B</sub>/V<sub>A</sub>) / [RT<sub>h</sub> ln(V<sub>B</sub>/V<sub>A</sub>)] = 1 − T<sub>c</sub>/T<sub>h</sub></div>
<p>So η depends only on the two temperatures (in kelvin), not on the working substance, and is never 1 unless T<sub>c</sub> = 0 K. Equivalent entropy form: q<sub>h</sub>/T<sub>h</sub> + q<sub>c</sub>/T<sub>c</sub> = 0.</p>
<div class="note trap"><p>Show the step V<sub>B</sub>/V<sub>A</sub> = V<sub>C</sub>/V<sub>D</sub> from the adiabats; without it the logarithms do not cancel. Use kelvin in the final formula.</p></div>
<div class="note exam"><p>Ten marks: the diagram, the four strokes with heat terms, the adiabat step V<sub>B</sub>/V<sub>A</sub> = V<sub>C</sub>/V<sub>D</sub>, the work and η = 1 − T<sub>c</sub>/T<sub>h</sub>.</p></div>`,
          topics: ['m1-carnot-cycle'],
          notes: ['m1-carnot-cycle.1', 'm1-carnot-cycle.2']
        },
        {
          n: '3',
          marks: '5+5',
          co: '1',
          bl: '3',
          prompt: `<p><b>(a)</b> Calculate q, w, ΔU, and ΔH for 1.00 mol of an ideal gas expanding reversibly and isothermally at 273 K from a volume of 22.4 L to a volume of 44.8 L.</p>
<p><b>(b)</b> The initial temperature and pressure for one mole of an ideal gas is (C<sub>v</sub>=5 cal/mol.K) 27 °C and 1 atm. Pressure is increased reversibly upto 7 atm and temperature is increased to 90 °C. Calculate the entropy change for the process.</p>`,
          answer: `<p><b>(a)</b> Isothermal ideal gas, so ΔU = 0 and ΔH = 0 (both depend only on T). R = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>.</p>
<div class="eq">w = −nRT ln(V<sub>2</sub>/V<sub>1</sub>) = −(1)(8.314)(273) ln 2 = −2269.7 × 0.6931 = <b>−1573 J</b> (−1.57 kJ)</div>
<div class="eq">q = −w = <b>+1573 J</b>, ΔU = <b>0</b>, ΔH = <b>0</b></div>
<p>The gas takes 1573 J of heat and does 1573 J of work.</p>
<p><b>(b)</b> Both T and P change, so use ΔS = C<sub>p</sub> ln(T<sub>2</sub>/T<sub>1</sub>) − R ln(P<sub>2</sub>/P<sub>1</sub>). C<sub>v</sub> = 5, so C<sub>p</sub> = C<sub>v</sub> + R = 5 + 1.987 = 6.987 ≈ 7 cal mol<sup>−1</sup> K<sup>−1</sup>. T<sub>1</sub> = 300 K, T<sub>2</sub> = 363 K (using 273 + t).</p>
<div class="eq">ΔS = 7 ln(363/300) − 1.987 ln 7 = 7(0.1906) − 1.987(1.9459) = 1.334 − 3.867</div>
<div class="eq">ΔS = <b>−2.53 cal mol<sup>−1</sup> K<sup>−1</sup></b> (≈ −10.6 J mol<sup>−1</sup> K<sup>−1</sup>)</div>
<p>Entropy falls: the compression to 7 atm outweighs the rise in T.</p>
<div class="note trap"><p>Using C<sub>v</sub> ln(T<sub>2</sub>/T<sub>1</sub>) here would be wrong, since the variables are P and T; the matching formula carries C<sub>p</sub>. Also R must be in cal (1.987) because C<sub>v</sub> is in cal. With C<sub>p</sub> taken exactly as 6.987 the answer is −2.53 as well.</p></div>
<div class="note exam"><p>Five marks each part. In (a) all four quantities with units (the zeros count as answers). In (b) the correct C<sub>p</sub> form of ΔS, C<sub>p</sub> = 7 cal, and −2.53 cal mol<sup>−1</sup> K<sup>−1</sup>.</p></div>`,
          topics: ['m1-expansion-work', 'm1-second-law-entropy', 'm1-enthalpy-heat-capacity', 'm1-thermo-numericals'],
          notes: ['m1-thermo-numericals.0', 'm1-thermo-numericals.2', 'm1-second-law-entropy.3']
        },
        {
          n: '4',
          marks: '5+5',
          co: '1',
          bl: '2',
          prompt: `<p><b>(a)</b> Larger value for temperature, T results in a higher value of the rate constant (k) for a reaction. Explain this fact with the help of a diagram and Arrhenius equation.</p>
<p><b>(b)</b> The half-life period of a first order reaction is 15 minutes. Calculate the rate constant and the time taken to complete 80% of the reaction.</p>`,
          answer: `<p><b>(a)</b> Arrhenius equation:</p>
<div class="eq">k = A e<sup>−E<sub>a</sub>/RT</sup>, ln k = ln A − E<sub>a</sub>/RT</div>
<p>E<sub>a</sub> is the minimum energy a collision needs. The factor e<sup>−E<sub>a</sub>/RT</sup> is the fraction of molecules with energy ≥ E<sub>a</sub>. When T rises, E<sub>a</sub>/RT falls, the exponent becomes less negative and the fraction (and so k) rises. Molecules also move faster and collide more often, but the main effect is the larger fraction above E<sub>a</sub>. Roughly, the rate doubles for every 10 °C rise.</p>
<p><b>Diagram:</b> a Maxwell–Boltzmann curve of number of molecules against kinetic energy with two curves, T<sub>1</sub> (tall, narrow) and T<sub>2</sub> &gt; T<sub>1</sub> (lower, broader, shifted right), a vertical line at E<sub>a</sub>, and the area to the right of E<sub>a</sub> shaded. The shaded area is bigger for T<sub>2</sub>. The plot of ln k against 1/T is a straight line with slope −E<sub>a</sub>/R.</p>
<figure data-fig="m1-arrhenius-plot"></figure>
<p><b>(b)</b> First order, t<sub>1/2</sub> = 15 min.</p>
<div class="eq">k = 0.693 / t<sub>1/2</sub> = 0.693/15 = <b>0.0462 min<sup>−1</sup></b> (7.7 × 10<sup>−4</sup> s<sup>−1</sup>)</div>
<p>80% complete: [A] = 20% of [A]<sub>0</sub>.</p>
<div class="eq">t = (2.303/k) log([A]<sub>0</sub>/[A]) = (2.303/0.0462) log(100/20) = 49.85 × 0.6990 = <b>34.8 min</b></div>
<p>Check: 80% needs about 2.32 half-lives (log 5/log 2), 2.32 × 15 = 34.8 min.</p>
<div class="note trap"><p>Use [A]<sub>0</sub>/[A] = 100/20 = 5, not 100/80. 80% completed means 20% is left.</p></div>
<div class="note exam"><p>Five marks each part. In (a) the Arrhenius equation plus the Maxwell–Boltzmann diagram with the shaded area beyond E<sub>a</sub>. In (b) k = 0.0462 min<sup>−1</sup> and t = 34.8 min with the working.</p></div>`,
          topics: ['m1-collision-arrhenius', 'm1-integrated-rate'],
          notes: ['m1-collision-arrhenius.3', 'm1-collision-arrhenius.4', 'm1-kinetics-numericals.0', 'm1-kinetics-numericals.1']
        },
        {
          n: '5',
          marks: 10,
          co: '1',
          bl: '1',
          prompt: `<p>For the Zero order, First order and Second order reaction: (i) Write the differential rate equations with suitable examples. (ii) How can the rate constants be determined graphically by applying the straight line equation?</p>`,
          answer: `<p><b>(i) Differential rate equations</b> (for A → products)</p>
<table><thead><tr><th></th><th>Zero order</th><th>First order</th><th>Second order</th></tr></thead><tbody>
<tr><td>Rate equation</td><td>−d[A]/dt = k</td><td>−d[A]/dt = k[A]</td><td>−d[A]/dt = k[A]<sup>2</sup></td></tr>
<tr><td>Example</td><td>2NH<sub>3</sub> → N<sub>2</sub> + 3H<sub>2</sub> (on a catalyst)</td><td>PCl<sub>5</sub> → PCl<sub>3</sub> + Cl<sub>2</sub></td><td>2HI → H<sub>2</sub> + I<sub>2</sub></td></tr>
<tr><td>Unit of k</td><td>mol L<sup>−1</sup> s<sup>−1</sup></td><td>s<sup>−1</sup></td><td>L mol<sup>−1</sup> s<sup>−1</sup></td></tr></tbody></table>
<p><b>(ii) Graphical determination.</b> Integrate each equation and compare with y = mx + c.</p>
<div class="eq">Zero: [A]<sub>t</sub> = −kt + [A]<sub>0</sub>. Plot [A] against t; slope = −k.</div>
<div class="eq">First: ln[A]<sub>t</sub> = −kt + ln[A]<sub>0</sub>. Plot ln[A] against t; slope = −k.</div>
<div class="eq">Second: 1/[A]<sub>t</sub> = kt + 1/[A]<sub>0</sub>. Plot 1/[A] against t; slope = +k.</div>
<figure data-fig="m1-linear-rate-plots"></figure>
<p>Whichever plot is a straight line gives the order, and k is the magnitude of its slope. The intercept gives [A]<sub>0</sub> (or its ln or reciprocal). Half-lives: [A]<sub>0</sub>/2k, 0.693/k, 1/(k[A]<sub>0</sub>).</p>
<div class="note trap"><p>Slopes for zero and first order are −k, so k is the positive value of the slope; only the second-order slope is +k.</p></div>
<div class="note exam"><p>Ten marks: the three differential equations with examples (about 4 marks) and the three linear plots with slopes (about 6 marks).</p></div>`,
          topics: ['m1-integrated-rate', 'm1-rate-law'],
          notes: ['m1-integrated-rate.1', 'm1-integrated-rate.2']
        }
      ]
    },
    {
      id: 'cat1-b2tb2-2026',
      kind: 'actual',
      title: 'CAT-1 · Slot B2+TB2 · 10-08-2026',
      short: 'B2+TB2 paper',
      sub: 'Actual paper · Fall 2026–27',
      meta: [['Slot', 'B2+TB2'], ['Date', '10-08-2026'], ['Duration', '90 minutes'], ['Max marks', '50'], [
        'Programme',
        'B.Tech. Computer Science and Engineering'
      ]],
      instructions: `<b>General instructions:</b> Answer All Questions. M – Max mark; CO – Course Outcome; BL – Blooms Taxonomy Level (1 – Remember, 2 – Understand, 3 – Apply, 4 – Analyse, 5 – Evaluate, 6 – Create).<br><b>Course Outcomes:</b> CO1: Understand the fundamental concepts in physical, analytical and materials chemistry.`,
      questions: [
        {
          n: '1',
          marks: 10,
          co: '1',
          bl: '2',
          prompt: `<p>State and explain the First Law of Thermodynamics. Derive the mathematical expression for the work done during the isothermal reversible expansion of an ideal gas and discuss its practical significance.</p>`,
          answer: `<p><b>First law:</b> energy can be changed from one form to another but is never created or destroyed. For a system, the change in internal energy equals the heat taken in plus the work done on it.</p>
<div class="eq">ΔU = q + w</div>
<p>Sign convention: q and w are positive when energy enters the system, negative when it leaves. U is a state function; q and w are path functions. The energy of an isolated system is constant.</p>
<figure data-fig="m1-first-law-flows"></figure>
<p><b>Work of isothermal reversible expansion (n mol, ideal gas)</b></p>
<p>Reversible means P<sub>ex</sub> = P of the gas at every step, so dw = −P dV with P = nRT/V.</p>
<div class="eq">w = −∫ P dV = −nRT ∫<sub>V<sub>1</sub></sub><sup>V<sub>2</sub></sup> dV/V = −nRT ln(V<sub>2</sub>/V<sub>1</sub>)</div>
<div class="eq">Boyle: V<sub>2</sub>/V<sub>1</sub> = P<sub>1</sub>/P<sub>2</sub>, so w = −nRT ln(P<sub>1</sub>/P<sub>2</sub>)</div>
<p>At constant T, ΔU = 0 for an ideal gas, so q = −w = nRT ln(V<sub>2</sub>/V<sub>1</sub>): all the heat absorbed is turned into work. The work is the area under the isotherm P = nRT/V on the P–V diagram.</p>
<p><b>Practical significance</b></p>
<ul><li>A reversible expansion gives the <b>maximum work</b> obtainable between the two states; any real (irreversible) expansion against a smaller pressure gives less. It is the yardstick for engine and gas-compression design.</li>
<li>It is the isothermal stroke of the Carnot cycle, so it sets the heat absorbed and the efficiency limit.</li>
<li>The same expression gives the work needed to compress a gas isothermally (compressors need at least this much).</li></ul>
<div class="note trap"><p>Keep the sign: an expanding gas does work on the surroundings, so w is negative in ΔU = q + w. Quote the result as w = −nRT ln(V<sub>2</sub>/V<sub>1</sub>), not the magnitude only.</p></div>
<div class="note exam"><p>Ten marks: the statement with ΔU = q + w and its sign convention, the integral with P = nRT/V carried through to −nRT ln(V<sub>2</sub>/V<sub>1</sub>), and a line on maximum work and its uses.</p></div>`,
          topics: ['m1-zeroth-first-law', 'm1-expansion-work'],
          notes: ['m1-zeroth-first-law.2', 'm1-expansion-work.0']
        },
        {
          n: '2',
          marks: 10,
          co: '1',
          bl: '3',
          prompt: `<p>Using the Gibbs free energy equation, explain how an endothermic reaction can occur spontaneously. Discuss the effect of the signs of ΔH and ΔS on the spontaneity of chemical reactions with suitable examples.</p>`,
          answer: `<p>At constant T and P, G = H − TS, so for a change at constant temperature:</p>
<div class="eq">ΔG = ΔH − TΔS, spontaneous if ΔG &lt; 0, equilibrium at ΔG = 0</div>
<p><b>Endothermic reaction (ΔH &gt; 0)</b> can still have ΔG &lt; 0 if the entropy of the system rises (ΔS &gt; 0) and TΔS is bigger than ΔH. This happens above the temperature T &gt; ΔH/ΔS. Such reactions are driven by entropy, not enthalpy. Example: ice melting (ΔH = +6 kJ/mol, ΔS = +22 J/mol/K) is spontaneous above 273 K; NH<sub>4</sub>NO<sub>3</sub> dissolving in water is spontaneous though it cools the solution.</p>
<p><b>The four sign cases</b></p>
<table><thead><tr><th>ΔH</th><th>ΔS</th><th>ΔG = ΔH − TΔS</th><th>Example</th></tr></thead><tbody>
<tr><td>−</td><td>+</td><td>always negative, spontaneous at all T</td><td>combustion, 2H<sub>2</sub>O<sub>2</sub> → 2H<sub>2</sub>O + O<sub>2</sub></td></tr>
<tr><td>+</td><td>−</td><td>always positive, never spontaneous</td><td>3O<sub>2</sub> → 2O<sub>3</sub></td></tr>
<tr><td>−</td><td>−</td><td>negative only at low T (T &lt; ΔH/ΔS)</td><td>N<sub>2</sub> + 3H<sub>2</sub> → 2NH<sub>3</sub>, freezing of water</td></tr>
<tr><td>+</td><td>+</td><td>negative only at high T (T &gt; ΔH/ΔS)</td><td>melting of ice, CaCO<sub>3</sub> → CaO + CO<sub>2</sub></td></tr></tbody></table>
<figure data-fig="m1-gibbs-four-cases"></figure>
<div class="note trap"><p>Spontaneous does not mean fast. ΔG gives the direction only; graphite to diamond has ΔG &lt; 0 at room temperature, but the rate is negligible. Also, for the (−, −) and (+, +) cases say which temperature range works, not just "depends".</p></div>
<div class="note exam"><p>Ten marks: the formula ΔG = ΔH − TΔS, the entropy argument for the endothermic case, and the four-case table with one example in each row.</p></div>`,
          topics: ['m1-free-energy', 'm1-gibbs-helmholtz-third-law'],
          notes: ['m1-free-energy.2', 'm1-gibbs-helmholtz-third-law.1']
        },
        {
          n: '3',
          marks: '5+5',
          co: '1',
          bl: '3',
          prompt: `<p><b>(a)</b> Calculate the Gibbs free energy change for a reaction at 25°C if the enthalpy change is −120 kJ mol<sup>−1</sup> and the entropy change is −180 J mol<sup>−1</sup> K<sup>−1</sup>. State whether the reaction is spontaneous and justify your answer.</p>
<p><b>(b)</b> A Carnot engine absorbs 800 J of heat from the source and rejects 500 J to the sink. Calculate the efficiency and work done.</p>`,
          answer: `<p><b>(a)</b> T = 25 + 273 = 298 K (273.15 gives the same answer to 3 figures). Convert ΔS to kJ: −180 J = −0.180 kJ.</p>
<div class="eq">ΔG = ΔH − TΔS = −120 − (298)(−0.180) = −120 + 53.6 = <b>−66.4 kJ mol<sup>−1</sup></b></div>
<p>ΔG is negative, so the reaction is <b>spontaneous</b> at 25 °C. It is enthalpy-driven: ΔS is unfavourable (−), but TΔS = −53.6 kJ is smaller in size than ΔH. It would turn non-spontaneous above T = ΔH/ΔS = 120000/180 = 667 K.</p>
<p><b>(b)</b> q<sub>h</sub> = 800 J, q<sub>c</sub> = 500 J rejected.</p>
<div class="eq">W = q<sub>h</sub> − q<sub>c</sub> = 800 − 500 = <b>300 J</b></div>
<div class="eq">η = W/q<sub>h</sub> = 300/800 = 0.375 = <b>37.5%</b></div>
<div class="note trap"><p>In (a) the usual slip is mixing units: ΔH in kJ and ΔS in J. Convert one of them. In (b) use heat absorbed in the denominator, not heat rejected.</p></div>
<div class="note exam"><p>Five marks each part. In (a) show the unit conversion, the number and the verdict with a reason. In (b) write W = q<sub>h</sub> − q<sub>c</sub> and η = W/q<sub>h</sub> with the answers 300 J and 37.5%.</p></div>`,
          topics: ['m1-free-energy', 'm1-carnot-cycle', 'm1-thermo-numericals'],
          notes: ['m1-thermo-numericals.3', 'm1-thermo-numericals.4']
        },
        {
          n: '4',
          marks: '5+5',
          co: '1',
          bl: '2',
          prompt: `<p><b>(a)</b> Why does increasing concentration increase the reaction rate for most reactions?</p>
<p><b>(b)</b> The rate constant of a first-order reaction is 4.5 × 10<sup>−3</sup> s<sup>−1</sup>. Calculate its half-life.</p>`,
          answer: `<p><b>(a)</b> By the collision model, reaction needs molecules to collide with enough energy (≥ E<sub>a</sub>) and the right orientation. At higher concentration there are more molecules per unit volume, so collisions per second rise, and so does the number of effective collisions. The rate law shows this: rate = k[A]<sup>m</sup>[B]<sup>n</sup>, so for positive orders the rate grows with concentration. The exception is zero order, where rate = k does not depend on concentration (for example a catalyst surface already saturated).</p>
<p><b>(b)</b> For first order t<sub>1/2</sub> = 0.693/k:</p>
<div class="eq">t<sub>1/2</sub> = 0.693 / (4.5 × 10<sup>−3</sup> s<sup>−1</sup>) = <b>154 s</b> (about 2.57 min)</div>
<div class="note trap"><p>First-order t<sub>1/2</sub> is independent of the starting concentration. Do not use the second-order form 1/(k[A]<sub>0</sub>) here, and the unit of k (s<sup>−1</sup>) tells you the order is first.</p></div>
<div class="note exam"><p>Five marks each part. In (a) give the collision argument and mention the zero-order exception; in (b) the formula t<sub>1/2</sub> = 0.693/k and the value 154 s with its unit.</p></div>`,
          topics: ['m1-collision-arrhenius', 'm1-integrated-rate'],
          notes: ['m1-collision-arrhenius.0', 'm1-kinetics-numericals.0']
        },
        {
          n: '5',
          marks: 10,
          co: '1',
          bl: '1',
          prompt: `<p>Define reaction rate, rate law, order, and molecularity. Explain the differences between order and molecularity with suitable examples.</p>`,
          answer: `<ul><li><b>Reaction rate:</b> change in concentration of a reactant or product per unit time: rate = −d[R]/dt = +d[P]/dt. For aA + bB → cC + dD, rate = −(1/a)d[A]/dt = +(1/c)d[C]/dt.</li>
<li><b>Rate law:</b> experimental equation linking rate to concentrations, rate = k[A]<sup>m</sup>[B]<sup>n</sup>, k being the rate constant (depends on temperature, not concentration).</li>
<li><b>Order:</b> sum of the exponents in the rate law, m + n.</li>
<li><b>Molecularity:</b> number of molecules that collide in a single elementary step.</li></ul>
<table><thead><tr><th>Order</th><th>Molecularity</th></tr></thead><tbody>
<tr><td>Found only by experiment</td><td>Found from the mechanism (the elementary step)</td></tr>
<tr><td>Can be zero, fractional or negative</td><td>Always a whole number 1, 2, 3, never zero</td></tr>
<tr><td>Applies to the overall reaction</td><td>Applies to one elementary step only</td></tr>
<tr><td>Need not equal the coefficients</td><td>Equals the molecules in that step</td></tr></tbody></table>
<p><b>Examples:</b></p>
<ul><li>2NO + 2H<sub>2</sub> → 2N<sub>2</sub> + 2H<sub>2</sub>O has rate = k[NO]<sup>2</sup>[H<sub>2</sub>], order 3 (not 4).</li>
<li>CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> + H<sub>2</sub>O → CH<sub>3</sub>COOH + C<sub>2</sub>H<sub>5</sub>OH is bimolecular but pseudo-first order (water in large excess), rate = k[ester].</li>
<li>H<sub>2</sub> + Cl<sub>2</sub> → 2HCl (as in the notes) has order zero in the rate law shown, while molecularity has no zero value.</li>
<li>SO<sub>2</sub>Cl<sub>2</sub> → SO<sub>2</sub> + Cl<sub>2</sub> is unimolecular, first order.</li></ul>
<div class="note trap"><p>For an elementary step order equals molecularity; for a multi-step reaction they can differ. The balanced equation alone cannot give the order.</p></div>
<div class="note exam"><p>Ten marks: four definitions (about one mark each plus the equations), then the comparison of order with molecularity with at least two examples.</p></div>`,
          topics: ['m1-rate-law'],
          notes: ['m1-rate-law.1', 'm1-rate-law.2', 'm1-rate-law.3', 'm1-rate-law.4']
        }
      ]
    },
    {
      id: 'cat1-d1td1-2026',
      kind: 'actual',
      title: 'CAT-1 · Slot D1+TD1 · 12-08-2026',
      short: 'D1+TD1 paper',
      sub: 'Actual paper · Fall 2026–27',
      meta: [['Slot', 'D1+TD1'], ['Date', '12-08-2026'], ['Duration', '90 minutes'], ['Max marks', '50'], [
        'Programme',
        'B.Tech. Computer Science and Engineering'
      ]],
      instructions: `<b>General instructions:</b> Answer All Questions. M – Max mark; CO – Course Outcome; BL – Blooms Taxonomy Level (1 – Remember, 2 – Understand, 3 – Apply, 4 – Analyse, 5 – Evaluate, 6 – Create).<br><b>Course Outcomes:</b> CO1: Understand the fundamental concepts in physical, analytical and materials chemistry.`,
      questions: [
        {
          n: '1',
          marks: 10,
          co: '1',
          bl: '2',
          prompt: `<p>Discuss the significance of Carnot cycle with the help P-V graph while mentioning all the four strokes and condition to get cent-percent efficiency.</p>`,
          answer: `<p>The <b>Carnot cycle</b> is the reversible cycle of an ideal gas between a hot reservoir (T<sub>h</sub>) and a cold reservoir (T<sub>c</sub>). It is the model for the best possible heat engine, so it sets the upper limit on converting heat into work.</p>
<figure data-fig="m1-carnot-pv"></figure>
<p><b>The four strokes (A → B → C → D → A on the P–V graph)</b></p>
<ol><li><b>A → B: isothermal expansion at T<sub>h</sub>.</b> Heat q<sub>h</sub> = RT<sub>h</sub> ln(V<sub>B</sub>/V<sub>A</sub>) is absorbed; ΔU = 0.</li>
<li><b>B → C: adiabatic expansion.</b> q = 0, the gas does work and cools from T<sub>h</sub> to T<sub>c</sub>.</li>
<li><b>C → D: isothermal compression at T<sub>c</sub>.</b> Heat q<sub>c</sub> is rejected to the sink.</li>
<li><b>D → A: adiabatic compression.</b> q = 0, work is done on the gas and T rises from T<sub>c</sub> to T<sub>h</sub>.</li></ol>
<p><b>Graph:</b> two isotherms joined by two steeper adiabats make a clockwise loop. The enclosed area is the net work in one cycle.</p>
<p><b>Significance</b></p>
<ul><li>The efficiency η = W/q<sub>h</sub> = 1 − T<sub>c</sub>/T<sub>h</sub> depends only on the two temperatures, not on the working substance.</li>
<li>It is the maximum efficiency of any engine working between those reservoirs, a benchmark for real engines.</li>
<li>It leads to the entropy definition (q<sub>h</sub>/T<sub>h</sub> + q<sub>c</sub>/T<sub>c</sub> = 0) and the thermodynamic temperature scale.</li>
<li>Run in reverse, it describes refrigerators and heat pumps.</li></ul>
<p><b>Condition for 100% efficiency:</b> η = 1 only if T<sub>c</sub> = 0 K (or T<sub>h</sub> → ∞). Absolute zero cannot be reached and a source at infinite temperature does not exist, so no engine reaches 100% (Kelvin statement of the second law). Some heat must always go to the cold sink.</p>
<div class="worked"><div class="given"><p>How cold must the sink be for η = 0.9 when T<sub>h</sub> = 500 K?</p></div>
<div class="solve"><p>T<sub>c</sub> = (1 − η)T<sub>h</sub> = 0.1 × 500 = 50 K.</p></div>
<div class="result">Even 90% needs a 50 K sink; 100% would need 0 K.</div></div>
<div class="note trap"><p>Cent-percent efficiency does not mean there is no friction or loss in a real engine. Even a loss-free reversible engine cannot reach it unless T<sub>c</sub> = 0 K. Temperatures must be in kelvin.</p></div>
<div class="note exam"><p>Ten marks: four strokes (4), a labelled P–V loop (2), efficiency formula and significance (2), the T<sub>c</sub> = 0 K condition (2).</p></div>`,
          topics: ['m1-carnot-cycle'],
          notes: ['m1-carnot-cycle.1', 'm1-carnot-cycle.3']
        },
        {
          n: '2',
          marks: 10,
          co: '1',
          bl: '3',
          prompt: `<p>Delineating the first and second laws of thermodynamics, explain briefly about (i) work done during isothermal reversible process and (ii) change in Gibbs free energy for a spontaneous reaction.</p>`,
          answer: `<p><b>First law (energy conservation).</b> Energy can be converted from one form to another but is neither created nor destroyed. For a closed system:</p>
<div class="eq">ΔU = q + w</div>
<p>with q and w positive when energy enters the system. U is a state function; q and w are path functions.</p>
<p><b>Second law (direction of change).</b> In any spontaneous process the total entropy of the system and surroundings increases:</p>
<div class="eq">ΔS<sub>total</sub> = ΔS<sub>sys</sub> + ΔS<sub>surr</sub> &gt; 0</div>
<p>Equivalent statements: Kelvin (no engine is 100% efficient) and Clausius (heat does not flow unaided from cold to hot). The first law says what is possible energetically, and the second says which way it goes.</p>
<p><b>(i) Work in an isothermal reversible process.</b> For an ideal gas at constant T, U depends only on T, so ΔU = 0 and q = −w. In a reversible path the external pressure matches the gas pressure at every step (P<sub>ex</sub> = nRT/V), so</p>
<div class="eq">w = −∫P dV = −nRT ∫dV/V = −nRT ln (V<sub>2</sub>/V<sub>1</sub>) = −nRT ln (P<sub>1</sub>/P<sub>2</sub>)</div>
<p>This is the area under the isotherm and the <b>maximum work</b> obtainable. On expansion w is negative (work done by the gas) and q = +nRT ln(V<sub>2</sub>/V<sub>1</sub>) flows in.</p>
<p><b>(ii) Gibbs free energy change for a spontaneous reaction.</b> At constant T and P, ΔS<sub>surr</sub> = −ΔH/T, so ΔS<sub>total</sub> = −(ΔH − TΔS)/T. Define G = H − TS:</p>
<div class="eq">ΔG = ΔH − TΔS = −TΔS<sub>total</sub></div>
<p>For a spontaneous reaction ΔS<sub>total</sub> &gt; 0, so <b>ΔG &lt; 0</b>. ΔG = 0 at equilibrium, and ΔG &gt; 0 means non-spontaneous in the forward direction. A negative ΔG also equals the maximum non-expansion work the reaction can deliver.</p>
<div class="worked"><div class="given"><p>1 mol ideal gas at 300 K expands reversibly and isothermally to twice its volume.</p></div>
<div class="solve"><p>w = −8.314 × 300 × ln 2 = −1729 J (about −1.73 kJ); q = +1729 J; ΔU = 0.</p></div>
<div class="result">The gas does 1.73 kJ of work and absorbs the same heat.</div></div>
<div class="note trap"><p>ΔG &lt; 0 comes from the second law applied at constant T and P. It does not mean the reaction is fast. The criterion ΔG &lt; 0 holds only at constant T and P.</p></div>
<div class="note exam"><p>Ten marks: first law (2), second law (2), isothermal work derivation (3), ΔG for spontaneity with the link to ΔS<sub>total</sub> (3).</p></div>`,
          topics: ['m1-zeroth-first-law', 'm1-second-law-entropy', 'm1-expansion-work', 'm1-free-energy'],
          notes: ['m1-zeroth-first-law.2', 'm1-second-law-entropy.0', 'm1-expansion-work.0', 'm1-free-energy.1']
        },
        {
          n: '3',
          marks: '5+5',
          co: '1',
          bl: '3',
          prompt: `<p><b>(a)</b> Compute the maximum work done observed in a Carnot engine that absorbs 2×10<sup>6</sup> J heat and operates between 90 °C and 10 °C.</p>
<p><b>(b)</b> Predict the spontaneity of a chemical reaction working at 25 °C with change in entropy 110 J/mol·K and ΔH = 30 kJ/mol.</p>`,
          answer: `<p><b>(a)</b> Convert to kelvin: T<sub>h</sub> = 90 + 273.15 = 363.15 K, T<sub>c</sub> = 10 + 273.15 = 283.15 K.</p>
<div class="eq">η = 1 − T<sub>c</sub>/T<sub>h</sub> = (363.15 − 283.15)/363.15 = 80/363.15 = 0.2203</div>
<div class="eq">W<sub>max</sub> = η × q<sub>h</sub> = 0.2203 × 2 × 10<sup>6</sup> = <b>4.41 × 10<sup>5</sup> J</b> (about 441 kJ)</div>
<p>The Carnot engine is reversible, so this is the maximum work. The heat rejected is 2 × 10<sup>6</sup> − 4.41 × 10<sup>5</sup> = 1.56 × 10<sup>6</sup> J. (Using 273 K instead of 273.15 K gives the same result to three figures: 80/363 = 0.2204.)</p>
<div class="note trap"><p>Putting 90 and 10 directly into 1 − T<sub>c</sub>/T<sub>h</sub> gives η = 0.89, which is wrong. The °C values must be converted to kelvin.</p></div>
<p><b>(b)</b> At 25 °C, T = 298.15 K. A reaction at constant T and P is spontaneous when ΔG &lt; 0.</p>
<div class="eq">ΔG = ΔH − TΔS = 30000 − (298.15 × 110) J/mol</div>
<div class="eq">= 30000 − 32796.5 = −2796.5 J/mol ≈ <b>−2.8 kJ/mol</b></div>
<p>ΔG is negative, so the reaction is <b>spontaneous</b> at 25 °C. It is endothermic (ΔH positive) but driven by the entropy increase. The crossover temperature is T = ΔH/ΔS = 30000/110 = 272.7 K (about −0.4 °C). Above this the reaction is spontaneous; below it, it is not. At 25 °C, TΔS = 32.8 kJ/mol just outweighs ΔH = 30 kJ/mol.</p>
<div class="note trap"><p>ΔH is in kJ and ΔS in J. Convert one of them before subtracting. Forgetting this gives ΔG of about 30 − 32800 kJ, nonsense.</p></div>
<div class="note exam"><p>Five marks each. In (a) show the kelvin conversion, η and W with its unit. In (b) show the unit conversion, the sign of ΔG and the verdict, with the crossover temperature as a bonus.</p></div>`,
          topics: ['m1-carnot-cycle', 'm1-free-energy', 'm1-thermo-numericals'],
          notes: ['m1-thermo-numericals.4', 'm1-thermo-numericals.3']
        },
        {
          n: '4',
          marks: '5+5',
          co: '1',
          bl: '2',
          prompt: `<p><b>(a)</b> Find out rate expression for first order kinetics and prove that half-life of this reaction is independent of the concentrations of the reactants.</p>
<p><b>(b)</b> If above-said reaction takes 7 hours for its 50% completion, calculate the time required to complete its 80%.</p>`,
          answer: `<p><b>(a)</b> For a first-order reaction A → products, the rate is proportional to the first power of [A].</p>
<div class="eq">Rate = −d[A]/dt = k[A]</div>
<p>Separate the variables and integrate from [A]<sub>0</sub> at t = 0 to [A] at time t:</p>
<div class="eq">∫ d[A]/[A] = −k ∫ dt, so ln [A] − ln [A]<sub>0</sub> = −kt</div>
<div class="eq">ln [A] = ln [A]<sub>0</sub> − kt, or [A] = [A]<sub>0</sub> e<sup>−kt</sup>, or k = (1/t) ln ([A]<sub>0</sub>/[A])</div>
<p>A plot of ln [A] against t is a straight line with slope −k. The unit of k is s<sup>−1</sup> (time<sup>−1</sup>).</p>
<p><b>Half-life.</b> At t = t<sub>½</sub>, [A] = [A]<sub>0</sub>/2:</p>
<div class="eq">k t<sub>½</sub> = ln ([A]<sub>0</sub> / ([A]<sub>0</sub>/2)) = ln 2</div>
<div class="eq">t<sub>½</sub> = ln 2 / k = 0.693 / k</div>
<p>[A]<sub>0</sub> cancels, so t<sub>½</sub> depends only on k. It is independent of the initial concentration. Each successive half-life is the same length.</p>
<figure data-fig="m1-rate-halflife-conc"></figure>
<p><b>(b)</b> Given t<sub>½</sub> = 7 h.</p>
<div class="eq">k = 0.693 / 7 = 0.0990 h<sup>−1</sup></div>
<p>80% complete means 20% is left, [A]<sub>0</sub>/[A] = 5.</p>
<div class="eq">t = (1/k) ln 5 = 1.609 / 0.0990 = <b>16.25 h ≈ 16.3 h</b></div>
<p>Check by half-lives: 80% needs ln 5/ln 2 = 2.32 half-lives, and 2.32 × 7 = 16.25 h. The result lies between two half-lives (14 h, 75%) and three (21 h, 87.5%), as it should.</p>
<div class="note trap"><p>For 80% completion the fraction left is 0.20, not 0.80. Using ln(1/0.8) gives only 1.56 h, which is wrong.</p></div>
<div class="note exam"><p>Five marks each. In (a) the differential rate law, the integration steps and the cancellation of [A]<sub>0</sub> are the marks. In (b) show k, ln 5 and the final time with its unit.</p></div>`,
          topics: ['m1-rate-law', 'm1-integrated-rate'],
          notes: ['m1-integrated-rate.1', 'm1-kinetics-numericals.1']
        },
        {
          n: '5',
          marks: 10,
          co: '1',
          bl: '3',
          prompt: `<p>Elaborate on the importance of activation energy and temperature of a reaction using energy profile diagram and exhibit the formation of the activated complex with the help of the representative reaction. Predict the effect of catalyst on the rate of reaction.</p>`,
          answer: `<p><b>Activation energy.</b> E<sub>a</sub> is the minimum energy that colliding molecules must have to react. On the energy profile diagram (energy on the y-axis, reaction coordinate on the x-axis), reactants sit at one level, products at another, and between them is an energy hill. E<sub>a</sub> is the height from the reactants to the top of the hill.</p>
<figure data-fig="m1-energy-profile"></figure>
<p><b>Activated complex.</b> At the top of the hill the atoms are in a short-lived, high-energy arrangement called the activated complex or transition state. Old bonds are partly broken and new ones partly formed. It can fall to products or return to reactants.</p>
<p><b>Representative reaction: Cl + NOCl → NO + Cl<sub>2</sub>.</b> A Cl atom approaches the Cl end of NOCl with the right orientation. At the top of the barrier the arrangement is Cl···Cl···NO, with the new Cl–Cl bond partly formed and the old N–Cl bond partly broken. It then separates into Cl<sub>2</sub> and NO. (A collision at the wrong orientation just bounces.)</p>
<p><b>Importance of E<sub>a</sub></b></p>
<ul><li>The lower E<sub>a</sub> is, the larger k, and the faster the reaction. A very high E<sub>a</sub> makes a reaction slow even if it is energetically downhill.</li>
<li>E<sub>a</sub> sets how strongly the rate depends on temperature, through k = A e<sup>−E<sub>a</sub>/RT</sup> (ln k = ln A − E<sub>a</sub>/RT).</li></ul>
<p><b>Importance of temperature</b></p>
<ul><li>Raising T increases the average kinetic energy and the collision frequency.</li>
<li>More importantly, the fraction of molecules with energy ≥ E<sub>a</sub> (the tail of the Maxwell–Boltzmann distribution beyond E<sub>a</sub>) rises sharply. The rate roughly doubles for each 10 °C rise.</li></ul>
<p><b>Effect of a catalyst</b></p>
<figure data-fig="m1-catalyst-profile"></figure>
<ul><li>A catalyst gives an alternative path with a lower-energy transition state, so E<sub>a</sub> is lowered (a second, lower hill on the diagram).</li>
<li>More molecules clear the barrier, so <b>the rate increases</b> for both forward and reverse reactions. The catalyst is not consumed.</li>
<li>ΔH, ΔG and the equilibrium constant are unchanged; the catalyst only makes equilibrium come sooner.</li></ul>
<div class="worked"><div class="given"><p>A catalyst lowers E<sub>a</sub> by 10 kJ/mol at 300 K, with the same A. By what factor does k increase?</p></div>
<div class="solve"><p>k<sub>cat</sub>/k = e<sup>ΔE<sub>a</sub>/RT</sup> = e<sup>10000/(8.314 × 300)</sup> = e<sup>4.009</sup> ≈ 55.</p></div>
<div class="result">A 10 kJ/mol drop in E<sub>a</sub> speeds the reaction by about 55 times at room temperature.</div></div>
<div class="note trap"><p>A catalyst changes E<sub>a</sub>, not ΔH. Draw the reactant and product levels at the same height in both curves, and only the hump lower.</p></div>
<div class="note exam"><p>Ten marks: labelled energy profile with E<sub>a</sub> and transition state (3), the representative reaction and activated complex (3), temperature effect (2), catalyst effect (2).</p></div>`,
          topics: ['m1-collision-arrhenius', 'm1-catalysis'],
          notes: ['m1-collision-arrhenius.2', 'm1-catalysis.1']
        }
      ]
    },
    {
      id: 'cat2-g1tg1-2025',
      kind: 'actual',
      title: 'CAT-2 · Slot G1+TG1 · 11-10-2025',
      short: 'G1+TG1 paper',
      sub: 'Actual paper · Fall 2025–26',
      meta: [['Slot', 'G1+TG1'], ['Date', '11-10-2025'], ['Duration', '90 minutes'], ['Max marks', '50'], [
        'Programme',
        'B.Tech. Computer Science and Engineering'
      ]],
      instructions: `<b>General instructions:</b> Answer All Questions. M – Max mark; CO – Course Outcome; BL – Bloom's Taxonomy Level (1 – Remember, 2 – Understand, 3 – Apply, 4 – Analyse, 5 – Evaluate, 6 – Create).<br><b>Course Outcomes:</b> CO2: Use chemical concepts for the advancement of materials in electrical, magnetic, and energy domains. CO3: Demonstrate UV-Visible spectroscopic and X-ray diffraction techniques.`,
      questions: [
        {
          n: '1',
          marks: 10,
          co: '2',
          bl: '3',
          prompt: `<p>A widely used rechargeable battery in portable electronics works on the principle of reversible insertion and removal of ions into layered solid materials. Illustrate its working mechanism with a neat diagram, write the balanced chemical equations for the charge-discharge process, and explain why such layered solid electrode materials allow repeated cycling compared to batteries based only on redox reactions in solution.</p>`,
          answer: `<p>This is the <b>lithium-ion battery</b>: layered LiCoO<sub>2</sub> (positive) and layered graphite (negative), Li<sup>+</sup> moving between them through a Li-salt organic electrolyte and separator (a rocking-chair cell).</p>
<figure data-fig="m2-liion-charge-discharge"></figure>
<p><b>Mechanism</b></p>
<ul><li><b>Charging:</b> Co<sup>3+</sup> is oxidised towards Co<sup>4+</sup>; Li<sup>+</sup> leaves the oxide layers, crosses the electrolyte and enters between the graphite sheets. The charger pushes electrons through the outer circuit to the graphite.</li>
<li><b>Discharging:</b> Li<sup>+</sup> leaves the graphite and re-enters the oxide; electrons flow through the device from graphite to LiCoO<sub>2</sub>.</li></ul>
<div class="eq">Charge, positive: LiCoO<sub>2</sub> → Li<sub>1−n</sub>CoO<sub>2</sub> + nLi<sup>+</sup> + ne<sup>−</sup></div>
<div class="eq">Charge, negative: C<sub>6</sub> + nLi<sup>+</sup> + ne<sup>−</sup> → Li<sub>n</sub>C<sub>6</sub></div>
<div class="eq">Overall charge: LiCoO<sub>2</sub> + C<sub>6</sub> → Li<sub>1−n</sub>CoO<sub>2</sub> + Li<sub>n</sub>C<sub>6</sub></div>
<div class="eq">Overall discharge: Li<sub>1−n</sub>CoO<sub>2</sub> + Li<sub>n</sub>C<sub>6</sub> → LiCoO<sub>2</sub> + C<sub>6</sub></div>
<p><b>Why layered solids cycle better than solution redox batteries</b></p>
<ul><li>Li<sup>+</sup> is inserted (intercalated) between layers that stay intact; the lattice only swells or shrinks slightly, so the electrode does not crack or dissolve.</li>
<li>In batteries where active material dissolves and is redeposited (solution redox or plating), each cycle rebuilds the electrode, giving uneven deposits, dendrites and loss of material. Intercalation avoids this, so thousands of cycles are possible.</li>
<li>The solid host keeps reactant and product in place (no crossover or self-discharge through the solution), and Li<sup>+</sup> diffuses quickly through the open 2D gaps.</li></ul>
<div class="note trap"><p>The positive plate is always LiCoO<sub>2</sub>; "anode" and "cathode" swap between charge and discharge, so label by + and −. Do not write metallic Li as the anode material.</p></div>
<div class="note exam"><p>Ten marks: a labelled diagram with both electrodes and the Li<sup>+</sup> path, the four equations, and two reasons why intercalation outlasts dissolution and plating.</p></div>`,
          topics: ['m2-li-ion', 'm2-batteries'],
          notes: ['m2-li-ion.3', 'm2-li-ion.4', 'm2-li-ion.5']
        },
        {
          n: '2',
          marks: 10,
          co: '2',
          bl: '3',
          prompt: `<p>Natural pigments, such as anthocyanin or betanin, can absorb visible light and transfer excited electrons to a semiconducting material, which creates an electrical current. Show the construction of an electricity generation system using a detailed diagram, explaining each event with justification.</p>`,
          answer: `<p>This is the <b>dye-sensitized solar cell (DSSC)</b> with a natural dye (anthocyanin from hibiscus or betanin from beetroot) as the sensitizer.</p>
<figure data-fig="m2-dssc-schematic"></figure>
<p><b>Construction (draw as a sandwich):</b> a glass plate coated with transparent conducting oxide (FTO or ITO); on it a nanoporous TiO<sub>2</sub> film dyed with the pigment; an electrolyte holding the I<sup>−</sup>/I<sub>3</sub><sup>−</sup> couple; and a counter electrode (Pt or graphite on FTO glass). The external load joins the TiO<sub>2</sub> plate (−) and the counter electrode (+).</p>
<p><b>Events and justification</b></p>
<ol><li><b>Light absorption:</b> S + hν → S*. TiO<sub>2</sub> (wide gap) takes only UV, so the pigment, which absorbs visible light through its conjugated chromophore, extends the response.</li>
<li><b>Electron injection:</b> S* → S<sup>+</sup> + e<sup>−</sup> (into the TiO<sub>2</sub> conduction band). The excited level lies above the conduction band, and the dye is anchored by –OH or –COOH groups, so injection is fast.</li>
<li><b>Transport:</b> electrons diffuse through the TiO<sub>2</sub> network to the FTO, then through the external load, doing work.</li>
<li><b>Counter electrode:</b> I<sub>3</sub><sup>−</sup> + 2e<sup>−</sup> → 3I<sup>−</sup> (Pt or graphite catalyses it).</li>
<li><b>Regeneration:</b> 2S<sup>+</sup> + 3I<sup>−</sup> → 2S + I<sub>3</sub><sup>−</sup>. The dye is restored, so the cell is regenerative and nothing is used up.</li></ol>
<p>The nanoporous film gives a huge dye-covered area, so a thin layer absorbs most of the light, and the absorbing dye and the conducting TiO<sub>2</sub> are separate phases, which slows recombination. Natural dyes are cheap, non-toxic and easy to extract, though less stable and less efficient than Ru dyes.</p>
<div class="note trap"><p>Do not draw a plain Si p–n cell: the question is about a pigment on a semiconductor, which is the DSSC. The dyed TiO<sub>2</sub> plate is the negative electrode.</p></div>
<div class="note exam"><p>Ten marks: the sandwich diagram with all five parts labelled, the numbered events with equations, and one reason for each (why dye, why nanoporous TiO<sub>2</sub>, why the electrolyte).</p></div>`,
          topics: ['m2-dssc', 'm2-pec-cells'],
          notes: ['m2-dssc.0', 'm2-dssc.1', 'm2-dssc.5']
        },
        {
          n: '3',
          marks: '5+5',
          co: '2',
          bl: '2',
          prompt: `<p><b>(a)</b> A material often displays dramatically different physical, chemical, and electronic behavior when reduced from bulk to the nanoscale. Discuss the fundamental factors responsible for these differences, supporting your discussion with a relevant example.</p>
<p><b>(b)</b> Describe a chemical strategy to convert a silica-based precursor into nanosilica, and clearly explain the underlying principles that govern particle size control and nanoscale formation.</p>`,
          answer: `<p><b>(a) Factors</b></p>
<ul><li><b>Surface-area-to-volume ratio:</b> splitting a cube of edge a into n slices per edge gives total area 6a<sup>2</sup>n for the same volume. At 1–100 nm a large share of atoms is at the surface, with unsatisfied bonds and high surface energy, so reactivity, catalytic activity and melting point change.</li>
<li><b>Quantum confinement:</b> when size nears the de Broglie wavelength of electrons, continuous bands break into discrete levels and the band gap widens as size falls, changing electrical and optical behaviour (metal, semiconductor, insulator).</li></ul>
<figure data-fig="m3-confinement-bands"></figure>
<p><b>Example:</b> bulk gold is yellow and unreactive, while gold nanoparticles are red to purple depending on size and become catalytically active; CdSe quantum dots change emission colour with diameter. Silver and gold nanoparticles also differ in colour from their bulk metal.</p>
<p><b>(b) Sol–gel conversion of a silicon alkoxide (TEOS) to nanosilica</b></p>
<ol><li><b>Hydrolysis:</b> Si(OR)<sub>4</sub> + 4H<sub>2</sub>O → Si(OH)<sub>4</sub> + 4ROH.</li>
<li><b>Condensation:</b> Si–OH + HO–Si → Si–O–Si + H<sub>2</sub>O (or Si–OR + HO–Si → Si–O–Si + ROH); a siloxane network (gel) forms.</li>
<li><b>Aging, drying</b> (xerogel) and <b>calcination</b> give SiO<sub>2</sub> nanoparticles.</li></ol>
<figure data-fig="m3-siloxane-network"></figure>
<p><b>Size control:</b> the water : alkoxide ratio, catalyst (base such as NH<sub>3</sub> gives separate spheres, acid gives chain networks), temperature, precursor concentration and aging time. Slow, controlled hydrolysis forms many small nuclei that stay small (bottom-up growth from molecules), whereas fast growth gives large particles. Extra: a capping or stabilising agent stops agglomeration.</p>
<div class="note trap"><p>Ball milling is top-down, so it does not answer (b). Condensation gives off H<sub>2</sub>O or ROH, not Si(OH)<sub>4</sub>.</p></div>
<div class="note exam"><p>Five marks each part. In (a) surface area and quantum confinement with an example; in (b) hydrolysis and condensation equations, the steps, and at least two size-control factors.</p></div>`,
          topics: ['m3-why-nano', 'm3-synthesis', 'm3-sol-gel'],
          notes: ['m3-why-nano.0', 'm3-why-nano.1', 'm3-sol-gel.3']
        },
        {
          n: '4',
          marks: 10,
          co: '3',
          bl: '2',
          prompt: `<p>Explain the working principle of spectroscopy that utilises EMR in the range of 200-800 nm, accompanied by a neat sketch. Envisage color differences in benzene (colourless), nitrobenzene (yellow), and 4-nitrophenol (intense yellow) based on molecular structure and substituent effect.</p>`,
          answer: `<p><b>UV-Visible spectroscopy.</b> Light of 200–800 nm has energies matching the gaps between electronic levels. A molecule absorbs a photon only if hν = ΔE, promoting an electron from a bonding (π) or lone-pair (n) orbital to an antibonding one (π*). The detector compares transmitted and incident light; absorbance follows Beer–Lambert, A = εcl.</p>
<figure data-fig="m4-double-beam"></figure>
<p><b>Sketch:</b> source (D<sub>2</sub> lamp for UV, tungsten lamp for visible) → monochromator → sample and reference cuvettes → detector → recorder, giving an absorbance against wavelength spectrum.</p>
<p><b>Colour differences</b> (colour seen is the complement of the colour absorbed; yellow means absorption in the violet-blue near 400–450 nm)</p>
<ul><li><b>Benzene:</b> only a π → π* transition of the ring, at about 255 nm (UV). Nothing is absorbed in the visible, so it is colourless.</li>
<li><b>Nitrobenzene:</b> the –NO<sub>2</sub> chromophore conjugates with the ring, extending the π system and adding an n → π* transition. The gap shrinks, the band moves to the edge of the visible (bathochromic shift), so absorption tails into violet-blue and it looks pale yellow.</li>
<li><b>4-nitrophenol:</b> –OH is an auxochrome, an electron donor, para to the electron-withdrawing –NO<sub>2</sub>. Its lone pair delocalises through the ring into –NO<sub>2</sub> (charge transfer, push-pull). This lowers the gap further and raises intensity (bathochromic and hyperchromic shifts), so absorption sits near 400 nm and the colour is intense yellow. In base the phenoxide ion is even more strongly donating.</li></ul>
<figure data-fig="m4-shift-diagram"></figure>
<div class="note trap"><p>Colour seen is the complement of the colour absorbed: a yellow compound absorbs violet-blue, not yellow. Name the auxochrome (–OH) and the chromophore (–NO<sub>2</sub>), not just "conjugation".</p></div>
<div class="note exam"><p>Ten marks: the principle (hν = ΔE and the transitions), a labelled sketch of the instrument, then each of the three compounds with the structural reason for its colour.</p></div>`,
          topics: ['m4-uv-vis', 'm4-spectroscopy'],
          notes: ['m4-uv-vis.0', 'm4-uv-vis-instrument.1', 'm4-uv-vis.7']
        },
        {
          n: '5',
          marks: '5+5',
          co: '3',
          bl: '3',
          prompt: `<p><b>(a)</b> An electrochemical cell is constructed as follows: Zn<sub>(s)</sub>|Zn<sup>2+</sup>(?)||Ag<sup>+</sup>(0.1 M)|Ag<sub>(s)</sub>. The standard reduction potentials are −0.76 V and 0.8 V, respectively, and the measured cell potential is 1.50 V at 25°C. Calculate the concentration of Zn<sup>2+</sup> in the anode compartment.</p>
<p><b>(b)</b> A material has been characterised using powder X-ray diffraction (p-XRD). One of its diffraction peaks appears at 2θ = 36.50° with a full width at half maximum (FWHM) of 0.85°. The X-ray wavelength used is λ = 1.5406 Å, and k = 0.9. Determine the crystallite size of the material and comment on the size of the material based on the result.</p>`,
          answer: `<p><b>(a)</b> Zn is the anode (E° = −0.76 V), Ag the cathode (E° = +0.80 V). Reaction: Zn + 2Ag<sup>+</sup> → Zn<sup>2+</sup> + 2Ag, n = 2.</p>
<div class="eq">E°<sub>cell</sub> = 0.80 − (−0.76) = 1.56 V</div>
<div class="eq">E<sub>cell</sub> = E°<sub>cell</sub> − (0.0591/n) log([Zn<sup>2+</sup>]/[Ag<sup>+</sup>]<sup>2</sup>)</div>
<div class="eq">1.50 = 1.56 − 0.02955 log([Zn<sup>2+</sup>]/(0.1)<sup>2</sup>)</div>
<div class="eq">log([Zn<sup>2+</sup>]/0.01) = 0.06/0.02955 = 2.030, so [Zn<sup>2+</sup>]/0.01 = 107.3</div>
<div class="eq">[Zn<sup>2+</sup>] = <b>1.07 M</b> (about 1.1 M)</div>
<p><b>(b)</b> Scherrer equation, D = kλ/(β cos θ).</p>
<div class="eq">θ = 36.50°/2 = 18.25°, cos θ = 0.9497</div>
<div class="eq">β = 0.85° × π/180 = 0.014835 rad; λ = 0.15406 nm</div>
<div class="eq">D = (0.9 × 0.15406) / (0.014835 × 0.9497) = 0.13865/0.014089 = <b>9.84 nm ≈ 9.8 nm</b></div>
<p><b>Comment:</b> D is below 100 nm (below 10 nm), so the material is nanocrystalline, which explains the broad peak. A large fraction of atoms is at the surface, so expect high surface area, reactivity and possible size-dependent optical or electronic properties. Scherrer gives crystallite size (coherent domains), which can be smaller than the particle or grain size; instrument broadening and strain are ignored, so the true crystallite size is at least this value.</p>
<div class="note trap"><p>Use θ (18.25°) in cos θ, not 2θ, and convert FWHM to radians. In (a) square [Ag<sup>+</sup>] and note that the quotient has Zn<sup>2+</sup> on top because the lower E means Zn is the anode. The printed E°(Zn<sup>2+</sup>/Zn) = −0.76 V and E°(Ag<sup>+</sup>/Ag) = 0.8 V (rounded from 0.80 V); the answer is the same.</p></div>
<div class="note exam"><p>Five marks each part. In (a) E° = 1.56 V, the squared Ag<sup>+</sup> term and 1.07 M. In (b) θ = 18.25°, β in radians, D = 9.8 nm and the nanocrystalline comment.</p></div>`,
          topics: ['m2-electrochemical-cells', 'm4-scherrer'],
          notes: ['m2-electrochemical-cells.3', 'm4-scherrer.2']
        }
      ]
    },
    {
      id: 'cat1-g1tg1-2025',
      kind: 'actual',
      title: 'CAT-1 · Slot G1+TG1 · 23-08-2025',
      short: 'G1+TG1 paper',
      sub: 'Actual paper · Fall 2025–26',
      meta: [['Slot', 'G1+TG1'], ['Date', '23-08-2025'], ['Duration', '90 minutes'], ['Max marks', '50'], [
        'Programme',
        'B.Tech. Computer Science and Engineering'
      ]],
      instructions: `<b>General instructions:</b> Answer All Questions. M – Max mark; CO – Course Outcome; BL – Bloom's Taxonomy Level (1 – Remember, 2 – Understand, 3 – Apply, 4 – Analyse, 5 – Evaluate, 6 – Create).<br><b>Course Outcome:</b> CO1: Understand the fundamental concepts in physical, analytical, and materials chemistry.`,
      questions: [
        {
          n: '1',
          marks: 10,
          co: '1',
          bl: '2',
          prompt: `<p>Explain in detail the four thermodynamic processes involved in a Carnot cycle with the help of a P-V diagram. Derive expressions for the work done and the efficiency of a Carnot engine. Prove that all reversible heat engines operating between the same two temperatures have the same efficiency.</p>`,
          answer: `<p>The Carnot engine is a reversible cycle of an ideal gas between a hot reservoir T<sub>h</sub> and a cold reservoir T<sub>c</sub>.</p>
<figure data-fig="m1-carnot-pv"></figure>
<p><b>Diagram to draw:</b> P on the y-axis, V on the x-axis, points A, B, C, D going clockwise. A→B and C→D are isotherms (gentle curves, B→C and D→A are steeper adiabats).</p>
<p><b>The four steps</b></p>
<ol><li><b>A→B, reversible isothermal expansion at T<sub>h</sub>:</b> the gas absorbs q<sub>h</sub> from the source. ΔU = 0, so q<sub>h</sub> = −w<sub>1</sub> = nRT<sub>h</sub> ln(V<sub>B</sub>/V<sub>A</sub>).</li>
<li><b>B→C, reversible adiabatic expansion:</b> q = 0, the gas cools from T<sub>h</sub> to T<sub>c</sub>, w<sub>2</sub> = C<sub>v</sub>(T<sub>c</sub> − T<sub>h</sub>).</li>
<li><b>C→D, reversible isothermal compression at T<sub>c</sub>:</b> the gas rejects heat to the sink. q<sub>c</sub> = nRT<sub>c</sub> ln(V<sub>C</sub>/V<sub>D</sub>) is the heat given up, since ΔU = 0.</li>
<li><b>D→A, reversible adiabatic compression:</b> q = 0, the gas warms from T<sub>c</sub> to T<sub>h</sub>, w<sub>4</sub> = C<sub>v</sub>(T<sub>h</sub> − T<sub>c</sub>).</li></ol>
<p><b>Work and efficiency.</b> The two adiabatic works cancel. Over the full cycle ΔU = 0, so the net work done by the engine is W = q<sub>h</sub> − q<sub>c</sub> (both taken as positive magnitudes).</p>
<div class="eq">W = nR(T<sub>h</sub> − T<sub>c</sub>) ln(V<sub>B</sub>/V<sub>A</sub>)</div>
<p>For the adiabats, T V<sup>γ−1</sup> = constant gives T<sub>h</sub>V<sub>B</sub><sup>γ−1</sup> = T<sub>c</sub>V<sub>C</sub><sup>γ−1</sup> and T<sub>h</sub>V<sub>A</sub><sup>γ−1</sup> = T<sub>c</sub>V<sub>D</sub><sup>γ−1</sup>. Dividing, V<sub>B</sub>/V<sub>A</sub> = V<sub>C</sub>/V<sub>D</sub>, so the logarithms match and</p>
<div class="eq">η = W / q<sub>h</sub> = (q<sub>h</sub> − q<sub>c</sub>) / q<sub>h</sub> = (T<sub>h</sub> − T<sub>c</sub>) / T<sub>h</sub> = 1 − T<sub>c</sub>/T<sub>h</sub></div>
<p><b>Proof that every reversible engine has the same efficiency.</b> Suppose engine X has efficiency greater than the Carnot engine C, both between T<sub>h</sub> and T<sub>c</sub>. Run X forward and drive C backwards as a refrigerator using X's work output. For the same heat q<sub>h</sub> drawn from the source, X would give more work than C needs, so the pair would deliver net work with no net heat taken from the surroundings, or would move heat from cold to hot with no work. Either result violates the second law (Kelvin–Planck or Clausius). So η<sub>X</sub> cannot exceed η<sub>C</sub>. The same argument with the roles swapped (C forward, X reversed, possible because X is reversible) shows η<sub>C</sub> cannot exceed η<sub>X</sub>. Hence η<sub>X</sub> = η<sub>C</sub> = 1 − T<sub>c</sub>/T<sub>h</sub>, which depends only on the two temperatures and not on the working substance.</p>
<div class="note trap"><p>The proof needs <b>reversibility</b> of both engines: it is what lets you run one backwards. An irreversible engine is always less efficient, never more. Also use Kelvin temperatures in η.</p></div>
<div class="note exam"><p>Ten marks: the labelled P-V diagram with the four steps and their heat and work terms carries about half. Then the derivation of V<sub>B</sub>/V<sub>A</sub> = V<sub>C</sub>/V<sub>D</sub> and η = 1 − T<sub>c</sub>/T<sub>h</sub>, and the second-law argument (run one engine backwards) for the proof.</p></div>`,
          topics: ['m1-carnot-cycle', 'm1-second-law-entropy'],
          notes: ['m1-carnot-cycle.1', 'm1-carnot-cycle.2', 'm1-carnot-cycle.3']
        },
        {
          n: '2',
          marks: 10,
          co: '1',
          bl: '3',
          prompt: `<p>Using the Gibbs–Helmholtz equation, explain how the spontaneity of a chemical reaction is predicted in terms of enthalpy (ΔH) and entropy (ΔS). Apply this concept to explain why adsorption of gas molecules onto a solid surface can be spontaneous even when entropy decreases (ΔS &lt; 0). Discuss the role of enthalpy and temperature in such cases.</p>`,
          answer: `<p><b>Gibbs–Helmholtz equation</b> (constant T and P):</p>
<div class="eq">ΔG = ΔH − TΔS</div>
<p>It comes from ΔS<sub>total</sub> = ΔS + ΔS<sub>surr</sub> with ΔS<sub>surr</sub> = −ΔH/T, multiplied by −T. A reaction is spontaneous when ΔG &lt; 0, at equilibrium when ΔG = 0, and non-spontaneous when ΔG &gt; 0.</p>
<table class="tbl"><thead><tr><th>ΔH</th><th>ΔS</th><th>ΔG</th><th>Spontaneous?</th></tr></thead><tbody>
<tr><td>−</td><td>+</td><td>always −</td><td>at all T</td></tr>
<tr><td>+</td><td>−</td><td>always +</td><td>at no T</td></tr>
<tr><td>−</td><td>−</td><td>− at low T</td><td>only below T = ΔH/ΔS</td></tr>
<tr><td>+</td><td>+</td><td>− at high T</td><td>only above T = ΔH/ΔS</td></tr></tbody></table>
<p><b>Adsorption.</b> A gas molecule that sticks to a surface loses its translational freedom, so ΔS &lt; 0 and the −TΔS term is positive (it opposes the process). Adsorption also forms attractive bonds between gas and surface (physisorption or chemisorption), so ΔH is <b>negative</b> and fairly large. This is the (−, −) row: ΔG = ΔH − TΔS = −|ΔH| + T|ΔS|.</p>
<p>Adsorption is spontaneous while |ΔH| &gt; T|ΔS|, that is, below the limiting temperature T<sub>lim</sub> = ΔH/ΔS. Lowering T shrinks the unfavourable TΔS term, so the enthalpy wins. Raising T above T<sub>lim</sub> makes ΔG positive and the gas desorbs. This is why adsorption is favoured at low temperature and high pressure.</p>
<div class="eq">Example: ΔH = −40 kJ/mol, ΔS = −100 J/mol/K gives ΔG<sub>300</sub> = −40 000 + 300 × 100 = −10 000 J/mol (spontaneous); T<sub>lim</sub> = 40 000/100 = 400 K.</div>
<div class="note trap"><p>Do not say a negative ΔS makes a process non-spontaneous. The surroundings gain entropy (ΔS<sub>surr</sub> = −ΔH/T &gt; 0 for an exothermic step), and the total entropy still rises. Also keep ΔH in kJ and ΔS in J, so convert before subtracting.</p></div>
<div class="note exam"><p>Write ΔG = ΔH − TΔS, give the sign table, then spend the second half on adsorption: ΔH negative, ΔS negative, spontaneous below T = ΔH/ΔS. A short numeric example earns the application mark.</p></div>`,
          topics: ['m1-free-energy', 'm1-gibbs-helmholtz-third-law'],
          notes: ['m1-gibbs-helmholtz-third-law.0', 'm1-gibbs-helmholtz-third-law.1']
        },
        {
          n: '3',
          marks: '5+5',
          co: '1',
          bl: '3',
          prompt: `<p><b>(a)</b> One mole of an ideal gas undergoes a reversible isothermal expansion at 300 K, increasing its volume from 5 L to 20 L. Calculate the work done (w) during the process. Determine the values of heat exchanged (q), change in internal energy (ΔU), and change in enthalpy (ΔH). Give the data in Joules.</p>
<p><b>(b)</b> One mole of an ideal monoatomic gas is heated from 400 K to 1000 K at constant pressure. Calculate the change in entropy for the process. C<sub>P</sub> = 5R/2.</p>`,
          answer: `<p><b>(a)</b> Constants: R = 8.314 J/mol/K. Sign convention: w is work done on the system, so expansion gives negative w.</p>
<div class="eq">w = −nRT ln(V<sub>2</sub>/V<sub>1</sub>) = −1 × 8.314 × 300 × ln(20/5) = −2494.2 × 1.3863 = <b>−3458 J</b></div>
<p>For an ideal gas at constant T, internal energy and enthalpy depend only on T, so ΔU = 0 and ΔH = ΔU + Δ(PV) = ΔU + nRΔT = 0. From the first law, q = −w.</p>
<div class="eq">q = <b>+3458 J</b> (absorbed), ΔU = <b>0</b>, ΔH = <b>0</b></div>
<p><b>(b)</b> At constant pressure, dS = nC<sub>p</sub> dT/T.</p>
<div class="eq">ΔS = nC<sub>p</sub> ln(T<sub>2</sub>/T<sub>1</sub>) = 1 × 2.5 × 8.314 × ln(1000/400) = 20.785 × 0.9163 = <b>19.05 J/K</b></div>
<div class="note trap"><p>In (a), the sign of w depends on convention. If your class writes w = +nRT ln(V<sub>2</sub>/V<sub>1</sub>) for work done by the gas, say so and give +3458 J, with q = +3458 J too. Use ln, not log<sub>10</sub>, and Kelvin.</p></div>
<div class="note exam"><p>Part (a) gives w, q, ΔU, ΔH in Joules with signs and units; part (b) needs C<sub>p</sub> ln(T<sub>2</sub>/T<sub>1</sub>) with the number 19.05 J/K. State R = 8.314 and show the substitution.</p></div>`,
          topics: ['m1-expansion-work', 'm1-thermo-numericals', 'm1-enthalpy-heat-capacity'],
          notes: ['m1-thermo-numericals.0', 'm1-thermo-numericals.2']
        },
        {
          n: '4',
          marks: '5+5',
          co: '1',
          bl: '2',
          prompt: `<p><b>(a)</b> With the help of a labeled energy diagram, explain how catalysts influence the rate of a chemical reaction. Justify your answer with appropriate reasoning related to activation energy.</p>
<p><b>(b)</b> Ammonium nitrate decomposes thermally and follows first-order kinetics. When 5.0 g of the substance is heated at 80 °C for 15 minutes, only 0.5 g remains undecomposed. Calculate the rate constant (k) and half-life (t<sub>1/2</sub>) of the decomposition.</p>`,
          answer: `<p><b>(a)</b> A catalyst speeds up a reaction by giving it a different pathway with a <b>lower activation energy</b>. It is not consumed.</p>
<figure data-fig="m1-catalyst-profile"></figure>
<p><b>Diagram to draw:</b> potential energy against reaction coordinate. One tall hump (uncatalysed, E<sub>a</sub>) and a lower hump (catalysed, E<sub>a</sub>'), both from the same reactant level to the same product level. Label reactants, products, ΔH (the same for both), E<sub>a</sub> and E<sub>a</sub>'.</p>
<ul><li>From k = A e<sup>−E<sub>a</sub>/RT</sup>, a smaller E<sub>a</sub> raises k exponentially, because a larger fraction of molecular collisions has enough energy to cross the barrier.</li>
<li>ΔH, ΔG and the equilibrium constant are unchanged, because the reactants and products are the same. The catalyst speeds the forward and reverse reactions equally and so reaches equilibrium sooner, but does not shift it.</li></ul>
<p><b>(b)</b> First order: k = (1/t) ln(C<sub>0</sub>/C). Mass is proportional to concentration, so use grams directly.</p>
<div class="eq">k = (1/15) ln(5.0/0.5) = (1/15) × 2.3026 = <b>0.1535 min<sup>−1</sup></b></div>
<div class="eq">t<sub>1/2</sub> = 0.693/k = 0.6931/0.1535 = <b>4.52 min</b></div>
<div class="note trap"><p>The 80 °C is only the condition; it is not used in the arithmetic. Do not convert to Kelvin here. If seconds are wanted: k = 2.56 × 10<sup>−3</sup> s<sup>−1</sup>.</p></div>
<div class="note exam"><p>Part (a): the diagram with two humps and the same ΔH, plus the sentence linking lower E<sub>a</sub> to larger k. Part (b): the first-order formula, k = 0.1535 min<sup>−1</sup> and t<sub>1/2</sub> = 4.52 min with units.</p></div>`,
          topics: ['m1-catalysis', 'm1-integrated-rate'],
          notes: ['m1-catalysis.1', 'm1-kinetics-numericals.2']
        },
        {
          n: '5',
          marks: 10,
          co: '1',
          bl: '1',
          prompt: `<p>Discuss with an example how temperature affects the rate of a chemical reaction with reference to the collision theory and activation energy, with appropriate illustrations. Show graphically how the distribution of molecular kinetic energies changes with increasing temperature, and explain how this influences the reaction rate. Write the Arrhenius equation and clearly define each of its terms.</p>`,
          answer: `<p><b>Collision theory.</b> A reaction needs a collision with (1) energy at least E<sub>a</sub> and (2) the right orientation. Raising T makes molecules move faster, so collisions are more frequent, but the dominant effect is that many more collisions are energetic enough.</p>
<figure data-fig="m1-arrhenius-plot"></figure>
<p><b>Graph to draw:</b> Maxwell–Boltzmann curves, fraction of molecules (y) against kinetic energy (x), for T<sub>1</sub> and a higher T<sub>2</sub>. Mark E<sub>a</sub> as a vertical line on the right. At T<sub>2</sub> the peak is lower and shifted right, and the tail is fatter, so the shaded area beyond E<sub>a</sub> is much larger. The total area under both curves is the same (all molecules).</p>
<p><b>Arrhenius equation</b></p>
<div class="eq">k = A e<sup>−E<sub>a</sub>/RT</sup> &nbsp;&nbsp; or &nbsp;&nbsp; ln k = ln A − E<sub>a</sub>/(RT)</div>
<p>k is the rate constant; A is the frequency (pre-exponential) factor, the collision rate with correct orientation; E<sub>a</sub> is the activation energy (J/mol); R = 8.314 J/mol/K; T is absolute temperature; e<sup>−E<sub>a</sub>/RT</sup> is the fraction of collisions with energy at least E<sub>a</sub>. A plot of ln k against 1/T is a straight line with slope −E<sub>a</sub>/R.</p>
<p><b>Example.</b> Take E<sub>a</sub> = 50 kJ/mol. The fraction of energetic molecules is e<sup>−50000/(8.314 × 300)</sup> = 2.0 × 10<sup>−9</sup> at 300 K and 3.8 × 10<sup>−9</sup> at 310 K. A 10 K rise therefore raises k by a factor of about 1.9, which is the familiar rule that the rate roughly doubles per 10 °C. Everyday case: milk spoils faster at room temperature than in a fridge.</p>
<div class="note trap"><p>The temperature effect is not mainly more collisions: collision frequency rises only about 1.6% for 10 K near 300 K, while the energetic fraction nearly doubles. Also, E<sub>a</sub> itself does not change with T.</p></div>
<div class="note exam"><p>Draw the two Maxwell–Boltzmann curves with the area beyond E<sub>a</sub> shaded, write k = A e<sup>−E<sub>a</sub>/RT</sup> with each term defined, and give one worked example showing the rate roughly doubling for a 10 K rise.</p></div>`,
          topics: ['m1-collision-arrhenius'],
          notes: ['m1-collision-arrhenius.0', 'm1-collision-arrhenius.3', 'm1-collision-arrhenius.4']
        }
      ]
    },
    {
      id: 'cat1-g2tg2-2025',
      kind: 'actual',
      title: 'CAT-1 · Slot G2+TG2 · 23-08-2025',
      short: 'G2+TG2 paper',
      sub: 'Actual paper · Fall 2025–26',
      meta: [['Slot', 'G2+TG2'], ['Date', '23-08-2025'], ['Duration', '90 minutes'], ['Max marks', '50'], [
        'Programme',
        'B.Tech. Computer Science and Engineering'
      ]],
      instructions: `<b>General instructions:</b> Answer All Questions. M – Max mark; CO – Course Outcome; BL – Blooms Taxonomy Level (1 – Remember, 2 – Understand, 3 – Apply, 4 – Analyse, 5 – Evaluate, 6 – Create).<br><b>Course Outcome:</b> CO1: Understand the fundamental concepts in physical, analytical and materials chemistry.`,
      questions: [
        {
          n: '1',
          marks: 10,
          co: '1',
          bl: '2',
          prompt: `<p>Discuss the reversible and irreversible work done by one mole gas in an isothermal process using a diagram and appropriate equations. What is the change in internal energy for an isothermal process for a mole of ideal gas?</p>`,
          answer: `<p>Work of expansion is w = −∫P<sub>ex</sub> dV (w on the system). For one mole at constant T, V<sub>1</sub> → V<sub>2</sub>:</p>
<figure data-fig="m1-pv-isothermal"></figure>
<p><b>Diagram to draw:</b> a P–V plot with the isotherm PV = RT from (V<sub>1</sub>, P<sub>1</sub>) to (V<sub>2</sub>, P<sub>2</sub>). Shade the whole area under the curve for the reversible case, and a smaller rectangle of height P<sub>2</sub> and width V<sub>2</sub> − V<sub>1</sub> for the irreversible (single-step) case.</p>
<p><b>Reversible:</b> the external pressure is always within an infinitesimal amount of the gas pressure, P = RT/V.</p>
<div class="eq">w<sub>rev</sub> = −RT ∫ dV/V = −RT ln(V<sub>2</sub>/V<sub>1</sub>) = −RT ln(P<sub>1</sub>/P<sub>2</sub>)</div>
<p><b>Irreversible (against constant P<sub>ex</sub> = P<sub>2</sub>):</b></p>
<div class="eq">w<sub>irr</sub> = −P<sub>2</sub>(V<sub>2</sub> − V<sub>1</sub>) = −RT (1 − P<sub>2</sub>/P<sub>1</sub>)</div>
<p>For an expansion, |w<sub>rev</sub>| &gt; |w<sub>irr</sub>|: the reversible path gives the <b>maximum work</b>, and for compression it needs the minimum. Free expansion into vacuum (P<sub>ex</sub> = 0) gives w = 0.</p>
<p><b>Internal energy:</b> for an ideal gas U depends only on T (no intermolecular forces), so for an isothermal process <b>ΔU = 0</b> and q = −w. The heat absorbed equals the work done by the gas, and more heat is absorbed on the reversible path.</p>
<div class="note trap"><p>Both paths join the same two states, so ΔU, ΔH and ΔS of the gas are the same. Only q and w differ, because they are path functions.</p></div>
<div class="note exam"><p>Draw the isotherm with the full area shaded for reversible and a rectangle for irreversible. State w<sub>rev</sub> and w<sub>irr</sub> and end with ΔU = 0 for an ideal gas at constant T.</p></div>`,
          topics: ['m1-expansion-work', 'm1-zeroth-first-law'],
          notes: ['m1-expansion-work.0', 'm1-thermo-basics.3']
        },
        {
          n: '2',
          marks: 10,
          co: '1',
          bl: '3',
          prompt: `<p>A reversible heat engine operates between the hot source (T<sub>h</sub>) and heat sink (T<sub>c</sub>). Derive the efficiency of the engine and explain all the processes on PV-diagram. How will you design your strategy to maximise its efficiency?</p>`,
          answer: `<figure data-fig="m1-carnot-pv"></figure>
<p><b>PV diagram (Carnot cycle), clockwise A→B→C→D:</b></p>
<ol><li>A→B isothermal expansion at T<sub>h</sub>: q<sub>h</sub> = nRT<sub>h</sub> ln(V<sub>B</sub>/V<sub>A</sub>) absorbed, ΔU = 0.</li>
<li>B→C adiabatic expansion: q = 0, gas cools T<sub>h</sub> → T<sub>c</sub>.</li>
<li>C→D isothermal compression at T<sub>c</sub>: heat q<sub>c</sub> = nRT<sub>c</sub> ln(V<sub>C</sub>/V<sub>D</sub>) rejected to the sink.</li>
<li>D→A adiabatic compression: q = 0, gas warms T<sub>c</sub> → T<sub>h</sub>.</li></ol>
<p><b>Efficiency.</b> The adiabats satisfy T V<sup>γ−1</sup> = constant, so T<sub>h</sub>V<sub>B</sub><sup>γ−1</sup> = T<sub>c</sub>V<sub>C</sub><sup>γ−1</sup> and T<sub>h</sub>V<sub>A</sub><sup>γ−1</sup> = T<sub>c</sub>V<sub>D</sub><sup>γ−1</sup>, giving V<sub>B</sub>/V<sub>A</sub> = V<sub>C</sub>/V<sub>D</sub>. Then</p>
<div class="eq">η = W/q<sub>h</sub> = (q<sub>h</sub> − q<sub>c</sub>)/q<sub>h</sub> = 1 − T<sub>c</sub>ln(V<sub>C</sub>/V<sub>D</sub>) / (T<sub>h</sub>ln(V<sub>B</sub>/V<sub>A</sub>)) = 1 − T<sub>c</sub>/T<sub>h</sub></div>
<p><b>Strategy to maximise efficiency.</b> Since η = 1 − T<sub>c</sub>/T<sub>h</sub>:</p>
<ul><li>Raise T<sub>h</sub> as far as the materials allow (higher steam or combustion temperature).</li>
<li>Lower T<sub>c</sub> (cooling towers, condenser at low temperature, a cold sink). T<sub>c</sub> cannot go below the surroundings in practice.</li>
<li>Keep every step reversible: no friction, no finite temperature differences in heat transfer, no leaks, so that the real engine approaches the Carnot limit.</li></ul>
<div class="eq">Example: T<sub>h</sub> = 600 K, T<sub>c</sub> = 300 K gives η = 0.50. Raising T<sub>h</sub> to 900 K gives 0.667; lowering T<sub>c</sub> to 200 K at T<sub>h</sub> = 600 K gives 0.667.</div>
<div class="note trap"><p>Efficiency never reaches 1, since that needs T<sub>c</sub> = 0 K (or T<sub>h</sub> infinite). Use Kelvin throughout.</p></div>
<div class="note exam"><p>The four labelled steps on the PV diagram and the efficiency derivation take most marks. The last part is answered with the two points: higher T<sub>h</sub> and lower T<sub>c</sub>, plus keeping the engine reversible.</p></div>`,
          topics: ['m1-carnot-cycle', 'm1-second-law-entropy'],
          notes: ['m1-carnot-cycle.1', 'm1-carnot-cycle.2', 'm1-carnot-cycle.3']
        },
        {
          n: '3',
          marks: '5+5',
          co: '1',
          bl: '3',
          prompt: `<p><b>(a)</b> 1 mole of an ideal gas expand reversibly and isothermally from a pressure of 10 atm to 5 atm at 300 K. Calculate the work done.</p>
<p><b>(b)</b> Calculate the change in entropy accompanying the heating of 5 mole of ideal gas from a temperature of 350 K to a temperature of 800 K at constant pressure. Assume C<sub>v</sub> = 3/2 R</p>`,
          answer: `<p><b>(a)</b> R = 8.314 J/mol/K, w on the system.</p>
<div class="eq">w = −nRT ln(P<sub>1</sub>/P<sub>2</sub>) = −1 × 8.314 × 300 × ln(10/5) = −2494.2 × 0.6931 = <b>−1729 J</b> (about −1.73 kJ)</div>
<p>The gas does 1729 J of work on the surroundings (q = +1729 J, ΔU = 0).</p>
<p><b>(b)</b> At constant pressure the relevant heat capacity is C<sub>p</sub> = C<sub>v</sub> + R = 3R/2 + R = 5R/2.</p>
<div class="eq">ΔS = nC<sub>p</sub> ln(T<sub>2</sub>/T<sub>1</sub>) = 5 × 2.5 × 8.314 × ln(800/350) = 103.925 × 0.8267 = <b>85.9 J/K</b></div>
<div class="note trap"><p>The question gives C<sub>v</sub> but the process is at constant P, so convert to C<sub>p</sub>. Using C<sub>v</sub> directly gives 51.5 J/K, which is wrong. The ratio of pressures, not volumes, appears in (a); the question gives pressures.</p></div>
<div class="note exam"><p>Part (a): w = −1729 J with the formula shown. Part (b): convert to C<sub>p</sub> = 5R/2 and give 85.9 J/K. The conversion step is the mark that is usually lost.</p></div>`,
          topics: ['m1-expansion-work', 'm1-thermo-numericals', 'm1-enthalpy-heat-capacity'],
          notes: ['m1-thermo-numericals.0', 'm1-thermo-numericals.2']
        },
        {
          n: '4',
          marks: '5+5',
          co: '1',
          bl: '2',
          prompt: `<p><b>(a)</b> Write the factors affecting the rate of a chemical reaction. How temperature effect on the rate constant of a chemical reaction? Explain using the mathematical model.</p>
<p><b>(b)</b> The half-life of an ester hydrolysis was found to be 30 min at a certain temperature. What is its rate constant?</p>`,
          answer: `<p><b>(a) Factors:</b> nature of reactants (bond strength, state); concentration of reactants (or pressure for gases); temperature; catalyst; surface area of solid reactants; light for photochemical reactions; solvent and ionic strength.</p>
<p><b>Temperature and k.</b> The Arrhenius equation is the mathematical model:</p>
<div class="eq">k = A e<sup>−E<sub>a</sub>/RT</sup>, &nbsp; ln k = ln A − E<sub>a</sub>/(RT)</div>
<p>As T rises, e<sup>−E<sub>a</sub>/RT</sup> (the fraction of collisions with energy at least E<sub>a</sub>) rises sharply, so k increases exponentially. A plot of ln k against 1/T is a straight line of slope −E<sub>a</sub>/R. Between two temperatures:</p>
<div class="eq">ln(k<sub>2</sub>/k<sub>1</sub>) = (E<sub>a</sub>/R)(1/T<sub>1</sub> − 1/T<sub>2</sub>)</div>
<p>A larger E<sub>a</sub> means a stronger temperature dependence. For E<sub>a</sub> = 50 kJ/mol, 300 → 310 K gives k<sub>2</sub>/k<sub>1</sub> = 1.9.</p>
<p><b>(b)</b> Ester hydrolysis (in dilute acid, with water in large excess) is pseudo-first order, so t<sub>1/2</sub> = 0.693/k.</p>
<div class="eq">k = 0.6931/30 min = <b>0.0231 min<sup>−1</sup></b> (= 3.85 × 10<sup>−4</sup> s<sup>−1</sup>)</div>
<div class="note trap"><p>This formula holds only for first order, where t<sub>1/2</sub> does not depend on concentration. The question does not state the order, so say you are assuming first (pseudo-first) order for an ester hydrolysis.</p></div>
<div class="note exam"><p>Part (a): list the factors, give the Arrhenius form and the two-temperature version. Part (b): k = 0.0231 min<sup>−1</sup> with the assumption of first order stated.</p></div>`,
          topics: ['m1-collision-arrhenius', 'm1-integrated-rate', 'm1-rate-law'],
          notes: ['m1-rate-law.0', 'm1-collision-arrhenius.4', 'm1-kinetics-numericals.0']
        },
        {
          n: '5',
          marks: 10,
          co: '1',
          bl: '1',
          prompt: `<p>What is the role of the catalysts in the chemical reaction explain using a energy diagram? Give two examples each for homogeneous and heterogenous catalysts using chemical equations.</p>`,
          answer: `<p>A catalyst increases the rate by providing an alternative mechanism with a <b>lower activation energy</b>, and is regenerated at the end. It does not change ΔH, ΔG or the equilibrium position, and it speeds both forward and reverse reactions.</p>
<figure data-fig="m1-catalyst-profile"></figure>
<p><b>Diagram to draw:</b> energy against reaction coordinate; reactants and products at fixed levels; a high peak labelled E<sub>a</sub> (uncatalysed) and a lower peak labelled E<sub>a</sub>' (catalysed), possibly with a dip for an intermediate. The same ΔH marked for both. Because k = A e<sup>−E<sub>a</sub>/RT</sup>, lowering E<sub>a</sub> raises k.</p>
<p><b>Homogeneous</b> (same phase as reactants):</p>
<ul><li>2SO<sub>2</sub>(g) + O<sub>2</sub>(g) →(NO(g)) 2SO<sub>3</sub>(g)</li>
<li>CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub>(aq) + H<sub>2</sub>O(l) →(H<sup>+</sup>(aq)) CH<sub>3</sub>COOH(aq) + C<sub>2</sub>H<sub>5</sub>OH(aq)</li></ul>
<p><b>Heterogeneous</b> (different phase, usually solid catalyst):</p>
<ul><li>N<sub>2</sub>(g) + 3H<sub>2</sub>(g) →(Fe(s)) 2NH<sub>3</sub>(g) (Haber process)</li>
<li>2SO<sub>2</sub>(g) + O<sub>2</sub>(g) →(V<sub>2</sub>O<sub>5</sub>(s)) 2SO<sub>3</sub>(g) (contact process); or C<sub>2</sub>H<sub>4</sub>(g) + H<sub>2</sub>(g) →(Ni(s)) C<sub>2</sub>H<sub>6</sub>(g)</li></ul>
<div class="note trap"><p>Do not write that a catalyst makes a non-spontaneous reaction go. If ΔG &gt; 0 a catalyst cannot help. It only speeds a thermodynamically feasible reaction.</p></div>
<div class="note exam"><p>Energy diagram with E<sub>a</sub> and E<sub>a</sub>' and equal ΔH, a sentence on lowering E<sub>a</sub>, then four balanced equations with the catalyst written above the arrow, two for each type.</p></div>`,
          topics: ['m1-catalysis'],
          notes: ['m1-catalysis.1', 'm1-catalysis.2']
        }
      ]
    },
    {
      id: 'cat1-d2td2-2025',
      kind: 'actual',
      title: 'CAT-1 · Slot D2+TD2 · 20-08-2025',
      short: 'D2+TD2 paper',
      sub: 'Actual paper · Fall 2025–26',
      meta: [['Slot', 'D2+TD2'], ['Date', '20-08-2025'], ['Duration', '90 minutes'], ['Max marks', '50'], [
        'Programme',
        'B.Tech. Computer Science and Engineering'
      ]],
      instructions: `<b>General instructions:</b> Answer All Questions. M – Max mark; CO – Course Outcome; BL – Bloom's Taxonomy Level (1 – Remember, 2 – Understand, 3 – Apply, 4 – Analyse, 5 – Evaluate, 6 – Create).<br><b>Course Outcome:</b> CO1: Understand the fundamental concepts in physical, analytical, and materials chemistry.`,
      questions: [
        {
          n: '1',
          marks: 10,
          co: '1',
          bl: '2',
          prompt: `<p>Explain the concept of Gibbs free energy and its significance in determining the spontaneity of a chemical reaction. How ΔH and ΔS influence the feasibility of a reaction? Discuss this in the context of exothermic, endothermic, and equilibrium conditions.</p>`,
          answer: `<p><b>Gibbs free energy</b> is G = H − TS, the energy available to do useful (non-expansion) work. At constant T and P the change is</p>
<div class="eq">ΔG = ΔH − TΔS</div>
<p>Derivation: ΔS<sub>total</sub> = ΔS + ΔS<sub>surr</sub> = ΔS − ΔH/T, and ΔG = −TΔS<sub>total</sub>. So ΔG &lt; 0 means ΔS<sub>total</sub> &gt; 0 (second law).</p>
<ul><li>ΔG &lt; 0: spontaneous (feasible). ΔG &gt; 0: non-spontaneous (the reverse is spontaneous). ΔG = 0: equilibrium.</li></ul>
<figure data-fig="m1-gibbs-four-cases"></figure>
<p><b>Role of ΔH and ΔS</b></p>
<ul><li><b>Exothermic, ΔS &gt; 0</b> (ΔH −, ΔS +): ΔG always negative, spontaneous at all T (e.g. combustion).</li>
<li><b>Exothermic, ΔS &lt; 0</b>: spontaneous only at low T, below T = ΔH/ΔS (e.g. freezing of water).</li>
<li><b>Endothermic, ΔS &gt; 0</b>: spontaneous only at high T, above ΔH/ΔS (e.g. melting, decomposition of CaCO<sub>3</sub>).</li>
<li><b>Endothermic, ΔS &lt; 0</b>: never spontaneous.</li></ul>
<p><b>Equilibrium:</b> ΔG = 0 gives ΔH = TΔS, so T<sub>eq</sub> = ΔH/ΔS. Example: ice at 273 K, ΔH<sub>fus</sub> = 6010 J/mol, ΔS = 22 J/mol/K, ΔG = 6010 − 273 × 22 = 4 J/mol, about 0. Also ΔG° = −RT ln K links ΔG to the equilibrium constant.</p>
<div class="note trap"><p>ΔG &lt; 0 predicts feasibility, not speed. A spontaneous reaction (diamond to graphite) can be extremely slow. Also ΔH in kJ and ΔS in J must be matched before computing TΔS.</p></div>
<div class="note exam"><p>State ΔG = ΔH − TΔS, the three conditions (ΔG &lt; 0, = 0, &gt; 0) and all four ΔH/ΔS sign cases with one example each, including T<sub>eq</sub> = ΔH/ΔS for equilibrium.</p></div>`,
          topics: ['m1-free-energy', 'm1-gibbs-helmholtz-third-law'],
          notes: ['m1-free-energy.1', 'm1-free-energy.2', 'm1-gibbs-helmholtz-third-law.1']
        },
        {
          n: '2',
          marks: 10,
          co: '1',
          bl: '3',
          prompt: `<p>Using the concept of the Carnot cycle, show that the efficiency of a reversible heat engine depends only on the temperatures of the heat source and sink. Justify why this efficiency can never reach 100%.</p>`,
          answer: `<figure data-fig="m1-carnot-pv"></figure>
<p><b>Cycle (draw P–V, clockwise A→B→C→D):</b> A→B isothermal expansion at T<sub>h</sub> (heat q<sub>h</sub> in); B→C adiabatic expansion to T<sub>c</sub>; C→D isothermal compression at T<sub>c</sub> (heat q<sub>c</sub> out); D→A adiabatic compression back to T<sub>h</sub>.</p>
<div class="eq">q<sub>h</sub> = nRT<sub>h</sub> ln(V<sub>B</sub>/V<sub>A</sub>), &nbsp; q<sub>c</sub> = nRT<sub>c</sub> ln(V<sub>C</sub>/V<sub>D</sub>)</div>
<p>Adiabats: T<sub>h</sub>V<sub>B</sub><sup>γ−1</sup> = T<sub>c</sub>V<sub>C</sub><sup>γ−1</sup> and T<sub>h</sub>V<sub>A</sub><sup>γ−1</sup> = T<sub>c</sub>V<sub>D</sub><sup>γ−1</sup>, so V<sub>B</sub>/V<sub>A</sub> = V<sub>C</sub>/V<sub>D</sub> and the logarithms cancel:</p>
<div class="eq">η = W/q<sub>h</sub> = (q<sub>h</sub> − q<sub>c</sub>)/q<sub>h</sub> = 1 − T<sub>c</sub>/T<sub>h</sub></div>
<p>V, n, the gas and γ have dropped out, so η depends only on T<sub>h</sub> and T<sub>c</sub>. Because a reversible engine between two temperatures has the same efficiency whatever the working substance (any more efficient engine would break the second law), this is the maximum possible efficiency.</p>
<p><b>Why not 100%.</b> η = 1 requires T<sub>c</sub> = 0 K, which the third law says is unattainable, or T<sub>h</sub> infinite. Equivalently, the second law (Kelvin–Planck) forbids an engine that turns all the heat taken from one reservoir into work: some heat q<sub>c</sub> must be rejected to a colder sink to keep the entropy of the universe from falling.</p>
<div class="eq">Example: T<sub>h</sub> = 500 K, T<sub>c</sub> = 300 K gives η = 1 − 300/500 = 0.40 (40%).</div>
<div class="note trap"><p>Temperatures must be in Kelvin. Using 27 °C and 227 °C directly would give 1 − 27/227 = 0.88, which is wrong.</p></div>
<div class="note exam"><p>Derive η = 1 − T<sub>c</sub>/T<sub>h</sub> from the cycle, point out that the volume ratios cancel, and give both reasons it cannot reach 1 (third law and the second law).</p></div>`,
          topics: ['m1-carnot-cycle', 'm1-second-law-entropy'],
          notes: ['m1-carnot-cycle.2', 'm1-carnot-cycle.3']
        },
        {
          n: '3',
          marks: '5+5',
          co: '1',
          bl: '3',
          prompt: `<p><b>(a)</b> For a reaction, ΔH = +25 kJ/mol and ΔS = +80 J/mol·K. Calculate ΔG at 298 K and at 500 K. Comment on the spontaneity of the reaction at both the temperatures. Use your result to explain how the signs of ΔH and ΔS influence the temperature-dependent spontaneity.</p>
<p><b>(b)</b> An ideal gas (1 mol) undergoes a reversible expansion, changing its state from 25 dm<sup>3</sup> at 250 K to 40 dm<sup>3</sup> at 350 K. Given that the molar heat capacity at constant volume C<sub>v</sub> = 1.5R, calculate the total change in entropy for the process. R = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>.</p>`,
          answer: `<p><b>(a)</b> Convert ΔS = 80 J/mol/K = 0.080 kJ/mol/K.</p>
<div class="eq">ΔG<sub>298</sub> = 25 − 298 × 0.080 = 25 − 23.84 = <b>+1.16 kJ/mol</b> (non-spontaneous)</div>
<div class="eq">ΔG<sub>500</sub> = 25 − 500 × 0.080 = 25 − 40.0 = <b>−15.0 kJ/mol</b> (spontaneous)</div>
<p>The switch happens at T = ΔH/ΔS = 25 000/80 = 312.5 K. Here ΔH &gt; 0 (unfavourable) and ΔS &gt; 0 (favourable): the TΔS term grows with T, so the reaction becomes spontaneous only above 312.5 K. In general: (−, +) always spontaneous; (+, −) never; (−, −) spontaneous at low T; (+, +) spontaneous at high T.</p>
<p><b>(b)</b> For an ideal gas the entropy change for a change in both T and V is</p>
<div class="eq">ΔS = C<sub>v</sub> ln(T<sub>2</sub>/T<sub>1</sub>) + R ln(V<sub>2</sub>/V<sub>1</sub>)</div>
<div class="eq">= 1.5 × 8.314 × ln(350/250) + 8.314 × ln(40/25) = 12.471 × 0.3365 + 8.314 × 0.4700 = 4.196 + 3.908 = <b>8.10 J/K</b></div>
<div class="note trap"><p>In (a), 25 kJ against 80 J: not converting units gives 25 − 298 × 80, nonsense. In (b) the process is reversible, so ΔS<sub>total</sub> is the system's ΔS plus ΔS<sub>surr</sub> = −ΔS, which sums to zero; the 8.10 J/K is for the gas. The question's "total change in entropy" means the sum of the T and V terms.</p></div>
<div class="note exam"><p>Part (a): ΔG<sub>298</sub> = +1.16 kJ/mol, ΔG<sub>500</sub> = −15.0 kJ/mol, with the units converted, and the comment on the crossover at 312.5 K. Part (b): both terms and 8.10 J/K.</p></div>`,
          topics: ['m1-free-energy', 'm1-thermo-numericals', 'm1-second-law-entropy'],
          notes: ['m1-thermo-numericals.3', 'm1-thermo-numericals.2']
        },
        {
          n: '4',
          marks: '5+5',
          co: '1',
          bl: '2',
          prompt: `<p><b>(a)</b> Explain the characteristics of a second-order reaction and how it differs from first-order and zero-order reactions using a concentration versus time plot. Illustrate your answer with the graphical methods used to represent each order of reaction.</p>
<p><b>(b)</b> The decomposition of a compound A→Products follows first-order kinetics. The initial concentration of A was 0.4 mol/L, and after 60 minutes, the concentration of A was found to be 0.1 mol/L. Calculate the rate constant and half-life of the reaction.</p>`,
          answer: `<p><b>(a)</b></p>
<figure data-fig="m1-order-conc-time"></figure>
<table class="tbl"><thead><tr><th></th><th>Zero order</th><th>First order</th><th>Second order</th></tr></thead><tbody>
<tr><td>Rate law</td><td>rate = k</td><td>rate = k[A]</td><td>rate = k[A]<sup>2</sup></td></tr>
<tr><td>Integrated</td><td>[A] = [A]<sub>0</sub> − kt</td><td>ln[A] = ln[A]<sub>0</sub> − kt</td><td>1/[A] = 1/[A]<sub>0</sub> + kt</td></tr>
<tr><td>[A] vs t</td><td>straight line, slope −k</td><td>exponential decay</td><td>steeper initial fall, long tail</td></tr>
<tr><td>Linear plot</td><td>[A] vs t</td><td>ln[A] vs t, slope −k</td><td>1/[A] vs t, slope +k</td></tr>
<tr><td>t<sub>1/2</sub></td><td>[A]<sub>0</sub>/2k</td><td>0.693/k (constant)</td><td>1/(k[A]<sub>0</sub>)</td></tr>
<tr><td>Unit of k</td><td>mol L<sup>−1</sup> s<sup>−1</sup></td><td>s<sup>−1</sup></td><td>L mol<sup>−1</sup> s<sup>−1</sup></td></tr></tbody></table>
<p><b>Diagram to draw:</b> [A] against t with three curves from the same [A]<sub>0</sub>: a straight line (zero), a curve with constant successive half-lives (first), and a curve whose half-lives lengthen as [A] falls (second). Then three small plots: [A] vs t, ln[A] vs t, 1/[A] vs t. Second-order characteristic: the rate depends on the square of concentration (or two reactants each first order), and the half-life grows as the reaction proceeds.</p>
<p><b>(b)</b> First order: k = (1/t) ln([A]<sub>0</sub>/[A]).</p>
<div class="eq">k = (1/60) ln(0.4/0.1) = 1.3863/60 = <b>0.0231 min<sup>−1</sup></b></div>
<div class="eq">t<sub>1/2</sub> = 0.6931/0.02310 = <b>30 min</b></div>
<div class="note trap"><p>The concentration fell by a factor of 4, which is exactly two half-lives, so t<sub>1/2</sub> = 60/2 = 30 min is a quick check. Time is in minutes, so k is in min<sup>−1</sup>; k = 3.85 × 10<sup>−4</sup> s<sup>−1</sup>.</p></div>
<div class="note exam"><p>Part (a): the comparison table and the three plots. Part (b): k = 0.0231 min<sup>−1</sup> and t<sub>1/2</sub> = 30 min, with the two-half-lives check.</p></div>`,
          topics: ['m1-integrated-rate', 'm1-rate-law'],
          notes: ['m1-integrated-rate.1', 'm1-integrated-rate.2', 'm1-kinetics-numericals.2']
        },
        {
          n: '5',
          marks: 10,
          co: '1',
          bl: '1',
          prompt: `<p>State the Arrhenius equation and describe how temperature influences the rate of a chemical reaction. Define activation energy and explain its importance with the help of an energy profile diagram for the isomerization of methyl isonitrile to acetonitrile.</p>`,
          answer: `<p><b>Arrhenius equation</b></p>
<div class="eq">k = A e<sup>−E<sub>a</sub>/RT</sup>, &nbsp; ln k = ln A − E<sub>a</sub>/(RT)</div>
<p>k is the rate constant, A the frequency factor (collisions per second with suitable orientation), E<sub>a</sub> the activation energy, R = 8.314 J/mol/K and T the absolute temperature. Raising T raises the fraction of molecules with energy at least E<sub>a</sub> (the tail of the Maxwell–Boltzmann curve) exponentially, so k and the rate increase. A plot of ln k against 1/T has slope −E<sub>a</sub>/R and intercept ln A. For E<sub>a</sub> = 50 kJ/mol, k roughly doubles (factor 1.9) from 300 K to 310 K.</p>
<p><b>Activation energy</b> is the minimum energy colliding molecules must have to react, the height of the barrier between reactants and the activated complex (transition state).</p>
<figure data-fig="m1-energy-profile"></figure>
<p><b>Diagram to draw (CH<sub>3</sub>NC → CH<sub>3</sub>CN):</b> potential energy against reaction coordinate. Methyl isonitrile at a higher level on the left, a peak (the transition state, where the N–C unit is half-rotated and the C–N–C angle is bent) at the top, acetonitrile at a lower level on the right. Mark E<sub>a</sub> from the reactant level to the peak and ΔH (about −42 kJ/mol, exothermic) from reactant to product.</p>
<p><b>Importance:</b> E<sub>a</sub> sets how fast the reaction goes: a high barrier means slow reaction even though ΔH is negative (acetonitrile is more stable, yet CH<sub>3</sub>NC is stable at room temperature and rearranges noticeably only on heating, around 200 °C). A larger E<sub>a</sub> also makes k more sensitive to temperature, and a catalyst works by lowering it.</p>
<div class="note trap"><p>E<sub>a</sub> is not ΔH. E<sub>a</sub> is the forward barrier; ΔH is the difference between product and reactant levels. The ΔH value quoted is the commonly given figure from textbooks (about −42 kJ/mol), so state it as approximate if you quote it.</p></div>
<div class="note exam"><p>State the Arrhenius equation with terms, the effect of T, define E<sub>a</sub> and draw the methyl isonitrile profile with E<sub>a</sub> and ΔH marked and the transition state labelled.</p></div>`,
          topics: ['m1-collision-arrhenius', 'm1-catalysis'],
          notes: ['m1-collision-arrhenius.4', 'm1-collision-arrhenius.2']
        }
      ]
    },
    {
      id: 'cat1-d1td1-2025',
      kind: 'actual',
      title: 'CAT-1 · Slot D1+TD1 · 20-08-2025',
      short: 'D1+TD1 paper',
      sub: 'Actual paper · Fall 2025–26',
      meta: [['Slot', 'D1+TD1'], ['Date', '20-08-2025'], ['Duration', '90 minutes'], ['Max marks', '50'], [
        'Programme',
        'B.Tech. Computer Science and Engineering'
      ]],
      instructions: `<b>General instructions:</b> Answer All Questions. M – Max mark; CO – Course Outcome; BL – Blooms Taxonomy Level (1 – Remember, 2 – Understand, 3 – Apply, 4 – Analyse, 5 – Evaluate, 6 – Create).<br><b>Course Outcome:</b> CO1: Understand the fundamental concepts in physical, analytical and materials chemistry.`,
      questions: [
        {
          n: '1',
          marks: 10,
          co: '1',
          bl: '2',
          prompt: `<p>Explain the isothermal and adiabatic thermodynamic processes. For each process, determine the work done, heat exchanged, and change in internal energy, and support your explanation with appropriate diagram.</p>`,
          answer: `<p>Sign convention used here: <b>ΔU = q + w</b>, with q and w positive when energy enters the system. The gas is an ideal gas, so U depends only on T.</p>
<p><b>Isothermal process (T constant)</b></p>
<ul><li>The system stays in thermal contact with a large reservoir, so T does not change and the P–V curve is the hyperbola P = nRT/V.</li>
<li>U of an ideal gas depends only on T, so <b>ΔU = 0</b>. The first law then gives q = −w.</li>
<li>In an expansion the gas does work, so w is negative and an equal amount of heat flows in from the surroundings. In a compression the work is done on the gas and the same amount of heat flows out.</li></ul>
<div class="eq">Reversible: w = −nRT ln (V<sub>2</sub>/V<sub>1</sub>) = −nRT ln (P<sub>1</sub>/P<sub>2</sub>)</div>
<div class="eq">q = −w = +nRT ln (V<sub>2</sub>/V<sub>1</sub>), ΔU = 0</div>
<p>The work is the <b>area under the isotherm</b>. The reversible path gives the maximum work; an irreversible expansion to the same final volume gives a smaller rectangular area.</p>
<figure data-fig="m1-pv-isothermal"></figure>
<p><b>Adiabatic process (q = 0)</b></p>
<ul><li>The system is thermally insulated, so no heat crosses the boundary and <b>q = 0</b>.</li>
<li>The first law reduces to <b>ΔU = w</b>. The gas pays for its work out of its internal energy, so on expansion T falls, and on compression T rises.</li>
<li>The adiabatic curve is steeper than the isotherm on the P–V diagram, because P falls both from the larger volume and from the falling T.</li></ul>
<div class="eq">w = ΔU = C<sub>v</sub> ΔT (per mole), ΔH = C<sub>p</sub> ΔT, q = 0</div>
<div class="eq">T<sub>i</sub> / T<sub>f</sub> = (V<sub>f</sub> / V<sub>i</sub>)<sup>γ−1</sup> (reversible)</div>
<figure data-fig="m1-pv-adiabatic"></figure>
<table class="tbl"><thead><tr><th>Quantity</th><th>Isothermal (ideal gas)</th><th>Adiabatic</th></tr></thead><tbody>
<tr><td>q</td><td>nRT ln(V<sub>2</sub>/V<sub>1</sub>)</td><td>0</td></tr>
<tr><td>w</td><td>−nRT ln(V<sub>2</sub>/V<sub>1</sub>)</td><td>C<sub>v</sub>ΔT</td></tr>
<tr><td>ΔU</td><td>0</td><td>C<sub>v</sub>ΔT</td></tr></tbody></table>
<div class="worked"><div class="given"><p>1 mol of an ideal monatomic gas (C<sub>v</sub> = 3R/2) at 300 K expands reversibly from 10 L to 20 L, first isothermally and then adiabatically. R = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>.</p></div>
<div class="solve"><p><b>Isothermal:</b> w = −RT ln 2 = −8.314 × 300 × 0.6931 = −1729 J; q = +1729 J; ΔU = 0.</p>
<p><b>Adiabatic:</b> T<sub>f</sub> = 300 × (10/20)<sup>2/3</sup> = 300 × 0.630 = 189 K. ΔU = w = (3/2)(8.314)(189 − 300) = −1384 J; q = 0.</p></div>
<div class="result">The adiabatic expansion does less work (1384 J against 1729 J) and the gas cools by 111 K.</div></div>
<div class="note trap"><p>Do not write ΔU = 0 for the adiabatic case: that is the isothermal result. Also keep the sign convention consistent: work done by the gas is negative when ΔU = q + w.</p></div>
<div class="note exam"><p>Ten marks: about 3 for each process (definition, q, w, ΔU), and 2 for the two labelled P–V diagrams. State the sign convention you use.</p></div>`,
          topics: ['m1-expansion-work', 'm1-zeroth-first-law'],
          notes: ['m1-expansion-work.0', 'm1-expansion-work.1']
        },
        {
          n: '2',
          marks: 10,
          co: '1',
          bl: '3',
          prompt: `<p>Describe the Carnot cycle, listing its four reversible processes. Include a P–V diagram and explain its significance in assessing the efficiency of heat engine.</p>`,
          answer: `<p>A <b>Carnot cycle</b> is a reversible cycle of 1 mole of an ideal gas between a hot reservoir at T<sub>h</sub> and a cold reservoir at T<sub>c</sub>. It shows the greatest possible conversion of heat into work.</p>
<p><b>The four reversible strokes (A → B → C → D → A)</b></p>
<ol><li><b>A → B, isothermal expansion at T<sub>h</sub>.</b> The gas takes in heat q<sub>h</sub> = RT<sub>h</sub> ln(V<sub>B</sub>/V<sub>A</sub>) and does work; ΔU = 0.</li>
<li><b>B → C, adiabatic expansion.</b> No heat flows (q = 0). The gas does work at the cost of internal energy, so T falls from T<sub>h</sub> to T<sub>c</sub>.</li>
<li><b>C → D, isothermal compression at T<sub>c</sub>.</b> Work is done on the gas and heat q<sub>c</sub> is released to the cold sink; ΔU = 0.</li>
<li><b>D → A, adiabatic compression.</b> q = 0, work is done on the gas, and T rises from T<sub>c</sub> back to T<sub>h</sub>.</li></ol>
<figure data-fig="m1-carnot-pv"></figure>
<p><b>P–V diagram to draw:</b> two isotherms (the upper one at T<sub>h</sub>, A to B; the lower at T<sub>c</sub>, C to D) joined by two steeper adiabats (B to C and D to A). The closed loop is traversed clockwise. The <b>area enclosed</b> equals the net work done by the engine in one cycle.</p>
<p><b>Significance for efficiency</b></p>
<p>Around the cycle, ΔS = q<sub>h</sub>/T<sub>h</sub> + q<sub>c</sub>/T<sub>c</sub> = 0, so q<sub>h</sub>/q<sub>c</sub> = −T<sub>h</sub>/T<sub>c</sub>.</p>
<div class="eq">η = W / q<sub>h</sub> = 1 − q<sub>c</sub>/q<sub>h</sub> = 1 − T<sub>c</sub> / T<sub>h</sub></div>
<ul><li>η depends only on the two reservoir temperatures (in kelvin), not on the working substance.</li>
<li>No real engine working between the same T<sub>h</sub> and T<sub>c</sub> can beat this value, so the Carnot efficiency is the benchmark for judging real engines.</li>
<li>η is always below 1, because T<sub>c</sub> = 0 K cannot be reached. This is the Kelvin statement of the second law.</li>
<li>Raising T<sub>h</sub> or lowering T<sub>c</sub> improves the efficiency.</li></ul>
<div class="worked"><div class="given"><p>An engine runs between 600 K and 300 K.</p></div>
<div class="solve"><p>η = 1 − 300/600 = 0.50.</p></div>
<div class="result">At most 50% of the heat absorbed can become work.</div></div>
<div class="note trap"><p>Using °C in 1 − T<sub>c</sub>/T<sub>h</sub> is the commonest slip. Convert to kelvin first. Also label the stroke curves correctly: the steeper curves are the adiabats.</p></div>
<div class="note exam"><p>Ten marks: the four strokes (4), a labelled P–V loop with the enclosed area marked as net work (3), and η = 1 − T<sub>c</sub>/T<sub>h</sub> with its significance (3).</p></div>`,
          topics: ['m1-carnot-cycle', 'm1-second-law-entropy'],
          notes: ['m1-carnot-cycle.1', 'm1-carnot-cycle.2']
        },
        {
          n: '3',
          marks: '5+5',
          co: '1',
          bl: '3',
          prompt: `<p><b>(a)</b> Given that the enthalpy change (ΔH) is +40 kJ/mol and the entropy change (ΔS) is +100 J/mol·K at 298 K, determine if the reaction is thermodynamically spontaneous or not.</p>
<p><b>(b)</b> A Carnot engine operates between a high-temperature reservoir at 500 K and a low-temperature reservoir at 300 K. Calculate the maximum efficiency and the work done if the engine absorbs 600 J of heat from the hot reservoir.</p>`,
          answer: `<p><b>(a)</b> At constant T and P a reaction is spontaneous when ΔG &lt; 0.</p>
<div class="eq">ΔG = ΔH − TΔS</div>
<p>Convert both terms to the same unit. ΔS = 100 J/mol·K = 0.100 kJ/mol·K.</p>
<div class="eq">ΔG = 40 − (298 × 0.100) = 40 − 29.8 = +10.2 kJ/mol</div>
<p>ΔG is positive, so the reaction is <b>not spontaneous</b> at 298 K. It is endothermic (ΔH positive, unfavourable) and the entropy gain (ΔS positive, favourable) is not large enough at this temperature. It becomes spontaneous above T = ΔH/ΔS = 40000/100 = 400 K.</p>
<div class="note trap"><p>The units of ΔH (kJ) and ΔS (J) differ. Using 40 − 298 × 100 without converting gives nonsense. Convert first.</p></div>
<p><b>(b)</b> T<sub>h</sub> = 500 K, T<sub>c</sub> = 300 K, q<sub>h</sub> = 600 J.</p>
<div class="eq">η = 1 − T<sub>c</sub>/T<sub>h</sub> = 1 − 300/500 = 0.40 (40%)</div>
<div class="eq">W = η × q<sub>h</sub> = 0.40 × 600 = <b>240 J</b></div>
<p>The heat rejected to the cold reservoir is 600 − 240 = 360 J.</p>
<div class="note exam"><p>Five marks each. In (a) show the unit conversion, the sign of ΔG and the verdict. In (b) give η as a fraction or percentage and W with its unit.</p></div>`,
          topics: ['m1-free-energy', 'm1-carnot-cycle', 'm1-thermo-numericals'],
          notes: ['m1-thermo-numericals.3', 'm1-thermo-numericals.4']
        },
        {
          n: '4',
          marks: '5+5',
          co: '1',
          bl: '2',
          prompt: `<p><b>(a)</b> Why can the order of a reaction be fractional or zero, while molecularity is always a whole number? Explain with suitable examples.</p>
<p><b>(b)</b> A first-order reaction takes 12 hours for its 70% completion. Calculate the time required for its 90% completion.</p>`,
          answer: `<p><b>(a)</b> The two quantities describe different things.</p>
<ul><li><b>Order</b> is an <b>experimental</b> quantity: the sum of the powers of concentrations in the measured rate law. It describes the overall reaction, which often goes through several steps, and it is found from experiment, not from the balanced equation. The powers can therefore be 0, 1, 2 or fractions.</li>
<li><b>Molecularity</b> is a <b>theoretical</b> quantity: the number of molecules that collide in a single <b>elementary step</b>. You cannot count a fraction of a molecule, and a zero-molecule collision does not exist. Molecularity is therefore 1, 2 or (rarely) 3.</li>
<li>Molecularity is meaningful only for an elementary step. For a complex reaction the order reflects the slow step and any pre-equilibria, which is how fractions arise.</li></ul>
<p><b>Examples</b></p>
<ul><li><b>Fractional order:</b> H<sub>2</sub> + Br<sub>2</sub> → 2HBr has rate = k[H<sub>2</sub>][Br<sub>2</sub>]<sup>1/2</sup>, order 3/2, from a chain mechanism. The balanced equation suggests 2, but the mechanism does not.</li>
<li><b>Zero order:</b> decomposition of NH<sub>3</sub> on a hot platinum surface: rate = k. The surface is saturated, so the rate does not depend on [NH<sub>3</sub>].</li>
<li><b>Order different from molecularity:</b> hydrolysis of ethyl acetate in excess water is bimolecular but follows first-order kinetics (pseudo-first order), since [H<sub>2</sub>O] is effectively constant.</li></ul>
<p><b>(b)</b> For a first-order reaction k = (1/t) ln([A]<sub>0</sub>/[A]).</p>
<p>70% complete means 30% is left, [A]<sub>0</sub>/[A] = 1/0.30.</p>
<div class="eq">k = (1/12) ln (1/0.30) = 1.204 / 12 = 0.1003 h<sup>−1</sup></div>
<p>90% complete means 10% is left, [A]<sub>0</sub>/[A] = 10.</p>
<div class="eq">t = (1/k) ln 10 = 2.303 / 0.1003 = <b>22.95 h ≈ 23 h</b></div>
<div class="note trap"><p>Use the fraction remaining, not the fraction reacted, inside the logarithm. Putting 0.70 in place of 0.30 gives a wrong k. Check: 23 h is greater than 12 h, as it must be for a higher conversion.</p></div>
<div class="note exam"><p>In (a) the key words are experimental against theoretical, overall against elementary step, with one fractional and one zero-order example. In (b) show k, then t with its unit.</p></div>`,
          topics: ['m1-rate-law', 'm1-integrated-rate'],
          notes: ['m1-rate-law.4', 'm1-kinetics-numericals.1']
        },
        {
          n: '5',
          marks: 10,
          co: '1',
          bl: '1',
          prompt: `<p>Using the Arrhenius equation, explain the temperature dependence of reaction rates and the determination of activation energy from an Arrhenius plot, with reference to the isomerization of methyl isonitrile (CH<sub>3</sub>NC) to acetonitrile (CH<sub>3</sub>CN).</p>`,
          answer: `<p><b>Temperature dependence.</b> For CH<sub>3</sub>NC → CH<sub>3</sub>CN, which is first order, the rate constant k rises sharply with temperature. As a rough rule the rate doubles for each 10 °C rise.</p>
<p>Reason: molecules must collide with energy at least E<sub>a</sub> (and the right orientation). A higher temperature means faster molecules, more frequent collisions, and above all a much larger fraction of molecules with energy above E<sub>a</sub>. For methyl isonitrile the CH<sub>3</sub> group has to swing round from the N end to the C end through a high-energy transition state, so only energetic molecules can isomerise.</p>
<div class="eq">k = A e<sup>−E<sub>a</sub>/RT</sup></div>
<div class="eq">ln k = ln A − E<sub>a</sub> / (RT)</div>
<p>Here A is the frequency (pre-exponential) factor, E<sub>a</sub> the activation energy, R = 8.314 J mol<sup>−1</sup> K<sup>−1</sup> and T the temperature in kelvin. The equation is of the form y = c + mx.</p>
<p><b>Arrhenius plot and E<sub>a</sub></b></p>
<ol><li>Measure k for CH<sub>3</sub>NC at several temperatures (for first-order, from the slope of ln P against t at each T).</li>
<li>Plot <b>ln k (y-axis) against 1/T (x-axis, in K<sup>−1</sup>)</b>. A straight line with a negative slope results.</li>
<li><b>Slope = −E<sub>a</sub>/R</b>, so E<sub>a</sub> = −slope × R. The intercept at 1/T = 0 is ln A.</li>
<li>Two-point form: ln(k<sub>2</sub>/k<sub>1</sub>) = (E<sub>a</sub>/R)(1/T<sub>1</sub> − 1/T<sub>2</sub>).</li></ol>
<figure data-fig="m1-arrhenius-plot"></figure>
<p>A large E<sub>a</sub> gives a steep line, meaning k is very sensitive to temperature; E<sub>a</sub> = 0 gives a horizontal line.</p>
<div class="worked"><div class="given"><p>Take the rule of thumb that the rate doubles from 300 K to 310 K. Estimate E<sub>a</sub>.</p></div>
<div class="solve"><p>ln 2 = (E<sub>a</sub>/R)(1/300 − 1/310) = (E<sub>a</sub>/R)(1.0753 × 10<sup>−4</sup>).</p>
<p>E<sub>a</sub> = 8.314 × 0.6931 / 1.0753 × 10<sup>−4</sup> = 5.763 / 1.0753 × 10<sup>−4</sup> ≈ 5.36 × 10<sup>4</sup> J/mol.</p></div>
<div class="result">E<sub>a</sub> ≈ 54 kJ/mol. This is only an illustration of the rule; the measured value for CH<sub>3</sub>NC isomerisation is considerably higher (about 160 kJ/mol), so its rate is more sensitive to temperature than a doubling per 10 °C.</div></div>
<div class="note trap"><p>Two common slips: plotting ln k against T instead of 1/T, and forgetting the negative sign, so that E<sub>a</sub> comes out negative. Use kelvin throughout.</p></div>
<div class="note exam"><p>Ten marks: the collision reason for the rise with T (3), the equation and its log form (3), the plot with slope = −E<sub>a</sub>/R (3), and the methyl isonitrile reference (1).</p></div>`,
          topics: ['m1-collision-arrhenius', 'm1-integrated-rate'],
          notes: ['m1-collision-arrhenius.4', 'm1-kinetics-numericals.4']
        }
      ]
    },
    {
      id: 'fat-g1tg1-2025',
      kind: 'actual',
      exam: 'fat',
      title: 'FAT · Slot G1+TG1 · Nov 2025',
      short: 'G1+TG1 FAT',
      sub: 'Actual paper · Fall 2025–26',
      meta: [['Slot', 'G1+TG1'], ['Date', 'November 2025'], ['Duration', 'Three hours'], ['Max marks', '100'], ['Programme', 'B.Tech. (BACHY105 Applied Chemistry)']],
      instructions: `<b>General instructions:</b> Answer ALL Questions (10 × 10 = 100 marks). Questions 9 and 10 each carry an [OR] choice. BL – Blooms Taxonomy Level (1 – Remember, 2 – Understand, 3 – Apply, 4 – Analyse, 5 – Evaluate, 6 – Create).<br><b>Course Outcomes:</b> CO1: Apply the concepts of thermodynamics and kinetics. CO2: Use chemical concepts for the advancement of materials in electrical, magnetic, and energy domains. CO3: Demonstrate UV Visible spectroscopic and X-ray diffraction techniques. CO4: Discuss molecular orbitals and its energies through computational chemistry.`,
      questions: [
        {
          n: '1',
          marks: 10,
          co: '1',
          bl: '3',
          prompt: `<p>Based on the four different stages of the reversible heat engine, substantiate that the maximum efficiency of any heat engine is limited by the temperatures of its hot and cold reservoirs.</p>`,
          answer: `<p>The reversible heat engine is the <b>Carnot cycle</b>, with 1 mol of ideal gas as working substance.</p>
<figure data-fig="m1-carnot-pv"></figure>
<p><b>The four stages</b></p>
<ol><li><b>A → B, isothermal expansion at T<sub>h</sub>:</b> the gas takes q<sub>h</sub> from the hot reservoir. ΔU = 0, so q<sub>h</sub> = RT<sub>h</sub> ln(V<sub>B</sub>/V<sub>A</sub>).</li>
<li><b>B → C, adiabatic expansion:</b> q = 0, the gas does work at the cost of its internal energy and cools from T<sub>h</sub> to T<sub>c</sub>.</li>
<li><b>C → D, isothermal compression at T<sub>c</sub>:</b> the gas rejects heat to the cold reservoir. q<sub>c</sub> = RT<sub>c</sub> ln(V<sub>D</sub>/V<sub>C</sub>), which is negative.</li>
<li><b>D → A, adiabatic compression:</b> q = 0, work is done on the gas and it warms from T<sub>c</sub> back to T<sub>h</sub>.</li></ol>
<p><b>Linking heat to temperature.</b> The two adiabats give (T<sub>h</sub>/T<sub>c</sub>)<sup>1/(γ−1)</sup> = V<sub>C</sub>/V<sub>B</sub> = V<sub>D</sub>/V<sub>A</sub>, so V<sub>B</sub>/V<sub>A</sub> = V<sub>C</sub>/V<sub>D</sub>. Hence</p>
<div class="eq">q<sub>c</sub> = −RT<sub>c</sub> ln(V<sub>B</sub>/V<sub>A</sub>), so q<sub>h</sub>/T<sub>h</sub> + q<sub>c</sub>/T<sub>c</sub> = 0</div>
<div class="eq">W = q<sub>h</sub> + q<sub>c</sub> = R(T<sub>h</sub> − T<sub>c</sub>) ln(V<sub>B</sub>/V<sub>A</sub>)</div>
<div class="eq">η = W/q<sub>h</sub> = 1 + q<sub>c</sub>/q<sub>h</sub> = 1 − T<sub>c</sub>/T<sub>h</sub></div>
<p>So η depends only on T<sub>c</sub> and T<sub>h</sub>, not on the gas. It reaches 1 only if T<sub>c</sub> = 0 K, which cannot be reached (Kelvin statement). Any irreversible engine between the same two reservoirs is less efficient, so 1 − T<sub>c</sub>/T<sub>h</sub> is the maximum.</p>
<p><b>Example:</b> steam at 300 °C (573 K) rejecting heat at 20 °C (293 K): η = 1 − 293/573 = 0.489, i.e. 48.9%.</p>
<div class="note trap"><p>Use kelvin in the formula. Putting 300 and 20 in directly gives a meaningless value. The result does not depend on the working substance or on the volumes.</p></div>
<div class="note exam"><p>Ten marks: P–V diagram with the four labelled strokes, the heat expression for each isotherm, the V<sub>B</sub>/V<sub>A</sub> = V<sub>C</sub>/V<sub>D</sub> step, and the final η with the statement that it depends only on the two temperatures.</p></div>`,
          topics: ['m1-carnot-cycle', 'm1-second-law-entropy'],
          notes: ['m1-carnot-cycle.1', 'm1-carnot-cycle.2', 'm1-carnot-cycle.3']
        },
        {
          n: '2',
          marks: 10,
          co: '1',
          bl: '3',
          prompt: `<p>Utilizing a photosensitive organic dye, construct a renewable energy device. Discuss its advantages and disadvantages in practical applications.</p>`,
          answer: `<p>The device is the <b>dye-sensitized solar cell (DSSC, Grätzel cell)</b>.</p>
<figure data-fig="m2-dssc-schematic"></figure>
<p><b>Construction:</b> a photoanode of FTO glass coated with a porous nanocrystalline TiO<sub>2</sub> film carrying an adsorbed dye (a Ru-bipyridyl complex or a natural anthocyanin dye); an electrolyte holding the I<sup>−</sup>/I<sub>3</sub><sup>−</sup> redox couple; and a Pt-coated FTO counter electrode.</p>
<p><b>Working</b></p>
<ol><li>The dye absorbs a photon: D + hν → D*.</li>
<li>D* injects an electron into the TiO<sub>2</sub> conduction band, leaving D<sup>+</sup>.</li>
<li>The electron moves through TiO<sub>2</sub> to the FTO and then through the external load.</li>
<li>At the counter electrode: I<sub>3</sub><sup>−</sup> + 2e<sup>−</sup> → 3I<sup>−</sup>.</li>
<li>The iodide regenerates the dye: 2D<sup>+</sup> + 3I<sup>−</sup> → 2D + I<sub>3</sub><sup>−</sup>.</li></ol>
<p>There is no net chemical change: light is converted to electric current.</p>
<p><b>Advantages:</b> low-cost materials and simple printing; works in diffuse and low light; can be made transparent and coloured for windows and facades; natural dyes are non-toxic and biodegradable.</p>
<p><b>Disadvantages:</b> the liquid electrolyte can leak, evaporate or freeze; the dye degrades under UV and heat; efficiency (about 10–12% for the best Ru cells, much lower with natural dyes) is below silicon; sealing and long-term stability are difficult.</p>
<div class="note trap"><p>The electron is injected from the excited dye into TiO<sub>2</sub>. TiO<sub>2</sub> itself absorbs only UV, so it is not the visible-light absorber.</p></div>
<div class="note exam"><p>Name the device, draw the labelled cell with the electron path, give the five-step working, then two or three points each for advantages and disadvantages.</p></div>`,
          topics: ['m2-dssc', 'm2-pec-cells'],
          notes: ['m2-dssc.0', 'm2-dssc.1', 'm2-dssc.6']
        },
        {
          n: '3',
          marks: 10,
          co: '2',
          bl: '3',
          prompt: `<p>Discuss the unique characteristics and five applications of the compound YBa<sub>2</sub>Cu<sub>3</sub>O<sub>7</sub>.</p>`,
          answer: `<p>YBa<sub>2</sub>Cu<sub>3</sub>O<sub>7</sub> (YBCO, the "1-2-3" compound) is a layered, oxygen-deficient perovskite cuprate and a high-temperature superconductor.</p>
<p><b>Unique characteristics</b></p>
<ul><li>T<sub>c</sub> ≈ <b>93 K</b>, above the boiling point of liquid nitrogen (77 K), so cheap liquid N<sub>2</sub> can cool it, instead of liquid helium.</li>
<li>Resistance falls to zero sharply at T<sub>c</sub> and the material expels magnetic field (Meissner effect). It is a Type II superconductor with a high upper critical field and high critical current density.</li>
<li>Superconductivity lives in the CuO<sub>2</sub> planes; the Cu–O chains act as a charge reservoir. It depends on oxygen content: the O<sub>7</sub> phase is orthorhombic and superconducting, the O<sub>6</sub> phase is tetragonal and insulating.</li>
<li>It is a brittle ceramic, hard to draw into wire, so it is used as thin film or coated tape.</li></ul>
<p><b>Five applications:</b> (1) MRI and NMR magnets; (2) maglev trains and frictionless magnetic bearings, using levitation; (3) lossless power transmission cables; (4) SQUID magnetometers that detect very small fields; (5) fault-current limiters, compact motors and generators, and microwave filters.</p>
<div class="note trap"><p>93 K is "high" only compared with metals such as Pb (7.2 K) and Nb (9.2 K). It is far below room temperature, so cooling is still needed.</p></div>
<div class="note exam"><p>Give T<sub>c</sub> = 93 K with the liquid-nitrogen point, two or three structural or magnetic characteristics, and five distinct applications.</p></div>`,
          topics: ['m3-superconductors'],
          notes: ['m3-superconductors.4', 'm3-superconductors.6']
        },
        {
          n: '4',
          marks: 10,
          co: '3',
          bl: '3',
          prompt: `<p>Explain the working principle of the UV-Visible spectroscopy technique using the Beer-Lambert Law. How are the various electronic transitions in UV-Visible spectroscopy is crucial in identifying organic compounds?</p>`,
          answer: `<p><b>Principle:</b> a molecule absorbs UV (200–400 nm) or visible (400–800 nm) light when a photon of energy ΔE = hc/λ promotes an electron from a filled orbital to an empty one. The sample sits in a cuvette and the fall in transmitted intensity is recorded against wavelength.</p>
<div class="eq">A = log<sub>10</sub>(I<sub>0</sub>/I) = ε c l</div>
<p>A is the absorbance, ε the molar absorptivity (L mol<sup>−1</sup> cm<sup>−1</sup>), c the concentration and l the path length (usually 1 cm). At λ<sub>max</sub> a plot of A against c is a straight line, so the concentration of an unknown is read from a calibration line. Also A = 2 − log(%T).</p>
<p><b>Transitions</b> (largest to smallest energy): σ → σ* (alkanes, below 200 nm); n → σ* (alcohols, amines, halides, about 150–250 nm); π → π* (alkenes, aromatics, C=O; strong, ε near 10<sup>4</sup>); n → π* (C=O, N=O; weak, ε below 100, longest wavelength).</p>
<p><b>Use in identification:</b> the λ<sub>max</sub> and ε point to the chromophore. A strong band near 250–280 nm suggests a π → π* transition of a benzene ring; a weak band near 280–300 nm suggests n → π* of a carbonyl. Longer conjugation moves λ<sub>max</sub> to longer wavelength (red shift); auxochromes such as –OH and –NH<sub>2</sub> add a red shift and raise ε. A compound with only σ bonds shows no band above 200 nm.</p>
<div class="note trap"><p>Beer-Lambert holds for dilute solutions (A below about 1) and monochromatic light. Do not mix up the two carbonyl bands: n → π* is weak and at longer wavelength, π → π* is strong and at shorter wavelength.</p></div>
<div class="note exam"><p>Five marks for principle with A = εcl and its terms; five for the four transitions with examples and how the band position and intensity identify the chromophore.</p></div>`,
          topics: ['m4-uv-vis', 'm4-beer-lambert'],
          notes: ['m4-beer-lambert.0', 'm4-uv-vis.2', 'm4-uv-vis.3']
        },
        {
          n: '5',
          marks: '5+5',
          co: '4',
          bl: '2',
          prompt: `<p><b>(a)</b> List out the merits of computational chemistry in comparison to conventional chemistry?</p>
<p><b>(b)</b> Illustrate on the molecular orbital treatment of the diatomic molecules is bond formation using the time-independent Schrödinger equation.</p>`,
          answer: `<p><b>(a) Merits</b></p>
<ul><li>Cheaper and safer: no reagents, waste or hazardous handling.</li>
<li>Fast: many candidate molecules or reactions are screened on a computer before any lab work.</li>
<li>Reaches species that cannot be isolated: transition states, short-lived intermediates, extreme conditions.</li>
<li>Gives information the lab cannot easily give: orbital energies, charge distribution, geometry, vibrational frequencies, reaction pathways.</li>
<li>Predicts properties before synthesis and guides experiments; results are reproducible and can be combined with AI/ML screening.</li></ul>
<p><b>(b) MO treatment.</b> The time-independent Schrödinger equation of the molecule is</p>
<div class="eq">Ĥψ = Eψ</div>
<p>It cannot be solved exactly for a molecule, so ψ is built as a linear combination of atomic orbitals (LCAO): ψ = c<sub>A</sub>φ<sub>A</sub> + c<sub>B</sub>φ<sub>B</sub>. The variation principle, E = ∫ψĤψ dτ / ∫ψ<sup>2</sup> dτ, minimised with respect to c<sub>A</sub> and c<sub>B</sub>, gives the secular equations</p>
<div class="eq">c<sub>A</sub>(H<sub>AA</sub> − E) + c<sub>B</sub>(H<sub>AB</sub> − ES) = 0 &nbsp;;&nbsp; c<sub>A</sub>(H<sub>AB</sub> − ES) + c<sub>B</sub>(H<sub>BB</sub> − E) = 0</div>
<p>For a homonuclear diatomic (H<sub>AA</sub> = H<sub>BB</sub> = α, H<sub>AB</sub> = β, overlap S) the roots are E<sub>±</sub> = (α ± β)/(1 ± S). The in-phase combination ψ<sub>b</sub> = φ<sub>A</sub> + φ<sub>B</sub> is lower in energy (bonding, electron density between the nuclei); the out-of-phase combination ψ<sub>a</sub> = φ<sub>A</sub> − φ<sub>B</sub> is higher (antibonding, a node between the nuclei). Electrons fill the MOs by the Aufbau, Pauli and Hund rules, and bond order = (N<sub>b</sub> − N<sub>a</sub>)/2. For H<sub>2</sub>: σ1s<sup>2</sup>, bond order 1, so the bond forms.</p>
<div class="note trap"><p>A bond forms only when the bonding electrons outnumber the antibonding ones. In He<sub>2</sub> both MOs are full, bond order 0, no bond. The antibonding MO rises more than the bonding MO falls, because of the overlap term in the denominator.</p></div>
<div class="note exam"><p>(a) five distinct merits. (b) Ĥψ = Eψ, the LCAO form, the two energies E<sub>±</sub>, and the bonding/antibonding picture with bond order.</p></div>`,
          topics: ['m5-comp-intro', 'm5-molecular-orbitals'],
          notes: ['m5-comp-intro.1', 'm5-molecular-orbitals.2']
        },
        {
          n: '6',
          marks: 10,
          co: '3',
          bl: '3',
          prompt: `<p>Provide a neat diagram illustrating the various components of the X-ray diffraction (XRD) instrument, and explain its working principle based on Bragg's equation. Estimate the crystallite size of the given nanomaterial using p-XRD data: Peak position 2θ = 25.61°, FWHM of sample = 0.85°, k = 0.9 and λ = 1.5406 Å.</p>`,
          answer: `<figure data-fig="m4-diffractometer-layout"></figure>
<p><b>Components:</b> X-ray tube (Cu anode, Kα, λ = 1.5406 Å) with slits; sample stage on a goniometer; receiving slit and detector; computer. The tube (or sample) turns by θ while the detector turns by 2θ (θ–2θ geometry) and counts intensity against 2θ.</p>
<p><b>Principle:</b> X-rays scattered by successive lattice planes of spacing d interfere constructively only when the path difference is a whole number of wavelengths:</p>
<div class="eq">nλ = 2d sin θ</div>
<p>As the angle is scanned, a peak appears at each θ where a set of planes satisfies this. The peak positions give d and identify the phase; the width gives the crystallite size.</p>
<p><b>Crystallite size (Scherrer):</b></p>
<div class="eq">θ = 25.61°/2 = 12.805°, cos θ = 0.9751</div>
<div class="eq">β = 0.85° × π/180 = 0.014835 rad</div>
<div class="eq">D = kλ / (β cos θ) = (0.9 × 1.5406 Å) / (0.014835 × 0.9751) = 1.3865 / 0.014466</div>
<div class="eq">D ≈ <b>95.8 Å ≈ 9.6 nm</b></div>
<div class="note trap"><p>The printed peak position is 2θ, so use θ = 12.805° in cos θ. The FWHM must be in radians. Using 25.61° inside the cosine gives 10.6 nm, which is wrong.</p></div>
<div class="note exam"><p>Diagram with labels (tube, sample, goniometer, detector) and nλ = 2d sin θ for about half the marks; the rest for θ, β in radians and D with unit.</p></div>`,
          topics: ['m4-bragg', 'm4-scherrer', 'm4-xrd-patterns'],
          notes: ['m4-xrd-patterns.0', 'm4-bragg.4', 'm4-scherrer.2']
        },
        {
          n: '7',
          marks: 10,
          co: '2',
          bl: '3',
          prompt: `<p>Distinguish between diamagnetic, paramagnetic, and ferromagnetic materials. Write any five applications of magnetic materials.</p>`,
          answer: `<table><thead><tr><th></th><th>Diamagnetic</th><th>Paramagnetic</th><th>Ferromagnetic</th></tr></thead><tbody>
<tr><td>Electrons</td><td>All paired; no permanent moment</td><td>Unpaired electrons, moments random</td><td>Unpaired electrons, moments aligned in domains</td></tr>
<tr><td>In a field</td><td>Weakly repelled</td><td>Weakly attracted</td><td>Strongly attracted</td></tr>
<tr><td>Susceptibility χ</td><td>Small, negative</td><td>Small, positive</td><td>Large, positive</td></tr>
<tr><td>Field removed</td><td>Nothing left</td><td>Magnetism lost</td><td>Retained (hysteresis); lost above the Curie temperature</td></tr>
<tr><td>Examples</td><td>Cu, Zn, water, NaCl</td><td>Al, O<sub>2</sub>, Pt, Mn<sup>2+</sup></td><td>Fe, Co, Ni</td></tr></tbody></table>
<p><b>Applications:</b> (1) transformer and motor cores (soft magnets); (2) permanent magnets in loudspeakers, motors and generators (hard magnets such as Nd–Fe–B); (3) data storage on hard disks and magnetic tape; (4) MRI magnets and contrast agents; (5) magnetic separation, sensors and ferrite-core devices.</p>
<div class="note trap"><p>Ferromagnets become paramagnetic above the Curie temperature. Paramagnetism is not permanent; only the aligned domains of a ferromagnet keep their magnetisation.</p></div>
<div class="note exam"><p>Five marks for a table with at least four comparison rows and examples; five marks for five named applications.</p></div>`,
          topics: ['m3-magnetic-classes', 'm3-magnetic-basics'],
          notes: ['m3-magnetic-classes.6', 'm3-hysteresis-storage.2']
        },
        {
          n: '8',
          marks: '5+5',
          co: '1',
          bl: '3',
          prompt: `<p><b>(a)</b> One mole of Nitrogen gas contained in a cylinder at 300K is allowed to expand irreversibly and isothermally against an external pressure of 5 atm from a volume of 5.0 dm<sup>3</sup> to 7.0 dm<sup>3</sup>. Calculate W, ΔU and ΔH.</p>
<p><b>(b)</b> The half-life of a homogeneous gaseous reaction SO<sub>2</sub>Cl<sub>2</sub> ⟶ SO<sub>2</sub> + Cl<sub>2</sub>, which obeys first-order kinetics, is 8 minutes. How long will it take for the concentration of SO<sub>2</sub>Cl<sub>2</sub> to be reduced to 1% of the initial value.</p>`,
          answer: `<p><b>(a)</b> Treat N<sub>2</sub> as an ideal gas. Constant external pressure:</p>
<div class="eq">W = −P<sub>ex</sub>ΔV = −5 atm × (7.0 − 5.0) dm<sup>3</sup> = −10 dm<sup>3</sup> atm</div>
<div class="eq">1 dm<sup>3</sup> atm = 101.325 J, so W = −1013 J ≈ −1.01 kJ</div>
<p>For an isothermal ideal gas U depends only on T, so <b>ΔU = 0</b>. Also H = U + PV = U + nRT is unchanged, so <b>ΔH = 0</b>. Then q = −W = +1013 J (heat absorbed).</p>
<p><b>(b)</b> k = 0.693/t<sub>½</sub> = 0.693/8 = 0.0866 min<sup>−1</sup>.</p>
<div class="eq">t = (2.303/k) log([A]<sub>0</sub>/[A]) = (2.303/0.0866) × log 100 = 26.6 × 2</div>
<div class="eq">t ≈ <b>53.2 min</b> (about 6.64 half-lives)</div>
<div class="note trap"><p>In (a) the work is not nRT ln(V<sub>2</sub>/V<sub>1</sub>); that is the reversible path and would give −1.70 kJ. Irreversible expansion against a fixed pressure uses −P<sub>ex</sub>ΔV. In (b), 1% means [A]/[A]<sub>0</sub> = 0.01.</p></div>
<div class="note exam"><p>(a) the formula, the dm<sup>3</sup> atm to J conversion, and the reason ΔU = ΔH = 0. (b) k from the half-life, then the first-order integrated form.</p></div>`,
          topics: ['m1-expansion-work', 'm1-thermo-numericals', 'm1-integrated-rate'],
          notes: ['m1-thermo-numericals.0', 'm1-kinetics-numericals.1']
        },
        {
          n: '9',
          marks: 10,
          co: '1',
          bl: '3',
          prompt: `<p><b>9.a)</b> With a neat diagram, explain how the ceramic materials in a device produce electricity. Despite the high operating temperature, reason out the advantages of using this energy device.</p>
<p><b>[OR]</b></p>
<p><b>9.b)</b> Describe the function of a Lithium-ion battery with a neat diagram and list out the advantages and disadvantages associated with this energy device.</p>`,
          answer: `<p><b>9.a) The solid oxide fuel cell (SOFC).</b></p>
<figure data-fig="m2-sofc-diagram"></figure>
<p>The ceramics are a dense yttria-stabilised zirconia (YSZ) electrolyte that conducts O<sup>2−</sup>, a Ni–YSZ cermet anode and an LSM (lanthanum strontium manganite) cathode. Operating temperature: 800–1000 °C.</p>
<div class="eq">Cathode: ½O<sub>2</sub> + 2e<sup>−</sup> → O<sup>2−</sup></div>
<div class="eq">Anode: H<sub>2</sub> + O<sup>2−</sup> → H<sub>2</sub>O + 2e<sup>−</sup> (CO + O<sup>2−</sup> → CO<sub>2</sub> + 2e<sup>−</sup>)</div>
<div class="eq">Overall: H<sub>2</sub> + ½O<sub>2</sub> → H<sub>2</sub>O</div>
<p>O<sub>2</sub> is reduced at the cathode; O<sup>2−</sup> hops through the vacancies of the YSZ to the anode, oxidises the fuel and frees electrons, which flow through the external load.</p>
<p><b>Why the high temperature is worth it:</b> YSZ conducts oxide ions only when hot; no expensive Pt catalyst is needed; fast kinetics; fuel flexibility (natural gas, biogas and CO are reformed inside the cell); about 60% electrical efficiency, over 80% when the hot exhaust drives heating or a gas turbine; no liquid electrolyte, so no leakage; suited to stationary power plants.</p>
<p><b>9.b) The Li-ion battery.</b></p>
<figure data-fig="m2-liion-charge-discharge"></figure>
<p>LiCoO<sub>2</sub> cathode, graphite anode, a Li salt in organic solvent, and a porous separator. Li<sup>+</sup> shuttles between layered hosts.</p>
<div class="eq">Discharge, anode: Li<sub>n</sub>C<sub>6</sub> → C<sub>6</sub> + nLi<sup>+</sup> + ne<sup>−</sup></div>
<div class="eq">Discharge, cathode: Li<sub>1−n</sub>CoO<sub>2</sub> + nLi<sup>+</sup> + ne<sup>−</sup> → LiCoO<sub>2</sub></div>
<p>On charging both reactions reverse and Li<sup>+</sup> returns to the graphite.</p>
<p><b>Advantages:</b> high energy density (about 150–250 Wh/kg), about 3.6 V per cell, low self-discharge, no memory effect, hundreds to thousands of cycles. <b>Disadvantages:</b> cost (Co), overheating or thermal runaway if damaged, capacity fade with age, needs a protection circuit.</p>
<div class="note trap"><p>In the SOFC the mobile ion is O<sup>2−</sup>, moving cathode to anode, the opposite direction to H<sup>+</sup> in a PEMFC. Answer only one of 9.a or 9.b.</p></div>
<div class="note exam"><p>Labelled diagram, both electrode reactions and the overall reaction for 6 of the 10 marks; the rest for advantages (SOFC) or the advantage/disadvantage lists (Li-ion).</p></div>`,
          topics: ['m2-sofc', 'm2-fuel-cells', 'm2-li-ion'],
          notes: ['m2-sofc.1', 'm2-sofc.3', 'm2-li-ion.3', 'm2-li-ion.7']
        },
        {
          n: '10',
          marks: 10,
          co: '2',
          bl: '3',
          prompt: `<p><b>10.a)</b> Using a schematic diagram, explain the mechanical method commonly employed in preparing nanomaterials and discuss on the limitations associated with this approach.</p>
<p><b>[OR]</b></p>
<p><b>10.b)</b> Discuss in detail the various steps involved in the synthesis of nano silica through sol-gel method.</p>`,
          answer: `<p><b>10.a) High-energy ball milling</b> (top-down).</p>
<figure data-fig="m3-milling-principle"></figure>
<p>Draw a sealed jar holding hard balls (steel, tungsten carbide or zirconia) and the bulk powder; the jar rotates or shakes so the balls fall and strike the powder. In a planetary mill the jars also spin on a rotating disc.</p>
<p>Repeated impacts fracture, cold-weld and re-fracture the particles, so grain size falls from micrometres to nanometres. Milling time, ball-to-powder ratio and speed set the final size.</p>
<p><b>Limitations:</b> wide size distribution and irregular shape; contamination from ball and jar wear; heating and possible amorphisation or unwanted phase change; agglomeration of the fine particles; long milling time and high energy use; poor control below about 10 nm.</p>
<p><b>10.b) Sol-gel synthesis of nano silica</b> (bottom-up) from TEOS, Si(OC<sub>2</sub>H<sub>5</sub>)<sub>4</sub>:</p>
<ol><li><b>Sol formation:</b> TEOS in ethanol is mixed with water and a catalyst (NH<sub>3</sub> base, the Stöber route, or acid).</li>
<li><b>Hydrolysis:</b> Si(OR)<sub>4</sub> + 4H<sub>2</sub>O → Si(OH)<sub>4</sub> + 4ROH.</li>
<li><b>Condensation:</b> ≡Si–OH + HO–Si≡ → ≡Si–O–Si≡ + H<sub>2</sub>O (or with ≡Si–OR, releasing ROH), building the siloxane network.</li>
<li><b>Gelation:</b> particles link into a continuous 3-D network that holds the solvent.</li>
<li><b>Ageing, washing, drying and calcination:</b> the gel strengthens, is washed, dried (xerogel or aerogel) and heated to remove organics and leave SiO<sub>2</sub> nanoparticles.</li></ol>
<div class="eq">Overall: Si(OC<sub>2</sub>H<sub>5</sub>)<sub>4</sub> + 2H<sub>2</sub>O → SiO<sub>2</sub> + 4C<sub>2</sub>H<sub>5</sub>OH</div>
<p>Particle size is tuned by the water:TEOS ratio, catalyst, temperature and solvent. Advantages: low temperature, high purity, good size control. Disadvantages: costly precursors, shrinkage and cracking on drying.</p>
<div class="note trap"><p>Hydrolysis comes before condensation. Answer only one of 10.a or 10.b.</p></div>
<div class="note exam"><p>10.a: schematic (jar, balls, motion arrows), mechanism, and at least four limitations. 10.b: the five steps in order with the hydrolysis and condensation equations.</p></div>`,
          topics: ['m3-milling', 'm3-synthesis', 'm3-sol-gel'],
          notes: ['m3-milling.2', 'm3-milling.3', 'm3-sol-gel.1', 'm3-sol-gel.3']
        }
      ]
    },
    {
      id: 'fat-b1tb1-2026',
      kind: 'actual',
      exam: 'fat',
      title: 'FAT · Slot B1+TB1 · Nov 2026',
      short: 'B1+TB1 FAT',
      sub: 'Actual paper · Fall 2026–27',
      meta: [['Slot', 'B1+TB1'], ['Date', 'November 2026'], ['Duration', '3 hours'], ['Max marks', '100'], ['Programme', 'B.Tech.']],
      instructions: `<b>General instructions:</b> Part A: 10 × 10 = 100 marks, answer all questions (Q9 and Q10 have an internal choice). BL – Blooms Taxonomy Level (1 – Remember, 2 – Understand, 3 – Apply, 4 – Analyse, 5 – Evaluate, 6 – Create).<br><b>Course Outcomes:</b> CO1: Apply the concepts of thermodynamics and kinetics. CO2: Use chemical concepts for the advancement of materials in electrical, magnetic, and energy domains. CO3: Demonstrate UV Visible spectroscopic and X-ray diffraction techniques. CO4: Discuss molecular orbitals and its energies through computational chemistry. CO5: Apply instrumental, wet-chemical, and computational methods to analyze materials, molecules, and ions.`,
      questions: [
        {
          n: '1',
          marks: '5+5',
          co: '1',
          bl: '3',
          prompt: `<p><b>(a)</b> Discuss the practical importance of zeroth law of thermodynamics.</p>
<p><b>(b)</b> A second-order reaction behaves as a first-order reaction when one of the reactants is present in large excess. Explain with appropriate example.</p>`,
          answer: `<p><b>(a) Zeroth law:</b> if two bodies A and B are each in thermal equilibrium with a third body C, then A and B are in thermal equilibrium with each other. Thermal equilibrium is transitive, which is what makes temperature a measurable property.</p>
<ul><li><b>Thermometry:</b> the thermometer (C) is brought into contact with the object (A) until no more heat flows; it then has the object's temperature, so its reading is the object's temperature. Every thermometer reading rests on this law.</li>
<li><b>Calibration:</b> several thermometers placed in the same bath reach equilibrium with it, so they must all show the same value; this is how probes are calibrated against a standard.</li>
<li><b>Thermal control:</b> in spacecraft, electronics and air conditioning, every part in equilibrium with the thermostat is at the thermostat's temperature, so one sensor controls the whole system.</li>
<li>It allows a <b>temperature scale</b> to be defined (fixed points such as the triple point of water, 273.16 K).</li></ul>
<p><b>(b) Pseudo-first-order reaction:</b> a second-order (bimolecular) reaction A + B → products has rate = k[A][B]. If B is present in very large excess (or held constant), [B] hardly changes during the reaction, so k[B] is effectively a constant k′ and rate = k′[A]. The reaction then follows first-order kinetics in A.</p>
<p><b>Example: acid hydrolysis of ethyl acetate</b></p>
<div class="eq">CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> + H<sub>2</sub>O → CH<sub>3</sub>COOH + C<sub>2</sub>H<sub>5</sub>OH (H<sup>+</sup>)</div>
<p>True rate = k[ester][H<sub>2</sub>O], but water is the solvent (about 55 M) and its concentration barely changes, so rate = k′[ester] with k′ = k[H<sub>2</sub>O].</p>
<div class="eq">ln[A]<sub>t</sub> = −k′t + ln[A]<sub>0</sub>, t<sub>½</sub> = 0.693/k′ (unit of k′: s<sup>−1</sup>)</div>
<p>Other example: inversion of cane sugar, C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> + H<sub>2</sub>O → glucose + fructose, first order in sucrose.</p>
<div class="note exam"><p>Five marks each: in (a) give the statement and at least three applications; in (b) give the definition, the rate law before and after (k′ = k[B]) and one balanced example.</p></div>`,
          topics: ['m1-zeroth-first-law', 'm1-integrated-rate'],
          notes: ['m1-zeroth-first-law.0', 'm1-zeroth-first-law.1', 'm1-integrated-rate.3']
        },
        {
          n: '2',
          marks: 10,
          co: '2',
          bl: '2',
          prompt: `<p>Explain the construction and working of Solid Oxide Fuel Cell (SOFC) with a neat diagram. Write the cell reactions, advantage and disadvantage of these cells.</p>`,
          answer: `<figure data-fig="m2-sofc-diagram"></figure>
<p><b>Construction:</b> all components are solid ceramics.</p>
<ul><li><b>Electrolyte:</b> yttria-stabilised zirconia (YSZ), a dense ceramic that conducts O<sup>2−</sup> ions at high temperature (about 800–1000 °C).</li>
<li><b>Anode (fuel side, −):</b> porous Ni–ZrO<sub>2</sub> cermet.</li>
<li><b>Cathode (air side, +):</b> porous strontium-doped LaMnO<sub>3</sub> (LSM).</li>
<li>Fuel (H<sub>2</sub>, CO or reformed hydrocarbons) is fed to the anode and air to the cathode; an external circuit joins the electrodes.</li></ul>
<p><b>Working:</b> at the cathode O<sub>2</sub> takes up electrons and becomes O<sup>2−</sup>. The oxide ions move through the hot ceramic electrolyte to the anode, where they oxidise the fuel and release electrons. The electrons flow through the external load back to the cathode, giving the current. Products (H<sub>2</sub>O, CO<sub>2</sub>) leave on the fuel side.</p>
<div class="eq">Cathode: O<sub>2</sub> + 4e<sup>−</sup> → 2O<sup>2−</sup></div>
<div class="eq">Anode: H<sub>2</sub> + CO + 2O<sup>2−</sup> → H<sub>2</sub>O + CO<sub>2</sub> + 4e<sup>−</sup></div>
<div class="eq">Overall: H<sub>2</sub> + CO + O<sub>2</sub> → H<sub>2</sub>O + CO<sub>2</sub></div>
<p><b>Advantages</b></p>
<ul><li>All parts solid: no electrolyte loss and no electrode corrosion.</li>
<li>High temperature makes the electrode reactions fast without a platinum catalyst and tolerates fuel impurities (CO is a fuel, not a poison).</li>
<li>High efficiency, and the hot exhaust can drive a turbine (cogeneration).</li>
<li>Very low emissions.</li></ul>
<p><b>Disadvantages</b></p>
<ul><li>High operating temperature (500–1000 °C): slow start-up, thermal-expansion mismatch and reactions between layers.</li>
<li>Expensive, complex fabrication of the ceramic layers.</li></ul>
<div class="note exam"><p>Marks go to the labelled diagram (O<sup>2−</sup> moving cathode → anode, e<sup>−</sup> through the wire), the three reactions, and at least two advantages and two disadvantages.</p></div>`,
          topics: ['m2-sofc'],
          notes: ['m2-sofc.1', 'm2-sofc.2', 'm2-sofc.3']
        },
        {
          n: '3',
          marks: 10,
          co: '2',
          bl: '2',
          prompt: `<p>Explain the top-down approach for preparing nanomaterials with a suitable diagram. Mention its limitations.</p>`,
          answer: `<p><b>Top-down approach:</b> a bulk material is broken down into nanosized particles by mechanical or physical means. The standard method is <b>mechanical (ball) milling</b>.</p>
<figure data-fig="m3-milling-principle"></figure>
<p><b>Process</b></p>
<ul><li>The bulk powder is sealed in a hardened vial with hard balls (steel, tungsten carbide or zirconia), usually under inert gas.</li>
<li>The vial rotates or shakes (in a planetary mill the vials also spin on a rotating disc), so the balls repeatedly strike the powder.</li>
<li>Each impact transfers kinetic energy and fractures the particles; repeated fracture and cold welding reduce them to the nanometre range over many hours.</li>
<li>Speed, ball-to-powder ratio, milling time and atmosphere control the final size.</li></ul>
<p><b>Advantages:</b> simple, cheap, high production rate, works for metals, alloys and ceramics.</p>
<p><b>Limitations</b></p>
<ul><li>Severe plastic deformation and local heating (100–200 °C at the contact points) change the structure.</li>
<li>Hard to reach a narrow, uniform particle size; shape is poorly controlled.</li>
<li>Contamination from the milling tools (Fe 1–2%) and the atmosphere (trace O<sub>2</sub>, N<sub>2</sub>, about 300 ppm); long runs (30 h) raise tool contamination to about 10%.</li>
<li>Needs inert conditions (glove box) and protective coatings, which add cost.</li></ul>
<div class="note exam"><p>Draw the vial with balls and powder, describe the impacts, then list the limitations with the numbers (100–200 °C, Fe 1–2%, 300 ppm, 30 h → 10%).</p></div>`,
          topics: ['m3-milling', 'm3-synthesis'],
          notes: ['m3-synthesis.0', 'm3-milling.1', 'm3-milling.2', 'm3-milling.3']
        },
        {
          n: '4',
          marks: 10,
          co: '3',
          bl: '2',
          prompt: `<p>Enumerate the working principle of the UV-Visible spectroscopy technique using the Beer-Lambert's Law. Discuss the importance of various electronic transitions in UV-Visible spectroscopy to identify the bonding type in organic chromophores.</p>`,
          answer: `<p><b>Principle:</b> molecules absorb UV (200–400 nm) and visible (400–800 nm) radiation when the photon energy hν equals the gap between a filled and an empty molecular orbital, promoting an electron. The amount absorbed at a wavelength depends on the concentration of the absorbing species (Beer–Lambert law), and the wavelength depends on the type of bond.</p>
<div class="eq">A = log(I<sub>0</sub>/I) = εcl</div>
<p>A is absorbance, ε the molar absorptivity (L mol<sup>−1</sup> cm<sup>−1</sup>), c the concentration (mol L<sup>−1</sup>) and l the path length (cm). A is proportional to c, so a calibration plot of A against c gives the unknown concentration.</p>
<figure data-fig="m4-double-beam"></figure>
<p><b>Instrument (double beam):</b> deuterium/tungsten source → monochromator → beam splitter into sample and reference cuvettes → detector compares I and I<sub>0</sub> → spectrum of A against λ.</p>
<figure data-fig="m4-mo-ladder"></figure>
<p><b>Electronic transitions and what they reveal</b></p>
<ul><li><b>σ → σ*</b> (below 200 nm): only single bonds, e.g. CH<sub>4</sub>, ethane; no absorption in the normal UV range shows a saturated compound.</li>
<li><b>n → σ*</b> (about 150–250 nm): saturated compounds with lone pairs (O, N, S, halogen), e.g. CH<sub>3</sub>OH, CH<sub>3</sub>Cl, amines.</li>
<li><b>π → π*</b> (about 170–200 nm isolated, longer with conjugation; strong, ε about 10<sup>4</sup>): C=C, C≡C, aromatic rings; the band shifts to longer λ as conjugation grows, so it shows the extent of conjugation.</li>
<li><b>n → π*</b> (about 270–300 nm, weak, ε below 100): groups with both a π bond and a lone pair, e.g. C=O in acetone and HCHO, N=O, C=N.</li></ul>
<p>So the position (λ<sub>max</sub>) and intensity (ε) of a band identify the chromophore: a weak band near 280 nm points to a carbonyl (n → π*), a strong band that moves to longer λ points to a conjugated π system. Auxochromes (−OH, −NH<sub>2</sub>) cause red (bathochromic) shifts and help identify substituents.</p>
<div class="note exam"><p>Give the law with every term and unit, the instrument outline, then all four transitions with an example and λ range each.</p></div>`,
          topics: ['m4-uv-vis', 'm4-beer-lambert', 'm4-uv-vis-instrument'],
          notes: ['m4-beer-lambert.0', 'm4-uv-vis-instrument.1', 'm4-uv-vis.2', 'm4-uv-vis.5']
        },
        {
          n: '5',
          marks: 10,
          co: '4',
          bl: '4',
          prompt: `<p>Write a short note on potential energy curve and surface with suitable examples.</p>`,
          answer: `<p><b>Potential energy curve (PEC):</b> a 2-D plot of a molecule's energy against a single geometric parameter. For a diatomic molecule the only variable is the internuclear distance R, so its energy is a curve.</p>
<figure data-fig="m5-morse-harmonic"></figure>
<ul><li>At short R the energy rises steeply (nuclear repulsion, the repulsive wall).</li>
<li>The minimum is at the equilibrium bond length R<sub>e</sub>, where attraction and repulsion balance.</li>
<li>At large R the curve levels off at the dissociation energy D<sub>e</sub>: the atoms no longer interact.</li>
<li>Near R<sub>e</sub> it is roughly a harmonic parabola V = ½k(R − R<sub>e</sub>)<sup>2</sup>; the real curve is anharmonic, the Morse potential V = D<sub>e</sub>(1 − e<sup>−a(R−R<sub>e</sub>)</sup>)<sup>2</sup>.</li>
<li>Examples: H<sub>2</sub> (minimum about 0.74 Å) and HCl (about 1.3 Å, flat at long R as the bond breaks).</li></ul>
<p><b>Potential energy surface (PES):</b> the energy of a molecule as a function of two or more geometric parameters. With two parameters it is a 3-D surface (often drawn as a contour map); with more it is a hypersurface that cannot be drawn and is searched by computer.</p>
<figure data-fig="m5-pes-contours"></figure>
<ul><li><b>Example, H<sub>2</sub>O:</b> q<sub>1</sub> = O–H bond length and q<sub>2</sub> = H–O–H angle; the minimum is at 0.958 Å and 104.5°.</li>
<li><b>Example, ozone:</b> the surface shows the open (bent) O<sub>3</sub> minimum, the higher-energy ring isomer (isoozone) and the transition state between them.</li>
<li><b>Stationary points:</b> minima are stable molecules (global minimum = most stable); a first-order saddle point is a transition state; the lowest path between minima is the reaction coordinate.</li></ul>
<table class="tbl"><thead><tr><th></th><th>PEC</th><th>PES</th></tr></thead><tbody>
<tr><td>Variables</td><td>one (bond length)</td><td>two or more</td></tr>
<tr><td>Plot</td><td>2-D curve</td><td>3-D surface or hypersurface</td></tr>
<tr><td>Stationary points</td><td>one minimum at R<sub>e</sub></td><td>global and local minima, saddle points</td></tr></tbody></table>
<div class="note exam"><p>Draw one labelled curve (wall, R<sub>e</sub>, D<sub>e</sub>) and one contour surface, give one example of each, and end with the comparison table.</p></div>`,
          topics: ['m5-potential-energy-surface'],
          notes: ['m5-potential-energy-surface.0', 'm5-potential-energy-surface.1', 'm5-potential-energy-surface.2', 'm5-potential-energy-surface.6']
        },
        {
          n: '6',
          marks: '5+5',
          co: '3',
          bl: '1',
          prompt: `<p><b>(a)</b> Explain in detail the working principle of X-ray diffraction (XRD) technique based on Bragg's equation and explain how various microstructures of solid materials like silica can be distinguished using XRD technique.</p>
<p><b>(b)</b> Determine the crystallite size of the given nanomaterial using powder X-Ray diffraction (XRD) technique data: Peak position 2θ = 26.43°, FWHM of sample = 2.685°, k = 0.9 and λ = 1.5406 Å (Degree to radian = Degree × π/180).</p>`,
          answer: `<p><b>(a) Principle:</b> a crystal is a stack of parallel atomic planes a distance d apart. X-rays (λ comparable to d) reflected from successive planes travel extra path 2d sin θ. They interfere constructively, giving a diffraction peak, only when this path difference is a whole number of wavelengths:</p>
<div class="eq">nλ = 2d sin θ (Bragg's law)</div>
<figure data-fig="m4-diffractometer-layout"></figure>
<p>In a diffractometer, monochromatic X-rays (Cu Kα, 1.5406 Å) strike the powder sample; the detector moves through 2θ and records intensity. Each set of planes gives a peak at its own 2θ, so the pattern (peak positions and intensities) is a fingerprint of the crystal structure, matched against a database.</p>
<p><b>Distinguishing microstructures of silica (SiO<sub>2</sub>):</b></p>
<ul><li><b>Crystalline</b> (quartz, cristobalite): long-range order, many sharp peaks; quartz and cristobalite have different d values, so peaks at different 2θ.</li>
<li><b>Polycrystalline:</b> ordered only within grains; sharp peaks (rings), broadened when the crystallites are very small.</li>
<li><b>Amorphous</b> (silica glass): no long-range order, so no sharp peaks, only one broad hump.</li></ul>
<p>Chemical analysis gives "SiO<sub>2</sub>" for all three; only XRD tells them apart.</p>
<p><b>(b) Scherrer equation</b></p>
<div class="eq">D = Kλ / (β cos θ)</div>
<div class="eq">θ = 26.43°/2 = 13.215°, cos θ = 0.9735</div>
<div class="eq">β = 2.685 × π/180 = 0.04686 rad</div>
<div class="eq">D = (0.9 × 1.5406) / (0.04686 × 0.9735) = 1.3865 / 0.04562 = 30.4 Å = <b>3.04 nm</b></div>
<div class="note trap"><p>Use θ, not 2θ, in cos θ, and β in radians. Using 2θ gives the wrong answer.</p></div>`,
          topics: ['m4-bragg', 'm4-xrd-patterns', 'm4-scherrer'],
          notes: ['m4-bragg.3', 'm4-bragg.4', 'm4-bragg.2', 'm4-scherrer.1', 'm4-scherrer.2']
        },
        {
          n: '7',
          marks: 10,
          co: '2',
          bl: '1',
          prompt: `<p>Define superconductors and Meissner effect. Provide examples and list any four applications.</p>`,
          answer: `<p><b>Superconductor:</b> a material whose electrical resistance drops abruptly to <b>exactly zero</b> when it is cooled below a critical temperature T<sub>c</sub> (provided the magnetic field and current density stay below H<sub>c</sub> and J<sub>c</sub>).</p>
<p><b>Meissner effect:</b> when a superconductor is cooled below T<sub>c</sub> in a magnetic field, it expels the magnetic flux from its interior (B = 0 inside); it behaves as a perfect diamagnet (χ = −1). This is why a magnet levitates above a cooled superconductor.</p>
<figure data-fig="m3-meissner-effect"></figure>
<p><b>Examples</b></p>
<ul><li>Type I (pure metals): Hg (T<sub>c</sub> 4.2 K), Pb (7.2 K), Al.</li>
<li>Type II (alloys and ceramics): Nb (9.2 K), NbTi (10 K), Nb<sub>3</sub>Sn (18 K), YBa<sub>2</sub>Cu<sub>3</sub>O<sub>7</sub> (YBCO, 92 K, cooled by liquid N<sub>2</sub>).</li></ul>
<p><b>Applications (any four)</b></p>
<ul><li><b>MRI</b> scanners: superconducting magnets give strong, stable fields.</li>
<li><b>Maglev trains:</b> levitation and propulsion with no friction.</li>
<li><b>Particle accelerators</b> (LHC) and fusion reactors: magnets that bend and confine beams and plasma.</li>
<li><b>SQUIDs:</b> extremely sensitive magnetic-field sensors (brain scans, MEG).</li>
<li>Loss-free <b>power cables</b>, motors and generators.</li></ul>`,
          topics: ['m3-superconductors'],
          notes: ['m3-superconductors.0', 'm3-superconductors.2', 'm3-superconductors.5', 'm3-superconductors.6']
        },
        {
          n: '8',
          marks: 10,
          co: '4',
          bl: '2',
          prompt: `<p>What is geometry optimization? Explain its workflow process and applications to predict the reaction mechanism with appropriate example.</p>`,
          answer: `<p><b>Geometry optimisation</b> adjusts the positions of the atoms in a molecule until it reaches the arrangement of <b>minimum potential energy</b> on the PES: the most stable bond lengths, bond angles and dihedral angles.</p>
<figure data-fig="m5-geometry-loop"></figure>
<p><b>Workflow</b></p>
<ol><li>Build an initial guess of the structure (from a drawing or a known geometry).</li>
<li>Choose the method and basis set and calculate the energy and the force (energy gradient) on each atom.</li>
<li>Move the atoms slightly in the direction that lowers the energy.</li>
<li>Repeat until the forces are about zero and the energy change is below the set tolerance (converged).</li>
<li>Run a <b>frequency calculation</b>: no imaginary frequency confirms a minimum; exactly one imaginary frequency means a transition state.</li></ol>
<p>The optimisation reaches the minimum nearest the starting structure, so different starting geometries (conformers) can give different minima; several starts are tried to find the global minimum.</p>
<p><b>Use in predicting a reaction mechanism</b></p>
<ul><li>Optimise the reactants, products and any intermediates (minima) and the transition states (saddle points) that join them.</li>
<li>Confirm each with frequencies, then compare energies to get the activation barrier and reaction energy, and so the most likely path.</li></ul>
<p><b>Example: HCN → HNC isomerisation.</b> HCN and HNC are optimised as minima; the bent transition state (H moving from C to N) has one imaginary frequency. Raw energies give a barrier of 219 kJ mol<sup>−1</sup> and HNC 52.2 kJ mol<sup>−1</sup> above HCN; after zero-point-energy correction, 202 and 49.7 kJ mol<sup>−1</sup>.</p>
<figure data-fig="m5-hcn-hnc-profile"></figure>
<p>Another example: a gas-phase S<sub>N</sub>2 reaction (halide ion + methyl halide), where optimisation finds the two ion–dipole complexes (wells) and the trigonal-bipyramidal transition state between them.</p>`,
          topics: ['m5-geometry-frequency', 'm5-reaction-mechanisms'],
          notes: ['m5-geometry-frequency.0', 'm5-geometry-frequency.3', 'm5-geometry-frequency.7', 'm5-reaction-mechanisms.0']
        },
        {
          n: '9',
          marks: 10,
          co: '1',
          bl: '3',
          prompt: `<p><b>(a)</b> (i) 10 moles of an ideal gas expands reversibly from a volume of 1 dm<sup>3</sup> and temperature 25 °C to a volume of 2 dm<sup>3</sup> and temperature 50 °C. Assume C<sub>v</sub> = 3/2 R. Calculate the entropy change for the process. (R = 8.314 J K<sup>−1</sup> mol<sup>−1</sup>) (5 marks)<br>(ii) The half-life period of first order reaction is 15 minutes. Calculate the rate constant and the time taken to complete 80% of the reaction. (5 marks)</p>
<p><b>(OR)</b></p>
<p><b>(b)</b> (i) Calculate the maximum work done (w), heat absorbed (q) and change in internal energy (ΔU) when 0.5 mol of a gas expands isothermally and reversibly from a volume of 2 L to 5 L at 27 °C. (R = 8.314 J K<sup>−1</sup> mol<sup>−1</sup>) (5 marks)<br>(ii) The rate constant for a first-order reaction is 3.2 × 10<sup>−5</sup> s<sup>−1</sup> at 70 °C. What percentage of reactants will remain on heating for 1.5 hour? (5 marks)</p>`,
          answer: `<p><b>(a)(i)</b> T<sub>1</sub> = 298.15 K, T<sub>2</sub> = 323.15 K, V<sub>2</sub>/V<sub>1</sub> = 2, n = 10 mol, C<sub>v</sub> = 1.5 × 8.314 = 12.471 J K<sup>−1</sup> mol<sup>−1</sup>.</p>
<div class="eq">ΔS = nC<sub>v</sub> ln(T<sub>2</sub>/T<sub>1</sub>) + nR ln(V<sub>2</sub>/V<sub>1</sub>)</div>
<div class="eq">= 10 × 12.471 × ln(323.15/298.15) + 10 × 8.314 × ln 2</div>
<div class="eq">= 124.71 × 0.08052 + 83.14 × 0.6931 = 10.04 + 57.63 = <b>67.7 J K<sup>−1</sup></b></div>
<p><b>(a)(ii)</b></p>
<div class="eq">k = 0.693 / t<sub>½</sub> = 0.693 / 15 = <b>0.0462 min<sup>−1</sup></b></div>
<div class="eq">t = (2.303/k) log[100/(100 − 80)] = (2.303/0.0462) × log 5 = 49.85 × 0.699 = <b>34.8 min</b></div>
<p><b>(OR)</b></p>
<p><b>(b)(i)</b> T = 300.15 K, n = 0.5 mol.</p>
<div class="eq">w = −nRT ln(V<sub>2</sub>/V<sub>1</sub>) = −0.5 × 8.314 × 300.15 × ln(5/2) = −1247.7 × 0.9163 = <b>−1143 J</b></div>
<div class="eq">ΔU = 0 (isothermal, ideal gas), so q = −w = <b>+1143 J</b></div>
<p>The gas does 1143 J of work on the surroundings and absorbs the same heat.</p>
<p><b>(b)(ii)</b> t = 1.5 h = 5400 s.</p>
<div class="eq">kt = 3.2 × 10<sup>−5</sup> × 5400 = 0.1728</div>
<div class="eq">[A]/[A]<sub>0</sub> = e<sup>−kt</sup> = e<sup>−0.1728</sup> = 0.841, so <b>84.1% remains</b> (15.9% has reacted)</div>
<div class="note trap"><p>Convert 1.5 h to seconds to match k in s<sup>−1</sup>; and use kelvin (298.15 K and 323.15 K) for the temperature ratio.</p></div>`,
          topics: ['m1-thermo-numericals', 'm1-kinetics-numericals', 'm1-second-law-entropy', 'm1-expansion-work'],
          notes: ['m1-second-law-entropy.3', 'm1-thermo-numericals.2', 'm1-kinetics-numericals.0', 'm1-kinetics-numericals.1', 'm1-thermo-numericals.0', 'm1-kinetics-numericals.2']
        },
        {
          n: '10',
          marks: 10,
          co: '2',
          bl: '1',
          prompt: `<p><b>(a)</b> Differentiate ferromagnetic and anti-ferromagnetic materials. Write any two applications of magnetic materials.</p>
<p><b>(OR)</b></p>
<p><b>(b)</b> Give a detailed account of the construction and working principle of the energy device constructed using natural organic dyes. Discuss its advantages and disadvantages in real-time applications.</p>`,
          answer: `<p><b>(a)</b></p>
<figure data-fig="m3-spin-arrangements"></figure>
<table class="tbl"><thead><tr><th></th><th>Ferromagnetic</th><th>Antiferromagnetic</th></tr></thead><tbody>
<tr><td>Spin alignment</td><td>Neighbouring spins parallel (exchange interaction favours alignment), in domains</td><td>Neighbouring spins antiparallel and equal, so they cancel</td></tr>
<tr><td>Net magnetisation</td><td>Large, permanent; persists without a field</td><td>Zero (or very small) net moment</td></tr>
<tr><td>Susceptibility χ</td><td>Very large and positive (Fe about 100 000)</td><td>Small and positive (Cr 3.6 × 10<sup>−6</sup>)</td></tr>
<tr><td>Temperature</td><td>Becomes paramagnetic above the Curie temperature T<sub>C</sub>; χ = C/(T − T<sub>C</sub>)</td><td>χ rises to a maximum at the Néel temperature T<sub>N</sub>, then falls; paramagnetic above T<sub>N</sub></td></tr>
<tr><td>Hysteresis</td><td>Shows a hysteresis loop</td><td>No hysteresis</td></tr>
<tr><td>Examples</td><td>Fe, Co, Ni, Gd</td><td>MnO, NiO, Cr</td></tr></tbody></table>
<p><b>Applications of magnetic materials:</b> soft ferromagnets for transformer, motor and generator cores and electromagnets; hard ferromagnets (Alnico, NdFeB) for permanent magnets; magnetic data storage (hard disks, tapes); MRI and sensors.</p>
<p><b>(OR)</b></p>
<p><b>(b) Dye-sensitised solar cell (DSSC, Grätzel cell) with natural dyes</b> (anthocyanin from hibiscus, blackberry or pomegranate; betanin from beetroot; chlorophyll).</p>
<figure data-fig="m2-dssc-schematic"></figure>
<p><b>Construction</b></p>
<ul><li><b>Working electrode:</b> glass coated with a transparent conducting oxide (FTO or ITO) carrying a nanoporous TiO<sub>2</sub> film; the film is soaked in the dye, which adsorbs as a monolayer.</li>
<li><b>Electrolyte:</b> I<sup>−</sup>/I<sub>3</sub><sup>−</sup> redox couple in a solvent.</li>
<li><b>Counter electrode:</b> FTO glass coated with Pt or graphite (pencil carbon in the hibiscus-tea cell).</li></ul>
<p><b>Working</b></p>
<ol><li>The dye absorbs visible light: S + hν → S*.</li>
<li>The excited dye injects an electron into the TiO<sub>2</sub> conduction band: S* → S<sup>+</sup> + e<sup>−</sup>(TiO<sub>2</sub>).</li>
<li>Electrons travel through TiO<sub>2</sub> and the external load to the counter electrode (current).</li>
<li>The oxidised dye is regenerated by iodide: 2S<sup>+</sup> + 3I<sup>−</sup> → 2S + I<sub>3</sub><sup>−</sup>.</li>
<li>I<sub>3</sub><sup>−</sup> is reduced at the counter electrode: I<sub>3</sub><sup>−</sup> + 2e<sup>−</sup> → 3I<sup>−</sup>. Nothing is consumed overall.</li></ol>
<p><b>Advantages:</b> cheap, non-toxic natural dyes and simple fabrication with no high-purity silicon; works in diffuse and low light; can be made semi-transparent and coloured for windows; flexible substrates possible.</p>
<p><b>Disadvantages:</b> low efficiency, below synthetic ruthenium dyes and well below silicon PV; natural dyes fade (photodegradation); the liquid electrolyte can leak, evaporate and is corrosive; shorter lifetime than silicon cells.</p>`,
          topics: ['m3-magnetic-classes', 'm3-hysteresis-storage', 'm2-dssc'],
          notes: ['m3-magnetic-classes.3', 'm3-magnetic-classes.4', 'm3-hysteresis-storage.2', 'm2-dssc.1', 'm2-dssc.5', 'm2-dssc.6']
        }
      ]
    }
  ],
  asked: {
    'm1-kinetics-numericals': [
      {
        where: 'Q9, 10 marks',
        what: 'first-order k, t for 80%, and % remaining numericals',
        paper: 'fat-b1tb1-2026'
      }
    ],
    'm2-fuel-cells': [
      {
        where: 'Q1(a), 5 marks',
        what: 'the H₂–O₂ (alkaline) fuel cell for space vehicles: construction, ion and electron flow, reactions',
        paper: 'cat2-b1tb1'
      },
      {
        where: 'Q9(a), 10 marks',
        what: 'how a ceramic fuel cell produces electricity',
        paper: 'fat-g1tg1-2025'
      }    ],
    'm2-electrochemical-cells': [
      {
        where: 'Q1(b), 5 marks',
        what: 'Ni | Ni²⁺ || Ag⁺ | Ag: cell notation, half reactions and E(cell) by the Nernst equation',
        paper: 'cat2-b1tb1'
      },
      {
        where: 'Q1(b), 5 marks',
        what: 'Zn | Zn²⁺ (0.001 M) || Ag⁺ (0.1 M) | Ag: half reactions, net reaction and EMF',
        paper: 'cat2-b2tb2'
      },
      {
        where: 'Q5(a), 5 marks',
        what: 'find the Zn ion concentration from the measured cell potential (Nernst)',
        paper: 'cat2-g1tg1-2025'
      }    ],
    'm2-li-ion': [
      {
        where: 'Q2, 10 marks',
        what: 'Li-ion transport, charge–discharge reactions and why layered hosts allow reversible cycling',
        paper: 'cat2-b1tb1'
      },
      {
        where: 'Q3, 10 marks',
        what: 'Li-ion by graphite intercalation: diagram, mechanism, one advantage and disadvantage, uses',
        paper: 'cat2-b2tb2'
      },
      {
        where: 'Q1, 10 marks',
        what: 'Li-ion mechanism, charge and discharge equations, why layered hosts allow cycling',
        paper: 'cat2-g1tg1-2025'
      },
      {
        where: 'Q9(b), 10 marks',
        what: 'Li-ion battery function with diagram, advantages and disadvantages',
        paper: 'fat-g1tg1-2025'
      }    ],
    'm2-dssc': [
      {
        where: 'Q3, 10 marks',
        what: 'a dye-sensitized cell: components, sequence from light absorption to current, why it is efficient',
        paper: 'cat2-b1tb1'
      },
      {
        where: 'Q2, 10 marks',
        what: 'recognise the DSSC for smart windows: diagram, mechanism, principle, applications',
        paper: 'cat2-b2tb2'
      },
      {
        where: 'Q2, 10 marks',
        what: 'dye-sensitized cell with a natural pigment: diagram and each event',
        paper: 'cat2-g1tg1-2025'
      },
      {
        where: 'Q2, 10 marks',
        what: 'build a dye-based solar device and give its pros and cons',
        paper: 'fat-g1tg1-2025'
      },
      {
        where: 'Q10(b), 10 marks',
        what: 'natural-dye DSSC construction, working, pros and cons',
        paper: 'fat-b1tb1-2026'
      }
    ],
    'm2-pec-cells': [
      {
        where: 'Q3, 10 marks',
        what: 'a photosensitized photoelectrochemical cell',
        paper: 'cat2-b1tb1'
      },
      {
        where: 'Q2, 10 marks',
        what: 'a dye-on-semiconductor cell with a redox shuttle',
        paper: 'cat2-b2tb2'
      },
      {
        where: 'Q2, 10 marks',
        what: 'a pigment on a semiconductor passing electrons to make current',
        paper: 'cat2-g1tg1-2025'
      },
      {
        where: 'Q2, 10 marks',
        what: 'a photosensitive dye on a semiconductor with a redox electrolyte',
        paper: 'fat-g1tg1-2025'
      }
    ],
    'm3-why-nano': [
      {
        where: 'Q4, 10 marks',
        what: 'why nano electrical and optical properties differ from bulk',
        paper: 'cat2-b1tb1'
      },
      {
        where: 'Q3(a), 5 marks',
        what: 'why bulk and nanoscale properties differ, with an example',
        paper: 'cat2-g1tg1-2025'
      }
    ],
    'm3-synthesis': [
      {
        where: 'Q4, 10 marks',
        what: 'a bottom-up route for nanoscale silica',
        paper: 'cat2-b1tb1'
      },
      {
        where: 'Q4, 10 marks',
        what: 'the sol–gel bottom-up route',
        paper: 'cat2-b2tb2'
      },
      {
        where: 'Q3(b), 5 marks',
        what: 'a chemical route from a silica precursor to nanosilica',
        paper: 'cat2-g1tg1-2025'
      },
      {
        where: 'Q10, 10 marks',
        what: 'top-down milling or bottom-up sol-gel route to nanomaterials',
        paper: 'fat-g1tg1-2025'
      }    ],
    'm3-sol-gel': [
      {
        where: 'Q4, 10 marks',
        what: 'sol–gel silica: equations, steps, size control, pros and cons',
        paper: 'cat2-b1tb1'
      },
      {
        where: 'Q4, 10 marks',
        what: 'identify sol–gel from sol to gel network: reactions, advantages, disadvantages',
        paper: 'cat2-b2tb2'
      },
      {
        where: 'Q3(b), 5 marks',
        what: 'sol–gel silica and how size is controlled',
        paper: 'cat2-g1tg1-2025'
      },
      {
        where: 'Q10(b), 10 marks',
        what: 'steps of nano silica synthesis by sol-gel',
        paper: 'fat-g1tg1-2025'
      }    ],
    'm4-uv-vis': [
      {
        where: 'Q5(a), 5 marks',
        what: 'UV-Vis principle; Congo red vs methylene blue: chromophores, auxochromes, conjugation, transitions',
        paper: 'cat2-b1tb1'
      },
      {
        where: 'Q4, 10 marks',
        what: 'UV-Vis principle with sketch; why benzene, nitrobenzene and 4-nitrophenol differ in colour',
        paper: 'cat2-g1tg1-2025'
      },
      {
        where: 'Q4, 10 marks',
        what: 'UV-Vis principle by Beer-Lambert law and electronic transitions in identifying organic compounds',
        paper: 'fat-g1tg1-2025'
      },
      {
        where: 'Q4, 10 marks',
        what: 'UV-Vis principle with Beer–Lambert law and electronic transitions',
        paper: 'fat-b1tb1-2026'
      }
    ],
    'm4-xrays': [
      {
        where: 'Q5(b), 5 marks',
        what: 'X-ray wavelength from a 6.93 keV photon energy',
        paper: 'cat2-b1tb1'
      }
    ],
    'm4-scherrer': [
      {
        where: 'Q5(b), 5 marks',
        what: 'crystallite size by Scherrer (2θ = 44.60°, FWHM 0.95°, k = 0.9)',
        paper: 'cat2-b1tb1'
      },
      {
        where: 'Q5(b), 5 marks',
        what: 'gold nanoparticle crystallite size (2θ = 38.2°, FWHM 0.45°, λ = 0.15406 nm)',
        paper: 'cat2-b2tb2'
      },
      {
        where: 'Q5(b), 5 marks',
        what: 'crystallite size by Scherrer (2θ = 36.50°, FWHM 0.85°, λ = 1.5406 Å, k = 0.9)',
        paper: 'cat2-g1tg1-2025'
      },
      {
        where: 'Q6, 10 marks',
        what: 'crystallite size by Scherrer at 2θ = 25.61°, FWHM 0.85°',
        paper: 'fat-g1tg1-2025'
      },
      {
        where: 'Q6(b), 5 marks',
        what: 'crystallite size from p-XRD data (Scherrer)',
        paper: 'fat-b1tb1-2026'
      }
    ],
    'm2-sofc': [
      {
        where: 'Q1(a), 5 marks',
        what: 'identify the all-ceramic fuel cell (SOFC) and explain it with a diagram',
        paper: 'cat2-b2tb2'
      },
      {
        where: 'Q9(a), 10 marks',
        what: 'ceramic fuel cell: diagram, electricity generation and advantages despite high temperature',
        paper: 'fat-g1tg1-2025'
      },
      {
        where: 'Q2, 10 marks',
        what: 'SOFC construction, working, reactions, pros and cons',
        paper: 'fat-b1tb1-2026'
      }
    ],
    'm4-xrd-patterns': [
      {
        where: 'Q5(a), 5 marks',
        what: 'XRD to tell single-crystal, polycrystalline and amorphous silicon apart',
        paper: 'cat2-b2tb2'
      },
      {
        where: 'Q6, 10 marks',
        what: 'reading an XRD pattern from peak positions',
        paper: 'fat-g1tg1-2025'
      }
    ],
    'm4-bragg': [
      {
        where: 'Q5(a), 5 marks',
        what: 'the principle of XRD (Bragg law)',
        paper: 'cat2-b2tb2'
      },
      {
        where: 'Q6, 10 marks',
        what: 'XRD instrument diagram and working by Bragg equation',
        paper: 'fat-g1tg1-2025'
      },
      {
        where: 'Q6(a), 5 marks',
        what: 'XRD principle from the Bragg law; silica microstructures',
        paper: 'fat-b1tb1-2026'
      }
    ],
    'm1-carnot-cycle': [
      {
        where: 'Q1, 10 marks',
        what: 'four Carnot steps on a P-V diagram, work and efficiency, all reversible engines have equal efficiency',
        paper: 'cat1-g1tg1-2025'
      },
      {
        where: 'Q2, 10 marks',
        what: 'efficiency of a reversible engine, the processes on a PV diagram, how to maximise efficiency',
        paper: 'cat1-g2tg2-2025'
      },
      {
        where: 'Q2, 10 marks',
        what: 'show Carnot efficiency depends only on source and sink temperatures, why it cannot be 100%',
        paper: 'cat1-d2td2-2025'
      },
      {
        where: 'Q2, 10 marks',
        what: 'the Carnot cycle: four strokes, P–V diagram, significance for efficiency',
        paper: 'cat1-d1td1-2025'
      },
      {
        where: 'Q3(b), 5 marks',
        what: 'Carnot engine between 500 K and 300 K: efficiency and work for 600 J absorbed',
        paper: 'cat1-d1td1-2025'
      },
      {
        where: 'Q1, 10 marks',
        what: 'Carnot cycle on a P–V graph, four strokes, condition for 100% efficiency',
        paper: 'cat1-d1td1-2026'
      },
      {
        where: 'Q3(a), 5 marks',
        what: 'maximum work of a Carnot engine absorbing 2×10⁶ J between 90 °C and 10 °C',
        paper: 'cat1-d1td1-2026'
      },
      {
        where: 'Q3(b), 5 marks',
        what: 'efficiency and work of a Carnot engine from heat absorbed and rejected',
        paper: 'cat1-b2tb2-2026'
      },
      {
        where: 'Q2, 10 marks',
        what: 'derive efficiency and work of a Carnot cycle with a diagram',
        paper: 'cat1-b1tb1-2026'
      },
      {
        where: 'Q1, 10 marks',
        what: 'four stages of the reversible engine and why efficiency is limited by the reservoir temperatures',
        paper: 'fat-g1tg1-2025'
      }    ],
    'm1-second-law-entropy': [
      {
        where: 'Q1, 10 marks',
        what: 'proof that reversible engines between two temperatures share one efficiency (second law)',
        paper: 'cat1-g1tg1-2025'
      },
      {
        where: 'Q2, 10 marks',
        what: 'efficiency of a reversible engine',
        paper: 'cat1-g2tg2-2025'
      },
      {
        where: 'Q2, 10 marks',
        what: 'why efficiency can never reach 100%',
        paper: 'cat1-d2td2-2025'
      },
      {
        where: 'Q3(b), 5 marks',
        what: 'entropy change for 1 mol of gas going from 25 dm3 at 250 K to 40 dm3 at 350 K',
        paper: 'cat1-d2td2-2025'
      },
      {
        where: 'Q2, 10 marks',
        what: 'Carnot cycle and the second law',
        paper: 'cat1-d1td1-2025'
      },
      {
        where: 'Q2, 10 marks',
        what: 'state the second law of thermodynamics',
        paper: 'cat1-d1td1-2026'
      },
      {
        where: 'Q3(b), 5 marks',
        what: 'entropy change of an ideal gas when pressure and temperature both change',
        paper: 'cat1-b1tb1-2026'
      },
      {
        where: 'Q1, 10 marks',
        what: 'entropy balance round the reversible cycle giving the maximum efficiency',
        paper: 'fat-g1tg1-2025'
      }
    ],
    'm1-free-energy': [
      {
        where: 'Q2, 10 marks',
        what: 'predicting spontaneity from enthalpy and entropy; adsorption with negative entropy change',
        paper: 'cat1-g1tg1-2025'
      },
      {
        where: 'Q1, 10 marks',
        what: 'Gibbs free energy and spontaneity for exothermic, endothermic and equilibrium conditions',
        paper: 'cat1-d2td2-2025'
      },
      {
        where: 'Q3(a), 5 marks',
        what: 'delta G at 298 K and 500 K for delta H = +25 kJ/mol and delta S = +80 J/mol/K',
        paper: 'cat1-d2td2-2025'
      },
      {
        where: 'Q3(a), 5 marks',
        what: 'spontaneity from ΔH = +40 kJ/mol and ΔS = +100 J/mol·K at 298 K',
        paper: 'cat1-d1td1-2025'
      },
      {
        where: 'Q2, 10 marks',
        what: 'change in Gibbs free energy for a spontaneous reaction',
        paper: 'cat1-d1td1-2026'
      },
      {
        where: 'Q3(b), 5 marks',
        what: 'spontaneity at 25 °C with ΔS = 110 J/mol·K and ΔH = 30 kJ/mol',
        paper: 'cat1-d1td1-2026'
      },
      {
        where: 'Q2, 10 marks',
        what: 'how an endothermic reaction can be spontaneous, Gibbs equation',
        paper: 'cat1-b2tb2-2026'
      },
      {
        where: 'Q3(a), 5 marks',
        what: 'Gibbs free energy change from given enthalpy and entropy changes at 25 °C',
        paper: 'cat1-b2tb2-2026'
      }
    ],
    'm1-gibbs-helmholtz-third-law': [
      {
        where: 'Q2, 10 marks',
        what: 'use the Gibbs-Helmholtz equation; why adsorption can be spontaneous at low temperature',
        paper: 'cat1-g1tg1-2025'
      },
      {
        where: 'Q1, 10 marks',
        what: 'delta G = delta H - T delta S and the four sign cases',
        paper: 'cat1-d2td2-2025'
      },
      {
        where: 'Q2, 10 marks',
        what: 'effect of signs of enthalpy and entropy change on spontaneity, with examples',
        paper: 'cat1-b2tb2-2026'
      }
    ],
    'm1-expansion-work': [
      {
        where: 'Q3(a), 5 marks',
        what: 'work, heat, delta U and delta H for 1 mol expanding isothermally from 5 L to 20 L at 300 K',
        paper: 'cat1-g1tg1-2025'
      },
      {
        where: 'Q1, 10 marks',
        what: 'reversible and irreversible isothermal work with a diagram; delta U for an ideal gas',
        paper: 'cat1-g2tg2-2025'
      },
      {
        where: 'Q3(a), 5 marks',
        what: 'work for 1 mol expanding isothermally from 10 atm to 5 atm at 300 K',
        paper: 'cat1-g2tg2-2025'
      },
      {
        where: 'Q1, 10 marks',
        what: 'isothermal and adiabatic processes: work, heat, change in internal energy, with diagrams',
        paper: 'cat1-d1td1-2025'
      },
      {
        where: 'Q2, 10 marks',
        what: 'work done in an isothermal reversible process',
        paper: 'cat1-d1td1-2026'
      },
      {
        where: 'Q1, 10 marks',
        what: 'derive work of isothermal reversible expansion of an ideal gas',
        paper: 'cat1-b2tb2-2026'
      },
      {
        where: 'Q1, 10 marks',
        what: 'maximum work in reversible isothermal and adiabatic expansion with PV diagram',
        paper: 'cat1-b1tb1-2026'
      },
      {
        where: 'Q3(a), 5 marks',
        what: 'q, w, change in U and H for isothermal reversible doubling of volume at 273 K',
        paper: 'cat1-b1tb1-2026'
      },
      {
        where: 'Q8(a), 5 marks',
        what: 'work, change in U and H for N2 expanding irreversibly and isothermally against 5 atm',
        paper: 'fat-g1tg1-2025'
      }    ],
    'm1-zeroth-first-law': [
      {
        where: 'Q1, 10 marks',
        what: 'change in internal energy in an isothermal process of an ideal gas',
        paper: 'cat1-g2tg2-2025'
      },
      {
        where: 'Q1, 10 marks',
        what: 'first law applied to isothermal and adiabatic processes',
        paper: 'cat1-d1td1-2025'
      },
      {
        where: 'Q2, 10 marks',
        what: 'state the first law of thermodynamics',
        paper: 'cat1-d1td1-2026'
      },
      {
        where: 'Q1, 10 marks',
        what: 'state the first law and derive isothermal reversible work',
        paper: 'cat1-b2tb2-2026'
      },
      {
        where: 'Q1(a), 5 marks',
        what: 'practical importance of the zeroth law',
        paper: 'fat-b1tb1-2026'
      }
    ],
    'm1-enthalpy-heat-capacity': [
      {
        where: 'Q3, 10 marks',
        what: 'delta H for an isothermal ideal gas; using Cp = 5R/2 for heating at constant pressure',
        paper: 'cat1-g1tg1-2025'
      },
      {
        where: 'Q3(b), 5 marks',
        what: 'entropy of heating 5 mol at constant pressure when only Cv is given',
        paper: 'cat1-g2tg2-2025'
      },
      {
        where: 'Q3(b), 5 marks',
        what: 'get Cp from the given Cv before computing entropy change',
        paper: 'cat1-b1tb1-2026'
      }
    ],
    'm1-thermo-numericals': [
      {
        where: 'Q3, 10 marks',
        what: 'isothermal work and heat, and entropy of heating at constant pressure',
        paper: 'cat1-g1tg1-2025'
      },
      {
        where: 'Q3, 10 marks',
        what: 'isothermal work from pressures; entropy of heating 5 mol from 350 K to 800 K',
        paper: 'cat1-g2tg2-2025'
      },
      {
        where: 'Q3, 10 marks',
        what: 'delta G at two temperatures; entropy change with both T and V changing',
        paper: 'cat1-d2td2-2025'
      },
      {
        where: 'Q3, 10 marks',
        what: 'ΔG spontaneity and Carnot efficiency numericals',
        paper: 'cat1-d1td1-2025'
      },
      {
        where: 'Q3, 10 marks',
        what: 'Carnot work and ΔG spontaneity numericals',
        paper: 'cat1-d1td1-2026'
      },
      {
        where: 'Q3, 5+5 marks',
        what: 'Gibbs free energy and Carnot engine numericals',
        paper: 'cat1-b2tb2-2026'
      },
      {
        where: 'Q3, 5+5 marks',
        what: 'isothermal work and entropy change with changing T and P',
        paper: 'cat1-b1tb1-2026'
      },
      {
        where: 'Q8(a), 5 marks',
        what: 'irreversible isothermal expansion work with unit conversion',
        paper: 'fat-g1tg1-2025'
      },
      {
        where: 'Q9, 10 marks',
        what: 'entropy change and isothermal work numericals',
        paper: 'fat-b1tb1-2026'
      }
    ],
    'm1-catalysis': [
      {
        where: 'Q4(a), 5 marks',
        what: 'how a catalyst changes rate, with a labelled energy diagram',
        paper: 'cat1-g1tg1-2025'
      },
      {
        where: 'Q5, 10 marks',
        what: 'role of catalysts with an energy diagram; two homogeneous and two heterogeneous examples with equations',
        paper: 'cat1-g2tg2-2025'
      },
      {
        where: 'Q5, 10 marks',
        what: 'activation energy and its importance on the methyl isonitrile profile',
        paper: 'cat1-d2td2-2025'
      },
      {
        where: 'Q5, 10 marks',
        what: 'effect of a catalyst on the rate of reaction',
        paper: 'cat1-d1td1-2026'
      }
    ],
    'm1-integrated-rate': [
      {
        where: 'Q4(b), 5 marks',
        what: 'first-order decomposition of ammonium nitrate: k and half-life from 5.0 g falling to 0.5 g in 15 min',
        paper: 'cat1-g1tg1-2025'
      },
      {
        where: 'Q4(b), 5 marks',
        what: 'rate constant from a 30 min half-life of ester hydrolysis',
        paper: 'cat1-g2tg2-2025'
      },
      {
        where: 'Q4, 10 marks',
        what: 'zero, first and second order plots; first-order k and half-life from 0.4 to 0.1 mol/L in 60 min',
        paper: 'cat1-d2td2-2025'
      },
      {
        where: 'Q4(b), 5 marks',
        what: 'first-order reaction, 70% complete in 12 h: time for 90%',
        paper: 'cat1-d1td1-2025'
      },
      {
        where: 'Q5, 10 marks',
        what: 'rate constant from the Arrhenius plot for CH₃NC isomerisation (first order)',
        paper: 'cat1-d1td1-2025'
      },
      {
        where: 'Q4, 10 marks',
        what: 'half-life of a first-order reaction and time for 80% completion',
        paper: 'cat1-d1td1-2026'
      },
      {
        where: 'Q4(b), 5 marks',
        what: 'half-life of a first-order reaction from its rate constant',
        paper: 'cat1-b2tb2-2026'
      },
      {
        where: 'Q4(b) and Q5, 5 and 10 marks',
        what: 'rate constant and time for 80% completion from half-life; differential equations and linear plots for zero, first and second order',
        paper: 'cat1-b1tb1-2026'
      },
      {
        where: 'Q8(b), 5 marks',
        what: 'first-order SO2Cl2 decomposition with half-life 8 min: time to fall to 1 percent',
        paper: 'fat-g1tg1-2025'
      },
      {
        where: 'Q1(b), 5 marks',
        what: 'pseudo-first-order reaction with an example',
        paper: 'fat-b1tb1-2026'
      }
    ],
    'm1-rate-law': [
      {
        where: 'Q4(a), 5 marks',
        what: 'factors affecting rate and the effect of temperature on k',
        paper: 'cat1-g2tg2-2025'
      },
      {
        where: 'Q4(a), 5 marks',
        what: 'second-order characteristics compared with first and zero order',
        paper: 'cat1-d2td2-2025'
      },
      {
        where: 'Q4(a), 5 marks',
        what: 'why order can be fractional or zero while molecularity is a whole number',
        paper: 'cat1-d1td1-2025'
      },
      {
        where: 'Q4(a), 5 marks',
        what: 'rate expression for first-order kinetics',
        paper: 'cat1-d1td1-2026'
      },
      {
        where: 'Q5, 10 marks',
        what: 'define rate, rate law, order and molecularity and compare order with molecularity',
        paper: 'cat1-b2tb2-2026'
      },
      {
        where: 'Q5, 10 marks',
        what: 'differential rate equations of zero, first and second order reactions',
        paper: 'cat1-b1tb1-2026'
      }
    ],
    'm1-collision-arrhenius': [
      {
        where: 'Q5, 10 marks',
        what: 'effect of temperature by collision theory, energy distribution curves, Arrhenius equation terms',
        paper: 'cat1-g1tg1-2025'
      },
      {
        where: 'Q4(a), 5 marks',
        what: 'factors affecting rate and how temperature changes k (Arrhenius)',
        paper: 'cat1-g2tg2-2025'
      },
      {
        where: 'Q5, 10 marks',
        what: 'state the Arrhenius equation, temperature effect, activation energy profile',
        paper: 'cat1-d2td2-2025'
      },
      {
        where: 'Q5, 10 marks',
        what: 'Arrhenius equation, temperature dependence and activation energy from the plot, with methyl isonitrile',
        paper: 'cat1-d1td1-2025'
      },
      {
        where: 'Q5, 10 marks',
        what: 'activation energy, temperature, energy profile and activated complex',
        paper: 'cat1-d1td1-2026'
      },
      {
        where: 'Q4(a), 5 marks',
        what: 'why more concentration speeds up a reaction (collisions)',
        paper: 'cat1-b2tb2-2026'
      },
      {
        where: 'Q4(a), 5 marks',
        what: 'why higher temperature raises the rate constant, with diagram and Arrhenius equation',
        paper: 'cat1-b1tb1-2026'
      }    ],
    'm2-electrolysis': [
    ],
    'm3-ohm-resistivity': [
    ],
    'm3-band-theory': [
    ],
    'm2-photovoltaics': [
    ],
    'm2-pemfc': [
    ],
    'm3-superconductors': [
      {
        where: 'Q3, 10 marks',
        what: 'characteristics and five uses of YBa2Cu3O7',
        paper: 'fat-g1tg1-2025'
      },
      {
        where: 'Q7, 10 marks',
        what: 'superconductors and Meissner effect, examples, four applications',
        paper: 'fat-b1tb1-2026'
      }
    ],
    'm3-magnetic-classes': [
      {
        where: 'Q7, 10 marks',
        what: 'distinguish dia, para and ferromagnetic materials and five applications',
        paper: 'fat-g1tg1-2025'
      },
      {
        where: 'Q10(a), 10 marks',
        what: 'ferromagnetic vs antiferromagnetic, two applications',
        paper: 'fat-b1tb1-2026'
      }
    ],
    'm3-hysteresis-storage': [
    ],
    'm3-coolants': [
    ],
    'm2-batteries': [
      {
        where: 'Q1, 10 marks',
        what: 'rechargeable intercalation battery compared with solution redox batteries',
        paper: 'cat2-g1tg1-2025'
      }
    ],
    'm4-spectroscopy': [
      {
        where: 'Q4, 10 marks',
        what: 'identify the spectroscopy for 200-800 nm radiation',
        paper: 'cat2-g1tg1-2025'
      }
    ],
    'm3-magnetic-basics': [
      {
        where: 'Q7, 10 marks',
        what: 'diamagnetic, paramagnetic and ferromagnetic behaviour in a field',
        paper: 'fat-g1tg1-2025'
      }
    ],
    'm3-milling': [
      {
        where: 'Q10(a), 10 marks',
        what: 'ball milling as the mechanical route to nanomaterials, schematic and limitations',
        paper: 'fat-g1tg1-2025'
      },
      {
        where: 'Q3, 10 marks',
        what: 'top-down approach (ball milling) with diagram and limitations',
        paper: 'fat-b1tb1-2026'
      }
    ],
    'm4-beer-lambert': [
      {
        where: 'Q4, 10 marks',
        what: 'working principle of UV-Vis using the Beer-Lambert law',
        paper: 'fat-g1tg1-2025'
      },
      {
        where: 'Q4, 10 marks',
        what: 'Beer–Lambert law in the UV-Vis working principle',
        paper: 'fat-b1tb1-2026'
      }
    ],
    'm5-comp-intro': [
      {
        where: 'Q5(a), 5 marks',
        what: 'merits of computational chemistry compared with conventional chemistry',
        paper: 'fat-g1tg1-2025'
      }
    ],
    'm5-molecular-orbitals': [
      {
        where: 'Q5(b), 5 marks',
        what: 'MO treatment of a diatomic with the time-independent Schrodinger equation',
        paper: 'fat-g1tg1-2025'
      }    ],
    'm5-potential-energy-surface': [
      {
        where: 'Q5, 10 marks',
        what: 'short note on potential energy curve and surface',
        paper: 'fat-b1tb1-2026'
      }
    ],
    'm5-geometry-frequency': [
      {
        where: 'Q8, 10 marks',
        what: 'geometry optimisation workflow and use in reaction mechanisms',
        paper: 'fat-b1tb1-2026'
      }
    ]
  }
});
