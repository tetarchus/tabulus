import type { ColumnComponent, RowDataBase } from '.';

/** Type of cell represented by a Cell component. */
type CellType = 'cell' | 'header';

/**
 * Filter options for table component items (cells/columns or rows).
 * - `all`: All available items, hidden or not.
 * - `selected`: Items that are currently selected.
 * - `viewport`: Items that are currently visible on screen.
 * - `visible`: Items that are currently not-hidden in the table.
 */
type CellFilter = 'all' | 'selected' | 'viewport' | 'visible';

/** The props passed down to a Cell component. */
interface CellComponent<RowData extends RowDataBase = RowDataBase> {
  /** The column ID that the cell belongs to. */
  readonly column: ColumnComponent<RowData>['id'];
  /** The index of the row that this cell belongs to (or  `'footer'`/`'header'` if part of
   * the footer/header of the table). */
  readonly rowIndex: number | 'footer' | 'header';
  /** The type of cell. */
  readonly type: CellType;
  // TODO: May need to be 'unknown' and use a formatter to stringify
  /** The cell value to use. */
  readonly value?: string;
}

export type { CellComponent, CellFilter, CellType };
