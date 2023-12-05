import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
const viteConfig = defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@/',
        replacement: fileURLToPath(new URL('./lib/', import.meta.url)),
      },
      {
        find: '~/',
        replacement: fileURLToPath(new URL('./src/', import.meta.url)),
      },
    ],
    extensions: ['.ts', '.tsx', '.d.ts'],
  },
});

export default viteConfig;
