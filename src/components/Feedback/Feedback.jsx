import React from 'react';
import Statistics from './Statistics/Statistics';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleIncrementNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleIncrementBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  countTotalFeedback = () => {};
  countPositiveFeedbackPercentage = () => {};

  render() {
    return (
      <section>
        <h1>Please leave feedback</h1>
        <button onClick={this.handleIncrementGood}>Good</button>
        <button onClick={this.handleIncrementNeutral}>Neutral</button>
        <button onClick={this.handleIncrementBad}>Bad</button>

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </section>
    );
  }
}

export default Feedback;
