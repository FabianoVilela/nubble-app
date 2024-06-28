import { AUTH_KEY } from '@constants';
import { AuthCredentials } from '@domain';
import { storage } from '@services';

const set = async (ac: AuthCredentials): Promise<void> => {
  await storage.setItem(AUTH_KEY, ac);
};

const get = async (): Promise<AuthCredentials | null> => {
  return await storage.getItem<AuthCredentials>(AUTH_KEY);
};

const remove = async (): Promise<void> => {
  await storage.removeItem(AUTH_KEY);
};

export const authCredentialsStorage = { set, get, remove };
