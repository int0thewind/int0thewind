import { createTheme, responsiveFontSizes } from '@mui/material/styles';

/** Global theme for the entire site. */
const theme = responsiveFontSizes(createTheme({
  typography: {
    fontFamily: 'Cormorant, serif',
  },
}));

export default theme;
