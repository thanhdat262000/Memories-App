import axios from "axios";

const API = axios.create({
  baseURL: "https://keep-your-memories.herokuapp.com",
});
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});
export const fetchPost = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`${"/posts"}/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`${"/posts"}/${id}`);
export const likePost = (id) => API.patch(`${"/posts"}/${id}/likePost`);
export const signIn = (form) => API.post("/user/signin", form);
export const signUp = (form) => API.post("/user/signup", form);
