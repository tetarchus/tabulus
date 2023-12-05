import { CLASSES } from '@tabulus/constants';

import type { RowProps } from '@tabulus/components';
import type { SimpleRowData } from '@tabulus/types';

/**
 * Adds the `even` or `odd` classes based on whether a rows' index is even or odd.
 * @param index The index of the row to add the class to.
 * @returns An odd/even class, depending on the index value.
 */
const addEvenOrOddClass = <RowData extends SimpleRowData>(
  index: RowProps<RowData>['index'],
): string => {
  if (typeof index !== 'number') return '';
  return index % 2 === 0 ? CLASSES.ROW.EVEN : CLASSES.ROW.ODD;
};

export { addEvenOrOddClass };
