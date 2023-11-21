import { logExtraProps } from '../utils';

import type { DetailedHTMLProps, FC, HTMLAttributes, JSX } from 'react';

const FONT_SIZE_MAP = {
  h1: 'text-7xl',
  h2: 'text-6xl',
  h3: 'text-5xl',
  h4: 'text-4xl',
  h5: 'text-3xl',
  h6: 'text-2xl',
} as const;

/**
 * HOC wrapper around a standard Heading to use as a replacement in MDX content.
 * @param tag The heading level to use for the heading (1-6).
 * @returns A React {@link FC | FunctionalComponent} for the heading.
 */
const Heading = (tag: 1 | 2 | 3 | 4 | 5 | 6) => {
  const HeadingTag = `h${tag}` as keyof JSX.IntrinsicElements;
  const _Heading: FC<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> = ({
    children,
    ...rest
  }) => {
    logExtraProps(rest, 'Heading');

    return (
      <HeadingTag
        className={`font-title ${FONT_SIZE_MAP[HeadingTag as keyof typeof FONT_SIZE_MAP]}`}
      >
        {children}
      </HeadingTag>
    );
  };
  _Heading.displayName = `Heading-${tag}`;

  return _Heading;
};

export { Heading };
