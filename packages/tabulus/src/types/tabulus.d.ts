import type { ColumnDefinition } from './column';
import type { TabulusCustomComponents } from './component';
import type { TabulusOptions } from './options';
import type { SimpleRowData } from './row';

/** Props to pass into the table creation components. */
interface TabulusProps<RowData extends SimpleRowData> {
  /** Column definitions for the table, including column-specific options. */
  readonly columns: readonly ColumnDefinition<RowData>[];
  /** Custom components to use for the table. */
  readonly components?: TabulusCustomComponents<RowData> | undefined;
  /** The data to display in the table rows. */
  readonly data: readonly RowData[];
  // TODO: Type and include events
  /** Custom functions to fire when certain events trigger. */
  readonly events?: unknown;
  /** Custom options for this table instance. Options not set will be inherited first from any
   * `TabulusRegistry` context, and then from the global defaults.
   */
  readonly options?: TabulusOptions | undefined;
  /** The ID for the table - used to register with the `TabulusRegistry`. */
  readonly tableId: string;
}

export type { TabulusProps };
