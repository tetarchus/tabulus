import { useEffect, useState } from 'react';

import { PageContent } from '../../ui';

import { Label, RawValue, TableDetails, Value } from './styled';

import type { TableMainPageProps } from './types';
import type { FC } from 'react';

/** Page for displaying the details about a specific table. */
const TableMainPage: FC<TableMainPageProps> = ({ /* actions, */ state, tables }) => {
  const [selectedTable, setSelectedTable] = useState(tables[state.selectedTable]?.current ?? null);

  useEffect(() => {
    setSelectedTable(tables[state.selectedTable]?.current ?? null);
  }, [state, tables]);

  return (
    <PageContent>
      {selectedTable ? (
        <>
          <TableDetails>
            <Label>Table ID</Label>
            <Value>{selectedTable.tableId}</Value>
          </TableDetails>
          <TableDetails>
            <Label>Rows</Label>
            <Value>{selectedTable.getRowCount()}</Value>
          </TableDetails>
          {/* TODO: Make collapsible */}
          <RawValue>{JSON.stringify(selectedTable.__raw, null, 2)}</RawValue>
        </>
      ) : (
        <div>{state.selectedTable.trim() === '' ? 'No Table Selected' : 'No Table Data Found'}</div>
      )}
    </PageContent>
  );
};

export { TableMainPage };
export type { TableMainPageProps } from './types';
