CHUNK({
  chunk: 'J',
  module: 'm1',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm1-rate-law',
      title: "Chemical kinetics: rate equation and order of the reaction",
      short: "Rate equation & order",
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
          <figure data-fig="m1-rate-slope"></figure>
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
      title: "Integral rate equations and half-life of reactions",
      short: "Integral rate equations",
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
          <div data-viz="rate-order-plotter"></div>
          <figure data-fig="m1-order-conc-time"></figure>
        ` },
        { title: 'Derivations', html: `
          <p class="lead">Every integrated law comes the same way: write the rate law as a <b>differential equation</b>, put all the [A] terms on one side and dt on the other, then <b>integrate</b> from t = 0 (concentration [A]<sub>0</sub>) to time t (concentration [A]<sub>t</sub>). The half-life follows by putting <b>[A]<sub>t</sub> = [A]<sub>0</sub>/2</b> at t = t<sub>1/2</sub>.</p>
          <h3>First order (A → products)</h3>
          <div class="eq" data-label="Rate law">−d[A]/dt = k[A]</div>
          <div class="eq" data-label="Separate variables">d[A]/[A] = −k dt</div>
          <div class="eq" data-label="Integrate, limits [A]0 → [A]t and 0 → t">ln[A]<sub>t</sub> − ln[A]<sub>0</sub> = −kt</div>
          <div class="eq" data-label="Integrated first-order law">ln[A]<sub>t</sub> = −kt + ln[A]<sub>0</sub></div>
          <div class="eq" data-label="Same law in exponential form">[A]<sub>t</sub> = [A]<sub>0</sub> e<sup>−kt</sup></div>
          <div class="eq" data-label="Same law in log10 form (used in numericals)">k = <span class="frac"><span>2.303</span><span>t</span></span> log <span class="frac"><span>[A]<sub>0</sub></span><span>[A]<sub>t</sub></span></span></div>
          <p><b>Half-life.</b> Put t = t<sub>1/2</sub> and [A]<sub>t</sub> = [A]<sub>0</sub>/2:</p>
          <div class="eq">k t<sub>1/2</sub> = ln ([A]<sub>0</sub> / ½[A]<sub>0</sub>) = ln 2 = 0.693</div>
          <div class="eq" data-label="First-order half-life">t<sub>1/2</sub> = 0.693 / k</div>
          <p>[A]<sub>0</sub> cancels out, so the first-order half-life is <b>independent of the starting concentration</b>. Going from 1 M to 0.5 M takes exactly as long as going from 0.5 M to 0.25 M, and after n half-lives the fraction left is (½)<sup>n</sup>.</p>
          <h3>Second order (rate = k[A]<sup>2</sup>)</h3>
          <div class="eq" data-label="Rate law and separation">−d[A]/dt = k[A]<sup>2</sup> ⇒ d[A]/[A]<sup>2</sup> = −k dt</div>
          <div class="eq" data-label="Integrate (∫ d[A]/[A]² = −1/[A])">−1/[A]<sub>t</sub> + 1/[A]<sub>0</sub> = −kt</div>
          <div class="eq" data-label="Integrated second-order law">1/[A]<sub>t</sub> = 1/[A]<sub>0</sub> + kt</div>
          <p><b>Half-life:</b> 2/[A]<sub>0</sub> = 1/[A]<sub>0</sub> + k t<sub>1/2</sub>, so <b>t<sub>1/2</sub> = 1/(k[A]<sub>0</sub>)</b>. It gets longer as the reactant is used up, because each new half starts from a lower concentration. The same law holds for A + B → products when [A]<sub>0</sub> = [B]<sub>0</sub>.</p>
          <h3>Zero order (rate = k)</h3>
          <div class="eq" data-label="Rate law and separation">−d[A]/dt = k ⇒ d[A] = −k dt</div>
          <div class="eq" data-label="Integrated zero-order law">[A]<sub>t</sub> = [A]<sub>0</sub> − kt</div>
          <p><b>Half-life:</b> [A]<sub>0</sub>/2 = [A]<sub>0</sub> − k t<sub>1/2</sub>, so <b>t<sub>1/2</sub> = [A]<sub>0</sub>/2k</b>. It is proportional to [A]<sub>0</sub>, and the reactant is completely used up at t = [A]<sub>0</sub>/k.</p>
          <h3>Telling them apart from one data set</h3>
          <table class="tbl">
            <thead><tr><th>Order</th><th>Plot that is a straight line</th><th>Slope and intercept</th><th>Half-life test</th></tr></thead>
            <tbody>
              <tr><td>Zero</td><td>[A]<sub>t</sub> against t; ln[A] and 1/[A] curve</td><td>Slope −k, intercept [A]<sub>0</sub></td><td>Each successive half-life is half the one before</td></tr>
              <tr><td>First</td><td>ln[A]<sub>t</sub> against t (or log[A]<sub>t</sub>, slope −k/2.303)</td><td>Slope −k, intercept ln[A]<sub>0</sub></td><td>Successive half-lives are equal</td></tr>
              <tr><td>Second</td><td>1/[A]<sub>t</sub> against t</td><td>Slope +k (line rises), intercept 1/[A]<sub>0</sub></td><td>Each successive half-life is double the one before</td></tr>
            </tbody>
          </table>
          <div class="note exam"><p>"Derive the integrated rate law for a second-order reaction and show how it is told apart from zero and first order" (also asked for first order with half-life). Write: rate law → separation → integration with limits → final law → half-life by putting [A]<sub>0</sub>/2 → the straight-line plot with slope and intercept. Finish with the table row comparison: plot [A], ln[A] and 1/[A] against t from the same data; only one of the three is straight, and that one names the order.</p></div>
        ` },
        { title: 'Reading the plots', html: `
          <p class="lead">Which quantity gives a straight line tells you the order, and the slope gives k.</p>
          <figure data-fig="m1-rate-halflife-conc"></figure>
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
        { front: 'Half-life vs concentration relation?', back: '<b>t<sub>1/2</sub> ∝ a<sup>(1−n)</sup></b> for order n.' },
        { front: 'Why is the first-order half-life independent of [A]<sub>0</sub>?', back: 'Putting [A]<sub>t</sub> = [A]<sub>0</sub>/2 gives kt<sub>1/2</sub> = ln 2: <b>[A]<sub>0</sub> cancels</b>, so t<sub>1/2</sub> = 0.693/k.' },
        { front: 'Successive half-lives for zero, first and second order?', back: 'Zero: <b>each halves</b>. First: <b>all equal</b>. Second: <b>each doubles</b>.' }
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
      title: "Collision theory and the effect of temperature on reaction rate",
      short: "Collision & Arrhenius",
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
          <div class="note why"><p><b>Why concentration matters.</b> Concentration is the number of molecules packed into each litre. Double the concentration of A and every B molecule meets twice as many A molecules in the same time, so the <b>number of collisions per unit time</b> doubles. The fraction of those collisions that succeed (enough energy, right orientation) is set by temperature and E<sub>a</sub>, not by concentration, so the number of successful collisions per second, and the rate, rises too. Temperature works differently: it changes k itself.</p></div>
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
        { title: 'Energy distribution', html: `
          <p class="lead">The molecules in a sample do not all move with the same energy. The <b>Maxwell–Boltzmann distribution</b> is the curve of the <b>fraction of molecules</b> (y-axis) against their <b>kinetic energy</b> (x-axis), and it explains why a small rise in temperature speeds a reaction up so much.</p>
          <h3>Shape of the curve at T<sub>1</sub></h3>
          <ul>
            <li>It starts at zero, because almost no molecules are at rest.</li>
            <li>It climbs to a <b>peak</b> at the most probable energy, the energy most molecules have.</li>
            <li>It then falls away in a <b>long tail</b> to high energy, so the curve is not symmetric.</li>
            <li>Draw a vertical line at <b>E<sub>a</sub></b>. Only the molecules in the tail to the right of it have enough energy to react; the <b>area beyond E<sub>a</sub></b> is the fraction that can react.</li>
          </ul>
          <figure data-fig="m1-maxwell-boltzmann"></figure>
          <h3>What changes at a higher temperature T<sub>2</sub></h3>
          <table class="tbl">
            <thead><tr><th>Feature</th><th>T<sub>2</sub> compared with T<sub>1</sub></th><th>Reason</th></tr></thead>
            <tbody>
              <tr><td>Position of the peak</td><td><b>Shifts right</b> to higher energy</td><td>The average kinetic energy is proportional to T</td></tr>
              <tr><td>Height of the peak</td><td><b>Lower</b>, and the curve is <b>broader</b></td><td>The energies are spread over a wider range, so fewer molecules share any single value</td></tr>
              <tr><td>Total area under the curve</td><td><b>Stays the same</b></td><td>The total number of molecules has not changed</td></tr>
              <tr><td>Area beyond E<sub>a</sub></td><td><b>Much larger</b></td><td>The whole tail moves out past the fixed E<sub>a</sub> line</td></tr>
            </tbody>
          </table>
          <p>At the higher temperature a much <b>greater fraction of molecules</b> have kinetic energy above E<sub>a</sub>, which leads to a greater rate. The fraction is roughly <b>e<sup>−E<sub>a</sub>/RT</sup></b>, the same factor that appears in the Arrhenius equation. For E<sub>a</sub> = 50 kJ mol<sup>−1</sup>, going from 298 K to 308 K multiplies it by about <b>1.9</b>, which is where the "rate doubles for every 10 °C" rule comes from.</p>
          <div class="note why"><p>The collision frequency also rises with T, but only slowly (molecular speed grows as √T, about 2% for 10 °C near room temperature). Almost all of the rate increase comes from the larger area beyond E<sub>a</sub>.</p></div>
          <div class="note exam"><p>"Show graphically how the distribution of molecular kinetic energies changes with increasing temperature" (CAT-1). Draw both curves on one set of axes, label them T<sub>1</sub> and T<sub>2</sub> (T<sub>2</sub> &gt; T<sub>1</sub>), mark E<sub>a</sub> with a vertical line and shade the two areas beyond it. Then write the four points from the table, and end with: more molecules exceed E<sub>a</sub>, so more collisions succeed per second and the rate rises.</p></div>
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
          <div data-viz="arrhenius-slider"></div>
          <div class="note exam"><p>10-mark question (CAT-1): "Using the Arrhenius equation, explain the temperature dependence of reaction rates and the determination of activation energy from an Arrhenius plot, with reference to the isomerization of methyl isonitrile (CH<sub>3</sub>NC) to acetonitrile (CH<sub>3</sub>CN)." Write the six parts below in this order, with the energy-distribution sketch and the ln k against 1/T plot drawn and labelled.</p></div>
          <h3>Answer outline: methyl isonitrile and the Arrhenius plot</h3>
          <ol>
            <li><b>Observation.</b> Rate rises with T because k rises; for CH<sub>3</sub>NC → CH<sub>3</sub>CN, k roughly doubles for each 10 °C rise. At 199 °C it is first order with k = 5.1 × 10<sup>−5</sup> s<sup>−1</sup>.</li>
            <li><b>Reason.</b> Collision model plus the energy distribution: at higher T more molecules have energy above E<sub>a</sub>, and collisions are more frequent. Sketch the energy profile (CH<sub>3</sub>NC, a bent transition state where the CH<sub>3</sub> group swings from N to C, then CH<sub>3</sub>CN lower in energy).</li>
            <li><b>Equation.</b> k = A e<sup>−E<sub>a</sub>/RT</sup> with every term defined (k, A, E<sub>a</sub>, R = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>, T in kelvin).</li>
            <li><b>Linear form.</b> ln k = ln A − (E<sub>a</sub>/R)(1/T), compared with y = c + mx.</li>
            <li><b>Plot.</b> Measure k at several temperatures, plot ln k (y) against 1/T (x): a straight line with <b>slope = −E<sub>a</sub>/R</b> and <b>intercept = ln A</b>. So E<sub>a</sub> = −slope × R and A = e<sup>intercept</sup>.</li>
            <li><b>Two-point shortcut.</b> log(k<sub>2</sub>/k<sub>1</sub>) = [E<sub>a</sub>/2.303R] × (T<sub>2</sub> − T<sub>1</sub>)/(T<sub>1</sub>T<sub>2</sub>), when only two values are given.</li>
          </ol>
          <details class="more"><summary>Textbook data for CH<sub>3</sub>NC, if you want numbers in that answer</summary>
          <table class="tbl">
            <thead><tr><th>T (°C)</th><th>189.7</th><th>198.9</th><th>230.3</th><th>251.2</th></tr></thead>
            <tbody><tr><td>k (s<sup>−1</sup>)</td><td>2.52 × 10<sup>−5</sup></td><td>5.25 × 10<sup>−5</sup></td><td>6.30 × 10<sup>−4</sup></td><td>3.16 × 10<sup>−3</sup></td></tr></tbody>
          </table>
          <p>Plotting ln k against 1/T (T in kelvin) gives a slope of about <b>−1.9 × 10<sup>4</sup> K</b>, so E<sub>a</sub> = 1.9 × 10<sup>4</sup> × 8.314 ≈ <b>1.6 × 10<sup>2</sup> kJ mol<sup>−1</sup></b>.</p>
          <div class="note heads-up"><p>The slides show the methyl isonitrile curves without numbers. This table is the standard general-chemistry data set for the same reaction (its 198.9 °C value is close to the slide's 5.1 × 10<sup>−5</sup> s<sup>−1</sup> at 199 °C), so use it only as an illustration.</p></div>
          </details>
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
        { front: 'What does a ln k vs 1/T plot give?', back: 'A straight line: <b>slope = −E<sub>a</sub>/R</b>, intercept = ln A.' },
        { front: 'Maxwell–Boltzmann curve at a higher temperature?', back: 'Peak <b>lower and shifted right</b>, curve broader, <b>total area the same</b>, area beyond E<sub>a</sub> much larger.' },
        { front: 'Why does a higher concentration raise the rate?', back: 'More molecules per litre means <b>more collisions per unit time</b>; the successful fraction is unchanged, so more successful collisions per second.' }
      ],
      oneLiners: [
        'Rate roughly doubles for every 10 °C rise.',
        'A reacting collision needs energy ≥ Ea and the right orientation.',
        'Ea is the minimum energy to start a reaction; the top of the barrier is the transition state.',
        'Lower Ea means larger k; ΔE of the reaction does not change k.',
        'Arrhenius: k = A e^(−Ea/RT); plot ln k vs 1/T, slope = −Ea/R.',
        'If Ea = 0 the rate does not depend on temperature.',
        'Higher T: Maxwell–Boltzmann peak lower and to the right, same total area, bigger area beyond Ea.'
      ],
      formulas: [
        { name: 'Arrhenius equation', html: `k = A e<sup>−E<sub>a</sub>/RT</sup>`, note: 'A = frequency factor, R = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>.' },
        { name: 'Logarithmic form', html: `ln k = ln A − E<sub>a</sub> / RT`, note: 'Slope of ln k vs 1/T = −E<sub>a</sub>/R.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm1-catalysis',
      title: "Effect of catalysts on reaction rate",
      short: "Catalysts",
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
          <div data-viz="catalyst-barrier"></div>
          <figure data-fig="m1-catalyst-profile"></figure>
          <ol class="steps">
            <li><b>Lowers E<sub>a</sub>.</b> Reactants need less energy to convert into products.</li>
            <li><b>More effective collisions.</b> More molecules now have enough energy to clear the lower barrier, so successful collisions per unit time rise.</li>
            <li><b>Speeds up both directions.</b> Forward and reverse reactions are both faster. The catalyst does <b>not</b> change the equilibrium position, only how fast equilibrium is reached.</li>
          </ol>
          <div class="note trap"><p>A catalyst does not change ΔG, ΔH or the equilibrium constant. It cannot make a non-spontaneous reaction go.</p></div>
          <h3>Reading the catalysed vs uncatalysed profile</h3>
          <ul>
            <li><b>Same start and finish.</b> Reactants and products sit at the same energy levels on both curves, so <b>ΔH is unchanged</b>; the catalyst only changes the road between them.</li>
            <li><b>Lower peak.</b> The catalysed curve has a lower maximum, so its activation energy E<sub>a</sub>(cat) is smaller than E<sub>a</sub>(uncat). By the Arrhenius equation a smaller E<sub>a</sub> in the exponent gives a much larger k at the same temperature.</li>
            <li><b>Often two or more humps.</b> The catalysed path is a different mechanism, usually several steps. Each step has its own small barrier, and the dip between the humps is an <b>intermediate</b> (Br<sub>2</sub> in the bromide example, the enzyme–substrate complex for enzymes).</li>
            <li><b>Both directions lowered equally.</b> The forward and reverse barriers fall by the same amount, which is why both rates rise by the same factor and the equilibrium position stays put.</li>
            <li><b>Enzymes</b> fit the same picture with the deepest cut in E<sub>a</sub>: the substrate first drops into a well as the enzyme–substrate complex, then crosses a very low barrier to products.</li>
          </ul>
          <div class="note exam"><p>"With the help of a labelled energy diagram, explain how catalysts influence the rate" (CAT-1, 2 marks for the diagram, 3 for reasoning). Draw energy (y) against reaction progress (x) with one reactant level and one product level, a tall curve labelled uncatalysed and a lower curve labelled catalysed, and arrows for both E<sub>a</sub> values and ΔH. Reasoning: alternative mechanism → lower E<sub>a</sub> → larger fraction of molecules above the barrier → more effective collisions per second → faster rate; ΔH and equilibrium unchanged.</p></div>
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
        ` },
        { title: 'Bromide and H₂O₂', html: `
          <p class="lead">Hydrogen peroxide decomposes only slowly on its own. Add a little <b>sodium bromide</b> to the acidified solution and the decomposition speeds up sharply: Br<sup>−</sup> is a <b>homogeneous catalyst</b>, dissolved in the same aqueous phase as the H<sub>2</sub>O<sub>2</sub>.</p>
          <div class="eq" data-label="Overall (uncatalysed or catalysed)">2H<sub>2</sub>O<sub>2</sub>(aq) → 2H<sub>2</sub>O(l) + O<sub>2</sub>(g)</div>
          <h3>Two-step catalysed mechanism</h3>
          <div class="eq" data-label="Step 1: Br⁻ is oxidised to Br₂">2Br<sup>−</sup>(aq) + H<sub>2</sub>O<sub>2</sub>(aq) + 2H<sup>+</sup>(aq) → Br<sub>2</sub>(aq) + 2H<sub>2</sub>O(l)</div>
          <div class="eq" data-label="Step 2: Br₂ is reduced back to Br⁻">Br<sub>2</sub>(aq) + H<sub>2</sub>O<sub>2</sub>(aq) → 2Br<sup>−</sup>(aq) + 2H<sup>+</sup>(aq) + O<sub>2</sub>(g)</div>
          <ul>
            <li><b>Add the steps</b> and 2Br<sup>−</sup>, 2H<sup>+</sup> and Br<sub>2</sub> cancel, leaving 2H<sub>2</sub>O<sub>2</sub> → 2H<sub>2</sub>O + O<sub>2</sub>. The catalyst does not appear in the overall equation.</li>
            <li><b>Br<sup>−</sup> is regenerated</b> in step 2, so a small amount keeps working through many cycles. It is not used up.</li>
            <li><b>Br<sub>2</sub> is an intermediate</b>: made in step 1 and consumed in step 2. You can see it, because the solution turns brownish while the reaction runs and the colour fades when the H<sub>2</sub>O<sub>2</sub> is gone.</li>
            <li><b>Rate rises</b> because each step has a lower activation energy than the direct decomposition, so oxygen bubbles off much faster.</li>
          </ul>
          <div class="note exam"><p>"What will happen to the kinetics of 2H<sub>2</sub>O<sub>2</sub> → 2H<sub>2</sub>O + O<sub>2</sub> if you add a small amount of sodium bromide?" Answer: the rate increases because Br<sup>−</sup> acts as a homogeneous catalyst. Write both steps, show they add to the overall reaction, point out Br<sup>−</sup> is regenerated and Br<sub>2</sub> is the intermediate, and say E<sub>a</sub> is lowered while ΔH and the products stay the same.</p></div>
          <div class="note heads-up"><p>The question bank prints the overall reaction as 2H<sub>2</sub>O<sub>2</sub> → H<sub>2</sub>O + O<sub>2</sub>, which is not balanced. The balanced equation has <b>2H<sub>2</sub>O</b>.</p></div>
        ` },
        { title: 'Enzymes: lock and key', html: `
          <p class="lead"><b>Enzymes</b> are protein molecules that act as biological catalysts. Each one speeds up a particular reaction, often by factors of millions, at body temperature and near-neutral pH.</p>
          <h3>Active site and substrate</h3>
          <ul>
            <li>The reacting molecule is the <b>substrate</b>. It binds to a small pocket on the enzyme surface called the <b>active site</b>, held there by hydrogen bonds, ionic attractions and other weak forces.</li>
            <li>Binding forms an <b>enzyme–substrate complex</b> (ES). The reaction happens inside it and the products leave, freeing the enzyme for the next substrate.</li>
          </ul>
          <div class="eq">E + S ⇌ ES → E + P</div>
          <h3>Lock-and-key model</h3>
          <p>In the <b>lock-and-key model</b> (Emil Fischer, 1894), the active site has a rigid shape that fits only one substrate, just as a lock accepts only its own key. A molecule with the wrong shape or the wrong arrangement of charged groups cannot bind, so it is not converted. This explains <b>enzyme specificity</b>: catalase acts on H<sub>2</sub>O<sub>2</sub>, not on other molecules in the cell.</p>
          <h3>How enzymes lower E<sub>a</sub></h3>
          <ol>
            <li><b>Correct orientation.</b> The active site holds the substrate (or two substrates side by side) in exactly the right position, so the orientation factor that wastes most collisions in solution is removed.</li>
            <li><b>Bond strain.</b> Binding pulls on the bonds that have to break, weakening them and bringing the substrate closer to the transition state.</li>
            <li><b>Stabilising the transition state.</b> Groups in the active site attract the transition state more strongly than the substrate, so the top of the barrier is pulled down.</li>
            <li><b>Ready-placed acid and base groups.</b> Side chains donate or accept H<sup>+</sup> at the right moment, giving a new, lower-energy mechanism.</li>
          </ol>
          <div class="note example"><p><b>Catalase</b> (in liver and most cells) breaks down 2H<sub>2</sub>O<sub>2</sub> → 2H<sub>2</sub>O + O<sub>2</sub> far faster than Br<sup>−</sup> or any metal catalyst, removing peroxide before it can cause oxidative damage.</p></div>
          <h3>Limits of the lock-and-key model</h3>
          <ul>
            <li>It treats the enzyme as <b>rigid</b>, but real enzymes are flexible proteins that change shape when the substrate binds.</li>
            <li>It cannot explain why some enzymes accept a <b>group of related substrates</b> (broad specificity).</li>
            <li>A perfect fit to the substrate would hold it in a deep energy well and would not lower E<sub>a</sub>; the enzyme must fit the <b>transition state</b> best, which the model does not say.</li>
            <li>It cannot explain regulation, where a molecule binding elsewhere on the enzyme changes the active site.</li>
          </ul>
          <p>These gaps led to the <b>induced-fit model</b> (Koshland, 1958): the active site is flexible and <b>moulds itself around the substrate</b> as it binds, like a glove on a hand, which also strains the substrate toward the transition state.</p>
          <div class="note why"><p><b>Link to kinetics.</b> Because each enzyme has a fixed number of active sites, the rate rises with substrate concentration at first and then <b>levels off</b> once every active site is occupied (saturation). High temperature or extreme pH changes the enzyme's shape (denaturation), the key no longer fits, and the rate collapses.</p></div>
        ` },
        { title: 'Pros & cons', html: `
          <p class="lead">Each type of catalysis wins on something and pays for it somewhere else. Choose by asking: does the catalyst need to be separated, how hot does the process run, and how selective must it be.</p>
          <table class="tbl">
            <thead><tr><th>Type</th><th>Advantages</th><th>Disadvantages</th></tr></thead>
            <tbody>
              <tr><td><b>Homogeneous</b> (same phase; acid in ester hydrolysis, Br<sup>−</sup> with H<sub>2</sub>O<sub>2</sub>)</td><td>Every catalyst molecule is in contact with the reactants, so activity is high; works under mild conditions; often very selective; the mechanism is easy to study and tune</td><td>Hard and costly to separate from the products, so catalyst is lost or contaminates the product; acids and bases corrode equipment; many dissolved catalysts break down at high temperature</td></tr>
              <tr><td><b>Heterogeneous</b> (solid catalyst; Fe in the Haber process, V<sub>2</sub>O<sub>5</sub> or Pt in the Contact process)</td><td>Easy to separate, since gases or liquids just flow past the solid; reusable for long periods; stands high temperature and pressure; suits continuous large-scale plants</td><td>Only surface atoms work, so activity per gram is lower and the catalyst is made porous or finely divided; surface is easily <b>poisoned</b> (sulphur on Fe, arsenic on Pt); needs high temperature; usually less selective; sintering slowly destroys the surface</td></tr>
              <tr><td><b>Enzyme</b> (protein; catalase with H<sub>2</sub>O<sub>2</sub>)</td><td>Extremely fast; highly specific, so almost no by-products; works at body temperature, normal pressure and near-neutral pH, saving energy; biodegradable</td><td>Denatured by heat (above about 40–60 °C) or the wrong pH; blocked by inhibitors; costly to isolate and purify; each enzyme works on only one substrate or a narrow group</td></tr>
            </tbody>
          </table>
          <div class="note exam"><p>"As a chemistry teacher, explain the types of catalysts, their pros and cons, with an example of each" (question bank). For each type write: definition (phase relation), one example with its equation (N<sub>2</sub>O with Cl or ester hydrolysis; Haber or Contact; catalase), how it lowers E<sub>a</sub>, then two advantages and two disadvantages from this table.</p></div>
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
        { front: 'Four sectors of the economy using catalysis?', back: 'Petroleum and energy, chemicals and polymers, food, pollution control.' },
        { front: 'How does Br<sup>−</sup> catalyse H<sub>2</sub>O<sub>2</sub> decomposition?', back: '2Br<sup>−</sup> + H<sub>2</sub>O<sub>2</sub> + 2H<sup>+</sup> → Br<sub>2</sub> + 2H<sub>2</sub>O, then Br<sub>2</sub> + H<sub>2</sub>O<sub>2</sub> → 2Br<sup>−</sup> + 2H<sup>+</sup> + O<sub>2</sub>: <b>Br<sup>−</sup> regenerated</b>, Br<sub>2</sub> the intermediate.' },
        { front: 'Lock-and-key model?', back: 'The <b>rigid active site</b> fits only one substrate, like a key in its lock: explains <b>specificity</b>.' },
        { front: 'Main limit of lock-and-key, and its replacement?', back: 'Enzymes are flexible, not rigid: the <b>induced-fit model</b> has the active site mould around the substrate.' }
      ],
      oneLiners: [
        'A catalyst lowers Ea through an alternative mechanism; it is not consumed.',
        'Catalysts speed up both forward and reverse reactions and leave the equilibrium position unchanged.',
        'Homogeneous: same phase (Cl for N2O, acid for ester hydrolysis). Heterogeneous: Fe in Haber, V2O5 in Contact.',
        'Enzyme example: catalase breaks H2O2 into H2O and O2.',
        'Catalysis contributes more than 30–40% of global GDP.',
        'NaBr speeds up H2O2 decomposition: Br⁻ → Br2 → Br⁻, catalyst regenerated, Br2 intermediate.',
        'Enzymes lower Ea by orienting the substrate, straining bonds and stabilising the transition state.',
        'Homogeneous: active but hard to separate. Heterogeneous: easy to separate, poisoned easily. Enzyme: fast and specific, denatured by heat or pH.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm1-kinetics-numericals',
      title: "Numericals on chemical kinetics",
      short: "Kinetics numericals",
      blurb: 'Worked problems from the numericals sheets, question banks and CAT/FAT papers: half-life and k, percent completion, amount or pressure remaining, Arrhenius activation energy, temperature for a given half-life, and order from rate data.',
      source: 'Kinetics numericals sheets, Module 1 question banks, CAT-1 and FAT papers',
      tabs: [
        { title: 'Rate constant & half-life', html: `
          <p class="lead">Almost every kinetics numerical in this course is <b>first order</b>. Two equations do all the work, and the only trap is keeping the time units consistent: k in s<sup>−1</sup> gives t in s, k in min<sup>−1</sup> gives t in min.</p>
          <div class="eq" data-label="Integrated first-order law (log10 form)">k = <span class="frac"><span>2.303</span><span>t</span></span> log <span class="frac"><span>[A]<sub>0</sub></span><span>[A]<sub>t</sub></span></span></div>
          <div class="eq" data-label="Half-life (put [A]t = [A]0/2, 2.303 log 2 = 0.693)">t<sub>1/2</sub> = <span class="frac"><span>0.693</span><span>k</span></span></div>
          <div class="worked"><div class="given"><p>The half-life of a first-order reaction is <b>10 min</b> at a certain temperature. Find k.</p></div>
          <div class="solve"><p>Convert to seconds: t<sub>1/2</sub> = 10 × 60 = 600 s.</p><div class="eq">k = 0.693 / t<sub>1/2</sub> = 0.693 / 600 s</div></div>
          <div class="result">k = <b>1.155 × 10<sup>−3</sup> s<sup>−1</sup></b> (sheet: 0.00115 s<sup>−1</sup>), or 0.0693 min<sup>−1</sup></div></div>
          <div class="worked"><div class="given"><p>The half-life of an <b>ester hydrolysis</b> is 30 min at a certain temperature. Find k. (CAT-1)</p></div>
          <div class="solve"><p>Ester hydrolysis in water is pseudo-first order, so the first-order formula applies.</p><div class="eq">k = 0.693 / 30 min = 0.0231 min<sup>−1</sup></div><div class="eq">k = 0.693 / 1800 s</div></div>
          <div class="result">k = <b>0.0231 min<sup>−1</sup> = 3.85 × 10<sup>−4</sup> s<sup>−1</sup></b></div></div>
          <div class="worked"><div class="given"><p>The rate constant of a first-order reaction is <b>k = 2.31 × 10<sup>−5</sup> s<sup>−1</sup></b>. Find the half-life. (question bank)</p></div>
          <div class="solve"><div class="eq">t<sub>1/2</sub> = 0.693 / (2.31 × 10<sup>−5</sup> s<sup>−1</sup>)</div></div>
          <div class="result">t<sub>1/2</sub> = <b>3.00 × 10<sup>4</sup> s</b> = 500 min ≈ 8.33 h</div></div>
          <div class="worked"><div class="given"><p>A first-order reaction has <b>k = 4.5 × 10<sup>−3</sup> s<sup>−1</sup></b>. Find the half-life.</p></div>
          <div class="solve"><div class="eq">t<sub>1/2</sub> = 0.693 / (4.5 × 10<sup>−3</sup> s<sup>−1</sup>)</div></div>
          <div class="result">t<sub>1/2</sub> = <b>154 s</b> ≈ 2.57 min</div></div>
          <div class="note exam"><p>Kinetics numericals come as the <b>5-mark part (b)</b> of a CAT-1 or FAT question: half-life to k, percent completion, amount left after a time, or E<sub>a</sub> from two rate constants. Marks go to the formula, the substitution with units, and the answer with units. Write "first order, so" before using 0.693/k, convert °C to K for any Arrhenius step, and round to 3 significant figures.</p></div>
        ` },
        { title: 'Percent completion', html: `
          <p class="lead">"x % complete" means x % of A has reacted and <b>(100 − x) % is left</b>. Take [A]<sub>0</sub> = 100 and [A]<sub>t</sub> = 100 − x.</p>
          <div class="eq" data-label="Time for x % completion">t = <span class="frac"><span>2.303</span><span>k</span></span> log <span class="frac"><span>100</span><span>100 − x</span></span></div>
          <div class="eq" data-label="Ratio trick: same reaction, same k">t<sub>2</sub> / t<sub>1</sub> = log[100/(100 − x<sub>2</sub>)] / log[100/(100 − x<sub>1</sub>)]</div>
          <div class="kv">
            <div><span>log 2</span><b>0.3010</b></div>
            <div><span>log (10/3)</span><b>0.5229</b></div>
            <div><span>log 5</span><b>0.6990</b></div>
            <div><span>log 10</span><b>1</b></div>
            <div><span>log 20</span><b>1.3010</b></div>
            <div><span>log 100</span><b>2</b></div>
          </div>
          <div class="worked"><div class="given"><p>A first-order reaction is <b>70 % complete in 12 h</b>. How long for 90 %? (CAT-1)</p></div>
          <div class="solve"><div class="eq">k = (2.303/12) log(100/30) = 0.1919 × 0.5229 = 0.100 h<sup>−1</sup></div><div class="eq">t<sub>90</sub> = (2.303/k) log(100/10) = 12 × (1 / 0.5229)</div></div>
          <div class="result">t<sub>90</sub> ≈ <b>22.9 h</b></div></div>
          <div class="worked"><div class="given"><p>A first-order reaction takes <b>9 h for 80 % completion</b>. Find the time for 95 %. (question bank)</p></div>
          <div class="solve"><div class="eq">k = (2.303/9) log(100/20) = 0.2559 × 0.6990 = 0.1789 h<sup>−1</sup></div><div class="eq">t<sub>95</sub> = (2.303/0.1789) log(100/5) = 12.87 × 1.3010</div></div>
          <div class="result">t<sub>95</sub> ≈ <b>16.75 h</b></div></div>
          <div class="worked"><div class="given"><p>A first-order reaction is <b>50 % complete in 7 h</b>. Find the time for 80 %.</p></div>
          <div class="solve"><p>50 % complete is one half-life, so t<sub>1/2</sub> = 7 h.</p><div class="eq">k = 0.693/7 = 0.0990 h<sup>−1</sup></div><div class="eq">t<sub>80</sub> = (2.303/0.0990) log 5 = 23.26 × 0.6990</div></div>
          <div class="result">t<sub>80</sub> ≈ <b>16.3 h</b></div></div>
          <div class="worked"><div class="given"><p>The half-life of a first-order reaction is <b>15 min</b>. Find k and the time to complete 80 %. (CAT-1)</p></div>
          <div class="solve"><div class="eq">k = 0.693/15 = 0.0462 min<sup>−1</sup></div><div class="eq">t<sub>80</sub> = (2.303/0.0462) log(100/20) = 49.85 × 0.6990</div></div>
          <div class="result">k = <b>0.0462 min<sup>−1</sup></b> (7.70 × 10<sup>−4</sup> s<sup>−1</sup>), t<sub>80</sub> ≈ <b>34.8 min</b></div></div>
          <div class="worked"><div class="given"><p>SO<sub>2</sub>Cl<sub>2</sub> → SO<sub>2</sub> + Cl<sub>2</sub> is first order with t<sub>1/2</sub> = <b>8 min</b>. How long until [SO<sub>2</sub>Cl<sub>2</sub>] falls to <b>1 %</b> of its initial value? (FAT)</p></div>
          <div class="solve"><div class="eq">k = 0.693/8 = 0.0866 min<sup>−1</sup></div><div class="eq">t = (2.303/0.0866) log(100/1) = 26.59 × 2</div></div>
          <div class="result">t ≈ <b>53.2 min</b></div></div>
          <div class="note why"><p>Quick check in half-lives: 75 % complete = 2 half-lives, 90 % ≈ 3.32 half-lives, 99 % ≈ 6.64 half-lives. For SO<sub>2</sub>Cl<sub>2</sub>, 6.64 × 8 min = 53.2 min, which matches.</p></div>
        ` },
        { title: 'Amount remaining', html: `
          <p class="lead">Mass, moles, concentration or the <b>partial pressure</b> of a gas can all stand in for [A], because a first-order law uses only the ratio [A]<sub>0</sub>/[A]<sub>t</sub>. For a gas at fixed T and V, p = (n/V)RT, so pressure is proportional to concentration.</p>
          <div class="eq" data-label="Find k from amounts">k = (2.303/t) log([A]<sub>0</sub>/[A]<sub>t</sub>)</div>
          <div class="eq" data-label="Find the amount left">ln[A]<sub>t</sub> = ln[A]<sub>0</sub> − kt</div>
          <div class="worked"><div class="given"><p>3.0 g of A decomposes (first order); after <b>36 min</b>, 0.375 g is left. Find the half-life. (numericals sheet)</p></div>
          <div class="solve"><div class="eq">k = (2.303/36) log(3.0/0.375) = 0.06397 × log 8 = 0.06397 × 0.9031 = 0.0578 min<sup>−1</sup></div><div class="eq">t<sub>1/2</sub> = 0.693/0.0578</div></div>
          <div class="result">t<sub>1/2</sub> = <b>12 min</b></div></div>
          <p>Check: 3.0 → 1.5 → 0.75 → 0.375 g is three halvings in 36 min, so one half-life is 12 min.</p>
          <div class="worked"><div class="given"><p>NH<sub>4</sub>NO<sub>3</sub> decomposes by first-order kinetics. <b>5.0 g</b> heated at 80 °C for <b>15 min</b> leaves 0.5 g. Find k and t<sub>1/2</sub>. (CAT-1)</p></div>
          <div class="solve"><div class="eq">k = (2.303/15) log(5.0/0.5) = 0.1535 × 1</div><div class="eq">k = 0.1535 min<sup>−1</sup> = 0.1535/60 = 2.56 × 10<sup>−3</sup> s<sup>−1</sup></div><div class="eq">t<sub>1/2</sub> = 0.693/0.1535</div></div>
          <div class="result">k = <b>0.1535 min<sup>−1</sup></b>, t<sub>1/2</sub> ≈ <b>4.51 min ≈ 271 s</b> (answer key: 4.52 min)</div></div>
          <div class="worked"><div class="given"><p>(CH<sub>3</sub>)<sub>2</sub>O → CH<sub>4</sub> + H<sub>2</sub> + CO at 640 °C is first order with <b>k = 4.6 × 10<sup>−4</sup> s<sup>−1</sup></b>. The initial pressure is <b>220 torr</b>. Find the pressure after 1000 s. (question bank)</p></div>
          <div class="solve"><div class="eq">ln p<sub>t</sub> = ln 220 − (4.6 × 10<sup>−4</sup>)(1000) = 5.394 − 0.460 = 4.934</div><div class="eq">p<sub>t</sub> = e<sup>4.934</sup></div></div>
          <div class="result">p<sub>t</sub> ≈ <b>139 torr</b></div></div>
          <p>The sheet's version (510 °C, k = 6.8 × 10<sup>−4</sup> s<sup>−1</sup>, 135 torr, 1420 s) works the same way: ln p = 4.905 − 0.966 = 3.940, so p ≈ <b>51.4 torr</b>.</p>
          <div class="worked"><div class="given"><p>In a first-order reaction [A] falls from <b>0.4 to 0.1 mol L<sup>−1</sup> in 60 min</b>. Find k and t<sub>1/2</sub>.</p></div>
          <div class="solve"><div class="eq">k = (2.303/60) log(0.4/0.1) = 0.03838 × 0.6021 = 0.0231 min<sup>−1</sup></div><div class="eq">t<sub>1/2</sub> = 0.693/0.0231</div></div>
          <div class="result">k = <b>0.0231 min<sup>−1</sup></b>, t<sub>1/2</sub> = <b>30 min</b> (0.4 → 0.2 → 0.1 is two half-lives)</div></div>
          <div class="worked"><div class="given"><p>A first-order reaction has <b>k = 3.2 × 10<sup>−5</sup> s<sup>−1</sup></b> at 70 °C. What percentage of the reactant remains after <b>1.5 h</b>?</p></div>
          <div class="solve"><p>t = 1.5 × 3600 = 5400 s.</p><div class="eq">log([A]<sub>0</sub>/[A]<sub>t</sub>) = kt/2.303 = (3.2 × 10<sup>−5</sup> × 5400)/2.303 = 0.1728/2.303 = 0.0750</div><div class="eq">[A]<sub>0</sub>/[A]<sub>t</sub> = 10<sup>0.0750</sup> = 1.189, so [A]<sub>t</sub>/[A]<sub>0</sub> = 0.841</div></div>
          <div class="result"><b>84.1 %</b> remains (15.9 % has reacted)</div></div>
        ` },
        { title: 'Arrhenius: two temperatures', html: `
          <p class="lead">When k is known at two temperatures, subtract the two Arrhenius equations; A cancels and E<sub>a</sub> is the only unknown.</p>
          <div class="eq" data-label="Two-point Arrhenius equation">log <span class="frac"><span>k<sub>2</sub></span><span>k<sub>1</sub></span></span> = <span class="frac"><span>E<sub>a</sub></span><span>2.303 R</span></span> × <span class="frac"><span>T<sub>2</sub> − T<sub>1</sub></span><span>T<sub>1</sub> T<sub>2</sub></span></span></div>
          <p>With R = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>, <b>2.303R = 19.15</b> J mol<sup>−1</sup> K<sup>−1</sup>. T must be in kelvin; k<sub>1</sub> and k<sub>2</sub> only need the same units.</p>
          <div class="worked"><div class="given"><p>k<sub>1</sub> = <b>1.2 × 10<sup>−3</sup></b> at 300 K and k<sub>2</sub> = <b>9.6 × 10<sup>−3</sup></b> at 350 K. Find E<sub>a</sub>. (question bank)</p></div>
          <div class="solve"><div class="eq">k<sub>2</sub>/k<sub>1</sub> = 8, log 8 = 0.9031</div><div class="eq">(T<sub>2</sub> − T<sub>1</sub>)/(T<sub>1</sub>T<sub>2</sub>) = 50/(300 × 350) = 4.762 × 10<sup>−4</sup> K<sup>−1</sup></div><div class="eq">E<sub>a</sub> = 2.303 × 8.314 × 0.9031 / (4.762 × 10<sup>−4</sup>)</div></div>
          <div class="result">E<sub>a</sub> ≈ <b>3.63 × 10<sup>4</sup> J mol<sup>−1</sup> = 36.3 kJ mol<sup>−1</sup></b></div></div>
          <div class="worked"><div class="given"><p>For the same reaction, how much faster is it after a <b>10 °C rise</b>, from 300 K to 310 K?</p></div>
          <div class="solve"><div class="eq">log(k<sub>310</sub>/k<sub>300</sub>) = (36 313/19.15) × 10/(300 × 310) = 1896.5 × 1.075 × 10<sup>−4</sup> = 0.204</div><div class="eq">k<sub>310</sub>/k<sub>300</sub> = 10<sup>0.204</sup></div></div>
          <div class="result">The rate rises about <b>1.6 times</b> (60 %)</div></div>
          <p>The "doubles every 10 °C" rule fits reactions with E<sub>a</sub> near 50 kJ mol<sup>−1</sup>. A smaller E<sub>a</sub> gives a smaller rise, a larger E<sub>a</sub> a bigger one.</p>
          <div class="worked"><div class="given"><p>k = 0.0020 s<sup>−1</sup> at 500 K and 0.070 s<sup>−1</sup> at 700 K. Find E<sub>a</sub>. (numericals sheet)</p></div>
          <div class="solve"><div class="eq">log(0.070/0.0020) = log 35 = 1.544</div><div class="eq">(700 − 500)/(500 × 700) = 5.714 × 10<sup>−4</sup> K<sup>−1</sup></div><div class="eq">E<sub>a</sub> = 19.15 × 1.544 / (5.714 × 10<sup>−4</sup>)</div></div>
          <div class="result">E<sub>a</sub> ≈ <b>51.7 kJ mol<sup>−1</sup></b></div></div>
          <div class="worked"><div class="given"><p>k = 9.51 × 10<sup>−9</sup> L mol<sup>−1</sup> s<sup>−1</sup> at 500 K and 1.10 × 10<sup>−5</sup> L mol<sup>−1</sup> s<sup>−1</sup> at 600 K. Find E<sub>a</sub>. (kinetics sheet)</p></div>
          <div class="solve"><div class="eq">log(1.10 × 10<sup>−5</sup> / 9.51 × 10<sup>−9</sup>) = log 1157 = 3.063</div><div class="eq">(600 − 500)/(500 × 600) = 3.333 × 10<sup>−4</sup> K<sup>−1</sup></div><div class="eq">E<sub>a</sub> = 19.15 × 3.063 / (3.333 × 10<sup>−4</sup>)</div></div>
          <div class="result">E<sub>a</sub> ≈ <b>176 kJ mol<sup>−1</sup></b></div></div>
          <div class="worked"><div class="given"><p>An enzyme reduces both the frequency factor A and the activation energy E<sub>a</sub> to <b>one-tenth</b>. Find the ratio of rate constants at 298 K and say which factor matters more. (kinetics sheet, assignment)</p></div>
          <div class="solve"><div class="eq">k<sub>cat</sub>/k = (A/10)/A × e<sup>(E<sub>a</sub> − E<sub>a</sub>/10)/RT</sup> = 0.1 × e<sup>0.9E<sub>a</sub>/RT</sup></div><p>The sheet gives no E<sub>a</sub>, so take a typical E<sub>a</sub> = 50 kJ mol<sup>−1</sup>: 0.9 × 50 000/(8.314 × 298) = 18.16, and e<sup>18.16</sup> = 7.7 × 10<sup>7</sup>.</p></div>
          <div class="result">k<sub>cat</sub>/k ≈ <b>7.7 × 10<sup>6</sup></b>: the rate goes up millions of times, so <b>E<sub>a</sub> has far the greater influence</b></div></div>
          <p>Cutting A to one-tenth only divides k by 10, because A sits outside the exponential. Cutting E<sub>a</sub> changes the exponent, and the gain beats the loss for any E<sub>a</sub> above about 6.3 kJ mol<sup>−1</sup> (where 0.9E<sub>a</sub>/RT = ln 10), which covers every real reaction.</p>
        ` },
        { title: 'Arrhenius plots & temperature', html: `
          <p class="lead">With k at several temperatures, plot <b>ln k against 1/T</b>. The slope is −E<sub>a</sub>/R and the intercept is ln A. To find the temperature for a given half-life, turn t<sub>1/2</sub> into k and solve the Arrhenius equation for T.</p>
          <div class="worked"><div class="given"><p>Second-order decomposition of acetaldehyde, 700–1000 K. The ln k against 1/T plot (1/T in units of 10<sup>−3</sup> K<sup>−1</sup>) has <b>slope −22.7</b> and <b>intercept 27.7</b>. Find E<sub>a</sub> and A. (kinetics sheet)</p></div>
          <div class="solve"><p>Because 1/T was plotted in 10<sup>−3</sup> K<sup>−1</sup>, the true slope is −22.7 × 10<sup>3</sup> K.</p><div class="eq">E<sub>a</sub> = −slope × R = 22.7 × 10<sup>3</sup> K × 8.3145 J K<sup>−1</sup> mol<sup>−1</sup></div><div class="eq">A = e<sup>27.7</sup> dm<sup>3</sup> mol<sup>−1</sup> s<sup>−1</sup></div></div>
          <div class="result">E<sub>a</sub> ≈ <b>189 kJ mol<sup>−1</sup></b>, A ≈ <b>1.1 × 10<sup>12</sup> dm<sup>3</sup> mol<sup>−1</sup> s<sup>−1</sup></b> (same units as a second-order k)</div></div>
          <div class="worked"><div class="given"><p>Find E<sub>a</sub> from this data (kinetics sheet, 4 marks):</p>
          <table class="tbl">
            <thead><tr><th>T (K)</th><th>k (s<sup>−1</sup>)</th><th>10<sup>3</sup>/T (K<sup>−1</sup>)</th><th>ln k</th></tr></thead>
            <tbody>
              <tr><td>375</td><td>1.68 × 10<sup>−5</sup></td><td>2.667</td><td>−10.99</td></tr>
              <tr><td>400</td><td>3.5 × 10<sup>−5</sup></td><td>2.500</td><td>−10.26</td></tr>
              <tr><td>500</td><td>4.2 × 10<sup>−4</sup></td><td>2.000</td><td>−7.78</td></tr>
              <tr><td>600</td><td>2.11 × 10<sup>−3</sup></td><td>1.667</td><td>−6.16</td></tr>
            </tbody>
          </table></div>
          <div class="solve"><p>The last two columns give a straight line. Take the slope from the end points:</p><div class="eq">slope = (−6.16 − (−10.99)) / (1.667 − 2.667) × 10<sup>−3</sup> = 4.83/(−1.000 × 10<sup>−3</sup>) = −4.83 × 10<sup>3</sup> K</div><div class="eq">E<sub>a</sub> = 4.83 × 10<sup>3</sup> × 8.314</div></div>
          <div class="result">E<sub>a</sub> ≈ <b>40 kJ mol<sup>−1</sup></b> (end points 40.2; best-fit line through all four 40.4)</div></div>
          <h3>Temperature at which t<sub>1/2</sub> has a given value</h3>
          <p>For a first-order reaction k = 0.693/t<sub>1/2</sub>. Put this into ln k = ln A − E<sub>a</sub>/RT and solve for T:</p>
          <div class="eq">E<sub>a</sub>/RT = ln A − ln k = ln(A/k) = ln(A t<sub>1/2</sub> / 0.693)</div>
          <div class="eq" data-label="Temperature for a given half-life">T = <span class="frac"><span>E<sub>a</sub></span><span>R ln(A t<sub>1/2</sub> / 0.693)</span></span></div>
          <div class="worked"><div class="given"><p>Find the temperature at which the half-life is <b>2 min</b>, given A = 5000 × 10<sup>10</sup> s<sup>−1</sup> = 5 × 10<sup>13</sup> s<sup>−1</sup> and E<sub>a</sub> = 10<sup>5</sup> J mol<sup>−1</sup>. (question bank)</p></div>
          <div class="solve"><div class="eq">t<sub>1/2</sub> = 120 s, so k = 0.693/120 = 5.775 × 10<sup>−3</sup> s<sup>−1</sup></div><div class="eq">A/k = 5 × 10<sup>13</sup> / 5.775 × 10<sup>−3</sup> = 8.66 × 10<sup>15</sup>, ln(A/k) = 36.70</div><div class="eq">T = 10<sup>5</sup> / (8.314 × 36.70)</div></div>
          <div class="result">T ≈ <b>328 K</b> (about 55 °C)</div></div>
          <div class="note heads-up"><p>The question bank prints the data as "A = 5000 × 10 10 s<sup>−1</sup> and Ea = 105 J mol<sup>−1</sup>": the superscripts were lost. Read literally, E<sub>a</sub> = 105 J mol<sup>−1</sup> gives T ≈ 0.34 K, which is meaningless, so the intended values are A = 5000 × 10<sup>10</sup> s<sup>−1</sup> and E<sub>a</sub> = 10<sup>5</sup> J mol<sup>−1</sup> (100 kJ mol<sup>−1</sup>). If your paper prints different numbers, the method above is unchanged: k from t<sub>1/2</sub>, then T = E<sub>a</sub>/[R ln(A/k)].</p></div>
        ` },
        { title: 'Order from data', html: `
          <p class="lead">Two kinds of data reveal the order: <b>initial rates</b> at different concentrations (compare ratios) and <b>concentration against time</b> for one run (find which plot is straight).</p>
          <div class="eq" data-label="From two rate measurements">rate<sub>2</sub>/rate<sub>1</sub> = ([A]<sub>2</sub>/[A]<sub>1</sub>)<sup>m</sup> ⇒ m = log(rate ratio) / log(concentration ratio)</div>
          <div class="worked"><div class="given"><p>Rate = k[A]<sup>m</sup>. <b>Doubling [A] quadruples the rate.</b> Find m. (question bank)</p></div>
          <div class="solve"><div class="eq">4 = 2<sup>m</sup> ⇒ m = log 4 / log 2 = 2</div></div>
          <div class="result">m = <b>2</b>: second order in A</div></div>
          <p>The same reasoning gives the other cases: doubling [A] leaves the rate unchanged → <b>zero order</b>; doubles it → <b>first order</b>; multiplies it by 8 → third order.</p>
          <div class="worked"><div class="given"><p>NO<sub>2</sub>(g) → NO(g) + ½O<sub>2</sub>(g) at 300 °C. Is it first or second order in NO<sub>2</sub>? (numericals sheet)</p>
          <table class="tbl">
            <thead><tr><th>t (s)</th><th>[NO<sub>2</sub>] (M)</th><th>ln[NO<sub>2</sub>]</th><th>1/[NO<sub>2</sub>] (M<sup>−1</sup>)</th></tr></thead>
            <tbody>
              <tr><td>0</td><td>0.01000</td><td>−4.605</td><td>100</td></tr>
              <tr><td>50</td><td>0.00787</td><td>−4.845</td><td>127</td></tr>
              <tr><td>100</td><td>0.00649</td><td>−5.037</td><td>154</td></tr>
              <tr><td>200</td><td>0.00481</td><td>−5.337</td><td>208</td></tr>
              <tr><td>300</td><td>0.00380</td><td>−5.573</td><td>263</td></tr>
            </tbody>
          </table></div>
          <div class="solve"><p><b>ln plot:</b> the drop per 50 s shrinks (−0.240, then −0.192, then about −0.150 and −0.118), so ln[NO<sub>2</sub>] against t curves: not first order.</p><p><b>1/[NO<sub>2</sub>] plot:</b> it rises by 27 every 50 s and by 54–55 every 100 s, a constant slope, so it is a straight line.</p><div class="eq">k = slope = (263 − 100) M<sup>−1</sup> / 300 s</div></div>
          <div class="result"><b>Second order</b>, rate = k[NO<sub>2</sub>]<sup>2</sup>, k ≈ <b>0.543 M<sup>−1</sup> s<sup>−1</sup></b></div></div>
          <h3>Gas-phase data as pressures</h3>
          <p>For CH<sub>3</sub>N<sub>2</sub>CH<sub>3</sub>(g) → CH<sub>3</sub>CH<sub>3</sub>(g) + N<sub>2</sub>(g) at 600 K (azomethane, kinetics sheet assignment), the partial pressure of azomethane is given against time. Because pressure is proportional to concentration, plot <b>ln(p/p<sub>0</sub>) against t</b>. A straight line confirms first order, and <b>k = −slope</b>. The methyl isonitrile run in the notes (slope −5.1 × 10<sup>−5</sup> s<sup>−1</sup>, so k = 5.1 × 10<sup>−5</sup> s<sup>−1</sup> at 199 °C) is the same method.</p>
          <div class="note trap"><p>A 1/[A] plot rises (slope +k); the [A] and ln[A] plots fall (slope −k). Do not report a negative k from a second-order plot, and do not forget the minus sign when reading k off a first-order plot.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'k for a first-order reaction with t<sub>1/2</sub> = 10 min?', back: '<b>1.155 × 10<sup>−3</sup> s<sup>−1</sup></b> (0.693/600 s).' },
        { front: 'Half-life when k = 2.31 × 10<sup>−5</sup> s<sup>−1</sup>?', back: '<b>3.00 × 10<sup>4</sup> s</b> (500 min, about 8.33 h).' },
        { front: 'Ester hydrolysis has t<sub>1/2</sub> = 30 min. k?', back: '<b>0.0231 min<sup>−1</sup></b> = 3.85 × 10<sup>−4</sup> s<sup>−1</sup>.' },
        { front: 'Time for x % completion, first order?', back: '<b>t = (2.303/k) log[100/(100 − x)]</b>.' },
        { front: '70 % complete in 12 h. Time for 90 %?', back: '<b>≈ 22.9 h</b>: 12 × log 10 / log(10/3).' },
        { front: '80 % complete in 9 h. Time for 95 %?', back: '<b>≈ 16.75 h</b> (k = 0.1789 h<sup>−1</sup>).' },
        { front: 'SO<sub>2</sub>Cl<sub>2</sub>, t<sub>1/2</sub> = 8 min. Time to fall to 1 %?', back: '<b>≈ 53.2 min</b> (about 6.64 half-lives).' },
        { front: 'NH<sub>4</sub>NO<sub>3</sub>: 5.0 g → 0.5 g in 15 min. k and t<sub>1/2</sub>?', back: '<b>k = 0.1535 min<sup>−1</sup></b>, t<sub>1/2</sub> ≈ 4.51 min (≈ 271 s).' },
        { front: 'k<sub>1</sub> = 1.2 × 10<sup>−3</sup> (300 K), k<sub>2</sub> = 9.6 × 10<sup>−3</sup> (350 K). E<sub>a</sub>?', back: '<b>≈ 36.3 kJ mol<sup>−1</sup></b>; a 10 °C rise from 300 K then raises k about 1.6 times.' },
        { front: 'Temperature at which t<sub>1/2</sub> takes a given value?', back: '<b>T = E<sub>a</sub> / [R ln(A t<sub>1/2</sub>/0.693)]</b>; 2 min with A = 5 × 10<sup>13</sup> s<sup>−1</sup>, E<sub>a</sub> = 10<sup>5</sup> J mol<sup>−1</sup> gives ≈ 328 K.' },
        { front: 'Doubling [A] quadruples the rate. Order?', back: '<b>m = 2</b> (2<sup>m</sup> = 4).' },
        { front: 'Which plot made the NO<sub>2</sub> data straight?', back: '<b>1/[NO<sub>2</sub>] against t</b>: second order, k ≈ 0.543 M<sup>−1</sup> s<sup>−1</sup>.' }
      ],
      oneLiners: [
        'First order: k = (2.303/t) log([A]0/[A]t) and t1/2 = 0.693/k; keep time units consistent.',
        'x % complete means (100 − x) % left: t = (2.303/k) log[100/(100 − x)].',
        'Same reaction, same k: t2/t1 = log[100/(100 − x2)] / log[100/(100 − x1)].',
        '75 % complete = 2 half-lives; 90 % ≈ 3.32; 99 % ≈ 6.64.',
        'Mass, moles or partial pressure can replace concentration in a first-order law.',
        'Two-point Arrhenius: log(k2/k1) = [Ea/2.303R](T2 − T1)/(T1T2), with 2.303R = 19.15 J mol⁻¹ K⁻¹.',
        'Arrhenius plot: Ea = −slope × R; A = e^(intercept).',
        'Temperature for a given half-life: T = Ea / [R ln(A t1/2/0.693)].',
        'Order from rates: m = log(rate ratio)/log(concentration ratio).'
      ],
      formulas: [
        { name: 'First-order rate constant', html: `k = (2.303/t) log([A]<sub>0</sub>/[A]<sub>t</sub>)`, note: 'Any amount proportional to [A] works: mass, moles, partial pressure.' },
        { name: 'First-order half-life', html: `t<sub>1/2</sub> = 0.693/k`, note: 'Independent of [A]<sub>0</sub>.' },
        { name: 'Time for x % completion', html: `t = (2.303/k) log[100/(100 − x)]`, note: '' },
        { name: 'Two-point Arrhenius', html: `log(k<sub>2</sub>/k<sub>1</sub>) = [E<sub>a</sub>/(2.303R)] × (T<sub>2</sub> − T<sub>1</sub>)/(T<sub>1</sub>T<sub>2</sub>)`, note: 'T in kelvin; R = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>.' },
        { name: 'Temperature for a given half-life', html: `T = E<sub>a</sub> / [R ln(A t<sub>1/2</sub>/0.693)]`, note: 'First order; from k = 0.693/t<sub>1/2</sub> and ln k = ln A − E<sub>a</sub>/RT.' },
        { name: 'Order from rate ratio', html: `m = log(rate<sub>2</sub>/rate<sub>1</sub>) / log([A]<sub>2</sub>/[A]<sub>1</sub>)`, note: '' }
      ]
    }
  ],
  figures: [
    { id: 'm1-maxwell-boltzmann', src: null, crop: null,
      caption: 'Maxwell–Boltzmann distribution at T₁ and a higher T₂: the peak is lower and shifted right, the total area is the same, and the shaded area beyond Eₐ (molecules that can react) is much larger.',
      alt: 'Two skewed curves of fraction of molecules against kinetic energy; the higher-temperature curve is flatter with its peak further right; a dashed vertical line marks Ea and the tail areas beyond it are shaded, larger for the higher temperature.' },
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
      alt: 'Two energy profiles from the same reactant level to the same lower product level: a high blue peak for the uncatalysed path and a lower green peak for the catalysed path, with arrows marking each activation energy.' },
    { id: 'm1-rate-slope', src: null, crop: null,
      caption: 'The rate at any moment is minus the slope of the reactant concentration curve: steep early on, flatter later as the reactant is used up.',
      alt: 'A falling exponential curve of reactant concentration against time with two tangent lines, a steep one early labelled fast and a shallow one later labelled slower.' },
    { id: 'm1-rate-halflife-conc', src: null, crop: null,
      caption: 'Rate against concentration: flat for zero order, a straight line for first order, a curve for second order. Half-life against starting concentration: rising, constant and falling respectively.',
      alt: 'Two stacked graphs with three lines each for zero, first and second order: rate against concentration and half-life against starting concentration.' }
  ]
});
