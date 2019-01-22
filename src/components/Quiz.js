import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import theme from '../theme';
import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';
import { MuiThemeProvider } from '@material-ui/core';

function Quiz(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerValue={key.value}
        answer={props.answer}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return (
    <MuiThemeProvider theme={theme}>
      <QuestionCount counter={props.counter} total={props.questionTotal} />
      <Question content={props.question} />
      <FormControl component="fieldset">
        {props.answerOptions.map(renderAnswerOptions)}
        <div style={{ marginTop: `1rem` }}>
          <Button variant="contained" color="primary" onClick={props.handleClick}>
            Next
          </Button>
        </div>
      </FormControl>
    </MuiThemeProvider>
  );
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  counter: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Quiz;
