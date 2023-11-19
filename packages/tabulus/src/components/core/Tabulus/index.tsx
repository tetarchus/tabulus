import { TableManagerProvider } from '@tabulus/contexts';

import { Table } from '../Table';

import type { TabulusProps } from '@tabulus/types';
import type { FC } from 'react';

/**
 * The main component of the `tabulus` library. This is the standard method for building a table.
 */
const Tabulus: FC<TabulusProps> = ({ columns, data, events, id, options }: TabulusProps) => (
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
