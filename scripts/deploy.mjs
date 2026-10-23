// Builds the static site and publishes dist/ to the gh-pages branch of package.json "site.repo".
// GitHub Pages serves that branch at "site.domain".
//
// Usage: npm run deploy
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const { site } = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
if (!site?.repo) throw new Error('package.json: "site.repo" is missing');

execFileSync(process.execPath, [path.join(root, 'scripts/build-static.mjs')], { cwd: root, stdio: 'inherit' });

// gh-pages only ever holds the latest build, so it is recreated on every deploy
const git = (...args) => execFileSync('git', args, { cwd: dist, stdio: 'inherit' });
fs.rmSync(path.join(dist, '.git'), { recursive: true, force: true });
git('init', '-q', '-b', 'gh-pages');
git('add', '-A');
git('commit', '-q', '-m', `Deploy ${new Date().toISOString()}`);
git('push', '-q', '--force', site.repo, 'gh-pages');
fs.rmSync(path.join(dist, '.git'), { recursive: true, force: true });

console.log(`\nDeployed → https://${site.domain}`);
