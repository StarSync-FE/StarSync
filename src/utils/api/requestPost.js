import axiosInstance from './axiosInstance';

const requestPost = async (endpoint, data) => {
  const headers = data instanceof FormData ? undefined : { 'Content-Type': 'application/json' };
  const response = await axiosInstance.post(endpoint, data, { headers });
  return response.data;
};

export default requestPost;
