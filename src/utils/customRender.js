import { render } from '@testing-library/react';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';

export const customRender = (children) => {
  return render(
    <ThemeProvider theme={theme}>
      {children}
      <ToastContainer autoClose={3000} className="toast-container" />
      <GlobalStyles />
    </ThemeProvider>,
  );
};
