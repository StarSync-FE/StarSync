import { useEffect, useState } from 'react';
import { requestGet } from '@/utils/api';
import { ENDPOINTS } from '@/constants/api';
import { LoadingSpinner } from '@/components/loadingStatus';
import { LoadMoreButton } from '@/components/button';
import { useScreenSize } from '@/utils/responsive';
import * as S from './chart.styles';

import ChartHeader from './ChartHeader';
import ChartTabButtons from './ChartTabButtons';
import IdolList from './IdolList';

const Chart = ({ setModalType, selectedTab, setSelectedTab, voteSuccessTrigger }) => {
  const [chartData, setChartData] = useState([]);
  const [cursor, setCursor] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const screenSize = useScreenSize();
  const PAGESIZE = screenSize === 'desktop' ? 10 : 5;

  const loadChartData = async (gender, cursorVal, isNewTab = false, controller = null) => {
    try {
      setIsLoading(true);
      const url = ENDPOINTS.GET_CHART.replace('{gender}', gender);
      const response = await requestGet(
        `${url}?gender=${gender}&pageSize=${PAGESIZE}&cursor=${cursorVal}`,
        controller ? { signal: controller.signal } : undefined,
      );
      const newData = response?.idols || [];
      const nextCursor = response?.nextCursor;

      if (cursorVal === null) {
        setCursor(null);
        setHasMore(false);
        return;
      }

      setChartData((prev) => (isNewTab ? newData : [...prev, ...newData]));
      setCursor(nextCursor);
      if (nextCursor === null) setHasMore(false);
    } catch (err) {
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
    const gender = selectedTab === 'females' ? 'female' : 'male';

    setChartData([]);
    setCursor(0);
    setHasMore(true);
    loadChartData(gender, 0, true, controller);

    return () => controller.abort();
  }, [selectedTab, screenSize, voteSuccessTrigger]);

  const loadMore = () => {
    const gender = selectedTab === 'females' ? 'female' : 'male';
    loadChartData(gender, cursor);
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
