import credit from '@/assets/images/credit.jpg';
import stupid from '@/assets/images/stupid.png';
import { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './chart.styles';

const girls = [
  { name: '에스파 윈터', img: credit, id: 1, rank: 1, votes: 100 },
  { name: '뉴진스 하니', img: credit, id: 2, rank: 2, votes: 90 },
  { name: '에스파 카리나', img: credit, id: 3, rank: 3, votes: 80 },
  { name: '아이브 안유진', img: credit, id: 4, rank: 4, votes: 70 },
  { name: '엔믹스 설윤', img: credit, id: 5, rank: 5, votes: 60 },
  { name: '에스파 닝닝', img: credit, id: 6, rank: 6, votes: 50 },
  { name: '아이브 레이', img: credit, id: 7, rank: 7, votes: 40 },
  { name: '블랙핑크 제니', img: credit, id: 8, rank: 8, votes: 30 },
  { name: '베이비몬스터 아현', img: credit, id: 9, rank: 9, votes: 20 },
  { name: '여자아이들 민니', img: credit, id: 10, rank: 10, votes: 10 },
];

const boys = [
  { name: '보이넥스트도어 명재현', img: stupid, id: 1, rank: 1, votes: 100 },
  { name: '아스트로 차은우', img: stupid, id: 2, rank: 2, votes: 90 },
  { name: '보이넥스트도어 태산', img: stupid, id: 3, rank: 3, votes: 80 },
  { name: '라이즈 원빈', img: stupid, id: 4, rank: 4, votes: 70 },
  { name: '방탄소년단 뷔', img: stupid, id: 5, rank: 5, votes: 60 },
  { name: '빅뱅 지드래곤', img: stupid, id: 6, rank: 6, votes: 50 },
  { name: '뉴이스트 황민현', img: stupid, id: 7, rank: 7, votes: 40 },
  { name: '워너원 박지훈', img: stupid, id: 8, rank: 8, votes: 30 },
  { name: '데이식스 원필', img: stupid, id: 9, rank: 9, votes: 20 },
  { name: '비투비 육성재', img: stupid, id: 10, rank: 10, votes: 10 },
];

function Chart() {
  const [selectedTab, setSelectedTab] = useState('girls');

  const handleTabClick = (e) => {
    setSelectedTab(e.currentTarget.value);
  };

  return (
    <div css={S.chartSection}>
      <div css={S.chartSectionHeader}>
        <div>이달의 차트</div>
        <button type="button">
          <div>
            <img src={credit} alt="차트" />
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
            {girls.map((girl) => (
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
            {boys.map((boy) => (
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
