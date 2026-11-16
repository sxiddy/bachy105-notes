CHUNK({
  chunk: 'I',
  module: 'm1',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm1-second-law-entropy',
      title: 'Second law and entropy',
      short: 'Second law & entropy',
      blurb: 'Why a second law is needed, entropy as a state function, entropy of the universe, Clausius inequality, and entropy change for ideal-gas processes.',
      source: 'Pages 44–47',
      tabs: [
        { title: 'Why a second law', html: `
          <p class="lead">The first law only says energy is conserved. It says <b>nothing about direction</b>. The second law tells you which way a process goes by itself.</p>
          <ul>
            <li>Heat does <b>not</b> flow spontaneously from a cool body to a hotter body.</li>
            <li>The <b>entropy (S) of an isolated system increases</b> in the course of a spontaneous change.</li>
          </ul>
          <div class="eq" data-label="Second law">ΔS<sub>tot</sub> &gt; 0, where S<sub>tot</sub> = S + S<sub>sur</sub></div>
          <div class="kv">
            <div><span>S</span><b>entropy of the system of interest</b></div>
            <div><span>S<sub>sur</sub></span><b>entropy of the surroundings</b></div>
          </div>
          <div class="note exam"><p>The second law is a statement about the <b>total</b> entropy of the isolated system (the universe), and not just about the system you are studying.</p></div>
          <div data-viz="entropy-expansion"></div>
          <figure data-fig="m1-free-expansion"></figure>
          <ul>
            <li>The <b>1st law</b> uses internal energy to identify <b>permissible</b> changes.</li>
            <li>The <b>2nd law</b> uses entropy to pick out which permissible changes are <b>spontaneous</b>.</li>
          </ul>
        ` },
        { title: 'Entropy', html: `
          <p class="lead">Entropy is a <b>state function</b>. Its thermodynamic definition looks at the change dS caused by a physical or chemical process.</p>
          <div class="eq" data-label="Definition">dS = <span class="frac"><span>dq<sub>rev</sub></span><span>T</span></span></div>
          <p>dq<sub>rev</sub> is the energy transferred as heat <b>reversibly</b> to the system at absolute temperature T.</p>
          <ul>
            <li>Processes that raise entropy (ΔS &gt; 0) show <b>increasing disorder</b>.</li>
            <li>Isothermal expansion of a perfect gas: <b>ΔS = nR ln(V<sub>f</sub>/V<sub>i</sub>)</b>.</li>
          </ul>
        ` },
        { title: 'Irreversible & Clausius', html: `
          <p class="lead">Take an ideal gas expanding isothermally into a <b>vacuum</b>. No work is done and no heat flows, yet the gas has more room, so its entropy rises.</p>
          <div class="vs">
            <div class="side"><h4>Reversible isothermal expansion</h4><p>The system gains entropy <b>q<sub>rev</sub>/T</b>; the surroundings lose the same amount, so the total change is zero.</p></div>
            <div class="side"><h4>Irreversible (into vacuum)</h4><p>The system gains nR ln(V<sub>f</sub>/V<sub>i</sub>) but the surroundings change by <b>zero</b>, so ΔS<sub>tot</sub> &gt; 0.</p></div>
          </div>
          <p>The <b>Clausius inequality</b> says all spontaneous processes in nature are irreversible and the entropy of the universe is <b>increasing continuously</b>.</p>
          <div class="note example"><p>Clausius summed up both laws: <b>the energy of the universe remains constant; the entropy of the universe tends towards a maximum.</b></p></div>
        ` },
        { title: 'ΔS for ideal-gas processes', html: `
          <p class="lead">One formula per process, all for <b>1 mole</b> of an ideal gas. For n moles multiply by n.</p>
          <figure data-fig="m1-entropy-isobaric-isochoric"></figure>
          <table class="tbl">
            <thead><tr><th>Process</th><th>Entropy change</th></tr></thead>
            <tbody>
              <tr><td>Variable T and V</td><td>ΔS = C<sub>v</sub> ln(T<sub>f</sub>/T<sub>i</sub>) + R ln(V<sub>f</sub>/V<sub>i</sub>)</td></tr>
              <tr><td>Variable P and T</td><td>ΔS = C<sub>p</sub> ln(T<sub>f</sub>/T<sub>i</sub>) − R ln(P<sub>f</sub>/P<sub>i</sub>)</td></tr>
              <tr><td>Isothermal</td><td>ΔS<sub>T</sub> = R ln(V<sub>f</sub>/V<sub>i</sub>) = −R ln(P<sub>f</sub>/P<sub>i</sub>)</td></tr>
              <tr><td>Isobaric</td><td>ΔS<sub>P</sub> = C<sub>p</sub> ln(T<sub>f</sub>/T<sub>i</sub>)</td></tr>
              <tr><td>Isochoric</td><td>ΔS<sub>V</sub> = C<sub>v</sub> ln(T<sub>f</sub>/T<sub>i</sub>)</td></tr>
            </tbody>
          </table>
          <p>For a phase change at its transition temperature the numericals use <b>ΔS = ΔH/T</b>, and for heat absorbed reversibly <b>ΔS = q/T</b>.</p>
          <div class="note trap"><p>Isothermal ideal gas: V<sub>f</sub>/V<sub>i</sub> = P<sub>i</sub>/P<sub>f</sub>, which is why the volume and pressure forms carry opposite signs.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Why do we need the second law?', back: 'The first law gives no <b>direction</b> of change. The second law identifies which changes are <b>spontaneous</b>.' },
        { front: 'Second law in terms of entropy?', back: '<b>ΔS<sub>tot</sub> &gt; 0</b> for a spontaneous change, where S<sub>tot</sub> = S + S<sub>sur</sub>.' },
        { front: 'Thermodynamic definition of entropy?', back: '<b>dS = dq<sub>rev</sub>/T</b>. Entropy is a state function.' },
        { front: 'Entropy change in isothermal expansion of an ideal gas?', back: '<b>ΔS = nR ln(V<sub>f</sub>/V<sub>i</sub>)</b>.' },
        { front: 'What did Clausius sum up?', back: 'The energy of the universe is constant; the <b>entropy of the universe tends to a maximum</b>.' },
        { front: 'ΔS for heating an ideal gas at constant pressure?', back: '<b>C<sub>p</sub> ln(T<sub>f</sub>/T<sub>i</sub>)</b> per mole.' },
        { front: 'ΔS for variable T and V?', back: '<b>C<sub>v</sub> ln(T<sub>f</sub>/T<sub>i</sub>) + R ln(V<sub>f</sub>/V<sub>i</sub>)</b>.' },
        { front: 'ΔS of vaporisation at the boiling point?', back: '<b>ΔS = ΔH/T</b>.' }
      ],
      oneLiners: [
        'First law: which changes are allowed. Second law: which are spontaneous.',
        'Spontaneous change means ΔS_total (system + surroundings) is greater than zero.',
        'dS = dq_rev / T and entropy is a state function.',
        'Free expansion into vacuum: system entropy rises, surroundings unchanged, total rises.',
        'Isothermal ideal gas: ΔS = nR ln(Vf/Vi) = −nR ln(Pf/Pi).',
        'Isobaric: ΔS = Cp ln(Tf/Ti). Isochoric: ΔS = Cv ln(Tf/Ti).'
      ],
      formulas: [
        { name: 'Entropy (definition)', html: `dS = dq<sub>rev</sub> / T`, note: 'State function.' },
        { name: 'Second law', html: `ΔS<sub>tot</sub> = ΔS + ΔS<sub>sur</sub> &gt; 0`, note: 'For a spontaneous process.' },
        { name: 'Variable T and V', html: `ΔS = C<sub>v</sub> ln(T<sub>f</sub>/T<sub>i</sub>) + R ln(V<sub>f</sub>/V<sub>i</sub>)`, note: '1 mol of ideal gas.' },
        { name: 'Variable P and T', html: `ΔS = C<sub>p</sub> ln(T<sub>f</sub>/T<sub>i</sub>) − R ln(P<sub>f</sub>/P<sub>i</sub>)`, note: '1 mol of ideal gas.' },
        { name: 'Isothermal', html: `ΔS = nR ln(V<sub>f</sub>/V<sub>i</sub>) = −nR ln(P<sub>f</sub>/P<sub>i</sub>)`, note: '' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm1-carnot-cycle',
      title: 'Carnot cycle and heat engines',
      short: 'Carnot cycle',
      blurb: 'Heat engine, the four reversible strokes, the area as net work, Kelvin and Clausius statements, efficiency, applications and the thermodynamic temperature scale.',
      source: 'Pages 48–53, 54',
      tabs: [
        { title: 'Heat engine', html: `
          <p class="lead">A <b>heat engine</b> transforms heat into work, and it does so in a <b>cyclic process</b>.</p>
          <figure data-fig="m1-heat-engine"></figure>
          <div class="kv">
            <div><span>Hot reservoir (T<sub>h</sub>)</span><b>supplies heat Q<sub>H</sub></b></div>
            <div><span>Cold reservoir (T<sub>c</sub>)</span><b>receives waste heat Q<sub>C</sub></b></div>
          </div>
          <ul>
            <li>The engine needs a hot reservoir to supply energy and a cold reservoir to take in the excess.</li>
            <li>Q<sub>H</sub> is defined as <b>positive</b>, Q<sub>C</sub> as <b>negative</b>.</li>
            <li>In a car engine, Q<sub>C</sub> is the heat released into the atmosphere through the exhaust.</li>
          </ul>
          <div class="eq" data-label="Thermal efficiency">η = <span class="frac"><span>work performed</span><span>heat absorbed from the hot source</span></span> = <span class="frac"><span>W</span><span>q<sub>h</sub></span></span></div>
        ` },
        { title: 'Four strokes', html: `
          <p class="lead">A <b>Carnot cycle</b> (Sadi Carnot, French engineer) has four <b>reversible</b> stages. The working substance is 1 mole of an ideal gas, and the cycle shows the <b>maximum convertibility of heat into work</b>.</p>
          <table class="tbl">
            <thead><tr><th>Stroke</th><th>Curve</th><th>What happens</th><th>Heat / work</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>A → B</td><td><b>Isothermal expansion</b> at T<sub>h</sub>, in contact with the hot source</td><td>q<sub>h</sub> = −w<sub>1</sub> = RT<sub>h</sub> ln(V<sub>B</sub>/V<sub>A</sub>); entropy change q<sub>h</sub>/T<sub>h</sub></td></tr>
              <tr><td>2</td><td>B → C</td><td><b>Adiabatic expansion</b>; T falls from T<sub>h</sub> to T<sub>c</sub></td><td>No heat leaves, ΔS = 0; work done by the gas</td></tr>
              <tr><td>3</td><td>C → D</td><td><b>Isothermal compression</b> at T<sub>c</sub>, in contact with the cold sink</td><td>−q<sub>c</sub> = w<sub>3</sub> = RT<sub>c</sub> ln(V<sub>D</sub>/V<sub>C</sub>); entropy change q<sub>c</sub>/T<sub>c</sub> (q<sub>c</sub> negative)</td></tr>
              <tr><td>4</td><td>D → A</td><td><b>Adiabatic compression</b>; T rises back to T<sub>h</sub></td><td>No heat enters, ΔS = 0; work done on the gas</td></tr>
            </tbody>
          </table>
          <p>The <b>area enclosed</b> by the four curves on the P–V diagram is the net work done by the engine in one cycle.</p>
          <figure data-fig="m1-carnot-pv"></figure>
        ` },
        { title: 'Efficiency & statements', html: `
          <p class="lead">Add the entropy changes round the cycle and the total is zero, which links heat to temperature.</p>
          <figure data-fig="m1-carnot-ts"></figure>
          <div class="eq">∮ dS = <span class="frac"><span>q<sub>h</sub></span><span>T<sub>h</sub></span></span> + <span class="frac"><span>q<sub>c</sub></span><span>T<sub>c</sub></span></span> = 0, so q<sub>h</sub>/q<sub>c</sub> = −T<sub>h</sub>/T<sub>c</sub></div>
          <div class="eq" data-label="Carnot efficiency">η = <span class="frac"><span>W</span><span>q<sub>h</sub></span></span> = 1 − <span class="frac"><span>q<sub>c</sub></span><span>q<sub>h</sub></span></span> = 1 − <span class="frac"><span>T<sub>c</sub></span><span>T<sub>h</sub></span></span></div>
          <div class="vs">
            <div class="side"><h4>Kelvin statement</h4><p>It is impossible for any system to have an efficiency of 100% (η = 1).</p></div>
            <div class="side"><h4>Clausius statement</h4><p>It is impossible for any process to have as its sole result the transfer of heat from a cooler object to a warmer one.</p></div>
          </div>
          <div class="note exam"><p>Temperatures in the efficiency formula must be in <b>kelvin</b>. Efficiency is never 1 unless T<sub>c</sub> = 0 K.</p></div>
          <div data-viz="carnot-engine"></div>
        ` },
        { title: 'Carnot theorem & limits', html: `
          <p class="lead"><b>Carnot theorem:</b> no engine working between two given temperatures can be more efficient than a reversible (Carnot) engine working between the same two temperatures, and <b>all reversible engines working between the same two temperatures have the same efficiency</b>, whatever the working substance.</p>
          <h3>Proof by contradiction (outline)</h3>
          <ol>
            <li>Suppose an engine X between T<sub>h</sub> and T<sub>c</sub> is more efficient than a reversible Carnot engine C between the same reservoirs.</li>
            <li>Because C is reversible, it can be run backwards as a refrigerator. Let X drive C: X takes heat q<sub>h</sub>′ from the hot reservoir and gives work W, and C uses this same W to pump heat q<sub>h</sub> back into the hot reservoir.</li>
            <li>Since X is more efficient, it needs less heat for the same work, so q<sub>h</sub>′ &lt; q<sub>h</sub>. The pair together delivers a net amount of heat (q<sub>h</sub> − q<sub>h</sub>′) to the hot reservoir and takes the same amount from the cold reservoir, with no work supplied from outside.</li>
            <li>That means heat flows from a cold body to a hot body as the only result, which the <b>Clausius statement</b> forbids. So X cannot be more efficient than C.</li>
            <li>Applying the same argument with two reversible engines in each order shows neither can beat the other, so all reversible engines between the same T<sub>h</sub> and T<sub>c</sub> have the same efficiency, η = 1 − T<sub>c</sub>/T<sub>h</sub>.</li>
          </ol>
          <h3>Why efficiency can never be 100%</h3>
          <p>η = 1 − T<sub>c</sub>/T<sub>h</sub> equals 1 only if T<sub>c</sub> = 0 K. Absolute zero cannot be reached (third law), so some heat q<sub>c</sub> must always be rejected to the cold sink and η &lt; 1. Real engines are also irreversible (friction, heat leaks, fast strokes), so they fall below even the Carnot value.</p>
          <h3>How to make η as large as possible</h3>
          <ul>
            <li><b>Raise T<sub>h</sub></b>, the temperature at which heat is taken in (hotter combustion, superheated steam), limited by what the materials can stand.</li>
            <li><b>Lower T<sub>c</sub></b>, the temperature at which heat is rejected (better cooling, colder exhaust sink).</li>
            <li>Make the cycle as close to <b>reversible</b> as possible: cut friction, heat leaks and sudden pressure drops.</li>
          </ul>
          <h3>Perpetual motion machine of the second kind</h3>
          <p>A <b>perpetual motion machine of the second kind</b> is an imagined machine that takes heat from a single reservoir and turns all of it into work in a cycle, with nothing rejected to a colder body (for example, a ship driven only by heat drawn from sea water). It does not break the first law, because energy is conserved, but it breaks the <b>Kelvin–Planck statement</b> of the second law, so it is impossible. (A machine of the <b>first kind</b> would create work from nothing and breaks the first law.)</p>
          <div class="note exam"><p>"State and prove Carnot theorem": write the statement, the five-step contradiction argument above, and end with η = 1 − T<sub>c</sub>/T<sub>h</sub> depending only on the two temperatures. Add one line on why η &lt; 1 and how to raise it.</p></div>
        ` },
        { title: 'Uses & temperature scale', html: `
          <p class="lead">The efficiency of a Carnot cycle is <b>independent of the working substance</b>. Any reversible cycle that absorbs heat at one temperature and rejects it at another has the Carnot efficiency.</p>
          <h3>Applications</h3>
          <div class="chips"><span class="chip">heat pumps (heating)</span><span class="chip">refrigerators (cooling)</span><span class="chip">air conditioners</span><span class="chip">steam turbines in ships</span><span class="chip">combustion engines of vehicles</span><span class="chip">reaction turbines of aircraft</span></div>
          <p>Refrigerators, air conditioners and heat pumps are <b>heat engines running in reverse</b>: work is done to extract heat from the cold reservoir and exhaust it to the hot one.</p>
          <h3>Thermodynamic temperature</h3>
          <ul>
            <li>For a reversible engine between T<sub>h</sub> and T<sub>c</sub>: <b>T<sub>c</sub> = (1 − η) T<sub>h</sub></b>.</li>
            <li>Kelvin used this to define the thermodynamic temperature scale: the hot source is at a known temperature, the cold sink is the object of interest.</li>
            <li>The Kelvin scale is defined using water at its <b>triple point</b> as the notional hot source, fixed at <b>273.16 K</b> exactly.</li>
          </ul>
        ` }
      ],
      flashcards: [
        { front: 'What is a heat engine?', back: 'A device that transforms <b>heat into work</b> in a cyclic process, using a hot and a cold reservoir.' },
        { front: 'Four strokes of the Carnot cycle?', back: '<b>Isothermal expansion, adiabatic expansion, isothermal compression, adiabatic compression</b> (A→B→C→D→A).' },
        { front: 'Carnot efficiency?', back: '<b>η = 1 − T<sub>c</sub>/T<sub>h</sub></b> (kelvin).' },
        { front: 'What does the area inside the Carnot cycle represent?', back: 'The <b>net work</b> done by the engine in one cycle.' },
        { front: 'Kelvin statement of the second law?', back: 'No engine can be <b>100% efficient</b>.' },
        { front: 'Clausius statement?', back: 'Heat cannot by itself flow from a <b>cooler to a warmer</b> body as the sole result of a process.' },
        { front: 'Does Carnot efficiency depend on the working substance?', back: '<b>No.</b> It depends only on T<sub>h</sub> and T<sub>c</sub>.' },
        { front: 'What is a refrigerator thermodynamically?', back: 'A heat engine <b>run in reverse</b>: work moves heat from cold to hot.' },
        { front: 'Kelvin scale fixed point?', back: 'Triple point of water = <b>273.16 K</b> exactly.' },
        { front: 'State Carnot theorem.', back: 'No engine between two temperatures beats a reversible engine between them; <b>all reversible engines between the same T<sub>h</sub> and T<sub>c</sub> have the same efficiency</b>.' },
        { front: 'How is Carnot theorem proved?', back: 'By contradiction: a more efficient engine driving a reversed Carnot engine would move heat from cold to hot with no work, breaking the <b>Clausius statement</b>.' },
        { front: 'Why can η never be 100%?', back: 'η = 1 only if <b>T<sub>c</sub> = 0 K</b>, which cannot be reached; real engines are also irreversible.' },
        { front: 'How do you maximise engine efficiency?', back: '<b>Raise T<sub>h</sub>, lower T<sub>c</sub></b>, and make the cycle as close to reversible as possible.' },
        { front: 'Perpetual motion machine of the second kind?', back: 'Turns heat from <b>one reservoir</b> fully into work; obeys the first law but breaks the <b>Kelvin–Planck statement</b>.' }
      ],
      oneLiners: [
        'Carnot cycle: isothermal expansion, adiabatic expansion, isothermal compression, adiabatic compression.',
        'Carnot efficiency η = 1 − Tc/Th, independent of the working substance.',
        'qh/Th + qc/Tc = 0 around a Carnot cycle, so ∮dS = 0.',
        'No engine reaches 100% efficiency (Kelvin); heat does not flow cold to hot unaided (Clausius).',
        'Refrigerators and heat pumps are heat engines in reverse.',
        'Tc = (1 − η)Th defines the thermodynamic temperature; water triple point = 273.16 K.',
        'Carnot theorem: all reversible engines between the same two temperatures have the same efficiency.',
        'η < 1 because Tc = 0 K is unattainable; raise Th and lower Tc to raise η.',
        'Perpetual motion machine of the second kind breaks the second law, not the first.'
      ],
      formulas: [
        { name: 'Thermal efficiency', html: `η = W / q<sub>h</sub> = 1 − q<sub>c</sub>/q<sub>h</sub>`, note: '' },
        { name: 'Carnot efficiency', html: `η = 1 − T<sub>c</sub> / T<sub>h</sub>`, note: 'Temperatures in kelvin.' },
        { name: 'Entropy around the cycle', html: `∮ dS = q<sub>h</sub>/T<sub>h</sub> + q<sub>c</sub>/T<sub>c</sub> = 0`, note: 'So q<sub>h</sub>/q<sub>c</sub> = −T<sub>h</sub>/T<sub>c</sub>.' },
        { name: 'Isothermal stroke work', html: `q<sub>h</sub> = RT<sub>h</sub> ln(V<sub>B</sub>/V<sub>A</sub>), −q<sub>c</sub> = RT<sub>c</sub> ln(V<sub>D</sub>/V<sub>C</sub>)`, note: 'Strokes 1 and 3.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm1-free-energy',
      title: 'Free energy and spontaneity',
      short: 'Free energy',
      blurb: 'Helmholtz and Gibbs free energy from the Clausius inequality, endothermic and exothermic reactions, equilibrium, and the meaning of a spontaneous reaction.',
      source: 'Pages 54–57',
      tabs: [
        { title: 'Why free energy', html: `
          <p class="lead">It is not always easy to find the entropy change of <b>both</b> the system and the surroundings. Free energy lets you decide spontaneity from the <b>system alone</b>.</p>
          <p>Since ΔS<sub>total</sub> = S<sub>system</sub> + S<sub>surroundings</sub> is the criterion for spontaneity, we express it through the free energy functions. Three assumptions are used:</p>
          <ol>
            <li>The system is in thermal equilibrium with its surroundings at temperature T.</li>
            <li>Heat transfer happens at <b>constant volume</b> (gives Helmholtz energy).</li>
            <li>Heat transfer happens at <b>constant pressure</b> (gives Gibbs energy).</li>
          </ol>
        ` },
        { title: 'Helmholtz & Gibbs', html: `
          <p class="lead">Two free energy functions, one for each constraint.</p>
          <div class="vs">
            <div class="side"><h4>Constant T and V</h4><p>Clausius inequality becomes dS − dU/T ≥ 0, i.e. TdS ≥ dU.</p><div class="eq">A = U − TS</div><div class="eq">dA = dU − TdS ≤ 0</div><p>A = <b>Helmholtz free energy</b>.</p></div>
            <div class="side"><h4>Constant T and P</h4><p>Clausius inequality becomes dS − dH/T ≥ 0, i.e. TdS ≥ dH (no additional work).</p><div class="eq">G = H − TS</div><div class="eq">dG = dH − TdS ≤ 0</div><p>G = <b>Gibbs free energy</b>.</p></div>
          </div>
          <div class="note exam"><p>Criterion: <b>dG ≤ 0 and dA ≤ 0</b>. A reaction at constant T and P is spontaneous only if G decreases. This follows from applying the 1st law with dq<sub>v</sub> = dU.</p></div>
        ` },
        { title: 'Endo- and exothermic', html: `
          <p class="lead">Because dG = dH − TdS, the sign of dG comes from a tug of war between enthalpy and entropy.</p>
          <div class="vs">
            <div class="side"><h4>Endothermic (dH &gt; 0)</h4><p>To be spontaneous at constant T and P, G must decrease. That is possible only if the entropy of the system rises so much that <b>TdS outweighs dH</b>.</p><p>Endothermic reactions are therefore <b>driven by the increase of entropy</b> of the system.</p></div>
            <div class="side"><h4>Exothermic (dH &lt; 0)</h4><p>Commonly spontaneous, because dH &lt; 0 makes dG &lt; 0, provided TdS is not so negative that it outweighs the decrease in enthalpy.</p></div>
          </div>
          <div class="kv">
            <div><span>At chemical equilibrium</span><b>dG = 0</b></div>
            <div><span>Isothermal change of an ideal gas</span><b>ΔG = nRT ln(P<sub>2</sub>/P<sub>1</sub>) = nRT ln(V<sub>1</sub>/V<sub>2</sub>)</b></div>
          </div>
        ` },
        { title: 'Spontaneous reaction', html: `
          <p class="lead">A <b>spontaneous reaction</b> favours the formation of products at the conditions where it runs. It happens <b>without outside intervention</b>, but it may be fast or slow.</p>
          <figure data-fig="m1-gibbs-reaction-progress"></figure>
          <div class="note example"><p>Graphite turning into diamond is slow. A burning fire is relatively fast. Both are spontaneous.</p></div>
          <ul>
            <li>"In any spontaneous process there is always an increase in the entropy of the universe." So <b>ΔS<sub>universe</sub> must be positive</b>.</li>
            <li>The changes in <b>enthalpy, entropy and free energy</b> are the driving forces behind all chemical reactions.</li>
            <li>Free energy is the energy <b>available to do work</b>. The free energy change is a mathematical combination of the enthalpy change and the entropy change.</li>
            <li>A spontaneous reaction releases free energy, so the sign of ΔG must be <b>negative</b>.</li>
          </ul>
          <div class="note trap"><p>Spontaneous does not mean fast. ΔG tells you the direction, not the rate. Rates belong to chemical kinetics, the other half of this module.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Define Gibbs free energy.', back: '<b>G = H − TS</b>. At constant T and P, <b>dG ≤ 0</b> for a spontaneous change.' },
        { front: 'Define Helmholtz free energy.', back: '<b>A = U − TS</b>. At constant T and V, <b>dA ≤ 0</b>.' },
        { front: 'What is dG at equilibrium?', back: '<b>Zero.</b>' },
        { front: 'What drives an endothermic spontaneous reaction?', back: 'An <b>increase in entropy</b> of the system large enough that TdS outweighs dH.' },
        { front: 'Is a spontaneous reaction always fast?', back: '<b>No.</b> Graphite to diamond is spontaneous but slow.' },
        { front: 'Isothermal free energy change of an ideal gas?', back: '<b>ΔG = nRT ln(P<sub>2</sub>/P<sub>1</sub>) = nRT ln(V<sub>1</sub>/V<sub>2</sub>)</b>.' },
        { front: 'What is free energy?', back: 'Energy <b>available to do work</b>, combining enthalpy and entropy changes.' }
      ],
      oneLiners: [
        'G = H − TS; spontaneous at constant T and P when dG ≤ 0.',
        'A = U − TS; spontaneous at constant T and V when dA ≤ 0.',
        'Endothermic reactions are driven by entropy; exothermic by enthalpy.',
        'dG = 0 at equilibrium.',
        'Spontaneous does not mean fast: ΔG gives direction, not rate.',
        'ΔS_universe must be positive for any spontaneous process.'
      ],
      formulas: [
        { name: 'Gibbs free energy', html: `G = H − TS, dG = dH − TdS`, note: 'Constant T and P; spontaneous if dG ≤ 0.' },
        { name: 'Helmholtz free energy', html: `A = U − TS, dA = dU − TdS`, note: 'Constant T and V; spontaneous if dA ≤ 0.' },
        { name: 'Isothermal ΔG of an ideal gas', html: `ΔG = nRT ln(P<sub>2</sub>/P<sub>1</sub>) = nRT ln(V<sub>1</sub>/V<sub>2</sub>)`, note: '' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm1-gibbs-helmholtz-third-law',
      title: "Third law and the Gibbs–Helmholtz equation",
      short: "3rd law, G–H equation",
      blurb: 'ΔG = ΔH − TΔS, how temperature changes spontaneity (the four sign cases), and the third law with S = k ln W.',
      source: 'Pages 58–60',
      tabs: [
        { title: 'Gibbs–Helmholtz', html: `
          <p class="lead">The <b>Gibbs–Helmholtz equation</b> connects Gibbs free energy with enthalpy, entropy and temperature. It is the working equation for spontaneity.</p>
          <div class="eq" data-label="Gibbs–Helmholtz">ΔG = ΔH − TΔS</div>
          <div class="kv">
            <div><span>ΔG</span><b>change in Gibbs free energy</b></div>
            <div><span>ΔH</span><b>change in enthalpy</b></div>
            <div><span>T</span><b>temperature in kelvin</b></div>
            <div><span>ΔS</span><b>change in entropy</b></div>
          </div>
          <ul>
            <li>ΔG &lt; 0: the process is <b>spontaneous</b>.</li>
            <li>ΔG &gt; 0: the process is <b>non-spontaneous</b>.</li>
          </ul>
          <details class="more"><summary>Differential form</summary>
            <p>The differentiated form relates the temperature dependence of G/T to the enthalpy: <b>[∂(ΔG/T)/∂T]<sub>P</sub> = −ΔH/T<sup>2</sup></b>. It leads to the van't Hoff equation, which relates the equilibrium constant K to temperature.</p>
          </details>
          <h3>Applications</h3>
          <ul>
            <li><b>Spontaneity</b> of reactions under given conditions.</li>
            <li><b>Effect of temperature</b> on free energy.</li>
            <li>Deriving the <b>van't Hoff equation</b> for K against T.</li>
          </ul>
        ` },
        { title: 'Four sign cases', html: `
          <p class="lead">Since ΔH and ΔS can each be positive or negative, there are four combinations. A spontaneous reaction has <b>ΔG negative</b>.</p>
          <table class="tbl">
            <thead><tr><th>ΔH°</th><th>ΔS°</th><th>ΔG°</th></tr></thead>
            <tbody>
              <tr><td>Negative</td><td>Positive</td><td><b>Always negative</b></td></tr>
              <tr><td>Positive</td><td>Positive</td><td>Negative at <b>higher</b> temperatures, positive at lower</td></tr>
              <tr><td>Negative</td><td>Negative</td><td>Negative at <b>lower</b> temperatures, positive at higher</td></tr>
              <tr><td>Positive</td><td>Negative</td><td><b>Always positive</b></td></tr>
            </tbody>
          </table>
          <ul>
            <li>ΔH &gt; 0 and ΔS &gt; 0: increasing T makes ΔG more negative, so the reaction becomes more spontaneous.</li>
            <li>ΔH &lt; 0 and ΔS &lt; 0: decreasing T makes ΔG more negative.</li>
          </ul>
          <div class="mnemonic">Same signs: temperature decides. Opposite signs: the answer never changes.</div>
          <h3>Worked case: adsorption of a gas on a solid</h3>
          <p>When a gas is adsorbed on a solid surface, the free-moving gas molecules become held in place on the surface, so their freedom of motion falls and <b>ΔS &lt; 0</b>. Even so, adsorption happens on its own. The reason is that adsorption is strongly <b>exothermic (ΔH &lt; 0)</b>, because bonds or attractive forces form between the gas and the surface. In ΔG = ΔH − TΔS the term −TΔS is positive, but at ordinary temperatures it is smaller than the large negative ΔH, so ΔG &lt; 0 and the process is spontaneous.</p>
          <p>This is the "ΔH negative, ΔS negative" row of the table: adsorption is favoured at <b>low temperature</b>. As T rises, TΔS grows until it cancels ΔH, which is why gases desorb on heating and why adsorption falls as temperature increases.</p>
          <div class="note exam"><p>"Adsorption is spontaneous though entropy decreases. Explain." Answer: ΔS &lt; 0, but ΔH is large and negative, so |ΔH| &gt; |TΔS| and ΔG = ΔH − TΔS &lt; 0; hence favoured at low T.</p></div>
          <div data-viz="gibbs-temperature"></div>
          <figure data-fig="m1-gibbs-four-cases"></figure>
        ` },
        { title: 'Third law', html: `
          <p class="lead">The <b>entropy of all perfect crystalline substances is zero at T = 0</b>.</p>
          <ul>
            <li>At 0 K all thermal motion is quenched, and in a perfect crystal every atom or ion sits in a regular, uniform array.</li>
            <li>Localised matter plus no thermal motion means <b>zero entropy</b>.</li>
          </ul>
          <div class="eq" data-label="Statistical definition">S = k ln W</div>
          <div class="kv">
            <div><span>S</span><b>entropy</b></div>
            <div><span>k</span><b>Boltzmann constant</b></div>
            <div><span>W</span><b>number of microstates, the ways a molecular state can be spread over the energy states for a given total energy</b></div>
          </div>
          <p>At T = 0, W = 1, so S = k ln 1 = <b>0</b>.</p>
          <figure data-fig="m1-entropy-temperature"></figure>
          <div class="note why"><p>If zero entropy is given to elements in their perfect crystalline form at 0 K, then all perfect crystalline <b>compounds</b> also have zero entropy at 0 K. This is why absolute entropies S° can be tabulated.</p></div>
          <h3>Absolute entropy from the third law</h3>
          <p>Because S = 0 at 0 K, the entropy of a substance at any temperature T can be found as an absolute value, not just as a change. Heating at constant pressure adds dS = dq<sub>rev</sub>/T = C<sub>p</sub> dT/T, so integrating from 0 K gives:</p>
          <div class="eq" data-label="Absolute entropy">S<sub>T</sub> = ∫<sub>0</sub><sup>T</sup> <span class="frac"><span>C<sub>p</sub></span><span>T</span></span> dT = ∫<sub>0</sub><sup>T</sup> C<sub>p</sub> d(ln T)</div>
          <p>If the substance melts or boils on the way up to T, the entropy of each phase change, ΔH<sub>trans</sub>/T<sub>trans</sub>, is added at that temperature:</p>
          <div class="eq">S<sub>T</sub> = ∫<sub>0</sub><sup>T<sub>f</sub></sup> <span class="frac"><span>C<sub>p</sub>(s)</span><span>T</span></span> dT + <span class="frac"><span>ΔH<sub>fus</sub></span><span>T<sub>f</sub></span></span> + ∫<sub>T<sub>f</sub></sub><sup>T<sub>b</sub></sup> <span class="frac"><span>C<sub>p</sub>(l)</span><span>T</span></span> dT + <span class="frac"><span>ΔH<sub>vap</sub></span><span>T<sub>b</sub></span></span> + ∫<sub>T<sub>b</sub></sub><sup>T</sup> <span class="frac"><span>C<sub>p</sub>(g)</span><span>T</span></span> dT</div>
          <p>In practice C<sub>p</sub> is measured down to a few kelvin, C<sub>p</sub>/T is plotted against T (or C<sub>p</sub> against ln T), and the area under the curve gives the entropy. These values are the standard absolute entropies S° listed in tables at 298 K.</p>
          <div class="note exam"><p>"How does the third law help to find absolute entropy?" Answer: it fixes S = 0 at 0 K for a perfect crystal, so S<sub>T</sub> = ∫<sub>0</sub><sup>T</sup>(C<sub>p</sub>/T)dT plus ΔH/T for each phase change gives the absolute entropy.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Gibbs–Helmholtz equation?', back: '<b>ΔG = ΔH − TΔS</b>.' },
        { front: 'ΔH &lt; 0 and ΔS &gt; 0: spontaneity?', back: 'ΔG is <b>always negative</b>: spontaneous at all temperatures.' },
        { front: 'ΔH &gt; 0 and ΔS &lt; 0: spontaneity?', back: 'ΔG is <b>always positive</b>: never spontaneous.' },
        { front: 'ΔH &gt; 0 and ΔS &gt; 0: when is it spontaneous?', back: 'At <b>high</b> temperature.' },
        { front: 'ΔH &lt; 0 and ΔS &lt; 0: when is it spontaneous?', back: 'At <b>low</b> temperature.' },
        { front: 'Third law of thermodynamics?', back: 'The entropy of a <b>perfect crystalline</b> substance is <b>zero at 0 K</b>.' },
        { front: 'Statistical definition of entropy?', back: '<b>S = k ln W</b>, W = number of microstates; W = 1 at 0 K.' },
        { front: 'Why is adsorption of a gas spontaneous though ΔS < 0?', back: 'It is strongly <b>exothermic</b>; |ΔH| > |TΔS| at low T, so <b>ΔG = ΔH − TΔS < 0</b>. Favoured at low temperature.' },
        { front: 'Absolute entropy from the third law?', back: 'S = 0 at 0 K, so <b>S<sub>T</sub> = ∫<sub>0</sub><sup>T</sup> (C<sub>p</sub>/T) dT</b> plus ΔH/T at each phase change.' },
        { front: 'What does the Gibbs–Helmholtz equation lead to?', back: 'The <b>van\'t Hoff equation</b> for K against T.' }
      ],
      oneLiners: [
        'ΔG = ΔH − TΔS; negative ΔG means spontaneous.',
        'Same signs of ΔH and ΔS: temperature decides spontaneity. Opposite signs: always or never.',
        'ΔH+ ΔS+ spontaneous at high T; ΔH− ΔS− spontaneous at low T.',
        'Third law: perfect crystal, S = 0 at 0 K.',
        'S = k ln W, and W = 1 at absolute zero.',
        'Adsorption: ΔS < 0 but ΔH strongly negative, so spontaneous at low T.',
        'Absolute entropy: S_T = ∫ Cp/T dT from 0 K, plus ΔH/T for each phase change.'
      ],
      formulas: [
        { name: 'Gibbs–Helmholtz', html: `ΔG = ΔH − TΔS`, note: 'Spontaneous if ΔG &lt; 0.' },
        { name: 'Boltzmann entropy', html: `S = k ln W`, note: 'W = number of microstates; S = 0 when W = 1.' },
        { name: 'Absolute entropy', html: `S<sub>T</sub> = ∫<sub>0</sub><sup>T</sup> (C<sub>p</sub>/T) dT + Σ ΔH<sub>trans</sub>/T<sub>trans</sub>`, note: 'Third law: S = 0 at 0 K for a perfect crystal.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm1-thermo-numericals',
      title: "Numericals on thermodynamics",
      short: "Thermo numericals",
      blurb: 'Worked problems from the numericals sheet: maximum work, work against constant pressure, ΔU, entropy changes, spontaneity, ΔG, and Carnot efficiency.',
      source: 'Numerical sheet 2, pages 2–22',
      tabs: [
        { title: 'Work & ΔU', html: `
          <p class="lead">For work, pick the formula by the type of expansion: reversible isothermal, constant external pressure, or adiabatic.</p>
          <div class="worked"><div class="given"><p><b>Maximum work.</b> 10 mol of an ideal gas expand reversibly and isothermally from 10 atm to 2 atm at 300 K (the same problem is also posed at 37 °C = 310 K).</p></div>
          <div class="solve"><div class="eq">w = −nRT ln(P<sub>1</sub>/P<sub>2</sub>)</div><div class="eq">= −10 × 8.314 × 310 × ln 5 = −25 773 × 1.609</div></div>
          <div class="result">w ≈ <b>−41 469 J</b> at 310 K (slide: −41 468.7 J)</div></div>
          <div class="worked"><div class="given"><p>2 mol expand isothermally and reversibly from 5 L to 20 L at 300 K.</p></div>
          <div class="solve"><div class="eq">w = −nRT ln(V<sub>2</sub>/V<sub>1</sub>) = −2 × 8.314 × 300 × ln 4 = −4988.4 × 1.386</div></div>
          <div class="result">w = <b>−6917 J</b> (slide: −6916.8 J)</div></div>
          <div class="worked"><div class="given"><p>1 mol expands against a constant external pressure of 1 atm from 10 dm<sup>3</sup> to 30 dm<sup>3</sup>.</p></div>
          <div class="solve"><div class="eq">w = −P<sub>ex</sub>ΔV = −(1 atm)(20 dm<sup>3</sup>) = −20 dm<sup>3</sup> atm</div><div class="eq">R = 8.314 J mol<sup>−1</sup> K<sup>−1</sup> = 0.08206 dm<sup>3</sup> atm K<sup>−1</sup> mol<sup>−1</sup>, so 1 dm<sup>3</sup> atm = 8.314/0.08206 J</div><div class="eq">w = −20 × (8.314/0.08206)</div></div>
          <div class="result">w ≈ <b>−2026 J</b></div></div>
          <div class="worked"><div class="given"><p>1 mol of an ideal monatomic gas (C<sub>v</sub> = 12.5 J mol<sup>−1</sup> K<sup>−1</sup>) expands adiabatically; T drops from 400 K to 300 K. Find ΔU.</p></div>
          <div class="solve"><div class="eq">ΔU = nC<sub>v</sub>ΔT = 1 × 12.5 × (−100)</div></div>
          <div class="result">ΔU = <b>−1250 J</b></div></div>
        ` },
        { title: 'Adiabatic example', html: `
          <p class="lead">Reversible adiabatic expansion: find the final temperature first, then everything else follows from it.</p>
          <div class="worked"><div class="given"><p>1 mol of an ideal monatomic gas at 27 °C (300 K) expands reversibly and adiabatically from 10 dm<sup>3</sup> to 20 dm<sup>3</sup>. C<sub>v</sub>/R = 3/2. Find q, ΔU, w and ΔH.</p></div>
          <div class="solve">
            <p>Adiabatic, so <b>q = 0</b>.</p>
            <div class="eq">C<sub>v</sub> ln(T<sub>f</sub>/T<sub>i</sub>) = R ln(V<sub>i</sub>/V<sub>f</sub>) ⇒ (3/2) ln(T<sub>f</sub>/300) = ln(10/20)</div>
            <div class="eq">T<sub>f</sub> ≈ 189 K</div>
            <div class="eq">ΔU = nC<sub>v</sub>ΔT = 1 × (3/2 × 8.314) × (189 − 300) = −1384 J = w</div>
            <div class="eq">ΔH = ΔU + nR(T<sub>f</sub> − T<sub>i</sub>) = −1384 + 8.314 × (−111) = −1384 − 923</div>
          </div>
          <div class="result">q = 0, ΔU = w = <b>−1384 J</b>, ΔH = <b>−2307 J</b></div></div>
          <p>ΔH can also be found from dH = C<sub>p</sub>dT.</p>
        ` },
        { title: 'Entropy numericals', html: `
          <p class="lead">Match the formula to what is held fixed. Phase changes use ΔS = ΔH/T; reversible heat uses q/T.</p>
          <div class="worked"><div class="given"><p>Entropy change when 180 g of H<sub>2</sub>O(l) evaporates at 100 °C (ΔH = 9.72 kcal mol<sup>−1</sup>).</p></div>
          <div class="solve"><p>n = 180/18 = 10 mol, T = 373 K.</p><div class="eq">ΔS = ΔH/T = 9720/373 = 26.06 cal K<sup>−1</sup> mol<sup>−1</sup></div><div class="eq">For 10 mol: 10 × 26.06</div></div>
          <div class="result">ΔS ≈ <b>260.6 cal K<sup>−1</sup></b></div></div>
          <div class="worked"><div class="given"><p>1 mol of an ideal gas at 4.9 atm absorbs 2504 J of heat and expands to 2 L. Find ΔS.</p></div>
          <div class="solve"><div class="eq">T = PV/nR = (4.9 × 2)/(1 × 0.0821) = 119.4 K</div><div class="eq">ΔS = q/T = 2504/119.36</div></div>
          <div class="result">ΔS ≈ <b>20.98 J K<sup>−1</sup></b></div></div>
          <div class="worked"><div class="given"><p>5 mol of an ideal gas expand reversibly from 8 dm<sup>3</sup> to 80 dm<sup>3</sup> at 27 °C.</p></div>
          <div class="solve"><div class="eq">ΔS = nR ln(V<sub>f</sub>/V<sub>i</sub>) = 5 × 8.314 × ln 10</div></div>
          <div class="result">ΔS ≈ <b>95.73 J K<sup>−1</sup></b></div></div>
          <div class="worked"><div class="given"><p>1 mol of helium (ideal, C<sub>v</sub> = 3/2 R) is heated from 298 K to 1000 K at constant pressure.</p></div>
          <div class="solve"><div class="eq">C<sub>p</sub> = C<sub>v</sub> + R = 2.5 R</div><div class="eq">ΔS<sub>P</sub> = C<sub>p</sub> ln(T<sub>f</sub>/T<sub>i</sub>) = 2.5 × 8.314 × ln(1000/298)</div></div>
          <div class="result">ΔS ≈ <b>25.17 J K<sup>−1</sup> mol<sup>−1</sup></b></div></div>
          <div class="worked"><div class="given"><p>1 mol expands reversibly from 10 dm<sup>3</sup>, 298 K to 20 dm<sup>3</sup>, 250 K. C<sub>v</sub> = 3/2 R.</p></div>
          <div class="solve"><div class="eq">ΔS = C<sub>v</sub> ln(T<sub>f</sub>/T<sub>i</sub>) + R ln(V<sub>f</sub>/V<sub>i</sub>) = 1.5 × 8.314 × ln(250/298) + 8.314 × ln 2</div></div>
          <div class="result">ΔS ≈ <b>3.57 J K<sup>−1</sup> mol<sup>−1</sup></b></div></div>
          <div class="worked"><div class="given"><p>1 mol, 25 dm<sup>3</sup> at 250 K to 40 dm<sup>3</sup> at 350 K, C<sub>v</sub> = 1.5 R.</p></div>
          <div class="solve"><div class="eq">ΔS = 1.5 × 8.314 × ln(350/250) + 8.314 × ln(40/25)</div></div>
          <div class="result">ΔS ≈ <b>8.10 J K<sup>−1</sup> mol<sup>−1</sup></b></div></div>
          <div class="note heads-up"><p>The slides contain small slips. Example 4 writes n = 2 but then uses 5 mol (95.73 J K<sup>−1</sup> is for 5 mol). The last problem prints C<sub>v</sub> = 3.2R in the question but solves with 1.5R. The numbers above use the values that give the printed answers.</p></div>
        ` },
        { title: 'Spontaneity & ΔG', html: `
          <p class="lead">Compute ΔS° from tabulated absolute entropies, or use ΔG = ΔH − TΔS directly.</p>
          <div class="worked"><div class="given"><p>2H<sub>2</sub>(g) + O<sub>2</sub>(g) → 2H<sub>2</sub>O(l). S° (J K<sup>−1</sup> mol<sup>−1</sup>): H<sub>2</sub> 131.0, O<sub>2</sub> 205.0, H<sub>2</sub>O(l) 69.9.</p></div>
          <div class="solve"><div class="eq">ΔS° = S°(products) − S°(reactants) = 2(69.9) − [2(131.0) + 205.0]</div></div>
          <div class="result">ΔS° ≈ <b>−327 J K<sup>−1</sup> mol<sup>−1</sup></b></div></div>
          <p>ΔS is highly negative because <b>three gas molecules become two liquid molecules</b>. The drive towards higher entropy is against the reaction, but it is <b>highly exothermic</b>, and the drive towards lower energy lets it occur.</p>
          <div class="worked"><div class="given"><p>CAT-1 (Fall 2025): ΔH = +25 kJ mol<sup>−1</sup>, ΔS = +80 J mol<sup>−1</sup> K<sup>−1</sup> = 0.080 kJ mol<sup>−1</sup> K<sup>−1</sup>. Find ΔG at 298 K and 500 K.</p></div>
          <div class="solve"><div class="eq">ΔG<sub>298</sub> = 25 − 298(0.080) = 25 − 23.84 = +1.16 kJ mol<sup>−1</sup></div><div class="eq">ΔG<sub>500</sub> = 25 − 500(0.080) = 25 − 40.00 = −15.00 kJ mol<sup>−1</sup></div></div>
          <div class="result">Non-spontaneous at 298 K, <b>spontaneous at 500 K</b></div></div>
          <p>With ΔH &gt; 0 and ΔS &gt; 0, ΔG turns negative at higher T and stays positive at lower T.</p>
          <div class="worked"><div class="given"><p>ΔG for melting ice at −10 °C: ΔH = 6.01 kJ mol<sup>−1</sup>, ΔS = 0.022 kJ K<sup>−1</sup> mol<sup>−1</sup>.</p></div>
          <div class="solve"><div class="eq">T = 263 K, ΔG = 6.01 − 263 × 0.022 = 6.01 − 5.79</div></div>
          <div class="result">ΔG ≈ <b>+0.22 kJ mol<sup>−1</sup></b>, so ice does not melt spontaneously at −10 °C</div></div>
          <div class="worked"><div class="given"><p>Ag<sub>2</sub>O(s) → 2Ag(s) + ½O<sub>2</sub>(g): ΔH = 30.1 kJ mol<sup>−1</sup>, ΔS = 6.06 J K<sup>−1</sup> mol<sup>−1</sup> (1 atm). Find T at which ΔG = 0.</p></div>
          <div class="solve"><div class="eq">T = ΔH/ΔS = 30 100/6.06</div></div>
          <div class="result">T ≈ <b>4967 K</b></div></div>
          <p>At this temperature ΔG = 0, so the reaction is at <b>equilibrium</b>. Above it, ΔG is negative and the oxide decomposes.</p>
          <div class="note heads-up"><p>The slides print ΔG for the ice problem with units kJ K<sup>−1</sup> mol<sup>−1</sup>. ΔG is in kJ mol<sup>−1</sup>.</p></div>
          <p><b>Practice (slide):</b> ΔH = +40 kJ mol<sup>−1</sup>, ΔS = +120 J mol<sup>−1</sup> K<sup>−1</sup> at 298 K: ΔG = 40 − 298 × 0.120 ≈ <b>+4.2 kJ mol<sup>−1</sup></b>, not spontaneous at 298 K (it becomes spontaneous above T = ΔH/ΔS ≈ 333 K).</p>
        ` },
        { title: 'Carnot numericals', html: `
          <p class="lead">Always convert to kelvin before using η = 1 − T<sub>c</sub>/T<sub>h</sub>.</p>
          <div class="worked"><div class="given"><p>A power station uses superheated steam at 300 °C (T<sub>h</sub> = 573 K) and discharges waste heat at 20 °C (T<sub>c</sub> = 293 K).</p></div>
          <div class="solve"><div class="eq">η = 1 − 293/573 = 0.489</div></div>
          <div class="result">η ≈ <b>48.9 %</b></div></div>
          <div class="worked"><div class="given"><p>Maximum efficiency between 100 °C and 25 °C.</p></div>
          <div class="solve"><div class="eq">T<sub>h</sub> = 373 K, T<sub>c</sub> = 298 K, η = 1 − 298/373 = 0.201</div></div>
          <div class="result">η ≈ <b>20.1 %</b></div></div>
          <div class="worked"><div class="given"><p>Heat supplied to a Carnot engine is 2097.8 kJ. Useful work between 0 °C and 100 °C?</p></div>
          <div class="solve"><div class="eq">T<sub>c</sub> = 273 K, T<sub>h</sub> = 373 K</div><div class="eq">w = q<sub>h</sub>(1 − T<sub>c</sub>/T<sub>h</sub>) = 2097.8 × (1 − 273/373)</div></div>
          <div class="result">w ≈ <b>562.4 kJ</b></div></div>
          <p><b>Practice (slide):</b> a Carnot engine between 600 K and 300 K has η = 1 − 300/600 = <b>50 %</b>.</p>
        ` }
      ],
      flashcards: [
        { front: 'Max work, 10 mol ideal gas, 10 atm to 2 atm at 310 K?', back: '<b>−41 469 J</b>, from w = −nRT ln(P<sub>1</sub>/P<sub>2</sub>).' },
        { front: 'Work for 1 mol expanding against 1 atm from 10 to 30 dm<sup>3</sup>?', back: '<b>−2026 J</b> (−20 dm<sup>3</sup> atm).' },
        { front: 'Adiabatic reversible 300 K, V doubles, Cv = 3/2 R: final T?', back: '<b>≈ 189 K</b>, giving ΔU = −1384 J and ΔH = −2307 J.' },
        { front: 'Entropy of vaporising 10 mol water at 373 K, ΔH = 9.72 kcal/mol?', back: '<b>≈ 260.6 cal K<sup>−1</sup></b>.' },
        { front: 'ΔS° for 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O(l)?', back: '<b>−327 J K<sup>−1</sup> mol<sup>−1</sup></b>: spontaneous only because it is highly exothermic.' },
        { front: 'ΔG at 298 K and 500 K for ΔH = +25 kJ, ΔS = +80 J/K?', back: '<b>+1.16 kJ</b> (non-spontaneous) and <b>−15.0 kJ</b> (spontaneous).' },
        { front: 'Temperature where ΔG = 0 for Ag<sub>2</sub>O decomposition?', back: '<b>T = ΔH/ΔS ≈ 4967 K</b>.' },
        { front: 'Work from 2097.8 kJ of heat, Carnot engine 0–100 °C?', back: '<b>562.4 kJ</b> (η = 26.8 %).' }
      ],
      oneLiners: [
        'Reversible isothermal: w = −nRT ln(P1/P2); against fixed pressure: w = −PexΔV.',
        '1 dm³ atm = 8.314/0.08206 J, about 101.3 J.',
        'ΔS = ΔH/T for a phase change at its transition temperature.',
        'ΔS° = S°(products) − S°(reactants) from tables.',
        'Crossover temperature for ΔG = 0 is T = ΔH/ΔS.',
        'Carnot efficiency needs kelvin: η = 1 − Tc/Th.'
      ],
      formulas: [
        { name: 'Unit conversion', html: `1 dm<sup>3</sup> atm = 8.314 / 0.08206 J ≈ 101.3 J`, note: 'R = 8.314 J mol<sup>−1</sup> K<sup>−1</sup> = 0.08206 dm<sup>3</sup> atm mol<sup>−1</sup> K<sup>−1</sup>.' },
        { name: 'Crossover temperature', html: `T = ΔH / ΔS`, note: 'Where ΔG = 0.' },
        { name: 'Standard entropy change', html: `ΔS° = ΣS°(products) − ΣS°(reactants)`, note: '' },
        { name: 'Carnot work', html: `w = q<sub>h</sub> (1 − T<sub>c</sub>/T<sub>h</sub>)`, note: '' }
      ]
    }
  ],
  figures: [
    { id: 'm1-carnot-pv', src: null, crop: null,
      caption: 'The Carnot cycle on a P-V diagram: isothermal expansion A to B, adiabatic expansion B to C, isothermal compression C to D, adiabatic compression D to A. The enclosed area is the net work.',
      alt: 'P against V graph of a closed loop with four labelled points A, B, C, D. Two blue and red isotherms are joined by two steeper yellow adiabats, with arrows running clockwise and the inside shaded.' },
    { id: 'm1-carnot-ts', src: null, crop: null,
      caption: 'On a T-S diagram the Carnot cycle is a rectangle: heat in along the hot isotherm, heat out along the cold one, and vertical adiabats at constant entropy.',
      alt: 'Temperature against entropy graph with a shaded rectangle. The top side at T hot has an arrow to the right, the right side points down, the bottom side at T cold points left, and the left side points up.' },
    { id: 'm1-gibbs-four-cases', src: null, crop: null,
      caption: 'Each case is a straight line, G = H - TS: the intercept is the enthalpy change and the slope is minus the entropy change. Lines a and d never cross zero; b and c switch sign at a crossover temperature.',
      alt: 'Graph of delta G against temperature with a zero axis and four straight lines: a starts below zero and falls, b starts above zero and falls through zero, c starts below zero and rises through zero, d starts high above zero and rises.' },
    { id: 'm1-entropy-temperature', src: null, crop: null,
      caption: 'Entropy is zero for a perfect crystal at 0 K, rises smoothly with temperature, and jumps at melting and again at boiling, where the change is enthalpy of the transition divided by its temperature.',
      alt: 'Graph of entropy against temperature starting at zero, rising through solid, a vertical jump at the melting temperature, the liquid region, a larger vertical jump at the boiling temperature, then the gas region.' },
    { id: 'm1-heat-engine', src: null, crop: null,
      caption: 'A heat engine takes heat Q hot from a hot reservoir, turns part of it into work W, and rejects the rest as Q cold to a cold reservoir.',
      alt: 'A hot reservoir box on top with an arrow down to a circle labelled engine, an arrow to the right labelled work, and an arrow down to a cold reservoir box.' },
    { id: 'm1-free-expansion', src: null, crop: null,
      caption: 'Opening the valve lets the gas spread into both bulbs by itself. It never gathers back into one bulb on its own, because the total entropy has risen.',
      alt: 'Two connected bulbs: before, gas dots fill only the left bulb; after the valve opens, dots are spread through both bulbs.' },
    { id: 'm1-entropy-isobaric-isochoric', src: null, crop: null,
      caption: 'Entropy against ln T on heating: the constant-pressure line has slope Cp and the constant-volume line has slope Cv. Since Cp is larger, heating at constant pressure raises the entropy more.',
      alt: 'Graph of entropy against ln T with two straight lines from the same start point: a steeper red line for constant pressure and a shallower blue line for constant volume.' },
    { id: 'm1-gibbs-reaction-progress', src: null, crop: null,
      caption: 'Free energy along a reaction: G falls towards a minimum at equilibrium. Where G is falling in the forward direction, delta G is negative and the forward reaction is spontaneous.',
      alt: 'A U-shaped curve of G against reaction progress with the minimum marked equilibrium, a green arrow down the left side labelled delta G less than zero and a red arrow down the right side labelled delta G greater than zero.' }
  ]
});
