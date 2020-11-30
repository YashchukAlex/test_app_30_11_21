import { HANDLE_LOADER, SIGN_IN, SIGN_UP } from '../actionTypes';

const defaultState = {
  loader: false,
};

const app = (state = defaultState, action) => {
  switch (action.type) {
    case HANDLE_LOADER:
      return { ...state, loader: !state.loader };
    case SIGN_IN:
      return {
        ...state,
      };
    case SIGN_UP:
      return { ...state };
    default:
      return state;
  }
};
export default app;
