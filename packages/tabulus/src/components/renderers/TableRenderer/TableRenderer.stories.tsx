import { TableRenderer } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: TableRenderer,
  tags: ['autodocs'],
  title: 'Renderers/Table Renderer',
} satisfies Meta<typeof TableRenderer>;

type Story = StoryObj<typeof meta>;

// TODO: Requires context wrapper

/** A standard table. */
const Default: Story = {
  args: {},
};

export default meta;
export { Default };
