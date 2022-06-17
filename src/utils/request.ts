import axios from 'axios';
import { Toast } from '@douyinfe/semi-ui';
import { BASE_URL, TOKEN } from '@/constants';
import { isTimeout } from './auth';
import { clearItems, getItem } from './storage';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    const { success, data, message } = response.data;
    if (success) {
      return data;
    }
    return Promise.reject(new Error(message));
  },
  (error) => {
    Toast.error(error);
    return Promise.reject(new Error(error));
  },
);

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getItem(TOKEN);

    if (token) {
      if (isTimeout()) {
        clearItems();
        window.location.pathname = '/login';
        return Promise.reject(new Error('token 已失效'));
      }
      if (config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => {
    Toast.error(error);
    return Promise.reject(new Error(error));
  },
);

export { axiosInstance as request };
