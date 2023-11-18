import { useContext } from 'react';

import { CLASSES, ROLES } from '@tabulus/constants';
import { TableManager } from '@tabulus/contexts';

import { Row } from '../Row';

import { TableHolder } from './styled';

import type { RowsProps } from './types';
import type { FC } from 'react';

const Rows: FC<RowsProps> = () => {
  const { rows } = useContext(TableManager);

  return (
    <TableHolder className={CLASSES.BODY.BASE} role={ROLES.BODY}>
      {rows.map((row, index) => (
        <Row index={index} key={index} row={row} />
      ))}
    </TableHolder>
  );
};

export { Rows };
export type { RowsProps } from './types';
