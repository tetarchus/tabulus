import { Tabulus } from '@tabulus/components';

import type { MetaFunction } from '@remix-run/node';

const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

const cols = [
  { id: 'id', title: 'ID' },
  { id: 'name', title: 'Name' },
  { id: 'age', title: 'Age' },
  { id: 'title', title: 'Title' },
];

const data = [
  { id: 1, name: 'Steve', age: 23, title: '' },
  { id: 2, name: 'Gemma', age: 33, title: '' },
  { id: 3, name: 'Tet', age: 36, title: '' },
];

const IndexRoute = () => (
  <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
    <h1>Welcome to Tabulus</h1>
    <Tabulus columns={cols} data={data} id='test' />
  </div>
);

export default IndexRoute;
export { meta };
