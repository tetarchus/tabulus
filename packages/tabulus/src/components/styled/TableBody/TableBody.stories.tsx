import { TableBody } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: TableBody,
  tags: ['autodocs'],
  title: 'Styled Components/Table Body',
} satisfies Meta<typeof TableBody>;

type Story = StoryObj<typeof meta>;

/** A standard table body container. */
const Default: Story = {
  args: {
    // TODO: Add proper example of contents
    children: 'Table',
  },
};

export default meta;
export { Default };
