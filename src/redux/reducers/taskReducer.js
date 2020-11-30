import { ADD_TASK, UPDATE_TASK, REMOVE_TASK, GET_ALL_TASKS, GET_TASK } from '../actionTypes';

const defaultState = {
  task: null,
  listTasks: null,
};

const task = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state };
    case UPDATE_TASK:
      return {
        ...state,
      };
    case REMOVE_TASK:
      return { ...state };
    case GET_ALL_TASKS:
      return { ...state };
    case GET_TASK:
      return { ...state };
    default:
      return state;
  }
};
export default task;
