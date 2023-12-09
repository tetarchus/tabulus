import styled from '@emotion/styled';

import type { CSSProperties } from 'react';

/**
 * Wrapper for the option icons for selecting the DevTool position.
 */
const AlignmentIconOptions = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 0.5rem;
  height: 2rem;
  margin-top: 0.2rem;
  justify-content: center;
  width: 100%;
`;

/**
 * Wrapper for the whole settings page.
 */
const SettingsWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  /* gap: 0.25rem; */
  height: 100%;
`;

/**
 * Wrapper for a single setting.
 */
const Setting = styled.div`
  align-items: flex-start;
  border-bottom: 1px solid ${({ theme }): CSSProperties['borderBottom'] => theme.colors.border};
  display: flex;
  flex-direction: column;
  padding: 0.7rem 0;
`;

export { AlignmentIconOptions, Setting, SettingsWrapper };
