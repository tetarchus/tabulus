import type { RowLookup, SimpleRowData } from '../row';
import type { ReactNode } from 'react';

/**
 * Function for returning the data for a Row based on a lookup value.
 */
type FindRowFunction<RowData extends SimpleRowData> = (
  lookup: RowLookup,
  // TODO: Is RowData the right return type here?
) => RowData | undefined;

/** Function for rendering the rows of the table. */
type RenderRowsFunction<RowData extends SimpleRowData> = (
  renderFunction: (rows: readonly RowData[]) => ReactNode,
) => ReactNode;

/** Function for rendering a single row. */
type RenderRowFunction<RowData extends SimpleRowData> = (
  renderFunction: (row: readonly RowData) => ReactNode,
) => ReactNode;

export type { FindRowFunction, RenderRowFunction, RenderRowsFunction };
