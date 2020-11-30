import { Alert } from 'react-native';

import store from '../redux/index';
import { handleLoader, signIn, signUp } from '../redux/actions/authActions';
import { setToken } from '../services/storage';
import { baseUrl } from '../constants';

export const signInApi = (data) => {
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  store.dispatch(handleLoader());
  return fetch(`${baseUrl}/auth`, request)
    .then(async (response) => {
      if (!response.ok) {
        throw response;
      }
      let res = await response.json();
      const { token } = res;
      await setToken(token);
      store.dispatch(signIn(token));
    })
    .catch((err) => {
      err.text().then((errorMessage) => {
        Alert.alert(errorMessage);
        console.log(errorMessage, err.status);
      });
    })
    .finally(() => {
      store.dispatch(handleLoader());
    });
};

export const signUpApi = (data) => {
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  store.dispatch(handleLoader());
  return fetch(`${baseUrl}/users`, request)
    .then(async (response) => {
      if (!response.ok) {
        throw response;
      }
      let res = await response.json();
      const { token } = res;
      await setToken(token);
      store.dispatch(signUp(token));
    })
    .catch((err) => {
      err.text().then((errorMessage) => {
        Alert.alert(errorMessage);
        console.log(errorMessage, err.status);
      });
    })
    .finally(() => {
      store.dispatch(handleLoader());
    });
};
