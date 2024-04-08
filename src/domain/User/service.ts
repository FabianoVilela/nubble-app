import { userAdapter } from './adapter';
import { userApi } from './api';
import { User } from './types';

const getById = async (id: number): Promise<User> => {
  const userAPI = await userApi.getById(id.toString());

  return userAdapter.toUser(userAPI);
};

export const userService = {
  getById,
};
