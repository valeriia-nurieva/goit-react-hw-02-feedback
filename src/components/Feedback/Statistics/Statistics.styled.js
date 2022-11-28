import styled from 'styled-components';

export const StatisticsFeedback = styled.p`
  width: 100%;
  text-align: center;
  font-weight: 600;
  border: 2px dashed ${({ theme }) => `${theme.colors.accent}`};
  padding: ${({ theme }) => `${theme.spacing(2)}`};
  border-radius: 5px;
`;

export const StatisticsCount = styled.p`
  font-weight: 600;
`;
