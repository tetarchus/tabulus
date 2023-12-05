import type { CellFilter } from '../cell';
import type { ReactNode } from 'react';

/**
 * A function for returning the number of cells matching a given {@link CellFilter}.
 */
type CellCountFunction = (filter?: CellFilter) => number;

/**
 * Function alternative to a cell value that returns the value of the cell.
 */
type CellValueFunction<CellValue = unknown> = () => CellValue | ReactNode;

export type { CellCountFunction, CellValueFunction };
