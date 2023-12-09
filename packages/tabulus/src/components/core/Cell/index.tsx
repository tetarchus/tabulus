import { useMemo } from 'react';

import { ROLES } from '@tabulus/constants';
import {
  getHorizontalAlignPropertyName,
  getVerticalAlignPropertyName,
  isReactComponent,
} from '@tabulus/utils';

import { CellContainer } from './styled';

import type { CellProps } from './types';
import type { SimpleRowData } from '@tabulus/types';

/**
 * The default Cell component for Tabulus.
 * @param param0 {@link CellProps|Props} for the Cell.
 * @returns A cell in a table.
 * @private
 */
const Cell = <RowData extends SimpleRowData>({
  columnId,
  getColumnOption,
  rowIndex,
  type,
  value,
}: CellProps<RowData>) => {
  const horizontalAlign = getColumnOption(getHorizontalAlignPropertyName(type));
  const verticalAlign = getColumnOption(getVerticalAlignPropertyName(type));
  const visible = getColumnOption('visible');

  const CellContents = useMemo(() => {
    let returnValue: unknown = value;
    if (value instanceof Function) {
      const functionReturn = value();
      if (isReactComponent(functionReturn)) {
        return functionReturn;
      }
      returnValue = functionReturn;
    }
    // TODO: Format the value
    return String(returnValue);
  }, [value]);

  return (
    <CellContainer
      aria-rowindex={rowIndex}
      horizontalAlign={horizontalAlign}
      role={type === 'header' ? ROLES.COLUMN : ROLES.CELL}
      tabulus-columnid={columnId}
      verticalAlign={verticalAlign}
      visible={visible}
    >
      {CellContents}
    </CellContainer>
  );
};

export { Cell };
export type { CellProps } from './types';
