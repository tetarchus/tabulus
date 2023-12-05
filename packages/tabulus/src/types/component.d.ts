import type { SimpleRowData } from './row';
import type {
  CellProps,
  ColumnProps,
  FooterProps,
  HeaderProps,
  RowProps,
  TableProps,
  TableBodyProps,
} from '@tabulus/components';
import type { FC } from 'react';

/**
 * All components that can be replaced when using Tabulus.
 */
interface TabulusComponents<RowData extends SimpleRowData> {
  Cell: FC<CellProps<RowData>>;
  Column: FC<ColumnProps<RowData>>;
  Footer: FC<FooterProps>;
  Header: FC<HeaderProps>;
  Row: FC<RowProps<RowData>>;
  Table: FC<TableProps<RowData>>;
  TableBody: FC<TableBodyProps>;
}

/**
 * Partial components object to allow custom components for only some of the available
 * replacable components.
 */
interface TabulusCustomComponents<RowData extends SimpleRowData>
  extends Partial<TabulusComponents<RowData>> {}

export type { TabulusComponents, TabulusCustomComponents };
