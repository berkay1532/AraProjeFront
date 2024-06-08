import axios from "axios";
import Cookies from "js-cookie";

const dbService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
  },
});

dbService.interceptors.request.use(
  function (request) {
    return request;
  },
  function (error) {
    return {
      message: error.response.data.message,
      status: error.response.status,
    };
  }
);

dbService.interceptors.response.use(
  function (response) {
    if (response?.status === 401) {
      Cookies.remove("auth", {
        domain: process.env.NEXT_PUBLIC_DOMAIN,
        sameSite: "lax",
        secure: true,
        expires: 1000 * 60 * 60 * 24 * 10,
      });
    }
    return response;
  },
  function (error) {
    if (error?.response?.status === 401) {
      Cookies.remove("auth", {
        domain: process.env.NEXT_PUBLIC_DOMAIN,
        sameSite: "lax",
        secure: true,
        expires: 1000 * 60 * 60 * 24 * 10,
      });
    }
    return {
      message: error?.response?.data?.message,
      status: error?.response?.status,
    };
  }
);

export default dbService;
