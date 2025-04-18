import { ENDPOINTS } from '@/constants/api';
import { newIdol } from '@/data/idols';
import axiosInstance from './axiosInstance';

/**
 * 아이돌 데이터를 서버에 등록합니다. 혹시 나중에 필요할 수도 있어서 당장 쓰진 않지만 일단 둬 볼게요.
 *
 * @param {Object|Object[]} idolsData - 등록할 아이돌 데이터 또는 데이터 배열
 * @returns {Promise<Object[]>} 등록된 아이돌 데이터 배열
 *
 * @throws {Error} 서버 요청 중 발생한 에러
 *
 * @example
 * registerIdols([{ name: '아이돌1', group: '그룹1' }]);
 */
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
