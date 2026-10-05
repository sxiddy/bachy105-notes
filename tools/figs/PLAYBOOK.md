# Lean figure-redraw playbook (slide figures -> the site's own SVGs)

What did it: all 124 BACHY105 figures redrawn in about 25 points of the 5-hour limit (about 0.25% per figure), against about 3% per figure when each SVG was hand-written. Use this for the next subject website.

## Setup (once per site)
1. Rules live in `figs-svg/README.md` (600-wide viewBox, text >= 22, theme classes `dt/ds/df...`, no fixed colours, stack panels vertically, fix slide mistakes, no scripts/style). Copy it plus `tools/figs/` (`lib.js`, `table.js`, `phone-preview.js`, `PLAYBOOK.md`) and the build wiring (`tools/build.js` copies `figs-svg/<id>.svg`, `api/img.js` stops serving the crops, `app.js` inlines the SVG).
2. Figure list = the figure entries (`id`, `caption`, `alt`) in `content/chunk-*.js`. `node tools/figs/todo.js <from> <count>` prints the ids still missing an SVG (recreate it: scan chunk files for `{ id: '...', ... caption: '...', alt: '...' }`, skip ids that already have `figs-svg/<id>.svg`).

## Per batch (10-14 figures, one session, one limit check before and after)
1. `get_usage`; post "The limit is now at X%"; stop at 85-90%.
2. Print the next 14 captions + alts (`node tools/figs/todo.js 0 14`). Draw from caption/alt alone. Open the source image (`protected/img/<id>.webp`) ONLY when it carries data the text lacks (a table's numbers, a diagram's exact layout). Most figures never need it.
3. Write ONE generator `tools/figs/batchN.js` that writes all the SVGs, using the helpers in `lib.js` (T text, L text lines, A arrow, P path, R rect, C circle, WAVE, mkSvg). Tables: a spec in `tools/figs/tables/<id>.js` + `node tools/figs/table.js figs-svg <ids>`.
4. Reuse: a figure that repeats another (same picture on two slides, or a near-identical one) is a copy of the SVG with a changed label; photos and portraits become a simple labelled schematic or a text card; chemical structures become block schematics with the groups labelled.
5. Check ONCE: `node tools/figs/phone-preview.js "<ABSOLUTE repo path>" "<abs>/tmp/p.html" <7 ids>`, then headless Chrome `--window-size=1210,3300 --force-device-scale-factor=1 --screenshot`, Read the PNG once. Seven figures per screenshot. Fix overlaps/clipped text by editing the generator and regenerate; no second full preview.
6. `node tools/build.js ; node tools/validate.js --all ; node tools/qa.js` (0 errors / "no runtime errors"), update the Progress note in `figs-svg/README.md`, commit locally; push every 2-3 batches (owner's rule) and delete older Vercel deployments after each push.

## Cost rules
- Fresh session per module (the context re-read on every call is the biggest cost; this session ended at ~300k context).
- Skim, don't explore: read only the README rules, the figure entries and one generator as the pattern.
- Look at images rarely; prefer small previews; never view a figure you have not changed.
- Do not use Gemini or other tools to draw: typing long prompts into web UIs loses text and costs more than drawing directly.

## Gotchas
- Bash strips backslashes: write regex code with the Write/Edit tools, not shell heredocs with `\`.
- `phone-preview.js` needs an ABSOLUTE repo path (with forward slashes), or the page is blank.
- Apostrophes inside single-quoted captions in `content/*.js` break the build: write "the fuel-cell reaction", not "a fuel cell's reaction".
- In the generators text with `"` or `<` must be escaped; use Unicode sub/superscripts (H₂O, Zn²⁺, e⁻).
- Never push without the owner's go-ahead unless they set a standing rule (current one: push every 2-3 batches).
- A scheduled autopilot run cannot answer permission prompts: pre-approve its tools with "Run now" once, and use a LOCK file (`.claude/LOCK`, UTC time, ignore if > 3 h old) so two sessions never edit at once.

## Autopilot prompt (for a nightly run)
"Do exactly one batch of 10 figures per run following tools/figs/PLAYBOOK.md; check usage first and stop at 85%; commit locally, never push; when all figures exist, notify and disable this task." Run it every 30 minutes; each run is a fresh, small session.
