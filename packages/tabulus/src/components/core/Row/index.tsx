import { objectEntries } from '@tetarchus/utils/core';

import { ROLES } from '@tabulus/constants';

import { RowContainer } from './styled';

import type { RowProps } from './types';
import type { GetBoundColumnOptionFunction, SimpleRowData } from '@tabulus/types';

/**
 * The default Row component for Tabulus.
 * @param param0 {@link RowProps|Props} for the Row.
 * @returns A row within a table.
 * @private
 */
const Row = <RowData extends SimpleRowData>({
  className,
  getColumnOption,
  getComponent,
  index,
  renderRow,
  type,
}: RowProps<RowData>) => {
  const Cell = getComponent('Cell');

  return (
    <RowContainer aria-rowindex={index} className={className} role={ROLES.ROW} type={type}>
      {/* Render Row Contents */}
      {renderRow(row => {
        const cells = objectEntries(row);

        return cells.map(([column, value]) => {
          const getBoundColumnOption: GetBoundColumnOptionFunction = option =>
            getColumnOption(column, option);

          return (
            <Cell
              columnId={column}
              getColumnOption={getBoundColumnOption}
              key={column}
              rowIndex={index}
              type='cell'
              value={value}
            />
          );
        });
      })}
    </RowContainer>
  );
};

export { Row };
export type { RowProps } from './types';
