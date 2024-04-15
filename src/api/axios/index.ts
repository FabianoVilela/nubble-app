import axiosAPI from 'axios';

interface AxiosConfig {
  baseURL: string;
  authorization?: string;
}

export const create = ({ baseURL }: AxiosConfig) => {
  return axiosAPI.create({
    baseURL,
  });
};
