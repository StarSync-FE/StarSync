import axiosInstance from './axiosInstance';

/**
 * GET 요청을 보내는 유틸 함수
 *
 * 지정된 endpoint로 GET 요청을 전송하고,
 * 서버의 응답 데이터를 반환합니다.
 * 두 번째 인자인 options는 Axios 요청 설정 객체로,
 * AbortController의 signal 등 다양한 설정을 포함할 수 있습니다.
 *
 * @param {string} endpoint - 요청을 보낼 API 경로 (예: '/api/idols?pageSize=10&cursor=0')
 * @param {Object} [options={}] - Axios 요청 설정 객체 (예: { signal: AbortSignal })
 * @returns {Promise<Object>} 서버로부터 받은 응답 데이터
 *
 * @example
 * const data = await requestGet('/api/idols');
 *
 * @example
 * const controller = new AbortController();
 * const data = await requestGet('/api/idols', { signal: controller.signal });
 */
const requestGet = async (endpoint, options = {}) => {
  const response = await axiosInstance.get(endpoint, options);
  return response.data;
};

export default requestGet;
