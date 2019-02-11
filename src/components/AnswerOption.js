import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel, Radio } from '@material-ui/core';

function AnswerOptions(props) {
  return (
    <FormControlLabel
      value={props.answerValue}
      control={<Radio color="primary" />}
      label={props.answerContent}
      name="answerGroup"
      id={props.answerValue}
      checked={props.answer === props.answerValue}
      onChange={props.onAnswerSelected}
    />
  );
}

AnswerOptions.propTypes = {
  answer: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answerValue: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

export default AnswerOptions;
