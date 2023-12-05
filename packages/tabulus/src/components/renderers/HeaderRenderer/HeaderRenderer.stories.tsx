import {
  getColumnOptionFunction,
  getComponentFunction,
  renderColumnsFunction,
} from '@tabulus/stories/utils';

import { HeaderRenderer } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: HeaderRenderer,
  tags: ['autodocs'],
  title: 'Renderers/Header Renderer',
} satisfies Meta<typeof HeaderRenderer>;

type Story = StoryObj<typeof meta>;

/** Standard renderered header. */
const Default: Story = {
  args: {
    getColumnOption: getColumnOptionFunction,
    getComponent: getComponentFunction,
    renderColumns: renderColumnsFunction,
  },
};

// TODO: Add 'withCustomComponents' option

export default meta;
export { Default };
