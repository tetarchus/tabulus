import { Tabulus } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Tabulus,
  tags: ['autodocs'],
  title: 'Tabulus',
} satisfies Meta<typeof Tabulus>;

type Story = StoryObj<typeof meta>;

const columns = [
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

/** Address component containing all available data. */
const Default: Story = {
  args: {
    columns,
    data,
    id: 'test',
    options: {
      columnDefaults: {
        headerHorizontalAlign: 'right',
        verticalAlign: 'middle',
        horizontalAlign: 'center',
      },
    },
  },
};

export default meta;
export { Default };
