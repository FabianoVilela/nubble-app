import axiosAPI, { AxiosRequestConfig } from 'axios';

interface AxiosConfig {
  baseURL: string;
  authorization?: string;
}

export type { AxiosRequestConfig };

export const create = ({ baseURL }: AxiosConfig) => {
  return axiosAPI.create({
    baseURL,
  });
};
