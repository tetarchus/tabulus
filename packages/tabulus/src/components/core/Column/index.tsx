import { useCallback } from 'react';

import { CLASSES } from '@tabulus/constants';

import { Title } from './styled';

import type { ColumnProps } from './types';
import type { GetBoundColumnOptionFunction, SimpleRowData } from '@tabulus/types';

/**
 * The default Column component for tabulus. Display a column header with title and controls.
 * @param param0 {@link ColumnProps|Props} for the Column.
 * @returns A column header in a table.
 * @private
 */
const Column = <RowData extends SimpleRowData>({
  getColumnOption,
  getComponent,
  id,
  title,
}: ColumnProps<RowData>) => {
  const Cell = getComponent('Cell');

  const getCurrentColumnOption: GetBoundColumnOptionFunction = useCallback(
    option => getColumnOption(id, option),
    [getColumnOption, id],
  );

  return (
    <Cell
      columnId={id}
      getColumnOption={getCurrentColumnOption}
      rowIndex={1}
      type='header'
      value={() => <Title className={CLASSES.COLUMN.TITLE}>{title}</Title>}
    />
  );
};

export { Column };
export type { ColumnProps } from './types';
