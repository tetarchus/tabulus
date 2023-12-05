import { getColumnOptionFunction, getComponentFunction } from '@tabulus/stories/utils';

import { Column } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Column,
  tags: ['autodocs'],
  title: 'Core Components/Column',
} satisfies Meta<typeof Column>;

type Story = StoryObj<typeof meta>;

/** A column in the table. */
const Default: Story = {
  args: {
    getColumnOption: getColumnOptionFunction,
    getComponent: getComponentFunction,
    id: 'column',
    title: 'Column Title',
  },
};

export default meta;
export { Default };
