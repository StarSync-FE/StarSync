import { ENDPOINTS } from '@/constants/api';
import { requestGet } from '@/utils/api';

async function fetchCharts({ gender = 'female', limit = 10, cursor = 0 }) {
  const url = `${ENDPOINTS.GET_CHART(gender)}?gender=${gender}&pageSize=${limit}&cursor=${cursor}`;
  console.log(url);
  return requestGet(url);
}

export default fetchCharts;
