import { instance } from "../axios";

export const getRanking = async () => {
    return await instance.get("/school-class");
}
