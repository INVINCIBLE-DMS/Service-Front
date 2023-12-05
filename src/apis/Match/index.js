import { instance } from "../axios";

export const match = async (name) => {
  return await instance.get(`/user/${name}`);
};

export const bothMatch = async (name1, name2) => {
  return await instance.get(`/user/both`);
};
