import { Carousel } from '@/components/carousel';
import { Charge } from '@/components/charge';
import { Chart } from '@/components/chart';
import { ListModal } from '@/components/list';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import * as S from './listPage.styles';

const ListPage = () => {
  const [modalType, setModalType] = useState(null); // 모달 타입 상태 관리
  const [credit, setCredit] = useState(0); // 크레딧 상태 관리
  const { idols, donations } = useLoaderData(); // 여기서 데이터 받음
  const [selectedTab, setSelectedTab] = useState('females');
  const [selectedIndex, setSelectedIndex] = useState(null); // 후원의 인덱스를 받아옴

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
    <div css={S.wrapper}>
      <div css={S.listTheme} />
      <Charge credit={credit} setModalType={setModalType} /> {/* Charge에 credit 전달 */}
      <Carousel data={donations} setModalType={setModalType} setSelectedIndex={setSelectedIndex} />
      <Chart
        setModalType={setModalType}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        updateCredit={updateCredit}
      />
      <ListModal
        modalType={modalType}
        setModalType={setModalType}
        credit={credit}
        updateCredit={updateCredit}
        gender={selectedTab}
        donations={selectedIndex != null ? donations.list[selectedIndex] : null}
      />
    </div>
  );
};

export default ListPage;
