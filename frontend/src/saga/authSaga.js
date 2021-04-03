import { call, takeLatest, put } from "redux-saga/effects";
import { authSuccess } from "../actions/auth";
import * as api from "../api";
import { AUTH_SIGNIN, AUTH_SIGNUP } from "../constants/actionTypes";
import history from "../constants/history";
function* signIn(action) {
  try {
    const { data } = yield call(api.signIn, action.payload);
    yield put(authSuccess(data));
    history.push("/");
  } catch (error) {
    console.log(error);
  }
}
function* signUp(action) {
  try {
    const { data } = yield call(api.signUp, action.payload);
    yield put(authSuccess(data));
    history.push("/");
  } catch (error) {
    console.log(error);
  }
}
export default function* watchAuth() {
  yield takeLatest(AUTH_SIGNIN, signIn);
  yield takeLatest(AUTH_SIGNUP, signUp);
}
