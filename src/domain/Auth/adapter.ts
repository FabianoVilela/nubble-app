import { userAdapter } from '../User/adapter';

import { AuthCredentials, AuthCredentialsAPI } from './types';

const toAuthCredentials = (
  authCredentialsAPI: AuthCredentialsAPI,
): AuthCredentials => {
  return {
    token: authCredentialsAPI.auth.token,
    user: userAdapter.toUser(authCredentialsAPI.user),
  };
};

export const authAdapter = { toAuthCredentials };
