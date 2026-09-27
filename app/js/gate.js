/* Payment gate: UPI-only Razorpay checkout. The notes load only after the server confirms payment. */
(function () {
  'use strict';
  const root = document.getElementById('app');
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  let price = 5000;

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
          <p class="gate-lead">Module 2 is free. Unlock <b>Module 3 (Functional Materials)</b> and <b>Module 4 (Spectroscopy &amp; XRD)</b>: their notes, slide diagrams, 22 interactive models, questions, quiz, flashcards and summaries.</p>
          <div class="gate-price"><span class="gate-rs">₹${rs}</span><span class="gate-muted">one-time · pay with any UPI app</span></div>
          <button class="btn primary gate-pay" id="gate-pay">Pay ₹${rs} with UPI</button>
          <p class="gate-msg" id="gate-msg" role="alert">${msg ? esc(msg) : ''}</p>
          <p class="gate-muted gate-small">Google Pay, PhonePe, Paytm, BHIM or any UPI ID. After paying, access is saved in this browser. On a new device, or after clearing cookies, restore it with <b>the phone number you paid with</b>.</p>
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
            try { await api('/api/verify-payment', resp); say('Unlocked. Loading Modules 3 and 4…'); history.replaceState(null, '', location.pathname); location.reload(); }
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
      try { await api('/api/restore', { paymentId: document.getElementById('gate-pid').value.trim(), phone: document.getElementById('gate-phone').value }); say('Access restored.'); history.replaceState(null, '', location.pathname); location.reload(); }
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
