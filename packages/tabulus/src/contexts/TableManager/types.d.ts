import type {
  CellCountFunction,
  FindColumnFunction,
  FindRowFunction,
  GetColumnOptionFunction,
  GetComponentFunction,
  RenderColumnsFunction,
  RenderRowsFunction,
  SimpleRowData,
  TabulusProps,
  Theme,
} from '@tabulus/types';
import type { ReactNode, RefObject } from 'react';

/**
 * Props to pass in to the TableManager context provider.
 * @private.
 */
interface TableManagerProps<RowData extends SimpleRowData> extends TabulusProps<RowData> {
  /** The components that will have access to the context. */
  readonly children: ReactNode;
}

/**
 * The return value of the TableManager context for managing a table instance.
 * @private
 */
interface TableManagerReturn<RowData extends SimpleRowData> {
  /** Ref object to pass to the table element. */
  readonly elementRef: RefObject<HTMLDivElement>;
  /** Function for finding the column data based on a lookup value. */
  readonly findColumn: FindColumnFunction<RowData>;
  /** Function for finding the row data based on a lookup value. */
  readonly findRow: FindRowFunction<RowData>;
  /** Function to get the number of columns in the table. */
  readonly getColumnCount: CellCountFunction;
  /** Function for getting the value of an option for a given column. */
  readonly getColumnOption: GetColumnOptionFunction<RowData>;
  /** Function for obtaining the components to render. */
  readonly getComponent: GetComponentFunction<RowData>;
  /** Function to get the number of rows in the table. */
  readonly getRowCount: CellCountFunction;
  /** Whether the TableManager has been initialized and contains valid values. */
  readonly initialized: boolean;
  /** Function for rendering the header columns. */
  readonly renderColumns: RenderColumnsFunction<RowData>;
  /** Function for rendering the table rows. */
  readonly renderRows: RenderRowsFunction<RowData>;
  /** The ID of the table. Used to register/retrieve the table with the registry. */
  readonly tableId: string;
  /** The {@link Theme} object being used for the table. */
  readonly theme: Theme;
}

export type { TableManagerProps, TableManagerReturn };
