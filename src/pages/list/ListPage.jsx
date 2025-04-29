import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Carousel } from '@/components/carousel';
import { Charge } from '@/components/charge';
import { Chart } from '@/components/chart';
import { ListModal } from '@/components/list';
import * as S from './listPage.styles';

const ListPage = () => {
  const [modalType, setModalType] = useState(null); // 모달 타입 상태 관리
  const [credit, setCredit] = useState(0); // 크레딧 상태 관리
  const [selectedTab, setSelectedTab] = useState('females');
  const [selectedIndex, setSelectedIndex] = useState(null); // 후원의 인덱스를 받아옴
  const [voteSuccessTrigger, setVoteSuccessTrigger] = useState(false);
  const { idols, donations } = useLoaderData(); // 여기서 데이터 받음

  const DEFAULT_OG_IMAGE = 'https://www.starsync.wiki/default-og.png';

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
    <>
      <title>StarSync - 리스트</title>
      <meta name="description" content="별처럼 연결되는 우리, 모든 별이 하나로 이어지는 순간" />
      <meta name="keywords" content="StarSync, 스타싱크, 팬, 후원, 팬 활동, 팬심, 아이돌" />
      <meta name="author" content="Team StarSync" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="StarSync" />
      <meta
        property="og:description"
        content="별처럼 연결되는 우리, 모든 별이 하나로 이어지는 순간"
      />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:url" content="https://www.starsync.wiki/list" />
      <meta property="og:site_name" content="StarSync" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="StarSync" />
      <meta
        name="twitter:description"
        content="별처럼 연결되는 우리, 모든 별이 하나로 이어지는 순간"
      />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />

      <div css={S.wrapper}>
        <div css={S.listTheme} />
        <Charge credit={credit} setModalType={setModalType} /> {/* Charge에 credit 전달 */}
        <Carousel
          data={donations}
          setModalType={setModalType}
          setSelectedIndex={setSelectedIndex}
        />
        <Chart
          setModalType={setModalType}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          voteSuccessTrigger={voteSuccessTrigger}
        />
        <ListModal
          modalType={modalType}
          setModalType={setModalType}
          credit={credit}
          updateCredit={updateCredit}
          setVoteSuccessTrigger={setVoteSuccessTrigger}
          gender={selectedTab}
          donations={selectedIndex != null ? donations.list[selectedIndex] : null}
        />
      </div>
    </>
  );
};

export default ListPage;
