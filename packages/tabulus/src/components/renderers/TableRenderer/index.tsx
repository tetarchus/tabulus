import { useTableManager } from '@tabulus/hooks';
import { ThemeProvider } from '@tabulus/utils';

import { HeaderRenderer } from '../HeaderRenderer';
import { RowsRenderer } from '../RowsRenderer';

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
        HeaderRenderer={HeaderRenderer}
        renderColumns={renderColumns}
        renderRows={renderRows}
        RowsRenderer={RowsRenderer}
        tableId={tableId}
      />
    </ThemeProvider>
  );
};

export { TableRenderer };
