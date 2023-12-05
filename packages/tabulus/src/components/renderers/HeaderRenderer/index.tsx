import { useCallback } from 'react';

import { CLASSES, ROLES } from '@tabulus/constants';

import type { HeaderRendererProps } from './types';
import type { RenderRowFunction, SimpleRowData } from '@tabulus/types';

/**
 * Renders the table header row.
 * @param param0 {@link HeaderRendererProps|Props} for the HeaderRenderer
 * @returns The table header.
 * @private
 */
const HeaderRenderer = <RowData extends SimpleRowData>({
  getColumnOption,
  getComponent,
  renderColumns,
}: HeaderRendererProps<RowData>) => {
  const Header = getComponent('Header');
  const Row = getComponent('Row');
  const Column = getComponent('Column');

  const renderRow: RenderRowFunction<RowData> = useCallback(
    () =>
      renderColumns(columns =>
        columns.map(column => (
          <Column
            getComponent={getComponent}
            getColumnOption={getColumnOption}
            id={column.id}
            key={column.id}
            title={column.title}
          />
        )),
      ),
    [Column, getColumnOption, getComponent, renderColumns],
  );

  return (
    <Header className={CLASSES.HEADER.BASE} role={ROLES.HEADER}>
      {/* TODO: Add option to hide header */}
      <Row
        className={CLASSES.HEADER.ROW}
        getColumnOption={getColumnOption}
        getComponent={getComponent}
        index={1}
        renderRow={renderRow}
        type='header'
      />
      {/* TODO: Container for frozen rows. */}
    </Header>
  );
};

export { HeaderRenderer };
export type { HeaderRendererProps } from './types';
