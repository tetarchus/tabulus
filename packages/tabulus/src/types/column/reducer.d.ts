import type { ColumnComponent } from './component';
import type { ColumnDefinition } from './definition';
import type { CellComponent } from '../cell';
import type { SimpleRowData } from '../row';
import type { ReducerAction } from '../util';

/**
 * The state stored in the Columns reducer.
 */
interface ColumnsReducerState<RowData extends SimpleRowData> {
  /** The column components. */
  columns: ColumnComponent<RowData>[];
  /** The current order of the columns. */
  order: string[];
}

/** Payload for the `reset` action to reset the column data to an initial state. */
interface ColumnsReducerResetActionPayload<RowData extends SimpleRowData> {
  /** Definitions to create the {@link ColumnComponent}s from. */
  definitions: ColumnDefinition<RowData>[];
}

/** Payload for the `reorder` action to reorder the columns. */
interface ColumnsReducerReorderActionPayload<RowData extends SimpleRowData> {
  /** Whether to place `columnId` before the `target` (`true`) or after (`false`). */
  before: boolean;
  // TODO: Change to a lookup?
  /** The ID of the column to move. */
  columnId: ColumnComponent<RowData>['id'];
  // TODO: Change to a lookup?
  /** The ID of the target column that the move references.  */
  target: ColumnComponent<RowData>['id'];
}

/** Payload for the `registerCell` action to register a cell as belonging to the column. */
interface ColumnsReducerRegisterCellActionPayload<RowData extends SimpleRowData> {
  /** The {@link CellComponent} to register. */
  cell: CellComponent<RowData>;
  // TODO: Change to a lookup?
  /** The ID of the column to register to. */
  columnId: ColumnComponent<RowData>['id'];
}

/** Combined ColumnsReducer action types. */
type ColumnsReducerAction<RowData extends SimpleRowData> =
  | ReducerAction<'registerCell', ColumnsReducerRegisterCellActionPayload<RowData>>
  | ReducerAction<'reset', ColumnsReducerResetActionPayload<RowData>>
  | ReducerAction<'reorder', ColumnsReducerReorderActionPayload<RowData>>;

export type { ColumnsReducerAction, ColumnsReducerState };
