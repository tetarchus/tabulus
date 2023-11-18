import { Tabulus } from '@tabulus/components';

import './App.css';

const cols = [
  { id: 'id', title: 'ID' },
  { id: 'name', title: 'Name' },
  { id: 'age', title: 'Age' },
];

const data = [
  { id: 1, name: 'Steve', age: 23 },
  { id: 2, name: 'Gemma', age: 33 },
  { id: 3, name: 'Tet', age: 36 },
];

function App() {
  return (
    <div className="App">
      <div>Tabulus Test</div>
      <Tabulus columns={cols} data={data} id='test' />
    </div>
  );
}

export default App;
