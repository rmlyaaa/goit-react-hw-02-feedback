import { GlobalStyled } from './GlobalStyles';
import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './Options/Options';
import { Statistics } from './Stats/Stats';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = options => {
    this.setState(prevState => ({ [options]: prevState[options] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    if (neutral > 0 || bad > 0) {
      return Math.round(100 / (this.countTotalFeedback() / good));
    }
    return 100;
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <>
        <GlobalStyled />
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title={'Statistics'}>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </>
    );
  }
}
