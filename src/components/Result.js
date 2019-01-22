import React, { Component } from 'react';
import Circle from 'react-circle';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core';
import theme from '../theme';

class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
    };
  }

  componentDidMount() {
    const { correctAnswers, questionTotal } = this.props;
    const progress = Math.floor((correctAnswers / questionTotal) * 100);
    setTimeout(
      () =>
        this.setState({
          progress: progress,
        }),
      300
    );
  }

  render() {
    const { correctAnswers, questionTotal, handleRestart } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <Typography variant="h3" gutterBottom>
          You answered {correctAnswers} correct out of {questionTotal}!
        </Typography>
        <Circle
          animate={true}
          animationDuration="1s"
          responsive={false}
          size="240"
          lineWidth="25"
          progress={this.state.progress}
          progressColor="#588F27"
          bgColor="#ecedf0"
          textColor="#6b778c"
          textStyle={{
            font: 'bold 4rem Helvetica, Arial, sans-serif',
          }}
          percentSpacing={10}
          roundedStroke={true}
          showPercentage={true}
          showPercentageSymbol={true}
        />
        <div style={{ marginTop: `1rem` }}>
          <Button variant="contained" color="primary" onClick={handleRestart}>
            Restart Quiz
          </Button>
        </div>
      </MuiThemeProvider>
    );
  }
}

Result.propTypes = {
  handleRestart: PropTypes.func.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
};

export default Result;
