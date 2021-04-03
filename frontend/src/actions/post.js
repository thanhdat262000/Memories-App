import {
  CREATE,
  CREATE_SUCCESS,
  DELETE,
  DELETE_SUCCESS,
  FETCH_ALL_SUCCESS,
  LIKE,
  UPDATE,
  UPDATE_SUCCESS,
} from "../constants/actionTypes";
export const getPosts = (data) => {
  return { type: FETCH_ALL_SUCCESS, payload: data };
};
export const createPost = (post) => {
  return { type: CREATE, payload: post };
};
export const createPostSuccess = (data) => {
  return { type: CREATE_SUCCESS, payload: data };
};
export const updatePost = (id, post) => {
  return { type: UPDATE, payload: { id, post } };
};
export const updatePostSuccess = (data) => {
  return { type: UPDATE_SUCCESS, payload: data };
};
export const deletePost = (id) => {
  return { type: DELETE, payload: id };
};
export const deletePostSuccess = (id) => {
  return { type: DELETE_SUCCESS, payload: id };
};
export const likePost = (id) => {
  return { type: LIKE, payload: id };
};
export const likePostSuccess = (data) => {
  return { type: UPDATE_SUCCESS, payload: data };
};
