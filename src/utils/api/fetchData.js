import { STATUS_CODES } from '@/constants/statusCodes';
import axiosInstance from './axiosInstance';

/**
 * 주어진 엔드포인트로 API 요청을 보내고 데이터를 반환합니다. 주로 GET요청을 처리합니다.
 *
 * @param {string} endpoint - 요청을 보낼 API 엔드포인트 URL
 * @param {Object} [options={}] - 요청 옵션 (method, body 등)
 * @param {string} [options.method='GET'] - HTTP 요청 메서드
 * @param {Object|FormData} [options.body] - 요청 본문 데이터
 * @returns {Promise<Object>} API 응답 데이터
 *
 * @throws {Response|Error} 서버 에러 또는 기타 에러
 *
 * @example
 * fetchData('/api/data', { method: 'POST', body: { key: 'value' } });
 */
const fetchData = async (endpoint, options = {}) => {
  const method = options.method || 'GET';
  const data = options.body || undefined;

  const isFormData = data instanceof FormData;

  let headers;
  if (method === 'GET' || method === 'DELETE') {
    headers = undefined; // GET, DELETE는 Content-Type 필요 없음
  } else if (isFormData) {
    headers = undefined; // FormData면 Axios가 알아서 설정하게 두기
  } else {
    headers = { 'Content-Type': 'application/json' }; // 일반 객체면 명시
  }

  try {
    const response = await axiosInstance.request({
      url: endpoint,
      method,
      data,
      headers,
    });

    return response.data;
  } catch (error) {
    const status = error.response?.status;

    if (status >= STATUS_CODES.SERVER_ERROR) {
      throw new Response(null, { status: STATUS_CODES.SERVER_ERROR }); // React Router에서 throw new Response(...)를 쓰면, 해당 라우트에 정의된 errorElement로 자동 이동
    }

    if (status === STATUS_CODES.NOT_FOUND) {
      throw new Response(null, { status: STATUS_CODES.NOT_FOUND });
    }

    throw error; // 나머지 에러는 각 컴포넌트에서 처리
  }
};

export default fetchData;
