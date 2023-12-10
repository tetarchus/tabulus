import { styled } from '@tabulus/utils';

import type { TableContainerProps, TablePositionerProps } from './types';

/** Wrapper around the table itself. */
const TableContainer = styled.div<TableContainerProps>`
  box-sizing: border-box;
`;

/** Layout wrapper that can allows for positioning the table. */
const TablePositioner = styled.div<TablePositionerProps>`
  border: none;
  box-sizing: border-box;
  overflow: hidden;
  padding: 0 1rem;
  position: relative;
  width: 100%;

  //== Theme Properties ===============
  /* font-size
  */

  //== Layout Properties ==============
  /* ? Layout === 'fitDataTable' => display: inline-block */
`;

export { TableContainer, TablePositioner };
