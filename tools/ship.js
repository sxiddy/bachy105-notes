#!/usr/bin/env node
// One command to put changes live: build, QA, commit, push to GitHub, deploy to Cloudflare, then check the live site.
// A git push alone does NOT update bachy105.notix.in; only `wrangler deploy` does. This script never skips that step.
//   npm run ship -- "Commit message"      (message optional if nothing to commit)
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const ROOT = path.join(__dirname, '..');
const SITE = 'https://bachy105.notix.in';
const run = (cmd, opts = {}) => { console.log('\n> ' + cmd); return execSync(cmd, { cwd: ROOT, stdio: opts.capture ? 'pipe' : 'inherit', encoding: 'utf8' }); };

const msg = process.argv.slice(2).join(' ').trim();

run('node tools/build.js');
const qa = run('node tools/qa.js', { capture: true });
process.stdout.write(qa.split('\n').slice(-6).join('\n') + '\n');
if (!/no runtime errors/.test(qa)) { console.error('\nQA failed, not shipping.'); process.exit(1); }

if (run('git status --porcelain', { capture: true }).trim()) {
  if (!msg) { console.error('\nThere are uncommitted changes. Run: npm run ship -- "what changed"'); process.exit(1); }
  run('git add -A');
  fs.writeFileSync(path.join(ROOT, '.git', 'SHIP_MSG'), msg + '\n');
  run('git commit -q -F .git/SHIP_MSG');
}
run('git push origin HEAD');
const branch = run('git rev-parse --abbrev-ref HEAD', { capture: true }).trim();
if (branch !== 'main') run('git push origin HEAD:main');

run('npm run deploy');

// verify: the live page must list the same free bundle (content-hashed) that was just built
const built = fs.readdirSync(path.join(ROOT, 'dist', '_p', 'data')).find((f) => /^free\.[0-9a-f]+\.js$/.test(f));
(async () => {
  for (let i = 0; i < 12; i++) {
    const live = await fetch(SITE + '/js/data-files.js?nc=' + Date.now()).then((r) => r.text()).catch(() => '');
    if (built && live.includes(built)) { console.log(`\nLIVE: ${SITE} is serving ${built}`); return; }
    await new Promise((r) => setTimeout(r, 10000));
  }
  console.error(`\nDeployed, but ${SITE} is not serving ${built} after 2 minutes. Check Cloudflare.`);
  process.exit(1);
})();
