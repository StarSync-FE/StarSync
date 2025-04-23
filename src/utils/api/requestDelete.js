import axiosInstance from './axiosInstance';

const requestDelete = async (endpoint) => {
  const response = await axiosInstance.delete(endpoint);
  return response.data;
};

export default requestDelete;
