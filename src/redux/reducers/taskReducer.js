import { ADD_TASK, UPDATE_TASK, REMOVE_TASK, GET_ALL_TASKS, GET_TASK, CLEAR_ALL_TASKS } from '../actionTypes';

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
      if (state.listTasks) {
        return { ...state, listTasks: { ...state.listTasks, tasks: [...state.listTasks.tasks, ...action.payload.tasks] } };
      } else {
        return { ...state, listTasks: action.payload };
      }
    case GET_TASK:
      return { ...state, task: action.payload };
    case CLEAR_ALL_TASKS:
      return { ...state, listTasks: null };
    default:
      return state;
  }
};
export default task;
