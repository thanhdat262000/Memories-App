import {
  CREATE_SUCCESS,
  DELETE_SUCCESS,
  FETCH_ALL_SUCCESS,
  UPDATE_SUCCESS,
} from "../constants/actionTypes";

export const posts = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL_SUCCESS:
      return action.payload;
    case CREATE_SUCCESS:
      return [...posts, action.payload];
    case UPDATE_SUCCESS:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE_SUCCESS:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};
