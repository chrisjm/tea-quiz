import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#588F27',
      dark: '#26450B',
      light: '#89DF3D'
    },
  },
  typography: {
    useNextVariants: true
  }
});

export default theme;
