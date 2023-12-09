import { TableListItem } from '../../UI';

import { TableListWrapper } from './styled';

import type { TableListPageProps } from './types';
import type { FC } from 'react';

/** Page for displaying the available tables to view information for. */
const TableListPage: FC<TableListPageProps> = ({ actions, state, tables }: TableListPageProps) => {
  return (
    <TableListWrapper>
      {Object.entries(tables).map(([id, table]) => (
        <TableListItem actions={actions} key={id} id={id} state={state} table={table.current} />
      ))}
    </TableListWrapper>
  );
};

export { TableListPage };
export type { TableListPageProps } from './types';
