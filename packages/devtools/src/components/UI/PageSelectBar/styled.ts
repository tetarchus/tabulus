import { styled } from '@devtools/utils';

import type { CSSProperties } from 'react';

/** Wrapper around the select box and menu. */
const SelectWrapper = styled.div`
  box-sizing: border-box;
  text-align: left;
  position: relative;
  width: 100%;
`;

/** Wrapper around the select value. */
const PageSelect = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

/** Wrapper around the select drop-down menu. */
const PageSelectMenu = styled.div`
  background-color: ${({ theme }): CSSProperties['backgroundColor'] => theme.colors.dark};
  border: 1px solid ${({ theme }): CSSProperties['color'] => theme.colors.border};
  box-sizing: border-box;
  margin-top: 0.5rem;
  position: absolute;
  width: 100%;
`;

/** An entry in the page select list. */
const PageSelectMenuItem = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  padding: 0.2rem;

  &:hover {
    background-color: ${({ theme }): CSSProperties['backgroundColor'] => theme.colors.teal};
    color: ${({ theme }): CSSProperties['color'] => theme.colors.dark};
  }
`;

export { PageSelect, PageSelectMenu, PageSelectMenuItem, SelectWrapper };
