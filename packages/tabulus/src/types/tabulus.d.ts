import type { ColumnDefinition } from './column';
import type { TabulusOptions } from './options';
import type { RowDataBase } from './row';

// TODO: Make the generic types work correctly?
/** Props passed to the Tabulus component as well as contexts and hooks. */
interface TabulusProps<RowData extends RowDataBase = RowDataBase> {
  /** Definition array for the table columns. */
  readonly columns: Array<ColumnDefinition<RowData>>;
  /** The data to display in the table. */
  readonly data: Array<RowData>;
  /** Unique ID for the table. */
  readonly id: string;
  /** User options for the table to override defaults. */
  readonly options?: Partial<TabulusOptions> | undefined;
  // TODO: Write these props
  /** Callbacks to run when events are triggered. */
  readonly events?: Record<string, unknown> | undefined;
}

export type { TabulusProps };
