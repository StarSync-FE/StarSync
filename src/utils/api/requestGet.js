import axiosInstance from './axiosInstance';

/**
 * 지정된 엔드포인트로 GET 요청을 전송합니다.
 *
 * 사전에 설정된 Axios 인스턴스를 사용하여 GET 요청을 보내고,
 * 서버로부터 받은 응답 데이터만 반환합니다.
 *
 * @param {string} endpoint - 요청을 보낼 API 경로 (예: `/api/idols?pageSize=10&cursor=0`)
 * @param {object} [options={}] - Axios 요청 설정 객체 (예: headers, params 등)
 * @returns {Promise<any>} 서버로부터 받은 응답 데이터 (`response.data`)
 *
 * @example
 * const data = await requestGet('/api/idols');
 *
 * @example
 * const data = await requestGet('/api/idols', {
 *   headers: { Authorization: 'Bearer yourToken' }
 * });
 */
const requestGet = async (endpoint, options = {}) => {
  const response = await axiosInstance.get(endpoint, options);
  return response.data;
};

export default requestGet;
