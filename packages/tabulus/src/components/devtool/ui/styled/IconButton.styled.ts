import { styled } from '@tabulus/utils';

import type { BaseStyledProps } from '@tabulus/types/devtool';
import type { CSSProperties } from 'react';

/** Standard wrapper for an icon. */
const IconButton = styled.button<BaseStyledProps>`
  background-color: transparent;
  box-sizing: border-box;
  color: inherit;
  border: none;
  cursor: pointer;
  padding: ${({ theme }): CSSProperties['padding'] => theme.padding.xs};

  &:hover {
    opacity: 0.8;
  }
`;

export { IconButton };
