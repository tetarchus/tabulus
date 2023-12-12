import { cloneDeep, isEqual } from 'lodash-es';
import { useCallback, useEffect, useRef } from 'react';

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
  const data = useRef(cloneDeep(baseData));
  const rows = useRef(data.current);

  //== Side Effects ===================
  useEffect(() => {
    const newData = cloneDeep(baseData);
    if (!isEqual(newData, data.current)) {
      data.current = newData;
    }
  }, [baseData]);

  useEffect(() => {
    const newRows = data.current;
    if (!isEqual(newRows, rows.current)) {
      rows.current = newRows;
    }
  }, [data]);

  //== Functions ======================
  const findRow: FindRowFunction<RowData> = useCallback(
    // TODO: Use 'options.indexField' for ID based lookup
    lookup => rows.current.find(row => row['id'] === lookup),
    [rows],
  );

  const getRowCount: CellCountFunction = useCallback(
    (_filter = 'all') => {
      // TODO: Add different returns based on the filter.
      return rows.current.length;
    },
    [rows],
  );

  const renderRows: RenderRowsFunction<RowData> = useCallback(
    renderFunction => {
      return renderFunction(rows.current);
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
