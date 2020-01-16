import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001"
});

const api_helper = resp => {
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

export const loginUser = async loginData => {
  const resp = await api.post("/auth/login", loginData);
  console.log(resp);
  return api_helper(resp);
};

export const registerUser = async registerData => {
  const resp = await api.post("/auth/register", registerData);
  console.log(resp);
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
 