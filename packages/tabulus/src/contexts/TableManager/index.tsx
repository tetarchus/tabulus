import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { setTableTheme } from '@tabulus/theme';
import { ThemeProvider, createTableOptions } from '@tabulus/utils';

import { TabulusRegistry } from '../TabulusRegistry';

import type { TableManagerProviderProps, TableManagerValue } from './types';
import type { FC } from 'react';

const getOptionPlaceholder = (() => {
  /** Placeholder */
}) as TableManagerValue['getOption'];

/**
 * Initial value for the TableManager. The `initialized` prop will be set to `false` when the
 * context has not been initialized.
 */
const initialValue: TableManagerValue = {
  columns: [],
  data: [],
  events: {},
  getColumnCount: () => 0,
  getOption: getOptionPlaceholder,
  id: '',
  initialized: false,
  rows: [],
};

/**
 * Context for storing and providing table functions and values to the tables below.
 * This is an internal context for use with our standard components.
 *
 * @private
 */
const TableManager = createContext<TableManagerValue>(initialValue);
TableManager.displayName = 'TableManager';

const defaultEvents = {};
const defaultTableOptions = {};

const TableManagerProvider: FC<TableManagerProviderProps> = ({
  columns: baseColumns,
  data: baseData,
  events: userEvents = defaultEvents,
  options: tableOptions = defaultTableOptions,
  children,
  tableId,
}: TableManagerProviderProps) => {
  const { defaultOptions } = useContext(TabulusRegistry);

  //== Base State =====================
  const [id, setId] = useState(tableId);
  const [data, setData] = useState(baseData);
  const [rows, setRows] = useState(baseData); // TODO: This will change
  const [events, setEvents] = useState(userEvents);
  const [columns, setColumns] = useState(baseColumns);
  const [options, setOptions] = useState(createTableOptions(tableOptions, defaultOptions));

  //== Functions ======================
  const getOption: TableManagerValue['getOption'] = useCallback(
    option => options[option] ?? defaultOptions[option],
    [defaultOptions, options],
  );

  const getColumnCount: TableManagerValue['getColumnCount'] = useCallback(
    (filter = 'all') => {
      switch (filter) {
        case 'all':
        case 'selected': // TODO: Write this as a separate return (should get the currently selected columns)
          return columns.length;
        case 'visible':
          return columns.filter(
            column => (column.visible ?? getOption('columnDefaults').visible) === true,
          ).length;
        // No default -- exhaustive
      }
    },
    [columns, getOption],
  );

  //== Complex State ==================
  // State that relies on the above functions to set its initial value.
  const [theme, setTheme] = useState(setTableTheme(getOption('theme')));

  //== Side Effects ===================
  useEffect(() => setId(tableId), [tableId]);
  useEffect(() => setData(baseData), [baseData]);
  useEffect(() => setRows(baseData), [baseData]); // TODO: This will change
  useEffect(() => setEvents(userEvents), [userEvents]);
  useEffect(() => setColumns(baseColumns), [baseColumns]);
  useEffect(() => setTheme(setTableTheme(getOption('theme'))), [getOption]);
  useEffect(
    () => setOptions(createTableOptions(tableOptions, defaultOptions)),
    [defaultOptions, tableOptions],
  );

  //== Memoized Context Value =========
  const managerValue = useMemo(
    () => ({ columns, data, events, getColumnCount, getOption, id, initialized: true, rows }),
    [columns, data, events, getColumnCount, getOption, id, rows],
  );

  return (
    <TableManager.Provider value={managerValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </TableManager.Provider>
  );
};

export { TableManager, TableManagerProvider };
export type { TableManagerProviderProps, TableManagerValue } from './types';
