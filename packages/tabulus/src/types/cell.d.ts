/**
 * Filter options for table component items (cells/columns or rows).
 * - `all`: All available items, hidden or not.
 * - `selected`: Items that are currently selected.
 * - `viewport`: Items that are currently visible on screen.
 * - `visible`: Items that are currently not-hidden in the table.
 */
type CellFilter = 'all' | 'selected' | 'viewport' | 'visible';

export type { CellFilter };
