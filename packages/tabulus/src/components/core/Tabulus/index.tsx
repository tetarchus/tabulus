import { TableManager } from '@tabulus/contexts';

import { TableRenderer } from '../../renderers';

import type { SimpleRowData, TabulusProps } from '@tabulus/types';

/**
 * The main component for Tabulus. The simplest way to create a table.
 * @param param0 {@link TabulusProps|Props} to create a table.
 * @returns The fully assembled table.
 */
const Tabulus = <RowData extends SimpleRowData>({
  columns,
  components,
  data,
  options,
  tableId,
}: TabulusProps<RowData>) => (
  <TableManager
    columns={columns}
    components={components}
    data={data}
    options={options}
    tableId={tableId}
  >
    <TableRenderer />
  </TableManager>
);

export { Tabulus };
