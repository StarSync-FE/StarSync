import { useEffect, useState } from 'react';
import { LoadingSpinner } from '@/components/loadingStatus';
import { LoadMoreButton } from '@/components/button';
import { useScreenSize } from '@/utils/responsive';
import * as S from './chart.styles';

import ChartHeader from './ChartHeader';
import ChartTabButtons from './ChartTabButtons';
import IdolList from './IdolList';
import fetchCharts from '@/api/chart'; // ✅ 새 API 경로로 수정

const Chart = ({ setModalType, selectedTab, setSelectedTab, voteSuccessTrigger }) => {
  const [chartData, setChartData] = useState([]);
  const [cursor, setCursor] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const screenSize = useScreenSize();
  const PAGESIZE = screenSize === 'desktop' ? 10 : 5;

  const gender = selectedTab === 'females' ? 'female' : 'male';

  const fetchAndSetData = async ({ gender, cursor, isNewTab = false, controller = null }) => {
    try {
      setIsLoading(true);
      const response = await fetchCharts({ gender, limit: PAGESIZE, cursor });

      const newData = response?.idols || [];
      const nextCursor = response?.nextCursor ?? null;

      setChartData((prev) => (isNewTab ? newData : [...prev, ...newData]));
      setCursor(nextCursor);
      if (nextCursor === null) setHasMore(false);
    } catch (err) {
      if (controller?.signal.aborted) return;
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTabClick = (e) => {
    const newTab = e.currentTarget.value;
    if (selectedTab !== newTab) {
      setSelectedTab(newTab);
      setChartData([]);
      setCursor(0);
      setHasMore(true);
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const controller = new AbortController();

    setChartData([]);
    setCursor(0);
    setHasMore(true);

    fetchAndSetData({ gender, cursor: 0, isNewTab: true, controller });

    return () => controller.abort();
  }, [selectedTab, screenSize, voteSuccessTrigger]);

  const loadMore = () => {
    fetchAndSetData({ gender, cursor });
  };

  return (
    <div css={S.chartWrapper}>
      <ChartHeader setModalType={setModalType} />
      <ChartTabButtons selectedTab={selectedTab} handleTabClick={handleTabClick} />
      <IdolList chartData={chartData} />
      <LoadingSpinner isLoading={isLoading} />
      <LoadMoreButton isLoading={isLoading} hasMore={hasMore} onClick={loadMore} />
    </div>
  );
};

export default Chart;
