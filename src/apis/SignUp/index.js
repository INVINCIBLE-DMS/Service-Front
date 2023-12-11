import { instance } from "../axios";

export const postLogin = async (data) => {
    return await instance.post("/auth", data)
}

export const postXquareLogin = async (data) => {
    return await instance.post("https://prod-server.xquare.app/users/login", data);
}

export const getXquareUserInfo = async (token, id) => {
    return await instance.get(`https://prod-server.xquare.app/users/account-id/${id}`, { headers: { "Authorization": token } });
}
