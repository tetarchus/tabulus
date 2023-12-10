import { useCallback } from 'react';

import { Info, TableListItemContainer, TableType } from './styled';

import type { TableListItemProps } from './types';
import type { FC } from 'react';

const TableListItem: FC<TableListItemProps> = ({
  actions,
  id,
  state,
  table,
}: TableListItemProps) => {
  const { getRowCount } = table;
  const { selectedTable } = state;

  const handleTableSelect = useCallback(() => {
    actions.setSelectedTable(id);
    actions.setPage('table');
  }, [actions, id]);

  return (
    <TableListItemContainer $selected={selectedTable === id} onClick={handleTableSelect}>
      {/* TODO: Make this dynamic */}
      <Info>
        <TableType>Managed</TableType>
        <Info>{id}</Info>
      </Info>
      <Info>{`Rows: ${getRowCount()}`}</Info>
    </TableListItemContainer>
  );
};

export { TableListItem };
export type { TableListItemProps } from './types';
