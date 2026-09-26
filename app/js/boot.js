/* Collects the content files (they call these globals) before app.js runs. */
window.DATA = { chunks: [], questions: [], summaries: {}, figs: {} };
window.CHUNK = function (d) { window.DATA.chunks.push(d); };
window.QUESTIONS = function (d) {
  (d.questions || []).forEach(function (q) { q.chunk = d.chunk; window.DATA.questions.push(q); });
};
window.SUMMARY = function (d) { window.DATA.summaries[d.module] = d; };
window.FIGDIMS = function (d) { Object.assign(window.DATA.figs, d); };
