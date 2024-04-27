import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'headerApp',
      filename: 'remoteEntry.js',
      remotes: {
        Host: 'http://localhost:5003/assets/remoteEntry.js',
      },
      exposes: {
        './Header': './src/components/Header/index.tsx',
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
