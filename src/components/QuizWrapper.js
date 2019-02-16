import React, { Component } from 'react';
import QuestionCount from '../components/QuestionCount';
import Quiz from '../components/Quiz';
import Result from '../components/Result';
import { Button, Fade, MobileStepper, MuiThemeProvider } from '@material-ui/core';

// Assets
import quizQuestions from '../api/quizQuestions';
import theme from '../theme';

class QuizWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0,
      answerOptions: [],
      correctAnswers: 0,
      selectedAnswers: [],
      fadeIn: false,
      question: '',
      showResults: false,
    };
  }

  componentWillMount() {
    this.setState({
      answerOptions: quizQuestions[this.state.activeStep].answerOptions,
      fadeIn: true,
      question: quizQuestions[this.state.activeStep].question,
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
    let selectedAnswers = this.state.selectedAnswers;

    selectedAnswers[this.state.activeStep] = event.currentTarget.value;

    this.setState({
      selectedAnswers: selectedAnswers,
    });
  };

  handleNext = () => {
    this.fadeOutQuestion();
    setTimeout(this.setNextQuestion, 500);
  };

  handleBack = () => {
    this.fadeOutQuestion();
    setTimeout(this.setPreviousQuestion, 500);
  };

  scoreAnswers = () => {
    let correctAnswers = 0;

    quizQuestions.forEach((question, index) => {
      if (this.state.selectedAnswers[index] === question.correctAnswer) {
        correctAnswers += 1;
      }
    });

    return correctAnswers;
  };

  setNextQuestion = () => {
    const activeStep = this.state.activeStep + 1;

    if (activeStep === quizQuestions.length) {
      setTimeout(() => this.setState({ showResults: true }), 500);
    } else {
      this.setState({
        activeStep: activeStep,
        answer: '',
        answerOptions: quizQuestions[activeStep].answerOptions,
        question: quizQuestions[activeStep].question,
      });

      setTimeout(this.fadeInQuestion, 500);
    }
  };

  setPreviousQuestion = () => {
    const activeStep = this.state.activeStep - 1;

    this.setState({
      activeStep: activeStep,
      answer: '',
      answerOptions: quizQuestions[activeStep].answerOptions,
      question: quizQuestions[activeStep].question,
    });

    setTimeout(this.fadeInQuestion, 500);
  };

  restartQuiz = () => {
    this.setState({
      activeStep: 0,
      answerOptions: quizQuestions[0].answerOptions,
      correctAnswers: 0,
      fadeIn: true,
      question: quizQuestions[0].question,
      selectedAnswers: [],
      showResults: false,
    });
  };

  render() {
    return (
      <div>
        {this.state.showResults ? (
          <Fade in={this.state.showResults} timeout={{ enter: 500, exit: 500 }}>
            <div>
              <Result
                correctAnswers={this.scoreAnswers()}
                questionTotal={quizQuestions.length}
                handleRestart={this.restartQuiz}
              />
            </div>
          </Fade>
        ) : (
          <MuiThemeProvider theme={theme}>
            <Fade in={this.state.fadeIn} timeout={{ enter: 500, exit: 500 }}>
              <div>
                <Quiz
                  answer={this.state.selectedAnswers[this.state.activeStep]}
                  answerOptions={this.state.answerOptions}
                  question={this.state.question}
                  onAnswerSelected={this.handleAnswerSelected}
                />
              </div>
            </Fade>
            <div style={{ marginTop: `1rem` }}>
              <MobileStepper
                variant="progress"
                steps={quizQuestions.length}
                position="static"
                activeStep={this.state.activeStep}
                style={{ maxWidth: '320px', margin: '0 auto', background: 'transparent' }}
                nextButton={
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                    disabled={this.state.activeStep === quizQuestions.length}
                  >
                    Next
                  </Button>
                }
                backButton={
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleBack}
                    disabled={this.state.activeStep === 0}
                  >
                    Back
                  </Button>
                }
              />
              <QuestionCount activeStep={this.state.activeStep} total={quizQuestions.length} />
            </div>
          </MuiThemeProvider>
        )}
      </div>
    );
  }
}

export default QuizWrapper;
