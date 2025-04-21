import Charge from '@/components/charge';
import Chart from '@/components/chart';
import Modal from '@/components/modal';
import CreditChargeModal from '@/components/modals/creditChargeModal';
import CreditLackModal from '@/components/modals/creditLackModal';
import DonationModal from '@/components/modals/donationModal';
import VoteModal from '@/components/modals/voteModal';
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
  const closeModal = () => setModalType(null); // 모달 닫기 함수
  const renderModalContent = () => {
    // 모달 내용 렌더링 함수
    switch (modalType) {
      case 'creditCharge':
        return <CreditChargeModal onClose={closeModal} />;
      case 'creditLack':
        return <CreditLackModal onClose={closeModal} />;
      case 'donation':
        return <DonationModal onClose={closeModal} />;
      case 'vote':
        return <VoteModal onClose={closeModal} />;
      default:
        return null;
    }
  };

  const { idols, donations, chart } = useLoaderData(); // 여기서 데이터 받음
  console.log(idols);
  console.log(donations);
  console.log(chart);

  return (
    <div css={wrapper}>
      <Charge setModalType={setModalType} />
      <div css={carousel}>캐러셀</div>
      <Chart />

      <Modal isOpen={modalType !== null} onClose={closeModal}>
        {renderModalContent()}
      </Modal>
    </div>
  );
};

export default ListPage;
