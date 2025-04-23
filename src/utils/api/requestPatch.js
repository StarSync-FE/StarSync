import axiosInstance from './axiosInstance';

/**
 * PATCH 요청을 보내는 유틸 함수
 *
 * 지정된 endpoint로 PATCH 요청을 전송하고,
 * 서버의 응답 데이터를 반환합니다.
 *
 * @param {string} endpoint - 요청을 보낼 API 경로 (예: '/api/resource/1')
 * @param {Object} data - 서버에 전달할 수정 데이터
 * @returns {Promise<Object>} 서버 응답 데이터
 *
 * @example
 * const updated = await requestPatch('/api/idols/1', { name: '장원영' });
 */
const requestPatch = async (endpoint) => {
  const response = await axiosInstance.patch(endpoint);
  return response.data;
};

export default requestPatch;
