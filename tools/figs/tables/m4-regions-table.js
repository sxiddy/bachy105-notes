// Slide: radiation type, energy, technique and time scale for each region.
module.exports = {
  id: 'm4-regions-table',
  valX: 170,
  cols: [{ name: 'E (kJ/mol)', cls: 'dtb' }, { name: 'Technique', cls: 'dto' }, { name: 'Time (s)', cls: 'dtg' }],
  rows: [
    { head: 'γ-rays, X-rays', cells: ['10⁵ – 10³', ['X-ray diffraction', '(nuclear transitions)'], '10⁻¹⁸'] },
    { head: 'Ultraviolet-visible', cells: ['10³ – 10¹', ['UV-vis', '(electronic transitions)'], '10⁻¹⁵ – 10⁻¹⁴'] },
    { head: 'Infrared', cells: ['10¹ – 10⁻¹', ['IR', '(vibrational transitions)'], '10⁻¹³'] },
    { head: 'Microwaves', cells: ['10⁻³', ['Electron spin resonance', '(ESR, rotational motion)'], '10⁻⁴ – 10⁻⁸'] },
    { head: 'Radiowaves', cells: ['10⁻⁷', ['NMR', '(nuclear spin transitions)'], '10⁻¹ – 10⁻⁹'] },
  ],
};
