import { ROLES } from '@tabulus/constants';

import { CellContainer } from './styled';

import type { CellProps } from './types';
import type { FC } from 'react';

const Cell: FC<CellProps> = ({ children, className, type = 'cell', value }: CellProps) => {
  return (
    <CellContainer className={className} role={type === 'header' ? ROLES.COLUMN : ROLES.CELL}>
      {value ?? children ?? null}
    </CellContainer>
  );
};

export { Cell };
export type { CellProps } from './types';
