import { TableManagerProvider } from '@tabulus/contexts';

import { Table } from '../Table';

import type { RowDataBase, TabulusProps } from '@tabulus/types';

/**
 * The main component of the `tabulus` library. This is the standard method for building a table.
 */
const Tabulus = <RowData extends RowDataBase>({
  columns,
  data,
  events,
  id,
  options,
}: TabulusProps<RowData>) => (
  <TableManagerProvider
    columns={columns}
    data={data}
    events={events}
    tableId={id}
    options={options}
  >
    <Table />
  </TableManagerProvider>
);

export { Tabulus };
