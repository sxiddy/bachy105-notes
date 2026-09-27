/* BACHY105 Notes — app shell. Vanilla JS, no build step. Started by gate.js once the notes are unlocked. */
window.__startApp = function () {
  'use strict';
  const D = window.DATA || { chunks: [], questions: [], summaries: {}, figs: {} };
  const reduced = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  const isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);

  // ================================================================ helpers
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  function h(tag, attrs) {
    const el = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      const v = attrs[k];
      if (v == null || v === false) continue;
      if (k === 'class') el.className = v;
      else if (k === 'html') el.innerHTML = v;
      else if (k === 'text') el.textContent = v;
      else if (k.slice(0, 2) === 'on' && typeof v === 'function') el.addEventListener(k.slice(2), v);
      else if (v === true) el.setAttribute(k, '');
      else el.setAttribute(k, v);
    }
    for (let i = 2; i < arguments.length; i++) {
      const kids = [].concat(arguments[i]);
      for (const c of kids) { if (c == null || c === false) continue; el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); }
    }
    return el;
  }
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const rt = (s) => esc(s).replace(/&lt;(\/?)(sub|sup|em|b)&gt;/g, '<$1$2>');
  const tmpDiv = document.createElement('div');
  function plain(html) { tmpDiv.innerHTML = html || ''; return (tmpDiv.textContent || '').replace(/\s+/g, ' ').trim(); }
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  const typing = (e) => { const t = e.target; return t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable); };

  const P = {
    side: '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M9 4v16"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v10h13V10"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    chev: '<path d="m6 9 6 6 6-6"/>',
    right: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    left: '<path d="M19 12H5"/><path d="m11 6-6 6 6 6"/>',
    timer: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5"/><path d="M9.5 2.5h5"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    tag: '<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.3"/>',
    cards: '<rect x="3" y="7" width="13" height="13" rx="2"/><path d="M7.5 3.5H18a2.5 2.5 0 0 1 2.5 2.5v10.5"/>',
    q: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6"/><path d="M12 17.2v.1"/>',
    quiz: '<path d="M10 6h10M10 12h10M10 18h10"/><path d="m3.5 6 1.5 1.5L7.5 5M3.5 12l1.5 1.5 2.5-2.5M3.5 18l1.5 1.5 2.5-2.5"/>',
    sigma: '<path d="M18 5H6l6 7-6 7h12"/>',
    flask: '<path d="M9 3h6M10 3v6L4.5 18.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-2.5L14 9V3"/><path d="M7.5 15h9"/>',
    pen: '<path d="m4 20 4-1 11-11-3-3L5 16z"/><path d="m14 7 3 3"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    shuffle: '<path d="M3 7h3c4 0 6 10 10 10h5"/><path d="M3 17h3c1.6 0 2.8-1.6 3.9-3.6M13 9.6C14 7.8 15.1 7 16 7h5"/><path d="m18 4 3 3-3 3M18 14l3 3-3 3"/>',
    rotate: '<path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/>',
    keys: '<rect x="2.5" y="6" width="19" height="12" rx="2"/><path d="M6.5 10h.01M10 10h.01M14 10h.01M17.5 10h.01M7.5 14h9"/>',
    db: '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    zoom: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5M11 8v6M8 11h6"/>',
    bulb: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.8V16h5v-.3c0-.7.4-1.4 1-1.8A6 6 0 0 0 12 3z"/>',
    exam: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/>',
    warn: '<path d="M12 4 2.5 20h19z"/><path d="M12 10v4M12 17v.1"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8v.1"/>',
    ex: '<path d="M4 6h16M4 12h10M4 18h7"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/>',
    play: '<path d="M7 5v14l11-7z"/>',
    pause: '<path d="M8 5v14M16 5v14"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
    trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/>',
    share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',
    flag: '<path d="M5 21V4h11l-1.5 4L16 12H5"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  };
  const icon = (n, cls) => `<svg class="i${cls ? ' ' + cls : ''}" viewBox="0 0 24 24" aria-hidden="true">${P[n] || ''}</svg>`;

  // ================================================================ store
  const KEY = 'bachy105-notes:v1';
  function blank() { return { visited: {}, done: {}, tags: {}, notes: {}, hl: {}, q: {}, cards: {}, confusing: {}, last: null, ui: { closed: {}, lastTab: {} } }; }
  function normalize(s) {
    const b = blank();
    if (!s || typeof s !== 'object') return b;
    for (const k in b) if (s[k] && typeof s[k] === typeof b[k]) b[k] = s[k];
    b.ui.closed = b.ui.closed || {}; b.ui.lastTab = b.ui.lastTab || {};
    return b;
  }
  let S = (function () { try { const raw = localStorage.getItem(KEY); if (raw) return normalize(JSON.parse(raw)); } catch (e) { /* storage blocked */ } return blank(); })();
  let saveTimer = 0;
  function save() { clearTimeout(saveTimer); saveTimer = setTimeout(() => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ } }, 120); }

  // ================================================================ model
  // Modules come from content/modules.json (built into js/modules.js). Add a module there, not here.
  const MODULES = (window.MODULES_CONFIG || []).map((m) => Object.assign({}, m));
  const MOD = {};
  MODULES.forEach((m) => { MOD[m.id] = m; m.topics = []; });
  const TOPICS = [], TOPIC = {}, FIGS = {};
  const chunkOrder = {};
  MODULES.forEach((m) => m.chunks.forEach((c, i) => { chunkOrder[c] = { m: m.id, i }; }));
  const chunks = D.chunks.slice().sort((a, b) => {
    const oa = chunkOrder[a.chunk], ob = chunkOrder[b.chunk];
    const ma = MODULES.findIndex((m) => m.id === (oa ? oa.m : a.module)), mb = MODULES.findIndex((m) => m.id === (ob ? ob.m : b.module));
    return ma - mb || (oa ? oa.i : 99) - (ob ? ob.i : 99) || String(a.chunk).localeCompare(String(b.chunk));
  });
  chunks.forEach((ch) => {
    const m = MOD[ch.module];
    if (!m) return;
    (ch.topics || []).forEach((t) => {
      if (TOPIC[t.id]) return;
      t.module = m.id; t.idx = TOPICS.length; t.tabs = t.tabs || [];
      TOPICS.push(t); TOPIC[t.id] = t; m.topics.push(t);
    });
    (ch.figures || []).forEach((f) => { FIGS[f.id] = f; });
  });
  const SUM = D.summaries || {};
  // Modules whose files were not loaded (not paid, or not in a single-module grant) show as locked.
  MODULES.forEach((m) => { m.locked = !!window.APP_LOCKED && !m.free && !m.topics.length; });

  // reading order: m2 topics, m2 summary, m3 topics, ...
  const ORDER = [];
  MODULES.forEach((m) => { m.topics.forEach((t) => ORDER.push({ key: t.id, title: t.title, kind: 'topic' })); if (m.topics.length) ORDER.push({ key: m.id + '-summary', title: `Module ${+m.num} summary`, kind: 'summary' }); });
  const orderIdx = (key) => ORDER.findIndex((o) => o.key === key);

  // questions
  const QS = [], QBY = {};
  const seenQ = new Set();
  function addQ(q) { if (!q || !q.id || seenQ.has(q.id)) return; seenQ.add(q.id); QS.push(q); }
  D.questions.forEach(addQ);
  Object.keys(SUM).forEach((mid) => (SUM[mid].questions || []).forEach((q) => { q.module = q.module || mid; q.topic = 'summary'; addQ(q); }));
  const modIndex = (mid) => { const i = MODULES.findIndex((m) => m.id === mid); return i < 0 ? 9 : i; };
  function qGroupKey(q) { return q.topic === 'mixed' ? 'mixed' : q.module; }
  function qSort(q) {
    if (q.topic === 'mixed') return 90000 + QS.indexOf(q);
    const t = TOPIC[q.topic];
    return modIndex(q.module) * 10000 + (t ? t.idx * 10 : 9000) + 0;
  }
  QS.sort((a, b) => qSort(a) - qSort(b) || String(a.id).localeCompare(String(b.id), undefined, { numeric: true }));
  QS.forEach((q) => { (QBY[q.topic] = QBY[q.topic] || []).push(q); });
  const QID = {}; QS.forEach((q) => { QID[q.id] = q; });

  // flashcards
  const CARDS = [];
  TOPICS.forEach((t) => (t.flashcards || []).forEach((c, i) => CARDS.push({ key: t.id + '#' + i, topic: t.id, module: t.module, front: c.front, back: c.back })));

  // where each interactive diagram lives
  const VIZ_AT = {};
  TOPICS.forEach((t) => t.tabs.forEach((tb, i) => { (tb.html || '').replace(/data-viz="([a-z0-9-]+)"/g, (_, id) => { if (!VIZ_AT[id]) VIZ_AT[id] = { topic: t.id, tab: i }; return _; }); }));
  const vizModule = (id) => (VIZ_AT[id] && TOPIC[VIZ_AT[id].topic] ? TOPIC[VIZ_AT[id].topic].module : null);
  const vizOrder = (id) => (VIZ_AT[id] ? TOPIC[VIZ_AT[id].topic].idx * 100 + VIZ_AT[id].tab : 1e9);
  const hasViz = (id) => !!(window.VIZ && window.VIZ.has(id));
  const allViz = () => (window.VIZ ? window.VIZ.list() : []).filter((id) => vizModule(id)).sort((a, b) => vizOrder(a) - vizOrder(b));

  // progress helpers
  const visited = (id) => S.visited[id] || [];
  const isDone = (id) => !!S.done[id];
  function frac(t) { if (isDone(t.id)) return 1; return t.tabs.length ? clamp(visited(t.id).length / t.tabs.length, 0, 1) : 0; }
  const doneIn = (list) => list.filter((t) => isDone(t.id)).length;
  function markVisited(t, i) {
    const v = S.visited[t.id] || (S.visited[t.id] = []);
    if (!v.includes(i)) v.push(i);
    S.ui.lastTab[t.id] = i;
    let completed = false;
    if (!isDone(t.id) && v.length >= t.tabs.length) { S.done[t.id] = true; completed = true; }
    save();
    return completed;
  }

  // ================================================================ shell
  const app = h('div', { class: 'app' + (S.ui.sbCollapsed ? ' sb-collapsed' : '') });
  const sidebar = h('aside', { class: 'sidebar', 'aria-label': 'Contents' });
  const scrim = h('div', { class: 'scrim', onclick: () => closeDrawer() });
  const main = h('main', { class: 'main', id: 'main' });
  const topbar = h('header', { class: 'topbar' });
  const host = h('div', { class: 'view-host' });
  main.append(topbar, host);
  // owner's announcement (set on /stats.html, delivered with /api/session); each message can be closed once
  const B = window.SITE_BANNER;
  let bannerClosed = ''; try { bannerClosed = localStorage.getItem('bn_banner_x') || ''; } catch (e) { /* ignore */ }
  if (B && B.text && B.id !== bannerClosed) {
    const bar = h('div', { class: 'site-banner', role: 'status' });
    bar.innerHTML = `<span>${esc(B.text)}</span><button class="icon-btn" aria-label="Close announcement">${icon('x')}</button>`;
    bar.querySelector('button').addEventListener('click', () => { bar.remove(); try { localStorage.setItem('bn_banner_x', B.id); } catch (e) { /* ignore */ } });
    main.insertBefore(bar, host);
  }
  const PRICE_RS = window.PRICE_RS || 50;
  app.append(sidebar, scrim, main);
  const toasts = h('div', { class: 'toasts', 'aria-live': 'polite' });
  const mountPoint = document.getElementById('app') || document.body;
  mountPoint.appendChild(app);
  document.body.appendChild(toasts);
  if (S.ui.recall) document.body.classList.add('recall');
  document.documentElement.dataset.mode = S.ui.theme === 'light' ? 'light' : 'dark';

  function toast(msg, ico) {
    const t = h('div', { class: 'toast', html: (ico ? icon(ico) : '') + esc(msg) });
    toasts.appendChild(t);
    setTimeout(() => t.remove(), 2700);
  }

  // ---------------------------------------------------------------- sidebar
  const narrow = () => window.matchMedia('(max-width: 960px)').matches;
  function toggleSidebar(force) {
    if (narrow()) { app.classList.toggle('sb-open', force == null ? !app.classList.contains('sb-open') : force); return; }
    const collapsed = force == null ? !app.classList.contains('sb-collapsed') : !force;
    app.classList.toggle('sb-collapsed', collapsed);
    S.ui.sbCollapsed = collapsed; save();
  }
  function closeDrawer() { app.classList.remove('sb-open'); }

  function buildSidebar() {
    const nQ = QS.length;
    const inner = h('div', { class: 'sb-inner' });
    inner.innerHTML = `
      <div class="sb-head">
        <a class="brand" href="#home"><span class="brand-code">BACHY105</span><span class="brand-title">Applied Chemistry</span></a>
        <button class="icon-btn" data-act="sidebar" title="Collapse sidebar ( [ )" aria-label="Collapse sidebar">${icon('side')}</button>
      </div>
      <button class="sb-search" data-act="search">${icon('search')}<span>Search notes</span><kbd>${isMac ? '⌘' : 'Ctrl'} K</kbd></button>
      <nav class="sb-nav">
        <a class="sb-link" href="#home" data-key="home">${icon('home')}<span>Home</span></a>
        ${MODULES.filter((m) => m.topics.length).map((m) => `
          <div class="sb-group${S.ui.closed[m.id] ? ' closed' : ''}" data-group="${m.id}">
            <button class="sb-group-head" data-act="group" data-g="${m.id}" aria-expanded="${!S.ui.closed[m.id]}">
              <span class="sb-num">${m.num}</span><span class="sb-gtitle">${esc(m.title)}</span>
              <span class="sb-gcount" data-count="${m.id}"></span>${icon('chev', 'sb-chev')}
            </button>
            <div class="sb-items"><div>
              ${m.topics.map((t) => `<a class="sb-topic" href="#${t.id}" data-key="${t.id}"><span class="tick" data-tick="${t.id}"></span><span class="lbl">${rt(t.short || t.title)}</span><button class="tag-dot" data-act="tag" data-t="${t.id}" title="Colour tag" aria-label="Colour tag for ${rt(t.short || t.title)}"></button></a>`).join('')}
              <a class="sb-topic summary" href="#${m.id}-summary" data-key="${m.id}-summary">${icon('book')}<span class="lbl">Module summary</span></a>
            </div></div>
          </div>`).join('')}
        ${MODULES.filter((m) => m.locked).map((m) => `
          <div class="sb-group locked"><a class="sb-group-head" href="#unlock" title="Unlock for ₹${PRICE_RS}">
            <span class="sb-num">${m.num}</span><span class="sb-gtitle">${esc(m.title)}</span><span class="sb-gcount">${icon('lock')}</span>
          </a></div>`).join('')}
        <div class="sb-label">Practice</div>
        <div class="sb-group${S.ui.closed.qbank !== false ? ' closed' : ''}" data-group="qbank">
          <button class="sb-group-head" data-act="group" data-g="qbank" aria-expanded="${S.ui.closed.qbank === false}">
            ${icon('q')}<span class="sb-gtitle">Question bank</span><span class="sb-gcount">${nQ}</span>${icon('chev', 'sb-chev')}
          </button>
          <div class="sb-items"><div>
            <a class="sb-topic" href="#questions" data-key="questions"><span class="lbl">All questions & answers</span><span class="count">${nQ}</span></a>
            ${MODULES.filter((m) => m.topics.length).map((m) => {
              const mq = QS.filter((q) => q.module === m.id && q.topic !== 'mixed');
              return `<a class="sb-topic" href="#questions.${m.id}" data-key="questions.${m.id}"><span class="lbl">Module ${+m.num} · ${esc(m.title)}</span><span class="count">${mq.length}</span></a>` +
                m.topics.map((t) => `<a class="sb-topic sub" href="#questions.${t.id}" data-key="questions.${t.id}"><span class="lbl">${rt(t.short || t.title)}</span><span class="count">${(QBY[t.id] || []).length}</span></a>`).join('') +
                ((QBY.summary || []).some((q) => q.module === m.id) ? `<a class="sb-topic sub" href="#questions.${m.id}-summary" data-key="questions.${m.id}-summary"><span class="lbl">Across the module</span><span class="count">${QS.filter((q) => q.topic === 'summary' && q.module === m.id).length}</span></a>` : '');
            }).join('')}
            ${(QBY.mixed || []).length ? `<a class="sb-topic" href="#questions.mixed" data-key="questions.mixed"><span class="lbl">Mixed: across modules</span><span class="count">${QBY.mixed.length}</span></a>` : ''}
          </div></div>
        </div>
        <a class="sb-link" href="#quiz" data-key="quiz">${icon('quiz')}<span>Quiz</span><span class="count">${QS.filter((q) => q.options).length}</span></a>
        <a class="sb-link" href="#cards" data-key="cards">${icon('cards')}<span>Flashcards</span><span class="count">${CARDS.length}</span></a>
        <a class="sb-link" href="#formulas" data-key="formulas">${icon('sigma')}<span>Formula sheet</span></a>
        <a class="sb-link" href="#lab" data-key="lab">${icon('flask')}<span>Lab bench</span><span class="count" data-labcount></span></a>
        <a class="sb-link" href="#mine" data-key="mine">${icon('pen')}<span>Highlights & notes</span></a>
      </nav>
      <div class="sb-foot">
        <button data-act="keys">${icon('keys')}Shortcuts</button>
        <button data-act="backup">${icon('db')}Backup</button>
        <button data-act="theme" data-label>${themeLabel()}</button>
        ${window.SIGNED_IN_AS ? `<button data-act="signout" title="Signed in as ${esc(window.SIGNED_IN_AS)}">${icon('x')}Sign out</button>` : ''}
      </div>`;
    sidebar.innerHTML = '';
    sidebar.appendChild(inner);
    updateSidebar();
  }
  function updateSidebar() {
    $$('[data-tick]', sidebar).forEach((el) => {
      const t = TOPIC[el.dataset.tick];
      const f = frac(t);
      el.style.setProperty('--p', Math.round(f * 100) + '%');
      el.classList.toggle('done', isDone(t.id));
    });
    MODULES.forEach((m) => { const c = $(`[data-count="${m.id}"]`, sidebar); if (c) c.textContent = `${doneIn(m.topics)}/${m.topics.length}`; });
    $$('.tag-dot', sidebar).forEach((b) => { const v = S.tags[b.dataset.t]; if (v) b.dataset.tag = v; else b.removeAttribute('data-tag'); });
    const lc = $('[data-labcount]', sidebar); if (lc) lc.textContent = allViz().length || '';
  }
  function setActive(key) {
    $$('a', bnav).forEach((a) => a.classList.toggle('on', a.dataset.key === key || (key && a.dataset.key === 'home' && (TOPIC[key] || /summary|^m[0-9]+$/.test(key)))));
    $$('.sb-link, .sb-topic', sidebar).forEach((a) => a.classList.toggle('active', a.dataset.key === key));
    const act = $(`[data-key="${key}"]`, sidebar);
    if (act) {
      const g = act.closest('.sb-group');
      if (g && g.classList.contains('closed')) { g.classList.remove('closed'); S.ui.closed[g.dataset.group] = false; }
      const nav = $('.sb-nav', sidebar);
      const r = act.getBoundingClientRect(), nr = nav.getBoundingClientRect();
      if (r.top < nr.top + 40 || r.bottom > nr.bottom - 40) nav.scrollTo({ top: act.offsetTop - nav.clientHeight / 2, behavior: reduced ? 'auto' : 'smooth' });
    }
  }
  function cycleTag(id) {
    const v = ((S.tags[id] || 0) + 1) % 6;
    if (v) S.tags[id] = v; else delete S.tags[id];
    save(); updateSidebar();
    const b = $('[data-act="tagtopic"]'); if (b) paintTagBtn(b, id);
  }
  function paintTagBtn(b, id) {
    const v = S.tags[id];
    b.innerHTML = `<span class="tag-dot" ${v ? `data-tag="${v}"` : ''} style="${v ? '' : 'box-shadow: inset 0 0 0 1.5px var(--line-2)'}"></span>${v ? 'Tagged' : 'Tag'}`;
  }

  const themeLabel = () => (S.ui.theme === 'light' ? `${icon('moon')}Dark mode` : `${icon('sun')}Light mode`);

  // ---------------------------------------------------------------- top bar
  let timerState = { left: 25 * 60, running: false, iv: 0 };
  function buildTopbar() {
    topbar.innerHTML = `
      <button class="icon-btn" data-act="sidebar" title="Toggle sidebar ( [ )" aria-label="Toggle sidebar">${icon('side')}</button>
      <nav class="crumbs" aria-label="Breadcrumb"></nav>
      <div class="top-progress"><span class="lbl" data-overall></span><div class="bar"><i data-overall-bar></i></div></div>
      <button class="pill" data-act="focus" title="Focus mode (F)">${icon('timer')}<span class="lbl">Focus</span><span class="timer" hidden></span></button>
      <button class="icon-btn" data-act="theme" title="Light / dark mode" aria-label="Toggle light or dark mode">${icon(S.ui.theme === 'light' ? 'moon' : 'sun')}</button>
      <button class="pill${S.ui.recall ? ' on' : ''}" data-act="recall" title="Recall mode (R): blanks every key term">${icon('eye')}<span class="lbl">Recall</span><span class="switch"></span></button>
      <div class="read-bar"></div>`;
    updateOverall();
  }
  function updateOverall() {
    const d = doneIn(TOPICS), n = TOPICS.length;
    const l = $('[data-overall]', topbar); if (l) l.textContent = `${d} of ${n} done`;
    const b = $('[data-overall-bar]', topbar); if (b) b.style.width = (n ? (d / n) * 100 : 0) + '%';
  }
  function setCrumbs(parts) {
    const c = $('.crumbs', topbar);
    c.innerHTML = parts.map((p, i) => {
      const last = i === parts.length - 1;
      const cls = p.hideSm ? ' class="hide-sm"' : '';
      return (i ? `<span class="sep${p.hideSm ? ' hide-sm' : ''}">/</span>` : '') + (last ? `<span class="cur">${esc(p.t)}</span>` : `<a href="${p.href}"${cls}>${esc(p.t)}</a>`);
    }).join('');
  }
  function toggleRecall(force) {
    const on = force == null ? !document.body.classList.contains('recall') : force;
    document.body.classList.toggle('recall', on);
    S.ui.recall = on; save();
    const b = $('[data-act="recall"]', topbar); if (b) b.classList.toggle('on', on);
    $$('.prose b.shown, .recallable b.shown').forEach((x) => x.classList.remove('shown'));
    toast(on ? 'Recall on: tap a blank to reveal it' : 'Recall off', 'eye');
  }
  let focusPrevCollapsed = null;
  function toggleFocus(force) {
    const on = force == null ? !document.body.classList.contains('focus') : force;
    document.body.classList.toggle('focus', on);
    const b = $('[data-act="focus"]', topbar);
    const tEl = $('.timer', b);
    b.classList.toggle('on', on);
    if (on) {
      focusPrevCollapsed = app.classList.contains('sb-collapsed');
      if (!narrow()) app.classList.add('sb-collapsed');
      closeDrawer();
      tEl.hidden = false; timerState.left = 25 * 60; startTimer(true);
      toast('Focus: 25 minutes. Esc to leave', 'timer');
    } else {
      if (!narrow() && focusPrevCollapsed === false) app.classList.remove('sb-collapsed');
      tEl.hidden = true; startTimer(false);
    }
    paintTimer();
  }
  function startTimer(run) {
    clearInterval(timerState.iv); timerState.running = run;
    if (run) timerState.iv = setInterval(() => {
      timerState.left--; paintTimer();
      if (timerState.left <= 0) { startTimer(false); toast('25 minutes done. Take five.', 'timer'); timerState.left = 25 * 60; }
    }, 1000);
  }
  function paintTimer() {
    const tEl = $('.timer', topbar); if (!tEl) return;
    const m = Math.floor(timerState.left / 60), s = timerState.left % 60;
    tEl.textContent = `${m}:${String(s).padStart(2, '0')}`;
  }

  // ================================================================ router
  let current = null;       // {view, ...route, api}
  let vizHandles = [];
  let vizIO = null;
  let pendingFind = null;   // search term to flash after navigation
  let pendingQ = null;      // question id to reveal after navigation

  function parse(hash) {
    const raw = String(hash || '').replace(/^#/, '') || 'home';
    if (raw === 'home') return { view: 'home' };
    if (raw === 'unlock') return { view: 'unlock' };
    if (MOD[raw] && MOD[raw].locked) return { view: 'unlock' };
    if (MOD[raw]) return { view: 'module', mod: raw };
    let m = raw.match(/^(m[0-9]+)-summary$/);
    if (m && MOD[m[1]] && MOD[m[1]].locked) return { view: 'unlock' };
    if (m && MOD[m[1]]) return { view: 'summary', mod: m[1] };
    m = raw.match(/^(questions|cards|quiz|formulas|lab|mine)(?:\.([a-z0-9-]+))?$/);
    if (m) return { view: m[1], arg: m[2] || null };
    m = raw.match(/^([a-z0-9-]+?)(?:\.(\d+))?$/);
    if (m && TOPIC[m[1]]) return { view: 'topic', id: m[1], tab: m[2] != null ? +m[2] : null };
    return { view: 'home' };
  }
  function hashOf(r) {
    switch (r.view) {
      case 'home': return '#home';
      case 'module': return '#' + r.mod;
      case 'summary': return '#' + r.mod + '-summary';
      case 'topic': return '#' + r.id + (r.tab != null ? '.' + r.tab : '');
      default: return '#' + r.view + (r.arg ? '.' + r.arg : '');
    }
  }
  function navigate(hash, opts) {
    opts = opts || {};
    if (hash[0] !== '#') hash = '#' + hash;
    const r = parse(hash);
    if (current && current.view === 'topic' && r.view === 'topic' && r.id === current.id && current.api) {
      if (r.tab != null) current.api.setTab(r.tab, { scroll: true });
      closeDrawer();
      return;
    }
    try { if (opts.replace) history.replaceState(null, '', hash); else if (location.hash !== hash) history.pushState(null, '', hash); } catch (e) { /* sandboxed */ }
    render(r);
  }
  function replaceHash(hash) { try { history.replaceState(null, '', hash); } catch (e) { /* ignore */ } }

  function clearMounted() {
    vizHandles.forEach((hnd) => { try { hnd.destroy(); } catch (e) { /* ignore */ } });
    vizHandles = [];
    if (vizIO) vizIO.disconnect();
    vizIO = null;
    hideSelBar();
  }

  function render(r) {
    if (r.view === 'unlock') {
      if (window.APP_LOCKED && window.__showPaywall) { window.__showPaywall(); return; }
      r = { view: 'home' }; replaceHash('#home');
    }
    const run = () => {
      clearMounted();
      if (current && current.cleanup) try { current.cleanup(); } catch (e) { /* ignore */ }
      closeDrawer();
      let view;
      switch (r.view) {
        case 'module': view = viewModule(r); break;
        case 'summary': view = viewSummary(r); break;
        case 'topic': view = viewTopic(r); break;
        case 'questions': view = viewBank(r); break;
        case 'quiz': view = viewQuiz(r); break;
        case 'cards': view = viewCards(r); break;
        case 'formulas': view = viewFormulas(r); break;
        case 'lab': view = viewLab(r); break;
        case 'mine': view = viewMine(r); break;
        default: view = viewHome(r);
      }
      host.innerHTML = '';
      host.appendChild(view.el);
      current = Object.assign({}, r, { api: view.api, cleanup: view.cleanup });
      main.style.scrollBehavior = 'auto';
      main.scrollTop = 0;
      main.style.scrollBehavior = '';
      if (view.after) view.after();
      stagger(view.el);
      onScroll();
    };
    if (document.startViewTransition && !reduced && current) {
      try { const vt = document.startViewTransition(run); vt.ready.catch(() => {}); vt.finished.catch(() => {}); return; } catch (e) { /* fall through */ } // a quick second click skips the animation; not an error
    }
    run();
  }
  function stagger(root) {
    root.classList.add('enter');
    Array.from(root.children).forEach((c, i) => c.style.setProperty('--i', Math.min(i, 12)));
  }

  // ================================================================ content hydration
  const NOTE_LABEL = { why: ['bulb', 'Why it works'], exam: ['exam', 'Exam angle'], trap: ['warn', 'Common trap'], 'heads-up': ['info', 'Heads-up: slide vs textbook'], example: ['ex', 'Example'] };
  function srcLabel(src) {
    const m = String(src || '').match(/\/(?:slides|images|hi)\/s(\d+)/) || String(src || '').match(/\/(?:pages|images)\/p(\d+)/);
    if (!m) return '';
    return 'BACHY105 course ' + (/\/p\d+/.test(src) || /m4\//.test(src) ? 'notes, VIT · Page ' : 'slides, VIT · Slide ') + parseInt(m[1], 10);
  }
  function hydrate(root) {
    // figures
    $$('figure[data-fig]', root).forEach((fg) => {
      const id = fg.getAttribute('data-fig');
      const f = FIGS[id];
      fg.classList.add('fig');
      if (!f) { fg.classList.add('missing'); fg.innerHTML = `<div class="fig-frame">Diagram unavailable</div>`; return; }
      const dim = D.figs[id] || {};
      const wide = dim.w && dim.h && dim.w / dim.h > 1.7;
      if (wide) fg.classList.add('wide');
      fg.innerHTML = `<div class="fig-frame" tabindex="0" role="button" aria-label="Enlarge diagram"><img src="img/${id}.webp" alt="${esc(f.alt || f.caption || '')}" loading="lazy" decoding="async"${dim.w ? ` width="${dim.w}" height="${dim.h}"` : ''}><span class="fig-zoom">${icon('zoom')}</span></div><figcaption>${f.caption || ''}${srcLabel(f.src) ? `<span class="fig-src">${srcLabel(f.src)}</span>` : ''}</figcaption>`;
    });
    // tables
    $$('table.tbl', root).forEach((t) => { if (!t.parentElement.classList.contains('tbl-wrap')) { const w = h('div', { class: 'tbl-wrap' }); t.parentNode.insertBefore(w, t); w.appendChild(t); } });
    // notes
    $$('.note', root).forEach((n) => {
      if (n.querySelector(':scope > .note-label')) return;
      const type = Object.keys(NOTE_LABEL).find((k) => n.classList.contains(k)) || 'why';
      const [ic, label] = NOTE_LABEL[type];
      n.insertBefore(h('div', { class: 'note-label', 'data-gen': '', html: icon(ic) + esc(label) }), n.firstChild);
    });
    // worked examples
    [['given', 'Given'], ['solve', 'Working'], ['result', 'Answer']].forEach(([cls, lab]) => {
      $$(`.worked > .${cls}`, root).forEach((el) => { if (!el.querySelector(':scope > .w-label')) el.insertBefore(h('span', { class: 'w-label', 'data-gen': '', text: lab }), el.firstChild); });
    });
    $$('.steps', root).forEach((ol) => Array.from(ol.children).forEach((li, i) => li.style.setProperty('--i', i)));
    // interactive diagrams: mount lazily
    const vz = $$('[data-viz]', root);
    if (vz.length) {
      if (!vizIO) vizIO = new IntersectionObserver((ents) => ents.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target; vizIO.unobserve(el);
        if (window.VIZ) vizHandles.push(window.VIZ.mount(el, el.getAttribute('data-viz')));
      }), { root: main, rootMargin: '500px 0px' });
      vz.forEach((el) => { if (hasViz(el.getAttribute('data-viz'))) vizIO.observe(el); else el.remove(); });
    }
  }

  // ================================================================ highlights
  function hlNodes(root) {
    const out = [];
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(n) { const p = n.parentElement; if (!p || p.closest('figure, .viz, [data-gen]')) return NodeFilter.FILTER_REJECT; return NodeFilter.FILTER_ACCEPT; }
    });
    let n; while ((n = w.nextNode())) out.push(n);
    return out;
  }
  function rangeOffsets(root, range) {
    let acc = 0, s = -1, e = -1;
    for (const n of hlNodes(root)) {
      const len = n.nodeValue.length;
      if (range.intersectsNode(n)) {
        const a = n === range.startContainer ? range.startOffset : 0;
        const b = n === range.endContainer ? range.endOffset : len;
        if (b > a) { if (s < 0) s = acc + a; e = acc + b; }
      }
      acc += len;
    }
    return s >= 0 && e > s ? [s, e] : null;
  }
  function wrapRange(root, s, e, make) {
    let acc = 0; const made = [];
    for (const n of hlNodes(root)) {
      const len = n.nodeValue.length, ns = acc, ne = acc + len; acc = ne;
      if (ne <= s || ns >= e) continue;
      const a = Math.max(0, s - ns), b = Math.min(len, e - ns);
      if (b <= a) continue;
      let target = n;
      if (b < len) target.splitText(b);
      if (a > 0) target = target.splitText(a);
      if (!target.nodeValue.trim() && target.parentNode && /^(TR|TBODY|THEAD|TABLE|UL|OL)$/.test(target.parentNode.tagName)) continue;
      const mk = make();
      target.parentNode.insertBefore(mk, target);
      mk.appendChild(target);
      made.push(mk);
    }
    return made;
  }
  function applyHighlights(panel, topicId, tab) {
    (S.hl[topicId] || []).filter((x) => x.tab === tab).forEach((x) => {
      wrapRange(panel, x.s, x.e, () => h('mark', { class: 'hl c' + x.c, 'data-h': x.id }));
    });
  }
  let selBar = null;
  function hideSelBar() { if (selBar) { selBar.remove(); selBar = null; } }
  function showSelBar(rect, buttons) {
    hideSelBar();
    selBar = h('div', { class: 'sel-bar', role: 'toolbar' });
    buttons.forEach((b) => selBar.appendChild(h('button', { type: 'button', html: b.html, title: b.title || '', 'aria-label': b.title || '', onmousedown: (e) => e.preventDefault(), onclick: (e) => { e.stopPropagation(); b.fn(); hideSelBar(); } })));
    document.body.appendChild(selBar);
    const bw = selBar.offsetWidth, bh = selBar.offsetHeight;
    let x = rect.left + rect.width / 2 - bw / 2, y = rect.top - bh - 10;
    if (y < 64) y = rect.bottom + 10;
    x = clamp(x, 8, window.innerWidth - bw - 8);
    selBar.style.left = x + 'px'; selBar.style.top = y + 'px';
  }
  function onSelectionEnd(e) {
    if (e && e.target && e.target.closest && e.target.closest('.sel-bar')) return;
    setTimeout(() => {
      if (!current || current.view !== 'topic') return;
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed || !sel.rangeCount) { if (!(e && e.target && e.target.closest && e.target.closest('mark.hl'))) hideSelBar(); return; }
      const range = sel.getRangeAt(0);
      const panel = $('.panel');
      if (!panel || !panel.contains(range.commonAncestorContainer)) { hideSelBar(); return; }
      const anc = range.commonAncestorContainer.nodeType === 1 ? range.commonAncestorContainer : range.commonAncestorContainer.parentElement;
      if (anc.closest('figure, .viz')) return;
      if (sel.toString().trim().length < 2) return;
      const off = rangeOffsets(panel, range);
      if (!off) return;
      const rect = range.getBoundingClientRect();
      const add = (c) => {
        const t = current.id, tab = current.api.tab();
        const text = sel.toString().replace(/\s+/g, ' ').trim().slice(0, 400);
        (S.hl[t] = S.hl[t] || []).push({ id: Date.now().toString(36), tab, s: off[0], e: off[1], c, text });
        save();
        sel.removeAllRanges();
        current.api.refresh();
        toast('Highlighted', 'pen');
      };
      showSelBar(rect, [
        { html: '<span class="sw c1"></span>', title: 'Highlight white', fn: () => add(1) },
        { html: '<span class="sw c2"></span>', title: 'Highlight amber', fn: () => add(2) },
        { html: '<span class="sw c3"></span>', title: 'Highlight blue', fn: () => add(3) },
      ]);
    }, 10);
  }
  document.addEventListener('mouseup', onSelectionEnd);
  document.addEventListener('touchend', onSelectionEnd);
  document.addEventListener('keyup', (e) => { if (e.shiftKey) onSelectionEnd(e); });

  // ================================================================ views
  function lockedNames() {
    const l = MODULES.filter((m) => m.locked).map((m) => 'Module ' + (+m.num));
    return l.length > 1 ? l.slice(0, -1).join(', ') + ' and ' + l[l.length - 1] : l[0] || 'everything';
  }
  function topicRow(t) {
    const f = frac(t);
    return `<a class="trow" href="#${t.id}">
      <span class="tick${isDone(t.id) ? ' done' : ''}" style="--p:${Math.round(f * 100)}%"></span>
      <div><h3>${rt(t.title)}</h3><p>${rt(t.blurb)}</p></div>
      <span class="meta">${esc(t.source)} · ${t.tabs.length} tabs <span class="arrow">→</span></span>
    </a>`;
  }
  function summaryRow(m) {
    return `<a class="trow summary" href="#${m.id}-summary">
      <span class="tick" style="--p:0%;box-shadow:none;background:none">${icon('book')}</span>
      <div><h3>Module ${+m.num} summary</h3><p>Big ideas, comparison tables, every equation, the numbers to remember and the classic traps, on one page.</p></div>
      <span class="meta">final recap <span class="arrow">→</span></span>
    </a>`;
  }

  // ---------------------------------------------------------------- home
  function viewHome() {
    setCrumbs([{ t: 'Home' }]); setActive('home'); document.title = 'BACHY105 Notes';
    const d = doneIn(TOPICS), n = TOPICS.length;
    const nViz = allViz().length;
    const el = h('div', { class: 'view' });
    const last = S.last && S.last.hash ? S.last : null;
    const words = ['Applied', 'Chemistry,', 'distilled.'];
    el.innerHTML = `
      <section class="hero">
        <div class="eyebrow"><span class="code">BACHY105</span><span>Applied Chemistry</span><span class="dot">·</span><span>Fall semester 2026–27</span></div>
        <h1 class="h-display">${words.map((w, i) => `<span class="w${i === 2 ? ' w-u' : ''}" style="--i:${i}">${w}</span>`).join(' ')}</h1>
        <p class="blurb">Modules 2, 3 and 4, rebuilt as short tabbed notes with every diagram from the slides${nViz ? `, ${nViz} interactive models` : ''} and ${QS.length} questions that make you use what you read. White text is what you must remember. Everything else is there so it makes sense.</p>
        <p class="credit">Based on the BACHY105 Applied Chemistry course material taught at VIT. Slide diagrams are reproduced from the course slides and credited to their authors; the notes, questions and interactive models are written for this site. <a href="privacy.html">Privacy</a></p>
        <div class="stat-line"><span class="stat-big">${d}/${n}</span><span class="muted">topics done</span><div class="bar"><i style="width:${n ? (d / n) * 100 : 0}%"></i></div><button class="btn small" data-act="share">${icon('share')}Share progress</button></div>
        ${last ? `<div class="continue"><a class="btn primary" href="${last.hash}">Continue: ${rt(last.title)} ${icon('right')}</a></div>` : (TOPICS[0] ? `<div class="continue"><a class="btn primary" href="#${TOPICS[0].id}">Start with ${rt(TOPICS[0].title)} ${icon('right')}</a></div>` : '')}
      </section>
      <div class="how">
        <div><h3>Read tab by tab</h3><p>Each topic is split into small tabs. Arrow keys move between them, and a topic ticks itself once every tab has been opened.</p></div>
        <div><h3>Make it yours</h3><p>Select any line to highlight it, colour-tag topics in the sidebar, and keep your own notes at the bottom of each topic.</p></div>
        <div><h3>Test yourself</h3><p>Recall mode (R) blanks every key term until you tap it. The question bank, quiz and flashcards cover every topic.</p></div>
      </div>
      ${MODULES.filter((m) => m.topics.length).map((m) => `
        <section class="mod-sec">
          <div class="mod-head"><span class="mod-num">Module ${m.num}</span><h2 class="h-sec"><a href="#${m.id}" style="text-decoration:none">${esc(m.title)}</a></h2><span class="count">${doneIn(m.topics)}/${m.topics.length} done</span></div>
          <p class="mod-syl">${esc(m.syllabus)}</p>
          <div>${m.topics.map(topicRow).join('')}${summaryRow(m)}</div>
        </section>`).join('')}
      ${MODULES.filter((m) => m.locked).map((m) => `
        <section class="mod-sec">
          <div class="mod-head"><span class="mod-num">Module ${m.num}</span><h2 class="h-sec">${esc(m.title)}</h2><span class="count">${icon('lock')} locked</span></div>
          <p class="mod-syl">${esc(m.syllabus)}</p>
          <a class="lock-card" href="#unlock"><span class="lock-ico">${icon('lock')}</span><div><strong>Unlock ${lockedNames()} for ₹${PRICE_RS}</strong><p>Notes, slide diagrams, interactive models, questions, quiz, flashcards and summary. One-time UPI payment.</p></div><span class="arrow">${icon('right')}</span></a>
        </section>`).join('')}
      <section class="mod-sec">
        <div class="mod-head"><h2 class="h-sec">Practice</h2></div>
        <p class="mod-syl">Once you've read a module, test it. Everything below draws from the same notes.</p>
        <div class="tiles">
          <a class="tile" href="#questions"><span class="tt">${icon('q')}Question bank</span><span class="big">${QS.length}</span><p>Scenario questions with full answers and the points an examiner looks for, sorted by module and topic.</p></a>
          <a class="tile" href="#quiz"><span class="tt">${icon('quiz')}Quiz</span><span class="big">${QS.filter((q) => q.options).length}</span><p>Multiple choice or open, 10 to 30 at a time, weighted toward what you haven't seen or got wrong.</p></a>
          <a class="tile" href="#cards"><span class="tt">${icon('cards')}Flashcards</span><span class="big">${CARDS.length}</span><p>Flip, then sort into "know it" and "still learning". The deck remembers.</p></a>
          <a class="tile" href="#formulas"><span class="tt">${icon('sigma')}Formula sheet</span><p>Every equation, the numbers worth memorising and the classic traps, per module.</p></a>
          <a class="tile" href="#lab"><span class="tt">${icon('flask')}Lab bench</span>${nViz ? `<span class="big">${nViz}</span>` : ''}<p>All the interactive models and calculators in one place: Nernst, Beer–Lambert, Bragg, Scherrer and more.</p></a>
          <a class="tile" href="#mine"><span class="tt">${icon('pen')}Highlights & notes</span><p>Your highlighted lines, personal notes, tagged topics and questions to revisit.</p></a>
        </div>
      </section>
      <section class="data-box">
        <h2 class="h-sub">Your data</h2>
        <p class="muted">Progress, tags, highlights and notes are saved in this browser only. Back them up to move them to another device.</p>
        <div class="btn-row"><button class="btn" data-act="backup">${icon('db')}Back up or restore</button></div>
      </section>`;
    return { el };
  }

  // ---------------------------------------------------------------- module
  function viewModule(r) {
    const m = MOD[r.mod];
    setCrumbs([{ t: 'Home', href: '#home' }, { t: `Module ${+m.num}` }]); setActive(null); document.title = `${m.title} · BACHY105 Notes`;
    const d = doneIn(m.topics), n = m.topics.length;
    const nq = QS.filter((q) => q.module === m.id && q.topic !== 'mixed').length;
    const nc = CARDS.filter((c) => c.module === m.id).length;
    const tabs = m.topics.reduce((a, t) => a + t.tabs.length, 0);
    const next = m.topics.find((t) => !isDone(t.id)) || m.topics[0];
    const el = h('div', { class: 'view' });
    el.innerHTML = `
      <div class="mod-hero"><div class="mod-big">${m.num}</div>
        <div><div class="eyebrow"><span class="code">Module ${m.num}</span><span>${n} topics · ${tabs} tabs</span></div>
        <h1 class="h-display" style="margin-bottom:6px">${esc(m.title)}</h1></div></div>
      <p class="blurb">${esc(m.syllabus)}</p>
      <div class="mod-stats">
        <div class="ring" style="--p:${n ? Math.round((d / n) * 100) : 0}"><span>${n ? Math.round((d / n) * 100) : 0}%</span></div>
        <div class="btn-row">
          ${next ? `<a class="btn primary" href="#${next.id}">${d ? 'Continue' : 'Start reading'} ${icon('right')}</a>` : ''}
          <a class="btn" href="#${m.id}-summary">${icon('book')}Summary</a>
          <a class="btn" href="#questions.${m.id}">${icon('q')}Questions <span class="n">${nq}</span></a>
          <a class="btn" href="#cards.${m.id}">${icon('cards')}Flashcards <span class="n">${nc}</span></a>
          <a class="btn" href="#quiz.${m.id}">${icon('quiz')}Quiz</a>
        </div>
      </div>
      <div>${m.topics.map(topicRow).join('')}${summaryRow(m)}</div>`;
    return { el };
  }

  // ---------------------------------------------------------------- topic
  function viewTopic(r) {
    const t = TOPIC[r.id], m = MOD[t.module];
    const n = t.tabs.length;
    let i = r.tab != null && r.tab < n ? r.tab : (S.ui.lastTab[t.id] != null && S.ui.lastTab[t.id] < n ? S.ui.lastTab[t.id] : 0);
    setActive(t.id);
    trackTopic(t.id);
    document.title = `${plain(t.title)} · BACHY105 Notes`;
    const oi = orderIdx(t.id);
    const nx = ORDER[oi + 1];
    const nq = (QBY[t.id] || []).length, nc = (t.flashcards || []).length;
    const el = h('article', { class: 'view topic' });
    el.innerHTML = `
      <div class="eyebrow"><span class="code">M${+m.num}</span><a href="#${m.id}" style="text-decoration:none">${esc(m.title)}</a><span class="dot">·</span><span>${esc(t.source)}</span></div>
      <h1 class="h-display">${rt(t.title)}</h1>
      <p class="blurb">${rt(t.blurb)}</p>
      <div class="t-actions">
        <button class="btn" data-act="done"></button>
        <button class="btn" data-act="tagtopic" title="Colour-tag this topic"></button>
        ${nq ? `<a class="btn" href="#questions.${t.id}">${icon('q')}Questions <span class="n">${nq}</span></a>` : ''}
        ${nc ? `<a class="btn" href="#cards.${t.id}">${icon('cards')}Flashcards <span class="n">${nc}</span></a>` : ''}
      </div>
      <div class="t-progress"><div class="bar"><i></i></div><span data-tp></span><span class="faint">· ticks itself when every tab is read</span></div>
      <div class="tabs-wrap"><div class="tabs" role="tablist" aria-label="Sections">
        ${t.tabs.map((tb, k) => `<button class="tab" role="tab" data-i="${k}" id="tab-${k}"><span class="seen"></span>${rt(tb.title)}</button>`).join('')}
        <span class="tab-ink"></span></div></div>
      <div class="panel prose" role="tabpanel" aria-live="polite"></div>
      <div class="tab-nav"></div>
      <section class="topic-check" data-check hidden></section>
      ${nx ? `<a class="next-topic" href="#${nx.key}"><div><small>Up next</small><strong>${rt(nx.title)}</strong></div><span class="arrow">${icon('right')}</span></a>` : ''}
      <details class="mynotes"${S.notes[t.id] ? ' open' : ''}><summary>${icon('pen')}My notes on this topic</summary>
        <textarea id="note-${t.id}" placeholder="Write it in your own words. Saved in this browser as you type."></textarea><div class="saved" data-saved></div></details>`;

    const panel = $('.panel', el), tabsEl = $('.tabs', el), ink = $('.tab-ink', el), nav = $('.tab-nav', el);
    const doneBtn = $('[data-act="done"]', el), tagBtn = $('[data-act="tagtopic"]', el);
    const ta = $('textarea', el), saved = $('[data-saved]', el);
    ta.value = S.notes[t.id] || '';
    let noteTimer = 0;
    ta.addEventListener('input', () => {
      clearTimeout(noteTimer);
      noteTimer = setTimeout(() => { const v = ta.value; if (v.trim()) S.notes[t.id] = v; else delete S.notes[t.id]; save(); saved.textContent = 'Saved'; setTimeout(() => { saved.textContent = ''; }, 1400); }, 350);
    });
    paintTagBtn(tagBtn, t.id);
    tagBtn.addEventListener('click', () => cycleTag(t.id));

    function paintDone() {
      const dn = isDone(t.id);
      doneBtn.classList.toggle('is-done', dn);
      doneBtn.innerHTML = `<span class="check-ico">${dn ? icon('check') : ''}</span>${dn ? 'Done' : 'Mark as done'}`;
      const v = visited(t.id).length;
      $('.t-progress .bar > i', el).style.width = (dn ? 100 : (v / n) * 100) + '%';
      $('[data-tp]', el).textContent = `${Math.min(v, n)} of ${n} tabs read`;
      $$('.tab', tabsEl).forEach((b) => b.classList.toggle('visited', visited(t.id).includes(+b.dataset.i)));
    }
    doneBtn.addEventListener('click', () => {
      if (isDone(t.id)) delete S.done[t.id]; else { S.done[t.id] = true; toast('Topic marked as done', 'check'); }
      save(); paintDone(); updateSidebar(); updateOverall();
    });

    function moveInk() {
      const b = $(`.tab[data-i="${i}"]`, tabsEl);
      if (!b) return;
      ink.style.left = b.offsetLeft + 12 + 'px';
      ink.style.width = Math.max(0, b.offsetWidth - 24) + 'px';
      const target = b.offsetLeft - tabsEl.clientWidth / 2 + b.offsetWidth / 2;
      tabsEl.scrollTo({ left: Math.max(0, target), behavior: reduced ? 'auto' : 'smooth' });
    }
    function paintNav() {
      const prev = t.tabs[i - 1], next = t.tabs[i + 1];
      const conf = (S.confusing[t.id] || []).includes(i);
      nav.innerHTML = `
        <div class="tn-row">
          ${prev ? `<button class="btn" data-go="${i - 1}" title="${esc(plain(prev.title))}">${icon('left')}<span class="lbl">${rt(prev.title)}</span></button>` : '<span></span>'}
          <span class="pos">${i + 1} / ${n}</span>
          ${next ? `<button class="btn primary" data-go="${i + 1}" title="Next: ${esc(plain(next.title))}"><span class="lbl">Next: ${rt(next.title)}</span>${icon('right')}</button>`
            : (nx ? `<a class="btn primary" href="#${nx.key}" title="Next: ${esc(plain(nx.title))}"><span class="lbl">Next: ${rt(nx.title)}</span>${icon('right')}</a>` : '<span></span>')}
        </div>
        <div class="tn-tools">
          <button class="btn small ghost conf-btn${conf ? ' on' : ''}" data-act="confusing" data-t="${t.id}" data-i="${i}" title="Add this tab to My weak spots">${icon('flag')}<span class="lbl">${conf ? 'Marked confusing' : 'Confusing?'}</span></button>
          <button class="btn small ghost conf-btn" data-act="report" data-t="${t.id}" data-i="${i}" title="Found a mistake? Tell us">${icon('warn')}<span class="lbl">Report mistake</span></button>
        </div>`;
    }
    const checkEl = $('[data-check]', el);
    const checkQs = (QBY[t.id] || []).filter((q) => q.options).slice(0, 2);
    function paintCheck() {
      const show = i === n - 1 && checkQs.length;
      checkEl.hidden = !show;
      if (!show) { checkEl.innerHTML = ''; return; }
      if (checkEl.childElementCount) return;
      checkEl.appendChild(h('h2', { class: 'h-sub', html: `Check yourself <small class="faint" style="font-family:var(--mono);font-size:12px">${checkQs.length} quick question${checkQs.length > 1 ? 's' : ''}</small>` }));
      checkQs.forEach((q) => checkEl.appendChild(qCard(q)));
      if ((QBY[t.id] || []).length > checkQs.length) checkEl.appendChild(h('a', { class: 'btn small', href: `#questions.${t.id}`, html: `All ${(QBY[t.id] || []).length} questions on this topic ${icon('right')}` }));
    }
    function fill(animate) {
      clearMounted();
      panel.innerHTML = t.tabs[i].html || '';
      hydrate(panel);
      applyHighlights(panel, t.id, i);
      paintCheck();
      if (animate) { panel.classList.remove('enter'); void panel.offsetWidth; stagger(panel); }
      if (pendingFind) { flashFind(panel, pendingFind); pendingFind = null; }
    }
    function setTab(k, opts) {
      opts = opts || {};
      k = clamp(k, 0, n - 1);
      const changed = k !== i;
      i = k;
      $$('.tab', tabsEl).forEach((b) => { const on = +b.dataset.i === i; b.classList.toggle('on', on); b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1; });
      moveInk();
      const completed = markVisited(t, i);
      paintDone(); paintNav(); updateSidebar(); updateOverall();
      if (completed) toast('Topic complete. Every tab read.', 'check');
      replaceHash(`#${t.id}.${i}`);
      S.last = { hash: `#${t.id}.${i}`, title: t.title }; save();
      setCrumbs([{ t: 'Home', href: '#home' }, { t: `Module ${+m.num}`, href: '#' + m.id, hideSm: true }, { t: t.short || t.title, href: `#${t.id}.0`, hideSm: true }, { t: t.tabs[i].title }]);
      if (changed && !reduced && opts.animate !== false) {
        panel.classList.add('leave');
        setTimeout(() => { panel.classList.remove('leave'); fill(true); }, 110);
      } else fill(opts.animate !== false && changed);
      if (opts.scroll) {
        const wrap = $('.tabs-wrap', el);
        const panelTop = main.scrollTop + panel.getBoundingClientRect().top - main.getBoundingClientRect().top;
        const top = Math.max(0, panelTop - topbar.offsetHeight - wrap.offsetHeight - 6);
        if (main.scrollTop > top + 4) main.scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' });
      }
    }
    tabsEl.addEventListener('click', (e) => { const b = e.target.closest('.tab'); if (b) setTab(+b.dataset.i, { scroll: true }); });
    tabsEl.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); e.stopPropagation(); setTab(i + (e.key === 'ArrowRight' ? 1 : -1), { scroll: true }); $(`.tab[data-i="${i}"]`, tabsEl).focus(); }
    });
    nav.addEventListener('click', (e) => { const b = e.target.closest('[data-go]'); if (b) setTab(+b.dataset.go, { scroll: true }); });
    panel.addEventListener('click', (e) => {
      const mk = e.target.closest('mark.hl');
      if (mk && !document.body.classList.contains('recall')) {
        const sel = window.getSelection(); if (sel && !sel.isCollapsed) return;
        const hid = mk.dataset.h;
        showSelBar(mk.getBoundingClientRect(), [{ html: icon('trash') + 'Remove highlight', title: 'Remove highlight', fn: () => { S.hl[t.id] = (S.hl[t.id] || []).filter((x) => x.id !== hid); save(); fill(false); } }]);
      }
    });
    const onResize = () => moveInk();
    window.addEventListener('resize', onResize);
    return {
      el,
      after() { setTab(i, { animate: false }); requestAnimationFrame(moveInk); if (document.fonts && document.fonts.ready) document.fonts.ready.then(moveInk); },
      cleanup() { window.removeEventListener('resize', onResize); },
      api: { setTab, tab: () => i, next: () => setTab(i + 1, { scroll: true }), prev: () => setTab(i - 1, { scroll: true }), refresh: () => fill(false), topic: t },
    };
  }

  function flashFind(root, term) {
    const words = term.toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return;
    const nodes = hlNodes(root);
    let full = '', map = [];
    nodes.forEach((n) => { map.push([full.length, n]); full += n.nodeValue; });
    const idx = full.toLowerCase().indexOf(words[0]);
    if (idx < 0) return;
    const made = wrapRange(root, idx, idx + words[0].length, () => h('mark', { class: 'find' }));
    if (made[0]) setTimeout(() => made[0].scrollIntoView({ block: 'center', behavior: reduced ? 'auto' : 'smooth' }), 250);
  }

  // ---------------------------------------------------------------- summary
  function viewSummary(r) {
    const m = MOD[r.mod], s = SUM[m.id];
    setCrumbs([{ t: 'Home', href: '#home' }, { t: `Module ${+m.num}`, href: '#' + m.id }, { t: 'Summary' }]);
    setActive(m.id + '-summary'); document.title = `Module ${+m.num} summary · BACHY105 Notes`;
    S.last = { hash: `#${m.id}-summary`, title: `Module ${+m.num} summary` }; save();
    const el = h('div', { class: 'view' });
    const mqs = QS.filter((q) => q.module === m.id && q.topic === 'summary');
    const forms = s && s.formulas && s.formulas.length ? s.formulas : [].concat(...m.topics.map((t) => t.formulas || []));
    const nx = ORDER[orderIdx(m.id + '-summary') + 1];
    el.innerHTML = `
      <div class="eyebrow"><span class="code">Module ${m.num}</span><span>${esc(m.title)}</span><span class="dot">·</span><span>Final summary</span></div>
      <h1 class="h-display">${esc(m.title)}, on one page</h1>
      ${s && s.tldr ? `<div class="sum-tldr recallable">${s.tldr}</div>` : `<p class="blurb">${esc(m.syllabus)}</p>`}
      <div class="btn-row" style="margin-top:22px">
        <a class="btn primary" href="#quiz.${m.id}">${icon('quiz')}Quiz this module</a>
        <a class="btn" href="#cards.${m.id}">${icon('cards')}Flashcards</a>
        <a class="btn" href="#questions.${m.id}">${icon('q')}All questions</a>
      </div>
      ${s && s.storyline && s.storyline.length ? `<section class="sum-sec"><h2 class="h-sec">How it fits together</h2><ol class="story prose">${s.storyline.map((x) => `<li><h4>${rt(x.title)}</h4><div>${x.html}</div></li>`).join('')}</ol></section>` : ''}
      <section class="sum-sec"><h2 class="h-sec">Big ideas <small>${m.topics.length} topics</small></h2>
        <div class="ideas">${(s && s.bigIdeas && s.bigIdeas.length ? s.bigIdeas : m.topics.map((t) => ({ title: t.title, topic: t.id, html: `<ul>${(t.oneLiners || []).map((x) => `<li>${x}</li>`).join('')}</ul>` }))).map((b) => `
          <div class="idea"><h3>${rt(b.title)}</h3><div class="prose">${b.html}</div>${b.topic && TOPIC[b.topic] ? `<a href="#${b.topic}">Open the notes ${icon('right')}</a>` : ''}</div>`).join('')}</div></section>
      ${s && s.compare && s.compare.length ? `<section class="sum-sec"><h2 class="h-sec">Side by side</h2>${s.compare.map((c) => `<div class="cmp prose"><h3>${rt(c.title)}</h3>${c.html}</div>`).join('')}</section>` : ''}
      ${forms.length ? `<section class="sum-sec"><h2 class="h-sec">Equations to write from memory <small>${forms.length}</small></h2><div class="forms">${forms.map((f) => `<div class="form"><div class="fname">${rt(f.name)}</div><div class="fbody">${f.html}</div>${f.note ? `<div class="fnote">${f.note}</div>` : ''}</div>`).join('')}</div></section>` : ''}
      ${s && s.numbers && s.numbers.length ? `<section class="sum-sec"><h2 class="h-sec">Numbers to remember <small>${s.numbers.length}</small></h2><div class="nums">${s.numbers.map((x) => `<div><div class="nv">${x.value}</div><div class="nw">${x.what}</div></div>`).join('')}</div></section>` : ''}
      ${s && s.traps && s.traps.length ? `<section class="sum-sec"><h2 class="h-sec">Traps <small>${s.traps.length}</small></h2><ul class="traps prose">${s.traps.map((x) => `<li>${x}</li>`).join('')}</ul></section>` : ''}
      ${mqs.length ? `<section class="sum-sec"><h2 class="h-sec">Put it together <small>${mqs.length} questions</small></h2><div data-qs></div></section>` : ''}
      ${nx ? `<a class="next-topic" style="margin-top:56px" href="#${nx.key}"><div><small>Up next</small><strong>${rt(nx.title)}</strong></div><span class="arrow">${icon('right')}</span></a>` : ''}`;
    $$('.tbl', el).forEach((t) => { const w = h('div', { class: 'tbl-wrap' }); t.parentNode.insertBefore(w, t); w.appendChild(t); });
    const qh = $('[data-qs]', el);
    if (qh) mqs.forEach((q) => qh.appendChild(qCard(q)));
    return { el };
  }

  // ---------------------------------------------------------------- question card
  const TYPE_LABEL = { decide: 'Decide', predict: 'Predict', explain: 'Explain', troubleshoot: 'Troubleshoot', design: 'Design', numerical: 'Numerical', interpret: 'Interpret' };
  function qState(id) { return S.q[id] || (S.q[id] = { seen: 0, right: 0, wrong: 0 }); }
  function levelDots(l) { return `<span class="qlevel" title="Level ${l} of 3">${[1, 2, 3].map((k) => `<i class="${k <= l ? 'on' : ''}"></i>`).join('')}</span>`; }
  function statusTag(id) { const st = S.q[id] && S.q[id].status; return st === 'got' ? '<span class="qstatus got">Got it</span>' : st === 'revisit' ? '<span class="qstatus revisit">Revisit</span>' : ''; }
  function topicName(q) { if (q.topic === 'mixed') return 'Across modules'; if (q.topic === 'summary') return `Module ${+MOD[q.module].num} · across topics`; const t = TOPIC[q.topic]; return t ? (t.short || t.title) : ''; }
  function answerHTML(q) {
    return `<div class="qans-inner">
      <div class="verdict prose">${q.answer || ''}</div>
      ${q.explain ? `<div class="why prose">${q.explain}</div>` : ''}
      ${q.points && q.points.length ? `<div class="pts-title">What the examiner wants to see</div><ul class="pts prose">${q.points.map((p) => `<li>${p}</li>`).join('')}</ul>` : ''}
    </div>`;
  }
  function qCard(q, opts) {
    opts = opts || {};
    const card = h('article', { class: 'qcard', id: 'q-' + q.id });
    const letters = 'ABCD';
    card.innerHTML = `
      <div class="qmeta"><span class="qtype">${TYPE_LABEL[q.type] || q.type}</span>${levelDots(q.level || 2)}<span>${esc(topicName(q))}</span><span data-st>${statusTag(q.id)}</span></div>
      <div class="qtext prose">${q.q}</div>
      ${q.options ? `<ol class="qopts">${q.options.map((o, k) => `<li><button class="qopt" data-k="${k}"><span class="k">${letters[k]}</span><span>${o}</span></button></li>`).join('')}</ol>` : ''}
      <div class="qactions">
        <button class="btn small" data-act="reveal">${q.options ? 'Show answer' : 'Show answer'}</button>
        <button class="btn small ghost" data-act="got">${icon('check')}Got it</button>
        <button class="btn small ghost" data-act="revisit">${icon('rotate')}Revisit</button>
      </div>
      <div class="qans${opts.open ? ' open' : ''}"><div>${answerHTML(q)}</div></div>`;
    hydrate(card);
    const ans = $('.qans', card), rev = $('[data-act="reveal"]', card);
    const paintRev = () => { rev.textContent = ans.classList.contains('open') ? 'Hide answer' : 'Show answer'; };
    paintRev();
    const markSeen = () => { const st = qState(q.id); st.seen++; save(); };
    rev.addEventListener('click', () => { ans.classList.toggle('open'); if (ans.classList.contains('open')) markSeen(); paintRev(); });
    const setStatus = (v) => { const st = qState(q.id); st.status = st.status === v ? undefined : v; save(); $('[data-st]', card).innerHTML = statusTag(q.id); toast(st.status === 'got' ? 'Marked: got it' : st.status === 'revisit' ? 'Added to revisit' : 'Cleared', st.status === 'revisit' ? 'rotate' : 'check'); };
    $('[data-act="got"]', card).addEventListener('click', () => setStatus('got'));
    $('[data-act="revisit"]', card).addEventListener('click', () => setStatus('revisit'));
    if (q.options) $('.qopts', card).addEventListener('click', (e) => {
      const b = e.target.closest('.qopt'); if (!b || b.disabled) return;
      const k = +b.dataset.k, right = k === q.correct;
      $$('.qopt', card).forEach((x) => { x.disabled = true; const kk = +x.dataset.k; if (kk === q.correct) x.classList.add('right'); else if (kk === k) x.classList.add('wrong'); else x.classList.add('dim'); });
      const st = qState(q.id); st.seen++; if (right) st.right++; else { st.wrong++; st.status = 'revisit'; } save();
      $('[data-st]', card).innerHTML = statusTag(q.id);
      ans.classList.add('open'); paintRev();
      trackAnswer(q, right);
      if (opts.onAnswer) opts.onAnswer(right);
    });
    return card;
  }

  // ---------------------------------------------------------------- question bank
  const bankUI = { mod: 'all', topic: 'all', type: 'all', level: 0, status: 'all', open: false };
  function viewBank(r) {
    if (r.arg) {
      if (MOD[r.arg]) { bankUI.mod = r.arg; bankUI.topic = 'all'; }
      else if (TOPIC[r.arg]) { bankUI.mod = TOPIC[r.arg].module; bankUI.topic = r.arg; }
      else if (r.arg === 'mixed') { bankUI.mod = 'mixed'; bankUI.topic = 'all'; }
      else { const mm = r.arg.match(/^(m[0-9]+)-summary$/); if (mm) { bankUI.mod = mm[1]; bankUI.topic = 'summary'; } }
    } else { bankUI.mod = 'all'; bankUI.topic = 'all'; }
    setCrumbs([{ t: 'Home', href: '#home' }, { t: 'Question bank' }]);
    setActive(r.arg ? 'questions.' + r.arg : 'questions'); document.title = 'Question bank · BACHY105 Notes';
    const el = h('div', { class: 'view' });
    const types = Array.from(new Set(QS.map((q) => q.type))).filter(Boolean);
    const got = QS.filter((q) => S.q[q.id] && S.q[q.id].status === 'got').length;
    const rv = QS.filter((q) => S.q[q.id] && S.q[q.id].status === 'revisit').length;
    el.innerHTML = `
      <div class="eyebrow"><span class="code">Practice</span><span>${QS.length} questions</span><span class="dot">·</span><span>${got} got it · ${rv} to revisit</span></div>
      <h1 class="h-display">Question bank</h1>
      <p class="blurb">Each one puts you in a situation and asks you to reason it out. Answer it in your head or on paper first, then open the answer. Mark each as <b style="color:var(--white)">got it</b> or <b style="color:var(--white)">revisit</b>.</p>
      <div class="filters">
        <div class="frow"><span class="flabel">Module</span>${[['all', 'All'], ...MODULES.filter((m) => m.topics.length).map((m) => [m.id, `Module ${+m.num}`]), ...((QBY.mixed || []).length ? [['mixed', 'Mixed']] : [])].map(([v, l]) => `<button class="fchip" data-f="mod" data-v="${v}">${l}</button>`).join('')}</div>
        <div class="frow"><span class="flabel">Topic</span><select class="fselect" data-f="topic" aria-label="Topic"></select></div>
        <div class="frow"><span class="flabel">Type</span>${[['all', 'All'], ...types.map((t) => [t, TYPE_LABEL[t] || t])].map(([v, l]) => `<button class="fchip" data-f="type" data-v="${v}">${l}</button>`).join('')}</div>
        <div class="frow"><span class="flabel">Level</span>${[[0, 'Any'], [1, 'Warm-up'], [2, 'Solid'], [3, 'Stretch']].map(([v, l]) => `<button class="fchip" data-f="level" data-v="${v}">${l}</button>`).join('')}</div>
        <div class="frow"><span class="flabel">Status</span>${[['all', 'All'], ['unseen', 'Unseen'], ['revisit', 'Revisit'], ['got', 'Got it']].map(([v, l]) => `<button class="fchip" data-f="status" data-v="${v}">${l}</button>`).join('')}</div>
        <div class="frow" style="justify-content:space-between"><button class="pill" data-f="open"><span>Show all answers</span><span class="switch"></span></button><span class="muted" data-count style="font-size:13px"></span><button class="btn small" data-act="practice">${icon('play')}Practise these one by one</button></div>
      </div>
      <div data-list></div>`;
    const list = $('[data-list]', el), sel = $('[data-f="topic"]', el);
    function fillTopics() {
      const mods = bankUI.mod === 'all' ? MODULES : bankUI.mod === 'mixed' ? [] : [MOD[bankUI.mod]];
      sel.innerHTML = `<option value="all">All topics</option>` + mods.map((m) => m.topics.map((t) => `<option value="${t.id}">${rt(t.short || t.title)} (${(QBY[t.id] || []).length})</option>`).join('') + (QS.some((q) => q.topic === 'summary' && q.module === m.id) ? `<option value="summary">Module ${+m.num}: across topics</option>` : '')).join('');
      sel.value = bankUI.topic; if (sel.value !== bankUI.topic) { bankUI.topic = 'all'; sel.value = 'all'; }
      sel.disabled = bankUI.mod === 'mixed';
    }
    function filtered() {
      return QS.filter((q) => {
        if (bankUI.mod === 'mixed') { if (q.topic !== 'mixed') return false; }
        else if (bankUI.mod !== 'all' && (q.module !== bankUI.mod || q.topic === 'mixed')) return false;
        if (bankUI.topic !== 'all' && q.topic !== bankUI.topic) return false;
        if (bankUI.type !== 'all' && q.type !== bankUI.type) return false;
        if (bankUI.level && q.level !== bankUI.level) return false;
        const st = S.q[q.id];
        if (bankUI.status === 'unseen' && st && st.seen) return false;
        if (bankUI.status === 'revisit' && !(st && st.status === 'revisit')) return false;
        if (bankUI.status === 'got' && !(st && st.status === 'got')) return false;
        return true;
      });
    }
    function paint() {
      $$('.fchip', el).forEach((b) => b.classList.toggle('on', String(bankUI[b.dataset.f]) === b.dataset.v));
      $('[data-f="open"]', el).classList.toggle('on', bankUI.open);
      const qs = filtered();
      $('[data-count]', el).textContent = `${qs.length} shown`;
      list.innerHTML = '';
      if (!qs.length) { list.appendChild(h('div', { class: 'empty', text: 'No questions match these filters.' })); return; }
      let lastG = null, lastT = null, grp = null;
      qs.forEach((q) => {
        const g = qGroupKey(q);
        if (g !== lastG) {
          grp = h('section', { class: 'qgroup' });
          grp.appendChild(h('h2', { text: g === 'mixed' ? 'Mixed: across modules' : `Module ${+MOD[g].num} · ${MOD[g].title}` }));
          list.appendChild(grp); lastG = g; lastT = null;
        }
        if (q.topic !== lastT && q.topic !== 'mixed') {
          const t = TOPIC[q.topic];
          grp.appendChild(h('h3', { html: t ? `<a href="#${t.id}">${rt(t.title)}</a><span class="faint">${(QBY[t.id] || []).length}</span>` : 'Across the module' }));
          lastT = q.topic;
        }
        grp.appendChild(qCard(q, { open: bankUI.open }));
      });
      if (pendingQ) {
        const c = document.getElementById('q-' + pendingQ);
        if (c) { $('.qans', c).classList.add('open'); setTimeout(() => c.scrollIntoView({ block: 'start', behavior: reduced ? 'auto' : 'smooth' }), 200); c.style.borderColor = 'var(--white)'; setTimeout(() => { c.style.borderColor = ''; }, 2400); }
        pendingQ = null;
      }
    }
    el.addEventListener('click', (e) => {
      const b = e.target.closest('[data-f]');
      if (b && b.tagName === 'BUTTON') {
        const f = b.dataset.f;
        if (f === 'open') bankUI.open = !bankUI.open;
        else { bankUI[f] = f === 'level' ? +b.dataset.v : b.dataset.v; if (f === 'mod') { bankUI.topic = 'all'; fillTopics(); } }
        paint();
      }
      if (e.target.closest('[data-act="practice"]')) { quizUI.preset = filtered().map((q) => q.id); navigate('#quiz'); }
    });
    sel.addEventListener('change', () => { bankUI.topic = sel.value; paint(); });
    fillTopics(); paint();
    return { el };
  }

  // ---------------------------------------------------------------- quiz
  const quizUI = { mods: null, format: 'mcq', count: 10, smart: true, run: null, preset: null };
  function viewQuiz(r) {
    setCrumbs([{ t: 'Home', href: '#home' }, { t: 'Quiz' }]); setActive('quiz'); document.title = 'Quiz · BACHY105 Notes';
    const el = h('div', { class: 'view' });
    if (r.arg && MOD[r.arg]) quizUI.mods = [r.arg];
    if (!quizUI.mods) quizUI.mods = MODULES.filter((m) => m.topics.length).map((m) => m.id);
    let keyHandler = null;
    function pool() {
      if (quizUI.preset) return quizUI.preset.map((id) => QID[id]).filter(Boolean);
      return QS.filter((q) => (quizUI.mods.includes(q.module)) && (quizUI.format === 'mixed' || (quizUI.format === 'mcq' ? q.options : !q.options)));
    }
    function pick() {
      let p = pool();
      if (quizUI.preset) { quizUI.preset = null; return p; }
      if (quizUI.smart) {
        const w = (q) => { if ((S.confusing[q.topic] || []).length) return -1; const st = S.q[q.id]; if (!st || !st.seen) return 0; if (st.status === 'revisit' || st.wrong > st.right) return 1; return 2; };
        p = shuffle(p).sort((a, b) => w(a) - w(b));
      } else p = shuffle(p);
      return quizUI.count ? p.slice(0, quizUI.count) : p;
    }
    function setup() {
      el.innerHTML = `
        <div class="eyebrow"><span class="code">Practice</span><span>Quiz</span></div>
        <h1 class="h-display">Quiz</h1>
        <p class="blurb">Pick what to cover. Multiple-choice questions are marked for you; open ones you mark yourself after reading the model answer.</p>
        <div class="filters quiz-setup">
          <div class="frow"><span class="flabel">Modules</span>${MODULES.filter((m) => m.topics.length).map((m) => `<button class="fchip" data-m="${m.id}">Module ${+m.num} · ${esc(m.title)}</button>`).join('')}</div>
          <div class="frow"><span class="flabel">Format</span>${[['mcq', 'Multiple choice'], ['open', 'Open (self-marked)'], ['mixed', 'Both']].map(([v, l]) => `<button class="fchip" data-fmt="${v}">${l}</button>`).join('')}</div>
          <div class="frow"><span class="flabel">Length</span>${[[10, '10'], [20, '20'], [30, '30'], [0, 'All']].map(([v, l]) => `<button class="fchip" data-n="${v}">${l}</button>`).join('')}</div>
          <div class="frow"><span class="flabel">Order</span><button class="pill" data-smart><span>Weak spots, unseen and missed first</span><span class="switch"></span></button></div>
          <div class="frow"><button class="btn primary" data-start></button></div>
        </div>`;
      const paint = () => {
        $$('[data-m]', el).forEach((b) => b.classList.toggle('on', quizUI.mods.includes(b.dataset.m)));
        $$('[data-fmt]', el).forEach((b) => b.classList.toggle('on', b.dataset.fmt === quizUI.format));
        $$('[data-n]', el).forEach((b) => b.classList.toggle('on', +b.dataset.n === quizUI.count));
        $('[data-smart]', el).classList.toggle('on', quizUI.smart);
        const n = pool().length, c = quizUI.count ? Math.min(quizUI.count, n) : n;
        const s = $('[data-start]', el); s.innerHTML = `${icon('play')}Start ${c} question${c === 1 ? '' : 's'}`; s.disabled = !c;
      };
      el.onclick = (e) => {
        const m = e.target.closest('[data-m]'), f = e.target.closest('[data-fmt]'), n = e.target.closest('[data-n]');
        if (m) { const id = m.dataset.m; quizUI.mods = quizUI.mods.includes(id) ? quizUI.mods.filter((x) => x !== id) : quizUI.mods.concat(id); if (!quizUI.mods.length) quizUI.mods = [id]; }
        if (f) quizUI.format = f.dataset.fmt;
        if (n) quizUI.count = +n.dataset.n;
        if (e.target.closest('[data-smart]')) quizUI.smart = !quizUI.smart;
        if (e.target.closest('[data-start]')) { start(pick()); return; }
        paint();
      };
      paint();
    }
    function start(list) {
      quizUI.run = { list, i: 0, right: 0, wrong: 0, open: 0, missed: [] };
      el.onclick = null;
      step();
    }
    function step() {
      const run = quizUI.run;
      if (run.i >= run.list.length) return finish();
      const q = run.list[run.i];
      el.innerHTML = `
        <div class="eyebrow"><span class="code">Quiz</span><span>${esc(topicName(q))}</span></div>
        <div class="quiz-top"><span>${run.i + 1} / ${run.list.length}</span><div class="bar"><i style="width:${(run.i / run.list.length) * 100}%"></i></div><span>${run.right} right</span></div>
        <div data-card></div>
        <div class="btn-row" style="margin-top:16px;justify-content:space-between"><button class="btn ghost" data-quit>End quiz</button><button class="btn primary" data-next hidden>${run.i + 1 === run.list.length ? 'See results' : 'Next question'} ${icon('right')}</button></div>`;
      const holder = $('[data-card]', el);
      const next = $('[data-next]', el);
      let answered = false;
      const card = qCard(q, {
        onAnswer(right) { answered = true; if (right) run.right++; else { run.wrong++; run.missed.push(q.id); } next.hidden = false; next.focus({ preventScroll: true }); }
      });
      card.classList.add('quiz-card');
      if (q.options) $('.qactions', card).remove();
      else {
        const acts = $('.qactions', card);
        acts.innerHTML = `<button class="btn small" data-act="reveal2">Show model answer</button>`;
        $('[data-act="reveal2"]', acts).addEventListener('click', () => {
          $('.qans', card).classList.add('open'); qState(q.id).seen++; save();
          acts.innerHTML = `<span class="muted" style="font-size:13.5px">How did you do?</span><button class="btn small" data-self="1">${icon('check')}I had it</button><button class="btn small" data-self="0">${icon('rotate')}Not yet</button>`;
          acts.addEventListener('click', (e) => {
            const b = e.target.closest('[data-self]'); if (!b || answered) return;
            answered = true; const ok = b.dataset.self === '1';
            const st = qState(q.id); st.status = ok ? 'got' : 'revisit'; if (ok) { st.right++; run.right++; } else { st.wrong++; run.wrong++; run.missed.push(q.id); } save();
            run.open++;
            b.classList.add('primary');
            next.hidden = false; next.focus({ preventScroll: true });
          });
        });
      }
      holder.appendChild(card);
      next.addEventListener('click', () => { run.i++; step(); main.scrollTo({ top: 0 }); });
      $('[data-quit]', el).addEventListener('click', finish);
      if (keyHandler) document.removeEventListener('keydown', keyHandler);
      keyHandler = (e) => {
        if (typing(e) || !current || current.view !== 'quiz') return;
        if (/^[1-4]$/.test(e.key) && q.options && !answered) { const b = $(`.qopt[data-k="${+e.key - 1}"]`, card); if (b) b.click(); }
        if (e.key === 'Enter' && !next.hidden) { e.preventDefault(); next.click(); }
      };
      document.addEventListener('keydown', keyHandler);
    }
    function finish() {
      const run = quizUI.run; quizUI.run = null;
      const total = run.right + run.wrong;
      const pct = total ? Math.round((run.right / total) * 100) : 0;
      el.innerHTML = `
        <div class="eyebrow"><span class="code">Quiz</span><span>Results</span></div>
        <h1 class="h-display">${pct >= 80 ? 'Strong work.' : pct >= 50 ? 'Getting there.' : 'Worth another pass.'}</h1>
        <div class="score"><div class="ring" style="--p:${pct}"><span>${pct}%</span></div>
          <div><p class="blurb" style="margin:0">${run.right} right, ${run.wrong} to review${total < run.list.length ? `, ${run.list.length - total} skipped` : ''}.</p><p class="muted" style="margin:6px 0 0;font-size:14px">Missed questions are saved to Revisit in the question bank.</p></div></div>
        <div class="btn-row">${run.missed.length ? `<button class="btn primary" data-retry>${icon('rotate')}Retry the ${run.missed.length} missed</button>` : ''}<button class="btn" data-new>${icon('quiz')}New quiz</button><a class="btn" href="#questions">${icon('q')}Question bank</a></div>
        ${run.missed.length ? `<section class="sum-sec"><h2 class="h-sec">Review these</h2><div data-missed></div></section>` : ''}`;
      const mh = $('[data-missed]', el);
      if (mh) run.missed.forEach((id) => mh.appendChild(qCard(QID[id], { open: true })));
      el.onclick = (e) => {
        if (e.target.closest('[data-retry]')) start(run.missed.map((id) => QID[id]));
        if (e.target.closest('[data-new]')) setup();
      };
      stagger(el);
    }
    if (quizUI.preset) start(pick()); else setup();
    return { el, cleanup() { if (keyHandler) document.removeEventListener('keydown', keyHandler); } };
  }

  // ---------------------------------------------------------------- flashcards
  function viewCards(r) {
    setCrumbs([{ t: 'Home', href: '#home' }, { t: 'Flashcards' }]); setActive('cards'); document.title = 'Flashcards · BACHY105 Notes';
    const el = h('div', { class: 'view' });
    const state = { mod: 'all', topic: 'all', learning: false, deck: [], i: 0, flipped: false };
    if (r.arg) { if (MOD[r.arg]) state.mod = r.arg; else if (TOPIC[r.arg]) { state.mod = TOPIC[r.arg].module; state.topic = r.arg; } }
    el.innerHTML = `
      <div class="eyebrow"><span class="code">Practice</span><span>${CARDS.length} cards</span></div>
      <h1 class="h-display">Flashcards</h1>
      <p class="blurb">Say the answer out loud, then flip. Sort each card with the arrow keys: <kbd>←</kbd> still learning, <kbd>→</kbd> know it, <kbd>Space</kbd> to flip.</p>
      <div class="deck-bar">
        ${[['all', 'All'], ...MODULES.filter((m) => m.topics.length).map((m) => [m.id, `Module ${+m.num}`])].map(([v, l]) => `<button class="fchip" data-cm="${v}">${l}</button>`).join('')}
        <select class="fselect" data-ct aria-label="Topic"></select>
        <button class="pill" data-learn><span>Still learning only</span><span class="switch"></span></button>
        <button class="btn small" data-shuf>${icon('shuffle')}Shuffle</button>
      </div>
      <div class="card-stage"><div class="fcard" tabindex="0" aria-live="polite"><div class="fface front"></div><div class="fface back"></div></div></div>
      <div class="card-ctrl"><button class="btn" data-again>${icon('rotate')}Still learning</button><button class="btn" data-flip>Flip</button><button class="btn primary" data-know>${icon('check')}Know it</button></div>
      <div class="card-count"></div>`;
    const card = $('.fcard', el), sel = $('[data-ct]', el);
    function fillTopics() {
      const mods = state.mod === 'all' ? MODULES : [MOD[state.mod]];
      sel.innerHTML = `<option value="all">All topics</option>` + mods.map((m) => m.topics.map((t) => `<option value="${t.id}">${rt(t.short || t.title)} (${(t.flashcards || []).length})</option>`).join('')).join('');
      sel.value = state.topic; if (sel.value !== state.topic) { state.topic = 'all'; sel.value = 'all'; }
    }
    function build(shuf) {
      let d = CARDS.filter((c) => (state.mod === 'all' || c.module === state.mod) && (state.topic === 'all' || c.topic === state.topic));
      if (state.learning) d = d.filter((c) => S.cards[c.key] !== 'know');
      state.deck = shuf ? shuffle(d) : d; state.i = 0; state.flipped = false;
      paint(true);
    }
    function paint(swap) {
      $$('[data-cm]', el).forEach((b) => b.classList.toggle('on', b.dataset.cm === state.mod));
      $('[data-learn]', el).classList.toggle('on', state.learning);
      const known = state.deck.filter((c) => S.cards[c.key] === 'know').length;
      const c = state.deck[state.i];
      card.classList.toggle('flip', state.flipped);
      if (swap) { card.classList.remove('swap'); void card.offsetWidth; card.classList.add('swap'); }
      const front = $('.front', card), back = $('.back', card);
      if (!c) {
        front.innerHTML = `<span class="ftag">Deck</span><div class="ftext">${state.deck.length ? 'Deck finished.' : 'No cards here.'}</div><div class="fhint">${state.deck.length ? 'Shuffle or pick another deck to go again.' : 'Try another filter.'}</div>`;
        back.innerHTML = '';
        $('.card-count', el).textContent = `${known} of ${state.deck.length} known`;
        return;
      }
      const t = TOPIC[c.topic];
      front.innerHTML = `<span class="ftag">${rt(t ? t.short || t.title : '')}</span><div class="ftext">${c.front}</div><div class="fhint">Tap or press Space to flip</div>`;
      back.innerHTML = `<span class="ftag">Answer${S.cards[c.key] === 'know' ? ' · known' : ''}</span><div class="ftext">${c.back}</div><div class="fhint">← still learning · know it →</div>`;
      $('.card-count', el).textContent = `Card ${state.i + 1} of ${state.deck.length} · ${known} known`;
    }
    const flip = () => { if (!state.deck[state.i]) return; state.flipped = !state.flipped; paint(false); };
    const rate = (v) => { const c = state.deck[state.i]; if (!c) return; S.cards[c.key] = v; save(); state.i++; state.flipped = false; paint(true); };
    card.addEventListener('click', flip);
    el.addEventListener('click', (e) => {
      const m = e.target.closest('[data-cm]');
      if (m) { state.mod = m.dataset.cm; state.topic = 'all'; fillTopics(); build(false); }
      if (e.target.closest('[data-learn]')) { state.learning = !state.learning; build(false); }
      if (e.target.closest('[data-shuf]')) build(true);
      if (e.target.closest('[data-again]')) rate('again');
      if (e.target.closest('[data-know]')) rate('know');
      if (e.target.closest('[data-flip]')) flip();
    });
    sel.addEventListener('change', () => { state.topic = sel.value; build(false); });
    const onKey = (e) => {
      if (typing(e) || !current || current.view !== 'cards' || document.querySelector('.overlay')) return;
      if (e.key === ' ') { e.preventDefault(); flip(); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); rate('know'); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); rate('again'); }
    };
    document.addEventListener('keydown', onKey);
    fillTopics(); build(false);
    return { el, cleanup() { document.removeEventListener('keydown', onKey); } };
  }

  // ---------------------------------------------------------------- formula sheet
  function viewFormulas() {
    setCrumbs([{ t: 'Home', href: '#home' }, { t: 'Formula sheet' }]); setActive('formulas'); document.title = 'Formula sheet · BACHY105 Notes';
    const el = h('div', { class: 'view' });
    let tab = 'f';
    el.innerHTML = `
      <div class="eyebrow"><span class="code">Practice</span><span>Formula sheet</span></div>
      <h1 class="h-display">Formula sheet</h1>
      <p class="blurb">Everything you should be able to write from memory, grouped by module. Turn on Recall to test the key values.</p>
      <div class="vseg" style="margin-bottom:10px"><button class="vseg-btn" data-t="f">Equations</button><button class="vseg-btn" data-t="n">Numbers</button><button class="vseg-btn" data-t="x">Traps</button></div>
      <div data-body></div>`;
    const body = $('[data-body]', el);
    function paint() {
      $$('[data-t]', el).forEach((b) => b.classList.toggle('on', b.dataset.t === tab));
      body.innerHTML = MODULES.filter((m) => m.topics.length).map((m) => {
        const s = SUM[m.id] || {};
        let inner = '';
        if (tab === 'f') {
          const sumF = s.formulas && s.formulas.length;
          inner = sumF ? `<div class="forms">${s.formulas.map((f) => `<div class="form recallable"><div class="fname">${rt(f.name)}</div><div class="fbody">${f.html}</div>${f.note ? `<div class="fnote">${f.note}</div>` : ''}</div>`).join('')}</div>`
            : m.topics.filter((t) => (t.formulas || []).length).map((t) => `<h3 class="h-sub" style="font-size:18px;margin-top:22px"><a href="#${t.id}" style="text-decoration:none">${rt(t.title)}</a></h3><div class="forms">${t.formulas.map((f) => `<div class="form recallable"><div class="fname">${rt(f.name)}</div><div class="fbody">${f.html}</div>${f.note ? `<div class="fnote">${f.note}</div>` : ''}</div>`).join('')}</div>`).join('');
        } else if (tab === 'n') {
          inner = s.numbers && s.numbers.length ? `<div class="nums recallable">${s.numbers.map((x) => `<div><div class="nv"><b>${x.value}</b></div><div class="nw">${x.what}</div></div>`).join('')}</div>`
            : `<ul class="prose">${[].concat(...m.topics.map((t) => t.oneLiners || [])).map((x) => `<li>${x}</li>`).join('')}</ul>`;
        } else {
          inner = s.traps && s.traps.length ? `<ul class="traps prose">${s.traps.map((x) => `<li>${x}</li>`).join('')}</ul>` : '<p class="muted">No traps listed yet.</p>';
        }
        return `<section class="sum-sec" style="margin-top:44px"><h2 class="h-sec">Module ${+m.num} <small>${esc(m.title)}</small></h2>${inner || '<p class="muted">Nothing here yet.</p>'}</section>`;
      }).join('');
      stagger(body);
    }
    el.addEventListener('click', (e) => { const b = e.target.closest('[data-t]'); if (b) { tab = b.dataset.t; paint(); } });
    paint();
    return { el };
  }

  // ---------------------------------------------------------------- lab bench
  function viewLab() {
    setCrumbs([{ t: 'Home', href: '#home' }, { t: 'Lab bench' }]); setActive('lab'); document.title = 'Lab bench · BACHY105 Notes';
    const el = h('div', { class: 'view' });
    const ids = allViz();
    el.innerHTML = `
      <div class="eyebrow"><span class="code">Practice</span><span>${ids.length} interactive models</span></div>
      <h1 class="h-display">Lab bench</h1>
      <p class="blurb">Every animation, model and calculator from the notes, in one place. Open one, play with it, then jump to the tab where it's explained.</p>
      ${ids.length ? '' : '<div class="empty">Interactive models are still loading.</div>'}
      ${MODULES.map((m) => {
        const mine = allViz().filter((id) => vizModule(id) === m.id);
        if (!mine.length) return '';
        return `<section class="sum-sec" style="margin-top:40px"><h2 class="h-sec">Module ${+m.num} <small>${esc(m.title)}</small></h2><div class="lab-grid">${mine.map((id) => {
          const d = window.VIZ.def(id) || {};
          return `<div class="lab-item" data-id="${id}"><button class="lab-head" aria-expanded="false"><span class="k">${esc(d.kind || 'Interactive')}</span><span class="t">${esc(d.title || id)}</span>${icon('chev', 'sb-chev')}</button><div class="lab-body" hidden></div></div>`;
        }).join('')}</div></section>`;
      }).join('')}`;
    let open = null;
    el.addEventListener('click', (e) => {
      const hd = e.target.closest('.lab-head'); if (!hd) return;
      const item = hd.parentElement, id = item.dataset.id, body = $('.lab-body', item);
      if (open && open.item !== item) { open.hnd.destroy(); $('.lab-body', open.item).hidden = true; $('.lab-head', open.item).setAttribute('aria-expanded', 'false'); open = null; }
      if (open && open.item === item) { open.hnd.destroy(); body.hidden = true; hd.setAttribute('aria-expanded', 'false'); open = null; return; }
      body.hidden = false; hd.setAttribute('aria-expanded', 'true');
      body.innerHTML = '<div class="viz-host"></div>';
      const at = VIZ_AT[id];
      if (at && TOPIC[at.topic]) body.appendChild(h('p', { class: 'where', html: `Explained in <a href="#${at.topic}.${at.tab}">${rt(TOPIC[at.topic].title)} › ${rt(TOPIC[at.topic].tabs[at.tab].title)}</a>` }));
      const hnd = window.VIZ.mount($('.viz-host', body), id);
      open = { item, hnd };
      setTimeout(() => item.scrollIntoView({ block: 'start', behavior: reduced ? 'auto' : 'smooth' }), 50);
    });
    return { el, cleanup() { if (open) open.hnd.destroy(); } };
  }

  // ---------------------------------------------------------------- mine
  function viewMine() {
    setCrumbs([{ t: 'Home', href: '#home' }, { t: 'Highlights & notes' }]); setActive('mine'); document.title = 'Highlights & notes · BACHY105 Notes';
    const el = h('div', { class: 'view' });
    const hl = [];
    TOPICS.forEach((t) => (S.hl[t.id] || []).forEach((x) => hl.push({ t, x })));
    const notes = TOPICS.filter((t) => S.notes[t.id]);
    const weak = []; TOPICS.forEach((t) => (S.confusing[t.id] || []).forEach((i) => { if (t.tabs[i]) weak.push({ t, i }); }));
    const tagged = TOPICS.filter((t) => S.tags[t.id]);
    const rv = QS.filter((q) => S.q[q.id] && S.q[q.id].status === 'revisit');
    const learning = CARDS.filter((c) => S.cards[c.key] === 'again').length;
    el.innerHTML = `
      <div class="eyebrow"><span class="code">Yours</span><span>${hl.length} highlights · ${notes.length} notes · ${rv.length} to revisit</span></div>
      <h1 class="h-display">Highlights & notes</h1>
      <p class="blurb">Everything you've marked, in one place. Select text in any topic to add a highlight.</p>
      <section class="sum-sec" style="margin-top:36px"><h2 class="h-sec">My weak spots <small>${weak.length}</small></h2>
        ${weak.length ? `<div>${weak.map(({ t, i }) => `<a class="trow" href="#${t.id}.${i}"><span class="tick" style="box-shadow:none;background:none;color:var(--warn)">${icon('flag')}</span><div><h3>${rt(t.tabs[i].title)}</h3><p>${rt(t.title)}</p></div><span class="meta">revisit <span class="arrow">→</span></span></a>`).join('')}</div><p class="muted" style="font-size:14px;margin-top:10px">The quiz asks about these topics first.</p>` : '<div class="empty">Tap "Confusing?" at the bottom of any tab to collect it here.</div>'}
      </section>
      <section class="sum-sec"><h2 class="h-sec">Highlights <small>${hl.length}</small></h2>
        ${hl.length ? hl.map(({ t, x }) => `<div class="hl-item"><span class="sw c${x.c}"></span><div><q>${esc(x.text)}</q><a href="#${t.id}.${x.tab}">${rt(t.title)} › ${esc((t.tabs[x.tab] || {}).title || '')}</a></div><button class="icon-btn" data-del="${t.id}|${x.id}" aria-label="Remove highlight">${icon('x')}</button></div>`).join('') : '<div class="empty">No highlights yet. Select any line in a topic and pick a colour.</div>'}
      </section>
      <section class="sum-sec"><h2 class="h-sec">My notes <small>${notes.length}</small></h2>
        ${notes.length ? notes.map((t) => `<div class="hl-item"><span class="sw c1" style="opacity:.3"></span><div><div style="white-space:pre-wrap;color:var(--text-2);font-size:15px">${esc(S.notes[t.id])}</div><a href="#${t.id}">${rt(t.title)}</a></div><span></span></div>`).join('') : '<div class="empty">No notes yet. Each topic has a notes box at the bottom.</div>'}
      </section>
      <section class="sum-sec"><h2 class="h-sec">Tagged topics <small>${tagged.length}</small></h2>
        ${tagged.length ? `<div>${tagged.map(topicRow).join('')}</div>` : '<div class="empty">Tag topics with the dot next to them in the sidebar.</div>'}
      </section>
      <section class="sum-sec"><h2 class="h-sec">Questions to revisit <small>${rv.length}</small></h2><div data-rv></div>
        ${rv.length ? '' : '<div class="empty">Questions you miss or mark "Revisit" land here.</div>'}
        ${learning ? `<p class="muted" style="margin-top:14px">${learning} flashcards marked still learning. <a href="#cards">Open flashcards</a></p>` : ''}
      </section>`;
    const rh = $('[data-rv]', el);
    rv.forEach((q) => rh.appendChild(qCard(q)));
    el.addEventListener('click', (e) => {
      const b = e.target.closest('[data-del]'); if (!b) return;
      const [tid, hid] = b.dataset.del.split('|');
      S.hl[tid] = (S.hl[tid] || []).filter((x) => x.id !== hid); save();
      b.closest('.hl-item').remove(); toast('Highlight removed', 'trash');
    });
    return { el };
  }

  // ================================================================ overlays
  function overlay(build, opts) {
    const ov = h('div', { class: 'overlay', role: 'dialog', 'aria-modal': 'true' });
    const close = () => { ov.remove(); document.removeEventListener('keydown', onKey, true); if (opts && opts.onClose) opts.onClose(); };
    const onKey = (e) => { if (e.key === 'Escape') { e.stopPropagation(); close(); } };
    ov.addEventListener('mousedown', (e) => { if (e.target === ov) close(); });
    document.addEventListener('keydown', onKey, true);
    ov.appendChild(build(close));
    document.body.appendChild(ov);
    return close;
  }

  // ---------------------------------------------------------------- search
  let INDEX = null;
  function buildIndex() {
    INDEX = [];
    TOPICS.forEach((t) => {
      INDEX.push({ k: 'Topic', title: t.title, text: t.blurb, href: '#' + t.id, w: 6 });
      t.tabs.forEach((tb, i) => INDEX.push({ k: 'Section', title: `${t.short || t.title} › ${tb.title}`, text: plain(tb.html), href: `#${t.id}.${i}`, w: 3, find: true }));
      (t.flashcards || []).forEach((c) => INDEX.push({ k: 'Flashcard', title: plain(c.front), text: plain(c.back), href: '#cards.' + t.id, w: 1 }));
    });
    MODULES.forEach((m) => {
      const s = SUM[m.id]; if (!s) return;
      INDEX.push({ k: 'Summary', title: `Module ${+m.num} summary`, text: plain([s.tldr].concat((s.bigIdeas || []).map((b) => b.html), (s.traps || [])).join(' ')), href: `#${m.id}-summary`, w: 2 });
      (s.formulas || []).forEach((f) => INDEX.push({ k: 'Formula', title: f.name, text: plain(f.html + ' ' + (f.note || '')), href: '#formulas', w: 2 }));
    });
    QS.forEach((q) => INDEX.push({ k: 'Question', title: plain(q.q).slice(0, 110), text: plain(q.q + ' ' + q.answer + ' ' + (q.explain || '')), href: '#questions' + (TOPIC[q.topic] ? '.' + q.topic : q.topic === 'mixed' ? '.mixed' : '.' + q.module), qid: q.id, w: 1 }));
    INDEX.forEach((e) => { e.lt = e.title.toLowerCase(); e.lx = e.text.toLowerCase(); });
  }
  function searchQ(query) {
    const words = query.toLowerCase().split(/\s+/).filter((w) => w.length > 0);
    if (!words.length) return [];
    const out = [];
    for (const e of INDEX) {
      let score = 0, ok = true;
      for (const w of words) {
        const ti = e.lt.indexOf(w), xi = e.lx.indexOf(w);
        if (ti < 0 && xi < 0) { ok = false; break; }
        score += (ti >= 0 ? 12 + (ti === 0 ? 4 : 0) : 0) + (xi >= 0 ? 2 + Math.max(0, 2 - xi / 400) : 0);
      }
      if (ok) out.push({ e, score: score + e.w });
    }
    out.sort((a, b) => b.score - a.score);
    return out.slice(0, 40).map((x) => x.e);
  }
  function snippet(text, words) {
    const lx = text.toLowerCase();
    let i = -1; for (const w of words) { i = lx.indexOf(w); if (i >= 0) break; }
    let s = i < 0 ? 0 : Math.max(0, i - 50);
    let out = (s > 0 ? '…' : '') + text.slice(s, s + 180) + (s + 180 < text.length ? '…' : '');
    out = esc(out);
    words.forEach((w) => { if (w.length > 1) out = out.replace(new RegExp('(' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark>$1</mark>'); });
    return out;
  }
  function openSearch() {
    if (document.querySelector('.overlay')) return;
    if (!INDEX) buildIndex();
    let results = [], sel = 0;
    overlay((close) => {
      const box = h('div', { class: 'modal' });
      box.innerHTML = `<div class="modal-head">${icon('search')}<input class="search-in" id="search-input" type="search" placeholder="Search topics, sections, questions, formulas" autocomplete="off" aria-label="Search"><kbd>Esc</kbd></div><ul class="sres" role="listbox"></ul><div class="search-foot"><span>↑↓ to move</span><span>Enter to open</span><span>${TOPICS.length} topics · ${QS.length} questions indexed</span></div>`;
      const inp = $('input', box), ul = $('.sres', box);
      const paint = () => {
        const words = inp.value.toLowerCase().split(/\s+/).filter(Boolean);
        ul.innerHTML = results.length ? results.map((e, i) => `<li><a href="${e.href}" data-i="${i}" class="${i === sel ? 'sel' : ''}"><div class="st"><span class="sk">${e.k}</span>${esc(e.title)}</div><div class="ss">${snippet(e.text, words)}</div></a></li>`).join('')
          : (inp.value.trim() ? '<li class="empty" style="margin:10px">Nothing found. Try a shorter word.</li>' : '<li class="muted" style="padding:14px;font-size:14px">Try "Nafion", "Bragg", "sol-gel", "hypsochromic", "zone refining"…</li>');
        const s = $('a.sel', ul); if (s) s.scrollIntoView({ block: 'nearest' });
      };
      const go = (e) => {
        close();
        const words = inp.value.trim();
        if (e.find) pendingFind = words;
        if (e.qid) pendingQ = e.qid;
        navigate(e.href);
      };
      inp.addEventListener('input', () => { results = searchQ(inp.value); sel = 0; paint(); });
      inp.addEventListener('keydown', (ev) => {
        if (ev.key === 'ArrowDown') { ev.preventDefault(); sel = Math.min(results.length - 1, sel + 1); paint(); }
        else if (ev.key === 'ArrowUp') { ev.preventDefault(); sel = Math.max(0, sel - 1); paint(); }
        else if (ev.key === 'Enter') { ev.preventDefault(); if (results[sel]) go(results[sel]); }
      });
      ul.addEventListener('click', (ev) => { const a = ev.target.closest('a[data-i]'); if (!a) return; ev.preventDefault(); ev.stopPropagation(); go(results[+a.dataset.i]); });
      setTimeout(() => inp.focus(), 20);
      paint();
      return box;
    });
  }

  // ---------------------------------------------------------------- shortcuts, backup, lightbox
  function openKeys() {
    overlay((close) => {
      const m = h('div', { class: 'modal' });
      const k = (s) => s.split(' ').map((x) => `<kbd>${x}</kbd>`).join('');
      m.innerHTML = `<div class="modal-head"><h2>Keyboard shortcuts</h2><button class="icon-btn" data-x aria-label="Close">${icon('x')}</button></div>
        <div class="modal-body"><div class="keys">
          <span>${k(isMac ? '⌘ K' : 'Ctrl K')}${k('/')}</span><span>Search everything</span>
          <span>${k('←')}${k('→')}</span><span>Previous / next tab (flashcards: still learning / know it)</span>
          <span>${k('N')}${k('P')}</span><span>Next / previous topic</span>
          <span>${k('R')}</span><span>Recall mode: blank every key term</span>
          <span>${k('F')}</span><span>Focus mode with a 25-minute timer</span>
          <span>${k('[')}</span><span>Show or hide the sidebar</span>
          <span>${k('Space')}</span><span>Flip a flashcard</span>
          <span>${k('1')}${k('2')}${k('3')}${k('4')}</span><span>Pick an option in the quiz, <kbd>Enter</kbd> for next</span>
          <span>${k('?')}</span><span>This list</span>
          <span>${k('Esc')}</span><span>Close a dialog or leave focus mode</span>
        </div></div>`;
      $('[data-x]', m).addEventListener('click', close);
      return m;
    });
  }
  function openBackup() {
    overlay((close) => {
      const m = h('div', { class: 'modal' });
      m.innerHTML = `<div class="modal-head"><h2>Back up or restore</h2><button class="icon-btn" data-x aria-label="Close">${icon('x')}</button></div>
        <div class="modal-body">
          <p class="muted" style="margin-top:0;font-size:14.5px">This is everything the app has saved in this browser: progress, tags, highlights, notes, question and flashcard history. Copy it somewhere safe. To restore, paste a backup below and press Restore.</p>
          <textarea class="backup" id="backup-text" spellcheck="false"></textarea>
          <div class="btn-row" style="margin-top:12px">
            <button class="btn primary" data-copy>${icon('copy')}Copy backup</button>
            <button class="btn" data-restore>${icon('rotate')}Restore from the box</button>
            <button class="btn ghost" data-reset style="margin-left:auto">${icon('trash')}Reset everything</button>
          </div><p class="muted" data-msg style="font-size:13px;min-height:1.4em;margin:10px 0 0"></p>
        </div>`;
      const ta = $('textarea', m), msg = $('[data-msg]', m);
      ta.value = JSON.stringify(S);
      $('[data-x]', m).addEventListener('click', close);
      $('[data-copy]', m).addEventListener('click', () => {
        const done = () => { msg.textContent = 'Copied to clipboard.'; };
        const fallback = () => { ta.focus(); ta.select(); msg.textContent = 'Selected. Press ' + (isMac ? '⌘' : 'Ctrl') + '+C to copy.'; };
        try { navigator.clipboard.writeText(ta.value).then(done, fallback); } catch (e) { fallback(); }
      });
      $('[data-restore]', m).addEventListener('click', () => {
        try { const obj = JSON.parse(ta.value); if (!obj || typeof obj !== 'object' || !obj.visited) throw new Error('bad'); S = normalize(obj); save(); msg.textContent = 'Restored.'; refreshAll(); }
        catch (e) { msg.textContent = 'That text is not a valid backup. Paste the whole backup exactly as copied.'; }
      });
      let armed = false;
      $('[data-reset]', m).addEventListener('click', (e) => {
        const b = e.currentTarget;
        if (!armed) { armed = true; b.innerHTML = icon('trash') + 'Click again to erase'; b.classList.remove('ghost'); setTimeout(() => { armed = false; b.innerHTML = icon('trash') + 'Reset everything'; b.classList.add('ghost'); }, 4000); return; }
        S = blank(); save(); ta.value = JSON.stringify(S); msg.textContent = 'Everything reset.'; refreshAll();
      });
      return m;
    });
  }
  function openLightbox(src, caption, alt) {
    const lb = h('div', { class: 'lightbox', role: 'dialog', 'aria-modal': 'true' });
    lb.innerHTML = `<button class="icon-btn lb-close" aria-label="Close">${icon('x')}</button><div class="lb-frame"><img src="${src}" alt="${esc(alt || '')}"></div>${caption ? `<p>${caption}</p>` : ''}`;
    const close = () => { lb.remove(); document.removeEventListener('keydown', onKey, true); };
    const onKey = (e) => { if (e.key === 'Escape') { e.stopPropagation(); close(); } };
    lb.addEventListener('click', (e) => { if (e.target.closest('.lb-frame')) { $('.lb-frame', lb).classList.toggle('zoom'); return; } close(); });
    document.addEventListener('keydown', onKey, true);
    document.body.appendChild(lb);
  }
  function refreshAll() { buildSidebar(); updateOverall(); if (current) render(parse(hashOf(current))); }

  function openReport(tid, ti) {
    const t = TOPIC[tid], tabTitle = t && t.tabs[ti] ? t.tabs[ti].title : '';
    overlay((close) => {
      const m = h('div', { class: 'modal' });
      m.innerHTML = `<div class="modal-head"><h2>Report a mistake</h2><button class="icon-btn" data-x aria-label="Close">${icon('x')}</button></div>
        <form class="modal-body report-form">
          <p class="muted" style="margin-top:0;font-size:14px">About: <b style="color:var(--white)">${t ? rt(t.title) : ''}${tabTitle ? ' › ' + rt(tabTitle) : ''}</b></p>
          <label>What's wrong?<textarea id="rep-text" required minlength="5" maxlength="1500" placeholder="e.g. The SOFC temperature says 80 °C but the slide says 800–1000 °C"></textarea></label>
          <label>Your email or phone <span class="muted">(optional, only if you want a reply)</span><input id="rep-contact" maxlength="120" autocomplete="email"></label>
          <input id="rep-web" name="website" tabindex="-1" autocomplete="off" style="position:absolute;left:-9999px" aria-hidden="true">
          <div class="btn-row"><button class="btn primary" type="submit">Send report</button></div>
          <p class="gate-msg" data-msg role="alert"></p>
        </form>`;
      $('[data-x]', m).addEventListener('click', close);
      $('form', m).addEventListener('submit', async (e) => {
        e.preventDefault();
        const msg = $('[data-msg]', m), btn = $('button[type=submit]', m);
        btn.disabled = true; msg.textContent = 'Sending…';
        try {
          const r = await fetch('/api/feedback', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ topic: tid, tab: tabTitle, text: $('#rep-text', m).value, contact: $('#rep-contact', m).value, website: $('#rep-web', m).value }) });
          const j = await r.json().catch(() => ({}));
          if (!r.ok) throw new Error(j.error || 'Could not send. Try again in a moment.');
          close(); toast('Thanks. Report sent', 'check');
        } catch (err) { msg.textContent = err.message; btn.disabled = false; }
      });
      setTimeout(() => $('#rep-text', m).focus(), 30);
      return m;
    });
  }

  // anonymous counters: one "visit" per browser per day, one "open" per topic per session
  function beacon(data) {
    try { const b = new Blob([JSON.stringify(data)], { type: 'application/json' }); if (!(navigator.sendBeacon && navigator.sendBeacon('/api/track', b))) fetch('/api/track', { method: 'POST', body: b, keepalive: true }).catch(() => {}); } catch (e) { /* ignore */ }
  }
  function trackTopic(id) {
    try { const k = 'bn_seen_' + id; if (sessionStorage.getItem(k)) return; sessionStorage.setItem(k, '1'); } catch (e) { return; }
    beacon({ topic: id });
  }
  // first answer to each question per session, so the owner can see which questions trip people up
  const short = (s) => plain(s).slice(0, 140);
  function trackAnswer(q, right) {
    try { const k = 'bn_ans_' + q.id; if (sessionStorage.getItem(k)) return; sessionStorage.setItem(k, '1'); } catch (e) { return; }
    beacon({ quiz: q.id, ok: !!right, label: short(q.q) });
  }
  function trackConfusing(tid, ti, on) {
    const t = TOPIC[tid], tb = t && t.tabs[ti];
    beacon({ confusing: tid, tab: ti, on: !!on, label: short((t ? t.short || t.title : tid) + ' › ' + (tb ? tb.title : 'tab ' + (ti + 1))) });
  }
  try { const d = new Date().toISOString().slice(0, 10); if (localStorage.getItem('bn_visit') !== d) { localStorage.setItem('bn_visit', d); beacon({ visit: true }); } } catch (e) { /* ignore */ }

  function shareProgress() {
    const d = doneIn(TOPICS), n = TOPICS.length, url = location.origin + location.pathname;
    const text = d ? `I've finished ${d} of ${n} topics on BACHY105 Notes. Module 2 is free, try it: ${url}` : `Studying Applied Chemistry (BACHY105)? Module 2 notes, diagrams and quizzes are free here: ${url}`;
    const copy = () => { try { navigator.clipboard.writeText(text).then(() => toast('Copied. Paste it in your group chat', 'copy'), () => toast(text)); } catch (e) { toast(text); } };
    if (navigator.share) navigator.share({ title: 'BACHY105 Notes', text, url }).catch(() => {}); else copy();
  }

  // bottom tab bar (phones)
  const bnav = h('nav', { class: 'bnav', 'aria-label': 'Quick navigation' });
  bnav.innerHTML = [['#home', 'home', 'Notes', 'home'], [null, 'search', 'Search', 'search'], ['#quiz', 'quiz', 'Quiz', 'quiz'], ['#cards', 'cards', 'Cards', 'cards'], [null, 'menu', 'Menu', 'sidebar']]
    .map(([href, ic, label, key]) => href ? `<a href="${href}" data-key="${key}">${icon(ic)}<span>${label}</span></a>` : `<button type="button" data-act="${key}">${icon(ic)}<span>${label}</span></button>`).join('');
  document.body.appendChild(bnav);

  // ================================================================ global events
  document.addEventListener('click', (e) => {
    const tagDot = e.target.closest('.tag-dot[data-act="tag"]');
    if (tagDot) { e.preventDefault(); e.stopPropagation(); cycleTag(tagDot.dataset.t); return; }
    const a = e.target.closest('a[href^="#"]');
    if (a && !e.defaultPrevented && !e.metaKey && !e.ctrlKey && !e.shiftKey && e.button === 0) {
      e.preventDefault();
      navigate(a.getAttribute('href'));
      return;
    }
    const act = e.target.closest('[data-act]');
    if (act) {
      const k = act.dataset.act;
      if (k === 'sidebar') toggleSidebar();
      else if (k === 'search') openSearch();
      else if (k === 'recall') toggleRecall();
      else if (k === 'focus') { if (document.body.classList.contains('focus') && e.target.closest('.timer')) { startTimer(!timerState.running); paintTimer(); } else toggleFocus(); }
      else if (k === 'keys') openKeys();
      else if (k === 'backup') openBackup();
      else if (k === 'theme') { S.ui.theme = S.ui.theme === 'light' ? 'dark' : 'light'; save(); document.documentElement.dataset.mode = S.ui.theme; $$('[data-act="theme"]').forEach((b) => { b.innerHTML = b.hasAttribute('data-label') ? themeLabel() : icon(S.ui.theme === 'light' ? 'moon' : 'sun'); }); }
      else if (k === 'confusing') {
        const tid = act.dataset.t, ti = +act.dataset.i, list = S.confusing[tid] || (S.confusing[tid] = []);
        const on = !list.includes(ti); if (on) list.push(ti); else list.splice(list.indexOf(ti), 1); if (!list.length) delete S.confusing[tid]; save();
        act.classList.toggle('on', on); act.querySelector('.lbl').textContent = on ? 'Marked confusing' : 'Confusing?';
        toast(on ? 'Added to My weak spots' : 'Removed from weak spots', 'flag');
        trackConfusing(tid, ti, on);
      }
      else if (k === 'share') shareProgress();
      else if (k === 'signout') { if (confirm('Sign out of ' + (window.SIGNED_IN_AS || 'your account') + ' on this device?') && window.__signOut) window.__signOut(); }
      else if (k === 'report') openReport(act.dataset.t, +act.dataset.i);
      else if (k === 'tag') { e.preventDefault(); e.stopPropagation(); cycleTag(act.dataset.t); }
      else if (k === 'group') {
        const g = act.closest('.sb-group'); const id = act.dataset.g;
        const closed = !g.classList.contains('closed');
        g.classList.toggle('closed', closed); act.setAttribute('aria-expanded', String(!closed));
        S.ui.closed[id] = closed; save();
      }
      return;
    }
    const b = e.target.closest('.recallable b, .prose b');
    if (b && document.body.classList.contains('recall')) { b.classList.add('shown'); return; }
    const fr = e.target.closest('.fig-frame');
    if (fr && !fr.closest('.missing')) {
      const img = $('img', fr), fig = fr.closest('figure');
      const cap = $('figcaption', fig);
      openLightbox(img.getAttribute('src'), cap ? cap.innerHTML : '', img.alt);
    }
  });
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) { e.preventDefault(); openSearch(); return; }
    if (typing(e) || e.ctrlKey || e.metaKey || e.altKey) return;
    if (document.querySelector('.overlay, .lightbox')) return;
    if (e.key === 'Enter' && e.target.closest && e.target.closest('.fig-frame')) { e.target.click(); return; }
    const k = e.key;
    if (k === '/') { e.preventDefault(); openSearch(); }
    else if (k === '?') openKeys();
    else if (k === 'r' || k === 'R') toggleRecall();
    else if (k === 'f' || k === 'F') toggleFocus();
    else if (k === '[') toggleSidebar();
    else if (k === 'Escape') { if (document.body.classList.contains('focus')) toggleFocus(false); hideSelBar(); closeDrawer(); }
    else if (current && current.view === 'topic' && current.api) {
      if (k === 'ArrowRight') { e.preventDefault(); current.api.next(); }
      else if (k === 'ArrowLeft') { e.preventDefault(); current.api.prev(); }
    }
    if ((k === 'n' || k === 'p') && current && (current.view === 'topic' || current.view === 'summary')) {
      const key = current.view === 'topic' ? current.id : current.mod + '-summary';
      const o = ORDER[orderIdx(key) + (k === 'n' ? 1 : -1)];
      if (o) navigate('#' + o.key);
    }
  });
  function onScroll() {
    const bar = $('.read-bar', topbar); if (!bar) return;
    const show = current && (current.view === 'topic' || current.view === 'summary');
    const max = main.scrollHeight - main.clientHeight;
    bar.style.width = show && max > 40 ? (main.scrollTop / max) * 100 + '%' : '0';
  }
  main.addEventListener('scroll', onScroll, { passive: true });
  main.addEventListener('scroll', () => { if (selBar) hideSelBar(); }, { passive: true });
  function onHistory() {
    const r = parse(location.hash);
    if (current && r.view === current.view) {
      if (r.view === 'topic' && r.id === current.id) { if (r.tab != null && current.api && r.tab !== current.api.tab()) current.api.setTab(r.tab, { scroll: true }); return; }
      if (hashOf(r) === hashOf(current)) return;
    }
    render(r);
  }
  window.addEventListener('popstate', onHistory);
  window.addEventListener('hashchange', onHistory);

  // ================================================================ boot
  buildSidebar();
  buildTopbar();
  let startHash = location.hash;
  if (!startHash || startHash === '#') startHash = '#home';
  render(parse(startHash));
  window.__notes = { TOPICS, QS, CARDS, FIGS, S: () => S };
};
