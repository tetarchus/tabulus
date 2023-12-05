import type { SimpleRowData } from '.';
import type { TabulusCompleteOptions } from './options';
import type { TableManagerProps, TableManagerReturn } from '@tabulus/contexts';

/** Props to pass in to the `useColumnManager` hook. */
interface UseColumnManagerProps<RowData extends SimpleRowData> {
  /** The column definitions passed in on table creation. */
  readonly columns: TableManagerProps<RowData>['columns'];
  /** The finalized options for the table instance. */
  readonly options: TabulusCompleteOptions;
}

/** Value returned from the `useColumnManager` hook. */
interface UseColumnManagerReturn<RowData extends SimpleRowData>
  extends Pick<
    TableManagerReturn<RowData>,
    'findColumn' | 'getColumnCount' | 'getColumnOption' | 'renderColumns'
  > {}

/** Props to pass in to the `useDataManager` hook. */
interface UseDataManagerProps<RowData extends SimpleRowData> {
  /** The table data passed in on table creation. */
  readonly data: TableManagerProps<RowData>['data'];
  /** The finalized options for the table instance. */
  readonly options: TabulusCompleteOptions;
}

/** Value returned from the `useDataManager` hook. */
interface UseDataManagerReturn<RowData extends SimpleRowData>
  extends Pick<TableManagerReturn<RowData>, 'findRow' | 'getRowCount' | 'renderRows'> {}

export type {
  UseColumnManagerProps,
  UseColumnManagerReturn,
  UseDataManagerProps,
  UseDataManagerReturn,
};
