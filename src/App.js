import React, { Component } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Intro from './components/Intro';
import logo from './white_logo_transparent_background.svg';
import './App.css';

import quizQuestions from './api/quizQuestions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: '',
      answerOptions: [],
      correctAnswers: 0,
      counter: 0,
      question: '',
      showResults: false,
      showIntroduction: true,
    };
  }

  componentWillMount() {
    this.setState({
      question: quizQuestions[this.state.counter].question,
      answerOptions: quizQuestions[this.state.counter].answerOptions,
    });
  }

  handleAnswerSelected = event => {
    this.setState({
      answer: event.currentTarget.value,
    });
  };

  setNextQuestion = () => {
    const counter = this.state.counter + 1;

    this.setState({
      counter: counter,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answerOptions,
      answer: '',
    });
  };

  handleClick = () => {
    const { answer, counter, correctAnswers } = this.state;
    if (answer === quizQuestions[counter].correctAnswer) {
      this.setState({ correctAnswers: correctAnswers + 1 });
    }

    if (counter + 1 === quizQuestions.length) {
      this.setState({ showResults: true });
    } else {
      this.setNextQuestion();
    }
  };

  startQuiz = () => {
    this.setState({ showIntroduction: false });
  };

  restartQuiz = () => {
    this.setState({
      answer: '',
      answerOptions: quizQuestions[0].answerOptions,
      correctAnswers: 0,
      counter: 0,
      question: quizQuestions[0].question,
      showResults: false,
      showIntroduction: true,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="https://wanderingleafstudios.com">
            <img src={logo} className="App-logo" alt="Wandering Leaf Studios logo" />
          </a>
        </header>
        <div style={{ marginBottom: `2rem` }}>
          {this.state.showIntroduction ? (
            <Intro handleClick={this.startQuiz} />
          ) : !this.state.showResults ? (
            <Quiz
              answer={this.state.answer}
              answerOptions={this.state.answerOptions}
              counter={this.state.counter}
              question={this.state.question}
              questionTotal={quizQuestions.length}
              onAnswerSelected={this.handleAnswerSelected}
              handleClick={this.handleClick}
            />
          ) : (
            <Result
              questionTotal={quizQuestions.length}
              correctAnswers={this.state.correctAnswers}
              handleRestart={this.restartQuiz}
            />
          )}
        </div>
        <footer style={{ margin: `2rem auto`, fontSize: `0.75rem` }}>
          Built with <span aria-label="heart" role="img">❤️</span> using{' '}
          <a className="App-link" href="https://reactjs.org/">
            ReactJS
          </a>{' '}
          and{' '}
          <a className="App-link" href="https://material-ui.com/">
            Material-UI
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
