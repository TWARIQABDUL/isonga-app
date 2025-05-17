// utils/storage.ts
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

// Check if platform is web
const isWeb = Platform.OS === 'web';

export const saveItem = async (key: string, value: string) => {
  if (isWeb) {
    localStorage.setItem(key, value);
  } else {
    await SecureStore.setItemAsync(key, value);
  }
};

export const getItem = async (key: string): Promise<string | null> => {
  if (isWeb) {
    return localStorage.getItem(key);
  } else {
    return await SecureStore.getItemAsync(key);
  }
};

export const deleteItem = async (key: string) => {
  if (isWeb) {
    localStorage.removeItem(key);
  } else {
    await SecureStore.deleteItemAsync(key);
  }
};
