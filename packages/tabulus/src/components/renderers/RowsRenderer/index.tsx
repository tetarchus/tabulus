import cn from 'classnames';

import { CLASSES, ROLES } from '@tabulus/constants';
import { addEvenOrOddClass } from '@tabulus/utils';

import type { RowsRendererProps } from './types';
import type { SimpleRowData } from '@tabulus/types';

/**
 * Renders the table contents.
 * @param param0 {@link RowsRendererProps|Props} for the RowsRenderer
 * @returns The main table rows.
 * @private
 */
const RowsRenderer = <RowData extends SimpleRowData>({
  getColumnOption,
  getComponent,
  renderRows,
}: RowsRendererProps<RowData>) => {
  const TableBody = getComponent('TableBody');
  const Row = getComponent('Row');

  // TODO: Get the order of columns passed down for the render function
  // TODO: Sort out row index class - only for body rows and account for header row number.

  return (
    <TableBody className={CLASSES.BODY.BASE} role={ROLES.BODY}>
      {renderRows(rows =>
        rows.map((row, index) => {
          // TODO: Get the name of the ID column from options
          const rowIdValue = row['id'];
          const id =
            typeof rowIdValue === 'string' || typeof rowIdValue === 'number' ? rowIdValue : index;

          return (
            <Row
              // TODO: Adjust for header
              className={cn(CLASSES.ROW.BASE, addEvenOrOddClass(index))}
              getColumnOption={getColumnOption}
              getComponent={getComponent}
              index={index}
              key={id}
              renderRow={renderFunction => renderFunction(row)}
              type='table'
            />
          );
        }),
      )}
    </TableBody>
  );
};

export { RowsRenderer };
export type { RowsRendererProps } from './types';
