import { useCallback, useContext, useEffect, useReducer } from 'react';

import { TabulusRegistryContext } from '@tabulus/contexts';
import {
  getColumnIndexNumber,
  getColumnOptionValue,
  getRowIndexNumber,
  getTableColumnsCount,
  getTableRowsCount,
  setTableManagerStateInitialValue,
  tableManagerInitial,
  tableManagerReducer,
} from '@tabulus/utils';

import type {
  GetCellByIdFunction,
  GetCellCountFunction,
  GetColumnOptionFunction,
  GetTableOptionFunction,
  RowDataBase,
  TabulusProps,
  Theme,
} from '@tabulus/types';

interface UseTabulusProps<RowData extends RowDataBase> extends TabulusProps<RowData> {}

interface UseTabulusReturn<RowData extends RowDataBase> {
  /** Function to get the current number of columns in the table. */
  getColumnsCount: GetCellCountFunction;
  /** Gets the column config option for the given column*/
  getColumnOption: GetColumnOptionFunction<RowData>;
  /** Gets the index of a column from its ID. */
  getColumnIndex: GetCellByIdFunction;
  /** Function to retrieve the value of an option for the table. */
  getOption: GetTableOptionFunction;
  /** Function to get the current number of rows in the table. */
  getRowsCount: GetCellCountFunction;
  /** Gets the index of a given row based on the value of its id column. */
  getRowIndex: GetCellByIdFunction;
  /** The ID for the table. */
  id: string;
  /** The theme object to use for the table. */
  theme: Theme;
}

const DEFAULT_USER_EVENTS = {};
const DEFAULT_TABLE_OPTIONS = {};

const useTabulus = <RowData extends RowDataBase>({
  columns: baseColumns,
  data: baseData,
  events: userEvents = DEFAULT_USER_EVENTS,
  id: tableId,
  options: tableOptions = DEFAULT_TABLE_OPTIONS,
}: UseTabulusProps<RowData>): UseTabulusReturn<RowData> => {
  //== Registry Link ==================
  const { defaultOptions /* initialized, registerTable */ } = useContext(TabulusRegistryContext);

  //== State ==========================
  const [{ columns, id, options, rows, theme }, dispatchState] = useReducer(
    tableManagerReducer<RowData>,
    tableManagerInitial({
      columns: baseColumns,
      data: baseData,
      events: userEvents,
      id: tableId,
      options: tableOptions,
    }),
    setTableManagerStateInitialValue(defaultOptions),
  );
  // TODO: Make use of:  data, events,

  //== Side Effects ===================
  useEffect(() => dispatchState({ type: 'set_id', id: tableId }), [tableId]);
  useEffect(() => dispatchState({ type: 'set_data', data: baseData }), [baseData]);
  useEffect(() => dispatchState({ type: 'set_events', events: userEvents }), [userEvents]);
  useEffect(() => dispatchState({ type: 'set_columns', columns: baseColumns }), [baseColumns]);
  useEffect(
    () => dispatchState({ type: 'set_options', defaultOptions, options: tableOptions }),
    [defaultOptions, tableOptions],
  );

  //== Functions ======================
  const getOption: GetTableOptionFunction = useCallback(option => options[option], [options]);
  const getColumnOption: GetColumnOptionFunction<RowData> = useCallback(
    (columnId, option) =>
      getColumnOptionValue(columns, getOption('columnDefaults'), columnId, option),
    [columns, getOption],
  );
  const getColumnsCount: GetCellCountFunction = useCallback(
    filter => getTableColumnsCount(columns, filter),
    [columns],
  );
  const getRowsCount: GetCellCountFunction = useCallback(
    filter => getTableRowsCount(rows, filter),
    [rows],
  );
  const getColumnIndex: GetCellByIdFunction = useCallback(
    columnId => getColumnIndexNumber(columns, columnId),
    [columns],
  );
  const getRowIndex: GetCellByIdFunction = useCallback(
    rowId => getRowIndexNumber(rows, rowId),
    [rows],
  );

  return {
    getOption,
    getColumnIndex,
    getColumnOption,
    getColumnsCount,
    getRowIndex,
    getRowsCount,
    id,
    theme,
  };
};

export { useTabulus };
