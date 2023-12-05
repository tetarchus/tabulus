import type { TableManagerReturn } from '@tabulus/contexts';
import type { SimpleRowData } from '@tabulus/types';

/** Props for the Table component. */
interface TableProps<RowData extends SimpleRowData>
  extends Omit<TableManagerReturn<RowData>, 'findColumn' | 'findRow' | 'initialized' | 'theme'> {}

/** Props for the TableContainer styled component. */
interface TableContainerProps {}

/** Props for the TablePositioner styled component. */
interface TablePositionerProps {}

export type { TableContainerProps, TablePositionerProps, TableProps };
