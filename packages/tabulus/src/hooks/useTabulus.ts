import { useContext, useState } from 'react';

import { TabulusRegistry } from '@tabulus/contexts';
import { createTableOptions } from '@tabulus/utils';

import type { RowDataBase, TabulusProps } from '@tabulus/types';

const useTabulus = <RowData extends RowDataBase>({
  columns: baseColumns,
  data: baseData,
  id,
  options: userOptions,
}: TabulusProps<RowData>) => {
  const { defaultOptions } = useContext(TabulusRegistry);

  const [columns, setColumns] = useState(baseColumns);
  const [data, setData] = useState(baseData);
  const [tableId, setTableId] = useState(id);
  const [options, setOptions] = useState(createTableOptions(userOptions, defaultOptions));
};

export { useTabulus };
