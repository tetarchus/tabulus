import { cloneDeep } from 'lodash-es';
import { useCallback, useEffect, useState } from 'react';

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
  const [columnDefinitions, setColumnDefinitions] = useState(cloneDeep(baseColumns));
  // TODO: Re-order this based on settings
  const [columns, setColumns] = useState(columnDefinitions);

  //== Side Effects ===================
  useEffect(() => setColumnDefinitions(cloneDeep(baseColumns)), [baseColumns]);
  useEffect(() => setColumns(columnDefinitions), [columnDefinitions]);

  //== Functions ======================
  const findColumn: FindColumnFunction<RowData> = useCallback(
    lookup => {
      // TODO: Need to allow other argument type options for lookup
      return columns.find(column => column.id === lookup);
    },
    [columns],
  );

  const getColumnCount: CellCountFunction = useCallback(
    (_filter = 'all') => {
      // TODO: Add different returns based on the filter.
      return columns.length;
    },
    [columns],
  );

  const getOptionValueForColumn: GetColumnOptionFunction<RowData> = useCallback(
    (columnId, option) => {
      const column = columns.find(columnDefinition => columnDefinition.id === columnId);
      const columnOptions = createColumnOptions(options.columnDefaults, column);
      return columnOptions[option];
    },
    [columns, options.columnDefaults],
  );

  // const getDefinitionForColumn = useCallback(() => {}, []);

  const renderColumns: RenderColumnsFunction<RowData> = useCallback(
    renderFunction => {
      return renderFunction(columns);
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
