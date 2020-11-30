import AsyncStorage from '@react-native-async-storage/async-storage';

export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log(e);
  }
};

export const getToken = async () => {
  try {
    return await AsyncStorage.getItem('token');
  } catch (e) {
    console.log(e);
  }
};

export const setToken = async () => {
  try {
    await AsyncStorage.setItem('token');
  } catch (e) {
    console.log(e);
  }
};
