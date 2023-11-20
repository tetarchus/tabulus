import cn from 'classnames';
import { useEffect, useState } from 'react';

import { CLASSES, ROLES } from '@tabulus/constants';
import { objectEntries } from '@tabulus/utils';

import { Cell } from '../Cell';

import { RowWrapper } from './styled';

import type { RowProps } from './types';
import type { FC } from 'react';

/** A single row on the table, representing a line of data. */
const Row: FC<RowProps> = ({ index, row }: RowProps) => {
  //== State ==========================
  const [cells, setCells] = useState(objectEntries(row));

  //== Side Effects ===================
  useEffect(() => setCells(objectEntries(row)), [row]);

  //== Component Return ===============
  return (
    <RowWrapper
      aria-rowindex={index}
      className={cn(CLASSES.ROW.BASE, index % 2 === 0 ? CLASSES.ROW.EVEN : CLASSES.ROW.ODD)}
      role={ROLES.ROW}
    >
      {cells.map(([column, value]) => (
        <Cell
          column={column}
          key={`${column}-${index}`}
          rowIndex={index}
          type='cell'
          value={String(value)}
        />
      ))}
    </RowWrapper>
  );
};

export { Row };
export type { RowProps } from './types';
