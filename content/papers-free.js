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
      id: 'cat1-f1tf1-2025w',
      kind: 'actual',
      title: 'CAT-1 · Slot F1+TF1 · January 2026',
      sub: 'Actual paper · Winter 2025–26'
    },
    {
      id: 'fat-g1tg1-2025',
      kind: 'actual',
      title: 'FAT · Slot G1+TG1 · Nov 2025',
      sub: 'Actual paper · Fall 2025–26',
      exam: 'fat'
    },
    {
      id: 'fat-f1tf1-2025',
      kind: 'actual',
      title: 'FAT · Slot F1+TF1 · Nov/Dec 2025',
      sub: 'Actual paper · Fall 2025–26',
      exam: 'fat'
    }
  ],
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
<p><b>Diagram to draw:</b> a container of KOH solution with two porous graphite electrodes (Pt or Ag catalyst). H<sub>2</sub> enters at the anode (−) on the left, O<sub>2</sub> at the cathode (+) on the right, both at about 50 atm. Water and excess H<sub>2</sub> leave on the anode side. An external wire with a load joins the electrodes. Arrows: e<sup>−</sup> from anode to cathode through the wire; OH<sup>−</sup> from cathode to anode through the electrolyte.</p>
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
          topics: ['m2-fuel-cells', 'm2-electrochemical-cells']
        },
        {
          n: '2',
          marks: 10,
          co: '2',
          bl: '3',
          prompt: `<p>A rechargeable electrochemical cell employed in electric vehicles and renewable-energy storage systems operates through the reversible movement of a light metal species between two layered host structures. Using a suitable diagram, analyse the ion and electron transport mechanism, formulate the electrode and overall charge–discharge reactions, and justify how the layered host structures facilitate reversible cycling and high energy density.</p>`,
          answer: `<div class="note heads-up"><p>Notes on adsorption (why it can be spontaneous when entropy falls) are to be added soon. Part of the answer below comes from standard chemistry, not yet from these notes.</p></div>
<p>This is the <b>lithium-ion battery</b>: Li<sup>+</sup> shuttles between a layered LiCoO<sub>2</sub> cathode and a layered graphite anode (a "rocking-chair" cell). It holds no metallic lithium.</p>
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
          topics: ['m2-li-ion', 'm2-batteries']
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
          topics: ['m2-dssc', 'm2-pec-cells']
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
          topics: ['m3-why-nano', 'm3-synthesis', 'm3-sol-gel']
        },
        {
          n: '5',
          marks: '5+5',
          co: '3',
          bl: '3',
          prompt: `<p><b>(a)</b> A series of organic compounds exhibits different absorption characteristics when interacting with electromagnetic radiation. Explain the fundamental principle of the appropriate spectroscopy. Using Congo red and methylene blue as representative coloured compounds, compare their absorption patterns and account for their intense colours in terms of chromophores, auxochromes, extent of conjugation and the electronic transitions involved. Relate the molecular structures of these compounds to their characteristic absorption in the visible region.</p>
<p><b>(b)</b> A crystalline material gives a diffraction peak at 2θ = 44.60° with an FWHM of 0.95° when analysed using X-rays of energy 6.93 keV. Taking the shape factor k = 0.9, determine the X-ray wavelength and the average crystallite size using the Scherrer equation, and critically comment on the significance of the calculated crystallite size in relation to the material's nanoscale properties. Given: h = 6.626 × 10<sup>−34</sup> J s, 1 eV = 1.602 × 10<sup>−19</sup> J.</p>`,
          answer: `<div class="note heads-up"><p>The molecular orbital diagrams for diatomic molecules beyond H<sub>2</sub> are not in the notes yet and will be added soon. The MO part below is standard chemistry.</p></div>
<p><b>(a) UV-Visible spectroscopy</b></p>
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
          topics: ['m4-uv-vis', 'm4-scherrer', 'm4-xrays']
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
          topics: ['m2-sofc', 'm2-electrochemical-cells']
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
          topics: ['m2-dssc', 'm2-pec-cells']
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
          topics: ['m2-li-ion']
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
          topics: ['m3-sol-gel', 'm3-synthesis']
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
          topics: ['m4-xrd-patterns', 'm4-bragg', 'm4-scherrer']
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
          topics: ['m1-expansion-work']
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
          topics: ['m1-carnot-cycle']
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
          topics: ['m1-expansion-work', 'm1-second-law-entropy', 'm1-enthalpy-heat-capacity', 'm1-thermo-numericals']
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
          topics: ['m1-collision-arrhenius', 'm1-integrated-rate']
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
          topics: ['m1-integrated-rate', 'm1-rate-law']
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
          topics: ['m1-zeroth-first-law', 'm1-expansion-work']
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
          topics: ['m1-free-energy', 'm1-gibbs-helmholtz-third-law']
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
          topics: ['m1-free-energy', 'm1-carnot-cycle', 'm1-thermo-numericals']
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
          topics: ['m1-collision-arrhenius', 'm1-integrated-rate']
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
          topics: ['m1-rate-law']
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
          topics: ['m1-carnot-cycle']
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
          topics: ['m1-zeroth-first-law', 'm1-second-law-entropy', 'm1-expansion-work', 'm1-free-energy']
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
          topics: ['m1-carnot-cycle', 'm1-free-energy', 'm1-thermo-numericals']
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
          topics: ['m1-rate-law', 'm1-integrated-rate']
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
          topics: ['m1-collision-arrhenius', 'm1-catalysis']
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
          topics: ['m2-li-ion', 'm2-batteries']
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
          topics: ['m2-dssc', 'm2-pec-cells']
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
          topics: ['m3-why-nano', 'm3-synthesis', 'm3-sol-gel']
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
          topics: ['m4-uv-vis', 'm4-spectroscopy']
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
          topics: ['m2-electrochemical-cells', 'm4-scherrer']
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
          topics: ['m1-carnot-cycle', 'm1-second-law-entropy']
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
          topics: ['m1-free-energy', 'm1-gibbs-helmholtz-third-law']
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
          topics: ['m1-expansion-work', 'm1-thermo-numericals', 'm1-enthalpy-heat-capacity']
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
          topics: ['m1-catalysis', 'm1-integrated-rate']
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
          topics: ['m1-collision-arrhenius']
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
          topics: ['m1-expansion-work', 'm1-zeroth-first-law']
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
          topics: ['m1-carnot-cycle', 'm1-second-law-entropy']
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
          topics: ['m1-expansion-work', 'm1-thermo-numericals', 'm1-enthalpy-heat-capacity']
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
          topics: ['m1-collision-arrhenius', 'm1-integrated-rate', 'm1-rate-law']
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
          topics: ['m1-catalysis']
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
          topics: ['m1-free-energy', 'm1-gibbs-helmholtz-third-law']
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
          topics: ['m1-carnot-cycle', 'm1-second-law-entropy']
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
          topics: ['m1-free-energy', 'm1-thermo-numericals', 'm1-second-law-entropy']
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
          topics: ['m1-integrated-rate', 'm1-rate-law']
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
          topics: ['m1-collision-arrhenius', 'm1-catalysis']
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
          topics: ['m1-expansion-work', 'm1-zeroth-first-law']
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
          topics: ['m1-carnot-cycle', 'm1-second-law-entropy']
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
          topics: ['m1-free-energy', 'm1-carnot-cycle', 'm1-thermo-numericals']
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
          topics: ['m1-rate-law', 'm1-integrated-rate']
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
          topics: ['m1-collision-arrhenius', 'm1-integrated-rate']
        }
      ]
    },
    {
      id: 'cat1-f1tf1-2025w',
      kind: 'actual',
      title: 'CAT-1 · Slot F1+TF1 · January 2026',
      short: 'F1+TF1 paper',
      sub: 'Actual paper · Winter 2025–26',
      meta: [['Slot', 'F1+TF1'], ['Date', 'January 2026'], ['Duration', '90 minutes'], ['Max marks', '50'], ['Programme', 'B.Tech.']],
      instructions: `<b>General instructions:</b> Write only your registration number on the question paper in the box provided and do not write other information. Use statistical tables supplied from the exam cell as necessary. Use graph sheets supplied from the exam cell as necessary. Only non-programmable calculator without storage is permitted. Answer all questions.`,
      questions: [
        {
          n: '1a',
          marks: 5,
          co: '1',
          bl: '1',
          prompt: `<p>How galvanic cells are different from electrolytic cells; explain with an example of each? Support your answer with a valid justification.</p>`,
          answer: `<p>A <b>galvanic (voltaic) cell</b> converts the energy of a spontaneous redox reaction into electrical energy. An <b>electrolytic cell</b> uses electrical energy from an external source to force a non-spontaneous reaction.</p>
<table class="tbl"><thead><tr><th>Feature</th><th>Galvanic cell</th><th>Electrolytic cell</th></tr></thead><tbody>
<tr><td>Energy change</td><td>Chemical to electrical</td><td>Electrical to chemical</td></tr>
<tr><td>Reaction</td><td>Spontaneous, ΔG &lt; 0, E<sub>cell</sub> &gt; 0</td><td>Non-spontaneous, ΔG &gt; 0, needs an applied voltage above E<sub>cell</sub></td></tr>
<tr><td>Anode</td><td>Negative; oxidation</td><td>Positive; oxidation</td></tr>
<tr><td>Cathode</td><td>Positive; reduction</td><td>Negative; reduction</td></tr>
<tr><td>Set-up</td><td>Two half-cells joined by a salt bridge</td><td>Usually one vessel, both electrodes in the same electrolyte</td></tr>
<tr><td>Electron flow</td><td>Anode to cathode through the wire, pushed by the cell</td><td>Anode to cathode through the wire, pushed by the battery</td></tr></tbody></table>
<p><b>Example of galvanic cell: the Daniell cell.</b> Zn | Zn<sup>2+</sup> || Cu<sup>2+</sup> | Cu. Anode: Zn → Zn<sup>2+</sup> + 2e<sup>−</sup>. Cathode: Cu<sup>2+</sup> + 2e<sup>−</sup> → Cu. E°<sub>cell</sub> = 0.34 − (−0.76) = +1.10 V, so the reaction runs by itself.</p>
<p><b>Example of electrolytic cell: electrolysis of molten NaCl.</b> Cathode: Na<sup>+</sup> + e<sup>−</sup> → Na. Anode: 2Cl<sup>−</sup> → Cl<sub>2</sub> + 2e<sup>−</sup>. The reaction 2NaCl → 2Na + Cl<sub>2</sub> does not occur on its own, and a battery has to supply the energy.</p>
<p><b>Justification:</b> in the Daniell cell E°<sub>cell</sub> is positive and ΔG° = −nFE° = −2 × 96485 × 1.10 = −212 kJ/mol, so it can drive a load. For NaCl the sign is reversed, so an external voltage larger than this magnitude has to be applied.</p>
<div class="note trap"><p>The sign labels of the electrodes swap between the two cells (anode negative in galvanic, positive in electrolytic), but oxidation always happens at the anode.</p></div>
<div class="note exam"><p>Five marks: a comparison table with at least four rows (2), one example each with half reactions (2), and the ΔG justification (1).</p></div>`,
          topics: ['m2-electrochemical-cells', 'm2-electrolysis']
        },
        {
          n: '1b',
          marks: 5,
          co: '1',
          bl: '2',
          prompt: `<p>How conductivity of metals and semi-conductors varies with temperature? Explain.</p>`,
          answer: `<p><b>Metals: conductivity falls as temperature rises.</b></p>
<ul><li>In a metal the valence and conduction bands overlap, so a very large number of free electrons is available at all temperatures. Heating does not add noticeably to this number.</li>
<li>Heating makes the lattice ions vibrate with larger amplitude, so electrons collide with them more often. Their mean free path and mobility drop.</li>
<li>Resistivity therefore rises roughly linearly: ρ<sub>T</sub> = ρ<sub>0</sub>[1 + α(T − T<sub>0</sub>)], so conductivity σ = 1/ρ falls.</li></ul>
<p><b>Semiconductors: conductivity rises as temperature rises.</b></p>
<ul><li>At 0 K the valence band is full, the conduction band is empty, and the gap E<sub>g</sub> is small (Si about 1.1 eV, Ge about 0.7 eV). The material behaves as an insulator.</li>
<li>On heating, more electrons gain enough energy to jump across the gap, leaving holes behind. The number of charge carriers grows roughly as n ∝ e<sup>−E<sub>g</sub>/2kT</sup>.</li>
<li>Lattice scattering also increases in a semiconductor and lowers the mobility a little, but the exponential growth in carriers is far larger, so σ rises overall and resistivity falls.</li></ul>
<figure data-fig="m3-metal-resistivity-temperature"></figure>
<p>On a graph of resistivity against T, the metal curve slopes upward and the semiconductor curve slopes downward.</p>
<div class="note trap"><p>Do not say semiconductors have fewer collisions at high T. The point is that carrier number rises faster than mobility falls. At very high T a doped semiconductor becomes intrinsic.</p></div>
<div class="note exam"><p>Five marks: the opposite trends (1), the mechanism for metals (2) and for semiconductors (2). A small sketch of resistivity against T for both earns the diagram mark.</p></div>`,
          topics: ['m3-ohm-resistivity', 'm3-band-theory']
        },
        {
          n: '2a',
          marks: 5,
          co: '1',
          bl: '2',
          prompt: `<p>Explain the working principle of a photovoltaic (PV) cell and discuss the significance of bandgap of semiconductors on the efficiency of PV.</p>`,
          answer: `<p><b>Principle.</b> A PV cell converts sunlight directly into electricity using a semiconductor p–n junction (commonly silicon).</p>
<ol><li>Where the n-type and p-type layers meet, electrons diffuse into the p side and holes into the n side. This leaves a <b>depletion region</b> with a built-in electric field pointing from n to p.</li>
<li>A photon with energy hν ≥ E<sub>g</sub> is absorbed and lifts an electron from the valence band to the conduction band, creating an electron–hole pair.</li>
<li>The built-in field sweeps electrons to the n side and holes to the p side.</li>
<li>Metal contacts collect the charges. Electrons flow through the external load, giving a DC photocurrent, and recombine with holes at the other contact.</li></ol>
<figure data-fig="m2-pv-pn-depletion"></figure>
<p><b>Significance of the bandgap</b></p>
<ul><li><b>Photons with hν &lt; E<sub>g</sub> are not absorbed</b>. A large gap wastes much of the solar spectrum and lowers the current.</li>
<li><b>Photons with hν &gt; E<sub>g</sub> lose the excess energy as heat</b> (the electron relaxes to the band edge). A small gap wastes more energy this way and gives a low voltage, because the open-circuit voltage is limited by E<sub>g</sub>/e.</li>
<li>Current falls with rising E<sub>g</sub> while voltage rises with it, so the product has an optimum at about 1.1–1.5 eV. Silicon (1.1 eV) is close to this, and the theoretical limit for a single junction is about 33%.</li></ul>
<div class="worked"><div class="given"><p>Longest wavelength that Si (E<sub>g</sub> = 1.1 eV) can absorb. Use λ (nm) = 1240 / E (eV).</p></div>
<div class="solve"><p>λ = 1240 / 1.1 = 1127 nm.</p></div>
<div class="result">Si absorbs visible and near-infrared light up to about 1130 nm.</div></div>
<div class="note trap"><p>A bigger bandgap does not mean a better cell. It raises the voltage but cuts the current, so the optimum is in the middle.</p></div>
<div class="note exam"><p>Five marks: p–n junction and photon absorption steps with a neat diagram (3), the effect of too large and too small a gap with the optimum (2).</p></div>`,
          topics: ['m2-photovoltaics']
        },
        {
          n: '2b',
          marks: 5,
          co: '1',
          bl: '2',
          prompt: `<p>Explain the function of each component of a dye-sensitized solar cell and how oxidized dye will be regenerated.</p>`,
          answer: `<p>A dye-sensitized solar cell (DSSC) separates light absorption (done by a dye) from charge transport (done by a wide-gap semiconductor and an electrolyte).</p>
<figure data-fig="m2-dssc-schematic"></figure>
<table class="tbl"><thead><tr><th>Component</th><th>Function</th></tr></thead><tbody>
<tr><td>Transparent conducting glass (FTO or ITO) on both sides</td><td>Lets light in and collects electrons as the front and back contacts</td></tr>
<tr><td>Nanocrystalline TiO<sub>2</sub> film (photoanode)</td><td>Wide-gap semiconductor with a very large surface area. It carries the dye and accepts electrons from the excited dye</td></tr>
<tr><td>Dye sensitizer (for example a Ru complex)</td><td>Absorbs visible light, goes to an excited state and injects an electron into the TiO<sub>2</sub> conduction band</td></tr>
<tr><td>Electrolyte with I<sup>−</sup>/I<sub>3</sub><sup>−</sup> redox couple</td><td>Carries charge between the electrodes and gives electrons back to the oxidised dye</td></tr>
<tr><td>Counter electrode (Pt or carbon-coated)</td><td>Catalyses the reduction of I<sub>3</sub><sup>−</sup> back to I<sup>−</sup> using electrons returning through the external circuit</td></tr></tbody></table>
<p><b>Dye regeneration (the cycle)</b></p>
<div class="eq">Dye + hν → Dye*</div>
<div class="eq">Dye* → Dye<sup>+</sup> + e<sup>−</sup>(TiO<sub>2</sub>)</div>
<div class="eq">2Dye<sup>+</sup> + 3I<sup>−</sup> → 2Dye + I<sub>3</sub><sup>−</sup> (regeneration)</div>
<div class="eq">I<sub>3</sub><sup>−</sup> + 2e<sup>−</sup> → 3I<sup>−</sup> (counter electrode)</div>
<p>The iodide in the electrolyte donates an electron to the oxidised dye, restoring it to the neutral ground state. The iodide is oxidised to triiodide, which diffuses to the counter electrode and is reduced back to iodide with the electrons that have travelled through the load. Nothing is consumed overall.</p>
<div class="note trap"><p>The electron does not pass through the dye to the electrolyte directly. It goes from the dye into TiO<sub>2</sub> and round the external circuit; the dye gets its replacement electron from I<sup>−</sup>.</p></div>
<div class="note exam"><p>Five marks: each of the five components with its role (3) and the regeneration reactions I<sup>−</sup> to I<sub>3</sub><sup>−</sup> to I<sup>−</sup> (2).</p></div>`,
          topics: ['m2-dssc']
        },
        {
          n: '3a',
          marks: 5,
          co: '2',
          bl: '3',
          prompt: `<p>Write the anodic and cathodic reaction of a solid oxide fuel cell (SOFC) and also explain its advantages over proton exchange membrane fuel cell (PEMFC).</p>`,
          answer: `<p>The SOFC has a solid ceramic electrolyte, yttria-stabilized zirconia (YSZ), that conducts <b>oxide ions (O<sup>2−</sup>)</b> at 800–1000 °C. It has a porous Ni–YSZ anode and a porous LSM cathode.</p>
<figure data-fig="m2-sofc-diagram"></figure>
<div class="eq">Anode: H<sub>2</sub> + O<sup>2−</sup> → H<sub>2</sub>O + 2e<sup>−</sup></div>
<div class="eq">Cathode: ½O<sub>2</sub> + 2e<sup>−</sup> → O<sup>2−</sup></div>
<div class="eq">Overall: H<sub>2</sub> + ½O<sub>2</sub> → H<sub>2</sub>O</div>
<p>With carbon monoxide as fuel, the anode reaction is CO + O<sup>2−</sup> → CO<sub>2</sub> + 2e<sup>−</sup>. Oxide ions travel from the cathode to the anode through the electrolyte; electrons travel through the external circuit.</p>
<p><b>Advantages over the PEMFC</b></p>
<ul><li><b>No platinum catalyst.</b> The high temperature makes the reactions fast, so cheap nickel works. The PEMFC needs Pt.</li>
<li><b>Fuel flexibility.</b> It can use H<sub>2</sub>, CO, coal gas and reformed hydrocarbons, and CO is a fuel, not a poison. In a PEMFC even ppm of CO poisons the Pt.</li>
<li><b>Sulphur tolerance</b> is relatively high, so less fuel clean-up is needed.</li>
<li><b>Higher efficiency</b> (over 60% fuel to electricity) and the hot exhaust can run a turbine or give heat (cogeneration).</li>
<li><b>Solid electrolyte</b>: no leakage, no membrane to keep wet, so no water management problem. A PEMFC membrane must stay hydrated.</li></ul>
<div class="note trap"><p>In an SOFC the mobile ion is O<sup>2−</sup> and water forms at the <b>anode</b>. In a PEMFC the mobile ion is H<sup>+</sup> and water forms at the cathode. A good drawback to mention: the high temperature means slow start-up and material stress.</p></div>
<div class="note exam"><p>Five marks: the two electrode reactions (2) and three or more advantages with reasons (3).</p></div>`,
          topics: ['m2-sofc', 'm2-pemfc']
        },
        {
          n: '3b',
          marks: 5,
          co: '2',
          bl: '3',
          prompt: `<p>Define superconductors. Explain the Meissner effect phenomenon and its applications.</p>`,
          answer: `<p><b>Definition.</b> A superconductor is a material whose electrical resistance drops to <b>exactly zero</b> when it is cooled below a critical temperature T<sub>c</sub>. Examples: Hg (T<sub>c</sub> = 4.2 K), Nb<sub>3</sub>Sn, YBa<sub>2</sub>Cu<sub>3</sub>O<sub>7</sub> (about 92 K).</p>
<p><b>Meissner effect.</b> Below T<sub>c</sub> a superconductor <b>expels the magnetic field</b> from its interior, so B = 0 inside. It behaves as a perfect diamagnet (susceptibility χ = −1).</p>
<figure data-fig="m3-meissner-effect"></figure>
<ul><li>If a superconductor is cooled in a magnetic field, the field lines are pushed out as T falls below T<sub>c</sub>. Surface currents set up by the field cancel B inside.</li>
<li>A perfect conductor would only keep a field frozen in; a superconductor actively expels it. That is the difference.</li>
<li>The effect breaks down when the temperature exceeds T<sub>c</sub> or when the applied field exceeds a critical field H<sub>c</sub>; the material returns to the normal state.</li>
<li>A magnet placed above a superconductor is repelled and floats (magnetic levitation).</li></ul>
<p><b>Applications</b></p>
<ul><li>Maglev trains: levitation with no contact and very low friction.</li>
<li>Strong superconducting electromagnets in MRI scanners and particle accelerators, since no power is lost as heat in the winding.</li>
<li>Loss-free power transmission cables and fault-current limiters.</li>
<li>SQUID magnetometers for very weak fields.</li></ul>
<div class="note trap"><p>Zero resistance and the Meissner effect are two separate properties. Zero resistance alone does not explain field expulsion.</p></div>
<div class="note exam"><p>Five marks: definition with T<sub>c</sub> (1), Meissner effect with a field-line diagram (3), applications (1).</p></div>`,
          topics: ['m3-superconductors']
        },
        {
          n: '4',
          marks: 10,
          co: '2',
          bl: '2',
          prompt: `<p>Describe and compare paramagnetism, ferromagnetism, ferrimagnetism, and antiferromagnetism. Illustrate the spin alignments in the absence and presence of an external magnetic field.</p>`,
          answer: `<p>Magnetism arises from the spin (and orbital) motion of electrons. Atoms with unpaired electrons carry a net magnetic moment, and the classes differ in how these moments are arranged.</p>
<figure data-fig="m3-spin-arrangements"></figure>
<table class="tbl"><thead><tr><th>Type</th><th>Spin arrangement, no field</th><th>With field H</th><th>Net moment and susceptibility</th></tr></thead><tbody>
<tr><td><b>Paramagnetism</b></td><td>Unpaired spins on isolated atoms point randomly (↗ ↙ ↖ ↘); net moment zero</td><td>Spins partly line up with the field; lost when the field is removed</td><td>Weak, positive χ; falls with T (Curie law)</td></tr>
<tr><td><b>Ferromagnetism</b></td><td>Within each domain all spins are parallel (↑ ↑ ↑ ↑) by exchange coupling; domains point in different directions, so the bulk may show no moment</td><td>Domains aligned with the field grow and all spins line up; strong magnetisation that can stay after the field is removed</td><td>Very large, positive χ; becomes paramagnetic above the Curie temperature. Fe, Co, Ni</td></tr>
<tr><td><b>Antiferromagnetism</b></td><td>Neighbouring spins are antiparallel and equal (↑ ↓ ↑ ↓); net moment zero</td><td>Very little change, so only a small positive moment</td><td>Small positive χ; ordering lost above the Néel temperature. MnO, NiO</td></tr>
<tr><td><b>Ferrimagnetism</b></td><td>Neighbouring spins are antiparallel but <b>unequal</b> (↑ ↓ with different sizes); net moment non-zero (for example ↑↑ ↓)</td><td>Net moments align, giving large magnetisation</td><td>Large, positive χ; ferrites such as Fe<sub>3</sub>O<sub>4</sub>, with low electrical conductivity</td></tr></tbody></table>
<p><b>Key comparison</b></p>
<ul><li>Ferromagnets and ferrimagnets keep a permanent moment, and both show hysteresis. Paramagnets and antiferromagnets do not.</li>
<li>Ferromagnets have parallel alignment; antiferromagnets cancel exactly; ferrimagnets cancel only partly.</li>
<li>The ordered types lose order at T<sub>C</sub> (Curie) or T<sub>N</sub> (Néel) and become paramagnetic.</li></ul>
<div class="note trap"><p>Ferrimagnets and antiferromagnets both have antiparallel neighbours. The difference is whether the opposing moments are equal (cancel, antiferromagnet) or unequal (net moment, ferrimagnet).</p></div>
<div class="note exam"><p>Ten marks: about 2 for each type, 2 for correct spin-arrow sketches in the absence and presence of a field. A compact table plus arrow rows is the quickest way to score.</p></div>`,
          topics: ['m3-magnetic-classes']
        },
        {
          n: '5a',
          marks: 5,
          co: '2',
          bl: '3',
          prompt: `<p>Discuss the hysteresis behaviour of ferromagnetic materials with a suitable plot between magnetic field vs. magnetization.</p>`,
          answer: `<p>When a ferromagnet is magnetised, demagnetised and magnetised in the opposite direction, the magnetisation M lags behind the applied field H. The M–H curve is a closed loop, called a <b>hysteresis loop</b>.</p>
<figure data-fig="m3-hysteresis-loop"></figure>
<p><b>Plot to draw:</b> H on the x-axis, M on the y-axis. Starting from the origin on an unmagnetised sample, M rises steeply along the virgin curve to a flat top (saturation M<sub>s</sub>, all domains aligned). Reducing H to zero, M falls only to M<sub>r</sub>. A reverse field H<sub>c</sub> brings M to zero. Continuing gives negative saturation, and the loop closes after reversing again.</p>
<ul><li><b>Saturation magnetisation M<sub>s</sub>:</b> all domains aligned with the field.</li>
<li><b>Retentivity (remanence) M<sub>r</sub>:</b> magnetisation left at H = 0.</li>
<li><b>Coercivity H<sub>c</sub>:</b> reverse field needed to bring M to zero.</li>
<li><b>Loop area:</b> energy lost as heat per cycle, caused by domain wall movement.</li></ul>
<p><b>Reason for the lag:</b> domain walls move and domains rotate when H is applied, but these motions meet obstacles (defects, impurities) and are not fully reversible.</p>
<table class="tbl"><thead><tr><th>Material</th><th>Loop</th><th>Use</th></tr></thead><tbody>
<tr><td>Soft (iron, silicon steel)</td><td>Narrow, low H<sub>c</sub>, small loss</td><td>Transformer cores, electromagnets</td></tr>
<tr><td>Hard (alnico, NdFeB)</td><td>Wide, high H<sub>c</sub> and M<sub>r</sub></td><td>Permanent magnets, data storage</td></tr></tbody></table>
<div class="note trap"><p>Retentivity is the M value on the vertical axis at H = 0, and coercivity is the H value on the horizontal axis at M = 0. Do not swap the intercepts.</p></div>
<div class="note exam"><p>Five marks: a properly labelled loop with M<sub>s</sub>, M<sub>r</sub>, H<sub>c</sub> (3), explanation of the lag and the loop area (1), soft against hard (1).</p></div>`,
          topics: ['m3-hysteresis-storage']
        },
        {
          n: '5b',
          marks: 5,
          co: '2',
          bl: '3',
          prompt: `<p>Define thermal conductivity. What characteristics would you recommend for an effective coolant used in a high-performance laptop processor?</p>`,
          answer: `<p><b>Thermal conductivity (k)</b> is the heat transferred per unit time through a unit area of a material per unit temperature gradient. From Fourier's law:</p>
<div class="eq">Q / t = −k A (dT/dx), unit: W m<sup>−1</sup> K<sup>−1</sup></div>
<p>A high k means heat moves quickly from the hot surface into the fluid. Copper is about 400 W/m·K and water about 0.6 W/m·K.</p>
<p><b>Characteristics for a laptop processor coolant</b></p>
<ul><li><b>High thermal conductivity</b> to take heat from the chip surface rapidly.</li>
<li><b>High specific heat</b> so each kilogram carries a lot of heat for a small temperature rise, and a small flow is enough.</li>
<li><b>High latent heat and a suitable boiling point</b>, so it does not boil off during use, or gives a large cooling effect if it does boil.</li>
<li><b>Low viscosity</b> so a small pump can circulate it through thin cold-plate channels.</li>
<li><b>Electrically insulating (dielectric)</b> or leak-safe, so a leak does not short the circuit.</li>
<li><b>Non-corrosive and chemically stable</b> toward copper, aluminium and seals, with a low freezing point.</li>
<li><b>Non-toxic, non-flammable, low cost.</b></li></ul>
<p>A practical choice is water with glycol and corrosion inhibitors in a closed cold-plate loop; nanofluids (nanoparticles in water) raise k further, and dielectric fluids suit direct contact with the electronics.</p>
<div class="note trap"><p>Water is the best at carrying heat, but it conducts electricity (when impure) and corrodes metals, so on its own it fails the safety checks. Mention inhibitors or a dielectric fluid.</p></div>
<div class="note exam"><p>Five marks: definition with unit (2) and at least four reasoned coolant properties (3).</p></div>`,
          topics: ['m3-coolants']
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
          topics: ['m1-carnot-cycle', 'm1-second-law-entropy']
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
          topics: ['m2-dssc', 'm2-pec-cells']
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
          topics: ['m3-superconductors']
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
          topics: ['m4-uv-vis', 'm4-beer-lambert']
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
          topics: ['m5-comp-intro', 'm5-molecular-orbitals']
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
          topics: ['m4-bragg', 'm4-scherrer', 'm4-xrd-patterns']
        },
        {
          n: '7',
          marks: 10,
          co: '2',
          bl: '3',
          prompt: `<p>Distinguish between diamagnetic, paramagnetic, and ferromagnetic materials. Write any five applications of magnetic materials.</p>`,
          answer: `<div class="note heads-up"><p>The O<sub>2</sub> molecular orbital diagram is not in the notes yet and will be added soon. This answer is standard chemistry.</p></div>
<table><thead><tr><th></th><th>Diamagnetic</th><th>Paramagnetic</th><th>Ferromagnetic</th></tr></thead><tbody>
<tr><td>Electrons</td><td>All paired; no permanent moment</td><td>Unpaired electrons, moments random</td><td>Unpaired electrons, moments aligned in domains</td></tr>
<tr><td>In a field</td><td>Weakly repelled</td><td>Weakly attracted</td><td>Strongly attracted</td></tr>
<tr><td>Susceptibility χ</td><td>Small, negative</td><td>Small, positive</td><td>Large, positive</td></tr>
<tr><td>Field removed</td><td>Nothing left</td><td>Magnetism lost</td><td>Retained (hysteresis); lost above the Curie temperature</td></tr>
<tr><td>Examples</td><td>Cu, Zn, water, NaCl</td><td>Al, O<sub>2</sub>, Pt, Mn<sup>2+</sup></td><td>Fe, Co, Ni</td></tr></tbody></table>
<p><b>Applications:</b> (1) transformer and motor cores (soft magnets); (2) permanent magnets in loudspeakers, motors and generators (hard magnets such as Nd–Fe–B); (3) data storage on hard disks and magnetic tape; (4) MRI magnets and contrast agents; (5) magnetic separation, sensors and ferrite-core devices.</p>
<div class="note trap"><p>Ferromagnets become paramagnetic above the Curie temperature. Paramagnetism is not permanent; only the aligned domains of a ferromagnet keep their magnetisation.</p></div>
<div class="note exam"><p>Five marks for a table with at least four comparison rows and examples; five marks for five named applications.</p></div>`,
          topics: ['m3-magnetic-classes', 'm3-magnetic-basics']
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
          topics: ['m1-expansion-work', 'm1-thermo-numericals', 'm1-integrated-rate']
        },
        {
          n: '9',
          marks: 10,
          co: '1',
          bl: '3',
          prompt: `<p><b>9.a)</b> With a neat diagram, explain how the ceramic materials in a device produce electricity. Despite the high operating temperature, reason out the advantages of using this energy device.</p>
