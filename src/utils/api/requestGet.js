import axiosInstance from './axiosInstance';

/**
 * GET 요청을 보내는 유틸 함수
 *
 * 지정된 endpoint로 GET 요청을 전송하고,
 * 서버의 응답 데이터를 반환합니다.
 *
 * @param {string} endpoint - 요청을 보낼 API 경로 (예: '/api/idols?limit=10&cursor=0')
 * @returns {Promise<Object>} 서버 응답 데이터
 *
 * @example
 * const data = await requestGet('/api/idols');
 */
const requestGet = async (endpoint) => {
  console.log('[GET 요청 endpoint]', endpoint);
  const response = await axiosInstance.get(endpoint);
  console.log('[axiosInstance get요청 이후]', response);
  return response.data;
};

export default requestGet;
