import { STORAGE_KEY } from '@constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Storage } from '@services';

export class LocalAsyncStorage implements Storage {
  async getItem<T = unknown>(key: string) {
    const item = await AsyncStorage.getItem(`${STORAGE_KEY}${key}`);

    if (item) {
      return JSON.parse(item) as T;
    }

    return null;
  }

  async setItem<T>(key: string, value: T): Promise<void> {
    return AsyncStorage.setItem(`${STORAGE_KEY}${key}`, JSON.stringify(value));
  }

  async removeItem(key: string): Promise<void> {
    return AsyncStorage.removeItem(`${STORAGE_KEY}${key}`);
  }
}
