import type { CellComponent } from '../cell';
import type { ColumnComponent, ColumnDefinition, ColumnLookup, FullColumnConfig } from '../column';
import type { SimpleRowData } from '../row';
import type { ReactNode } from 'react';

/**
 * Function for returning the data for a Column based on a lookup value.
 */
type FindColumnFunction<RowData extends SimpleRowData> = (
  lookup: ColumnLookup,
) => ColumnComponent<RowData> | undefined;

/**
 * Function for getting the value of a column option for a given column.
 */
type GetColumnOptionFunction<RowData extends SimpleRowData> = <K extends keyof FullColumnConfig>(
  // TODO: Change to a lookup - type needs sorting as resolving to 'any'
  columnId: ColumnDefinition<RowData>['id'],
  option: K,
) => FullColumnConfig[K];

/**
 * Function for getting the value of a column option for a specific (pre-bound) column.
 */
type GetBoundColumnOptionFunction = <K extends keyof FullColumnConfig>(
  option: K,
) => FullColumnConfig[K];

/** Function for rendering the contents of a column header. */
type RenderColumnsFunction<RowData extends SimpleRowData> = (
  renderFunction: (columns: readonly ColumnComponent<RowData>[]) => ReactNode,
) => ReactNode;

/** Function for re-ordering the columns. */
type ReorderColumnsFunction<RowData extends SimpleRowData> = (
  columnId: ColumnComponent<RowData>['id'],
  target: ColumnComponent<RowData>['id'],
  before?: boolean,
) => void;

type RegisterColumnCellFunction<RowData extends SimpleRowData> = (
  columnId: ColumnComponent<RowData>['id'],
  cell: CellComponent<RowData>,
) => void;

export {
  FindColumnFunction,
  GetBoundColumnOptionFunction,
  GetColumnOptionFunction,
  RegisterColumnCellFunction,
  RenderColumnsFunction,
  ReorderColumnsFunction,
};
