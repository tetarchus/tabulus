import { TableManagerProvider } from '@tabulus/contexts';

import { Table } from '../Table';

import type { TabulusProps } from '@tabulus/types';
import type { FC } from 'react';

const Tabulus: FC<TabulusProps> = ({ columns, data, id }: TabulusProps) => {
  return (
    <TableManagerProvider columns={columns} data={data} tableId={id}>
      <Table />
    </TableManagerProvider>
  );
};

export { Tabulus };
