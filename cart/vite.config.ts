import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		federation({
			name: 'cartApp',
			filename: 'remoteEntry.js',
			exposes: {
				'./Cart': './src/components/Cart/index.tsx',
			},
			shared: ['react', 'react-dom', 'pubsub-js'],
		}),
	],
	build: {
		modulePreload: false,
		target: 'esnext',
		minify: true,
		cssCodeSplit: false,
	},
});
