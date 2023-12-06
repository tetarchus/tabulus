import { Footer } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Footer,
  tags: ['autodocs'],
  title: 'Styled Components/Footer',
} satisfies Meta<typeof Footer>;

type Story = StoryObj<typeof meta>;

/** A standard table footer. */
const Default: Story = {
  args: {
    // TODO: Add proper example of contents
    children: 'Footer',
  },
};

export default meta;
export { Default };
