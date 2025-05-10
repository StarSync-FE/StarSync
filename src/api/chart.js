import { ENDPOINTS } from '@/constants/api';
import { requestGet } from '@/utils/api';

async function fetchCharts({ gender = 'female', limit = 10, cursor = 0, signal }) {
  const url = `${ENDPOINTS.GET_CHART(gender)}?gender=${gender}&pageSize=${limit}&cursor=${cursor}`;
  return requestGet(url, { signal }); // <-- AbortController 신호 전달
}

export default fetchCharts;
