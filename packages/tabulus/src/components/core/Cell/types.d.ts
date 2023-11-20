import type { CellType, FullColumnConfig } from '@tabulus/types';
import type { ReactNode } from 'react';

/** Props passed to the Cell component. */
interface CellProps {
  /** The contents of the cell. */
  readonly children?: ReactNode;
  /** Additional classes to pass to the cell. */
  readonly className?: string;
  // TODO: Can we get a more specific type?
  /** The column ID that the cell belongs to. */
  readonly column: string;
  /** The index of the row that this cell belongs to (or  `'footer'`/`'header'` if part of
   * the footer/header of the table). */
  readonly rowIndex: number | 'footer' | 'header';
  /** The type of cell. */
  readonly type: CellType;
  // TODO: May need to be 'unknown' and use a formatter to stringify
  /** The cell value to use. */
  readonly value?: string;
}

/** Props for the CellContainer styled component. */
interface CellContainerProps
  extends Pick<FullColumnConfig, 'horizontalAlign' | 'verticalAlign' | 'visible'> {}

export type { CellContainerProps, CellProps };
