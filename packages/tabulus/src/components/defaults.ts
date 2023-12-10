import { Cell, Column, Row, Table } from '@tabulus/components/core';
import { Footer, Header, TableBody } from '@tabulus/components/styled';

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
