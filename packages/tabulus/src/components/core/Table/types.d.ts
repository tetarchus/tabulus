import type { HeaderRendererProps, RowsRendererProps } from '../../renderers';
import type { TableManagerReturn } from '@tabulus/contexts';
import type { SimpleRowData } from '@tabulus/types';
import type { FC } from 'react';

/** Props for the Table component. */
interface TableProps<RowData extends SimpleRowData>
  extends Omit<
    TableManagerReturn<RowData>,
    '__raw' | 'findColumn' | 'findRow' | 'initialized' | 'theme'
  > {
  /** Renderer for the header. */
  HeaderRenderer: FC<HeaderRendererProps>;
  /** Renderer for the rows. */
  RowsRenderer: FC<RowsRendererProps>;
}

/** Props for the TableContainer styled component. */
interface TableContainerProps {}

/** Props for the TablePositioner styled component. */
interface TablePositionerProps {}

export type { TableContainerProps, TablePositionerProps, TableProps };
