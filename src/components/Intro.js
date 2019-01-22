import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import teaProcessingChart from '../tea-processing-chart.png';
import { MuiThemeProvider } from '@material-ui/core';
import theme from '../theme';
import '../App.css';

function Intro(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <Typography variant="h2" gutterBottom>
        Tea Processing Quiz
      </Typography>
      <Typography gutterBottom>
        Review the chart below. When ready, press <strong>Start Quiz</strong>.
      </Typography>
      <div style={{ maxWidth: 730, margin: '0 auto' }}>
        <img src={teaProcessingChart} alt="Tea Processing Chart" style={{ width: '100%' }} />
        <Typography variant="caption" gutterBottom style={{ marginBottom: 10 }}>
          Tea Processing Chart by{' '}
          <a href="https://www.worldoftea.org" rel="cc:attributionURL" className="App-link">
            Tony Gebely
          </a>{' '}
          is licensed under a{' '}
          <a href="http://creativecommons.org/licenses/by-nd/3.0/" rel="license"  className="App-link">
            Creative Commons Attribution-NoDerivs 3.0 Unported License
          </a>
          <br />. Based on a work at{' '}
          <a href="https://worldoftea.org/tea-processing-chart/" rel="dct:source"  className="App-link">
            worldoftea.org
          </a>
          .
        </Typography>
      </div>
      <div>
        <Button variant="contained" color="primary" onClick={props.handleClick}>
          Start Quiz
        </Button>
      </div>
    </MuiThemeProvider>
  );
}

Intro.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Intro;
