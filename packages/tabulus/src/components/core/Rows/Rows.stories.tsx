import { Rows } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Rows,
  tags: ['autodocs'],
  title: 'Core Components/Rows',
} satisfies Meta<typeof Rows>;

type Story = StoryObj<typeof meta>;

/** All table rows */
const Default: Story = {
  args: {},
};

export default meta;
export { Default };
