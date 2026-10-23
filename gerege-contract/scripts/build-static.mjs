// Builds a static copy of the site into dist/ (for GitHub Pages).
//
// 1. Renders every route in configs/routes.php with the PHP CLI into static-src/<route>/index.html
// 2. Bundles those pages with Vite (Tailwind, JS, hashed assets) into dist/
// 3. Adds CNAME (package.json "site.domain") and .nojekyll
//
// Usage: npm run build
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'vite';
import tailwindcss from '@tailwindcss/vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(root, 'static-src');
const outDir = path.join(root, 'dist');
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));

// 1. Render routes with PHP
const routes = [...fs.readFileSync(path.join(root, 'configs/routes.php'), 'utf8')
	.matchAll(/addRoute\('GET', '([^']+)'/g)].map((m) => m[1]);

fs.rmSync(srcDir, { recursive: true, force: true });
const input = {};
for (const route of routes) {
	const php = `$_SERVER['REQUEST_METHOD'] = 'GET'; $_SERVER['REQUEST_URI'] = '${route}'; include 'index.php';`;
	const html = execFileSync('php', ['-r', php], { cwd: root, encoding: 'utf8' }).replaceAll('%BASE%', '');
	if (/<b>(Warning|Fatal error|Notice|Deprecated)<\/b>/.test(html)) throw new Error(`PHP error while rendering ${route}`);

	const file = path.join(srcDir, route === '/' ? '' : route, 'index.html');
	fs.mkdirSync(path.dirname(file), { recursive: true });
	fs.writeFileSync(file, html);
	input[route === '/' ? 'index' : route.slice(1)] = file;
	console.log(`rendered ${route}`);
}

// 2. Bundle with Vite (site.base: sub-path the site is served under, e.g. "/gerege-appstore")
const base = (pkg.site?.base ?? '').replace(/\/$/, '');
await build({
	configFile: false,
	root,
	base: base + '/',
	publicDir: 'public',
	logLevel: 'warn',
	plugins: [tailwindcss()],
	build: { outDir, emptyOutDir: true, assetsDir: 'assets', rollupOptions: { input } },
});

// Vite keeps the static-src/ prefix in the output; move pages to the site root
const built = path.join(outDir, 'static-src');
fs.cpSync(built, outDir, { recursive: true });
fs.rmSync(built, { recursive: true, force: true });
fs.rmSync(srcDir, { recursive: true, force: true });

// Pages, images and nav links are written root-relative ("/trust", "/images/…"); prefix them with the base
if (base) {
	const prefix = (html) => html
		.replace(/(href|src)="\/(?!\/)/g, (m, attr) => `${attr}="${base}/`)
		.replace(/url\('\/(?!\/)/g, `url('${base}/`)
		.replaceAll(`${base}${base}/`, `${base}/`); // Vite already prefixed its own assets
	for (const route of routes) {
		const file = path.join(outDir, route === '/' ? '' : route, 'index.html');
		fs.writeFileSync(file, prefix(fs.readFileSync(file, 'utf8')));
	}
}

// 3. GitHub Pages extras
if (pkg.site?.domain) fs.writeFileSync(path.join(outDir, 'CNAME'), pkg.site.domain + '\n');
fs.writeFileSync(path.join(outDir, '.nojekyll'), '');

console.log(`\ndist/ ready${pkg.site?.url ? ` for ${pkg.site.url}` : ''}`);
