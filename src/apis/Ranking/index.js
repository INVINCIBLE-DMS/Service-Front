import axios from "axios";

export const getRanking = async () => {
    return await axios.get("/school-class");
}