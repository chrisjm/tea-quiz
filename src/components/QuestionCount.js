import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

function QuestionCount(props) {
  return (
    <Typography gutterBottom>
      Question <strong>{props.counter + 1}</strong> of <strong>{props.total}</strong>
    </Typography>
  );
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default QuestionCount;
