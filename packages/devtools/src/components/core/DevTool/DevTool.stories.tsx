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

const TopRight: Story = {
  args: { maximisedPosition: 'top', minimisedPosition: 'top-right' },
};

const BottomLeft: Story = {
  args: { minimisedPosition: 'bottom-left' },
};

const BottomRight: Story = {
  args: { maximisedPosition: 'bottom', minimisedPosition: 'bottom-right' },
};

export default meta;
export { Default, BottomLeft, BottomRight, TopRight };
