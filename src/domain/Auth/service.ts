import { api } from '@api';

import { authAdapter } from './adapter';
import { authApi } from './api';
import { AuthCredentials, SignUpData } from './types';

const signUp = async (signUpData: SignUpData): Promise<void> => {
  await authApi.signUp(signUpData);
};

const signIn = async (
  email: string,
  password: string,
): Promise<AuthCredentials> => {
  try {
    const authCredentialsAPI = await authApi.signIn(email, password);

    return authAdapter.toAuthCredentials(authCredentialsAPI);
  } catch (error) {
    throw new Error('E-mail ou senha inválida');
  }
};

const signOut = async (): Promise<string> => {
  const message = await authApi.signOut();
  return message;
};

const updateToken = (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeToken = () => {
  api.defaults.headers.common.Authorization = null;
};

const isUserNameAvailable = async (username: string): Promise<boolean> => {
  const { isAvailable } = await authApi.isUserNameAvailable({ username });
  return isAvailable;
};

const isEmailAvailable = async (email: string): Promise<boolean> => {
  const { isAvailable } = await authApi.isEmailAvailable({ email });
  return isAvailable;
};

export const authService = {
  signUp,
  signIn,
  signOut,
  updateToken,
  removeToken,
  isUserNameAvailable,
  isEmailAvailable,
};
