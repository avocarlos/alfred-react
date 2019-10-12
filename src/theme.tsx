import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#7c122e'
    },
    background: {
      default: '#fff',
      paper: '#fff'
    }
  },
  mixins: {
    toolbar: {
      minHeight: 80
    }
  }
});

if (process.env.NODE_ENV === "development") {
  console.log(theme);
}

export default theme;