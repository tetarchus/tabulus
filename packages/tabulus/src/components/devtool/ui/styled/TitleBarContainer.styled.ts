import { styled } from '@tabulus/utils';

import type { BaseStyledProps } from '@tabulus/types/devtool';
import type { CSSProperties } from 'react';

/** Wrapper for the title bar. */
const TitleBarContainer = styled.div<BaseStyledProps & { $primary?: boolean }>`
  align-items: center;
  background-color: ${({ $primary, theme }): CSSProperties['backgroundColor'] =>
    $primary === true ? theme.colors.title : 'transparent'};
  border-bottom: 1px solid ${({ theme }): CSSProperties['borderColor'] => theme.colors.border};
  box-sizing: border-box;
  display: flex;
  font-family: ${({ theme }): CSSProperties['fontFamily'] => theme.fontFamily.title};
  font-size: ${({ theme }): CSSProperties['fontSize'] => theme.fontSize.lg};
  gap: ${({ theme }): CSSProperties['gap'] => theme.padding.sm};
  justify-content: space-between;
  padding: ${({ theme }): CSSProperties['padding'] => theme.padding.sm};
`;

export { TitleBarContainer };
