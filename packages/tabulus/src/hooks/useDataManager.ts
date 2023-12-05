import { cloneDeep } from 'lodash-es';
import { useCallback, useEffect, useState } from 'react';

import type {
  CellCountFunction,
  FindRowFunction,
  RenderRowsFunction,
  SimpleRowData,
  UseDataManagerProps,
  UseDataManagerReturn,
} from '@tabulus/types';

/**
 * Hook for managing row data within a table.
 * @param param0 {@link UseDataManagerProps|Props} to create row data from.
 * @returns {@link UseDataManagerReturn|Object} containing methods for managing rows/row data.
 * @private
 */
const useDataManager = <RowData extends SimpleRowData>({
  data: baseData, // options,
}: UseDataManagerProps<RowData>): UseDataManagerReturn<RowData> => {
  //== State ==========================
  const [data, setData] = useState(cloneDeep(baseData));
  const [rows, setRows] = useState(data);

  //== Side Effects ===================
  useEffect(() => setData(cloneDeep(baseData)), [baseData]);
  useEffect(() => setRows(data), [data]);

  //== Functions ======================
  const findRow: FindRowFunction<RowData> = useCallback(
    // TODO: Use 'options.indexField' for ID based lookup
    lookup => rows.find(row => row['id'] === lookup),
    [rows],
  );

  const getRowCount: CellCountFunction = useCallback(
    (_filter = 'all') => {
      // TODO: Add different returns based on the filter.
      return rows.length;
    },
    [rows],
  );

  const renderRows: RenderRowsFunction<RowData> = useCallback(
    renderFunction => {
      return renderFunction(rows);
    },
    [rows],
  );

  //== Hook Return ====================
  return {
    findRow,
    getRowCount,
    renderRows,
  };
};

export { useDataManager };
