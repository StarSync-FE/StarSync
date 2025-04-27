import { THROWN_ERRORS } from '@/constants/errors';
import { STATUS_CODES } from '@/constants/statusCodes';

async function safeRequest(apiCall) {
  try {
    const data = await apiCall();
    console.log('✅ data:', data);
    return data;
  } catch (err) {
    console.error('❌ 요청 에러:', err?.response?.data || err.message);
    throw new Response(THROWN_ERRORS.FETCH_FAILED, {
      status: STATUS_CODES.SERVER_ERROR,
    });
  }
}

export default safeRequest;
