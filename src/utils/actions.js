import { CONSOLE_ERRORS } from '@/constants/errors';
import fetchData from './fetchData';

/**
 * HTTP 요청 중 POST,PUT,PATCH,DELETE을 처리하고 적절한 API 호출을 수행합니다.
 *
 * @param {Request} request - HTTP 요청 객체
 * @param {string} baseEndpoint - 기본 API 엔드포인트 URL
 * @param {Object} [options={}] - 추가 옵션 (suffixEndpoint 등)
 * @param {string} [options.suffixEndpoint] - 엔드포인트에 추가할 경로
 * @returns {Promise<Object>} API 응답 데이터
 *
 * @throws {Error} 지원되지 않는 HTTP 메서드일 경우 에러 발생
 *
 * @example
 * handleAction(request, '/api/resource', { suffixEndpoint: '/details' });
 */
export const handleAction = async (request, baseEndpoint, options = {}) => {
  const method = request.method;
  const contentType = request.headers.get('Content-Type') || '';
  let body;

  // 1. JSON 요청
  if (contentType.includes('application/json')) {
    body = await request.json();

    // 2. multipart/form-data (파일 포함 form)
  } else if (contentType.includes('multipart/form-data')) {
    const formData = await request.formData();
    body = formData;

    // 3. 일반 form
  } else {
    const formData = await request.formData();
    body = Object.fromEntries(formData);
  }

  // 4. id 처리
  const id = body instanceof FormData ? body.get('id') : body?.id;
  let endpoint = baseEndpoint;
  if (id) endpoint += `/${id}`;
  if (options.suffixEndpoint) endpoint += options.suffixEndpoint;

  // 5. 요청 전송
  if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
    return fetchData(endpoint, { method, body });
  }

  if (method === 'DELETE') {
    return fetchData(endpoint, { method });
  }

  throw new Error(CONSOLE_ERRORS.UNSUPPORTED_METHOD + method);
};
