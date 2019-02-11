import React from 'react'

function Footer() {
  return (
    <footer style={{ margin: `2rem auto`, fontSize: `0.75rem` }}>
      Built with{' '}
      <span aria-label="heart" role="img">
        ❤️
      </span>{' '}
      using{' '}
      <a className="link" href="https://reactjs.org/">
        ReactJS
      </a>{' '}
      and{' '}
      <a className="link" href="https://material-ui.com/">
        Material-UI
      </a>
    </footer>
  )
}

export default Footer;
