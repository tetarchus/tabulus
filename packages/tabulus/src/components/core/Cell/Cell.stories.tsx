import { Cell } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Cell,
  tags: ['autodocs'],
  title: 'Table Components/Cell',
} satisfies Meta<typeof Cell>;

type Story = StoryObj<typeof meta>;

/** Address component containing all available data. */
const Default: Story = { args: { column: 'Cell', type: 'cell' } };

const HeaderCell: Story = { args: { column: 'Header Cell', type: 'header' } };

export default meta;
export { Default, HeaderCell };
