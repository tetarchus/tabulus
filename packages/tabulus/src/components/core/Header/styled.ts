import styled from '@emotion/styled';

/** Wrapper for the whole table header. */
const TableHeader = styled.div``;

// TODO: Do we want this and the standard row to share a load of CSS styles?
/** A row within the table header. */
const HeadersRow = styled.div`
  display: flex;
  justify-content: stretch;
  font-weight: bold;
  width: 100%;
`;

export { HeadersRow, TableHeader };
