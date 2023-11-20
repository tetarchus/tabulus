import { CLASSES } from '@tabulus/constants';

import { Cell } from '../Cell';

import { Title } from './styled';

import type { ColumnProps } from './types';
import type { FC } from 'react';

/** A column header containing the column title as well as sort and filter options. */
const Column: FC<ColumnProps> = ({ id, title }: ColumnProps) => (
  <Cell className={CLASSES.COLUMN.BASE} column={id} rowIndex={'header'} type='header'>
    <Title className={CLASSES.COLUMN.TITLE}>{title}</Title>
  </Cell>
);

export { Column };
export type { ColumnProps } from './types';
