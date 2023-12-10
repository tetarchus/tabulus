import { styled } from '@tabulus/utils';

import type { BaseStyledProps } from '@tabulus/types/devtool';
import type { CSSProperties } from 'react';

/**
 * Wrapper for the option icons for selecting the DevTool position.
 */
const AlignmentIconOptions = styled.div<BaseStyledProps>`
  box-sizing: border-box;
  display: flex;
  gap: ${({ theme }): CSSProperties['gap'] => theme.padding.lg};
  height: 2rem;
  margin-top: ${({ theme }): CSSProperties['marginTop'] => theme.padding.sm};
  justify-content: center;
  width: 100%;
`;

/**
 * Wrapper for a single setting.
 */
const Setting = styled.div<BaseStyledProps>`
  align-items: flex-start;
  border-bottom: 1px solid ${({ theme }): CSSProperties['borderBottom'] => theme.colors.border};
  display: flex;
  flex-direction: column;
  padding: ${({ theme }): CSSProperties['padding'] => theme.padding.xl} 0;
`;

export { AlignmentIconOptions, Setting };
