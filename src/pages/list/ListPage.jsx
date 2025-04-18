import Charge from '@/components/charge/Charge';
import Chart from '@/components/chart/Chart';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const wrapper = css`
  padding: 20px;
  background-color: black;
  color: white;
  font-family: Pretendard, sans-serif;
`;

export const carousel = css`
  margin: 12rem 0
`;

function ListPage() {
  return (
    <div css={wrapper}>
      <Charge />
      <div css={carousel}>캐러셀</div>
      <Chart />
    </div>
  );
}

export default ListPage;
