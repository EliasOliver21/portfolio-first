import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#030303',
    },
    secondary: {
      main: '#dbe1d5',
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
            //#767d8f
  }
});

export default theme;

 