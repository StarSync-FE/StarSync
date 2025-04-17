import { STATUS_CODES } from '@/constants/statusCodes';
import axiosInstance from './axiosInstance';

const fetchData = async (endpoint, options = {}) => {
  const method = options.method || 'GET';
  const data = options.body || undefined;

  try {
    const response = await axiosInstance.request({
      url: endpoint,
      method,
      data,
    });

    return response.data;
  } catch (error) {
    const status = error.response?.status;

    if (status >= STATUS_CODES.SERVER_ERROR) {
      throw new Response('Internal Server Error', { status: 500 });
    }

    if (status === STATUS_CODES.NOT_FOUND) {
      throw new Response('Not Found', { status: 404 });
    }

    throw error; // 나머지 에러는 컴포넌트에서 처리
  }
};

export default fetchData;
