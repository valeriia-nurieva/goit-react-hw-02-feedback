import styled from 'styled-components';

export const Title = styled.h2`
  font-family: 'Franklin Gothic Medium', Arial, sans-serif;
  color: ${({ theme }) => `${theme.colors.black}`};
  margin-bottom: ${({ theme }) => `${theme.spacing(3)}`};
`;
