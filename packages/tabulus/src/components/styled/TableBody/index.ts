import { styled } from '@tabulus/utils';

import type { TableBodyProps } from './types';

/** Container for the main table rows - excluding the header and footer. */
const TableBody = styled.div<TableBodyProps>`
  display: flex;
  flex-direction: column;
`;

export { TableBody };
export type { TableBodyProps } from './types';
