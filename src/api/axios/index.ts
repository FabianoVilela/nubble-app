import axiosAPI from 'axios';

interface AxiosConfig {
  baseURL: string;
  authorization: string;
}

export const create = ({ baseURL, authorization }: AxiosConfig) => {
  return axiosAPI.create({
    baseURL,
    headers: {
      Authorization: authorization,
    },
  });
};
