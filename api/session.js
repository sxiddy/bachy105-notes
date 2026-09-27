// GET /api/session -> { paid, modules, owner, free, price, keyId, banner }
//   modules: null = every paid module; otherwise the module ids a single-module grant unlocks
const { send, hasAccess, settings, handle } = require('./_lib');
module.exports = handle(async (req, res) => {
  const [t, cfg] = await Promise.all([hasAccess(req), settings().catch(() => ({ price: undefined, banner: null }))]);
  const p = t ? String(t.p) : '';
  send(res, 200, {
    paid: !!t, modules: t ? t.modules : null, owner: p === 'owner', free: p.startsWith('free:'),
    price: cfg.price, banner: cfg.banner, keyId: process.env.RAZORPAY_KEY_ID || null, dev: process.env.DEV_BYPASS === '1',
  });
});
