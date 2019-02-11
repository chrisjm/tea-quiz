import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'

function Question(props) {
  return (
    <Typography variant="h4" gutterBottom>
      {props.content}
    </Typography>
  )
}

Question.propTypes = {
  content: PropTypes.string.isRequired
}

export default Question
