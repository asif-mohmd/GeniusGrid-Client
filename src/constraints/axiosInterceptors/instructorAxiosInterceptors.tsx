import axios from "axios";

const authURL = import.meta.env.VITE_APIURL;

export const instructoraxios = axios.create({
    baseURL: authURL,
    headers: {
        "Content-Type": "application/json",
        
    },
});
instructoraxios.interceptors.request.use((config) => {
    const token = localStorage.getItem('instructoraxios');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});