import { setBorders, styled } from '@tabulus/utils';

import type { TableBodyProps } from './types';
import type { CSSObject } from '@tabulus/utils';

/** Container for the main table rows - excluding the header and footer. */
const TableBody = styled.div<TableBodyProps>`
  display: flex;
  flex-direction: column;

  ${({ theme }): CSSObject => setBorders(theme, 'rows')};
`;

export { TableBody };
export type { TableBodyProps } from './types';
