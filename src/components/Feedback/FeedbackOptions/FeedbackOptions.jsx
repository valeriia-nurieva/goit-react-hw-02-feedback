import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';
import { BsEmojiSmileFill, BsEmojiNeutralFill, BsEmojiFrownFill } from 'react-icons/bs';
import { theme } from 'theme';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option) => {
    return (
      <Button key={option} onClick={() => onLeaveFeedback(option)} type="button">
        {renderIcon(option)}
        {capitalizeFirstLetter(option)}
      </Button>
    );
  });
};

function renderIcon(param) {
  switch (param) {
    case 'good':
      return <BsEmojiSmileFill fill={`${theme.colors.green}`} />;
    case 'neutral':
      return <BsEmojiNeutralFill fill={`${theme.colors.yellow}`} />;
    case 'bad':
      return <BsEmojiFrownFill fill={`${theme.colors.red}`} />;
    default:
      throw new Error('Unexpected value of option');
  }
}

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.substring(1);
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
