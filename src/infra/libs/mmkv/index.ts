import { STORAGE_KEY } from '@constants';
import { Storage } from '@services';
import { MMKV } from 'react-native-mmkv';

const mmkv = new MMKV();

export class MMKVStorage implements Storage {
  async getItem<T = unknown>(key: string) {
    const item = mmkv.getString(`${STORAGE_KEY}${key}`);

    if (item) {
      return JSON.parse(item) as T;
    }

    return null;
  }

  async setItem<T>(key: string, value: T): Promise<void> {
    mmkv.set(`${STORAGE_KEY}${key}`, JSON.stringify(value));
  }

  async removeItem(key: string): Promise<void> {
    mmkv.delete(`${STORAGE_KEY}${key}`);
  }
}
