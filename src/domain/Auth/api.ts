import { RequestConfig, api } from '@api';

import { UserAPI } from '../User';

import {
  AuthCredentialsAPI,
  FieldIsAvailableAPI,
  ForgotPasswordParam,
  SignUpDataAPI,
} from './types';

const REFRESH_TOKEN_URL = 'auth/refresh-token';

const signIn = async (email: string, password: string): Promise<AuthCredentialsAPI> => {
  email = email.trim();
  password = password.trim();

  const response = await api.post<AuthCredentialsAPI>('auth/login', {
    email,
    password,
  });

  return response.data;
};

const signOut = async (): Promise<string> => {
  const response = await api.get<string>('auth/profile/logout');

  return response.data;
};

const signUp = async (data: SignUpDataAPI): Promise<UserAPI> => {
  data.email = data.email.trim();
  data.password = data.password.trim();

  const response = await api.post<UserAPI>('auth/register', data);
  return response.data;
};

const isUserNameAvailable = async (params: {
  username: string;
}): Promise<FieldIsAvailableAPI> => {
  const response = await api.get<FieldIsAvailableAPI>('auth/validate-username', {
    params,
  });

  return response.data;
};

const isEmailAvailable = async (params: {
  email: string;
}): Promise<FieldIsAvailableAPI> => {
  const response = await api.get<FieldIsAvailableAPI>('auth/validate-email', {
    params,
  });

  return response.data;
};

const forgotPassword = async (
  params: ForgotPasswordParam,
): Promise<{ message: string }> => {
  const response = await api.post<{ message: string }>('auth/forgot-password', params);

  return response.data;
};

const refreshToken = async (token: string): Promise<AuthCredentialsAPI> => {
  const response = await api.post<AuthCredentialsAPI>(REFRESH_TOKEN_URL, {
    refreshToken: token,
  });

  return response.data;
};

/**
 * @param axiosConfig [AxiosRequestConfig](https://axios-http.com/docs/req_config) - The Axios request configuration
 * @returns  Check the config URL property to returns if is a refresh token request
 */
const isRefreshTokenRequest = (request: RequestConfig): boolean => {
  const url = request.url;

  return url === REFRESH_TOKEN_URL;
};

export const authApi = {
  signUp,
  signIn,
  signOut,
  isUserNameAvailable,
  isEmailAvailable,
  forgotPassword,
  refreshToken,
  isRefreshTokenRequest,
};
