/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const girls = [
  { name: '아이브', img: 'https://example.com/ive.jpg', id: 1 },
  { name: '뉴진스', img: 'https://example.com/newjeans.jpg', id: 2 },
  { name: '블랙핑크', img: 'https://example.com/blackpink.jpg', id: 3 },
  { name: '트와이스', img: 'https://example.com/twice.jpg', id: 4 },
  { name: '레드벨벳', img: 'https://example.com/redvelvet.jpg', id: 5 },
  { name: '소녀시대', img: 'https://example.com/girlsgeneration.jpg', id: 6 },
  { name: '에스파', img: 'https://example.com/aespa.jpg', id: 7 },
  { name: '여자친구', img: 'https://example.com/gfriend.jpg', id: 8 },
  { name: '있지', img: 'https://example.com/itzy.jpg', id: 9 },
  { name: '오마이걸', img: 'https://example.com/ohmygirl.jpg', id: 10 },
];

function List() {
  return (
    <>
      <div>
        <p>내 크레딧</p>
        <img src="" alt="크레딧" />
        <button type="button">충전하기</button>
      </div>
      <div>캐러셀</div>
      <div>
        <div>
          <h1>이달의 차트</h1>
          <p>차트 투표하기</p>
        </div>
        <div>
          <div>이달의 여자 아이돌</div>
          <div>이달의 남자 아이돌</div>
          <ul>
            {girls.map((name, img) => (
              <li key={name.id}>
                <img src={name.img} alt={name.name} />
                <p>{name.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default List;
