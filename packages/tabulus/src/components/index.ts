import { Cell, Column, Footer, Header, Row, Table, TableBody } from '@tabulus/components';

import type { SimpleRowData, TabulusComponents } from '@tabulus/types';

const globalDefaultComponents: TabulusComponents<SimpleRowData> = {
  Cell,
  Column,
  Footer,
  Header,
  Row,
  Table,
  TableBody,
};

export { globalDefaultComponents };
export { Cell, Column, Row, Table, Tabulus } from './core';
export { HeaderRenderer, RowsRenderer, TableRenderer } from './renderers';
export { Footer, Header, TableBody } from './styled';

export type { CellProps, ColumnProps, RowProps, TableProps } from './core';
export type { HeaderRendererProps, RowsRendererProps } from './renderers';
export type { FooterProps, HeaderProps, TableBodyProps } from './styled';
