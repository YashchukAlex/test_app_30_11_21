import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import authReducer from './authReducer';
import { USER_LOGOUT } from '../actionTypes';

const appReducer = combineReducers({
  taskReducer,
  authReducer,
});

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
