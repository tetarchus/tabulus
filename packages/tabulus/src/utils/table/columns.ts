import type { CellFilter, ColumnDefinition, RowDataBase } from '@tabulus/types';

const getTableColumnsCount = <RowData extends RowDataBase>(
  columns: ColumnDefinition<RowData>[],
  filter: CellFilter = 'all',
) => {
  switch (filter) {
    case 'all':
    case 'selected':
    case 'viewport':
    case 'visible':
      return columns.length;
    // No default -- exhaustive
  }
};

const getColumnIndexNumber = <RowData extends RowDataBase>(
  columns: ColumnDefinition<RowData>[],
  columnId: string | number,
) => columns.findIndex(column => column.id === columnId);

export { getColumnIndexNumber, getTableColumnsCount };
