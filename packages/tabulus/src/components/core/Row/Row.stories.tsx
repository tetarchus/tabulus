import { CLASSES } from '@tabulus/constants';
import {
  getColumnOptionFunction,
  getComponentFunction,
  renderRowFunction,
} from '@tabulus/stories/utils';

import { Row } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Row,
  tags: ['autodocs'],
  title: 'Core Components/Row',
} satisfies Meta<typeof Row>;

type Story = StoryObj<typeof meta>;

/** An example header row. */
const HeaderRow: Story = {
  // TODO: Add some example row data
  args: {
    className: CLASSES.HEADER.ROW,
    getColumnOption: getColumnOptionFunction,
    getComponent: getComponentFunction,
    index: 1,
    renderRow: renderRowFunction,
    type: 'header',
  },
};

/** An example table row. */
const TableRow: Story = {
  args: {
    ...HeaderRow.args,
    className: CLASSES.ROW.BASE,
    type: 'table',
    // TODO: May need a separate renderRow function
  },
};

export default meta;
export { HeaderRow, TableRow };
