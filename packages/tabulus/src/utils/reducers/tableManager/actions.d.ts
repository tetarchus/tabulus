import type { RowDataBase, TabulusOptions, TabulusProps } from '@tabulus/types';

interface TableManagerActionSetColumns<RowData extends RowDataBase> {
  type: 'set_columns';
  columns: TabulusProps<RowData>['columns'];
}

interface TableManagerActionSetData<RowData extends RowDataBase> {
  type: 'set_data';
  data: TabulusProps<RowData>['data'];
}

interface TableManagerActionSetEvents<RowData extends RowDataBase> {
  type: 'set_events';
  events: NonNullable<TabulusProps<RowData>['events']>;
}

interface TableManagerActionSetId<RowData extends RowDataBase> {
  type: 'set_id';
  id: TabulusProps<RowData>['id'];
}

interface TableManagerActionSetOptions<RowData extends RowDataBase> {
  type: 'set_options';
  options: NonNullable<TabulusProps<RowData>['options']>;
  defaultOptions: TabulusOptions;
}

type TableManagerActions<RowData extends RowDataBase> =
  | TableManagerActionSetColumns<RowData>
  | TableManagerActionSetData<RowData>
  | TableManagerActionSetEvents<RowData>
  | TableManagerActionSetId<RowData>
  | TableManagerActionSetOptions<RowData>;

export type { TableManagerActions };
