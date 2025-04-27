import chartImg from '@/assets/images/chart.png';
import { CustomButton } from '@/components/customButton';
import { LoadingSpinner } from '@/components/loadingStatus/loadingSpinner';
import { useEffect, useState } from 'react';
import LoadMoreButton from './LoadMoreButton';
import * as S from './chart.styles';
import { fetchData } from './fetchData';
import { useScreenSize } from './useScreenSize';

const Chart = ({ setModalType, selectedTab, setSelectedTab, updateCredit }) => {
  const [femaleData, setFemaleData] = useState([]);
  const [maleData, setMaleData] = useState([]);
  const [femaleCursor, setFemaleCursor] = useState(0);
  const [maleCursor, setMaleCursor] = useState(0);
  const [hasMoreMales, setHasMoreMales] = useState(true);
  const [hasMoreFemales, setHasMoreFemales] = useState(true);
  const [isFemaleLoading, setIsFemaleLoading] = useState(false);
  const [isMaleLoading, setIsMaleLoading] = useState(false);
  const screenSize = useScreenSize();
  const PAGESIZE = screenSize === 'desktop' ? 10 : 5;

  const handleTabClick = (e) => {
    const newTab = e.currentTarget.value;
    setSelectedTab(newTab);

    // 탭이 변경될 때마다 데이터와 상태 초기화
    if (newTab === 'females') {
      setFemaleData([]);
      setFemaleCursor(0);
      setHasMoreFemales(true);
    } else {
      setMaleData([]);
      setMaleCursor(0);
      setHasMoreMales(true);
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const controller = new AbortController();

    if (selectedTab === 'females') {
      setFemaleData([]);
      setFemaleCursor(0);
      fetchData(
        'female',
        0,
        PAGESIZE,
        setFemaleData,
        setFemaleCursor,
        setHasMoreFemales,
        setIsFemaleLoading,
        controller,
      );
    }

    if (selectedTab === 'males') {
      setMaleData([]);
      setMaleCursor(0);
      fetchData(
        'male',
        0,
        PAGESIZE,
        setMaleData,
        setMaleCursor,
        setHasMoreMales,
        setIsMaleLoading,
        controller,
      );
    }

    return () => {
      controller.abort();
    };
  }, [selectedTab, screenSize, updateCredit]);

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

        {selectedTab === 'females' && (
          <>
            <ul css={S.idolList}>
              {femaleData.map((female, index) => (
                <li key={female.id}>
                  <span>
                    <img src={female.profilePicture} alt={female.name} />
                    <span css={S.rankStyle}>{index + 1}</span>
                    <div css={S.idolContent}>
                      <span css={S.groupStyle}>{female.group}</span>
                      <span css={S.nameStyle}>{female.name}</span>
                    </div>
                  </span>
                  <span>{female.totalVotes}표</span>
                </li>
              ))}
            </ul>
            <LoadingSpinner isLoading={isFemaleLoading} />
            <LoadMoreButton
              isLoading={isFemaleLoading}
              hasMore={hasMoreFemales}
              onClick={() =>
                fetchData(
                  'female',
                  femaleCursor,
                  PAGESIZE,
                  setFemaleData,
                  setFemaleCursor,
                  setHasMoreFemales,
                  setIsFemaleLoading,
                )
              }
            />
          </>
        )}
        {selectedTab === 'males' && (
          <>
            <ul css={S.idolList}>
              {maleData.map((male, index) => (
                <li key={male.id}>
                  <span>
                    <img src={male.profilePicture} alt={male.name} />
                    <span css={S.rankStyle}>{index + 1}</span>
                    <div css={S.idolContent}>
                      <span css={S.groupStyle}>{male.group}</span>
                      <span css={S.nameStyle}>{male.name}</span>
                    </div>
                  </span>
                  <span>{male.totalVotes}표</span>
                </li>
              ))}
            </ul>
            <LoadingSpinner isLoading={isMaleLoading} />
            <LoadMoreButton
              isLoading={isMaleLoading}
              hasMore={hasMoreMales}
              onClick={() =>
                fetchData(
                  'male',
                  maleCursor,
                  PAGESIZE,
                  setMaleData,
                  setMaleCursor,
                  setHasMoreMales,
                  setIsMaleLoading,
                )
              }
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Chart;
