import { styled } from '@tabulus/utils';

import type { RowContainerProps } from './types';
import type { CSSProperties } from 'react';

const RowContainer = styled.div<RowContainerProps>`
  display: flex;
  justify-content: stretch;
  // TODO: Make this controllable via theme
  font-weight: ${({ type }): CSSProperties['fontWeight'] =>
    type === 'header' ? 'bold' : 'normal'};
  width: 100%;
`;

export { RowContainer };
