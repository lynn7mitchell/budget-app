import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#C8E6C9',
      main: '#4CAF50',
      dark: '#388E3C',
      contrastText: '#fff',
    },
    secondary: {
      light: '#67daff',
      main: '#03A9F4',
      dark: '#007ac1',
      contrastText: '#fff',
    },
  },
});

export default theme;