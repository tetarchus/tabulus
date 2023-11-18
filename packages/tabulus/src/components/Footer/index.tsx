import { TableFooter } from './styled';

import type { FooterProps } from './types';
import type { FC } from 'react';

const Footer: FC<FooterProps> = () => <TableFooter role='rowgroup' />;

export { Footer };
export type { FooterProps } from './types';
