import React, { Component } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result'
import logo from './logo.svg';
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
      setTimeout(this.setNextQuestion, 300);
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {!this.state.showResults ? (
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
          <Result questionTotal={quizQuestions.length} correctAnswers={this.state.correctAnswers} />
        )}
      </div>
    );
  }
}

export default App;
