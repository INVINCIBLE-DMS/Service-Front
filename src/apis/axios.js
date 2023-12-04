import axios from "axios";
import { Cookies } from "react-cookie";

const cookie = new Cookies();

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

instance.interceptors.request.use(
  res => {
    const token = cookie.get("accessToken");
    if (token) {
      res.headers.Authorization = `Bearer ${token}`;
    }
    return res;
  },
  err => {
    return err;
  }
)

instance.interceptors.request.use(
  res => {
    return res;
  },
  err => {
    return err;
  }
)