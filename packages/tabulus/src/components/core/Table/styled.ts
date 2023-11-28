import styled from '@emotion/styled';

import type { TableWrapperProps } from './types';

/**
 * The container for the whole table. Equivalent to a `<table>` in standard HTML tags.
 * @private
 */
const TableWrapper = styled.div<TableWrapperProps>(({ horizontalAlign }) => ({
  //== Static Properties ==============
  border: '1px solid black', // TODO: This should be an option
  width: '50%',

  //== Dynamic Properties =============
  marginLeft: horizontalAlign === 'left' ? 0 : 'auto',
  marginRight: horizontalAlign === 'right' ? 0 : 'auto',
}));

/** Full width container for the table to allow positioning. */
const TablePositioner = styled.div`
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

export { TablePositioner, TableWrapper };
