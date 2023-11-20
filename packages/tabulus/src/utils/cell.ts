import type { CellType } from '@tabulus/types';

/**
 * Gets the name of the horizontalAlign column option to use for the cell, based on whether it is
 * a header, or standard cell.
 * @param type The cell type.
 * @returns The horizontalAlign property to use for the cell.
 */
const getHorizontalAlignProperty = (type: CellType): 'headerHorizontalAlign' | 'horizontalAlign' =>
  type === 'header' ? 'headerHorizontalAlign' : 'horizontalAlign';

/**
 * Gets the name of the verticalAlign column option to use for the cell, based on whether it is
 * a header, or standard cell.
 * @param type The cell type.
 * @returns The verticalAlign property to use for the cell.
 */
const getVerticalAlignProperty = (type: CellType): 'headerVerticalAlign' | 'verticalAlign' =>
  type === 'header' ? 'headerVerticalAlign' : 'verticalAlign';

export { getHorizontalAlignProperty, getVerticalAlignProperty };
