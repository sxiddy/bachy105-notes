CHUNK({
  chunk: 'H',
  module: 'm1',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm1-thermo-basics',
      title: 'Thermodynamics: basic terminologies',
      short: 'Basic terminologies',
      blurb: 'System and surroundings, intensive and extensive properties, state and path functions, internal energy, the four named processes, expansion work and reversible processes.',
      source: 'Pages 30–34',
      tabs: [
        { title: 'System & properties', html: `
          <p class="lead">Thermodynamics fixes a small piece of the world, the <b>system</b>, and tracks the energy that crosses its boundary. Everything outside it is the <b>surroundings</b>.</p>
          <div class="kv">
            <div><span>System</span><b>the matter or region in space you focus on</b></div>
            <div><span>Surroundings</span><b>everything external to the system</b></div>
          </div>
          <h3>Properties of a system</h3>
          <div class="vs">
            <div class="side"><h4>Intensive</h4><p>Do <b>not</b> depend on how much matter is present.</p><p>Examples: temperature, pressure.</p></div>
            <div class="side"><h4>Extensive</h4><p>Depend on the <b>amount</b> of matter.</p><p>Examples: volume, mass, internal energy.</p></div>
          </div>
          <div class="note why"><p>A quick test: cut the system in half. A property that halves is extensive; one that stays the same is intensive.</p></div>
          <p>The set of variables that describes the system (pressure, temperature, volume, composition) is its <b>state</b>. When one or more of them changes, the system has undergone a <b>change of state</b>.</p>
        ` },
        { title: 'State vs path function', html: `
          <p class="lead">A <b>state function</b> cares only about where you started and where you finished. A <b>path function</b> cares about the road you took.</p>
          <table class="tbl">
            <thead><tr><th></th><th>State function</th><th>Path function</th></tr></thead>
            <tbody>
              <tr><td>Depends on</td><td>initial and final state only</td><td>the path between the two states</td></tr>
              <tr><td>Examples</td><td><b>T, P, U, H</b></td><td><b>w</b> (work done), <b>q</b> (heat transferred)</td></tr>
            </tbody>
          </table>
          <h3>Internal energy (U)</h3>
          <ul>
            <li>U = <b>kinetic energy + potential energy</b> of the particles in the system.</li>
            <li>It is a <b>state function</b> and an <b>extensive</b> property.</li>
            <li>U changes only when energy enters or leaves as <b>heat</b> or <b>work</b>.</li>
          </ul>
          <div class="note exam"><p>If asked why ΔU is the same for two routes between the same states while q and w differ, the answer is: U is a state function, q and w are path functions.</p></div>
        ` },
        { title: 'Processes & work', html: `
          <p class="lead">Four named processes keep one variable fixed, and the fixed variable decides which terms in the energy balance survive.</p>
          <div class="kv">
            <div><span>Adiabatic</span><b>no heat transferred (q = 0)</b></div>
            <div><span>Isothermal</span><b>constant temperature</b></div>
            <div><span>Isobaric</span><b>constant pressure</b></div>
            <div><span>Isochoric</span><b>constant volume</b></div>
          </div>
          <h3>Work done by or on the system</h3>
          <p>Work = force × distance moved in the direction of the force. Heat a gas in a cylinder: it expands and pushes the piston, so the gas does work on the piston. When the system expands by dV against an external pressure P<sub>ex</sub>:</p>
          <div class="eq" data-label="Expansion work">dw = −P<sub>ex</sub> dV</div>
          <p>This is the system doing work on its surroundings, so w is negative.</p>
        ` },
        { title: 'Reversible process', html: `
          <p class="lead">A process is <b>reversible</b> if it can be turned back so that both the system and the surroundings return to their original states, with no other change anywhere in the universe.</p>
          <ul>
            <li>A reversible change can be undone by an <b>infinitesimal</b> change of a variable.</li>
            <li>In reality no process is perfectly reversible. It is the ideal limit.</li>
          </ul>
          <div class="vs">
            <div class="side"><h4>Thermal equilibrium</h4><p>Two systems at the same temperature. Lower either temperature by a tiny amount and energy flows into that system. Raise it and energy flows out of the hotter one.</p></div>
            <div class="side"><h4>Reversible expansion</h4><p>A gas held by a piston with <b>P<sub>ex</sub> = P</b> of the gas. The system is in mechanical equilibrium: a tiny change in external pressure either way changes the volume in the opposite directions.</p></div>
          </div>
        ` }
      ],
      flashcards: [
        { front: 'System vs surroundings?', back: 'The <b>system</b> is the matter or region under study. Everything external to it is the <b>surroundings</b>.' },
        { front: 'Name two intensive and two extensive properties.', back: 'Intensive: <b>temperature, pressure</b>. Extensive: <b>volume, mass, internal energy</b>.' },
        { front: 'State function vs path function?', back: 'A state function depends only on the initial and final states (<b>T, P, U, H</b>). A path function depends on the route (<b>w, q</b>).' },
        { front: 'What is internal energy U?', back: '<b>Kinetic + potential energy</b> of the system. A state function and an extensive property.' },
        { front: 'Adiabatic, isothermal, isobaric, isochoric?', back: 'No heat transfer, constant <b>T</b>, constant <b>P</b>, constant <b>V</b>.' },
        { front: 'Expansion work formula?', back: '<b>dw = −P<sub>ex</sub> dV</b>. Negative when the system expands.' },
        { front: 'When is a process reversible?', back: 'When both system and surroundings can be returned to their original states with no other change in the universe, e.g. <b>P<sub>ex</sub> = P</b> throughout an expansion.' }
      ],
      oneLiners: [
        'Temperature and pressure are intensive; volume, mass and U are extensive.',
        'U, H, T and P are state functions; q and w are path functions.',
        'U = kinetic energy + potential energy of the system.',
        'Adiabatic means q = 0, isothermal ΔT = 0, isobaric ΔP = 0, isochoric ΔV = 0.',
        'dw = −P_ex dV, so an expanding system has negative w.',
        'Reversible means P_ex = P of the gas at every step; no real process is truly reversible.'
      ],
      formulas: [
        { name: 'Expansion work', html: `dw = −P<sub>ex</sub> dV`, note: 'Work done by the system on the surroundings is negative.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm1-zeroth-first-law',
      title: 'Zeroth and first law',
      short: 'Zeroth & first law',
      blurb: 'Thermal equilibrium and temperature, where the zeroth law is used, then the first law as conservation of energy with its sign convention.',
      source: 'Pages 35–37',
      tabs: [
        { title: 'Zeroth law', html: `
          <p class="lead">Two systems are in <b>thermal equilibrium</b> if no net heat flows between them when they are connected by a path that lets heat through.</p>
          <div class="note exam"><p><b>0th law:</b> if two systems are each in thermal equilibrium with a third system, they are in thermal equilibrium with each other.</p></div>
          <p>The law defines thermal equilibrium and is the <b>basis for the definition of temperature</b>.</p>
        ` },
        { title: 'Where it is used', html: `
          <p class="lead">Three uses, all resting on the fact that thermal equilibrium is <b>transitive</b>.</p>
          <ol class="steps">
            <li><b>Thermometer.</b> The thermometer and the object reach thermal equilibrium, so its reading gives the object temperature. This is the most common application.</li>
            <li><b>Calibration.</b> Several thermometers can be calibrated against a standard; they all show the same temperature for the same system.</li>
            <li><b>Thermal control.</b> In spacecraft, electronics or climate control, each component is in equilibrium with the thermostat system, so all are at the same temperature.</li>
          </ol>
        ` },
        { title: 'First law', html: `
          <p class="lead">The first law is the <b>law of conservation of energy</b>: energy is never lost, only changed from one form to another.</p>
          <div class="eq" data-label="First law">ΔU = q + w</div>
          <div class="kv">
            <div><span>w</span><b>work done on the system</b></div>
            <div><span>q</span><b>energy transferred to the system as heat</b></div>
            <div><span>ΔU</span><b>resulting change in internal energy</b></div>
          </div>
          <h3>Sign convention</h3>
          <ul>
            <li><b>+ve</b> if energy is transferred <b>to</b> the system as work or heat.</li>
            <li><b>−ve</b> if energy is <b>lost</b> from the system.</li>
          </ul>
          <ul>
            <li>The energy of an <b>isolated</b> system stays constant. When some form of energy disappears, an exactly equivalent amount of another form appears.</li>
            <li>Heat and work are <b>equivalent ways</b> of changing internal energy.</li>
          </ul>
          <div class="note example"><p>A weight raised or lowered in the surroundings means energy moved as <b>work</b>. Ice melting in the surroundings means energy moved as <b>heat</b>.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Statement of the zeroth law?', back: 'If A and B are each in thermal equilibrium with C, then <b>A and B are in thermal equilibrium</b> with each other.' },
        { front: 'What does the zeroth law give us?', back: 'The definition of <b>thermal equilibrium</b> and the basis of <b>temperature</b> measurement.' },
        { front: 'Three applications of the zeroth law?', back: '<b>Thermometer</b> reading, <b>calibration</b> of thermometers, <b>thermal control</b> in spacecraft, electronics and climate control.' },
        { front: 'First law in one line?', back: 'Conservation of energy: <b>ΔU = q + w</b>.' },
        { front: 'Sign convention for q and w in this deck?', back: '<b>Positive</b> when energy goes into the system, <b>negative</b> when it leaves.' },
        { front: 'Energy of an isolated system?', back: 'Remains <b>constant</b>.' }
      ],
      oneLiners: [
        'Zeroth law: thermal equilibrium is transitive, which gives us temperature.',
        'A thermometer works because it reaches thermal equilibrium with the object.',
        'First law: ΔU = q + w, energy is conserved.',
        'q and w are positive when energy enters the system.',
        'Heat and work are equivalent ways of changing internal energy.'
      ],
      formulas: [
        { name: 'First law', html: `ΔU = q + w`, note: 'q and w positive when energy is transferred to the system.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm1-enthalpy-heat-capacity',
      title: 'Enthalpy and heat capacity',
      short: 'Enthalpy & heat capacity',
      blurb: 'Why enthalpy is defined, heat capacity at constant volume and constant pressure, Cp − Cv = R, and the heat capacity ratio.',
      source: 'Pages 38–39',
      tabs: [
        { title: 'Enthalpy', html: `
          <p class="lead">When a change happens at <b>constant pressure</b>, the volume changes and some energy goes into pushing the surroundings back. Enthalpy keeps track of that.</p>
          <div class="eq" data-label="Definition">H = U + PV</div>
          <p>So the quantity <b>(U + PV)</b> is the enthalpy H of the system, and:</p>
          <div class="eq">ΔU = ΔH − PΔV</div>
          <div class="eq">ΔH = ΔU + PΔV</div>
          <p>H is a <b>state function</b>, like U.</p>
        ` },
        { title: 'Heat capacity', html: `
          <p class="lead">The <b>heat capacity (C)</b> of a system between two temperatures is the heat q needed to raise it from the lower temperature T<sub>1</sub> to the higher T<sub>2</sub>, divided by the temperature difference.</p>
          <div class="eq" data-label="Heat capacity">C = <span class="frac"><span>q</span><span>T<sub>2</sub> − T<sub>1</sub></span></span></div>
          <div class="kv">
            <div><span>Mass = 1 g</span><b>specific heat</b></div>
            <div><span>Amount = 1 mol</span><b>molar heat capacity</b></div>
          </div>
          <p>Molar heat capacity <b>varies with temperature</b>.</p>
        ` },
        { title: 'Cv and Cp', html: `
          <p class="lead">What happens to the heat depends on whether the volume or the pressure is held fixed.</p>
          <div class="vs">
            <div class="side"><h4>At constant volume (C<sub>v</sub>)</h4><p>w = 0, so <b>ΔU = q<sub>v</sub></b>.</p><div class="eq">C<sub>v</sub> = (∂U/∂T)<sub>v</sub></div><p>All the heat raises U.</p></div>
            <div class="side"><h4>At constant pressure (C<sub>p</sub>)</h4><p>The volume changes and some work is done, so <b>ΔH = q<sub>p</sub></b>.</p><div class="eq">C<sub>p</sub> = (∂H/∂T)<sub>p</sub></div><p>Some of the heat goes into expansion work.</p></div>
          </div>
          <div class="note why"><p>At constant pressure the gas has to push the surroundings back as it warms, so it needs more heat per degree. That is why C<sub>p</sub> is larger than C<sub>v</sub>.</p></div>
        ` },
        { title: 'Cp − Cv = R', html: `
          <p class="lead">For an ideal gas the gap between the two heat capacities is exactly the gas constant.</p>
          <ol class="steps">
            <li><b>Start</b> with H = U + PV, so ΔH = ΔU + Δ(PV).</li>
            <li><b>Ideal gas, 1 mol:</b> PV = RT, so Δ(PV) = R ΔT.</li>
            <li><b>Divide by ΔT</b> and use C<sub>p</sub> = ΔH/ΔT and C<sub>v</sub> = ΔU/ΔT.</li>
          </ol>
          <div class="eq" data-label="Mayer relation">C<sub>p</sub> − C<sub>v</sub> = R</div>
          <div class="eq" data-label="Heat capacity ratio">γ = <span class="frac"><span>C<sub>p</sub></span><span>C<sub>v</sub></span></span></div>
          <div class="note example"><p>For a monatomic ideal gas, C<sub>v</sub> = 3/2 R, so C<sub>p</sub> = 5/2 R. This is the value used in the numericals on entropy and adiabatic expansion.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Define enthalpy.', back: '<b>H = U + PV</b>. A state function.' },
        { front: 'ΔU in terms of ΔH?', back: '<b>ΔU = ΔH − PΔV</b>.' },
        { front: 'Define heat capacity.', back: 'Heat needed to raise the temperature from T<sub>1</sub> to T<sub>2</sub> divided by the difference: <b>C = q/(T<sub>2</sub> − T<sub>1</sub>)</b>.' },
        { front: 'Specific heat vs molar heat capacity?', back: 'Heat capacity for <b>1 g</b> vs for <b>1 mol</b>.' },
        { front: 'What does C<sub>v</sub> equal?', back: '<b>(∂U/∂T)<sub>v</sub></b>. At constant volume w = 0 and ΔU = q.' },
        { front: 'Relation between C<sub>p</sub> and C<sub>v</sub> for an ideal gas?', back: '<b>C<sub>p</sub> − C<sub>v</sub> = R</b>.' },
        { front: 'Heat capacity ratio?', back: '<b>γ = C<sub>p</sub>/C<sub>v</sub></b>.' },
        { front: 'C<sub>v</sub> and C<sub>p</sub> of a monatomic ideal gas?', back: '<b>3/2 R</b> and <b>5/2 R</b>.' }
      ],
      oneLiners: [
        'H = U + PV, and ΔH = ΔU + PΔV at constant pressure.',
        'At constant volume ΔU = q; at constant pressure ΔH = q.',
        'C = q/ΔT; per gram it is specific heat, per mole molar heat capacity.',
        'Cp − Cv = R for one mole of an ideal gas.',
        'γ = Cp/Cv.',
        'Monatomic ideal gas: Cv = 3/2 R and Cp = 5/2 R.'
      ],
      formulas: [
        { name: 'Enthalpy', html: `H = U + PV`, note: 'ΔH = ΔU + PΔV at constant pressure.' },
        { name: 'Heat capacity', html: `C = q / (T<sub>2</sub> − T<sub>1</sub>)`, note: 'Molar heat capacity varies with temperature.' },
        { name: 'Mayer relation', html: `C<sub>p</sub> − C<sub>v</sub> = R`, note: 'For 1 mol of an ideal gas.' },
        { name: 'Heat capacity ratio', html: `γ = C<sub>p</sub> / C<sub>v</sub>`, note: '' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm1-expansion-work',
      title: 'First law applied to expansion work',
      short: 'Expansion work',
      blurb: 'Isothermal reversible and irreversible expansion, adiabatic expansion (reversible, free, against constant pressure), isobaric and isochoric processes.',
      source: 'Pages 40–43',
      tabs: [
        { title: 'Isothermal', html: `
          <p class="lead">In an isothermal process the temperature stays constant, so pressure and volume are <b>inversely proportional</b>.</p>
          <ul>
            <li>For an ideal gas, U ∝ T. If T is fixed, <b>ΔU = 0</b>.</li>
            <li>If the system does work, the energy comes from <b>heat flowing in</b> from the surroundings.</li>
            <li>If work is done on the system, heat flows <b>out</b> to the surroundings.</li>
            <li>The size of w depends on whether the expansion is <b>reversible or irreversible</b>.</li>
          </ul>
          <div class="eq" data-label="Reversible, n moles">w = −nRT ln <span class="frac"><span>V<sub>2</sub></span><span>V<sub>1</sub></span></span> = −nRT ln <span class="frac"><span>P<sub>1</sub></span><span>P<sub>2</sub></span></span></div>
          <p>The work equals the <b>area under the isotherm</b> P = nRT/V. In an irreversible expansion against the same final pressure, the work is the smaller rectangular area.</p>
          <figure data-fig="m1-pv-isothermal"></figure>
          <div class="note exam"><p><b>Reversible work is the maximum work.</b> The numericals call it the maximum work done, W = −nRT ln(P<sub>1</sub>/P<sub>2</sub>).</p></div>
        ` },
        { title: 'Adiabatic', html: `
          <p class="lead">In an adiabatic process <b>q = 0</b>, so the first law reduces to <b>ΔU = w</b>. The system pays for its work out of its own internal energy.</p>
          <figure data-fig="m1-pv-adiabatic"></figure>
          <ul>
            <li>Expansion: w = −ve, ΔU = −ve, so the <b>temperature falls</b>.</li>
            <li>Example: a CO<sub>2</sub> fire extinguisher. The gas leaves at high pressure and cools as it expands at atmospheric pressure.</li>
          </ul>
          <h3>Reversible adiabatic (1 mole)</h3>
          <div class="eq">w = ΔU = C<sub>v</sub> ΔT</div>
          <div class="eq">ΔH = C<sub>p</sub> ΔT</div>
          <div class="eq" data-label="T–V relation">C<sub>v</sub> ln <span class="frac"><span>T<sub>i</sub></span><span>T<sub>f</sub></span></span> = R ln <span class="frac"><span>V<sub>f</sub></span><span>V<sub>i</sub></span></span></div>
          <div class="eq" data-label="Same, with γ">T<sub>i</sub>/T<sub>f</sub> = (V<sub>f</sub>/V<sub>i</sub>)<sup>γ−1</sup></div>
          <div class="note why"><p>The slide gets the last form step by step: ln(T<sub>i</sub>/T<sub>f</sub>) = (γ − 1) ln(V<sub>f</sub>/V<sub>i</sub>), then γ − 1 = (C<sub>p</sub> − C<sub>v</sub>)/C<sub>v</sub> = R/C<sub>v</sub>.</p></div>
          <h3>Irreversible adiabatic</h3>
          <ul>
            <li><b>Free expansion</b> (P<sub>ex</sub> = 0): ΔT = 0, w = 0, ΔH = 0.</li>
            <li><b>Against a constant external pressure:</b> C<sub>v</sub>(T<sub>f</sub> − T<sub>i</sub>) = −P<sub>ex</sub>(V<sub>f</sub> − V<sub>i</sub>). Writing V = RT/P for one mole turns this into an equation in T<sub>f</sub>, P<sub>f</sub>, T<sub>i</sub> and P<sub>i</sub>.</li>
          </ul>
        ` },
        { title: 'Isobaric & isochoric', html: `
          <p class="lead">Two simple cases: pressure fixed, or volume fixed.</p>
          <figure data-fig="m1-pv-isobaric-isochoric"></figure>
          <div class="vs">
            <div class="side"><h4>Isobaric</h4><p>Pressure is constant. Work = <b>pressure × change in volume</b>.</p><div class="eq">w = −P ΔV</div><p>Example: a gas slowly heated or cooled, held by a piston in a cylinder.</p></div>
            <div class="side"><h4>Isochoric</h4><p>Volume is constant, so the <b>work done is zero</b>.</p><div class="eq">w = 0, ΔU = q<sub>v</sub></div><p>Example: a gas in a box with fixed walls.</p></div>
          </div>
        ` },
        { title: 'Summary table', html: `
          <table class="tbl">
            <thead><tr><th>Process</th><th>Fixed</th><th>Key result</th></tr></thead>
            <tbody>
              <tr><td>Isothermal (ideal gas)</td><td>T</td><td>ΔU = 0, q = −w; w = −nRT ln(V<sub>2</sub>/V<sub>1</sub>) if reversible</td></tr>
              <tr><td>Adiabatic</td><td>q = 0</td><td>ΔU = w = C<sub>v</sub>ΔT; T falls on expansion</td></tr>
              <tr><td>Isobaric</td><td>P</td><td>w = −PΔV</td></tr>
              <tr><td>Isochoric</td><td>V</td><td>w = 0, ΔU = q</td></tr>
            </tbody>
          </table>
          <div class="note trap"><p>In free expansion nothing is pushed, so w = 0. Do not confuse it with reversible adiabatic expansion, where the gas does work and cools.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'ΔU for an isothermal process of an ideal gas?', back: '<b>Zero</b>, because U depends only on T.' },
        { front: 'Reversible isothermal work, n moles?', back: '<b>w = −nRT ln(V<sub>2</sub>/V<sub>1</sub>) = −nRT ln(P<sub>1</sub>/P<sub>2</sub>)</b>.' },
        { front: 'Which is larger: reversible or irreversible isothermal work?', back: '<b>Reversible.</b> It is the maximum work, the area under the isotherm.' },
        { front: 'First law for an adiabatic process?', back: '<b>ΔU = w</b>, since q = 0.' },
        { front: 'Why does a CO<sub>2</sub> extinguisher cool the gas?', back: 'Adiabatic expansion: work is done at the expense of internal energy, so <b>T falls</b>.' },
        { front: 'Reversible adiabatic T–V relation?', back: '<b>T<sub>i</sub>/T<sub>f</sub> = (V<sub>f</sub>/V<sub>i</sub>)<sup>γ−1</sup></b>.' },
        { front: 'Free expansion (P<sub>ex</sub> = 0): what are ΔT, w, ΔH?', back: 'All <b>zero</b>.' },
        { front: 'Work in isobaric and isochoric processes?', back: 'Isobaric: <b>P ΔV</b> (w = −PΔV). Isochoric: <b>zero</b>.' }
      ],
      oneLiners: [
        'Isothermal, ideal gas: ΔU = 0, so heat in equals work out.',
        'Reversible isothermal work = −nRT ln(V2/V1), the maximum work.',
        'Adiabatic: q = 0, ΔU = w = CvΔT, ΔH = CpΔT.',
        'Reversible adiabatic: Ti/Tf = (Vf/Vi)^(γ−1).',
        'Free expansion into vacuum: w = 0, ΔT = 0, ΔH = 0.',
        'Isochoric: no work. Isobaric: w = −PΔV.'
      ],
      formulas: [
        { name: 'Isothermal reversible work', html: `w = −nRT ln(V<sub>2</sub>/V<sub>1</sub>) = −nRT ln(P<sub>1</sub>/P<sub>2</sub>)`, note: 'Maximum work for an ideal gas.' },
        { name: 'Adiabatic (1 mol)', html: `w = ΔU = C<sub>v</sub>ΔT, ΔH = C<sub>p</sub>ΔT`, note: 'q = 0.' },
        { name: 'Reversible adiabatic', html: `C<sub>v</sub> ln(T<sub>i</sub>/T<sub>f</sub>) = R ln(V<sub>f</sub>/V<sub>i</sub>)`, note: 'Equivalent to T<sub>i</sub>/T<sub>f</sub> = (V<sub>f</sub>/V<sub>i</sub>)<sup>γ−1</sup>.' },
        { name: 'Constant external pressure', html: `w = −P<sub>ex</sub> ΔV`, note: 'Used for expansion against a fixed pressure.' }
      ]
    }
  ],
  figures: [
    { id: 'm1-pv-isothermal', src: null, crop: null,
      caption: 'On a P-V diagram the reversible work is the whole area under the isotherm. Expanding against the final pressure P2 in one step gives only the smaller rectangle.',
      alt: 'P against V graph with a falling hyperbola from P1 at V1 to P2 at V2. The area under the curve is shaded blue and a lower rectangle of height P2 from V1 to V2 is shaded orange.' },
    { id: 'm1-pv-adiabatic', src: null, crop: null,
      caption: 'From the same start A, the adiabat falls more steeply than the isotherm, so the same volume change ends at a lower pressure (and lower temperature) at C.',
      alt: 'P against V graph with two falling curves from point A: a blue isotherm ending at B and a steeper red adiabat ending lower at C, both at volume V2.' },
    { id: 'm1-pv-isobaric-isochoric', src: null, crop: null,
      caption: 'Isobaric: a horizontal line whose area under it is the work. Isochoric: a vertical line with no area under it, so no work.',
      alt: 'Two small P against V graphs. Top: a horizontal arrow with the rectangle under it shaded and labelled w equals minus P delta V. Bottom: a vertical downward arrow labelled no area, so w equals zero.' }
  ]
});
