import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme';
import {Login} from './src/assets/screens/auth/Login';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}

export default App;
