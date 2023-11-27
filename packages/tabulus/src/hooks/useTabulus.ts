import { useContext, useEffect, useState } from 'react';

import { TabulusRegistryContext } from '@tabulus/contexts';
import { createTableOptions } from '@tabulus/utils';

import type { RowDataBase, TabulusProps } from '@tabulus/types';

const defaultUserOptions = {};

const useTabulus = <RowData extends RowDataBase>({
  columns: baseColumns,
  data: baseData,
  id,
  options: userOptions = defaultUserOptions,
}: TabulusProps<RowData>) => {
  const { defaultOptions } = useContext(TabulusRegistryContext);

  const [columns, setColumns] = useState(baseColumns);
  const [data, setData] = useState(baseData);
  const [tableId, setTableId] = useState(id);
  const [options, setOptions] = useState(createTableOptions(userOptions, defaultOptions));

  useEffect(() => setColumns(baseColumns), [baseColumns]);
  useEffect(() => setData(baseData), [baseData]);
  useEffect(() => setTableId(id), [id]);
  useEffect(
    () => setOptions(createTableOptions(userOptions, defaultOptions)),
    [defaultOptions, userOptions],
  );

  return { columns, data, options, tableId };
};

export { useTabulus };
