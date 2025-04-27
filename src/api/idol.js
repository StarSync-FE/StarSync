import { ENDPOINTS } from '@/constants/api';
import { requestGet } from '@/utils/api';

async function fetchIdols({ limit = 30, cursor = 0 }) {
  const url = `${ENDPOINTS.GET_IDOLS}?pageSize=${limit}&cursor=${cursor}`;
  return requestGet(url);
}

export default fetchIdols;
