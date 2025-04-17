import axios from 'axios';
import { BASE_URL } from '../constants/api';
import { CONSOLE_ERRORS, UI_ERRORS } from '../constants/errors';
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
    let errorMessage = UI_ERRORS.UNKNOWN;

    if (status === STATUS_CODES.UNAUTHORIZED) errorMessage = UI_ERRORS.UNAUTHORIZED;
    else if (status === STATUS_CODES.FORBIDDEN) errorMessage = UI_ERRORS.FORBIDDEN;
    else if (status === STATUS_CODES.NOT_FOUND) errorMessage = UI_ERRORS.NOT_FOUND;
    else if (status >= STATUS_CODES.SERVER_ERROR) errorMessage = UI_ERRORS.SERVER;

    error.message = errorMessage; // 메시지를 사용자 친화적으로 변경
    console.error(errorMessage);

    return Promise.reject(error); //호출한 쪽으로 에러 처리 위임
  },
);

export default axiosInstance;
