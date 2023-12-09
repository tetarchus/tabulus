import { styled } from '@devtools/utils';

/** Standard wrapper for an icon. */
const IconButton = styled.button`
  background-color: transparent;
  box-sizing: border-box;
  color: inherit;
  border: none;
  cursor: pointer;
  padding: 0.12rem;

  &:hover {
    opacity: 0.8;
  }
`;

export { IconButton };
