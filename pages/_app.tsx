import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../src/theme';
import NavigationBar from '../src/NavigationBar';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container fixed maxWidth="md" sx={{ p: 4 }}>
      <Typography variant="h1" align="center" gutterBottom>
        Hanzhi Yin
      </Typography>
      <NavigationBar />
      <Component {...pageProps} />
    </Container>
  </ThemeProvider>
);

export default MyApp;
