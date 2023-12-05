import { useMemo } from 'react';

import { Tabulus } from '@tabulus/components';

const TestRoute = () => {
  const data = useMemo(
    () => [
      { id: 1, name: 'Tetarchus', age: 35 },
      { id: 2, name: 'Tet', age: 34 },
    ],
    [],
  );
  const columns = useMemo(() => [] as const, []);

  return (
    <div>
      <h1>Tabulus Testing</h1>
      <Tabulus columns={columns} data={data} tableId='test' />
    </div>
  );
};

export default TestRoute;
