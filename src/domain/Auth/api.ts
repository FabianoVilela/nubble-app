import { api } from '@api';

import { AuthCredentialsAPI } from './types';

const signIn = async (
  email: string,
  password: string,
): Promise<AuthCredentialsAPI> => {
  const response = await api.post<AuthCredentialsAPI>('login', {
    email,
    password,
  });

  return response.data;
};

const signOut = async (): Promise<string> => {
  const response = await api.get<string>('profile/logout');

  return response.data;
};

export const authApi = {
  signIn,
  signOut,
};
