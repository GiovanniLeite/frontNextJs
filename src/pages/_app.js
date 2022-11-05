/* eslint-disable react/prop-types */
import '@fontsource/open-sans/300.css';
import { ToastContainer } from 'react-toastify';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';

import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <ToastContainer autoClose={3000} className="toast-container" />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
