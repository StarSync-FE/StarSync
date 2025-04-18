import Charge from '@/components/charge';
import Chart from '@/components/chart';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useLoaderData } from 'react-router-dom';

export const wrapper = css`
  padding: 20px;
  background-color: black;
  color: white;
  font-family: Pretendard, sans-serif;
`;

export const carousel = css`
  margin: 10rem 0
`;

function ListPage() {
  const { idols, donations, chart } = useLoaderData(); // 여기서 데이터 받음
  console.log(idols);
  console.log(donations);
  console.log(chart);

  return (
    <div css={wrapper}>
      <Charge />
      <div css={carousel}>캐러셀</div>
      <Chart />
    </div>
  );
}

export default ListPage;
