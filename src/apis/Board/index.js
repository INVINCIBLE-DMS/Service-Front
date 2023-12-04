import { instance } from "../axios";

export const getPosts = async () => {
  return await instance.get("/feed");
}

export const deletePost = async (id) => {
  return await instance.delete(`/feed/${id}`);
}

export const postPost = async (data) => {
  return await instance.post("/feed", data);
}

export const getPostDetail = async (id) => {
  return await instance.get(`/comment/${id}`);
}

export const postComment = async (id, data) => {
  return await instance.post(`/comment/${id}`, data);
}

export const patchComment = async (id, data) => {
  return await instance.patch(`/comment/${id}`, data);
}

export const deleteComment = async (id) => {
  return await instance.delete(`/comment${id}`);
}

export const getCoComent = async (id) => {
  return await instance.get(`/co-comment/${id}`);
}

export const postCoComent = async (id, data) => {
  return await instance.post(`/co-comment/${id}`, data);
}

export const deleteCoComent = async (id) => {
  return await instance.delete(`/co-coments/${id}`);
}

export const postImage = async (file) => {
  return await instance.post("/image", file);
}