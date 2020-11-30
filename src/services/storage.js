import AsyncStorage from 'react-native-async-storage';

export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log(e);
  }
};

export const getToken = () => {
  return AsyncStorage.getItem('token')
    .then((userToken) => {
      return userToken;
    })
    .catch((e) => console.log(e));
};

export const setToken = (token) => {
  if (token) {
    return AsyncStorage.setItem('token', token)
      .then(() => {
        return token;
      })
      .catch((e) => console.log(e));
  }
};
