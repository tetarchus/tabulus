import { styled } from '@tabulus/utils';

import type { BaseStyledProps } from '@tabulus/types/devtool';
import type { CSSProperties } from 'react';

/** Basic button component. */
const Button = styled.button<BaseStyledProps>`
  background-color: ${({ theme }): CSSProperties['backgroundColor'] => theme.colors.teal};
  border: none;
  border-radius: ${({ theme }): CSSProperties['borderRadius'] => theme.borderRadius.sm};
  color: ${({ theme }): CSSProperties['color'] => theme.colors.dark};
  font-size: ${({ theme }): CSSProperties['fontSize'] => theme.fontSize.base};
  padding: ${({ theme }): CSSProperties['padding'] => theme.padding.sm};

  &:hover {
    opacity: 0.9;
  }
`;

export { Button };
