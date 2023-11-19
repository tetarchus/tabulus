/** Options to lookup a column in utility functions. */
type ColumnLookup = string;

/**
 * Filter options for columns.
 * - `all`: All available columns, hidden or not.
 * - `selected`: Columns that are currently selected.
 * - `visible`: Columns that are currently visible in the table.
 */
type ColumnFilter = 'all' | 'selected' | 'visible';

export type { ColumnFilter, ColumnLookup };
