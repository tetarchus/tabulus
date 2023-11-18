import type { RowDataBase } from '@tabulus/types';

/** Props passed to the Row component. */
interface RowProps<RowData extends RowDataBase = RowDataBase> {
  /** The row number. */
  readonly index: number;
  /** The data for the row. */
  readonly row: RowData;
}

export type { RowProps };
