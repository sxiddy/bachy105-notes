// POST /api/restore { paymentId? } -> "Already paid? Restore access" for the signed-in student.
//   Without a payment ID: looks through recent Razorpay payments for a completed one made from this student account.
//   With a payment ID: also unlocks a payment made before sign-in existed (its order has no email). Each such
//   payment can be claimed by one account only (hash "claimed": payment id -> email).
const { send, body, razorpay, checkPayment, isOurs, recordPaid, normEmail, getUser, hasAccess, handle } = require('./_lib');
const store = require('./_store');
const PAGES = 20; // up to 2,000 recent payments scanned (100 per page)

async function findByEmail(email) {
  const from = Math.floor(Date.now() / 1000) - 400 * 24 * 3600;
  for (let page = 0; page < PAGES; page++) {
    const list = await razorpay('GET', `/payments?from=${from}&count=100&skip=${page * 100}`);
    const items = list.items || [];
    const hit = items.find((p) => isOurs(p) && normEmail((p.notes || {}).email) === email);
    if (hit) return hit.id;
    if (items.length < 100) break;
  }
  return null;
}

module.exports = handle(async (req, res) => {
  if (req.method !== 'POST') return send(res, 405, { error: 'POST only' });
  const u = getUser(req);
  if (!u) return send(res, 401, { error: 'Please sign in with your VIT student account first.' });
  if (await hasAccess(req)) return send(res, 200, { ok: true, already: true });
  const b = await body(req);
  const given = String(b.paymentId || '').trim();

  const pid = given || await findByEmail(u.e);
  if (!pid) return send(res, 404, { error: `No completed payment found for ${u.e}. If you paid before sign-in was added, enter your payment ID (it starts with pay_).` });
  let chk;
  try { chk = await checkPayment(pid); } // confirms UPI, our order, captured; newer orders carry the email
  catch (e) { if (given && e.status !== 401) return send(res, 404, { error: 'No payment found with that ID. Check it in your UPI app or Razorpay receipt (it starts with pay_).' }); throw e; }
  if (!chk.ok) return send(res, 402, { error: chk.why });

  if (chk.email) {
    if (chk.email !== u.e) return send(res, 403, { error: 'That payment belongs to a different student account.' });
  } else {
    // an older payment (made with a phone number): the first student account to claim it keeps it
    const [, owner] = await store.pipeline([['HSETNX', 'claimed', pid, u.e], ['HGET', 'claimed', pid]]);
    if (owner !== u.e) return send(res, 403, { error: 'That payment ID has already been used by another student account.' });
  }
  await recordPaid(u.e, chk.payment);
  send(res, 200, { ok: true });
});
