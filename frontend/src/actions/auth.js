import {
  AUTH_SUCCESS,
  AUTH_SIGNIN,
  AUTH_SIGNUP,
} from "../constants/actionTypes";
export const authSuccess = (data) => ({
  type: AUTH_SUCCESS,
  payload: data,
});
export const signIn = (form) => ({ type: AUTH_SIGNIN, payload: form });
export const signUp = (form) => ({ type: AUTH_SIGNUP, payload: form });
