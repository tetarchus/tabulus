import {
  getColumnOptionFunction,
  getComponentFunction,
  renderRowsFunction,
} from '@tabulus/stories/utils';

import { RowsRenderer } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: RowsRenderer,
  tags: ['autodocs'],
  title: 'Renderers/Rows Renderer',
} satisfies Meta<typeof RowsRenderer>;

type Story = StoryObj<typeof meta>;

/** The main table contents. */
const Default: Story = {
  args: {
    getColumnOption: getColumnOptionFunction,
    getComponent: getComponentFunction,
    renderRows: renderRowsFunction,
  },
};

export default meta;
export { Default };
