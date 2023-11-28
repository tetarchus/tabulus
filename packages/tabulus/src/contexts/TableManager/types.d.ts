import type {
  ColumnComponent,
  ColumnsRenderFunction,
  FooterRenderFunction,
  GetCellByIdFunction,
  GetCellCountFunction,
  GetColumnOptionFunction,
  GetTableOptionFunction,
  RowComponent,
  RowDataBase,
  RowsRenderFunction,
  TabulusOptions,
  TabulusProps,
  Theme,
} from '@tabulus/types';
import type { ReactNode } from 'react';

interface TableManagerState<RowData extends RowDataBase>
  extends Omit<TabulusProps<RowData>, 'columns' | 'events' | 'options'> {
  // TODO: JSDOC
  columnDefinitions: TabulusProps<RowData>['columns'];
  // TODO: JSDOC
  columns: ColumnComponent<RowData>[];
  // TODO: JSDOC
  events: NonNullable<TabulusProps<RowData>['events']>;
  // TODO: JSDOC
  options: TabulusOptions;
  // TODO: JSDOC
  rows: RowComponent<RowData>[];
  // TODO: JSDOC
  theme: Theme;
}

/** Value of the `TableManager` context that is provided to consumers. */
interface TableManagerValue<RowData extends RowDataBase> {
  /** Function to get the current number of columns in the table. */
  getColumnsCount: GetCellCountFunction;
  /** Gets the column config option for the given column*/
  getColumnOption: GetColumnOptionFunction<RowData>;
  /** Gets the index of a column from its ID. */
  getColumnIndex: GetCellByIdFunction;
  /** Function to retrieve the value of an option for the table. */
  getOption: GetTableOptionFunction;
  /** Function to get the current number of rows in the table. */
  getRowsCount: GetCellCountFunction;
  /** Gets the index of a given row based on the value of its id column. */
  getRowIndex: GetCellByIdFunction;
  /** The ID of the table. */
  id: string;
  /** Whether the context has been initialised. */
  initialized: boolean;
  // TODO: JSDOCS
  renderColumns: ColumnsRenderFunction;
  renderFooter: FooterRenderFunction;
  renderRows: RowsRenderFunction;

  /* 
  - registerEventListener
  - registerChainListener
  - registerConfirmListener
  - dispatchChain
  - dispatchInternal
  - dispatchConfirm
  
  */
}

/** Props to be passed in to the Context provider. */
interface TableManagerProviderProps<RowData extends RowDataBase>
  extends Omit<TabulusProps<RowData>, 'id'> {
  /** Children of the provider that will have access to the context value. */
  readonly children: ReactNode;
  /** The ID of the table this manager belongs to. */
  readonly tableId: TabulusProps<RowData>['id'];
}

export type { TableManagerProviderProps, TableManagerState, TableManagerValue };
