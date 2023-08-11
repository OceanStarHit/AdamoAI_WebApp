import axios from 'axios';
import { Config } from 'constants/config';

export const instance = axios.create({
  baseURL: Config.API_BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    const tokenString = localStorage.getItem('@token');
    const token = tokenString ? JSON.parse(tokenString) : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    switch (error.response?.status) {
      case 401: {
        return Promise.reject(error);
      }
      case 403: {
        setTimeout(() => {}, 100);
        return Promise.reject(error);
      }
      default: {
        return Promise.reject(error);
      }
    }
  },
);
