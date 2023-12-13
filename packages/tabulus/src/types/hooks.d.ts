import type {
  CellCountFunction,
  FindColumnFunction,
  FindRowFunction,
  GetColumnOptionFunction,
  RegisterColumnCellFunction,
  RenderColumnsFunction,
  RenderRowsFunction,
  ReorderColumnsFunction,
} from './functions';
import type { TabulusCompleteOptions } from './options';
import type { SimpleRowData } from './row';
import type { TabulusProps } from './tabulus';
import type {
  TableManagerProps,
  TableManagerReturn,
  TabulusRegistryReturn,
} from '@tabulus/contexts';

/** Props to pass in to the `useColumnManager` hook. */
interface UseColumnManagerProps<RowData extends SimpleRowData> {
  /** The column definitions passed in on table creation. */
  readonly columns: TableManagerProps<RowData>['columns'];
  /** The finalized options for the table instance. */
  readonly options: TabulusCompleteOptions;
}

/** Value returned from the `useColumnManager` hook. */
interface UseColumnManagerReturn<RowData extends SimpleRowData> {
  /** Function for finding the column data based on a lookup value. */
  readonly findColumn: FindColumnFunction<RowData>;
  /** Function to get the number of columns in the table. */
  readonly getColumnCount: CellCountFunction;
  /** Function for getting the value of an option for a given column. */
  readonly getColumnOption: GetColumnOptionFunction<RowData>;
  /**
   * Function for registering a cell to a column to allow for easy calculation and management
   * of all cells in a column.
   */
  readonly registerColumnCell: RegisterColumnCellFunction<RowData>;
  /** Function for rendering the header columns. */
  readonly renderColumns: RenderColumnsFunction<RowData>;
  /** Function for reordering the table columns. */
  readonly reorderColumns: ReorderColumnsFunction<RowData>;
}

/** Props to pass in to the `useDataManager` hook. */
interface UseDataManagerProps<RowData extends SimpleRowData> {
  /** The table data passed in on table creation. */
  readonly data: TableManagerProps<RowData>['data'];
  /** The finalized options for the table instance. */
  readonly options: TabulusCompleteOptions;
}

/** Value returned from the `useDataManager` hook. */
interface UseDataManagerReturn<RowData extends SimpleRowData> {
  /** Function for finding the row data based on a lookup value. */
  readonly findRow: FindRowFunction<RowData>;
  /** Function to get the number of rows in the table. */
  readonly getRowCount: CellCountFunction;
  /** Function for rendering the table rows. */
  readonly renderRows: RenderRowsFunction<RowData>;
}

/** Props to pass to the `useTabulus` hook. */
interface UseTabulusProps<RowData extends SimpleRowData> extends TabulusProps<RowData> {}

/** Value returned from the `useTabulus` hook. */
interface UseTabulusReturn<RowData extends SimpleRowData> extends TableManagerReturn<RowData> {}

/** Value returned by the `useTabulusRegistry` hook. */
interface UseTabulusRegistryReturn extends Omit<TabulusRegistryReturn, 'tables'> {}

export type {
  UseColumnManagerProps,
  UseColumnManagerReturn,
  UseDataManagerProps,
  UseDataManagerReturn,
  UseTabulusProps,
  UseTabulusRegistryReturn,
  UseTabulusReturn,
};
