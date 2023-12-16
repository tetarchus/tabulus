import type { ColumnDefinition } from './column';
import type { SimpleRowData } from './row';
import type { RefObject } from 'react';

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

/** Definition for a Cell component including additional data for cell management. */
interface CellComponent<RowData extends SimpleRowData> {
  /** The ID of the column that the cell belongs to. */
  columnId: ColumnDefinition<RowData>['id'];
  /** A unique ID for the cell consisting of the column ID and Row ID. */
  // TODO: Type better?
  id: string;
  /** The ID for the row that the cell belongs to. */
  // TODO: Type better?
  rowId: string;
  /** A ref to the cell's DOM element. */
  elementRef: RefObject<HTMLDivElement>;
}

export { CellComponent, CellFilter, CellType };
