import { Header } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Core Components/Header',
} satisfies Meta<typeof Header>;

type Story = StoryObj<typeof meta>;

/** A standard table header. */
const Default: Story = {
  args: {},
};

export default meta;
export { Default };
