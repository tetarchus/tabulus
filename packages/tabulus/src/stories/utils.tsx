import { globalDefaultColumnOptions } from '@tabulus/config';
import { themes } from '@tabulus/theme';
import { ThemeProvider } from '@tabulus/utils';

import type { Decorator, ReactRenderer, StrictArgs } from '@storybook/react';
import type { PartialStoryFn } from '@storybook/types';
import type {
  CellCountFunction,
  GetBoundColumnOptionFunction,
  GetColumnOptionFunction,
  GetComponentFunction,
  RenderColumnsFunction,
  RenderRowFunction,
  RenderRowsFunction,
  SimpleRowData,
  TabulusComponents,
} from '@tabulus/types';
import type { JSX } from 'react';

const columns = [
  { id: 'id', title: 'ID' },
  { id: 'name', title: 'Name' },
  { id: 'age', title: 'Age' },
];

const data = [
  { id: 1, name: 'John', age: 23 },
  { id: 2, name: 'James', age: 33 },
  { id: 3, name: 'Steve', age: 36 },
];

// TODO: Importing the globalDefaultComponents here causes errors in storybook -
// as does importing the components separately directly from their files.
// Need to look at a better method of using the default components for SB
const components: TabulusComponents<SimpleRowData> = {
  Cell: () => <div>CELL</div>,
  Column: () => <div>COLUMN</div>,
  Footer: () => <div>FOOTER</div>,
  Header: () => <div>HEADER</div>,
  Row: () => <div>ROW</div>,
  Table: () => <div>TABLE</div>,
  TableBody: () => <div>BODY</div>,
};

const getComponentFunction: GetComponentFunction<SimpleRowData> = componentName =>
  components[componentName];

const getColumnOptionFunction: GetColumnOptionFunction<SimpleRowData> = (_columnId, option) =>
  globalDefaultColumnOptions[option];

const getSingleColumnOptionFunction: GetBoundColumnOptionFunction = option =>
  globalDefaultColumnOptions[option];

const renderRowFunction: RenderRowFunction<SimpleRowData> = renderFunction =>
  renderFunction(data[0]!);

const renderRowsFunction: RenderRowsFunction<SimpleRowData> = renderFunction =>
  renderFunction(data);

const renderColumnsFunction: RenderColumnsFunction<SimpleRowData> = renderFunction =>
  renderFunction(columns);

const getColumnCountFunction: CellCountFunction = () => 10;

const getRowCountFunction: CellCountFunction = () => 10;

const styledDecorators: Decorator[] = [
  (Story: PartialStoryFn<ReactRenderer, StrictArgs>): JSX.Element => (
    <ThemeProvider theme={themes.standard}>
      <Story />
    </ThemeProvider>
  ),
];

export {
  columns,
  data,
  getColumnCountFunction,
  getColumnOptionFunction,
  getComponentFunction,
  getRowCountFunction,
  getSingleColumnOptionFunction,
  renderColumnsFunction,
  renderRowFunction,
  renderRowsFunction,
  styledDecorators,
};
