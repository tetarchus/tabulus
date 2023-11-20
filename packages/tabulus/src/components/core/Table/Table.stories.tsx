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
  args: {},
};

export default meta;
export { Default };
