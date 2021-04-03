import { takeEvery, call, put } from "@redux-saga/core/effects";
import {
  createPostSuccess,
  deletePostSuccess,
  getPosts,
  likePostSuccess,
  updatePostSuccess,
} from "../actions/post";
import * as api from "../api";
import {
  CREATE,
  DELETE,
  FETCH_ALL,
  LIKE,
  UPDATE,
} from "../constants/actionTypes";
function* fetchAll() {
  try {
    const { data } = yield call(api.fetchPost);
    yield put(getPosts(data));
  } catch (error) {
    console.log(error);
  }
}
function* createPost(action) {
  try {
    const { data } = yield call(api.createPost, action.payload);
    yield put(createPostSuccess(data));
  } catch (error) {
    console.log(error);
  }
}
function* updatePost(action) {
  try {
    const { data } = yield call(api.updatePost, [
      action.payload.id,
      action.payload.post,
    ]);
    yield put(updatePostSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

function* deletePost(action) {
  try {
    yield call(api.deletePost, action.payload);
    yield put(deletePostSuccess(action.payload));
  } catch (error) {
    console.log(error);
  }
}
function* likePost(action) {
  try {
    const { data } = yield call(api.likePost, action.payload);
    yield put(likePostSuccess(data));
  } catch (error) {
    console.log(error);
  }
}
export default function* watchPosts() {
  yield takeEvery(FETCH_ALL, fetchAll);
  yield takeEvery(CREATE, createPost);
  yield takeEvery(UPDATE, updatePost);
  yield takeEvery(DELETE, deletePost);
  yield takeEvery(LIKE, likePost);
}
