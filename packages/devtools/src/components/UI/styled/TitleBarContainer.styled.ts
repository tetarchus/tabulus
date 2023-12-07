import styled from '@emotion/styled';

import type { CSSProperties } from 'react';

const TitleBarContainer = styled.div`
  align-items: center;
  border-bottom: 1px solid;
  border-color: ${({ theme }): CSSProperties['borderColor'] => theme.colors.border};
  display: flex;
  font-family: ${({ theme }): CSSProperties['fontFamily'] => theme.fontFamily.title};
  font-size: 1.2rem;
  justify-content: space-between;
  padding: 0.25rem;
`;

export { TitleBarContainer };
