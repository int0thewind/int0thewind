import createCache from '@emotion/cache';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const theme = responsiveFontSizes(createTheme({
  typography: {
    fontFamily: 'Cormorant, serif',
  },
}));

export function createEmotionCache() {
  return createCache({ key: 'css' });
}
