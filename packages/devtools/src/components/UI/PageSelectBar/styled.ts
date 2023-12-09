import styled from '@emotion/styled';

const SelectWrapper = styled.div`
  box-sizing: border-box;
  text-align: left;
  position: relative;
  width: 100%;
`;

const PageSelect = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const PageSelectMenu = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-sizing: border-box;
  margin-top: 0.5rem;
  position: absolute;
  width: 100%;
`;

const PageSelectMenuItem = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  padding: 0.2rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.teal};
    color: ${({ theme }) => theme.colors.dark};
  }
`;

export { PageSelect, PageSelectMenu, PageSelectMenuItem, SelectWrapper };
