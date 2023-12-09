import { DevTool } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: DevTool,
  tags: ['autodocs'],
  title: 'Internal/Dev Tool',
} satisfies Meta<typeof DevTool>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {},
};

export default meta;
export { Default };
