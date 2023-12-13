import type { ColumnComponent, SimpleRowData } from '@tabulus/types';

/**
 * Returns an ordered array of {@link ColumnComponent}s based on the given order or IDs.
 * @param columns The columns in any order.
 * @param order An array of column IDs for the order to place the columns in.
 * @returns An array of {@link ColumnComponent}s in the specified order.
 */
const orderColumnComponents = <RowData extends SimpleRowData>(
  columns: ColumnComponent<RowData>[],
  order: string[],
) => {
  const orderedColumns: ColumnComponent<RowData>[] = [];

  for (const id of order) {
    const columnComponent = columns.find(column => column.id === id);
    if (columnComponent) orderedColumns.push(columnComponent);
  }

  return orderedColumns;
};

export { orderColumnComponents };
