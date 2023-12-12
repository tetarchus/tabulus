import { setBorders, styled } from '@tabulus/utils';

import type { HeaderProps } from './types';
import type { CSSObject } from '@tabulus/utils';

/** Container for the table header row. */
const Header = styled.div<HeaderProps>`
  ${({ theme }): CSSObject => setBorders(theme, 'header')};
`;

export { Header };
export type { HeaderProps } from './types';
