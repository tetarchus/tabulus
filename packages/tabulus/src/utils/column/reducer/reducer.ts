import { cloneDeep } from 'lodash-es';

import { createColumnsFromDefinitions, getColumnOrder } from './createColumns';

import type { ColumnsReducerAction, ColumnsReducerState, SimpleRowData } from '@tabulus/types';

/**
 * Reducer function for columns that updates the state based on the dispatched action.
 * @param state The current value of the {@link ColumnsReducerState}.
 * @param action The {@link ColumnsReducerAction} being dispatched.
 * @returns The updated {@link ColumnsReducerState}.
 */
const columnsReducer = <RowData extends SimpleRowData>(
  state: ColumnsReducerState<RowData>,
  action: ColumnsReducerAction<RowData>,
) => {
  const { payload, type } = action;
  const { columns, order } = state;

  switch (type) {
    /** Registers a {@link CellComponent} to the column. */
    case 'registerCell': {
      const { cell, columnId } = payload;
      const newColumns = [...columns];
      const columnIndex = columns.findIndex(column => column.id === columnId);
      const columnComponent = newColumns[columnIndex];

      if (columnComponent) {
        const clonedColumn = cloneDeep(columnComponent);
        const existing = clonedColumn.cells.findIndex(existingCell => existingCell.id === cell.id);
        if (!existing) {
          clonedColumn.cells.push(cell);
        }
        newColumns.splice(columnIndex, 1, clonedColumn);
        return { ...state, columns: newColumns };
      }

      return state;
    }
    /** Reorders the column order. */
    case 'reorder': {
      const { before, columnId, target } = payload;
      const newOrder = [...order];
      const targetIndex = newOrder.indexOf(target);
      const currentIndex = newOrder.indexOf(columnId);
      const currentEntry = newOrder.splice(currentIndex, 1);
      newOrder.splice(before ? targetIndex - 1 : targetIndex, 0, ...currentEntry);
      return { ...state, order: newOrder };
    }
    /** Sets the contents of the reducer based on the passed definitions. */
    case 'reset': {
      const { definitions } = payload;
      const resetColumns = createColumnsFromDefinitions(definitions);
      return { columns: resetColumns, order: getColumnOrder(resetColumns) };
    }
  }
};

export { columnsReducer };
