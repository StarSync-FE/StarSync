import creditImg from '@/assets/images/credit.jpg';
import mockData from '@/data/mockData';
import { useState } from 'react';
import * as S from './chart.styles';

function Chart() {
  const [selectedTab, setSelectedTab] = useState('girls');

  const handleTabClick = (e) => {
    setSelectedTab(e.currentTarget.value);
  };

  return (
    <div>
      <div css={S.chartSectionHeader}>
        <div>이달의 차트</div>
        <button type="button">
          <div>
            <img src={creditImg} alt="차트" />
            <span>차트 투표하기</span>
          </div>
        </button>
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
          <ul css={S.idolList}>
            {mockData.girls.map((girl) => (
              <li key={girl.id}>
                <span>
                  <img src={girl.img} alt={girl.name} />
                  <span>{girl.rank}</span>
                  <span>{girl.name}</span>
                </span>
                <span>{girl.votes}표</span>
              </li>
            ))}
          </ul>
        )}
        {selectedTab === 'boys' && (
          <ul css={S.idolList}>
            {mockData.boys.map((boy) => (
              <li key={boy.id}>
                <span>
                  <img src={boy.img} alt={boy.name} />
                  <span>{boy.rank}</span>
                  <span>{boy.name}</span>
                </span>
                <span>{boy.votes}표</span>
              </li>
            ))}
          </ul>
        )}
        <button type="button" css={S.moreButton}>
          더보기
        </button>
      </div>
    </div>
  );
}

export default Chart;
