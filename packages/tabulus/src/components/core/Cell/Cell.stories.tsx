import { getSingleColumnOptionFunction } from '@tabulus/stories/utils';

import { Cell } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Cell,
  tags: ['autodocs'],
  title: 'Core Components/Cell',
} satisfies Meta<typeof Cell>;

type Story = StoryObj<typeof meta>;

/** A header cell. */
const HeaderCell: Story = {
  args: {
    columnId: 'test',
    getColumnOption: getSingleColumnOptionFunction,
    rowIndex: 1,
    type: 'header',
    value: 'Cell Value',
  },
};

/** A table cell */
const TableCell: Story = {
  args: {
    ...HeaderCell.args,
    type: 'cell',
  },
};

// Header Cell and Standard Cell examples

export default meta;
export { HeaderCell, TableCell };
