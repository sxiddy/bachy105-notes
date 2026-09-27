// GET /api/session -> { user, paid, modules, owner, price, keyId, banner, googleClientId, domain }
//   user: the signed-in student's email (null = show the sign-in screen)
//   modules: null = every paid module; otherwise the module ids a single-module grant unlocks
const { send, getUser, isOwner, hasAccess, settings, DOMAIN, handle } = require('./_lib');
module.exports = handle(async (req, res) => {
  const [t, cfg] = await Promise.all([hasAccess(req), settings().catch(() => ({ price: undefined, banner: null }))]);
  const u = getUser(req);
  send(res, 200, {
    user: u ? u.e : null, owner: isOwner(req), paid: !!t, modules: t ? t.modules : null, free: !!(t && t.free),
    price: cfg.price, banner: cfg.banner, keyId: process.env.RAZORPAY_KEY_ID || null,
    googleClientId: process.env.GOOGLE_CLIENT_ID || null, domain: DOMAIN,
    devLogin: process.env.DEV_LOGIN === '1' && !process.env.VERCEL, dev: process.env.DEV_BYPASS === '1',
  });
});
