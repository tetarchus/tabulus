import { cloneDeep, isEqual } from 'lodash-es';
import { useCallback, useEffect, useRef } from 'react';

import { createColumnOptions } from '@tabulus/utils';

import type {
  CellCountFunction,
  FindColumnFunction,
  GetColumnOptionFunction,
  RenderColumnsFunction,
  SimpleRowData,
  UseColumnManagerProps,
  UseColumnManagerReturn,
} from '@tabulus/types';

/**
 * Hook for managing column data within a table.
 * @param param0 {@link UseColumnManagerProps|Props} to create column data from.
 * @returns {@link UseColumnManagerReturn|Object} containing methods for managing columns/column data.
 * @private
 */
const useColumnManager = <RowData extends SimpleRowData>({
  columns: baseColumns,
  options,
}: UseColumnManagerProps<RowData>): UseColumnManagerReturn<RowData> => {
  //== State ==========================
  const columnDefinitions = useRef(cloneDeep(baseColumns));
  // TODO: Re-order this based on settings
  const columns = useRef(columnDefinitions.current);

  //== Side Effects ===================
  useEffect(() => {
    const newDefinitions = cloneDeep(baseColumns);
    if (!isEqual(newDefinitions, columnDefinitions.current)) {
      columnDefinitions.current = newDefinitions;
    }
  }, [baseColumns]);
  useEffect(() => {
    const newColumns = columnDefinitions.current;
    if (!isEqual(newColumns, columns.current)) {
      columns.current = newColumns;
    }
  }, [columnDefinitions]);

  //== Functions ======================
  const findColumn: FindColumnFunction<RowData> = useCallback(
    lookup => {
      // TODO: Need to allow other argument type options for lookup
      return columns.current.find(column => column.id === lookup);
    },
    [columns],
  );

  const getColumnCount: CellCountFunction = useCallback(
    (_filter = 'all') => {
      // TODO: Add different returns based on the filter.
      return columns.current.length;
    },
    [columns],
  );

  const getOptionValueForColumn: GetColumnOptionFunction<RowData> = useCallback(
    (columnId, option) => {
      const column = columns.current.find(columnDefinition => columnDefinition.id === columnId);
      const columnOptions = createColumnOptions(options.columnDefaults, column);
      return columnOptions[option];
    },
    [columns, options.columnDefaults],
  );

  const renderColumns: RenderColumnsFunction<RowData> = useCallback(
    renderFunction => {
      return renderFunction(columns.current);
    },
    [columns],
  );

  //== Hook Return ====================
  return {
    findColumn,
    getColumnCount,
    getColumnOption: getOptionValueForColumn,
    renderColumns,
  };
};

export { useColumnManager };
