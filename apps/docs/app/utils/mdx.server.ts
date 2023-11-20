import { bundleMDX } from 'mdx-bundler';

const bundleMdx = (file: string) => bundleMDX({ file, cwd: process.cwd() });

export { bundleMdx };
