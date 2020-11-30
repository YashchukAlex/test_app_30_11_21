import { Alert } from 'react-native';

import store from '../redux/index';
import {} from '../redux/actions';
import {} from '../redux/actionTypes';
import { baseUrl } from '../constants';

export const getTasks = (params) => {
  const { page, sort } = params;
  const request = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`${baseUrl}/tasks?page=${page}&sort=${sort}`, request)
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

export const getTaskById = (id) => {
  const request = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`${baseUrl}/tasks/${id}`, request)
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

export const addTask = (data) => {
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  return fetch(`${baseUrl}/tasks`, request)
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
    })
    .catch((err) => {
      err.text().then((errorMessage) => {
        Alert.alert(errorMessage);
        console.log(errorMessage, err.status);
      });
    });
};

export const updateTask = (data) => {
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  return fetch(`${baseUrl}/tasks/${data.id}`, request)
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
    })
    .catch((err) => {
      err.text().then((errorMessage) => {
        Alert.alert(errorMessage);
        console.log(errorMessage, err.status);
      });
    });
};

export const removeTask = (data) => {
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`${baseUrl}/tasks/${data.id}`, request)
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
    })
    .catch((err) => {
      err.text().then((errorMessage) => {
        console.log(errorMessage, err.status);
      });
    });
};
