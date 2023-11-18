import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { createTableOptions } from '@tabulus/utils';

import { TabulusRegistry } from '../TabulusRegistry';

import type { TableManagerProviderProps, TableManagerValue } from './types';
import type { FC } from 'react';

/**
 * Initial value for the TableManager. The `initialized` prop will be set to `false` when the
 * context has not been initialized.
 */
const initialValue: TableManagerValue = {
  columns: [],
  data: [],
  events: {},
  id: '',
  initialized: false,
  options: {},
  rows: [],
};

const TableManager = createContext<TableManagerValue>(initialValue);
TableManager.displayName = 'TableManager';

const TableManagerProvider: FC<TableManagerProviderProps> = ({
  columns: baseColumns,
  data: baseData,
  events: userEvents = {},
  options: tableOptions = {},
  children,
  tableId,
}: TableManagerProviderProps) => {
  const { defaultOptions } = useContext(TabulusRegistry);

  //== State ==========================
  const [id, setId] = useState(tableId);
  const [data, setData] = useState(baseData);
  const [rows, setRows] = useState(baseData); // TODO: This will change
  const [events, setEvents] = useState(userEvents);
  const [columns, setColumns] = useState(baseColumns);
  const [options, setOptions] = useState(createTableOptions(tableOptions, defaultOptions));

  //== Side Effects ===================
  useEffect(() => setId(tableId), [tableId]);
  useEffect(() => setData(baseData), [baseData]);
  useEffect(() => setRows(baseData), [baseData]); // TODO: This will change
  useEffect(() => setEvents(userEvents), [userEvents]);
  useEffect(() => setColumns(baseColumns), [baseColumns]);
  useEffect(
    () => setOptions(createTableOptions(tableOptions, defaultOptions)),
    [defaultOptions, tableOptions],
  );

  //== Memoized Context Value =========
  const managerValue = useMemo(
    () => ({ columns, data, events, id, initialized: true, options, rows }),
    [columns, data, events, id, options, rows],
  );

  console.log('CREATING TABLE MANAGER');

  return <TableManager.Provider value={managerValue}>{children}</TableManager.Provider>;
};

export { TableManager, TableManagerProvider };
export type { TableManagerProviderProps, TableManagerValue } from './types';
