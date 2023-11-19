import styled from '@emotion/styled';

import type { TableWrapperProps } from './types';

/**
 * The container for the whole table. Equivalent to a `<table>` in standard HTML tags.
 * @private
 */
const TableWrapper = styled.div<TableWrapperProps>(({ horizontalAlign }) => ({
  border: '1px solid black', // TODO: This should be an option
  width: '50%',

  //== Options ========================
  marginLeft: horizontalAlign === 'left' ? 0 : 'auto',
  marginRight: horizontalAlign === 'right' ? 0 : 'auto',
}));

const TablePositioner = styled.div`
  width: 100%;
`;

export { TablePositioner, TableWrapper };
