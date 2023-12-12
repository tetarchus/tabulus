import { setBorders, styled } from '@tabulus/utils';

import type { TableContainerProps, TablePositionerProps } from './types';
import type { CSSObject } from '@tabulus/utils';
import type { CSSProperties } from 'react';

/** Wrapper around the table itself. */
const TableContainer = styled.div<TableContainerProps>`
  //== Static Properties ================
  box-sizing: border-box;

  //== Theme Properties ===============
  background-color: ${({ theme }): CSSProperties['backgroundColor'] =>
    theme.colors.backgroundColor};
  color: ${({ theme }): CSSProperties['color'] => theme.colors.textColor};

  ${({ theme }): CSSObject => setBorders(theme, 'table')};
`;

/** Layout wrapper that can allows for positioning the table. */
const TablePositioner = styled.div<TablePositionerProps>`
  //== Static Properties ================
  border: none;
  box-sizing: border-box;
  overflow: hidden;
  /* TODO: Make this theme controllable? (or option removable) */
  padding: 1rem;
  position: relative;
  width: 100%;

  //== Theme Properties ===============
  /* font-size
  */

  //== Layout Properties ==============
  /* ? Layout === 'fitDataTable' => display: inline-block */
`;

export { TableContainer, TablePositioner };
