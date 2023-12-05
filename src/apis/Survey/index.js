import { instance } from "../axios";

export const newSurvey = async () => {
  return await instance.get("/survey-storage");
};

export const ansSurvey = async (data) => {
  return await instance.put("/survey-storage", data);
};
