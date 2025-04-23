import axiosInstance from './axiosInstance';

const requestGet = async (endpoint) => {
  const response = await axiosInstance.get(endpoint);
  return response.data;
};

export default requestGet;
