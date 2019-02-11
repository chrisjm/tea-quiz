import React, { Component } from 'react';
import Intro from './components/Intro';
import Footer from './components/Footer';
import Header from './components/Header';
import QuizWrapper from './components/QuizWrapper';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showIntroduction: true,
    };
  }

  startQuiz = () => {
    this.setState({ showIntroduction: false });
  };

  render() {
    return (
      <div className="app">
        <Header />
        <div style={{ marginBottom: `2rem` }}>
          {this.state.showIntroduction ? <Intro handleClick={this.startQuiz} /> : <QuizWrapper />}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
