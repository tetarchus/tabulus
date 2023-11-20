import { TableFooter } from './styled';

import type { FooterProps } from './types';
import type { FC } from 'react';

/** The footer of the table, containing pagination and column calculations. */
const Footer: FC<FooterProps> = () => <TableFooter role='rowgroup' />;

export { Footer };
export type { FooterProps } from './types';
