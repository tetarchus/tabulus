import type { ColumnComponent, ColumnDefinition, RowDataBase } from '@tabulus/types';

const createColumnsFromDefinitions = <RowData extends RowDataBase>(
  columnDefinitions: ColumnDefinition<RowData>[],
): ColumnComponent<RowData>[] =>
  columnDefinitions.map(column => ({ id: column.id, title: column.title }));

export { createColumnsFromDefinitions };
