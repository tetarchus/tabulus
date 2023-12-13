import type { FullColumnConfig } from '../column';

/** Table options relating to columns that are not column-specific. */
interface TableColumnOptions {
  /**
   * Default {@link FullColumnConfig | ColumnOptions} to use when creating columns.
   * @default @see {@link FullColumnConfig}
   */
  columnDefaults: FullColumnConfig;
  /**
   * Whether to allow the user to change the column order by clicking and dragging.
   * @default false
   */
  movableColumns: boolean;
}

export type { TableColumnOptions };
