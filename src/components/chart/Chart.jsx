import { useEffect, useState } from 'react';
import { CustomButton } from '@/components/button';
import { LoadingSpinner } from '@/components/loadingStatus';
import chartImg from '@/assets/images/chart.png';
import { fetchData } from './fetchData';
import { useScreenSize } from './useScreenSize';
import { LoadMoreButton } from '@/components/button';
import * as S from './chart.styles';

const Chart = ({ setModalType, selectedTab, setSelectedTab, voteSuccessTrigger }) => {
  const [chartData, setChartData] = useState([]);
  const [cursor, setCursor] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const screenSize = useScreenSize();
  const PAGESIZE = screenSize === 'desktop' ? 10 : 5;

  const handleTabClick = (e) => {
    const newTab = e.currentTarget.value;

    // 동일한 탭을 클릭할 경우, 데이터 초기화가 안 되도록 조건 추가
    if (selectedTab !== newTab) {
      setSelectedTab(newTab);

      // 새로운 탭을 클릭할 경우, 데이터 초기화
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

    fetchData(
      selectedTab === 'females' ? 'female' : 'male',
      0,
      PAGESIZE,
      setChartData,
      setCursor,
      setHasMore,
      setIsLoading,
      controller,
    );

    return () => {
      controller.abort();
    };
  }, [selectedTab, screenSize, voteSuccessTrigger]);

  const loadMore = () => {
    fetchData(
      selectedTab === 'females' ? 'female' : 'male',
      cursor,
      PAGESIZE,
      setChartData,
      setCursor,
      setHasMore,
      setIsLoading,
    );
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

        <ul css={S.idolList}>
          {chartData.map((idol, index) => (
            <li key={idol.id}>
              <span>
                <img src={idol.profilePicture} alt={idol.name} />
                <span css={S.rankStyle}>{index + 1}</span>
                <div css={S.idolContent}>
                  <span css={S.groupStyle}>{idol.group}</span>
                  <span css={S.nameStyle}>{idol.name}</span>
                </div>
              </span>
              <span>{idol.totalVotes}표</span>
            </li>
          ))}
        </ul>
        <LoadingSpinner isLoading={isLoading} />
        <LoadMoreButton isLoading={isLoading} hasMore={hasMore} onClick={loadMore} />
      </div>
    </div>
  );
};

export default Chart;
