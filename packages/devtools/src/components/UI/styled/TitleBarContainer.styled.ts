import styled from '@emotion/styled';

import type { CSSProperties } from 'react';

/** Wrapper for the title bar. */
const TitleBarContainer = styled.div<{ primary?: boolean }>`
  align-items: center;
  background-color: ${({ primary, theme }): CSSProperties['backgroundColor'] =>
    primary === true ? theme.colors.title : 'transparent'};
  border-bottom: 1px solid;
  border-color: ${({ theme }): CSSProperties['borderColor'] => theme.colors.border};
  box-sizing: border-box;
  display: flex;
  font-family: ${({ theme }): CSSProperties['fontFamily'] => theme.fontFamily.title};
  font-size: 1.2rem;
  gap: 2rem;
  justify-content: space-between;
  padding: 0.25rem;
`;

export { TitleBarContainer };
