import { STATUS_CODES } from '@/constants/statusCodes';
import axiosInstance from './axiosInstance';

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
