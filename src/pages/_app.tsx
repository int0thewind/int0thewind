import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Container from '../components/ui-components/Container';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Container>
    <Header />
    <Component {...pageProps} />
  </Container>
);

export default MyApp;
