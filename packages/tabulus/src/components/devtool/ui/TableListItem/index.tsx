import { useCallback } from 'react';

import { Info, TableListItemContainer, TableType } from './styled';

import type { TableListItemProps } from './types';
import type { DevToolTableSourceType } from '@tabulus/types/devtool';
import type { FC } from 'react';

const TABLE_SOURCE: Record<DevToolTableSourceType, string> = {
  manual: 'Manual',
  registry: 'Managed',
};

/** An entry in the table list. */
const TableListItem: FC<TableListItemProps> = ({
  actions,
  id,
  state,
  table,
}: TableListItemProps) => {
  const { getRowCount, source = 'registry' } = table;
  const { selectedTable } = state;

  const handleTableSelect = useCallback(() => {
    actions.setSelectedTable(id);
    actions.setPage('table');
  }, [actions, id]);

  return (
    <TableListItemContainer $selected={selectedTable === id} onClick={handleTableSelect}>
      <Info>
        <TableType $type={source}>{TABLE_SOURCE[source]}</TableType>
        <Info>{id}</Info>
      </Info>
      <Info>{`Rows: ${getRowCount()}`}</Info>
    </TableListItemContainer>
  );
};

export { TableListItem };
export type { TableListItemProps } from './types';
