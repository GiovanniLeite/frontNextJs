import '@fontsource/open-sans/300.css';

import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
// import { initialize, mswDecorator } from 'msw-storybook-addon';

import { GlobalStyles } from '../src/styles/global';
import { theme } from '../src/styles/theme';

// initialize();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
      <ToastContainer autoClose={3000} className="toast-container" />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider];
// export const decorators = [mswDecorator, withThemeProvider];


