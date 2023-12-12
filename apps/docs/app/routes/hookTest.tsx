import { useMemo } from 'react';

import { DevTool, Tabulus } from '@tabulus/components';
import { useTabulus } from '@tabulus/hooks';

const TestRoute = () => {
  const data = useMemo(
    () => [
      { id: 1, name: 'Tetarchus', age: 35 },
      { id: 2, name: 'Tet', age: 34 },
    ],
    [],
  );
  const columns = useMemo(
    () =>
      [
        { id: 'id', title: 'ID' },
        { id: 'name', title: 'Name' },
        { id: 'age', title: 'Age' },
      ] as const,
    [],
  );

  const table = useTabulus({ columns, data, tableId: 'test' });

  return (
    <div className='w-full'>
      <h1>Tabulus Testing</h1>
      <DevTool table={table} />
      <Tabulus columns={columns} data={data} tableId='test' />
    </div>
  );
};

export default TestRoute;
