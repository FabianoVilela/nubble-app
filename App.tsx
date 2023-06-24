import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme';
import {Login} from './src/assets/screens/auth/Login';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
