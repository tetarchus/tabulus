import { styled } from '@tabulus/utils';

import type { BaseStyledProps } from '@tabulus/types/devtool';
import type { CSSProperties } from 'react';

/** Standard secondary text. */
const Subtitle = styled.div<BaseStyledProps>`
  box-sizing: border-box;
  color: ${({ theme }): CSSProperties['color'] => theme.colors.highlight};
  font-size: ${({ theme }): CSSProperties['fontSize'] => theme.fontSize.sm};
`;

export { Subtitle };
