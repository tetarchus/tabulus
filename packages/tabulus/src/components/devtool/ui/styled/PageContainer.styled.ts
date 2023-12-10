import { styled } from '@tabulus/utils';

import type { BaseStyledProps } from '@tabulus/types/devtool';
import type { CSSProperties } from 'react';

/** Container for page content to make it scrollable and padded. */
const PageContainer = styled.div<BaseStyledProps>`
  box-sizing: border-box;
  overflow-y: auto;
  padding: ${({ theme }): CSSProperties['padding'] => theme.padding.lg};
  height: 100%;
`;

export { PageContainer };
