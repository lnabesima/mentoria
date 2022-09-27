import { createTheme } from '@mui/material/styles';
import { green, yellow, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: yellow[500],
    },
    success: {
      main: green[500],
    },
    error: {
      main: red[500],
    },
  },
});

export default theme;
