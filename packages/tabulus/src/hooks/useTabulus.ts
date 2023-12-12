import { isEqual } from 'lodash-es';
import { useCallback, useContext, useEffect, useMemo, useRef } from 'react';

import { TabulusRegistryContext } from '@tabulus/contexts';
import { createTableComponents, createTableOptions, setTableTheme } from '@tabulus/utils';

import { useColumnManager } from './useColumnManager';
import { useDataManager } from './useDataManager';

import type {
  GetComponentFunction,
  SimpleRowData,
  UseTabulusProps,
  UseTabulusReturn,
} from '@tabulus/types';

const useTabulus = <RowData extends SimpleRowData>({
  columns,
  components: tableComponents,
  data,
  // events,
  options: tableOptions,
  tableId,
}: UseTabulusProps<RowData>): UseTabulusReturn<RowData> => {
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
  const options = useRef(createTableOptions(defaultOptions, tableOptions));
  const components = useRef(createTableComponents(defaultComponents, tableComponents));
  const theme = useRef(setTableTheme(options.current.theme));
  // const [options, setOptions] = useState(createTableOptions(defaultOptions, tableOptions));
  // const [components, setComponents] = useState(
  //   createTableComponents(defaultComponents, tableComponents),
  // );
  // const [theme, setTheme] = useState(setTableTheme(options.current.theme));

  //== Side Effects ===================
  useEffect(() => {
    const newOptions = createTableOptions(defaultOptions, tableOptions);
    if (!isEqual(newOptions, options.current)) {
      options.current = newOptions;
    }
    // setOptions(createTableOptions(defaultOptions, tableOptions));
  }, [defaultOptions, tableOptions]);
  useEffect(() => {
    const newComponents = createTableComponents(defaultComponents, tableComponents);
    if (!isEqual(newComponents, components.current)) {
      components.current = newComponents;
    }
    // setComponents(createTableComponents(defaultComponents, tableComponents));
  }, [defaultComponents, tableComponents]);
  useEffect(() => {
    const newTheme = setTableTheme(options.current.theme);
    if (!isEqual(newTheme, theme.current)) {
      theme.current = newTheme;
    }
  }, []);
  // useEffect(() => setTheme(setTableTheme(options.current.theme)), [options.current.theme]);

  //== Functions ======================
  const getComponent: GetComponentFunction<RowData> = useCallback(
    componentName => components.current[componentName],
    [components],
  );

  //== Hook Values ====================
  const { findColumn, getColumnCount, getColumnOption, renderColumns } = useColumnManager({
    columns,
    options: options.current,
  });
  const { findRow, getRowCount, renderRows } = useDataManager({ data, options: options.current });

  //== Return Value ==================
  const tabulusValue = useMemo(
    () => ({
      __raw: { columns, data, options: options.current },
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
      theme: theme.current,
    }),
    [
      columns,
      data,
      findColumn,
      findRow,
      getColumnCount,
      getColumnOption,
      getComponent,
      getRowCount,
      // options.current,
      renderColumns,
      renderRows,
      tableId,
      theme,
    ],
  ) satisfies UseTabulusReturn<RowData>;

  //== Table Registration =============
  const registryRef = useRef(tabulusValue);

  useEffect(() => {
    registryRef.current = tabulusValue;
  }, [tabulusValue]);

  useEffect(() => {
    if (registryInitialized) {
      registerTable(tableId, registryRef);
    }
  }, [registerTable, registryInitialized, tableId]);

  console.log('useTabulus Renderer', tableId);

  return tabulusValue;
};

export { useTabulus };
