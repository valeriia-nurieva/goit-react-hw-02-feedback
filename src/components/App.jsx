import { Component } from 'react';
import Statistics from './Feedback/Statistics';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Section from './Feedback/Section';
import Notification from './Feedback/Notification';
import { Box } from './Box';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };
  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => acc + value, 0);
  };
  countPositiveFeedbackPercentage = (total, good) => {
    const percentage = Math.round((good / total) * 100);
    return percentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total, good);
    const options = Object.keys(this.state);
    return (
      <Box
        width="320px"
        mr="auto"
        ml="auto"
        p="3"
        border="5px dashed"
        borderRadius="5px"
        borderColor="accent"
      >
        <Box mb={3}>
          <Section title="Please leave feedback">
            <Box display="flex" gridGap="10px">
              <FeedbackOptions
                options={options}
                onLeaveFeedback={this.handleFeedback}
              />
            </Box>
          </Section>
        </Box>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Box>
    );
  }
}

export default App;
