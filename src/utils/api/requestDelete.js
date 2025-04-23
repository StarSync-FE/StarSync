import axiosInstance from './axiosInstance';

/**
 * DELETE 요청을 보내는 유틸 함수
 *
 * 지정된 endpoint로 DELETE 요청을 전송하고,
 * 서버의 응답 데이터를 반환합니다.
 *
 * @param {string} endpoint - 요청을 보낼 API 경로 (예: '/api/resource/1')
 * @returns {Promise<Object>} 서버 응답 데이터
 *
 * @example
 * const result = await requestDelete('/api/idols/1');
 */
const requestDelete = async (endpoint) => {
  const response = await axiosInstance.delete(endpoint);
  return response.data;
};

export default requestDelete;
