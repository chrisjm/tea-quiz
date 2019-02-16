import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

function QuestionCount(props) {
  return (
    <Typography gutterBottom>
      Question <strong>{props.activeStep + 1}</strong> of <strong>{props.total}</strong>
    </Typography>
  );
}

QuestionCount.propTypes = {
  activeStep: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default QuestionCount;
