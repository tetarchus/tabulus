import { styled } from '@tabulus/utils';

import type { TableContainerProps, TablePositionerProps } from './types';

const TableContainer = styled.div<TableContainerProps>``;

const TablePositioner = styled.div<TablePositionerProps>`
  position: relative;
  border: none;
  overflow: hidden;

  width: 100%;

  //== Theme Properties ===============
  /* font-size
  */

  //== Layout Properties ==============
  /* ? Layout === 'fitDataTable' => display: inline-block */
`;

export { TableContainer, TablePositioner };
