import { bundleMDX } from 'mdx-bundler';

/** Re-export/simplify `bundleMDX` as importing directly causes issues with Remix. */
const bundleMdx = (file: string) => bundleMDX({ file, cwd: process.cwd() });

export { bundleMdx };
