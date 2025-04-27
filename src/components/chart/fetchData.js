import { ENDPOINTS } from '@/constants/api';
import { requestGet } from '@/utils/api';

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
      `${ENDPOINTS.GET_CHART}?gender=${gender}&pageSize=${pageSize}&cursor=${cursor}`,
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
