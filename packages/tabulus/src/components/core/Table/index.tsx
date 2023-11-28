import { useContext } from 'react';

import { CLASSES, ROLES } from '@tabulus/constants';
import { TableManager } from '@tabulus/contexts';

import { Footer } from '../Footer';
import { Header } from '../Header';
import { Rows } from '../Rows';

import { TablePositioner, TableWrapper } from './styled';

import type { TableProps } from './types';
import type { FC } from 'react';

/** The main internal table component. */
const Table: FC<TableProps> = () => {
  //== Context Values =================
  const { getColumnsCount, getOption, getRowsCount, id } = useContext(TableManager);

  //== Component Return ===============
  return (
    <TablePositioner className={CLASSES.BASE}>
      <TableWrapper
        aria-colcount={getColumnsCount()} // TODO: Do we want this to be visible rather than all?
        aria-rowcount={getRowsCount()} // TODO: Do we want this to be visible rather than all?
        className={CLASSES.TABLE}
        horizontalAlign={getOption('horizontalAlign')}
        id={id}
        role={ROLES.TABLE}
      >
        <Header />
        <Rows />
        <Footer />
      </TableWrapper>
    </TablePositioner>
  );
};

export { Table };
export type { TableProps } from './types';
