import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { useColumnManager, useDataManager } from '@tabulus/hooks';
import { themes } from '@tabulus/theme';
import { createTableComponents, createTableOptions, setTableTheme } from '@tabulus/utils';

import { TabulusRegistryContext } from '../TabulusRegistry';

import type { TableManagerProps, TableManagerReturn } from './types';
import type {
  FindColumnFunction,
  FindRowFunction,
  GetColumnOptionFunction,
  GetComponentFunction,
  SimpleRowData,
} from '@tabulus/types';

// TODO: Move?
//== Placeholder Functions for an empty context
const PLACEHOLDER_COMPONENT_FN = () => null;
const PLACEHOLDER_GET_COL_OPTION_FN = (() => {}) as GetColumnOptionFunction<SimpleRowData>;
const PLACEHOLDER_FIND_COL_FN = (() => {}) as FindColumnFunction<SimpleRowData>;
const PLACEHOLDER_FIND_ROW_FN = (() => {}) as FindRowFunction<SimpleRowData>;

/** The initial value of the context before initialization. */
const initialValue: TableManagerReturn<SimpleRowData> = {
  elementRef: { current: null },
  findColumn: PLACEHOLDER_FIND_COL_FN,
  findRow: PLACEHOLDER_FIND_ROW_FN,
  getColumnCount: () => 0,
  getColumnOption: PLACEHOLDER_GET_COL_OPTION_FN,
  getComponent: () => PLACEHOLDER_COMPONENT_FN,
  getRowCount: () => 0,
  initialized: false,
  renderColumns: () => null,
  renderRows: () => null,
  tableId: '',
  theme: themes.standard,
};

/**
 * Context for providing values and methods to a table instance.
 * @private
 */
const TableManagerContext = createContext<TableManagerReturn<SimpleRowData>>(initialValue);
TableManagerContext.displayName = 'TableManager';

/**
 * Creates a context provider wrapper for a table instance.
 * @param param0 The {@link TableManagerProps} to pass in to the context provider.
 * @returns A context wrapped component tree.
 * @private
 */
const TableManager = <RowData extends SimpleRowData>({
  children,
  columns,
  components: tableComponents,
  data,
  // events,
  options: tableOptions,
  tableId,
}: TableManagerProps<RowData>) => {
  //== Element Ref ====================
  const tableElementRef = useRef<HTMLDivElement>(null);

  //== Registry Data ==================
  const {
    defaultComponents,
    defaultOptions,
    initialized: registryInitialized,
    registerTable,
  } = useContext(TabulusRegistryContext);

  //== State ==========================
  const [options, setOptions] = useState(createTableOptions(defaultOptions, tableOptions));
  const [components, setComponents] = useState(
    createTableComponents(defaultComponents, tableComponents),
  );
  const [theme, setTheme] = useState(setTableTheme(options.theme));

  //== Side Effects ===================
  useEffect(
    () => setOptions(createTableOptions(defaultOptions, tableOptions)),
    [defaultOptions, tableOptions],
  );
  useEffect(
    () => setComponents(createTableComponents(defaultComponents, tableComponents)),
    [defaultComponents, tableComponents],
  );
  useEffect(() => setTheme(setTableTheme(options.theme)), [options.theme]);

  //== Functions ======================
  const getComponent: GetComponentFunction<RowData> = useCallback(
    componentName => components[componentName],
    [components],
  );

  //== Hook Values ====================
  const { findColumn, getColumnCount, getColumnOption, renderColumns } = useColumnManager({
    columns,
    options,
  });
  const { findRow, getRowCount, renderRows } = useDataManager({ data, options });

  //== Manager Value ==================
  const managerValue = useMemo(
    () => ({
      elementRef: tableElementRef,
      findColumn,
      findRow,
      getColumnCount,
      getColumnOption,
      getComponent,
      getRowCount,
      initialized: true,
      renderColumns,
      renderRows,
      tableId,
      theme,
    }),
    [
      findColumn,
      findRow,
      getColumnCount,
      getColumnOption,
      getComponent,
      getRowCount,
      renderColumns,
      renderRows,
      tableId,
      theme,
    ],
  ) satisfies TableManagerReturn<SimpleRowData>;

  //== Table Registration =============
  const registryRef = useRef(managerValue);

  useEffect(() => {
    registryRef.current = managerValue;
  }, [managerValue]);

  useEffect(() => {
    if (registryInitialized) {
      registerTable(tableId, registryRef);
    }
  }, [registerTable, registryInitialized, tableId]);

  //== Provider Return ==============
  return (
    <TableManagerContext.Provider value={managerValue}>{children}</TableManagerContext.Provider>
  );
};

export { TableManager, TableManagerContext };
export type { TableManagerProps, TableManagerReturn } from './types';
