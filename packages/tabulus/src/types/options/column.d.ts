import type { FullColumnConfig } from '../column';

/** Table options relating to columns that are not column-specific. */
interface TableColumnOptions {
  /**
   * Default {@link FullColumnConfig | ColumnOptions} to use when creating columns.
   * @default @see {@link FullColumnConfig}
   */
  columnDefaults: FullColumnConfig;
}

export type { TableColumnOptions };
