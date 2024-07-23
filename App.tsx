import React, { useState } from 'react';

import { MMKVStorage } from '@infra';
import { AuthCredentialsProvider, initializeStorage } from '@services';
import { ThemeProvider } from '@shopify/restyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Toast } from '@components';
import { Router } from '@routes';
import { theme } from '@theme';
import { Button } from 'react-native';

const storage = new MMKVStorage();

function App(): JSX.Element {
  const [queryClient] = useState(() => new QueryClient());

  initializeStorage(storage);

  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <Router />
            <Toast />
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
}

export default App;
