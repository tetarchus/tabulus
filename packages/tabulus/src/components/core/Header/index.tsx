import cn from 'classnames';
import { useContext } from 'react';

import { CLASSES, ROLES } from '@tabulus/constants';
import { TableManager } from '@tabulus/contexts';

import { Column } from '../Column';

import { HeadersRow, TableHeader } from './styled';

import type { HeaderProps } from './types';
import type { FC } from 'react';

/** The header row for the table, containing all header cells. */
const Header: FC<HeaderProps> = () => {
  //== Context Values =================
  const { renderColumns } = useContext(TableManager);

  //== Component Return ===============
  return (
    <TableHeader className={cn(CLASSES.HEADER.BASE)} role={ROLES.HEADER}>
      <HeadersRow className={CLASSES.HEADER.ROW} role={ROLES.ROW}>
        {renderColumns(columns =>
          // TODO: Remove key cast (it should be of string type?!)
          columns.map(column => <Column key={column.id as string} column={column} />),
        )}
      </HeadersRow>
    </TableHeader>
  );
};

export { Header };
export type { HeaderProps } from './types';
