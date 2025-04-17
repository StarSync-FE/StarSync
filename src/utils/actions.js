import { CONSOLE_ERRORS } from '@/constants/errors';
import fetchData from './fetchData';

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
