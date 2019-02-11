import React from 'react';
import PropTypes from 'prop-types';
import AnswerOption from './AnswerOption';
import Question from './Question';
import { FormControl, MuiThemeProvider } from '@material-ui/core';

// Assets
import theme from '../theme';

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
      <Question content={props.question} />
      <FormControl component="fieldset">{props.answerOptions.map(renderAnswerOptions)}</FormControl>
    </MuiThemeProvider>
  );
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

export default Quiz;
