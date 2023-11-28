import { fileURLToPath, URL } from 'node:url';

import { configDefaults, defineConfig } from 'vitest/config';

const viteConfig = defineConfig({
  resolve: {
    alias: [{ find: '@tabulus', replacement: fileURLToPath(new URL('src/', import.meta.url)) }],
  },
  test: {
    ...configDefaults,
    coverage: {
      all: true,
      enabled: true,
      exclude: [
        '**/__tests__/**',
        '**/.storybook/**',
        '**/*.config.*',
        '**/*.d.ts',
        '**/*{.,-}{test,spec}.?(c|m)[jt]s?(x)',
        '**/build/**',
        '**/coverage/**',
        '**/dist/**',
        '**/node_modules/**',
        '**/package.json',
        '**/tsconfig.json',
      ],
      include: ['src/**'],
      provider: 'istanbul',
      reporter: ['clover', 'html-spa', 'json', 'json-summary', 'lcov', 'text'],
    },
    environment: 'jsdom',
    include: ['**/__tests__/**/*.?(c|m)[jt]s?(x)', '**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    outputFile: {
      html: 'coverage/test-summary.html',
      json: 'coverage/test-summary.json',
    },
    reporters: ['default', 'html', 'json'],
    setupFiles: ['@testing-library/react/dont-cleanup-after-each', './src/test/testConfig.ts'],
  },
});

export default viteConfig;
export { viteConfig };
