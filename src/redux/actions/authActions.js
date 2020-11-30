import { SIGN_IN, SIGN_UP, HANDLE_LOADER, USER_LOGOUT } from '../actionTypes';

export const handleLoader = () => ({
  type: HANDLE_LOADER,
});

export const logout = () => ({
  type: USER_LOGOUT,
});

export const signIn = (token) => ({
  type: SIGN_IN,
  payload: token,
});

export const signUp = (token) => ({
  type: SIGN_UP,
  payload: token,
});
