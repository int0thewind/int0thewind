import { FC } from 'react';
import Link from 'next/link';
import type { AppProps } from 'next/app';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme';
import { cvLink } from '../src/personal';

/** All items in the navigation bar. */
const navigationItems = {
  'About Me': { link: '/' },
  Works: { link: '/works' },
  CV: { link: cvLink },
};

/** The navigation bar to be displayed on the top of the webpage. */
const Header: FC = () => (
  <Box component="header">
    <Typography variant="h1" align="center" gutterBottom>
      Hanzhi Yin
    </Typography>
    <Divider />
    <Grid container>
      {Object.entries(navigationItems).map(([displayName, { link }]) => (
        <Grid item xs={12} sm={4} key={displayName}>
          <Link href={link} passHref>
            <Typography
              variant="h6"
              align="center"
              sx={{ cursor: 'pointer', ':hover, :active': { textDecoration: 'underline', textDecorationThickness: 1 } }}
            >
              {displayName}
            </Typography>
          </Link>
        </Grid>
      ))}
    </Grid>
    <Divider />
  </Box>
);

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container fixed maxWidth="md" sx={{ p: 4 }}>
      <Header />
      <Component {...pageProps} />
    </Container>
  </ThemeProvider>
);

export default MyApp;
