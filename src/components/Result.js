import React, { Component } from 'react';
import Circle from 'react-circle';
import Typography from '@material-ui/core/Typography'

class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    const { correctAnswers, questionTotal } = this.props
    const progress = Math.floor((correctAnswers / questionTotal) * 100);
    setTimeout(() => this.setState({
      progress: progress
    }), 300)
  }

  render() {
    const { correctAnswers, questionTotal } = this.props

    return (
      <div>
        <Typography variant="h4" gutterBottom>
          You answered {correctAnswers} correct out of {questionTotal}
        </Typography>
        <Circle
          animate={true}
          animationDuration="1s"
          responsive={false}
          size="240"
          lineWidth="25"
          progress={this.state.progress}
          progressColor="rgb(76, 154, 255)"
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
      </div>
    );
  }
}

export default Result;
