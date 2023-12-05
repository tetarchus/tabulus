import type { TableManagerReturn } from '@tabulus/contexts';
import type { SimpleRowData } from '@tabulus/types';

/** Props for the Header renderer. */
interface HeaderRendererProps<RowData extends SimpleRowData>
  extends Pick<TableManagerReturn<RowData>, 'getColumnOption' | 'getComponent' | 'renderColumns'> {}

export type { HeaderRendererProps };
