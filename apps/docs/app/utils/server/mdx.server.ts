import { bundleMDX } from 'mdx-bundler';

/** Global values to assist with nested replacement. */
const globals = {
  '@mdx-js/react': {
    namedExports: ['useMDXComponents'],
    defaultExport: false,
    varName: 'MdxJsReact',
  },
};

/** Re-export/simplify `bundleMDX` as importing directly causes issues with Remix. */
const bundleMdx = (file: string) =>
  bundleMDX({
    cwd: process.cwd(),
    file,
    globals,
    mdxOptions: options => ({ ...options, providerImportSource: '@mdx-js/react' }),
  });

export { bundleMdx };
