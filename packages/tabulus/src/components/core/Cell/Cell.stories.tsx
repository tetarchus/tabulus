import { Cell } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Cell,
  tags: ['autodocs'],
  title: 'Core Components/Cell',
} satisfies Meta<typeof Cell>;

type Story = StoryObj<typeof meta>;

// TODO: Need to sort out generic typings

/** A standard table Cell. */
const Default: Story = {
  args: {},
};

// Header Cell and Standard Cell examples

export default meta;
export { Default };
