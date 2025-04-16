import axios from 'axios';
import { BASE_URL } from '../constants/api';
import { HTTP_ERRORS } from '../constants/errors';
import { STATUS_CODES } from '../constants/statusCodes';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (config.method === 'get' || config.method === 'delete') {
      config.headers['Content-Type'] = undefined;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    let errorMessage = HTTP_ERRORS.UNKNOWN_ERROR;

    if (status === STATUS_CODES.UNAUTHORIZED) errorMessage = HTTP_ERRORS.UNAUTHORIZED;
    else if (status === STATUS_CODES.FORBIDDEN) errorMessage = HTTP_ERRORS.FORBIDDEN;
    else if (status === STATUS_CODES.NOT_FOUND) errorMessage = HTTP_ERRORS.NOT_FOUND;
    else if (status >= STATUS_CODES.SERVER_ERROR) errorMessage = HTTP_ERRORS.SERVER_ERROR;

    console.error(errorMessage);
    return Promise.reject(error);
  },
);

export default axiosInstance;
