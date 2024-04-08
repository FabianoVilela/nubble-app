import { api } from '@api';

import { UserAPI } from './types';

const PATH = 'users';

const getById = async (userId: string): Promise<UserAPI> => {
  const response = await api.get<UserAPI>(`${PATH}/${userId}`);

  return response.data;
};

export const userApi = {
  getById,
};
