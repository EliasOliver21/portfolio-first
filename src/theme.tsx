import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#030303',
    },
    secondary: {
      main: '#767d8f',
    },
  },
  typography:{
        fontFamily: "-apple-system"
        // '-apple-system',
            // 'BlinkMacSystemFont',
            // '"Segoe UI"',
            // 'Roboto',
            // '"Helvetica Neue"',
            // 'Arial',
            // 'sans-serif',
            // '"Apple Color Emoji"',
            // '"Segoe UI Emoji"',
            // '"Segoe UI Symbol"',
  }
});

export default theme;

 