import type { TableManagerReturn } from '@tabulus/contexts';
import type { SimpleRowData } from '@tabulus/types';

/** Props for the Column component. */
interface ColumnProps<RowData extends SimpleRowData>
  extends Pick<TableManagerReturn<RowData>, 'getColumnOption' | 'getComponent'> {
  /** The ID for the column. */
  readonly id: keyof RowData;
  /** The text to display in the column header. */
  readonly title: string;
}

/** Props for the column's Title styled component. */
interface TitleProps {}

export type { ColumnProps, TitleProps };
