import { useContext } from 'react';

import { CLASSES, ROLES } from '@tabulus/constants';
import { TableManager } from '@tabulus/contexts';

import { Row } from '../Row';

import { TableHolder } from './styled';

import type { RowsProps } from './types';
import type { FC } from 'react';

/** All of the rows of data in the table. */
const Rows: FC<RowsProps> = () => {
  //== Context Values =================
  const { renderRows } = useContext(TableManager);

  //== Component Return ===============
  return (
    <TableHolder className={CLASSES.BODY.BASE} role={ROLES.BODY}>
      {renderRows(rows =>
        rows.map((row, index) => <Row index={index} key={row.id} row={row.data} />),
      )}
    </TableHolder>
  );
};

export { Rows };
export type { RowsProps } from './types';
