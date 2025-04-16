import credit from '../../assets/images/토끼로아콘.jpg';
/** @jsxImportSource @emotion/react */
import * as s from './List.styles.js';

const girls = [
  { name: '에스파 윈터', img: credit, id: 1, rank: 1, votes: 100 },
  { name: '뉴진스 하니', img: credit, id: 2, rank: 2, votes: 90 },
  { name: '에스타 카리나', img: credit, id: 3, rank: 3, votes: 80 },
  { name: '아이브 안유진', img: credit, id: 4, rank: 4, votes: 70 },
  { name: '엔믹스 설윤', img: credit, id: 5, rank: 5, votes: 60 },
];

const boys = [
  { name: '방탄소년단', img: 'https://example.com/bts.jpg', id: 1, rank: 1, votes: 100 },
  { name: '세븐틴', img: 'https://example.com/seventeen.jpg', id: 2, rank: 2, votes: 90 },
  { name: '보이넥스트도어', img: 'https://example.com/exo.jpg', id: 3, rank: 3, votes: 80 },
  { name: 'NCT', img: 'https://example.com/nct.jpg', id: 4, rank: 4, votes: 70 },
  { name: '빅뱅', img: 'https://example.com/straykids.jpg', id: 5, rank: 5, votes: 60 },
];

function List() {
  return (
    <div css={s.wrapper}>
      <div css={s.creditWrapper}>
        <div>
          <div>내 크레딧</div>
          <div css={s.credit}>
            <img src={credit} alt="크레딧" />
            <span>0</span>
          </div>
        </div>
        <button type="button">충전하기</button>
      </div>
      <div>캐러셀</div>
      <div css={s.chartSection}>
        <div css={s.chartSectionHeader}>
          <div>이달의 차트</div>
          <button type="button">
            <div>
              <img src={credit} alt="차트" />
              <span>차트 투표하기</span>
            </div>
          </button>
        </div>

        <div>
          <div css={s.tabButtonWrapper}>
            <button type="button" css={s.idolListButton}>
              <div>이달의 여자 아이돌</div>
            </button>
            <button type="button" css={s.idolListButton}>
              <div>이달의 남자 아이돌</div>
            </button>
          </div>

          <ul css={s.idolList}>
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
          <ul css={s.idolList}>
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
          <button type="button" css={s.moreButton}>
            더보기
          </button>
        </div>
      </div>
    </div>
  );
}

export default List;
