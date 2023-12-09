import { styled } from '@devtools/utils';

import type { CSSProperties } from 'react';

/** Container for an entry in the list of tables. */
const TableListItemContainer = styled.div<{ $selected: boolean }>`
  background-color: ${({ $selected, theme }): CSSProperties['backgroundColor'] =>
    $selected ? theme.colors.teal : 'transparent'};
  color: ${({ $selected, theme }): CSSProperties['color'] =>
    $selected ? theme.colors.dark : theme.colors.white};
  border-bottom: 1px solid ${({ theme }): CSSProperties['borderColor'] => theme.colors.border};
  display: flex;
  flex-wrap: wrap;
  padding: 0.2rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.teal};
    color: ${({ theme }) => theme.colors.dark};
  }
`;

/** The source type of the table. */
const TableType = styled.div`
  /* TODO: Change this depending on the table type */
  background-color: ${({ theme }): CSSProperties['backgroundColor'] => theme.colors.title};
  color: ${({ theme }): CSSProperties['color'] => theme.colors.highlight};
  border: 1px solid ${({ theme }): CSSProperties['borderColor'] => theme.colors.border};
  display: inline-flex;
  padding: 0.2rem;
  font-size: 0.8rem;
`;

/** A row in the table list item. */
const Info = styled.div`
  display: flex;
  gap: 0.4rem;
  width: 100%;
`;

export { Info, TableListItemContainer, TableType };
