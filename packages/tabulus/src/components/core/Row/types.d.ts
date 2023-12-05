import type { TableManagerReturn } from '@tabulus/contexts';
import type { RenderRowFunction, RowType, SimpleRowData } from '@tabulus/types';

/** Props for the RowContainer styled component. */
interface RowContainerProps {
  /** The type of row to display. */
  readonly type: RowType;
}

/** Props for the Row component. */
interface RowProps<RowData extends SimpleRowData>
  extends RowContainerProps,
    Pick<TableManagerReturn<RowData>, 'getColumnOption' | 'getComponent'> {
  /** Additional classes passed in from the parent. */
  readonly className?: string | undefined;
  /** The index/row number of the row. */
  readonly index: number;
  /** Function to render the contents of the row. */
  readonly renderRow: RenderRowFunction<RowData>;
}

export type { RowProps, RowContainerProps };
