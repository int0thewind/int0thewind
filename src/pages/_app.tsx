import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import ContentContainer from '../components/ui-components/ContentContainer';
import '../styles/globals.css';

export default ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <ContentContainer>
      <Header />
      <Component {...pageProps} />
    </ContentContainer>
  </ThemeProvider>
);
