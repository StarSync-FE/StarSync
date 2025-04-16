import { FETCH_ERRORS } from '../constants/errors';
import { STATUS_CODES } from '../constants/statusCodes';
import axiosInstance from './axiosInstance';

const fetchData = async (endpoint) => {
  try {
    const response = await axiosInstance.get(endpoint);
    return response.data;
  } catch (error) {
    const status = error.response?.status;

    if (status >= STATUS_CODES.SERVER_ERROR) {
      throw new Response(FETCH_ERRORS.FETCH_DATA_ERROR, { status });
    }

    if (status >= 400 && status < STATUS_CODES.SERVER_ERROR) {
      throw new Response(FETCH_ERRORS.CLIENT_ERROR, { status });
    }

    if (status === STATUS_CODES.NOT_FOUND) {
      throw new Response(FETCH_ERRORS.NETWORK_ERROR, { status: 0 });
    }
  }
};

export default fetchData;
