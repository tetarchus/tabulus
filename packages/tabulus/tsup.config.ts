import { defineConfig } from 'tsup';

const isProduction = process.env['NODE_ENV'] === 'production';

const tsupConfig = defineConfig({
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  format: ['esm'],
  minify: isProduction,
  shims: true,
  sourcemap: true,
});

export default tsupConfig;
