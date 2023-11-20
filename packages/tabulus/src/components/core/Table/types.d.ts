import type { TabulusOptions } from '@tabulus/types';
import type { RefObject } from 'react';

/** Props for the Table component. */
interface TableProps {
  /** Optional ref to pass to the main table element. */
  readonly tableRef?: RefObject<HTMLTableElement>;
}

/** Props for the TableWrapper styled component  */
interface TableWrapperProps {
  readonly horizontalAlign: TabulusOptions['horizontalAlign'];
}

export type { TableProps, TableWrapperProps };
