import { getMDXComponent } from 'mdx-bundler/client/index.js';
import { useMemo } from 'react';

import { Heading, Link } from '../DocBlocks';

import type { MdxLoaderProps } from './types';
import type { FC } from 'react';

/** Loader for MDX files to display documentation. */
const MdxLoader: FC<MdxLoaderProps> = ({ code, frontmatter }: MdxLoaderProps) => {
  const Mdx = useMemo(() => getMDXComponent(code), [code]);
  const Title = Heading(1);
  const Subtitle = Heading(3);

  return (
    <div className='mt-10'>
      <Title>{String(frontmatter['title'])}</Title>
      <Subtitle>{String(frontmatter['description'] ?? '')}</Subtitle>
      <Mdx
        components={{
          a: Link,
          h1: Heading(1),
          h2: Heading(2),
          h3: Heading(4),
          h4: Heading(5),
          h6: Heading(6),
        }}
      />
    </div>
  );
};

export { MdxLoader };
export type { MdxLoaderProps } from './types';
