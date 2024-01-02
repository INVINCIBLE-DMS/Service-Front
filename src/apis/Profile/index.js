import { instance } from "../axios";

export const getMyPage = async (token) => {
  return await instance.get("/user/my-info", {
    headers: { Authorization: token },
  });
};
