import { AxiosRequestConfig, create } from './axios';

// TODO: Move this constants to .env
export const BASE_URL = 'http://192.168.0.124:3333';

// TODO: Implement API services to abstract API calls
const axiosAPI = create({
  baseURL: BASE_URL,
});

export type { AxiosRequestConfig as RequestConfig };
export const api = axiosAPI;
