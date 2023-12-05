import { useTableManager } from '@tabulus/hooks';
import { ThemeProvider } from '@tabulus/utils';

import type { SimpleRowData } from '@tabulus/types';

/**
 * Accesses the internal {@link TableManager} context and renders the table.
 * @returns The rendered table.
 * @private
 */
const TableRenderer = <RowData extends SimpleRowData>() => {
  const {
    elementRef,
    getColumnCount,
    getColumnOption,
    getComponent,
    getRowCount,
    renderColumns,
    renderRows,
    tableId,
    theme,
  } = useTableManager<RowData>();
  const TableComponent = getComponent('Table');

  return (
    <ThemeProvider theme={theme}>
      <TableComponent
        elementRef={elementRef}
        getColumnCount={getColumnCount}
        getColumnOption={getColumnOption}
        getComponent={getComponent}
        getRowCount={getRowCount}
        renderColumns={renderColumns}
        renderRows={renderRows}
        tableId={tableId}
      />
    </ThemeProvider>
  );
};

export { TableRenderer };
