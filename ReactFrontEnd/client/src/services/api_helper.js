import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:3001"
// });

const api = axios.create({
  baseURL: "https://mighty-woodland-57875.herokuapp.com/"
});

// AUTH API_HELPER API CALLS

const api_helper = resp => {
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

export const allUsers = async () => {
  const resp = await api.get("/users");
  return resp;
};

export const loginUser = async loginData => {
  const resp = await api.post("/users/login", loginData);
  return api_helper(resp);
};

export const registerUser = async registerData => {
  const resp = await api.post("/users/register", registerData);
  return api_helper(resp);
};

export const verifyUser = async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get("/users/verify");
    return resp.data;
  }
  return false;
};

export const userDetails = async userId => {
  const resp = await api.get(`/users/${userId}`);
  return resp;
};
export const updateUser = async (id, updateData) => {
  const resp = await api.put(`/users/${id}`, updateData);
  return resp.data;
};

// NEW POST API_HELPER API CALLS

export const newPost = async newPost => {
  const resp = await api.post("/posts", newPost);
  return resp.data;
};

export const deletePost = async id => {
  console.log(id);
  const resp = await api.delete(`/posts/${id}`);
  return resp.data;
};

export const showPost = async id => {
  const resp = await api.get(`/posts/${id}`);
  return resp.data;
};

export const updatePost = async (id, updateData) => {
  const resp = await api.put(`/posts/${id}`, updateData);
  return resp.data;
};

export const postDetails = async id => {
  const resp = await api.get(`/posts/user/${id}`);
  return resp;
};

// NEW COMMENT API_HELPER API CALLS

export const newComment = async newPost => {
  const resp = await api.post("/comments", newPost);
  return resp.data;
};

export const deletComment = async id => {
  const resp = await api.delete(`/comments/${id}`);
  return resp.data;
};

export const showComment = async () => {
  const resp = await api.get(`/comments`);
  return resp.data;
};

export const showCommentPost = async postId => {
  const resp = await api.get(`/comments/allComments/${postId}`);
  return resp.data;
};

export const updateComment = async (id, updateData) => {
  const resp = await api.put(`/comments/${id}`, updateData);
  return resp.data;
};

// CRUD FOLLOWERS API CALLS

export const getFollowers = async id => {
  const resp = await api.get(`/users/followers/${id}`);
  return resp.data;
};

export const addFollowers = async (id, follId) => {
  const resp = await api.put(`/users/followers/${id}`, follId);
  return resp.data;
};
