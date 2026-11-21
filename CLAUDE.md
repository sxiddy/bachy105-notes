# bachy105-notes

- Live site: https://bachy105.notix.in (Cloudflare Workers). A git push does NOT deploy it.
- To publish any change: `npm run ship -- "message"` (build, QA, commit, push to main, `wrangler deploy`, confirm live).
- Never report a change as live until `npm run ship` prints `LIVE:`.
- `node tools/validate.js --all` has ~128 old errors (missing figure images); compare before/after instead of expecting 0.
