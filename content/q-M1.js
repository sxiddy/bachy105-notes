QUESTIONS({
  chunk: 'M1',
  questions: [
    {
      id: 'm1-q-01', module: 'm1', topic: 'm1-thermo-basics', type: 'decide', level: 1,
      q: `<p>A student says "heat and work depend only on the start and end of a process, just like internal energy." The lab instructor corrects her using a gas that goes from state A to state B by two different routes. Which statement is correct?</p>`,
      options: ['q and w are state functions, so they are the same for both routes', 'ΔU differs for the two routes but q and w are the same', 'All three are path functions', 'ΔU is the same for both routes, but q and w can differ because they are path functions'],
      correct: 3,
      answer: `<p><b>ΔU is the same for both routes; q and w can differ.</b></p>`,
      explain: `<p>Internal energy U is a <b>state function</b>: its change depends only on the initial and final states. Heat q and work w are <b>path functions</b>. Between the same two states, the routes can split the energy change differently between q and w, but q + w always gives the same ΔU.</p>`,
      points: ['U, H, T, P are state functions', 'q and w are path functions', 'ΔU = q + w is the same for any route between A and B']
    },
    {
      id: 'm1-q-02', module: 'm1', topic: 'm1-zeroth-first-law', type: 'explain', level: 1,
      q: `<p>An engineer calibrates three new temperature probes by putting each in the same water bath until its reading stops changing, then checks they all agree. Which law justifies concluding that the three probes would also agree with each other if put in contact, and why?</p>`,
      options: null, correct: null,
      answer: `<p>The <b>zeroth law</b>: thermal equilibrium is transitive.</p>`,
      explain: `<p>Each probe is in thermal equilibrium with the bath (the third system). By the zeroth law, probes that are each in equilibrium with the bath are in equilibrium with each other, so they show the same temperature. This is exactly why a thermometer reading can be used to define and measure temperature.</p>`,
      points: ['Zeroth law: A~C and B~C implies A~B', 'Basis for temperature measurement and calibration', 'The bath plays the role of the third system']
    },
    {
      id: 'm1-q-03', module: 'm1', topic: 'm1-expansion-work', type: 'numerical', level: 2,
      q: `<p>A gas cylinder for a gentle lab experiment lets <b>2 mol</b> of an ideal gas expand <b>reversibly and isothermally at 300 K</b> from <b>5 atm to 1 atm</b>. How much work does the gas do, and why can no other route between the same states do more?</p>`,
      options: null, correct: null,
      answer: `<p>w ≈ <b>−8.03 × 10<sup>3</sup> J</b>. The gas does 8.03 kJ of work, the maximum possible.</p>`,
      explain: `<div class="worked"><div class="given"><ul><li>n = 2 mol, T = 300 K, P<sub>1</sub> = 5 atm, P<sub>2</sub> = 1 atm, R = 8.314 J mol<sup>−1</sup> K<sup>−1</sup></li></ul></div><div class="solve"><div class="eq">w = −nRT ln(P<sub>1</sub>/P<sub>2</sub>) = −2 × 8.314 × 300 × ln 5</div><div class="eq">= −4988.4 × 1.609 ≈ −8.03 × 10<sup>3</sup> J</div></div><div class="result"><b>w ≈ −8.0 kJ</b></div></div><p>A reversible path keeps P<sub>ex</sub> equal to the gas pressure at every step, so the gas always pushes against the largest possible opposing pressure. An irreversible expansion to the same final pressure follows the smaller rectangular area and does less work.</p>`,
      points: ['w = −nRT ln(P1/P2) for reversible isothermal work', 'Negative sign: work done by the system', 'Reversible work is the maximum work']
    },
    {
      id: 'm1-q-04', module: 'm1', topic: 'm1-expansion-work', type: 'predict', level: 2,
      q: `<p>A CO<sub>2</sub> fire extinguisher is discharged quickly. The gas leaves at high pressure and expands so fast that essentially no heat flows in from the surroundings. What happens to the temperature of the escaping gas, and what does the first law say about where the energy for the expansion came from?</p>`,
      options: ['It rises, because the gas is compressed', 'It stays constant, because ΔU = 0', 'It falls, because the gas does work at the expense of its internal energy', 'It falls, because heat flows out of the gas'],
      correct: 2,
      answer: `<p><b>The temperature falls.</b> The expansion is adiabatic, so ΔU = w.</p>`,
      explain: `<p>With q = 0 the first law gives <b>ΔU = w</b>. The expanding gas does work on the surroundings, so w is negative and ΔU is negative. For an ideal gas U depends on T, so the temperature drops. This is why a CO<sub>2</sub> extinguisher nozzle gets very cold.</p>`,
      points: ['Adiabatic: q = 0, ΔU = w', 'Expansion: w negative, ΔU negative, T falls', 'Work is paid for from internal energy']
    },
    {
      id: 'm1-q-05', module: 'm1', topic: 'm1-enthalpy-heat-capacity', type: 'numerical', level: 2,
      q: `<p>A researcher heats <b>2 mol of a monatomic ideal gas</b> from 300 K to 400 K, once in a rigid sealed vessel and once in a cylinder with a freely moving piston at constant pressure. How much heat is needed in each case, and why do the answers differ?</p>`,
      options: null, correct: null,
      answer: `<p>Rigid vessel: q<sub>v</sub> ≈ <b>2.49 kJ</b>. Constant pressure: q<sub>p</sub> ≈ <b>4.16 kJ</b>. The gap is the expansion work.</p>`,
      explain: `<div class="worked"><div class="given"><ul><li>C<sub>v</sub> = 3/2 R and C<sub>p</sub> = 5/2 R for a monatomic ideal gas, n = 2, ΔT = 100 K</li></ul></div><div class="solve"><div class="eq">q<sub>v</sub> = nC<sub>v</sub>ΔT = 2 × 1.5 × 8.314 × 100 = 2494 J</div><div class="eq">q<sub>p</sub> = nC<sub>p</sub>ΔT = 2 × 2.5 × 8.314 × 100 = 4157 J</div><div class="eq">q<sub>p</sub> − q<sub>v</sub> = nRΔT = 1663 J</div></div><div class="result"><b>2.49 kJ vs 4.16 kJ</b></div></div><p>At constant volume all the heat raises U. At constant pressure the gas also has to push the piston back, so extra heat nRΔT goes into expansion work. That is Cp − Cv = R in action.</p>`,
      points: ['Cv = 3/2 R, Cp = 5/2 R (monatomic)', 'q_v = ΔU, q_p = ΔH', 'Difference nRΔT is the expansion work']
    },
    {
      id: 'm1-q-06', module: 'm1', topic: 'm1-second-law-entropy', type: 'numerical', level: 2,
      q: `<p>The valve between two equal bulbs is opened and <b>2 mol</b> of an ideal gas, initially in one bulb, spreads into the evacuated second bulb at constant temperature. The total volume is twice the original. Find the entropy change of the gas and say whether the process is spontaneous.</p>`,
      options: null, correct: null,
      answer: `<p>ΔS<sub>gas</sub> = nR ln 2 ≈ <b>+11.5 J K<sup>−1</sup></b>. It is spontaneous.</p>`,
      explain: `<div class="worked"><div class="given"><ul><li>n = 2 mol, V<sub>f</sub>/V<sub>i</sub> = 2, isothermal</li></ul></div><div class="solve"><div class="eq">ΔS = nR ln(V<sub>f</sub>/V<sub>i</sub>) = 2 × 8.314 × ln 2 = 11.5 J K<sup>−1</sup></div></div><div class="result"><b>ΔS ≈ +11.5 J K<sup>−1</sup></b></div></div><p>Expansion into vacuum does no work and exchanges no heat, so the surroundings do not change. The total entropy change equals that of the gas, which is positive, so ΔS<sub>tot</sub> &gt; 0 and the expansion is spontaneous. It would never reverse by itself.</p>`,
      points: ['ΔS = nR ln(Vf/Vi) for isothermal ideal gas', 'Surroundings unchanged for expansion into vacuum', 'ΔS_total > 0 means spontaneous']
    },
    {
      id: 'm1-q-07', module: 'm1', topic: 'm1-carnot-cycle', type: 'numerical', level: 2,
      q: `<p>A reversible heat engine absorbs <b>1000 J</b> per cycle from a furnace at <b>500 K</b> and rejects heat to a river at <b>300 K</b>. Find its efficiency, the work per cycle and the heat dumped into the river. A salesperson claims a model with 70% efficiency between the same temperatures: can it exist?</p>`,
      options: null, correct: null,
      answer: `<p>η = <b>40%</b>, w = <b>400 J</b>, q<sub>c</sub> = <b>600 J</b>. The 70% engine is impossible.</p>`,
      explain: `<div class="worked"><div class="given"><ul><li>q<sub>h</sub> = 1000 J, T<sub>h</sub> = 500 K, T<sub>c</sub> = 300 K</li></ul></div><div class="solve"><div class="eq">η = 1 − T<sub>c</sub>/T<sub>h</sub> = 1 − 300/500 = 0.40</div><div class="eq">w = ηq<sub>h</sub> = 400 J, q<sub>c</sub> = q<sub>h</sub> − w = 600 J</div></div><div class="result"><b>η = 40%, w = 400 J, q<sub>c</sub> = 600 J</b></div></div><p>The Carnot efficiency is the upper limit for any engine working between these two temperatures, so a claimed 70% breaks the second law.</p>`,
      points: ['η = 1 − Tc/Th in kelvin', 'w = η × qh', 'Carnot efficiency is the maximum']
    },
    {
      id: 'm1-q-08', module: 'm1', topic: 'm1-carnot-cycle', type: 'design', level: 3,
      q: `<p>A plant rejects waste heat at <b>300 K</b> and wants a Carnot-limited engine of at least <b>50%</b> efficiency. What is the minimum temperature of the hot source? If the source can only reach 450 K, what is the best possible efficiency?</p>`,
      options: ['Th = 600 K; 33%', 'Th = 450 K; 50%', 'Th = 600 K; 50%', 'Th = 150 K; 33%'],
      correct: 0,
      answer: `<p><b>T<sub>h</sub> = 600 K</b>, and at 450 K the best efficiency is <b>33%</b>.</p>`,
      explain: `<div class="worked"><div class="given"><ul><li>η ≥ 0.5, T<sub>c</sub> = 300 K</li></ul></div><div class="solve"><div class="eq">0.5 = 1 − 300/T<sub>h</sub> ⇒ T<sub>h</sub> = 600 K</div><div class="eq">At 450 K: η = 1 − 300/450 = 0.333</div></div><div class="result"><b>600 K; 33%</b></div></div>`,
      points: ['Solve η = 1 − Tc/Th for Th', 'Higher Th or lower Tc raises efficiency', 'Always use kelvin']
    },
    {
      id: 'm1-q-09', module: 'm1', topic: 'm1-gibbs-helmholtz-third-law', type: 'predict', level: 2,
      q: `<p>A decomposition reaction has <b>ΔH = +60 kJ mol<sup>−1</sup></b> and <b>ΔS = +200 J K<sup>−1</sup> mol<sup>−1</sup></b>. A process engineer wants to know whether it will run at 250 K, and at what temperature it switches. What do you tell them?</p>`,
      options: ['Spontaneous at all temperatures', 'Spontaneous at 250 K; stops above 300 K', 'Never spontaneous', 'Non-spontaneous at 250 K; becomes spontaneous above 300 K'],
      correct: 3,
      answer: `<p><b>Non-spontaneous at 250 K; spontaneous above T = ΔH/ΔS = 300 K.</b></p>`,
      explain: `<div class="worked"><div class="given"><ul><li>ΔH = +60 kJ, ΔS = +0.200 kJ K<sup>−1</sup></li></ul></div><div class="solve"><div class="eq">ΔG(250 K) = 60 − 250 × 0.200 = +10 kJ mol<sup>−1</sup></div><div class="eq">ΔG = 0 at T = ΔH/ΔS = 60/0.200 = 300 K</div><div class="eq">ΔG(350 K) = 60 − 70 = −10 kJ mol<sup>−1</sup></div></div><div class="result"><b>Switches at 300 K</b></div></div><p>With ΔH &gt; 0 and ΔS &gt; 0, the entropy term only beats the enthalpy term at high temperature.</p>`,
      points: ['ΔG = ΔH − TΔS', 'ΔH+ and ΔS+: spontaneous at high T', 'Crossover T = ΔH/ΔS']
    },
    {
      id: 'm1-q-10', module: 'm1', topic: 'm1-free-energy', type: 'explain', level: 2,
      q: `<p>Turning diamond into graphite has a negative ΔG at room conditions, yet a diamond ring in a jewellery shop is never seen turning to graphite. A student suspects the thermodynamics is wrong. What would you tell them?</p>`,
      options: null, correct: null,
      answer: `<p>The thermodynamics is fine: <b>spontaneous does not mean fast</b>.</p>`,
      explain: `<p>ΔG &lt; 0 only says the reaction is allowed to go and will release free energy. It says nothing about the speed. Converting diamond to graphite needs a huge activation energy, so the rate is effectively zero. Rates belong to <b>chemical kinetics</b>, which is why the module covers both.</p>`,
      points: ['ΔG gives direction, not rate', 'A spontaneous reaction can be extremely slow', 'Rate depends on activation energy']
    },
    {
      id: 'm1-q-11', module: 'm1', topic: 'm1-rate-law', type: 'interpret', level: 2,
      q: `<p>For the reaction 2NO + 2H<sub>2</sub> → 2N<sub>2</sub> + 2H<sub>2</sub>O, an experimenter finds that doubling [NO] quadruples the rate and doubling [H<sub>2</sub>] doubles it. Write the rate law and overall order, and explain why the order is not 4 even though the equation shows four reactant molecules.</p>`,
      options: null, correct: null,
      answer: `<p>rate = <b>k[NO]<sup>2</sup>[H<sub>2</sub>]</b>, overall order <b>3</b>.</p>`,
      explain: `<p>Doubling [NO] gives 2<sup>m</sup> = 4, so m = 2. Doubling [H<sub>2</sub>] gives 2<sup>n</sup> = 2, so n = 1. The order is m + n = 3. Orders come from experiment and need not match the stoichiometric coefficients (2 and 2), unless the reaction is a single elementary step.</p>`,
      points: ['Find each order from how the rate scales', 'Overall order = sum of exponents', 'Orders are not read from the balanced equation']
    },
    {
      id: 'm1-q-12', module: 'm1', topic: 'm1-integrated-rate', type: 'numerical', level: 2,
      q: `<p>A drug in the bloodstream breaks down by a <b>first-order</b> process with a half-life of <b>20 min</b>. What fraction of the dose remains after 1 hour, and what is the rate constant?</p>`,
      options: ['1/8 remains; k = 0.0347 min⁻¹', '1/3 remains; k = 0.0347 min⁻¹', '1/8 remains; k = 0.0693 min⁻¹', '1/6 remains; k = 0.0347 min⁻¹'],
      correct: 0,
      answer: `<p><b>1/8 remains; k = 0.0347 min<sup>−1</sup>.</b></p>`,
      explain: `<div class="worked"><div class="given"><ul><li>t<sub>1/2</sub> = 20 min, t = 60 min</li></ul></div><div class="solve"><div class="eq">k = 0.693 / t<sub>1/2</sub> = 0.693/20 = 0.0347 min<sup>−1</sup></div><div class="eq">60 min = 3 half-lives ⇒ fraction left = (1/2)<sup>3</sup> = 1/8</div></div><div class="result"><b>12.5 % remains</b></div></div><p>First-order half-life is constant, so each 20 minutes halves whatever is left.</p>`,
      points: ['t1/2 = 0.693/k for first order', 'Half-life independent of concentration', 'n half-lives leave (1/2)^n']
    },
    {
      id: 'm1-q-13', module: 'm1', topic: 'm1-integrated-rate', type: 'interpret', level: 3,
      q: `<p>A kinetics student plots data for the decomposition of a gas three ways: [A] against time, ln[A] against time and 1/[A] against time. Only the <b>ln[A] against time</b> plot is a straight line, with a slope of −0.015 min<sup>−1</sup>. What are the order, the rate constant, and the half-life?</p>`,
      options: null, correct: null,
      answer: `<p><b>First order</b>, k = <b>0.015 min<sup>−1</sup></b>, t<sub>1/2</sub> ≈ <b>46 min</b>.</p>`,
      explain: `<div class="worked"><div class="given"><ul><li>ln[A] vs t linear, slope = −0.015 min<sup>−1</sup></li></ul></div><div class="solve"><div class="eq">slope = −k ⇒ k = 0.015 min<sup>−1</sup></div><div class="eq">t<sub>1/2</sub> = 0.693/k = 0.693/0.015 = 46.2 min</div></div><div class="result"><b>First order, 46 min</b></div></div><p>The integrated first-order law is ln[A]<sub>t</sub> = −kt + ln[A]<sub>0</sub>, so only a ln plot gives a straight line with slope −k.</p>`,
      points: ['Linear ln[A] vs t means first order', 'slope = −k', 't1/2 = 0.693/k']
    },
    {
      id: 'm1-q-14', module: 'm1', topic: 'm1-integrated-rate', type: 'decide', level: 2,
      q: `<p>A student studies the hydrolysis of ethyl acetate in a large excess of water (about 55 M) with acid present and finds the rate depends only on the ester concentration. She says "this is a bimolecular reaction, so it must be second order". What is wrong?</p>`,
      options: ['Nothing, bimolecular always means second order', 'The acid cancels one reactant', 'The reaction must be zero order', 'Water is in huge excess, so its concentration is effectively constant and the reaction behaves as pseudo-first order'],
      correct: 3,
      answer: `<p>It is <b>pseudo-first order</b>: the excess water is effectively constant.</p>`,
      explain: `<p>The true rate law has both reactants, but [H<sub>2</sub>O] barely changes, so it folds into the constant: rate = k[ester]. The reaction is second order overall in principle yet behaves as <b>first order</b>, with t<sub>1/2</sub> = 0.693/k and k in s<sup>−1</sup>.</p>`,
      points: ['Pseudo-first order needs one reactant in large excess', 'Excess reactant concentration is nearly constant', 'Behaves as first order']
    },
    {
      id: 'm1-q-15', module: 'm1', topic: 'm1-collision-arrhenius', type: 'numerical', level: 3,
      q: `<p>A food scientist finds that the rate constant for spoilage roughly <b>doubles when the temperature goes from 300 K to 310 K</b>. Estimate the activation energy, and explain what a larger activation energy would mean for how strongly refrigeration helps.</p>`,
      options: null, correct: null,
      answer: `<p>E<sub>a</sub> ≈ <b>54 kJ mol<sup>−1</sup></b>. A larger E<sub>a</sub> means a steeper temperature dependence, so cooling slows the reaction even more.</p>`,
      explain: `<div class="worked"><div class="given"><ul><li>k<sub>2</sub>/k<sub>1</sub> = 2, T<sub>1</sub> = 300 K, T<sub>2</sub> = 310 K, R = 8.314 J mol<sup>−1</sup> K<sup>−1</sup></li></ul></div><div class="solve"><p>From ln k = ln A − E<sub>a</sub>/RT for two temperatures:</p><div class="eq">ln(k<sub>2</sub>/k<sub>1</sub>) = (E<sub>a</sub>/R)(1/T<sub>1</sub> − 1/T<sub>2</sub>)</div><div class="eq">0.693 = (E<sub>a</sub>/8.314)(1.075 × 10<sup>−4</sup>)</div><div class="eq">E<sub>a</sub> = 0.693 × 8.314 / 1.075 × 10<sup>−4</sup> ≈ 5.36 × 10<sup>4</sup> J mol<sup>−1</sup></div></div><div class="result"><b>E<sub>a</sub> ≈ 54 kJ mol<sup>−1</sup></b></div></div><p>On a ln k vs 1/T plot the slope is −E<sub>a</sub>/R, so a larger E<sub>a</sub> gives a steeper line: the same temperature drop slows the reaction more.</p>`,
      points: ['Two-temperature form of the Arrhenius equation', 'Slope of ln k vs 1/T = −Ea/R', 'Larger Ea means stronger temperature dependence']
    },
    {
      id: 'm1-q-16', module: 'm1', topic: 'm1-catalysis', type: 'decide', level: 2,
      q: `<p>An industrial chemist adds a catalyst to an equilibrium mixture of N<sub>2</sub>, H<sub>2</sub> and NH<sub>3</sub>. A colleague expects the catalyst to give more ammonia at equilibrium. What actually happens?</p>`,
      options: ['More NH₃ at equilibrium, because the forward rate rises', 'Less NH₃, because the reverse rate rises more', 'The same equilibrium composition, reached faster', 'The reaction stops because the catalyst is consumed'],
      correct: 2,
      answer: `<p><b>The same equilibrium composition, reached faster.</b></p>`,
      explain: `<p>A catalyst lowers the activation energy of the forward <b>and</b> reverse reactions by providing an alternative mechanism. Both rates rise by the same factor, so the equilibrium position does not change. It only shortens the time to reach it. In the Haber process, iron is used for exactly this reason.</p>`,
      points: ['Catalyst lowers Ea of both directions', 'Equilibrium position unchanged', 'Catalyst is not consumed']
    },
    {
      id: 'm1-q-17', module: 'm1', topic: 'm1-carnot-cycle', type: 'decide', level: 2,
      q: `<p>An inventor claims a new reversible engine using helium beats a reversible steam engine working between the same two reservoirs, 500 K and 300 K. Which statement settles the claim?</p>`,
      options: ['Carnot theorem: every reversible engine between the same two temperatures has the same efficiency, so the claim is false', 'Helium is lighter, so a helium engine really is more efficient', 'The claim is true if the helium engine runs faster', 'Efficiency depends on the working substance, so either could win'],
      correct: 0,
      answer: `<p><b>Carnot theorem: the claim is false.</b></p>`,
      explain: `<p>Carnot theorem says no engine between two given temperatures can beat a reversible engine between them, and all reversible engines between the same T<sub>h</sub> and T<sub>c</sub> have the same efficiency, η = 1 − T<sub>c</sub>/T<sub>h</sub> = 1 − 300/500 = 0.40. If one could beat the other, running the better one to drive the other backwards would move heat from cold to hot with no outside work, which the Clausius statement forbids. The working substance does not matter.</p>`,
      points: ['Carnot theorem statement', 'Proof by contradiction uses the Clausius statement', 'η depends only on Th and Tc']
    },
    {
      id: 'm1-q-18', module: 'm1', topic: 'm1-carnot-cycle', type: 'explain', level: 2,
      q: `<p>A ship designer proposes an engine that draws heat from the ocean (one reservoir at 290 K) and turns all of it into work to drive the propeller, rejecting nothing. Energy is conserved. Why can it not work?</p>`,
      options: ['It breaks the first law because energy is created', 'It is a perpetual motion machine of the second kind: it breaks the Kelvin–Planck statement of the second law', 'It would work if the ocean were warmer', 'It breaks the zeroth law'],
      correct: 1,
      answer: `<p><b>Perpetual motion machine of the second kind.</b></p>`,
      explain: `<p>A machine that takes heat from a <b>single</b> reservoir and converts all of it into work in a cycle conserves energy, so the first law is satisfied. It violates the <b>Kelvin–Planck statement</b> of the second law: some heat must always be rejected to a colder body. With only one reservoir, T<sub>c</sub> = T<sub>h</sub> and η = 1 − T<sub>c</sub>/T<sub>h</sub> = 0, so no net work at all. A machine of the <b>first</b> kind would create energy from nothing.</p>`,
      points: ['Second kind: heat from one reservoir fully into work', 'Violates Kelvin–Planck (second law), not the first law', 'First kind: work from nothing, violates the first law']
    },
    {
      id: 'm1-q-19', module: 'm1', topic: 'm1-carnot-cycle', type: 'design', level: 3,
      q: `<p>A reversible engine works between 450 K and 300 K and takes in 900 J of heat per cycle. Find η and the work per cycle. Which single change would raise η most usefully: lowering T<sub>c</sub> to 0 K, raising T<sub>h</sub>, or using a different gas?</p>`,
      options: ['η = 0.67, W = 600 J; use a different gas', 'η = 0.33, W = 300 J; lower Tc to 0 K', 'η = 0.50, W = 450 J; raise Th', 'η = 0.33, W = 300 J; raise Th (and lower Tc as far as practical)'],
      correct: 3,
      answer: `<p>η = 1 − 300/450 = <b>0.33</b>; W = 0.33 × 900 = <b>300 J</b>. Raise T<sub>h</sub> (and lower T<sub>c</sub> as far as practical).</p>`,
      explain: `<div class="worked"><div class="solve"><div class="eq">η = 1 − T<sub>c</sub>/T<sub>h</sub> = 1 − 300/450 = 0.333</div><div class="eq">W = η q<sub>h</sub> = 0.333 × 900 = 300 J</div></div></div><p>η rises when T<sub>h</sub> rises or T<sub>c</sub> falls, and when the cycle is closer to reversible. T<sub>c</sub> = 0 K cannot be reached (third law), which is also why η can never be 100%. The gas makes no difference (Carnot theorem).</p>`,
      points: ['η = 1 − Tc/Th in kelvin', 'W = η qh', 'Raise Th, lower Tc; 0 K unattainable so η < 1']
    },
    {
      id: 'm1-q-20', module: 'm1', topic: 'm1-gibbs-helmholtz-third-law', type: 'numerical', level: 2,
      q: `<p>Nitrogen adsorbs on a charcoal surface with ΔH = −40 kJ mol<sup>−1</sup> and ΔS = −100 J mol<sup>−1</sup> K<sup>−1</sup>. Is adsorption spontaneous at 300 K, and above what temperature does it stop being spontaneous?</p>`,
      options: ['Not spontaneous at 300 K because ΔS is negative', 'Spontaneous at every temperature because ΔH is negative', 'Spontaneous at 300 K (ΔG = −10 kJ mol⁻¹); not spontaneous above 400 K', 'Spontaneous only above 400 K'],
      correct: 2,
      answer: `<p>ΔG(300 K) = <b>−10 kJ mol<sup>−1</sup></b>, spontaneous; ΔG = 0 at <b>400 K</b>, so above 400 K adsorption is not spontaneous.</p>`,
      explain: `<div class="worked"><div class="solve"><div class="eq">ΔG = ΔH − TΔS = −40 − 300 × (−0.100) = −40 + 30 = −10 kJ mol<sup>−1</sup></div><div class="eq">ΔG = 0 when T = ΔH/ΔS = (−40)/(−0.100) = 400 K</div></div></div><p>Adsorption lowers entropy (gas molecules lose freedom on the surface), but it is strongly exothermic, so at low temperature |ΔH| beats |TΔS|. This is the "ΔH negative, ΔS negative" case: spontaneous at low T only, which is why heating desorbs gases.</p>`,
      points: ['ΔS < 0 for adsorption', 'ΔH strongly negative drives it', 'Favoured at low T; crossover T = ΔH/ΔS']
    },
    {
      id: 'm1-q-21', module: 'm1', topic: 'm1-gibbs-helmholtz-third-law', type: 'explain', level: 2,
      q: `<p>A data table lists S° = 191.6 J mol<sup>−1</sup> K<sup>−1</sup> for N<sub>2</sub>(g) at 298 K, an absolute value rather than a change. Which statement explains how such a value is obtained?</p>`,
      options: ['The third law sets S = 0 for a perfect crystal at 0 K, so S is found by integrating Cp/T from 0 K and adding ΔH/T for each phase change', 'It is measured directly with an entropy meter', 'It is ΔH/T at 298 K', 'Absolute entropies cannot be found; tables give only changes'],
      correct: 0,
      answer: `<p><b>S<sub>T</sub> = <span class="int"><span class="isg">∫</span><span class="lims"><span>T</span><span>0</span></span></span> (C<sub>p</sub>/T) dT + Σ ΔH<sub>trans</sub>/T<sub>trans</sub></b>, starting from S = 0 at 0 K (third law).</p>`,
      explain: `<p>The third law fixes the zero: a perfect crystal at 0 K has S = 0 (W = 1, S = k ln 1 = 0). Heating at constant pressure adds dS = C<sub>p</sub> dT/T, so the entropy at T is the area under the C<sub>p</sub>/T against T curve, plus ΔH<sub>fus</sub>/T<sub>f</sub> and ΔH<sub>vap</sub>/T<sub>b</sub> at the melting and boiling points on the way.</p>`,
      points: ['Third law: S = 0 at 0 K for a perfect crystal', 'S = ∫ Cp/T dT', 'Add ΔH/T at each phase change']
    },
    {
      id: 'm1-q-22', module: 'm1', topic: 'm1-thermo-numericals', type: 'numerical', level: 2,
      q: `<p>One mole of an ideal gas expands reversibly and isothermally at 300 K from 10 L to 20 L. What are w, q, ΔU and ΔH (R = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>)?</p>`,
      options: ['w = +1729 J, q = −1729 J, ΔU = ΔH = 0', 'w = −1729 J, q = 0, ΔU = −1729 J, ΔH = 0', 'w = −3984 J, q = +3984 J, ΔU = ΔH = 0', 'w = −1729 J, q = +1729 J, ΔU = ΔH = 0'],
      correct: 3,
      answer: `<p>w = <b>−1729 J</b>, q = <b>+1729 J</b>, ΔU = ΔH = <b>0</b>.</p>`,
      explain: `<div class="worked"><div class="solve"><div class="eq">w = −nRT ln(V<sub>2</sub>/V<sub>1</sub>) = −1 × 8.314 × 300 × ln 2 = −2494.2 × 0.6931 = −1729 J</div><div class="eq">ΔU = 0 (isothermal ideal gas), so q = −w = +1729 J; ΔH = ΔU + Δ(PV) = 0</div></div></div><p>The gas does work on the surroundings (w negative by the IUPAC sign convention) and takes in an equal amount of heat to keep its temperature constant.</p>`,
      points: ['w = −nRT ln(V2/V1)', 'ΔU = ΔH = 0 for an isothermal ideal gas', 'q = −w']
    },
    {
      id: 'm1-q-23', module: 'm1', topic: 'm1-kinetics-numericals', type: 'numerical', level: 2,
      q: `<p>A first-order drug decomposition is 75% complete in 40 min. How long until it is 90% complete?</p>`,
      options: ['About 66 min', 'About 48 min', 'About 53 min', 'About 80 min'],
      correct: 0,
      answer: `<p>t<sub>½</sub> = 20 min, k = 0.0347 min<sup>−1</sup>, t(90%) ≈ <b>66 min</b>.</p>`,
      explain: `<div class="worked"><div class="solve"><p>75% complete means two half-lives (100 → 50 → 25%), so t<sub>½</sub> = 40/2 = 20 min.</p><div class="eq">k = 0.693/t<sub>½</sub> = 0.693/20 = 0.0347 min<sup>−1</sup></div><div class="eq">t = (2.303/k) log[100/(100 − 90)] = (2.303/0.0347) × log 10 = 66.4 min</div></div></div><p>Check: the answer must be more than 40 min and less than three half-lives (60 min would give 87.5%), and 90% is just past that, so about 66 min is sensible.</p>`,
      points: ['First order: t = (2.303/k) log[a/(a − x)]', '75% = two half-lives', 'k = 0.693/t½']
    },
    {
      id: 'm1-q-24', module: 'm1', topic: 'm1-collision-arrhenius', type: 'interpret', level: 2,
      q: `<p>A student sketches the Maxwell–Boltzmann distribution of a gas at T<sub>1</sub> and at a higher T<sub>2</sub>, both on the same axes with E<sub>a</sub> marked. Which description of the T<sub>2</sub> curve is correct?</p>`,
      options: ['Higher peak, shifted left, larger total area', 'Same peak, same position, larger area beyond Ea', 'Lower and broader peak shifted right, same total area, much larger area beyond Ea', 'Lower peak shifted right, smaller total area'],
      correct: 2,
      answer: `<p><b>Lower, broader peak shifted right; same total area; much larger area beyond E<sub>a</sub>.</b></p>`,
      explain: `<p>The total area is the total number of molecules, which does not change. At higher temperature the energies spread out, so the peak (most probable energy) moves to higher energy and becomes lower. The tail beyond the fixed E<sub>a</sub> line grows a lot, so a much larger fraction of molecules can react, which is why the rate rises sharply with temperature.</p>`,
      points: ['Area under curve = number of molecules (constant)', 'Peak lower and shifted right at higher T', 'Fraction above Ea rises roughly as e^(−Ea/RT)']
    }
  ]
});
