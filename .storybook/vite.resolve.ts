import { fileURLToPath, URL } from 'node:url';

const viteResolveConfig = {
  resolve: {
    alias: [
      { find: '@docs', replacement: fileURLToPath(new URL('../apps/docs/app/', import.meta.url)) },
      {
        find: '@shared',
        replacement: fileURLToPath(new URL('../packages/shared/', import.meta.url)),
      },
      {
        find: '@tabulus',
        replacement: fileURLToPath(new URL('../packages/tabulus/src/', import.meta.url)),
      },
    ],
  },
};

export { viteResolveConfig };
