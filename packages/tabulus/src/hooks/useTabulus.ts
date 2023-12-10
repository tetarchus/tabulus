import { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

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

  //== Return Value ==================
  const tabulusValue = useMemo(
    () => ({
      __raw: { columns, data, options },
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
      columns,
      data,
      findColumn,
      findRow,
      getColumnCount,
      getColumnOption,
      getComponent,
      getRowCount,
      options,
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

  return tabulusValue;
};

export { useTabulus };
