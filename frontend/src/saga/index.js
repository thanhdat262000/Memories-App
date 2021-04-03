import { all, fork } from "redux-saga/effects";
import watchAuth from "./authSaga";
import watchPosts from "./postSaga";
export default function* rootSaga() {
  yield all([fork(watchAuth), fork(watchPosts)]);
}
