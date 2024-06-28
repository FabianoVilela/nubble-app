import { useContext } from 'react';

import { AuthCredentialsContext } from './Providers/AuthCredentialsProvider';
import { AuthCredentialsService } from './types';

export const useAuthCredentials = (): AuthCredentialsService => {
  const context = useContext(AuthCredentialsContext);

  if (!context) {
    throw new Error(
      'AuthCredentials should be used within a AuthCredentialsProvider',
    );
  }

  return context;
};
