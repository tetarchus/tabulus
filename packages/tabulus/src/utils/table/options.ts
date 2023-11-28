import type {
  ColumnComponent,
  ColumnDefinition,
  FullColumnConfig,
  RowDataBase,
} from '@tabulus/types';

const getColumnOptionValue = <RowData extends RowDataBase, K extends keyof FullColumnConfig>(
  columns: ColumnDefinition<RowData>[],
  columnDefaults: FullColumnConfig,
  columnId: ColumnComponent<RowData>['id'],
  option: K,
) => {
  const columnDefinition = columns.find(column => column.id === columnId);
  // TODO: Can we do this without having to force-cast?
  return (
    (columnDefinition?.[option] as FullColumnConfig[typeof option] | undefined) ??
    columnDefaults[option]
  );
};

export { getColumnOptionValue };
