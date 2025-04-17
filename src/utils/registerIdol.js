import { ENDPOINTS } from '@/constants/api';
import { newIdol } from '@/data/idols';
import axiosInstance from './axiosInstance';

export const registerIdols = async (idolsData) => {
  try {
    const idolsArray = Array.isArray(idolsData) ? idolsData : [idolsData];

    const responses = await Promise.all(
      idolsArray.map((idolData) => axiosInstance.post(ENDPOINTS.POST_IDOL, idolData)),
    );
    return responses.map((response) => response.data);
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

registerIdols(newIdol)
  .then((response) => {
    console.log('서버 응답:', response);
  })
  .catch((error) => {
    console.error('요청 실패:', error);
  });
