import axiosInstance from './axiosInstance';

const requestDelete = async (endpoint) => {
  const response = await axiosInstance.put(endpoint);
  return response.data;
};

export default requestDelete;
