import { ENDPOINTS } from '@/constants/api';
import { requestGet } from '@/utils/api';

/**
 * 차트 데이터를 서버에서 가져옵니다.
 *
 * @async
 * @function fetchCharts
 * @param {Object} params - 함수에 전달할 매개변수입니다.
 * @param {'male'|'female'} [params.gender='female'] - 차트의 성별 필터입니다.
 * @param {number} [params.limit=10] - 가져올 항목 수입니다.
 * @param {number} [params.cursor=0] - 페이지네이션을 위한 커서입니다.
 * @param {AbortSignal} [params.signal] - 요청을 취소할 수 있는 AbortSignal입니다.
 * @returns {Promise<any>} 서버로부터 받아온 차트 데이터입니다.
 *
 * @example
 * const controller = new AbortController();
 * fetchCharts({ gender: 'male', limit: 5, cursor: 0, signal: controller.signal })
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 */
async function fetchCharts({ gender = 'female', limit = 10, cursor = 0, signal }) {
  const url = `${ENDPOINTS.GET_CHART(gender)}?gender=${gender}&pageSize=${limit}&cursor=${cursor}`;
  return requestGet(url, { signal }); // <-- AbortController 신호 전달
}

export default fetchCharts;
