import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme';
import {Login} from './src/screens/auth/Login';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SignUp} from './src/screens/auth/SignUp';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        {/* <Login /> */}
        <SignUp />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
