import { Charge } from '@/components/charge';
import { Chart } from '@/components/chart';
import { ListModal } from '@/components/list';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
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
  const [credit, setCredit] = useState(0); // 크레딧 상태 관리
  const { idols, donations, chart } = useLoaderData(); // 여기서 데이터 받음
  const [selectedTab, setSelectedTab] = useState('females');
  // localStorage에서 크레딧 값을 불러옴
  useEffect(() => {
    const storedCredit = localStorage.getItem('selectedCredit');
    if (storedCredit) {
      setCredit(Number(storedCredit));
    } else {
      localStorage.setItem('selectedCredit', '0');
      setCredit(0);
    }
  }, []);

  const updateCredit = (newCredit) => {
    setCredit(newCredit);
  };

  return (
    <div css={wrapper}>
      <Charge credit={credit} setModalType={setModalType} /> {/* Charge에 credit 전달 */}
      <div css={carousel}>캐러셀</div>
      <Chart
        data={chart}
        setModalType={setModalType}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <ListModal
        modalType={modalType}
        setModalType={setModalType}
        credit={credit}
        updateCredit={updateCredit}
        gender={selectedTab}
      />
    </div>
  );
};

export default ListPage;
