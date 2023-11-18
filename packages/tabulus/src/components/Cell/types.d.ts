import type { CellType } from '@tabulus/types';
import type { ReactNode } from 'react';

/** Props passed to the Cell component. */
interface CellProps {
  /** The contents of the cell. */
  readonly children?: ReactNode;
  /** Additional classes to pass to the cell. */
  readonly className?: string;
  /** The column ID that the cell belongs to. */
  readonly column: string;
  /** The type of cell. */
  readonly type: CellType;
  /** The cell value to use. */
  readonly value?: string;
}

export type { CellProps };
