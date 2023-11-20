import { Row } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Row,
  tags: ['autodocs'],
  title: 'Core Components/Row',
} satisfies Meta<typeof Row>;

type Story = StoryObj<typeof meta>;

/** A standard table row. */
const Default: Story = {
  // TODO: Add some example row data
  args: { index: 1, row: {} },
};

export default meta;
export { Default };
