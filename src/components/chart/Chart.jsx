import chartImg from '@/assets/images/chart.png';
import { CustomButton } from '@/components/customButton';
import { LoadingSpinner } from '@/components/loadingStatus/loadingSpinner';
import { ENDPOINTS } from '@/constants/api';
import { requestGet } from '@/utils/api';
import { useEffect, useState } from 'react';
import * as S from './chart.styles';

const getScreenSize = () => {
  if (typeof window === 'undefined') return 'desktop';
  const width = window.innerWidth;
  if (width <= 375) return 'mobile';
  if (width <= 744) return 'tablet';
  return 'desktop';
};

const Chart = ({ setModalType }) => {
  const [selectedTab, setSelectedTab] = useState('females');
  const [femaleData, setFemaleData] = useState([]);
  const [maleData, setMaleData] = useState([]);
  const [femaleCursor, setFemaleCursor] = useState(0);
  const [maleCursor, setMaleCursor] = useState(0);
  const [hasMoreMales, setHasMoreMales] = useState(true);
  const [hasMoreFemales, setHasMoreFemales] = useState(true);
  const [screenSize, setScreenSize] = useState(getScreenSize());
  const [isFemaleLoading, setIsFemaleLoading] = useState(false);
  const [isMaleLoading, setIsMaleLoading] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // 첫 렌더링 시 체크

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const PAGESIZE = screenSize === 'desktop' ? 10 : 5;

  const handleTabClick = (e) => {
    setSelectedTab(e.currentTarget.value);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    console.count('마운트');
    const controller = new AbortController();

    if (selectedTab === 'females') {
      setFemaleData([]);
      setFemaleCursor(0);
      fetchFemaleData(0, controller);
      setHasMoreFemales(true);
    }

    if (selectedTab === 'males') {
      setMaleData([]);
      setMaleCursor(0);
      fetchMaleData(0);
      setHasMoreMales(true);
    }

    return () => {
      console.count('마운트 해제 및 중복 요청 취소');
      controller.abort();
    };
  }, [selectedTab, screenSize]);

  const fetchMaleData = async (cursor) => {
    try {
      setIsMaleLoading(true); // 로딩 시작
      const response = await requestGet(
        `${ENDPOINTS.GET_CHART}?gender=male&pageSize=${PAGESIZE}&cursor=${cursor}`,
      );

      const newData = response?.idols || [];
      const nextCursor = response?.nextCursor;

      // nextCursor가 null인 경우 더 이상 데이터를 요청하지 않도록 설정
      if (cursor === null) {
        console.log('더 이상 남자 아이돌 데이터가 없습니다.');
        setMaleCursor(null); // 더 이상 데이터를 요청하지 않도록 maleCursor를 null로 설정
        return; // 더 이상 요청하지 않음
      }

      setMaleData((prevData) => [...prevData, ...newData]);
      setMaleCursor(nextCursor); // 새로운 커서를 설정하여 다음 데이터를 요청할 준비를 합니다.

      if (nextCursor === null) setHasMoreMales(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsMaleLoading(false); // 로딩 끝
    }
  };

  const fetchFemaleData = async (cursor, controller) => {
    try {
      setIsFemaleLoading(true); // 로딩 시작
      const response = await requestGet(
        `${ENDPOINTS.GET_CHART}?gender=female&pageSize=${PAGESIZE}&cursor=${cursor}`,
        controller ? { signal: controller.signal } : undefined,
      );

      const newData = response?.idols || [];
      const nextCursor = response?.nextCursor;

      if (cursor === null) {
        console.log('더 이상 여자 아이돌 데이터가 없습니다.');
        setFemaleCursor(null);
        return;
      }

      setFemaleData((prevData) => [...prevData, ...newData]);
      setFemaleCursor(nextCursor);

      if (nextCursor === null) setHasMoreFemales(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsFemaleLoading(false); // 로딩 끝
    }
  };

  return (
    <div>
      <div css={S.chartSectionHeader}>
        <div>이달의 차트</div>
        <CustomButton onClick={() => setModalType('vote')}>
          <div>
            <img src={chartImg} alt="차트" />
            <span>차트 투표하기</span>
          </div>
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
                    <span>{female.group}</span>
                    <span>{female.name}</span>
                  </span>
                  <span>{female.totalVotes}표</span>
                </li>
              ))}
            </ul>
            <LoadingSpinner isLoading={isFemaleLoading} />
            {hasMoreFemales && (
              <button
                type="button"
                css={S.moreButton}
                onClick={() => fetchFemaleData(femaleCursor)}
                disabled={isFemaleLoading} // 로딩 중이면 클릭 불가
              >
                {isFemaleLoading ? '로딩 중...' : '더 보기'}
              </button>
            )}
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
                    <span>{male.group}</span>
                    <span>{male.name}</span>
                  </span>
                  <span>{male.totalVotes}표</span>
                </li>
              ))}
            </ul>
            <LoadingSpinner isLoading={isMaleLoading} />
            {hasMoreMales && (
              <button
                type="button"
                css={S.moreButton}
                onClick={() => fetchMaleData(maleCursor)}
                disabled={isMaleLoading} // 로딩 중이면 클릭 불가
              >
                {isMaleLoading ? '로딩 중...' : '더 보기'}
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Chart;
