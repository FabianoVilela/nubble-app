import { Platform } from 'react-native';

export const usePlatform = () => {
  const isAndroid = Platform.OS === 'android';
  const isIos = !isAndroid;

  return {
    isAndroid,
    isIos,
  };
};
