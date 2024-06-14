import axios from "axios";

// const authURL = import.meta.env.VITE_APIURL;

export const userAxios = axios.create({
  baseURL: "https://geniusgrid.online/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

userAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("usertoken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
