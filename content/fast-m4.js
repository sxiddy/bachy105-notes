FAST({
  module: 'm4',
  minutes: 25,
  hy: ['m4-uv-vis', 'm4-beer-lambert', 'm4-bragg'],
  facts: [
    { t: 'm4-spectroscopy', star: false, html: '<b>Spectroscopy</b> studies how matter interacts with electromagnetic radiation.' },
    { t: 'm4-spectroscopy', star: false, html: 'Light behaves as both a <b>wave</b> and a stream of <b>particles (photons)</b>.' },
    { t: 'm4-emr-regions', star: true, html: 'A molecule absorbs a photon only when <b>hν = ΔE</b>, the gap between two of its energy levels.' },
    { t: 'm4-emr-regions', star: false, html: '<b>UV–visible</b> light excites electrons; <b>infrared</b> excites vibrations; <b>microwaves</b> excite rotations.' },
    { t: 'm4-uv-vis', star: true, html: 'UV–Vis spectroscopy uses the <b>200–700 nm</b> window and is driven by <b>electronic transitions</b>.' },
    { t: 'm4-uv-vis', star: false, html: 'A <b>chromophore</b> is the group that absorbs light; an <b>auxochrome</b> shifts or strengthens that absorption.' },
    { t: 'm4-beer-lambert', star: true, html: '<b>Beer–Lambert law: A = εLC</b>, so absorbance rises in step with concentration.' },
    { t: 'm4-beer-lambert', star: false, html: 'In A = εLC, <b>ε</b> is the molar absorptivity and <b>L</b> the path length of the cell.' },
    { t: 'm4-uv-vis-instrument', star: false, html: 'A <b>double-beam</b> spectrophotometer measures the sample and a reference at the same time.' },
    { t: 'm4-xrays', star: false, html: 'An X-ray spectrum is a smooth hump with sharp <b>Kα</b> and <b>Kβ</b> lines on top.' },
    { t: 'm4-bragg', star: true, html: '<b>Bragg\'s law: nλ = 2d sin θ</b>; the planes of a crystal act as a grating for X-rays.' },
    { t: 'm4-xrd-patterns', star: false, html: 'In an XRD pattern, the <b>peak position</b> identifies the phase and a <b>broader peak</b> means smaller crystallites.' },
    { t: 'm4-scherrer', star: true, html: 'The <b>Scherrer equation</b> turns XRD peak broadening into a <b>crystallite size</b>.' }
  ],
  mcqs: ['m4-q-02', 'm4-q-03', 'm4-q-05', 'm4-q-07', 'm4-q-09']
});
