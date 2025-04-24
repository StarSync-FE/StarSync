import chartImg from '@/assets/images/chart.png';
import { ENDPOINTS } from '@/constants/api';
import { requestGet } from '@/utils/api';
import { useEffect, useState } from 'react';
import CustomButton from '../customButton';
import * as S from './chart.styles';

const Chart = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState('girls');
  const [girlData, setGirlData] = useState(data.idols || []);
  const [boyData, setBoyData] = useState([]);
  const [girlCursor, setGirlCursor] = useState(0);
  const [boyCursor, setBoyCursor] = useState(0);
  const [hasMoreBoys, setHasMoreBoys] = useState(true);
  const [hasMoreGirls, setHasMoreGirls] = useState(true);

  const PAGESIZE = 10;

  const handleTabClick = (e) => {
    setSelectedTab(e.currentTarget.value);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (selectedTab === 'girls') {
      setGirlData(data.idols || []);
      setGirlCursor(0);
      setHasMoreGirls(true);
    }

    if (selectedTab === 'boys') {
      setBoyData([]);
      setBoyCursor(0);
      fetchBoyData(0);
      setHasMoreBoys(true);
    }
  }, [selectedTab]);

  const fetchBoyData = async (cursor) => {
    try {
      const response = await requestGet(
        `${ENDPOINTS.GET_CHART}?gender=male&pageSize=${PAGESIZE}&cursor=${cursor}`,
      );

      const newData = response?.idols || [];
      const nextCursor = response?.nextCursor;

      // nextCursor가 null인 경우 더 이상 데이터를 요청하지 않도록 설정
      if (cursor === null) {
        console.log('더 이상 남자 아이돌 데이터가 없습니다.');
        setBoyCursor(null); // 더 이상 데이터를 요청하지 않도록 boyCursor를 null로 설정
        return; // 더 이상 요청하지 않음
      }

      setBoyData((prevData) => [...prevData, ...newData]);
      setBoyCursor(nextCursor); // 새로운 커서를 설정하여 다음 데이터를 요청할 준비를 합니다.
      if (nextCursor === null) setHasMoreBoys(false);
    } catch (error) {
      console.err(error);
    }
  };

  const fetchMoreGirls = async (cursor) => {
    let updatedCursor = cursor;
    if (updatedCursor === 0 && girlData.length === 10) {
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
        setGirlCursor(null); // 더 이상 데이터를 요청하지 않도록 boyCursor를 null로 설정
        return; // 더 이상 요청하지 않음
      }
      setGirlData((prevData) => [...prevData, ...newData]);
      setGirlCursor(nextCursor);
      if (nextCursor === null) setHasMoreGirls(false);
    } catch (error) {
      console.err(error);
    }
  };

  return (
    <div>
      <div css={S.chartSectionHeader}>
        <div>이달의 차트</div>
        <CustomButton>
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
            css={[S.idolListButton, selectedTab === 'girls' && S.activeButton]}
            value="girls"
            onClick={handleTabClick}
          >
            이달의 여자 아이돌
          </button>
          <button
            type="button"
            css={[S.idolListButton, selectedTab === 'boys' && S.activeButton]}
            value="boys"
            onClick={handleTabClick}
          >
            이달의 남자 아이돌
          </button>
        </div>

        {selectedTab === 'girls' && (
          <>
            <ul css={S.idolList}>
              {girlData.map((girl) => (
                <li key={girl.id}>
                  <span>
                    <img src={girl.profilePicture} alt={girl.name} />
                    <span css={S.rankStyle}>{girl.rank}</span>
                    <span>{girl.group}</span>
                    <span>{girl.name}</span>
                  </span>
                  <span>{girl.totalVotes}표</span>
                </li>
              ))}
            </ul>
            {hasMoreGirls && (
              <button type="button" css={S.moreButton} onClick={() => fetchMoreGirls(girlCursor)}>
                더 보기
              </button>
            )}
          </>
        )}

        {selectedTab === 'boys' && (
          <>
            <ul css={S.idolList}>
              {boyData.map((boy) => (
                <li key={boy.id}>
                  <span>
                    <img src={boy.profilePicture} alt={boy.name} />
                    <span css={S.rankStyle}>{boy.rank}</span>
                    <span>{boy.group}</span>
                    <span>{boy.name}</span>
                  </span>
                  <span>{boy.totalVotes}표</span>
                </li>
              ))}
            </ul>
            {hasMoreBoys && (
              <button type="button" css={S.moreButton} onClick={() => fetchBoyData(boyCursor)}>
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
