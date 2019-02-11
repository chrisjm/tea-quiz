import React, { Component } from 'react';
import QuestionCount from '../components/QuestionCount';
import Quiz from '../components/Quiz';
import Result from '../components/Result';
import { Button, Fade, MuiThemeProvider } from '@material-ui/core';

// Assets
import quizQuestions from '../api/quizQuestions';
import theme from '../theme';

class QuizWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: '',
      answerOptions: [],
      correctAnswers: 0,
      counter: 0,
      fadeIn: false,
      question: '',
      showResults: false,
    };
  }

  componentWillMount() {
    this.setState({
      answerOptions: quizQuestions[this.state.counter].answerOptions,
      fadeIn: true,
      question: quizQuestions[this.state.counter].question,
    });
  }

  fadeInQuestion = () => {
    this.setState({
      fadeIn: true,
    });
  };

  fadeOutQuestion = () => {
    this.setState({
      fadeIn: false,
    });
  };

  handleAnswerSelected = event => {
    this.setState({
      answer: event.currentTarget.value,
    });
  };

  handleClick = () => {
    this.fadeOutQuestion();
    this.scoreAnswer();
  };

  setNextQuestion = () => {
    const counter = this.state.counter + 1;

    this.setState({
      answer: '',
      answerOptions: quizQuestions[counter].answerOptions,
      counter: counter,
      question: quizQuestions[counter].question,
    });

    this.fadeInQuestion();
  };

  restartQuiz = () => {
    this.setState({
      answer: '',
      answerOptions: quizQuestions[0].answerOptions,
      correctAnswers: 0,
      counter: 0,
      fadeIn: true,
      question: quizQuestions[0].question,
      showResults: false,
    });
  };

  scoreAnswer = () => {
    const { answer, counter, correctAnswers } = this.state;

    if (answer === quizQuestions[counter].correctAnswer) {
      this.setState({ correctAnswers: correctAnswers + 1 });
    }

    if (counter + 1 === quizQuestions.length) {
      setTimeout(() => this.setState({ showResults: true }), 500);
    } else {
      setTimeout(this.setNextQuestion, 500);
    }
  };

  render() {
    return (
      <div>
        {this.state.showResults ? (
          <Fade in={this.state.showResults} timeout={{ enter: 500, exit: 500 }}>
            <div>
              <Result
                correctAnswers={this.state.correctAnswers}
                questionTotal={quizQuestions.length}
                handleRestart={this.restartQuiz}
              />
            </div>
          </Fade>
        ) : (
          <MuiThemeProvider theme={theme}>
            <Fade in={this.state.fadeIn} timeout={{ enter: 500, exit: 500 }}>
              <div>
                <QuestionCount counter={this.state.counter} total={quizQuestions.length} />
                <Quiz
                  answer={this.state.answer}
                  answerOptions={this.state.answerOptions}
                  question={this.state.question}
                  onAnswerSelected={this.handleAnswerSelected}
                />
              </div>
            </Fade>
            <div style={{ marginTop: `1rem` }}>
              <Button variant="contained" color="primary" onClick={this.handleClick}>
                Next
              </Button>
            </div>
          </MuiThemeProvider>
        )}
      </div>
    );
  }
}

export default QuizWrapper;
