/* Payment gate: UPI-only Razorpay checkout. The notes load only after the server confirms payment. */
(function () {
  'use strict';
  const root = document.getElementById('app');
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  let price = 5000;
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

  // Paid users get everything; everyone else gets Module 2 and sees Modules 3–4 as locked.
  async function start(paid) {
    root.innerHTML = '<div class="gate"><div class="gate-card"><p class="gate-muted">Loading your notes…</p></div></div>';
    try {
      const files = (window.FREE_FILES || []).concat(paid ? window.PAID_FILES || [] : []);
      for (const f of files) await loadScript('data/' + f);
      window.APP_LOCKED = !paid;
      window.__showPaywall = paywall;
      root.innerHTML = '';
      window.__startApp();
    } catch (e) {
      root.innerHTML = `<div class="gate"><div class="gate-card"><h1 class="gate-title">Could not load the notes</h1><p class="gate-muted">${esc(e.message)}. Check your connection and reload.</p></div></div>`;
    }
  }

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
            <p><b>Works on 1 phone + 1 laptop/PC only.</b> One payment unlocks one phone and one computer. A second phone or a second PC won't open with the same payment.</p>
          </div>
          <button class="btn primary gate-pay" id="gate-pay">Pay ₹${rs} with UPI</button>
          <p class="gate-msg" id="gate-msg" role="alert">${msg ? esc(msg) : ''}</p>
          <p class="gate-muted gate-small">Google Pay, PhonePe, Paytm, BHIM or any UPI ID. After paying, access is saved in this browser. To open it on your other device (your phone or your PC), or after clearing cookies, use <b>the phone number you paid with</b>.</p>
          <details class="gate-restore">
            <summary>Already paid? Restore access</summary>
            <form id="gate-form">
              <label>Phone number you paid with<input id="gate-phone" inputmode="numeric" placeholder="10-digit number" autocomplete="tel" required></label>
              <label>Payment ID <span class="gate-muted">(optional)</span><input id="gate-pid" placeholder="pay_XXXXXXXXXXXXXX" autocomplete="off"></label>
              <button class="btn" type="submit">Restore access</button>
            </form>
          </details>
          <p style="margin-top:22px"><a class="btn ghost" href="./" id="gate-back">← Back to the free Module 2</a></p>
        </div>
      </div>`;
    const payBtn = document.getElementById('gate-pay'), out = document.getElementById('gate-msg');
    const say = (t) => { out.textContent = t; };
    payBtn.addEventListener('click', async () => {
      payBtn.disabled = true; say('Opening UPI checkout…');
      try {
        await loadScript('https://checkout.razorpay.com/v1/checkout.js');
        const o = await api('/api/create-order', {});
        const rzp = new window.Razorpay({
          key: o.keyId, order_id: o.orderId, amount: o.amount, currency: o.currency,
          name: 'BACHY105 Notes', description: 'Full access to the notes',
          notes: { product: 'bachy105-notes' },
          theme: { color: '#151517' },
          config: { display: {
            blocks: { upi: { name: 'Pay using UPI', instruments: [{ method: 'upi' }] } },
            sequence: ['block.upi'],
            preferences: { show_default_blocks: false },
          } },
          handler: async (resp) => {
            say('Payment received. Confirming…');
            try { await api('/api/verify-payment', Object.assign({ deviceId: deviceId() }, resp)); say('Unlocked. Loading everything…'); history.replaceState(null, '', location.pathname); location.reload(); }
            catch (e) { say(e.message + ' If money was taken, use "Restore access" with your payment ID: ' + resp.razorpay_payment_id); payBtn.disabled = false; }
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
      try { await api('/api/restore', { deviceId: deviceId(), paymentId: document.getElementById('gate-pid').value.trim(), phone: document.getElementById('gate-phone').value }); say('Access restored.'); history.replaceState(null, '', location.pathname); location.reload(); }
      catch (err) { say(err.message); }
    });
  }

  (async () => {
    try {
      const s = await api('/api/session');
      price = s.price || price;
      start(!!s.paid);
    } catch (e) { start(false); }
  })();
})();
