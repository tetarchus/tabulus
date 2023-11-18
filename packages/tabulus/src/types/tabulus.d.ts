import type { ColumnDefinition } from './column';
import type { TabulusOptions } from './options';
import type { RowDataBase } from './row';

interface TabulusProps<RowData extends RowDataBase> {
  /** Definition array for the table columns. */
  readonly columns: Array<ColumnDefinition<RowData>>;
  /** The data to display in the table. */
  readonly data: Array<RowData>;
  /** Unique ID for the table. */
  readonly id: string;
  /** User options for the table to override defaults. */
  readonly options?: Partial<TabulusOptions>;
  // TODO: Write these props
  /** Callbacks to run when events are triggered. */
  readonly events?: Record<string, unknown>;
}

export type { TabulusProps };
