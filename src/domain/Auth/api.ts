import { api } from '@api';

import { UserAPI } from '../User';

import { AuthCredentialsAPI, SignUpDataAPI } from './types';

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

const signUp = async (data: SignUpDataAPI): Promise<UserAPI> => {
  const response = await api.post<UserAPI>('register', data);
  return response.data;
};

export const authApi = {
  signUp,
  signIn,
  signOut,
};
