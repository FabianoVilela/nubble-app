import React from 'react';

import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Toast } from '@components';
import { Router } from '@routes';
import { theme } from '@theme';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Router />
        <Toast />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
