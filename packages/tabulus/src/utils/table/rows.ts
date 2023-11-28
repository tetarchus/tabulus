import type { CellFilter, RowComponent, RowDataBase } from '@tabulus/types';

const getTableRowsCount = <RowData extends RowDataBase>(
  rows: RowComponent<RowData>[],
  filter: CellFilter = 'all',
) => {
  switch (filter) {
    case 'all':
    case 'selected':
    case 'viewport':
    case 'visible':
      return rows.length;
    // No default -- exhaustive
  }
};

const getRowIndexNumber = <RowData extends RowDataBase>(
  columns: RowComponent<RowData>[],
  columnId: string | number,
) => columns.findIndex(column => column.id === columnId);

export { getRowIndexNumber, getTableRowsCount };
