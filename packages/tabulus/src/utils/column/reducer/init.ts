import { createColumnsFromDefinitions, getColumnOrder } from './createColumns';

import type { ColumnDefinition, ColumnsReducerState, SimpleRowData } from '@tabulus/types';

/**
 * Intialisation function for the columns reducer.
 * @param initialValue The initial value passed in to the `useReducer` call.
 * @returns The initial {@link ColumnsReducerState} to use when intialising the reducer.
 */
const columnsReducerInitialiser = <RowData extends SimpleRowData>(
  initialValue: readonly ColumnDefinition<RowData>[],
): ColumnsReducerState<RowData> => {
  const columns = createColumnsFromDefinitions(initialValue);
  const order = getColumnOrder(columns);

  return { columns, order };
};

export { columnsReducerInitialiser };
