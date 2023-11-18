import { useContext } from 'react';

import { CLASSES, ROLES } from '@tabulus/constants';
import { TableManager } from '@tabulus/contexts';

import { Footer } from '../Footer';
import { Header } from '../Header';
import { Rows } from '../Rows';

import { TableWrapper } from './styled';

import type { TableProps } from './types';
import type { FC } from 'react';

const Table: FC<TableProps> = () => {
  const { id } = useContext(TableManager);

  return (
    <TableWrapper className={CLASSES.BASE} id={id} role={ROLES.TABLE}>
      <Header />
      <Rows />
      <Footer />
    </TableWrapper>
  );
};

export { Table };
export type { TableProps } from './types';
