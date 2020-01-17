import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001"
});

// AUTH API_HELPER API CALLS

const api_helper = resp => {
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

export const loginUser = async loginData => {
  const resp = await api.post("/auth/login", loginData);
  return api_helper(resp);
};

export const registerUser = async registerData => {
  const resp = await api.post("/auth/register", registerData);
  return api_helper(resp);
};

export const verifyUser = async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get("/auth/verify");
    return resp.data;
  }
  return false;
};

// NEW POST API_HELPER API CALLS

export const newPost = async newPost => {
  const resp = await api.post("/posts", newPost);
  return resp.data;
};

export const deletePost = async id => {
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

// NEW COMMENT API_HELPER API CALLS

export const newComment = async newPost => {
  const resp = await api.post("/comments", newPost);
  return resp.data;
};

export const deleteComment = async id => {
  const resp = await api.delete(`/comments/${id}`);
  return resp.data;
};

export const showComment = async id => {
  const resp = await api.get(`/comments/${id}`);
  return resp.data;
};

export const updateComment = async (id, updateData) => {
  const resp = await api.put(`/comments/${id}`, updateData);
  return resp.data;
};