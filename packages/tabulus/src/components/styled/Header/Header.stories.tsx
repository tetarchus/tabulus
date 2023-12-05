import { styledDecorators } from '@tabulus/stories/utils';

import { Header } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Header,
  decorators: styledDecorators,
  tags: ['autodocs'],
  title: 'Styled Components/Header',
} satisfies Meta<typeof Header>;

type Story = StoryObj<typeof meta>;

/** A standard table header. */
const Default: Story = {
  args: {
    // TODO: Add proper example of contents
    children: 'Header',
  },
};

export default meta;
export { Default };
