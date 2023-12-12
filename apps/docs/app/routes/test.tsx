import { useMemo } from 'react';

import { DevTool, Tabulus } from '@tabulus/components';
import { TabulusRegistry } from '@tabulus/contexts';

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
  const options = useMemo(() => ({ columnDefaults: { horizontalAlign: 'center' } }) as const, []);

  return (
    <div className='w-full'>
      <h1>Tabulus Testing</h1>
      <TabulusRegistry options={options}>
        <DevTool />
        <Tabulus
          columns={columns}
          data={data}
          options={{
            columnDefaults: { horizontalAlign: 'left' },
            theme: {
              baseTheme: 'standard',
              borders: { all: { borderSides: 'external' }, table: { borderColor: 'red' } },
            },
          }}
          tableId='test'
        />
        <Tabulus
          columns={columns}
          data={data}
          options={{
            theme: {
              baseTheme: 'standard',
              borders: { all: { borderSides: 'between' }, table: { borderColor: 'green' } },
            },
          }}
          tableId='test2'
        />
        <Tabulus columns={columns} data={data} tableId='test3' />
      </TabulusRegistry>
    </div>
  );
};

export default TestRoute;
