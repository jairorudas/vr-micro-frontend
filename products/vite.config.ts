import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		federation({
			name: 'productApp',
			filename: 'remoteEntry.js',
			remotes: {
				Host: 'http://localhost:5003/assets/remoteEntry.js',
			},
			exposes: {
				'./Products': './src/App.tsx',
			},
			shared: [
				'react',
				'react-dom',
				'redux',
				'@reduxjs/toolkit',
				'react-redux',
				'pubsub-js',
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
