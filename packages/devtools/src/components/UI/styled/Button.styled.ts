import styled from '@emotion/styled';

/** Basic button component. */
const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.teal};
  border: none;
  border-radius: 0.1rem;
  color: ${({ theme }) => theme.colors.dark};
  font-size: 1rem;
  padding: 0.2rem;

  &:hover {
    opacity: 0.9;
  }
`;

export { Button };
