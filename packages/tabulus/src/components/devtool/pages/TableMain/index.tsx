import { useEffect, useState } from 'react';

import { PageContent } from '../../ui';

import type { TableMainPageProps } from './types';
import type { FC } from 'react';

/** Page for displaying the details about a specific table. */
const TableMainPage: FC<TableMainPageProps> = ({ /* actions, */ state, tables }) => {
  const [selectedTable, setSelectedTable] = useState(tables[state.selectedTable] ?? null);

  useEffect(() => {
    setSelectedTable(tables[state.selectedTable] ?? null);
  }, [state, tables]);

  return <PageContent>{selectedTable?.current.tableId}</PageContent>;
};

export { TableMainPage };
export type { TableMainPageProps } from './types';