<p><b>[OR]</b></p>
<p><b>9.b)</b> Describe the function of a Lithium-ion battery with a neat diagram and list out the advantages and disadvantages associated with this energy device.</p>`,
          answer: `<div class="note heads-up"><p>Notes on why lithium suits energy-storage anodes are to be added soon. Part (a) below is standard chemistry, not yet from these notes.</p></div>
<p><b>9.a) The solid oxide fuel cell (SOFC).</b></p>
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
          topics: ['m2-sofc', 'm2-fuel-cells', 'm2-li-ion']
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
          topics: ['m3-milling', 'm3-synthesis', 'm3-sol-gel']
        }
      ]
    },
    {
      id: 'fat-f1tf1-2025',
      kind: 'actual',
      exam: 'fat',
      title: 'FAT · Slot F1+TF1 · Nov/Dec 2025',
      short: 'F1+TF1 FAT',
      sub: 'Actual paper · Fall 2025–26',
      meta: [['Slot', 'F1+TF1'], ['Date', 'Nov/Dec 2025'], ['Duration', '3 hours'], ['Max marks', '100'], ['Programme', 'B.Tech.']],
      instructions: `<b>Instructions to candidates:</b> Write only your registration number in the designated box on the question paper. Writing anything elsewhere on the question paper will be considered a violation. Section-I: Answer any 5 Questions (5 × 5 Marks). Section-II: Answer all Questions (5 × 15 Marks).<br><b>Course Outcomes:</b> CO1: Understand the fundamental concepts in physical, analytical and materials chemistry. CO2: Apply chemical concepts for the advancement of materials in electrical, magnetic, and energy domains. CO3: Demonstrate instrumental techniques in chemistry. CO4: Solve chemical problems by applying computational chemistry. CO5: Experiment to quantify the metal ions, to visualize molecules using computational tools, to prepare ZnO semiconductor. BL – Bloom's Taxonomy Levels (K1 – Remembering, K2 – Understanding, K3 – Applying, K4 – Analysing, K5 – Evaluating, K6 – Creating).`,
      questions: [
        {
          n: '1',
          marks: 5,
          co: '1',
          bl: '3',
          prompt: `<p>According to collision theory, what factors determine the rate of a chemical reaction, and how does temperature influence the frequency and effectiveness of molecular collisions?</p>`,
          answer: `<p>The rate depends on three factors:</p>
<ol><li><b>Collision frequency (Z):</b> more molecules per unit volume (higher concentration or pressure) give more collisions per second.</li>
<li><b>Energy:</b> only collisions with kinetic energy of at least E<sub>a</sub> can break bonds and cross the barrier.</li>
<li><b>Orientation (steric factor p):</b> the molecules must meet with the reactive sites facing each other, as in Cl + NOCl.</li></ol>
<div class="eq">k = p Z e<sup>−E<sub>a</sub>/RT</sup> = A e<sup>−E<sub>a</sub>/RT</sup></div>
<p><b>Effect of temperature:</b> a higher T raises molecular speed, so collisions are slightly more frequent (Z ∝ √T, a small effect). The large effect is on <b>effectiveness</b>: the fraction of molecules with E ≥ E<sub>a</sub>, e<sup>−E<sub>a</sub>/RT</sup>, grows exponentially, so the rate roughly doubles for a 10 °C rise.</p>
<div class="note trap"><p>Most collisions fail. Do not say the faster rate at high T is mainly due to more frequent collisions; it is mainly due to more collisions being energetic enough.</p></div>
<div class="note exam"><p>Three factors, the k = A e<sup>−E<sub>a</sub>/RT</sup> equation, and the split between frequency (small effect) and effectiveness (large effect).</p></div>`,
          topics: ['m1-collision-arrhenius']
        },
        {
          n: '2',
          marks: '3+2',
          co: '1',
          bl: '4',
          prompt: `<p><b>a)</b> Define critical temperature (Tc), critical magnetic field (Hc), and critical current density (Jc). (3 Marks)</p>
<p><b>b)</b> A lead superconductor has Tc = 7.2 K. If its resistance is 1.2 μΩ just above Tc, what will be the resistance at 4.2 K? (2 Marks)</p>`,
          answer: `<p><b>(a)</b></p>
<ul><li><b>T<sub>c</sub>:</b> the temperature below which a material loses all electrical resistance and becomes superconducting.</li>
<li><b>H<sub>c</sub>:</b> the maximum magnetic field a superconductor can sustain at a given temperature; above it the superconductivity is destroyed. H<sub>c</sub> is largest at 0 K and falls to zero at T<sub>c</sub>.</li>
<li><b>J<sub>c</sub>:</b> the maximum current per unit cross-sectional area it can carry with zero resistance; a larger current destroys the state.</li></ul>
<p><b>(b)</b> 4.2 K is below T<sub>c</sub> = 7.2 K, so lead is superconducting. Its resistance drops abruptly to zero at T<sub>c</sub> and stays zero:</p>
<div class="eq">R(4.2 K) = <b>0 Ω</b></div>
<div class="note trap"><p>Do not scale the 1.2 μΩ with temperature as for a normal metal. The fall at T<sub>c</sub> is a sharp transition to exactly zero, so the given 1.2 μΩ is a distractor.</p></div>
<div class="note exam"><p>One mark per definition, with the idea of "destroys superconductivity" for H<sub>c</sub> and J<sub>c</sub>; (b) 0 Ω with the reason (T below T<sub>c</sub>).</p></div>`,
          topics: ['m3-superconductors']
        },
        {
          n: '3',
          marks: 5,
          co: '1',
          bl: '1',
          prompt: `<p>Describe the Sol-gel method for synthesizing SiO<sub>2</sub> nanoparticles in detail.</p>`,
          answer: `<p>The precursor is tetraethyl orthosilicate (TEOS) in ethanol, with water and an acid or ammonia catalyst.</p>
<ol><li><b>Hydrolysis:</b> Si(OC<sub>2</sub>H<sub>5</sub>)<sub>4</sub> + 4H<sub>2</sub>O → Si(OH)<sub>4</sub> + 4C<sub>2</sub>H<sub>5</sub>OH.</li>
<li><b>Condensation:</b> 2Si(OH)<sub>4</sub> → (HO)<sub>3</sub>Si–O–Si(OH)<sub>3</sub> + H<sub>2</sub>O; repeated, it builds a Si–O–Si network and a colloidal sol.</li>
<li><b>Gelation:</b> the sol links into a 3-D wet gel.</li>
<li><b>Ageing, washing and drying:</b> the gel is aged, washed and dried (xerogel or aerogel) at about 100 °C.</li>
<li><b>Calcination:</b> heating at 400–600 °C removes residual organics and gives SiO<sub>2</sub> nanoparticles.</li></ol>
<p>Size is tuned by the water:TEOS ratio, pH, temperature and the amount of ammonia. Advantages: low temperature, purity, size control. Drawback: costly precursors and shrinkage on drying.</p>
<div class="note trap"><p>Hydrolysis before condensation; the by-products are ethanol and water, not alcohol alone.</p></div>
<div class="note exam"><p>List the steps in order with the two key equations; one line on size control earns the last mark.</p></div>`,
          topics: ['m3-sol-gel', 'm3-synthesis']
        },
        {
          n: '4',
          marks: 5,
          co: '2',
          bl: '3',
          prompt: `<p>What are the main differences between proton-exchange membrane fuel cells and Solid oxide fuel cells in terms of their operating temperature, materials used, and electrochemical performance?</p>`,
          answer: `<table><thead><tr><th></th><th>PEMFC</th><th>SOFC</th></tr></thead><tbody>
<tr><td>Operating temperature</td><td>60–80 °C (low)</td><td>800–1000 °C (high)</td></tr>
<tr><td>Electrolyte</td><td>Nafion polymer membrane, conducts H<sup>+</sup></td><td>Ceramic YSZ, conducts O<sup>2−</sup></td></tr>
<tr><td>Electrodes and catalyst</td><td>Carbon with Pt catalyst</td><td>Ni–YSZ anode, LSM cathode; no Pt</td></tr>
<tr><td>Fuel</td><td>Pure H<sub>2</sub> (CO poisons Pt)</td><td>H<sub>2</sub>, CO, natural gas, biogas</td></tr>
<tr><td>Water forms at</td><td>Cathode</td><td>Anode</td></tr>
<tr><td>Performance</td><td>Quick start, high power density, 40–60% efficient; vehicles and portable use</td><td>Slow start, about 60% (over 80% with heat recovery); stationary power plants</td></tr></tbody></table>
<div class="note trap"><p>The ions move in opposite directions: H<sup>+</sup> from anode to cathode in the PEMFC, O<sup>2−</sup> from cathode to anode in the SOFC.</p></div>
<div class="note exam"><p>A table covering the three asked headings (temperature, materials, performance) is enough for full marks.</p></div>`,
          topics: ['m2-pemfc', 'm2-sofc', 'm2-fuel-cells']
        },
        {
          n: '5',
          marks: 5,
          co: '2',
          bl: '3',
          prompt: `<p>Draw a clear picture of the Dye sensitized solar cell, list out its components in detail, and briefly discuss the working principle involved.</p>`,
          answer: `<figure data-fig="m2-dssc-schematic"></figure>
<p><b>Components:</b> (1) photoanode: FTO or ITO glass with a porous nanocrystalline TiO<sub>2</sub> layer; (2) sensitiser dye adsorbed on the TiO<sub>2</sub> (Ru-bipyridyl, or a natural anthocyanin); (3) electrolyte with the I<sup>−</sup>/I<sub>3</sub><sup>−</sup> redox couple in an organic solvent; (4) counter electrode: FTO glass coated with Pt (or carbon) catalyst; (5) sealant between the plates.</p>
<p><b>Working:</b></p>
<div class="eq">D + hν → D* → D<sup>+</sup> + e<sup>−</sup>(TiO<sub>2</sub>)</div>
<div class="eq">Counter electrode: I<sub>3</sub><sup>−</sup> + 2e<sup>−</sup> → 3I<sup>−</sup> &nbsp;;&nbsp; Dye regeneration: 2D<sup>+</sup> + 3I<sup>−</sup> → 2D + I<sub>3</sub><sup>−</sup></div>
<p>The excited dye injects an electron into TiO<sub>2</sub>; it flows through the external circuit to the Pt electrode and reduces I<sub>3</sub><sup>−</sup> to I<sup>−</sup>, and I<sup>−</sup> regenerates the dye. There is no net chemical change; light becomes current.</p>
<div class="note trap"><p>The dye, not TiO<sub>2</sub>, absorbs the visible light.</p></div>
<div class="note exam"><p>Labelled picture with the electron path (2 marks), components (1.5), working steps (1.5).</p></div>`,
          topics: ['m2-dssc']
        },
        {
          n: '6',
          marks: 5,
          co: '3',
          bl: '3',
          prompt: `<p>What is the difference between crystallite size and crystal size? Find out the crystallite size of the given nanomaterial using the given powder-XRD data:</p><p>Peak position 2θ = 21.81°, FWHM of sample = 2.81°, k = 0.9 and λ = 1.5406 Å (degree to radian = Degree × π/180).</p>`,
          answer: `<p><b>Difference:</b> a crystallite is a single coherently diffracting domain with perfect lattice order. A crystal (grain or particle) can be one crystallite or many crystallites joined by grain boundaries. XRD peak width gives the crystallite size, which is smaller than or equal to the particle size seen in SEM or TEM.</p>
<div class="eq">θ = 21.81°/2 = 10.905°, cos θ = 0.9819</div>
<div class="eq">β = 2.81° × π/180 = 0.04904 rad</div>
<div class="eq">D = kλ/(β cos θ) = (0.9 × 1.5406 Å)/(0.04904 × 0.9819) = 1.3865/0.04816</div>
<div class="eq">D ≈ <b>28.8 Å ≈ 2.88 nm</b></div>
<div class="note trap"><p>Use θ = 10.905°, not 21.81°, in cos θ. No instrumental broadening is given, so it is ignored. A 2.81° FWHM is very broad, which fits a tiny crystallite of under 3 nm.</p></div>
<div class="note exam"><p>Two marks for the definition contrast; three for θ, β in radians and D with unit.</p></div>`,
          topics: ['m4-scherrer', 'm4-bragg']
        },
        {
          n: '7',
          marks: 5,
          co: '4',
          bl: '4',
          prompt: `<p>Draw the molecular orbital energy diagram for O<sub>2</sub> and predict its bond order and magnetic property.</p>`,
          answer: `<p>Diagram to draw: the 2s and 2p atomic orbitals of the two O atoms on the sides, the molecular orbitals in the centre. For O<sub>2</sub> the valence MOs from the bottom are σ2s, σ*2s, σ2p<sub>z</sub>, π2p<sub>x</sub> = π2p<sub>y</sub>, π*2p<sub>x</sub> = π*2p<sub>y</sub>, σ*2p<sub>z</sub> (the σ2p orbital lies above the π2p pair only for B<sub>2</sub>, C<sub>2</sub> and N<sub>2</sub>).</p>
<div class="eq">σ1s<sup>2</sup> σ*1s<sup>2</sup> σ2s<sup>2</sup> σ*2s<sup>2</sup> σ2p<sub>z</sub><sup>2</sup> π2p<sub>x</sub><sup>2</sup> π2p<sub>y</sub><sup>2</sup> π*2p<sub>x</sub><sup>1</sup> π*2p<sub>y</sub><sup>1</sup></div>
<div class="eq">Bond order = (N<sub>b</sub> − N<sub>a</sub>)/2 = (10 − 6)/2 = <b>2</b></div>
<p>The two π* electrons are unpaired (Hund's rule, parallel spins), so O<sub>2</sub> is <b>paramagnetic</b> with two unpaired electrons, as seen when liquid oxygen is held by a magnet.</p>
<div class="note trap"><p>Count all 16 electrons (or only the 12 valence electrons: 8 bonding, 4 antibonding, same bond order). Putting the last two electrons paired in one π* orbital would wrongly predict diamagnetism.</p></div>
<div class="note exam"><p>The diagram with the right ordering and electron filling (3 marks), bond order 2 (1), paramagnetic with the reason (1).</p></div>`,
          topics: ['m5-molecular-orbitals']
        },
        {
          n: '8',
          marks: '8+7',
          co: '1',
          bl: '4',
          prompt: `<p><b>a)</b> Draw the P–V diagram of a Carnot cycle and explain, using suitable equations, how the total work output depends on the initial (high) and final (low) temperatures of the cycle. (8 marks)</p>
<p><b>b)</b> 1 mole of an ideal monoatomic gas (C<sub>V</sub> = 3R/2) at 27 °C expands reversibly and adiabatically from a volume of 15 dm<sup>3</sup> to a volume of 45 dm<sup>3</sup>. Calculate q, ΔU, W and ΔH. (R = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>) (7 marks)</p>`,
          answer: `<p><b>(a)</b></p>
<figure data-fig="m1-carnot-pv"></figure>
<p>Draw A → B (isotherm at T<sub>h</sub>, top), B → C (adiabat, steeper), C → D (isotherm at T<sub>c</sub>), D → A (adiabat). The enclosed area is the net work.</p>
<div class="eq">q<sub>h</sub> = RT<sub>h</sub> ln(V<sub>B</sub>/V<sub>A</sub>), &nbsp; q<sub>c</sub> = RT<sub>c</sub> ln(V<sub>D</sub>/V<sub>C</sub>) = −RT<sub>c</sub> ln(V<sub>B</sub>/V<sub>A</sub>)</div>
<p>(the adiabats give V<sub>B</sub>/V<sub>A</sub> = V<sub>C</sub>/V<sub>D</sub>). ΔU = 0 over a cycle, so</p>
<div class="eq">W<sub>net</sub> = q<sub>h</sub> + q<sub>c</sub> = R(T<sub>h</sub> − T<sub>c</sub>) ln(V<sub>B</sub>/V<sub>A</sub>) = q<sub>h</sub>(1 − T<sub>c</sub>/T<sub>h</sub>)</div>
<p>The work output grows with the gap T<sub>h</sub> − T<sub>c</sub>: a hotter source or colder sink gives a taller loop and more work. If T<sub>h</sub> = T<sub>c</sub> the loop collapses to a line and W = 0.</p>
<p><b>(b)</b> T<sub>i</sub> = 300 K. Reversible adiabatic, so q = 0.</p>
<div class="eq">T<sub>f</sub> = T<sub>i</sub>(V<sub>i</sub>/V<sub>f</sub>)<sup>R/C<sub>v</sub></sup> = 300 × (15/45)<sup>2/3</sup> = 300 × 0.4807 = 144.2 K</div>
<div class="eq">ΔU = C<sub>v</sub>ΔT = 1.5 × 8.314 × (144.2 − 300) = −1943 J</div>
<div class="eq">W = ΔU = <b>−1943 J</b> (about −1.94 kJ), &nbsp; q = <b>0</b></div>
<div class="eq">ΔH = C<sub>p</sub>ΔT = 2.5 × 8.314 × (−155.8) = <b>−3238 J</b></div>
<div class="note trap"><p>The exponent is R/C<sub>v</sub> = 2/3 (that is, γ − 1 for γ = 5/3), and the volume ratio is V<sub>i</sub>/V<sub>f</sub>. Taking ΔH = ΔU is wrong because C<sub>p</sub> = C<sub>v</sub> + R.</p></div>
<div class="note exam"><p>(a) diagram, q<sub>h</sub> and q<sub>c</sub>, W = R(T<sub>h</sub> − T<sub>c</sub>) ln(V<sub>B</sub>/V<sub>A</sub>) and the comment on the T difference. (b) T<sub>f</sub> first, then each quantity with a sign and unit.</p></div>`,
          topics: ['m1-carnot-cycle', 'm1-expansion-work', 'm1-thermo-numericals']
        },
        {
          n: '9',
          marks: '10+5',
          co: '2',
          bl: '3',
          prompt: `<p><b>a)</b> Lithium is the best-known anode for energy storage devices. Justify the statement with proper reasoning, discuss the charging and discharging mechanisms of the Li-ION battery with a clear picture. (10 marks)</p>
<p><b>b)</b> Represent the cell in which the following reaction takes place: (5 marks)</p>
<p>Mg(s) + 2Ag<sup>+</sup> (0.0001 M) ⟶ Mg<sup>2+</sup> (0.130 M) + 2Ag (s)</p>
<p>Calculate the ΔG of the cell if E°<sub>cell</sub> = 3.17 V.</p>`,
          answer: `<p><b>(a) Why lithium:</b> it has the most negative standard potential (E° = −3.04 V), so cells give a high voltage (about 3.6 V); it is the lightest metal (6.94 g/mol) with a very high specific capacity (3860 mAh/g); and the small Li<sup>+</sup> ion moves quickly in and out of host lattices.</p>
<figure data-fig="m2-liion-charge-discharge"></figure>
<p><b>Charging:</b> Li<sup>+</sup> leaves the layered LiCoO<sub>2</sub>, crosses the electrolyte and intercalates between the graphite sheets; electrons travel round the circuit under the charger.</p>
<div class="eq">LiCoO<sub>2</sub> → Li<sub>1−n</sub>CoO<sub>2</sub> + nLi<sup>+</sup> + ne<sup>−</sup> &nbsp;;&nbsp; C<sub>6</sub> + nLi<sup>+</sup> + ne<sup>−</sup> → Li<sub>n</sub>C<sub>6</sub></div>
<p><b>Discharging:</b> the reverse. Li<sub>n</sub>C<sub>6</sub> → C<sub>6</sub> + nLi<sup>+</sup> + ne<sup>−</sup> at the anode, and the cathode takes the Li<sup>+</sup> and electrons back into the oxide. The separator blocks electrode contact but passes Li<sup>+</sup>.</p>
<p><b>(b)</b> Mg is oxidised (anode), Ag<sup>+</sup> is reduced (cathode); n = 2.</p>
<div class="eq">Mg(s) | Mg<sup>2+</sup> (0.130 M) || Ag<sup>+</sup> (0.0001 M) | Ag(s)</div>
<div class="eq">E = E° − (0.0591/2) log([Mg<sup>2+</sup>]/[Ag<sup>+</sup>]<sup>2</sup>) = 3.17 − 0.02955 × log(0.130/10<sup>−8</sup>)</div>
<div class="eq">log(1.3 × 10<sup>7</sup>) = 7.114, &nbsp; E = 3.17 − 0.210 = 2.96 V</div>
<div class="eq">ΔG = −nFE = −2 × 96485 × 2.96 = −5.71 × 10<sup>5</sup> J = <b>−571 kJ</b></div>
<div class="note trap"><p>The printed E° = 3.17 V is for 1 M solutions. The question asks for ΔG of the cell as given, so use E (2.96 V), not E°; with E° you get the standard ΔG° = −612 kJ. Square [Ag<sup>+</sup>].</p></div>
<div class="note exam"><p>(a) three reasons for lithium, the picture, and both reactions on charge and discharge. (b) the notation (2 marks), the Nernst step with the squared term, and ΔG = −nFE with unit.</p></div>`,
          topics: ['m2-li-ion', 'm2-electrochemical-cells']
        },
        {
          n: '10',
          marks: '10+5',
          co: '2',
          bl: '2',
          prompt: `<p><b>a)</b> Explain how materials are classified as paramagnetic, ferromagnetic, antiferromagnetic, and ferrimagnetic based on the electron spin arrangement. (10 marks)</p>
<p><b>b)</b> Define a supercondiuctor. Describe the variation of its electrical resistivity with temperature and illustrate it with a suitable diagram. (5 marks)</p>`,
          answer: `<p><b>(a)</b></p>
<figure data-fig="m3-spin-arrangements"></figure>
<ul><li><b>Paramagnetic:</b> atoms have unpaired electrons, but the moments point randomly, so the net moment is zero without a field; weakly attracted, χ small and positive (Al, O<sub>2</sub>).</li>
<li><b>Ferromagnetic:</b> neighbouring moments align parallel in domains, giving a large net moment even without a field; strong attraction and hysteresis; becomes paramagnetic above the Curie temperature (Fe, Co, Ni).</li>
<li><b>Antiferromagnetic:</b> neighbouring moments are equal and antiparallel (↑↓↑↓), so the net moment is zero; weak response; order is lost above the Néel temperature (MnO, Cr).</li>
<li><b>Ferrimagnetic:</b> antiparallel but unequal moments (two sublattices of different size), so a net moment remains; strong, ferromagnet-like (Fe<sub>3</sub>O<sub>4</sub>, ferrites).</li></ul>
<p><b>(b)</b> A superconductor is a material whose resistance drops to exactly zero below a critical temperature T<sub>c</sub> and which expels magnetic field (Meissner effect).</p>
<figure data-fig="m3-superconductor-resistivity"></figure>
<p>Diagram: resistivity ρ on the y-axis, T on the x-axis. A normal metal falls smoothly and levels off at a small residual value. A superconductor follows the metal curve down to T<sub>c</sub>, then drops vertically to zero and stays at zero (for example Hg at 4.2 K, Pb at 7.2 K, YBCO at 93 K).</p>
<div class="note trap"><p>Antiferromagnets cancel exactly; ferrimagnets cancel only partly. That difference is the point of the question.</p></div>
<div class="note exam"><p>(a) a spin-arrow sketch for each of the four types, with net moment and example. (b) definition, the sharp drop at T<sub>c</sub> on a labelled graph.</p></div>`,
          topics: ['m3-magnetic-classes', 'm3-superconductors']
        },
        {
          n: '11',
          marks: '5+10',
          co: '3',
          bl: '3',
          prompt: `<p><b>a)</b> Explain the various transitions occurring in the UV-vis electronic spectroscopy with proper illustration and examples. (5 marks)</p>
<p><b>b)</b> Describe the working principles and instrumentation of UV-visible spectroscopy and XRD. (10 marks)</p>`,
          answer: `<p><b>(a)</b> Draw an MO ladder: σ, π and n (non-bonding) filled; σ* and π* empty, with arrows for the four jumps.</p>
<ul><li><b>σ → σ*:</b> largest gap, below 200 nm (CH<sub>4</sub>, ethane).</li>
<li><b>n → σ*:</b> about 150–250 nm (H<sub>2</sub>O, alcohols, amines).</li>
<li><b>π → π*:</b> 200–300 nm, longer with conjugation, strong (ethene 175 nm, butadiene 217 nm, benzene 255 nm).</li>
<li><b>n → π*:</b> smallest gap, weak (acetone about 280 nm).</li></ul>
<p><b>(b) UV-Vis.</b> Principle: absorption of a photon promotes an electron; A = εcl (Beer-Lambert).</p>
<figure data-fig="m4-double-beam"></figure>
<p>Instrument: source (deuterium lamp for UV, tungsten lamp for visible) → monochromator (grating and slit) → beam splitter into sample and reference cuvettes (quartz for UV) → detector (photomultiplier or photodiode) → recorder giving A against λ.</p>
<p><b>XRD.</b> Principle: Bragg's law nλ = 2d sin θ; planes of spacing d diffract X-rays at angle θ.</p>
<figure data-fig="m4-diffractometer-layout"></figure>
<p>Instrument: X-ray tube (Cu Kα, 1.5406 Å) with filter and slits → powder sample on a rotating stage (goniometer) → detector moved at 2θ → intensity against 2θ pattern. Peak positions give d and identify the phase; peak width gives the crystallite size by Scherrer: D = kλ/(β cos θ).</p>
<div class="note trap"><p>UV-Vis measures absorption by electrons (needs a chromophore); XRD measures scattering from the lattice (needs a crystal). Use quartz, not glass, cuvettes for UV.</p></div>
<div class="note exam"><p>Allocate time: 5 marks for transitions, then about 5 each for the two techniques (principle, block diagram with labels, output).</p></div>`,
          topics: ['m4-uv-vis', 'm4-beer-lambert', 'm4-bragg', 'm4-scherrer']
        },
        {
          n: '12',
          marks: '7+8',
          co: '4',
          bl: '1',
          prompt: `<p><b>a)</b> Define a potential energy surface (PES) and explain its significance in understanding chemical reactions. (7 marks)</p>
<p><b>b)</b> Discuss how geometry optimization is performed to locate the minimum energy structure of a molecule. (8 marks)</p>`,
          answer: `<p><b>(a)</b> A PES is the energy of a molecular system plotted against its nuclear coordinates (bond lengths, angles), within the Born–Oppenheimer approximation. For a diatomic it is the curve E(r); for larger molecules it is a multi-dimensional surface, drawn as contours.</p>
<figure data-fig="m5-pes-contours"></figure>
<p><b>Significance:</b> minima are stable species (reactants, products, intermediates); a first-order saddle point is the transition state, and its height above the reactant is the activation energy; the lowest-energy path joining the minima is the reaction path; the curvature gives vibrational frequencies; the shape shows which of several products or mechanisms is favoured.</p>
<p><b>(b)</b> Geometry optimisation moves the atoms downhill on the PES until the structure sits at a minimum.</p>
<ol><li>Build a starting geometry and choose a method and basis set.</li>
<li>Compute the energy E and its gradient (force = −dE/dx) on each atom.</li>
<li>Move the atoms against the gradient (steepest descent, conjugate gradient, or Newton–Raphson with the Hessian) to a lower-energy geometry.</li>
<li>Repeat until convergence: forces near zero, a small step, a small energy change.</li>
<li>Check with a frequency calculation: all real frequencies means a minimum; one imaginary frequency means a transition state.</li></ol>
<div class="note trap"><p>Zero gradient only says the point is stationary. The frequency check separates a minimum from a saddle point. The optimiser finds the nearest local minimum, which may not be the global one.</p></div>
<div class="note exam"><p>(a) definition, a sketch with minima and saddle point labelled, and three or four uses. (b) the loop of energy, gradient, step and convergence, plus the frequency check.</p></div>`,
          topics: ['m5-potential-energy-surface', 'm5-geometry-frequency']
        }
      ]
    }
  ],
  asked: {
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
      },
      {
        where: 'Q4, 5 marks',
        what: 'compare two types of fuel cell',
        paper: 'fat-f1tf1-2025'
      }
    ],
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
        where: 'Q1(a), 5 marks',
        what: 'galvanic against electrolytic cells with an example of each',
        paper: 'cat1-f1tf1-2025w'
      },
      {
        where: 'Q5(a), 5 marks',
        what: 'find the Zn ion concentration from the measured cell potential (Nernst)',
        paper: 'cat2-g1tg1-2025'
      },
      {
        where: 'Q9(b), 5 marks',
        what: 'cell notation for Mg and Ag+ and the free energy change from E using Nernst',
        paper: 'fat-f1tf1-2025'
      }
    ],
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
      },
      {
        where: 'Q9(a), 10 marks',
        what: 'why lithium is the best anode and the charge and discharge mechanism of a Li-ion cell',
        paper: 'fat-f1tf1-2025'
      }
    ],
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
        where: 'Q2(b), 5 marks',
        what: 'function of each component of a dye-sensitized solar cell and regeneration of the oxidised dye',
        paper: 'cat1-f1tf1-2025w'
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
        where: 'Q5, 5 marks',
        what: 'draw the dye sensitized solar cell, its components and working',
        paper: 'fat-f1tf1-2025'
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
      },
      {
        where: 'Q3, 5 marks',
        what: 'sol-gel route to SiO2 nanoparticles',
        paper: 'fat-f1tf1-2025'
      }
    ],
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
      },
      {
        where: 'Q3, 5 marks',
        what: 'sol-gel method for SiO2 nanoparticles in detail',
        paper: 'fat-f1tf1-2025'
      }
    ],
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
        where: 'Q11, 15 marks',
        what: 'UV-Vis transitions with examples, and UV-Vis and XRD principle and instrumentation',
        paper: 'fat-f1tf1-2025'
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
        where: 'Q6, 5 marks',
        what: 'crystallite size against crystal size, Scherrer at 2θ = 21.81°, FWHM 2.81°',
        paper: 'fat-f1tf1-2025'
      },
      {
        where: 'Q11(b), 10 marks',
        what: 'peak width and crystallite size in XRD',
        paper: 'fat-f1tf1-2025'
      }
    ],
    'm2-sofc': [
      {
        where: 'Q1(a), 5 marks',
        what: 'identify the all-ceramic fuel cell (SOFC) and explain it with a diagram',
        paper: 'cat2-b2tb2'
      },
      {
        where: 'Q3(a), 5 marks',
        what: 'anode and cathode reactions of an SOFC and its advantages over a PEMFC',
        paper: 'cat1-f1tf1-2025w'
      },
      {
        where: 'Q9(a), 10 marks',
        what: 'ceramic fuel cell: diagram, electricity generation and advantages despite high temperature',
        paper: 'fat-g1tg1-2025'
      },
      {
        where: 'Q4, 5 marks',
        what: 'PEMFC against SOFC: temperature, materials, performance',
        paper: 'fat-f1tf1-2025'
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
        where: 'Q6, 5 marks',
        what: 'XRD peak data for crystallite size',
        paper: 'fat-f1tf1-2025'
      },
      {
        where: 'Q11(b), 10 marks',
        what: 'XRD working principle and instrumentation',
        paper: 'fat-f1tf1-2025'
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
      },
      {
        where: 'Q8(a), 8 marks',
        what: 'Carnot P-V diagram and how the work depends on the high and low temperatures',
        paper: 'fat-f1tf1-2025'
      }
    ],
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
      },
      {
        where: 'Q8(b), 7 marks',
        what: 'q, U, W and H for a reversible adiabatic expansion of a monatomic gas, 15 to 45 dm3',
        paper: 'fat-f1tf1-2025'
      }
    ],
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
        where: 'Q8(b), 7 marks',
        what: 'adiabatic expansion final temperature and energy changes',
        paper: 'fat-f1tf1-2025'
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
      },
      {
        where: 'Q1, 5 marks',
        what: 'collision theory factors and the effect of temperature on collision frequency and effectiveness',
        paper: 'fat-f1tf1-2025'
      }
    ],
    'm2-electrolysis': [
      {
        where: 'Q1(a), 5 marks',
        what: 'an electrolytic cell example with justification',
        paper: 'cat1-f1tf1-2025w'
      }
    ],
    'm3-ohm-resistivity': [
      {
        where: 'Q1(b), 5 marks',
        what: 'how conductivity of metals and semiconductors varies with temperature',
        paper: 'cat1-f1tf1-2025w'
      }
    ],
    'm3-band-theory': [
      {
        where: 'Q1(b), 5 marks',
        what: 'temperature effect on conductivity of metals and semiconductors',
        paper: 'cat1-f1tf1-2025w'
      }
    ],
    'm2-photovoltaics': [
      {
        where: 'Q2(a), 5 marks',
        what: 'working of a photovoltaic cell and the role of the semiconductor bandgap in efficiency',
        paper: 'cat1-f1tf1-2025w'
      }
    ],
    'm2-pemfc': [
      {
        where: 'Q3(a), 5 marks',
        what: 'advantages of the SOFC compared with the PEM fuel cell',
        paper: 'cat1-f1tf1-2025w'
      },
      {
        where: 'Q4, 5 marks',
        what: 'PEMFC against SOFC: temperature, materials, performance',
        paper: 'fat-f1tf1-2025'
      }
    ],
    'm3-superconductors': [
      {
        where: 'Q3(b), 5 marks',
        what: 'define superconductors; the Meissner effect and its applications',
        paper: 'cat1-f1tf1-2025w'
      },
      {
        where: 'Q3, 10 marks',
        what: 'characteristics and five uses of YBa2Cu3O7',
        paper: 'fat-g1tg1-2025'
      },
      {
        where: 'Q2, 5 marks',
        what: 'define Tc, Hc, Jc and the resistance of lead below Tc',
        paper: 'fat-f1tf1-2025'
      },
      {
        where: 'Q10(b), 5 marks',
        what: 'define a superconductor and sketch resistivity against temperature',
        paper: 'fat-f1tf1-2025'
      }
    ],
    'm3-magnetic-classes': [
      {
        where: 'Q4, 10 marks',
        what: 'compare para-, ferro-, ferri- and antiferromagnetism with spin alignments with and without a field',
        paper: 'cat1-f1tf1-2025w'
      },
      {
        where: 'Q7, 10 marks',
        what: 'distinguish dia, para and ferromagnetic materials and five applications',
        paper: 'fat-g1tg1-2025'
      },
      {
        where: 'Q10(a), 10 marks',
        what: 'para, ferro, antiferro and ferrimagnetism from spin arrangement',
        paper: 'fat-f1tf1-2025'
      }
    ],
    'm3-hysteresis-storage': [
      {
        where: 'Q5(a), 5 marks',
        what: 'hysteresis of ferromagnets with an M–H plot',
        paper: 'cat1-f1tf1-2025w'
      }
    ],
    'm3-coolants': [
      {
        where: 'Q5(b), 5 marks',
        what: 'define thermal conductivity; recommended coolant properties for a laptop processor',
        paper: 'cat1-f1tf1-2025w'
      }
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
      }
    ],
    'm4-beer-lambert': [
      {
        where: 'Q4, 10 marks',
        what: 'working principle of UV-Vis using the Beer-Lambert law',
        paper: 'fat-g1tg1-2025'
      },
      {
        where: 'Q11(b), 10 marks',
        what: 'UV-Vis working principle',
        paper: 'fat-f1tf1-2025'
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
      },
      {
        where: 'Q7, 5 marks',
        what: 'MO diagram of O2, bond order and magnetism',
        paper: 'fat-f1tf1-2025'
      }
    ],
    'm5-potential-energy-surface': [
      {
        where: 'Q12(a), 7 marks',
        what: 'define the potential energy surface and its significance for reactions',
        paper: 'fat-f1tf1-2025'
      }
    ],
    'm5-geometry-frequency': [
      {
        where: 'Q12(b), 8 marks',
        what: 'how geometry optimization finds the minimum energy structure',
        paper: 'fat-f1tf1-2025'
      }
    ]
  }
});
