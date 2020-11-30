import { ADD_TASK, UPDATE_TASK, REMOVE_TASK, GET_ALL_TASKS, GET_TASK } from '../actionTypes';

export const addTask = (data) => ({
  type: ADD_TASK,
  payload: data,
});

export const removeTask = (id) => ({
  type: REMOVE_TASK,
  payload: id,
});

export const updateTask = (data) => ({
  type: UPDATE_TASK,
  payload: data,
});

export const getAllTasks = (data) => ({
  type: GET_ALL_TASKS,
  payload: data,
});

export const getTask = (data) => ({
  type: GET_TASK,
  payload: data,
});
