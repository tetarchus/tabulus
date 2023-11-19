import type { HorizontalAlign, VerticalAlign } from '../base';

/** Options for columns relating to layout. */
interface ColumnLayoutOptions {
  /**
   * How to align cell content horizontally within the cell.
   * @default 'left'
   */
  horizontalAlign: HorizontalAlign;
  /**
   * How to align cell content vertically within the cell.
   * @default 'center'
   */
  verticalAlign: VerticalAlign;
  /**
   * How to align cell header cell content horizontally within the cell.
   * @default 'left'
   */
  headerHorizontalAlign: HorizontalAlign;
  /**
   * How to align headercell content vertically within the cell.
   * @default 'center'
   */
  headerVerticalAlign: VerticalAlign;
}

export type { ColumnLayoutOptions };
