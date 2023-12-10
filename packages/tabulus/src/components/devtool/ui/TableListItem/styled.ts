import { styled } from '@tabulus/utils';

import type { TableListItemContainerProps } from './types';
import type { BaseStyledProps } from '@tabulus/types/devtool';
import type { CSSProperties } from 'react';

/** Container for an entry in the list of tables. */
const TableListItemContainer = styled.div<TableListItemContainerProps>`
  background-color: ${({ $selected, theme }): CSSProperties['backgroundColor'] =>
    $selected ? theme.colors.teal : 'transparent'};
  color: ${({ $selected, theme }): CSSProperties['color'] =>
    $selected ? theme.colors.dark : theme.colors.white};
  border-bottom: 1px solid ${({ theme }): CSSProperties['borderColor'] => theme.colors.border};
  display: flex;
  flex-wrap: wrap;
  padding: ${({ theme }): CSSProperties['padding'] => theme.padding.sm};

  &:hover {
    background-color: ${({ theme }) => theme.colors.teal};
    color: ${({ theme }) => theme.colors.dark};
  }
`;

/** The source type of the table. */
const TableType = styled.div<BaseStyledProps>`
  /* TODO: Change the color depending on the table type */
  background-color: ${({ theme }): CSSProperties['backgroundColor'] => theme.colors.title};
  color: ${({ theme }): CSSProperties['color'] => theme.colors.highlight};
  border: 1px solid ${({ theme }): CSSProperties['borderColor'] => theme.colors.border};
  display: inline-flex;
  padding: ${({ theme }): CSSProperties['padding'] => theme.padding.sm};
  font-size: ${({ theme }): CSSProperties['fontSize'] => theme.fontSize.sm};
`;

/** A row in the table list item. */
const Info = styled.div<BaseStyledProps>`
  display: flex;
  gap: ${({ theme }): CSSProperties['gap'] => theme.padding.lg};
  width: 100%;
`;

export { Info, TableListItemContainer, TableType };
