import { MDXProvider, useMDXComponents } from '@mdx-js/react';
import { getMDXComponent } from 'mdx-bundler/client/index.js';
import { useMemo } from 'react';

import { Heading, Link } from '../DocBlocks';

import type { MdxLoaderProps } from './types';
import type { FC } from 'react';

/** Config to assist with nested component replacement. */
const MDX_GLOBAL_CONFIG = {
  MdxJsReact: {
    useMDXComponents,
  },
};

/** Loader for MDX files to display documentation. */
const MdxLoader: FC<MdxLoaderProps> = ({ code, frontmatter }: MdxLoaderProps) => {
  const Mdx = useMemo(() => getMDXComponent(code, MDX_GLOBAL_CONFIG), [code]);
  const Title = Heading(1);
  const Subtitle = Heading(3);

  return (
    <MDXProvider
      components={{
        a: Link,
        h1: Heading(1),
        h2: Heading(2),
        h3: Heading(4),
        h4: Heading(5),
        h6: Heading(6),
      }}
    >
      <Title>{String(frontmatter['title'])}</Title>
      <Subtitle>{String(frontmatter['description'] ?? '')}</Subtitle>
      <Mdx />
    </MDXProvider>
  );
};

export { MdxLoader };
export type { MdxLoaderProps } from './types';
