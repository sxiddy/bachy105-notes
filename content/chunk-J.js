CHUNK({
  chunk: 'J',
  module: 'm1',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm1-rate-law',
      title: 'Reaction rate and rate law',
      short: 'Rate & rate law',
      blurb: 'What chemical kinetics studies, factors affecting rate, rate expressions with stoichiometry, the rate law and rate constant, and order of a reaction.',
      source: 'Pages 3–10',
      tabs: [
        { title: 'What kinetics is', html: `
          <p class="lead">The chemistry that deals with <b>reaction rates</b> is called <b>chemical kinetics</b>. Thermodynamics tells you the <b>direction</b> of a process but nothing about its rate.</p>
          <ul>
            <li>It matters for producing chemicals on an <b>industrial scale</b> and for the decay of radioactive isotopes used in medicine.</li>
            <li>It shows <b>how reactions occur</b>: the order in which bonds break and form.</li>
            <li>Rate data give evidence for a <b>reaction mechanism</b>, the step-by-step, molecular-level pathway from reactants to products.</li>
          </ul>
          <h3>Factors that affect rate</h3>
          <ol>
            <li><b>Physical state</b> of the reactants: homogeneous (all gases or all liquids) or heterogeneous (different phases).</li>
            <li><b>Reactant concentrations.</b></li>
            <li><b>Reaction temperature.</b></li>
            <li>Presence of a <b>catalyst</b>.</li>
          </ol>
        ` },
        { title: 'Rate of reaction', html: `
          <p class="lead">Rate is the <b>change in concentration</b> of a reactant or product per unit time. On a molecular level it depends on how often molecules collide: more collisions, higher rate.</p>
          <div class="eq" data-label="Disappearance of reactant R">rate = −d[R]/dt</div>
          <div class="eq" data-label="Formation of product P">rate = +d[P]/dt</div>
          <p>The <b>negative sign</b> for a reactant shows that its concentration is decreasing with time. Both rates are positive numbers.</p>
          <h3>General reaction A + B → C</h3>
          <div class="eq">rate = −d[A]/dt = −d[B]/dt = +d[C]/dt</div>
          <h3>General reaction aA + bB → cC + dD</h3>
          <div class="eq">rate = −<span class="frac"><span>1</span><span>a</span></span> d[A]/dt = −<span class="frac"><span>1</span><span>b</span></span> d[B]/dt = +<span class="frac"><span>1</span><span>c</span></span> d[C]/dt = +<span class="frac"><span>1</span><span>d</span></span> d[D]/dt</div>
          <p>Dividing by the coefficient makes every species give the <b>same</b> rate for the reaction.</p>
          <div class="worked"><div class="given"><p>Write the rate expressions for NO<sub>2</sub>(g) + CO(g) → NO(g) + CO<sub>2</sub>(g) and 2HI(g) → H<sub>2</sub>(g) + I<sub>2</sub>(g).</p></div>
          <div class="solve"><div class="eq">rate = −d[NO<sub>2</sub>]/dt = −d[CO]/dt = d[NO]/dt = d[CO<sub>2</sub>]/dt</div><div class="eq">rate = −½ d[HI]/dt = d[H<sub>2</sub>]/dt = d[I<sub>2</sub>]/dt</div></div>
          <div class="result">HI disappears twice as fast as H<sub>2</sub> appears</div></div>
        ` },
        { title: 'Rate law & constant', html: `
          <p class="lead">The <b>rate law</b> links rate to concentration through a proportionality constant <b>k</b>, the <b>rate constant</b>.</p>
          <div class="eq" data-label="For aA + bB → cC + dD">rate = k [A]<sup>m</sup> [B]<sup>n</sup></div>
          <p>The exponents m and n are the <b>order of reaction</b> in A and B. They are typically small whole numbers, and <b>not necessarily equal</b> to the coefficients a and b.</p>
          <h3>Important points</h3>
          <ul>
            <li>The rate law comes from <b>experiment</b>. You cannot read it off the stoichiometry, unless the reaction is <b>elementary</b>.</li>
            <li>The rate law is not limited to reactants. It can contain a <b>product term</b>, e.g. rate = k[A]<sup>m</sup>[B]<sup>n</sup>[C]<sup>c</sup>.</li>
            <li>k is <b>independent of concentration</b> but <b>depends on temperature</b>.</li>
            <li>The <b>units of k vary</b>. Work them out from the units of rate and concentration.</li>
          </ul>
          <div class="note trap"><p>Do not use the balanced-equation coefficients as orders. 2NO + 2H<sub>2</sub> → 2N<sub>2</sub> + 2H<sub>2</sub>O has rate = k[NO]<sup>2</sup>[H<sub>2</sub>], total order 3, not 4.</p></div>
        ` },
        { title: 'Order of reaction', html: `
          <p class="lead">For A + B → C with rate = k[A]<sup>m</sup>[B]<sup>n</sup>, m is the order in A, n is the order in B, and the <b>overall order = m + n</b>.</p>
          <ul>
            <li>It is the sum of the exponents in the rate law.</li>
            <li>It can be an integer, a <b>fraction</b>, negative or positive.</li>
            <li>It can be found only <b>experimentally</b>.</li>
            <li>It may not equal the number of reactant molecules in the equation.</li>
          </ul>
          <table class="tbl">
            <thead><tr><th>Reaction</th><th>Rate law</th><th>Order</th></tr></thead>
            <tbody>
              <tr><td>H<sub>2</sub> + Cl<sub>2</sub> → 2HCl</td><td>k[H<sub>2</sub>]<sup>0</sup>[Cl<sub>2</sub>]<sup>0</sup></td><td><b>zero</b></td></tr>
              <tr><td>SO<sub>2</sub>Cl<sub>2</sub>(g) → SO<sub>2</sub>(g) + Cl<sub>2</sub>(g)</td><td>k[SO<sub>2</sub>Cl<sub>2</sub>]</td><td><b>first</b></td></tr>
              <tr><td>2NO<sub>2</sub> → 2NO + O<sub>2</sub></td><td>k[NO<sub>2</sub>]<sup>2</sup></td><td><b>second</b></td></tr>
              <tr><td>2NO(g) + 2H<sub>2</sub>(g) → 2N<sub>2</sub>(g) + 2H<sub>2</sub>O(g)</td><td>k[NO]<sup>2</sup>[H<sub>2</sub>]</td><td><b>third</b></td></tr>
              <tr><td>CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> + H<sub>2</sub>O → CH<sub>3</sub>COOH + C<sub>2</sub>H<sub>5</sub>OH</td><td>k[CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub>]<sup>1</sup>[H<sub>2</sub>O]<sup>0</sup></td><td><b>pseudo-first</b></td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Order vs molecularity', html: `
          <p class="lead">The syllabus lists molecularity next to order. They sound alike and mean different things.</p>
          <div class="vs">
            <div class="side"><h4>Order</h4><p>Sum of exponents in the <b>experimental</b> rate law. Can be zero, fractional or negative. Applies to overall and complex reactions.</p></div>
            <div class="side"><h4>Molecularity</h4><p>Number of molecules that collide in a single <b>elementary step</b>. Always a whole number (1, 2, 3), never zero. Applies to one step only.</p></div>
          </div>
          <div class="note heads-up"><p>The slides do not define molecularity. This is the standard definition. For an elementary step the order equals the molecularity; for a multi-step reaction it need not.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'What is chemical kinetics?', back: 'The study of <b>reaction rates</b> and mechanisms. Thermodynamics gives direction, kinetics gives speed.' },
        { front: 'Four factors affecting reaction rate?', back: '<b>Physical state, concentration, temperature, catalyst</b>.' },
        { front: 'Why the negative sign in −d[R]/dt?', back: 'The reactant concentration is <b>decreasing</b>, and the rate is a positive number.' },
        { front: 'Rate expression for aA + bB → cC + dD?', back: '<b>−(1/a)d[A]/dt = −(1/b)d[B]/dt = (1/c)d[C]/dt = (1/d)d[D]/dt</b>.' },
        { front: 'What is the rate law?', back: '<b>rate = k[A]<sup>m</sup>[B]<sup>n</sup></b>, found by experiment, not from the balanced equation.' },
        { front: 'Does k depend on concentration? On temperature?', back: 'Not on concentration. <b>Yes on temperature.</b> Its units vary with order.' },
        { front: 'Overall order?', back: 'The <b>sum of the exponents</b> in the rate law (m + n).' },
        { front: 'Order of H<sub>2</sub> + Cl<sub>2</sub> → 2HCl in the slide?', back: '<b>Zero</b>: rate = k[H<sub>2</sub>]<sup>0</sup>[Cl<sub>2</sub>]<sup>0</sup>.' }
      ],
      oneLiners: [
        'Rate = −d[R]/dt = +d[P]/dt; divide by coefficients for aA + bB → cC + dD.',
        'Rate law is found only by experiment, unless the step is elementary.',
        'k depends on temperature, not on concentration.',
        'Overall order = m + n and may be zero, fractional or negative.',
        'Order is experimental; molecularity applies to an elementary step and is a whole number.',
        'Factors: physical state, concentration, temperature, catalyst.'
      ],
      formulas: [
        { name: 'Rate expression', html: `rate = −(1/a) d[A]/dt = −(1/b) d[B]/dt = (1/c) d[C]/dt = (1/d) d[D]/dt`, note: 'For aA + bB → cC + dD.' },
        { name: 'Rate law', html: `rate = k [A]<sup>m</sup> [B]<sup>n</sup>`, note: 'Overall order = m + n.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm1-integrated-rate',
      title: 'Integrated rate equations and half-life',
      short: 'Integrated rate laws',
      blurb: 'Zero, first, pseudo-first and second order: rate laws, units, integrated equations, plots, half-lives, the methyl isonitrile example and pseudo-first-order reactions.',
      source: 'Pages 11–16',
      tabs: [
        { title: 'Comparison table', html: `
          <p class="lead">The <b>half-life</b> t<sub>1/2</sub> is the time required for the concentration of a reactant to reach <b>half its initial value</b>.</p>
          <table class="tbl">
            <thead><tr><th></th><th>Zero order</th><th>First order</th><th>Second order</th></tr></thead>
            <tbody>
              <tr><td>Meaning</td><td>Rate of disappearance of A is independent of [A]</td><td>Rate depends on one reactant raised to the first power</td><td>Exponents in the rate law total 2</td></tr>
              <tr><td>Reaction</td><td>A → B</td><td>A → B</td><td>A + B → C + D</td></tr>
              <tr><td>Example</td><td>2NH<sub>3</sub> → N<sub>2</sub> + 3H<sub>2</sub> (with catalyst)</td><td>PCl<sub>5</sub> → PCl<sub>3</sub> + Cl<sub>2</sub></td><td>2HI → H<sub>2</sub> + I<sub>2</sub></td></tr>
              <tr><td>Rate law</td><td>k[A]<sup>0</sup></td><td>k[A]<sup>1</sup></td><td>k[A]<sup>2</sup></td></tr>
              <tr><td>Units of k</td><td><b>mol L<sup>−1</sup> s<sup>−1</sup></b></td><td><b>s<sup>−1</sup></b></td><td><b>L mol<sup>−1</sup> s<sup>−1</sup></b></td></tr>
              <tr><td>Integrated</td><td>[A]<sub>t</sub> = −kt + [A]<sub>0</sub></td><td>ln[A]<sub>t</sub> = −kt + ln[A]<sub>0</sub></td><td>1/[A]<sub>t</sub> = kt + 1/[A]<sub>0</sub></td></tr>
              <tr><td>Straight-line plot</td><td>[A]<sub>t</sub> vs t</td><td>ln[A]<sub>t</sub> vs t</td><td>1/[A]<sub>t</sub> vs t</td></tr>
              <tr><td>Half-life</td><td><b>[A]<sub>0</sub>/2k</b></td><td><b>0.693/k</b></td><td><b>1/(k[A]<sub>0</sub>)</b></td></tr>
            </tbody>
          </table>
          <div class="note exam"><p>First-order half-life does <b>not</b> depend on the starting concentration. Zero order: longer for higher [A]<sub>0</sub>. Second order: shorter for higher [A]<sub>0</sub>.</p></div>
          <figure data-fig="m1-order-conc-time"></figure>
        ` },
        { title: 'Reading the plots', html: `
          <p class="lead">Which quantity gives a straight line tells you the order, and the slope gives k.</p>
          <figure data-fig="m1-linear-rate-plots"></figure>
          <div class="kv">
            <div><span>Zero order</span><b>[A]<sub>t</sub> vs time, slope = −k</b></div>
            <div><span>First order</span><b>ln[A]<sub>t</sub> vs time, slope = −k</b></div>
            <div><span>Second order</span><b>1/[A]<sub>t</sub> vs time, slope = +k</b></div>
          </div>
          <ul>
            <li><b>Rate vs concentration</b> for rate = k[conc]<sup>n</sup>: a flat line for zero order, a straight line through the origin for first order, a parabola for second order.</li>
            <li><b>Half-life vs concentration</b> follows t<sub>1/2</sub> ∝ a<sup>(1−n)</sup>, where a is the initial concentration.</li>
          </ul>
          <div class="worked"><div class="given"><p>Methyl isonitrile (CH<sub>3</sub>NC) converts to acetonitrile (CH<sub>3</sub>CN) at 199 °C. A plot of ln of its pressure against time is a straight line of slope −5.1 × 10<sup>−5</sup> s<sup>−1</sup>.</p></div>
          <div class="solve"><p>A straight ln plot means the reaction is <b>first order</b>: ln[CH<sub>3</sub>NC]<sub>t</sub> = −kt + ln[CH<sub>3</sub>NC]<sub>0</sub>.</p></div>
          <div class="result">k = <b>5.1 × 10<sup>−5</sup> s<sup>−1</sup></b></div></div>
        ` },
        { title: 'Pseudo-first order', html: `
          <p class="lead">A <b>pseudo-first-order reaction</b> is a second-order (bimolecular) reaction made to behave like a first-order one.</p>
          <ul>
            <li>It happens when one reactant is in <b>great excess</b> or is held at constant concentration compared with the other.</li>
            <li>For A + B → C with B in large excess, the reaction is pseudo-first order <b>with respect to A</b>. If A is in large excess, it is pseudo-first order with respect to B.</li>
          </ul>
          <div class="worked"><div class="given"><p>CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> + H<sub>2</sub>O → CH<sub>3</sub>COOH + C<sub>2</sub>H<sub>5</sub>OH</p></div>
          <div class="solve"><p>The concentration of water is very high and hardly changes during the reaction, so it folds into the constant.</p><div class="eq">rate = k [CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub>]</div></div>
          <div class="result">Pseudo-first order: ln[A]<sub>t</sub> = −kt + ln[A]<sub>0</sub>, t<sub>1/2</sub> = 0.693/k, units s<sup>−1</sup></div></div>
          <div class="note heads-up"><p>The comparison table writes the pseudo-first-order case as A + B → B + C with rate = k[A]. Here B is the species in excess (the water above).</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Integrated rate law, zero order?', back: '<b>[A]<sub>t</sub> = −kt + [A]<sub>0</sub></b>. Half-life [A]<sub>0</sub>/2k. Units mol L<sup>−1</sup> s<sup>−1</sup>.' },
        { front: 'Integrated rate law, first order?', back: '<b>ln[A]<sub>t</sub> = −kt + ln[A]<sub>0</sub></b>. Half-life 0.693/k. Units s<sup>−1</sup>.' },
        { front: 'Integrated rate law, second order?', back: '<b>1/[A]<sub>t</sub> = kt + 1/[A]<sub>0</sub></b>. Half-life 1/(k[A]<sub>0</sub>). Units L mol<sup>−1</sup> s<sup>−1</sup>.' },
        { front: 'What is half-life?', back: 'Time for the concentration of a reactant to fall to <b>half</b> its initial value.' },
        { front: 'Which half-life is independent of initial concentration?', back: '<b>First order</b>: t<sub>1/2</sub> = 0.693/k.' },
        { front: 'What is a pseudo-first-order reaction?', back: 'A <b>bimolecular</b> reaction that behaves as first order because one reactant is in <b>large excess</b>, e.g. ester hydrolysis in water.' },
        { front: 'Which plot is linear for a first-order reaction?', back: '<b>ln[A] vs time</b>, with slope −k.' },
        { front: 'Half-life vs concentration relation?', back: '<b>t<sub>1/2</sub> ∝ a<sup>(1−n)</sup></b> for order n.' }
      ],
      oneLiners: [
        'Zero order: [A] vs t is linear, t1/2 = [A]0/2k, k in mol L⁻¹ s⁻¹.',
        'First order: ln[A] vs t is linear, t1/2 = 0.693/k, k in s⁻¹.',
        'Second order: 1/[A] vs t is linear, t1/2 = 1/(k[A]0), k in L mol⁻¹ s⁻¹.',
        'Pseudo-first order: one reactant in huge excess, so its concentration is constant.',
        'Ester hydrolysis in water is the standard pseudo-first-order example.',
        'Methyl isonitrile to acetonitrile at 199 °C is first order, k = 5.1 × 10⁻⁵ s⁻¹.'
      ],
      formulas: [
        { name: 'Zero order', html: `[A]<sub>t</sub> = −kt + [A]<sub>0</sub>; t<sub>1/2</sub> = [A]<sub>0</sub> / 2k`, note: '' },
        { name: 'First order', html: `ln[A]<sub>t</sub> = −kt + ln[A]<sub>0</sub>; t<sub>1/2</sub> = 0.693 / k`, note: '' },
        { name: 'Second order', html: `1/[A]<sub>t</sub> = kt + 1/[A]<sub>0</sub>; t<sub>1/2</sub> = 1 / (k[A]<sub>0</sub>)`, note: '' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm1-collision-arrhenius',
      title: 'Collision theory, activation energy and Arrhenius equation',
      short: 'Collision & Arrhenius',
      blurb: 'Temperature and rate, the collision model, orientation factor, activation energy and the transition state, energy distribution, and the Arrhenius equation and plot.',
      source: 'Pages 17–22',
      tabs: [
        { title: 'Temperature & collisions', html: `
          <p class="lead">The rates of most reactions <b>rise with temperature</b>, because the <b>rate constant</b> k increases. For CH<sub>3</sub>NC → CH<sub>3</sub>CN the rate roughly <b>doubles for each 10 °C rise</b>.</p>
          <h3>The collision model</h3>
          <ul>
            <li>The more collisions per second, the faster the reaction.</li>
            <li>More concentration means more collisions, so a higher rate.</li>
            <li>By kinetic-molecular theory, a higher temperature means higher molecular speeds. Molecules collide <b>more forcefully</b> (with more energy) and <b>more often</b>. Both raise the rate.</li>
          </ul>
        ` },
        { title: 'Orientation factor', html: `
          <p class="lead">In most reactions a collision gives a reaction only if the molecules are <b>oriented in a certain way</b>.</p>
          <ul>
            <li>The relative orientation decides whether the atoms are positioned to form new bonds.</li>
            <li>Example: <b>Cl + NOCl → NO + Cl<sub>2</sub></b>. A collision may or may not lead to reaction, depending on which parts meet.</li>
          </ul>
          <div class="note why"><p>So a collision needs two things: <b>enough energy</b> (next tab) and the <b>right orientation</b>. Many collisions fail one test or the other.</p></div>
          <figure data-fig="m1-collision-orientation"></figure>
        ` },
        { title: 'Activation energy', html: `
          <p class="lead">In 1888 the Swedish chemist <b>Svante Arrhenius</b> suggested that molecules need a certain <b>minimum energy</b> to react.</p>
          <ul>
            <li>By the collision model, this energy comes from the <b>kinetic energies</b> of the colliding molecules.</li>
            <li>On collision, kinetic energy can stretch, bend and finally break bonds.</li>
            <li>The minimum energy needed to start a reaction is the <b>activation energy, E<sub>a</sub></b>. It varies from reaction to reaction.</li>
          </ul>
          <div class="vs">
            <div class="side"><h4>Energy profile</h4><p>E<sub>a</sub> is the difference between the energy of the starting molecule and the <b>highest energy</b> along the reaction pathway.</p><p>The arrangement at the top of the barrier is the <b>activated complex</b> or <b>transition state</b>.</p></div>
            <div class="side"><h4>Effect on k</h4><p>The rate constant depends on the size of E<sub>a</sub>. The <b>lower E<sub>a</sub></b>, the larger k and the faster the reaction.</p></div>
          </div>
          <p>At a higher temperature, a much <b>greater fraction of molecules</b> have kinetic energy above E<sub>a</sub>. That is why the rate climbs.</p>
          <figure data-fig="m1-energy-profile"></figure>
          <div class="worked"><div class="given"><p>Three reactions have the same frequency factor A but different energy profiles. Rank the forward rate constants from smallest to largest.</p></div>
          <div class="solve"><p>The lower the activation energy, the larger k. The value of ΔE (reactant to product) does <b>not</b> change k.</p></div>
          <div class="result">Order on the slide: <b>2 &lt; 3 &lt; 1</b></div></div>
        ` },
        { title: 'Arrhenius equation', html: `
          <p class="lead">Arrhenius noted that for most reactions the rate rises <b>non-linearly</b> with temperature. The rate constant follows:</p>
          <figure data-fig="m1-arrhenius-plot"></figure>
          <div class="eq" data-label="Arrhenius equation">k = A e<sup>−E<sub>a</sub>/RT</sup></div>
          <div class="eq" data-label="Logarithmic form">ln k = ln A − <span class="frac"><span>E<sub>a</sub></span><span>RT</span></span></div>
          <div class="kv">
            <div><span>k</span><b>rate constant</b></div>
            <div><span>E<sub>a</sub></span><b>activation energy</b></div>
            <div><span>A</span><b>pre-exponential (frequency) factor, a constant</b></div>
            <div><span>R</span><b>8.314 J mol<sup>−1</sup> K<sup>−1</sup></b></div>
            <div><span>T</span><b>absolute temperature</b></div>
          </div>
          <ul>
            <li>A plot of <b>ln k against 1/T</b> is a straight line if the reaction obeys the equation.</li>
            <li><b>E<sub>a</sub> comes from the slope</b> (slope = −E<sub>a</sub>/R). <b>ln A comes from the intercept</b> at 1/T = 0, i.e. infinite T.</li>
            <li>The <b>higher E<sub>a</sub></b>, the stronger the temperature dependence, i.e. the steeper the slope.</li>
            <li>If E<sub>a</sub> = 0, the rate is <b>independent of temperature</b>.</li>
          </ul>
          <div class="note heads-up"><p>The slide prints "ln k = E<sub>a</sub>/RT + ln A", missing the minus sign. The correct form is ln k = −E<sub>a</sub>/RT + ln A, which is why the plot slopes down.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'How does rate change with a 10 °C rise?', back: 'It roughly <b>doubles</b>, because k increases.' },
        { front: 'Why does a higher temperature speed up reaction?', back: 'Molecules collide <b>more often and with more energy</b>, and more exceed E<sub>a</sub>.' },
        { front: 'What is the orientation factor?', back: 'A collision reacts only if the molecules meet in a suitable <b>orientation</b>, e.g. Cl + NOCl.' },
        { front: 'Define activation energy.', back: 'The <b>minimum energy</b> needed to start a reaction (Arrhenius, 1888).' },
        { front: 'What is the transition state?', back: 'The arrangement of atoms at the <b>top of the energy barrier</b> (activated complex).' },
        { front: 'Effect of lower E<sub>a</sub> on k?', back: '<b>Larger k</b>, faster reaction. ΔE does not affect k.' },
        { front: 'Arrhenius equation?', back: '<b>k = A e<sup>−E<sub>a</sub>/RT</sup></b>; ln k = ln A − E<sub>a</sub>/RT.' },
        { front: 'What does a ln k vs 1/T plot give?', back: 'A straight line: <b>slope = −E<sub>a</sub>/R</b>, intercept = ln A.' }
      ],
      oneLiners: [
        'Rate roughly doubles for every 10 °C rise.',
        'A reacting collision needs energy ≥ Ea and the right orientation.',
        'Ea is the minimum energy to start a reaction; the top of the barrier is the transition state.',
        'Lower Ea means larger k; ΔE of the reaction does not change k.',
        'Arrhenius: k = A e^(−Ea/RT); plot ln k vs 1/T, slope = −Ea/R.',
        'If Ea = 0 the rate does not depend on temperature.'
      ],
      formulas: [
        { name: 'Arrhenius equation', html: `k = A e<sup>−E<sub>a</sub>/RT</sup>`, note: 'A = frequency factor, R = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>.' },
        { name: 'Logarithmic form', html: `ln k = ln A − E<sub>a</sub> / RT`, note: 'Slope of ln k vs 1/T = −E<sub>a</sub>/R.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm1-catalysis',
      title: 'Catalysis',
      short: 'Catalysis',
      blurb: 'What a catalyst is, importance, how it lowers activation energy, homogeneous, heterogeneous and enzyme catalysis with examples, and what a catalyst does and does not change.',
      source: 'Pages 23–27',
      tabs: [
        { title: 'What a catalyst is', html: `
          <p class="lead">A <b>catalyst</b> changes the speed of a reaction without undergoing a <b>permanent chemical change</b> itself. The effect is called <b>catalysis</b>.</p>
          <ul>
            <li>Most reactions in the body, the atmosphere and the oceans use catalysts.</li>
            <li>Catalytic processes contribute more than <b>30–40% of global GDP</b>.</li>
          </ul>
          <h3>Four sectors that rely on catalysis</h3>
          <div class="chips"><span class="chip">petroleum and energy production</span><span class="chip">chemicals and polymers</span><span class="chip">food industry</span><span class="chip">pollution control</span></div>
        ` },
        { title: 'How it works', html: `
          <p class="lead">A catalyst gives the reaction an <b>alternative mechanism</b> with a different, <b>lower-energy transition state</b>. The activation energy falls compared with the uncatalysed reaction.</p>
          <figure data-fig="m1-catalyst-profile"></figure>
          <ol class="steps">
            <li><b>Lowers E<sub>a</sub>.</b> Reactants need less energy to convert into products.</li>
            <li><b>More effective collisions.</b> More molecules now have enough energy to clear the lower barrier, so successful collisions per unit time rise.</li>
            <li><b>Speeds up both directions.</b> Forward and reverse reactions are both faster. The catalyst does <b>not</b> change the equilibrium position, only how fast equilibrium is reached.</li>
          </ol>
          <div class="note trap"><p>A catalyst does not change ΔG, ΔH or the equilibrium constant. It cannot make a non-spontaneous reaction go.</p></div>
        ` },
        { title: 'Types of catalysis', html: `
          <p class="lead">Three main types.</p>
          <table class="tbl">
            <thead><tr><th>Type</th><th>Examples from the slides</th></tr></thead>
            <tbody>
              <tr><td><b>Homogeneous</b></td><td>
                <b>Gas phase:</b> 2N<sub>2</sub>O → 2N<sub>2</sub> + O<sub>2</sub>, catalysed by traces of chlorine in light. Cl<sup>•</sup> radicals form; Step 1: N<sub>2</sub>O + Cl<sup>•</sup> → N<sub>2</sub> + ClO<sup>•</sup>; Step 2: 2ClO<sup>•</sup> → Cl<sub>2</sub> + O<sub>2</sub>.<br>
                <b>Solution phase:</b> hydrolysis of ethyl acetate in the presence of acid or alkali, CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> + H<sub>2</sub>O → CH<sub>3</sub>COOH + C<sub>2</sub>H<sub>5</sub>OH.</td></tr>
              <tr><td><b>Heterogeneous</b></td><td>
                <b>Haber process:</b> N<sub>2</sub> + 3H<sub>2</sub> → 2NH<sub>3</sub>, iron (Fe) catalyst.<br>
                <b>Contact process:</b> 2SO<sub>2</sub> + O<sub>2</sub> → 2SO<sub>3</sub>, V<sub>2</sub>O<sub>5</sub> or platinum catalyst.</td></tr>
              <tr><td><b>Enzyme</b></td><td><b>Catalase</b> converts H<sub>2</sub>O<sub>2</sub> → H<sub>2</sub>O + O<sub>2</sub>. It protects the cell from oxidative damage by reactive oxygen species (ROS).</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>Homogeneous: catalyst and reactants in the same phase. Heterogeneous: different phases, usually a solid catalyst with gas or liquid reactants.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Define a catalyst.', back: 'A substance that <b>changes the rate</b> of a reaction without being permanently changed itself.' },
        { front: 'How does a catalyst speed up a reaction?', back: 'Provides an alternative mechanism with a <b>lower activation energy</b> (lower-energy transition state).' },
        { front: 'Effect of a catalyst on equilibrium?', back: '<b>None.</b> It only speeds up reaching it, in both directions.' },
        { front: 'Three types of catalysis?', back: '<b>Homogeneous, heterogeneous, enzyme</b>.' },
        { front: 'Catalyst in the Haber process?', back: '<b>Iron (Fe)</b>, for N<sub>2</sub> + 3H<sub>2</sub> → 2NH<sub>3</sub>.' },
        { front: 'Catalyst in the Contact process?', back: '<b>V<sub>2</sub>O<sub>5</sub></b> or platinum, for SO<sub>2</sub> → SO<sub>3</sub>.' },
        { front: 'What does catalase do?', back: 'Converts <b>H<sub>2</sub>O<sub>2</sub> to water and oxygen</b>, protecting cells from ROS.' },
        { front: 'Four sectors of the economy using catalysis?', back: 'Petroleum and energy, chemicals and polymers, food, pollution control.' }
      ],
      oneLiners: [
        'A catalyst lowers Ea through an alternative mechanism; it is not consumed.',
        'Catalysts speed up both forward and reverse reactions and leave the equilibrium position unchanged.',
        'Homogeneous: same phase (Cl for N2O, acid for ester hydrolysis). Heterogeneous: Fe in Haber, V2O5 in Contact.',
        'Enzyme example: catalase breaks H2O2 into H2O and O2.',
        'Catalysis contributes more than 30–40% of global GDP.'
      ],
      formulas: []
    }
  ],
  figures: [
    { id: 'm1-order-conc-time', src: null, crop: null,
      caption: 'Concentration against time for the three orders with the same starting concentration and starting rate: zero order falls in a straight line to zero, first order decays exponentially, second order slows most and has the longest tail.',
      alt: 'Graph of concentration of A against time with three curves from the same starting point: a straight green line reaching zero, a blue exponential decay, and an orange curve that flattens most.' },
    { id: 'm1-linear-rate-plots', src: null, crop: null,
      caption: 'Three stacked plots: [A] against t for zero order and ln[A] against t for first order both fall with slope minus k; 1/[A] against t for second order rises with slope plus k.',
      alt: 'Three small graphs against time: a falling line of A labelled zero order, a falling line of ln A labelled first order, and a rising line of 1 over A labelled second order, each with its slope in terms of k.' },
    { id: 'm1-collision-orientation', src: null, crop: null,
      caption: 'For Cl + NOCl, a collision at the Cl end of NOCl can give NO + Cl2. The same Cl hitting the O end bounces off with no reaction.',
      alt: 'Two rows of ball-and-stick drawings of O, N and Cl atoms. In the top row a Cl atom approaches the Cl end and the reaction proceeds; in the bottom row a Cl atom approaches the O end and bounces off.' },
    { id: 'm1-energy-profile', src: null, crop: null,
      caption: 'Energy profile: Ea is the climb from the reactants to the top of the barrier, where the activated complex sits. ΔE between reactants and products does not set the rate.',
      alt: 'Energy against reaction progress curve: a flat reactant level, a peak labelled activated complex, then a lower product level. An arrow marks Ea from reactants to the peak and another marks delta E between reactants and products.' },
    { id: 'm1-arrhenius-plot', src: null, crop: null,
      caption: 'ln k against 1/T is a straight line with slope minus Ea over R and intercept ln A. A higher Ea gives a steeper line.',
      alt: 'Graph of ln k against 1/T with two falling straight lines extrapolated back to a common intercept ln A on the vertical axis; the steeper line is labelled high Ea and the shallower one low Ea.' },
    { id: 'm1-catalyst-profile', src: null, crop: null,
      caption: 'A catalyst opens a path with a lower barrier. Reactant and product energies are unchanged, so the equilibrium position stays the same while both directions speed up.',
      alt: 'Two energy profiles from the same reactant level to the same lower product level: a high blue peak for the uncatalysed path and a lower green peak for the catalysed path, with arrows marking each activation energy.' }
  ]
});
