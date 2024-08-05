import { userAdapter } from '../User/adapter';

import { AuthCredentials, AuthCredentialsAPI } from './types';

const toAuthCredentials = (authCredentialsAPI: AuthCredentialsAPI): AuthCredentials => {
  return {
    token: authCredentialsAPI.auth.token,
    tokenExpiresAt: authCredentialsAPI.auth.expires_at,
    refreshToken: authCredentialsAPI.auth.refreshToken,
    user: userAdapter.toUser(authCredentialsAPI.user),
  };
};

export const authAdapter = { toAuthCredentials };
