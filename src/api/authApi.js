import { Alert } from 'react-native';

import store from '../redux/index';
import {} from '../redux/actions';
import {} from '../redux/actionTypes';
import { baseUrl } from '../constants';

export const signIn = (data) => {
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  return fetch(`${baseUrl}/auth`, request)
    .then(async (response) => {
      if (!response.ok) {
        throw response;
      }
      let res = await response.json();
    })
    .catch((err) => {
      err.text().then((errorMessage) => {
        Alert.alert(errorMessage);
        console.log(errorMessage, err.status);
      });
    })
    .finally(() => {});
};

export const signUp = (data) => {
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  return fetch(`${baseUrl}/users`, request)
    .then(async (response) => {
      if (!response.ok) {
        throw response;
      }
      let res = await response.json();
    })
    .catch((err) => {
      err.text().then((errorMessage) => {
        Alert.alert(errorMessage);
        console.log(errorMessage, err.status);
      });
    })
    .finally(() => {});
};
