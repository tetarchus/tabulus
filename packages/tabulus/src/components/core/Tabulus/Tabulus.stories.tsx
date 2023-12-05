import { columns, data } from '@tabulus/stories/utils';

import { Tabulus } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Tabulus,
  tags: ['autodocs'],
  title: 'Tabulus',
} satisfies Meta<typeof Tabulus>;

type Story = StoryObj<typeof meta>;

/** Standard example Tabulus component. */
const Default: Story = {
  args: {
    columns,
    data,
    tableId: 'test',
  },
};

export default meta;
export { Default };
