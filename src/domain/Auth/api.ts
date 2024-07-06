import { api } from '@api';

import { UserAPI } from '../User';

import {
  AuthCredentialsAPI,
  SignUpDataAPI,
  FieldIsAvailableAPI,
} from './types';

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

const isUserNameAvailable = async (params: {
  username: string;
}): Promise<FieldIsAvailableAPI> => {
  const response = await api.get<FieldIsAvailableAPI>('validate-username', {
    params,
  });

  return response.data;
};

const isEmailAvailable = async (params: {
  email: string;
}): Promise<FieldIsAvailableAPI> => {
  const response = await api.get<FieldIsAvailableAPI>('validate-email', {
    params,
  });

  return response.data;
};

export const authApi = {
  signUp,
  signIn,
  signOut,
  isUserNameAvailable,
  isEmailAvailable,
};
