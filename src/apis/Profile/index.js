import { instance } from "../axios"

export const getMyPage = async (token) => {
    return await instance.get("/my-info/user", { headers: { "Authorization": token } })
}