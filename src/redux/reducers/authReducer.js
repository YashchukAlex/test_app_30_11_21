import { HANDLE_LOADER, SIGN_IN, SIGN_UP } from '../actionTypes';

const defaultState = {
  loader: false,
  token: '',
};

const auth = (state = defaultState, action) => {
  switch (action.type) {
    case HANDLE_LOADER:
      return { ...state, loader: !state.loader };
    case SIGN_IN:
      return { ...state, token: action.payload };
    case SIGN_UP:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};
export default auth;
