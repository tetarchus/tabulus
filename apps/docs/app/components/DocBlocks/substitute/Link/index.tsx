import { Link as RemixLink } from '@remix-run/react';

import { logExtraProps } from '../utils';

import type { AnchorHTMLAttributes, DetailedHTMLProps, FC } from 'react';

/** Standard link from generated MDX content. */
const Link: FC<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>> = ({
  children,
  href,
  ...rest
}) => {
  logExtraProps(rest, 'Link');

  return href ? (
    <RemixLink className='text-teal underline' to={href}>
      {children}
    </RemixLink>
  ) : (
    <span>{children}</span>
  );
};

export { Link };
