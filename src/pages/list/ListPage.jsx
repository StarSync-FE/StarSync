import { Charge } from '@/components/charge';
import { Chart } from '@/components/chart';
import { ListModal } from '@/components/list';
import { css } from '@emotion/react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

export const wrapper = css`
  padding: 20px;
  background-color: var(--black-full);
  color: var(--white-full);
  font-family: Pretendard, sans-serif;
`;

export const carousel = css`
  margin: 10rem 0;
`;

const ListPage = () => {
  const [modalType, setModalType] = useState(null); // 모달 타입 상태 관리
  const { idols, donations, chart } = useLoaderData(); // 여기서 데이터 받음
  console.log(idols);
  console.log(donations);
  console.log(chart);

  return (
    <div css={wrapper}>
      <Charge setModalType={setModalType} />
      <div css={carousel}>캐러셀</div>
      <Chart />

      <ListModal modalType={modalType} setModalType={setModalType} />
    </div>
  );
};

export default ListPage;
