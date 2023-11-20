import { getMDXComponent } from 'mdx-bundler/client/index.js';
import { useMemo } from 'react';

import type { MdxLoaderProps } from './types';
import type { FC } from 'react';

/** Loader for MDX files to display documentation. */
const MdxLoader: FC<MdxLoaderProps> = ({ code, frontmatter }: MdxLoaderProps) => {
  const Mdx = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <h1>{String(frontmatter['title'])} </h1>
      <h1>{String(frontmatter['description'])} </h1>
      <Mdx />
    </>
  );
};

export { MdxLoader };
