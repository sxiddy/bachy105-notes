// Plot helpers for the Module 1 generators (batch13+): axes, sampled curves, mid-curve direction arrows.
const { T, A, P } = require('./lib');
// axes from the top of the y axis (yt) down to the baseline (yb), then right to x1
const axes = (x0, yt, x1, yb, xl, yl) => P(`M${x0} ${yt}V${yb}H${x1}`, 'ds', 4) + T(x1, yb + 34, xl, { a: 'end', c: 'dt2', b: 1 }) + T(x0 + 12, yt + 8, yl, { c: 'dt2', b: 1 });
// sample f over [a,b] into screen coords via sx, sy
const curve = (f, a, b, sx, sy, n = 60) => { const pts = []; for (let i = 0; i <= n; i++) { const t = a + (b - a) * i / n; pts.push([sx(t), sy(f(t))]); } return pts; };
const path = (pts) => pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join('');
const line = (pts, cls, w = 5) => P(path(pts), cls, w);
// small arrow along pts at fraction t (direction of increasing index)
const mid = (pts, t, c) => { const i = Math.round((pts.length - 1) * t), p = pts[i - 1], q = pts[i + 1]; return A(`M${p[0].toFixed(1)} ${p[1].toFixed(1)}L${q[0].toFixed(1)} ${q[1].toFixed(1)}`, c, 4); };
const dash = (d) => P(d, 'ds2', 2, 'stroke-dasharray="6 6"');
module.exports = { axes, curve, path, line, mid, dash };
