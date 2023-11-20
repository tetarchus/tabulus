import type {
  CellFilter,
  ColumnConfig,
  FullColumnConfig,
  RowDataBase,
  TabulusOptions,
  TabulusProps,
} from '@tabulus/types';
import type { ReactNode } from 'react';

/** Value of the `TableManager` context that is provided to consumers. */
interface TableManagerValue<RowData extends RowDataBase = RowDataBase>
  extends Omit<TabulusProps<RowData>, 'options'> {
  /** Function to get the current number of columns in the table. */
  getColumnCount: (filter?: CellFilter) => number;
  // TODO: Type column ID better if there's a more specific type
  /** Gets the column config option for the given column*/
  getColumnOption: <K extends keyof ColumnConfig>(
    columnId: string,
    option: K,
  ) => FullColumnConfig[K];
  /** Gets the index of a column from its ID. */
  getColumnIndex: (columnId: string) => number;
  /** Function to retrieve the value of an option for the table. */
  getOption: <K extends keyof TabulusOptions>(option: K) => TabulusOptions[K];
  /** Function to get the current number of rows in the table. */
  getRowCount: (filter?: CellFilter) => number;
  /** Gets the index of a given row based on the value of its id column. */
  getRowIndex: (rowId: unknown) => number;
  /** Whether the context has been initialised. */
  initialized: boolean;
  // TODO: Correct this type
  /** The rows to display on the table. */
  rows: RowData[];
}

/** Props to be passed in to the Context provider. */
interface TableManagerProviderProps<RowData extends RowDataBase = RowDataBase>
  extends Omit<TabulusProps<RowData>, 'id'> {
  /** Children of the provider that will have access to the context value. */
  readonly children: ReactNode;
  /** The ID of the table this manager belongs to. */
  readonly tableId: string;
}

export type { TableManagerProviderProps, TableManagerValue };
