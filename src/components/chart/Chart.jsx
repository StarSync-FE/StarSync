import chartImg from '@/assets/images/chart.png';
import { ENDPOINTS } from '@/constants/api';
import { requestGet } from '@/utils/api';
import { useEffect, useState } from 'react';
import CustomButton from '../customButton';
import * as S from './chart.styles';

const Chart = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState('females');
  const [femaleData, setFemaleData] = useState(data.idols || []);
  const [maleData, setMaleData] = useState([]);
  const [femaleCursor, setFemaleCursor] = useState(0);
  const [maleCursor, setMaleCursor] = useState(0);
  const [hasMoreMales, setHasMoreMales] = useState(true);
  const [hasMoreFemales, setHasMoreFemales] = useState(true);

  const PAGESIZE = 10;

  const handleTabClick = (e) => {
    setSelectedTab(e.currentTarget.value);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: Only need to reset and fetch data when tab changes
  useEffect(() => {
    if (selectedTab === 'females') {
      setFemaleData(data.idols || []);
      setFemaleCursor(0);
      setHasMoreFemales(true);
    }

    if (selectedTab === 'males') {
      setMaleData([]);
      setMaleCursor(0);
      fetchMaleData(0);
      setHasMoreMales(true);
    }
  }, [selectedTab]);

  const fetchMaleData = async (cursor) => {
    try {
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
    }
  };

  const fetchMoreFemales = async (cursor) => {
    let updatedCursor = cursor;
    if (updatedCursor === 0 && femaleData.length === 10) {
      updatedCursor = data.nextCursor;
    }
    try {
      const response = await requestGet(
        `${ENDPOINTS.GET_CHART}?gender=female&pageSize=${PAGESIZE}&cursor=${updatedCursor}`,
      );
      const newData = response?.idols || [];
      const nextCursor = response?.nextCursor;
      if (cursor === null) {
        console.log('더 이상 여자 아이돌 데이터가 없습니다.');
        setFemaleCursor(null); // 더 이상 데이터를 요청하지 않도록 maleCursor를 null로 설정
        return; // 더 이상 요청하지 않음
      }
      setFemaleData((prevData) => [...prevData, ...newData]);
      setFemaleCursor(nextCursor);
      if (nextCursor === null) setHasMoreFemales(false);
    } catch (error) {
      console.error(error);
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
              {femaleData.map((female) => (
                <li key={female.id}>
                  <span>
                    <img src={female.profilePicture} alt={female.name} />
                    <span css={S.rankStyle}>{female.rank}</span>
                    <span>{female.group}</span>
                    <span>{female.name}</span>
                  </span>
                  <span>{female.totalVotes}표</span>
                </li>
              ))}
            </ul>
            {hasMoreFemales && (
              <button
                type="button"
                css={S.moreButton}
                onClick={() => fetchMoreFemales(femaleCursor)}
              >
                더 보기
              </button>
            )}
          </>
        )}

        {selectedTab === 'males' && (
          <>
            <ul css={S.idolList}>
              {maleData.map((male) => (
                <li key={male.id}>
                  <span>
                    <img src={male.profilePicture} alt={male.name} />
                    <span css={S.rankStyle}>{male.rank}</span>
                    <span>{male.group}</span>
                    <span>{male.name}</span>
                  </span>
                  <span>{male.totalVotes}표</span>
                </li>
              ))}
            </ul>
            {hasMoreMales && (
              <button type="button" css={S.moreButton} onClick={() => fetchMaleData(maleCursor)}>
                더 보기
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Chart;
