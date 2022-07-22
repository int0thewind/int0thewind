import type { AppProps } from 'next/app';
import Header from '../components/Header';
import ContentContainer from '../components/ui-components/ContentContainer';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ContentContainer>
    <Header />
    <Component {...pageProps} />
  </ContentContainer>
);

export default MyApp;
