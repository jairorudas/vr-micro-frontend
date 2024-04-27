import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		federation({
			name: 'host',
			remotes: {
				headerApp: 'http://127.0.0.1:5001/assets/remoteEntry.js',
				cartApp: 'http://127.0.0.1:5009/assets/remoteEntry.js',
				productApp: 'http://127.0.0.1:5006/assets/remoteEntry.js',
			},
			shared: [
				'react',
				'react-dom',
				'pubsub-js',
				'redux',
				'@reduxjs/toolkit',
				'react-redux',
			],
		}),
	],
	build: {
		modulePreload: false,
		target: 'esnext',
		minify: false,
		cssCodeSplit: false,
	},
});
