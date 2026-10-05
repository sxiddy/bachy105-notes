// Slide 53: band gaps and crystal structures of PV semiconductors. d = direct gap, i = indirect gap.
module.exports = {
  id: 'm2-pv-gap-table',
  valX: 180,
  cols: [{ name: 'Eg (eV)', cls: 'dtb' }, { name: 'Structure', cls: 'dto' }],
  rows: [
    { head: 'c-Si', cells: ['1.12 (i)', 'diamond'] },
    { head: 'GaAs', cells: ['1.424 (d)', 'zinc blende'] },
    { head: 'InP', cells: ['1.35 (d)', 'zinc blende'] },
    { head: 'a-Si', cells: ['~1.8 (d)', 'none (amorphous)'] },
    { head: 'CdTe', cells: ['1.45–1.5 (d)', 'zinc blende'] },
    { head: 'CuInSe₂ (CIS)', cells: ['0.96–1.04 (d)', 'chalcopyrite'] },
    { head: 'AlₓGa₁₋ₓAs, 0 ≤ x ≤ 0.45', cells: ['1.424 + 1.247x (d)', 'zinc blende'] },
    { head: 'AlₓGa₁₋ₓAs, 0.45 < x ≤ 1', cells: ['1.9 + 0.125x + 0.143x² (i)', 'zinc blende'] },
  ],
  foot: ['d = direct gap, i = indirect gap'],
};
