import type { CellComponent, FullColumnConfig } from '@tabulus/types';
import type { ReactNode } from 'react';

/** Props passed to the Cell component. */
interface CellProps {
  /** The contents of the cell. */
  readonly children?: ReactNode;
  /** Additional classes to pass to the cell. */
  readonly className?: string;
  /** The component data for the cell. */
  readonly cell: CellComponent;
}

/** Props for the CellContainer styled component. */
interface CellContainerProps
  extends Pick<FullColumnConfig, 'horizontalAlign' | 'verticalAlign' | 'visible'> {}

export type { CellContainerProps, CellProps };
