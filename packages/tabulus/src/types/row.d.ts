import type { CellComponent } from './cell';

/** The default value for row data. Can be overridden with more specific types. */
type RowDataBase = Record<string, unknown>;

/** The definition of a Row within the table. */
interface RowComponent {
  /** The cells that make up the row. */
  cells: CellComponent[];
}

export type { RowComponent, RowDataBase };
