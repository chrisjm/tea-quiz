import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import teaProcessingChart from '../tea-processing-chart.png';

function Intro(props) {
  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Tea Processing Quiz
      </Typography>
      <Typography variant="body1" gutterBottom>
        Review the chart below. When ready, press <strong>Start Quiz</strong>.
      </Typography>
      <div style={{ maxWidth: 730, margin: '0 auto' }}>
        <img src={teaProcessingChart} alt="Tea Processing Chart" style={{ width: '100%' }} />
      </div>
      <div>
        <Button variant="contained" color="primary" onClick={props.handleClick}>
          Start Quiz
        </Button>
      </div>
    </div>
  );
}

Intro.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Intro;
