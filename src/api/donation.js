import { ENDPOINTS } from '@/constants/api';
import { requestGet } from '@/utils/api';

async function fetchDonations({ limit = 10, cursor = 0 }) {
  const url = `${ENDPOINTS.GET_DONATIONS}?pageSize=${limit}&cursor=${cursor}`;
  return requestGet(url);
}

export default fetchDonations;
