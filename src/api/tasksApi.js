import { Alert } from 'react-native';

import store from '../redux/index';
import { getAllTasks, getTask } from '../redux/actions/taskActions';
import { handleLoader } from '../redux/actions/authActions';
import { baseUrl } from '../constants';

export const getTasks = (params, token) => {
  const { page, sort } = params;
  const request = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  store.dispatch(handleLoader());
  return fetch(`${baseUrl}/tasks?page=${page}&sort=${sort}`, request)
    .then(async (response) => {
      if (!response.ok) {
        throw response;
      }
      let res = await response.json();
      store.dispatch(getAllTasks(res));
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

export const getTaskById = (id, token, callback) => {
  const request = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  store.dispatch(handleLoader());
  return fetch(`${baseUrl}/tasks/${id}`, request)
    .then(async (response) => {
      if (!response.ok) {
        throw response;
      }
      let res = await response.json();
      callback();
      store.dispatch(getTask(res.task));
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

export const addTask = (data, token, navigation) => {
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };
  store.dispatch(handleLoader());
  return fetch(`${baseUrl}/tasks`, request)
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      navigation.goBack();
    })
    .catch((err) => {
      err.text().then((errorMessage) => {
        Alert.alert(errorMessage);
        console.log(errorMessage, err.status);
      });
    })
    .finally(() => store.dispatch(handleLoader()));
};

export const updateTask = (data, id, token, navigation) => {
  const request = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };
  store.dispatch(handleLoader());
  return fetch(`${baseUrl}/tasks/${id}`, request)
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      navigation.goBack();
    })
    .catch((err) => {
      err.text().then((errorMessage) => {
        Alert.alert(errorMessage);
        console.log(errorMessage, err.status);
      });
    })
    .finally(() => store.dispatch(handleLoader()));
};

export const removeTask = (data, id, token, navigation) => {
  const request = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  store.dispatch(handleLoader());
  return fetch(`${baseUrl}/tasks/${id}`, request)
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      navigation.goBack();
    })
    .catch((err) => {
      err.text().then((errorMessage) => {
        console.log(errorMessage, err.status);
      });
    })
    .finally(() => store.dispatch(handleLoader()));
};
