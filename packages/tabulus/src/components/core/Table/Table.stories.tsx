import {
  getColumnCountFunction,
  getColumnOptionFunction,
  getComponentFunction,
  getRowCountFunction,
  renderColumnsFunction,
  renderRowsFunction,
} from '@tabulus/stories/utils';

import { Table } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Table,
  tags: ['autodocs'],
  title: 'Core Components/Table',
} satisfies Meta<typeof Table>;

type Story = StoryObj<typeof meta>;

/** A standard table. */
const Default: Story = {
  args: {
    elementRef: { current: null },
    getColumnCount: getColumnCountFunction,
    getColumnOption: getColumnOptionFunction,
    getComponent: getComponentFunction,
    getRowCount: getRowCountFunction,
    renderColumns: renderColumnsFunction,
    renderRows: renderRowsFunction,
    tableId: 'test',
  },
};

export default meta;
export { Default };
