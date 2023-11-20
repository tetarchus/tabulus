import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { defaultColumnConfig } from '@tabulus/config';
import { setTableTheme } from '@tabulus/theme';
import { ThemeProvider, createTableOptions } from '@tabulus/utils';

import { TabulusRegistry } from '../TabulusRegistry';

import type { TableManagerProviderProps, TableManagerValue } from './types';
import type { FullColumnConfig } from '@tabulus/types';
import type { FC } from 'react';

const getOptionPlaceholder = (() => {
  /** Placeholder */
}) as TableManagerValue['getOption'];
const getColumnOptionPlaceholder = (() => {
  /** Placeholder */
}) as TableManagerValue['getColumnOption'];

/**
 * Initial value for the TableManager. The `initialized` prop will be set to `false` when the
 * context has not been initialized.
 */
const initialValue: TableManagerValue = {
  columns: [],
  data: [],
  events: {},
  getColumnCount: () => 0,
  getColumnOption: getColumnOptionPlaceholder,
  getColumnIndex: () => -1,
  getOption: getOptionPlaceholder,
  getRowCount: () => 0,
  getRowIndex: () => -1,
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
  /**
   * Gets the value of an option for the table. If the table does not have an option set, it will
   * fallback to the default values (either custom defaults if set on the `TabulusRegistry`
   * context, or globals set internally.
   */
  const getOption: TableManagerValue['getOption'] = useCallback(
    option => options[option] ?? defaultOptions[option],
    [defaultOptions, options],
  );

  /**
   * Gets the value of an option for a specific column. If the column does not have an option set,
   * it will fallback to default values (either table defaults if set, custom defaults if set
   * on the `TabulusRegistry` context, or globals set internally.
   */
  const getColumnOption: TableManagerValue['getColumnOption'] = useCallback(
    // TODO: Sort out types so we don't need the types here as well as in the manager value types
    <K extends keyof FullColumnConfig>(columnId: string, option: K) => {
      const columnDefinition = columns.find(column => column.id === columnId);
      const columnOption = columnDefinition?.[option];
      if (columnOption != null) {
        // TODO: Sort out types so casting is not necessary (`satisfies` is not working and mentioning `never`)
        return columnOption as FullColumnConfig[K];
      }
      return (
        options.columnDefaults[option] ??
        defaultOptions.columnDefaults[option] ??
        defaultColumnConfig[option]
      );
    },
    [columns, defaultOptions.columnDefaults, options.columnDefaults],
  );

  /**
   * Gets the index of a column from its ID.
   */
  const getColumnIndex: TableManagerValue['getColumnIndex'] = useCallback(
    columnId => columns.findIndex(column => column.id === columnId),
    [columns],
  );

  /**
   * Gets the number of columns for the table. By default this returns the count of all columns,
   * visible or not.
   * @param filter Optional column filter to allow getting this number for a subset of columns.
   */
  const getColumnCount: TableManagerValue['getColumnCount'] = useCallback(
    (filter = 'all') => {
      switch (filter) {
        case 'all':
        case 'selected': // TODO: Write this as a separate return (should get the currently selected columns)
          return columns.length;
        case 'viewport': // TODO: Write this as a separate return (should get the columns current visible in the viewport)
        case 'visible':
          return columns.filter(
            column => (column.visible ?? getOption('columnDefaults').visible) === true,
          ).length;
        // No default -- exhaustive
      }
    },
    [columns, getOption],
  );

  /**
   * Gets the number of rows for the table. By default this returns the count of all rows,
   * visible or not.
   * @param filter Optional row filter to allow getting this number for a subset of rows.
   */
  const getRowCount: TableManagerValue['getRowCount'] = useCallback(
    (filter = 'all') => {
      switch (filter) {
        case 'all':
        case 'selected': // TODO: Write this as a separate return (should get the currently selected columns)
        case 'viewport': // TODO: Write this as a separate return (should get the columns current visible in the viewport)
        case 'visible': // TODO: Write this as a separate return (should get the columns current visible in the table)
          return rows.length;

        // No default -- exhaustive
      }
    },
    [rows],
  );

  /**
   * Gets the index of a row based on the value of its `id` column.
   */
  // TODO: Make this use a custom ID field if set as an option
  const getRowIndex: TableManagerValue['getRowIndex'] = useCallback(
    rowId => rows.findIndex(row => row['id'] === rowId),
    [rows],
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
    () => ({
      columns,
      data,
      events,
      getColumnCount,
      getColumnOption,
      getColumnIndex,
      getOption,
      getRowCount,
      getRowIndex,
      id,
      initialized: true,
      rows,
    }),
    [
      columns,
      data,
      events,
      getColumnCount,
      getColumnOption,
      getColumnIndex,
      getOption,
      getRowCount,
      getRowIndex,
      id,
      rows,
    ],
  );

  return (
    <TableManager.Provider value={managerValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </TableManager.Provider>
  );
};

export { TableManager, TableManagerProvider };
export type { TableManagerProviderProps, TableManagerValue } from './types';
