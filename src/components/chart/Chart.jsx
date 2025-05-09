import { useEffect, useState } from 'react';
import { CustomButton, LoadMoreButton } from '@/components/button';
import { LoadingSpinner } from '@/components/loadingStatus';
import { useScreenSize } from '@/utils/responsive';
import { fetchCharts } from '@/api';
import IdolList from './IdolList';
import chartImg from '@/assets/images/chart.png';
import * as S from './chart.styles';

const getGenderKey = (tab) => (tab === 'females' ? 'female' : 'male');

const Chart = ({ setModalType, selectedTab, setSelectedTab, voteSuccessTrigger }) => {
  const [chartData, setChartData] = useState([]);
  const [cursor, setCursor] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const screenSize = useScreenSize();
  const PAGESIZE = screenSize === 'desktop' ? 10 : 5;

  const fetchAndSetData = async ({ gender, cursor, isNewTab = false, controller = null }) => {
    if (isLoading) return;

    try {
      setIsLoading(true);
      const response = await fetchCharts({
        gender,
        limit: PAGESIZE,
        cursor,
        signal: controller?.signal,
      });

      const newData = response?.idols || [];
      const nextCursor = response?.nextCursor;

      if (cursor === null) {
        setCursor(null);
        setHasMore(false);
        return;
      }

      setChartData((prev) => (isNewTab ? newData : [...prev, ...newData]));
      setCursor(nextCursor);
      if (nextCursor === null) setHasMore(false);
    } catch (err) {
      if (err.name !== 'AbortError') {
        console.error(err);
      }
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
    const gender = getGenderKey(selectedTab);

    setChartData([]);
    setCursor(0);
    setHasMore(true);

    fetchAndSetData({ gender, cursor: 0, isNewTab: true, controller });

    return () => controller.abort();
  }, [selectedTab, screenSize, voteSuccessTrigger]);

  const loadMore = () => {
    const gender = getGenderKey(selectedTab);
    fetchAndSetData({ gender, cursor });
  };

  return (
    <div css={S.chartWrapper}>
      <div css={S.chartSectionHeader}>
        <div>이달의 차트</div>
        <CustomButton
          variant="vote"
          onButtonClick={() => setModalType('vote')}
          style={S.voteButton}
        >
          <img src={chartImg} alt="차트" />
          <span>차트 투표하기</span>
        </CustomButton>
      </div>

      <div>
        <div css={S.tabButtonWrapper}>
          <button
            type="button"
            css={[S.idolListButton, selectedTab === 'females' && S.activeButton]}
            value="females"
            onClick={handleTabClick}
          >
            이달의 여자 아이돌
          </button>
          <button
            type="button"
            css={[S.idolListButton, selectedTab === 'males' && S.activeButton]}
            value="males"
            onClick={handleTabClick}
          >
            이달의 남자 아이돌
          </button>
        </div>

        <IdolList chartData={chartData} />
        <LoadingSpinner isLoading={isLoading} />
        <LoadMoreButton isLoading={isLoading} hasMore={hasMore} onClick={loadMore} />
      </div>
    </div>
  );
};

export default Chart;
