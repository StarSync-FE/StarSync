import { ENDPOINTS } from '@/constants/api';
import { requestGet } from '@/utils/api';

/**
 * 제공된 성별, 페이지네이션 커서 및 페이지 크기를 기반으로 아이돌 차트 데이터를 가져오고 상태를 업데이트합니다.
 *
 * @param {string} gender - 가져올 아이돌의 성별 (예: 'male', 'female').
 * @param {string|null} cursor - 페이지네이션을 위한 커서, 다음 페이지가 없으면 null.
 * @param {number} pageSize - 한 번에 가져올 아이돌 수.
 * @param {Function} setData - 새 아이돌 데이터를 상태에 업데이트하는 함수.
 * @param {Function} setCursor - 다음 커서를 상태에 업데이트하는 함수.
 * @param {Function} setHasMore - 더 많은 데이터가 있는지 여부를 상태에 업데이트하는 함수.
 * @param {Function} setIsLoading - 로딩 상태를 업데이트하는 함수.
 * @param {AbortController|null} controller - 요청을 취소할 수 있는 선택적 AbortController.
 *
 * @returns {Promise<void>} 데이터가 성공적으로 가져오고 상태가 업데이트되면 리턴됩니다.
 *
 * @throws {Error} 오류가 발생하면 예외를 던집니다.
 */
export const fetchData = async (
  gender,
  cursor,
  pageSize,
  setData,
  setCursor,
  setHasMore,
  setIsLoading,
  controller,
) => {
  try {
    setIsLoading(true);
    const response = await requestGet(
      `${ENDPOINTS.GET_CHART(gender)}?gender=${gender}&pageSize=${pageSize}&cursor=${cursor}`,
      controller ? { signal: controller.signal } : undefined,
    );
    const newData = response?.idols || [];
    const nextCursor = response?.nextCursor;

    if (cursor === null) {
      console.log(`더 이상 ${gender} 아이돌 데이터가 없습니다.`);
      setCursor(null);
      return;
    }

    setData((prev) => [...prev, ...newData]);
    setCursor(nextCursor);
    if (nextCursor === null) setHasMore(false);
  } catch (error) {
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};
