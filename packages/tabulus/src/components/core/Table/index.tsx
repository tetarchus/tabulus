import { CLASSES, ROLES } from '@tabulus/constants';

import { HeaderRenderer, RowsRenderer } from '../../renderers';

import { TableContainer, TablePositioner } from './styled';

import type { TableProps } from './types';
import type { SimpleRowData } from '@tabulus/types';

/**
 * The default Table component for Tabulus.
 * @param param0 {@link TableProps|Props} for the Table.
 * @returns The table, along with a positioning element.
 * @private
 */
const Table = <RowData extends SimpleRowData>({
  elementRef,
  getColumnCount,
  getColumnOption,
  getComponent,
  getRowCount,
  renderColumns,
  renderRows,
  tableId,
}: TableProps<RowData>) => (
  <TablePositioner className={CLASSES.BASE}>
    <TableContainer
      aria-colcount={getColumnCount()}
      aria-rowcount={getRowCount()}
      className={CLASSES.TABLE}
      id={tableId}
      ref={elementRef}
      // TODO: Roles - Grid if interactive, tree if using collapsible data, table otherwise.
      role={ROLES.TABLE}
    >
      {/* Render Header */}
      <HeaderRenderer
        getColumnOption={getColumnOption}
        getComponent={getComponent}
        renderColumns={renderColumns}
      />
      {/* Render Body */}
      <RowsRenderer
        getColumnOption={getColumnOption}
        getComponent={getComponent}
        renderRows={renderRows}
      />
      {/* Render Footer */}
    </TableContainer>
  </TablePositioner>
);

export { Table };
export type { TableProps } from './types';
