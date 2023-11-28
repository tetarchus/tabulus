import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from 'react';

import {
  ThemeProvider,
  tableManagerReducer,
  getColumnOptionValue,
  setTableManagerStateInitialValue,
  tableManagerInitial,
  getColumnIndexNumber,
  getRowIndexNumber,
  getTableRowsCount,
  getTableColumnsCount,
} from '@tabulus/utils';

import { TabulusRegistryContext } from '../TabulusRegistry';

import type { TableManagerProviderProps, TableManagerValue } from './types';
import type {
  ColumnsRenderFunction,
  FooterRenderFunction,
  GetCellByIdFunction,
  GetCellCountFunction,
  GetColumnOptionFunction,
  GetTableOptionFunction,
  RowDataBase,
  RowsRenderFunction,
  TabulusProps,
} from '@tabulus/types';

// TODO: Move these?
const getOptionPlaceholder = (() => {
  /** Placeholder */
}) as TableManagerValue<RowDataBase>['getOption'];
const getColumnOptionPlaceholder = (() => {
  /** Placeholder */
}) as TableManagerValue<RowDataBase>['getColumnOption'];
const defaultEvents: NonNullable<TabulusProps<RowDataBase>['events']> = {};
const defaultTableOptions: NonNullable<TabulusProps<RowDataBase>['options']> = {};

/**
 * Initial value for the TableManager. The `initialized` prop will be set to `false` when the
 * context has not been initialized.
 */
const initialValue: TableManagerValue<RowDataBase> = {
  // columns: [],
  // data: [],
  // events: {},
  getColumnsCount: () => 0,
  getColumnOption: getColumnOptionPlaceholder,
  getColumnIndex: () => -1,
  getOption: getOptionPlaceholder,
  getRowsCount: () => 0,
  getRowIndex: () => -1,
  renderColumns: () => null,
  renderRows: () => null,
  renderFooter: () => null,
  id: '',
  initialized: false,
  // rows: [],
};

/**
 * Context for storing and providing table functions and values to the tables below.
 * This is an internal context for use with our standard components.
 *
 * @private
 */
const TableManager = createContext<TableManagerValue<RowDataBase>>(initialValue);
TableManager.displayName = 'TableManager';

/**
 * Main internal Table context.
 * @param param0 The props passed in to the TableManager by the `Tabulus` component.
 * @returns The contents of the table wrapped in the context provider to allow passing down of data.
 *
 * @private
 */
const TableManagerProvider = <RowData extends RowDataBase>({
  columns: baseColumns,
  data: baseData,
  events: userEvents = defaultEvents,
  options: tableOptions = defaultTableOptions,
  children,
  tableId,
}: TableManagerProviderProps<RowData>) => {
  //== Registry Link ==================
  const { defaultOptions, initialized, registerTable } = useContext(TabulusRegistryContext);

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
  // TODO: Make use of: data, events

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
  const renderColumns: ColumnsRenderFunction = useCallback(
    renderFunction => renderFunction(columns),
    [columns],
  );
  const renderRows: RowsRenderFunction = useCallback(
    renderFunction => renderFunction(rows),
    [rows],
  );
  const renderFooter: FooterRenderFunction = useCallback(renderFunction => renderFunction(), []);

  //== Memoized Context Value =========
  const managerValue = useMemo(
    () =>
      ({
        getColumnsCount,
        getColumnOption,
        getColumnIndex,
        getOption,
        getRowsCount,
        getRowIndex,
        id,
        initialized: true,
        renderColumns,
        renderFooter,
        renderRows,
      }) satisfies TableManagerValue<RowData>,
    [
      getColumnsCount,
      getColumnOption,
      getColumnIndex,
      getOption,
      getRowsCount,
      getRowIndex,
      id,
      renderColumns,
      renderFooter,
      renderRows,
    ],
  );

  //== Registration ===================
  const tableRef = useRef<TableManagerValue<RowData>>(managerValue);

  useEffect(() => {
    tableRef.current = managerValue;
  }, [managerValue]);

  useEffect(() => {
    if (initialized) {
      registerTable<RowData>(id, tableRef);
    }
  }, [id, initialized, registerTable]);

  //== Provider =======================
  return (
    <TableManager.Provider value={managerValue as TableManagerValue<RowDataBase>}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </TableManager.Provider>
  );
};

export { TableManager, TableManagerProvider };
export type { TableManagerProviderProps, TableManagerState, TableManagerValue } from './types';
