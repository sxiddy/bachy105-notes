/* Sign-in and payment gate. Only VIT student Google accounts get in; paid modules load only after the server
   confirms payment (or free access) for that account. UPI-only Razorpay checkout. */
(function () {
  'use strict';
  const root = document.getElementById('app');
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  let price = 5000, S = {};
  function deviceId() {
    let d = null;
    try { d = localStorage.getItem('bn_device'); } catch (e) { /* storage blocked */ }
    if (!/^[a-f0-9]{32}$/.test(d || '')) {
      const a = new Uint8Array(16); crypto.getRandomValues(a); d = Array.from(a, (x) => x.toString(16).padStart(2, '0')).join('');
      try { localStorage.setItem('bn_device', d); } catch (e) { /* ignore */ }
    }
    return d;
  }
  const CFG = window.MODULES_CONFIG || [];
  const list = (arr) => (arr.length > 1 ? arr.slice(0, -1).join(', ') + ' and ' + arr[arr.length - 1] : arr[0] || '');
  const freeCount = () => CFG.filter((m) => m.free).length;
  const freeNames = () => list(CFG.filter((m) => m.free).map((m) => 'Module ' + (+m.num)));
  const paidNames = () => list(CFG.filter((m) => !m.free).map((m) => `<b>Module ${+m.num} (${esc(m.title)})</b>`));

  function loadScript(src) {
    return new Promise((ok, bad) => { const s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = () => bad(new Error('Could not load ' + src)); document.body.appendChild(s); });
  }
  async function api(path, data) {
    const r = await fetch(path, data ? { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data), credentials: 'same-origin' } : { credentials: 'same-origin' });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(j.error || 'Request failed (' + r.status + ')');
    return j;
  }
  const reload = () => { history.replaceState(null, '', location.pathname); location.reload(); };
  async function signOut() { try { await api('/api/logout', {}); } catch (e) { /* ignore */ } reload(); }
  window.__signOut = signOut;

  // anonymous funnel counts for the owner: saw the paywall, opened checkout (once per browser session each)
  function funnel(step) {
    try { const k = 'bn_f_' + step; if (sessionStorage.getItem(k)) return; sessionStorage.setItem(k, '1'); } catch (e) { return; }
    try { const b = new Blob([JSON.stringify({ funnel: step })], { type: 'application/json' }); if (!(navigator.sendBeacon && navigator.sendBeacon('/api/track', b))) fetch('/api/track', { method: 'POST', body: b, keepalive: true }).catch(() => {}); } catch (e) { /* ignore */ }
  }

  // ---------------------------------------------------------------- sign in
  function signIn(msg) {
    const domain = S.domain || 'vitstudent.ac.in';
    root.innerHTML = `
      <div class="gate">
        <div class="gate-card">
          <div class="gate-eyebrow">BACHY105 · Applied Chemistry</div>
          <h1 class="gate-title">Applied Chemistry, <span class="gate-u">distilled.</span></h1>
          <p class="gate-lead">Study notes for VIT students. Sign in with your <b>VIT student Google account</b> (…@${esc(domain)}) to continue. ${freeNames()} ${freeCount() === 1 ? 'is' : 'are'} free once you're in.</p>
          <div id="gsi" class="gate-gsi"></div>
          ${S.devLogin ? `<form id="dev-login" class="gate-dev"><label>Local test only: sign in as<input id="dev-email" value="test@${esc(domain)}"></label><button class="btn" type="submit">Sign in (dev)</button></form>` : ''}
          <p class="gate-msg" id="gate-msg" role="alert">${msg ? esc(msg) : ''}</p>
          <p class="gate-muted gate-small">Only …@${esc(domain)} accounts are accepted. Staff and personal Gmail accounts can't sign in. Your account works on 1 phone + 1 laptop/PC. <a href="privacy.html" style="color:inherit">Privacy</a></p>
        </div>
      </div>`;
    const out = document.getElementById('gate-msg');
    const say = (t) => { out.textContent = t; };
    const login = async (data) => {
      say('Signing you in…');
      try { await api('/api/login', Object.assign({ deviceId: deviceId() }, data)); reload(); }
      catch (e) { say(e.message); }
    };
    if (S.devLogin) document.getElementById('dev-login').addEventListener('submit', (e) => { e.preventDefault(); login({ devEmail: document.getElementById('dev-email').value }); });
    if (!S.googleClientId) { if (!S.devLogin) say('Sign-in is not set up yet. Please check back soon.'); return; }
    loadScript('https://accounts.google.com/gsi/client').then(() => {
      const g = window.google && window.google.accounts && window.google.accounts.id;
      if (!g) { say('Google sign-in could not load. Check your connection and reload.'); return; }
      g.initialize({ client_id: S.googleClientId, hd: domain, ux_mode: 'popup', auto_select: false, callback: (r) => login({ credential: r.credential }) });
      g.renderButton(document.getElementById('gsi'), { theme: 'filled_black', size: 'large', shape: 'pill', text: 'signin_with', logo_alignment: 'left', width: 300 });
    }).catch(() => say('Google sign-in could not load. Check your connection (or an ad blocker) and reload.'));
  }

  // ---------------------------------------------------------------- load notes
  // Paid users get everything; a single-module grant loads just those modules; everyone else gets the free
  // modules and sees the rest as locked.
  async function start(paid, modules) {
    root.innerHTML = '<div class="gate"><div class="gate-card"><p class="gate-muted">Loading your notes…</p></div></div>';
    try {
      const FM = window.FILE_MODULE || {};
      const paidFiles = !paid ? [] : (window.PAID_FILES || []).filter((f) => !modules || modules.includes(FM[f]));
      const files = (window.FREE_FILES || []).concat(paidFiles);
      for (const f of files) await loadScript('data/' + f);
      const allPaid = CFG.filter((m) => !m.free).every((m) => !modules || modules.includes(m.id));
      window.APP_LOCKED = !paid || !allPaid;
      window.__showPaywall = paywall;
      root.innerHTML = '';
      window.__startApp();
    } catch (e) {
      root.innerHTML = `<div class="gate"><div class="gate-card"><h1 class="gate-title">Could not load the notes</h1><p class="gate-muted">${esc(e.message)}. Check your connection and reload.</p></div></div>`;
    }
  }

  // ---------------------------------------------------------------- pay
  function paywall(msg) {
    const rs = (price / 100).toFixed(0);
    root.innerHTML = `
      <div class="gate">
        <div class="gate-card">
          <div class="gate-eyebrow">BACHY105 · Applied Chemistry</div>
          <h1 class="gate-title">Applied Chemistry, <span class="gate-u">distilled.</span></h1>
          <p class="gate-lead">${freeNames()} ${freeCount() === 1 ? 'is' : 'are'} free. Unlock ${paidNames()}: their notes, slide diagrams, interactive models, questions, quiz, flashcards and summaries.</p>
          <div class="gate-price"><span class="gate-rs">₹${rs}</span><span class="gate-muted">one-time · pay with any UPI app</span></div>
          <div class="gate-devices" role="note">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="2.5" width="10" height="19" rx="2.2"/><path d="M11 18.5h2"/></svg>
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="1.6"/><path d="M1.5 20h21"/></svg>
            <p><b>Works on 1 phone + 1 laptop/PC only.</b> Your payment is tied to <b>${esc(S.user || '')}</b>. Sign in with it on one phone and one computer. A second phone or a second PC won't open.</p>
          </div>
          <button class="btn primary gate-pay" id="gate-pay">Pay ₹${rs} with UPI</button>
          <p class="gate-msg" id="gate-msg" role="alert">${msg ? esc(msg) : ''}</p>
          <p class="gate-muted gate-small">Google Pay, PhonePe, Paytm, BHIM or any UPI ID. After paying, just sign in with the same student account on your other device.</p>
          <details class="gate-restore">
            <summary>Already paid? Restore access</summary>
            <form id="gate-form">
              <label>Your student email<input id="gate-email" value="${esc(S.user || '')}" readonly aria-readonly="true"></label>
              <label>Payment ID <span class="gate-muted">(only for payments made before sign-in was added)</span><input id="gate-pid" placeholder="pay_XXXXXXXXXXXXXX" autocomplete="off"></label>
              <button class="btn" type="submit">Restore access</button>
            </form>
          </details>
          <p class="gate-signed">Signed in as ${esc(S.user || '')} · <button type="button" class="linkish" id="gate-out">Sign out</button></p>
          <p style="margin-top:14px"><a class="btn ghost" href="./" id="gate-back">← Back to the free ${freeNames()}</a></p>
        </div>
      </div>`;
    const payBtn = document.getElementById('gate-pay'), out = document.getElementById('gate-msg');
    const say = (t) => { out.textContent = t; };
    funnel('paywall');
    document.getElementById('gate-out').addEventListener('click', signOut);
    payBtn.addEventListener('click', async () => {
      payBtn.disabled = true; say('Opening UPI checkout…');
      funnel('start');
      try {
        await loadScript('https://checkout.razorpay.com/v1/checkout.js');
        const o = await api('/api/create-order', {});
        const rzp = new window.Razorpay({
          key: o.keyId, order_id: o.orderId, amount: o.amount, currency: o.currency,
          name: 'BACHY105 Notes', description: 'Full access to the notes',
          prefill: { email: o.email },
          notes: { product: 'bachy105-notes', email: o.email },
          theme: { color: '#151517' },
          config: { display: {
            blocks: { upi: { name: 'Pay using UPI', instruments: [{ method: 'upi' }] } },
            sequence: ['block.upi'],
            preferences: { show_default_blocks: false },
          } },
          handler: async (resp) => {
            say('Payment received. Confirming…');
            try { await api('/api/verify-payment', resp); say('Unlocked. Loading everything…'); reload(); }
            catch (e) { say(e.message + ' If money was taken, use "Restore access" (payment ID: ' + resp.razorpay_payment_id + ').'); payBtn.disabled = false; }
          },
          modal: { ondismiss: () => { say('Payment cancelled.'); payBtn.disabled = false; } },
        });
        rzp.on('payment.failed', (r) => { say('Payment failed: ' + ((r.error && r.error.description) || 'try again')); payBtn.disabled = false; });
        rzp.open();
      } catch (e) { say(e.message); payBtn.disabled = false; }
    });
    document.getElementById('gate-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      say('Checking your payment…');
      try { await api('/api/restore', { paymentId: document.getElementById('gate-pid').value.trim() }); say('Access restored.'); reload(); }
      catch (err) { say(err.message); }
    });
  }

  (async () => {
    try {
      S = await api('/api/session');
      price = S.price || price;
      window.PRICE_RS = Math.round(price / 100);
      window.SITE_BANNER = S.banner || null;
      window.SIGNED_IN_AS = S.user || null;
      if (!S.user && !S.owner) return signIn();
      start(!!S.paid, Array.isArray(S.modules) ? S.modules : null);
    } catch (e) {
      root.innerHTML = `<div class="gate"><div class="gate-card"><h1 class="gate-title">Could not reach the site</h1><p class="gate-muted">${esc(e.message)}. Check your connection and reload.</p></div></div>`;
    }
  })();
})();
