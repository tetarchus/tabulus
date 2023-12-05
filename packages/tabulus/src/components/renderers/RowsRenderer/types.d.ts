import type { TableManagerReturn } from '@tabulus/contexts';
import type { SimpleRowData } from '@tabulus/types';

/** Props for the Rows renderer. */
interface RowsRendererProps<RowData extends SimpleRowData>
  extends Pick<TableManagerReturn<RowData>, 'getColumnOption' | 'getComponent' | 'renderRows'> {}

export type { RowsRendererProps };
