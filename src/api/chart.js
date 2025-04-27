import { ENDPOINTS } from '@/constants/api';
import { requestGet } from '@/utils/api';

async function fetchCharts({ limit = 10, cursor = 0 }) {
  const url = `${ENDPOINTS.GET_IDOLS}?pageSize=${limit}&cursor=${cursor}`;
  return requestGet(url);
}

export default fetchCharts;
