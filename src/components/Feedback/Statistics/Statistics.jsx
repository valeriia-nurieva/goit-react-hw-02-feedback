import PropTypes from 'prop-types';
import { Box } from '../../Box';
import { StatisticsFeedback, StatisticsCount } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      <Box display="flex" gridGap="10px" mb="2">
        <StatisticsFeedback>Good: {good}</StatisticsFeedback>
        <StatisticsFeedback>Neutral: {neutral}</StatisticsFeedback>
        <StatisticsFeedback>Bad: {bad}</StatisticsFeedback>
      </Box>
      <Box display="flex" justifyContent="space-between">
      <StatisticsCount>Total: {total}</StatisticsCount>
      <StatisticsCount>Positive Feedback: {percentage}%</StatisticsCount>
      </Box>

    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
