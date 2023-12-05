import { Link } from '@remix-run/react';

import type { HeaderLinkProps } from './types';
import type { FC } from 'react';

/** Link for use in the Header Navigation bar. */
const HeaderLink: FC<HeaderLinkProps> = ({ href, text }: HeaderLinkProps) => (
  <Link className='hover:bg-teal hover:text-dark px-4' to={href}>
    {text}
  </Link>
);

export { HeaderLink };
export type { HeaderLinkProps } from './types';
