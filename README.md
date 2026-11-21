# BACHY105 Notes

Applied Chemistry (BACHY105) modules 2–4 as a dark, tabbed study app: notes with the slide diagrams, recall mode, highlights, personal notes, search, a scenario-based question bank, quiz, flashcards and formula sheet.

Run locally:

    node tools/build.js
    node tools/serve.js app 4173   # then open http://localhost:4173

- `content/` notes (`chunk-*.js`), questions (`q-*.js`), module summaries (`summary-*.js`)
- `app/` the app (open `app/index.html`); `app/img/` figures
- `tools/` build, validation, figure and QA scripts (`npm install` inside `tools/` for sharp/jsdom)

## Deploy

The live site (https://bachy105.notix.in) is a Cloudflare Worker. **Pushing to GitHub does not update it.** Ship with:

```bash
npm run ship -- "what changed"
```

That builds, runs QA, commits, pushes to `main`, runs `wrangler deploy`, and waits until the live site serves the new bundle.
