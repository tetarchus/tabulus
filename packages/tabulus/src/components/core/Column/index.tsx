import { CLASSES } from '@tabulus/constants';

import { Cell } from '../Cell';

import { Title } from './styled';

import type { ColumnProps } from './types';
import type { FC } from 'react';

const Column: FC<ColumnProps> = ({ id, title }: ColumnProps) => {
  return (
    <Cell className={CLASSES.COLUMN.BASE} column={id} type='header'>
      <Title className={CLASSES.COLUMN.TITLE}>{title}</Title>
    </Cell>
  );
};

export { Column };
export type { ColumnProps } from './types';
