import { Cell } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Cell,
  tags: ['autodocs'],
  title: 'Core Components/Cell',
} satisfies Meta<typeof Cell>;

type Story = StoryObj<typeof meta>;

/** A standard table cell. */
const Default: Story = {
  args: {
    column: 'Cell',
    rowIndex: 1,
    type: 'cell',
    value: 'Cell',
  },
};

/** A header table cell. */
const HeaderCell: Story = {
  args: {
    column: 'Header Cell',
    rowIndex: 'header',
    type: 'header',
    value: 'Header',
  },
};

export default meta;
export { Default, HeaderCell };
