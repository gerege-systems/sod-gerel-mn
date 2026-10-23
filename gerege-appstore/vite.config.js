// vite.config.js
import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import usePHP from 'vite-plugin-php';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import { imagetools } from 'vite-imagetools';
import { existsSync } from 'node:fs';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ command }) => {
	const publicBasePath = '/'; // Change if deploying under a sub-path. Must end with a /.

	const base = command === 'serve' ? '/' : publicBasePath;
	const BASE = base.substring(0, base.length - 1);


	return {
		base,
		plugins: [
			imagetools(),
			usePHP({
				entry: [
					'index.php',
					'pages/**/*.php',
					'partials/**/*.php',
				],
				rewriteUrl(requestUrl) {
					const filePath = fileURLToPath(
						new URL('.' + requestUrl.pathname, import.meta.url),
					);
					const publicFilePath = fileURLToPath(
						new URL(
							'./public' + requestUrl.pathname,
							import.meta.url,
						),
					);

					if (
						!requestUrl.pathname.includes('.php') &&
						(existsSync(filePath) || existsSync(publicFilePath))
					) {
						return undefined;
					}

					requestUrl.pathname = 'index.php';

					return requestUrl;
				},
			}),
			ViteEjsPlugin({
				BASE,
			}),
			viteStaticCopy({
				targets: [
					{ src: 'public', dest: '' },
					{ src: 'configs', dest: '', overwrite: false },
					{ src: 'vendor', dest: '' },
				],
				silent: command === 'serve',
			}),
			tailwindcss(),
		],
		define: {
			'BASE': JSON.stringify(BASE),
			'import.meta.env.BASE': JSON.stringify(BASE),
		},
		resolve: {
			alias: {
				'~/': fileURLToPath(new URL('./src/', import.meta.url)),
			},
		},
		publicDir: command === 'build' ? 'raw' : 'public',
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern-compiler',
				},
			},
		},
		server: {
			port: 3002,
			strictPort: true,
		},
		build: {
			assetsDir: 'public',
			emptyOutDir: true,
		},
	};
});