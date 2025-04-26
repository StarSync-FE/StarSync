import { Modal } from '@/components/modal';
import { CreditChargeModal } from '@/components/modals/creditChargeModal';
import { CreditLackModal } from '@/components/modals/creditLackModal';
import { DonationModal } from '@/components/modals/donationModal';
import { VoteModal } from '@/components/modals/voteModal';

const ListModal = ({ modalType, setModalType, credit, updateCredit, gender, donations }) => {
  const onCloseModal = () => setModalType(null);

  const renderModalContent = () => {
    switch (modalType) {
      case 'creditCharge':
        return (
          <CreditChargeModal
            credit={credit} // credit을 전달
            updateCredit={updateCredit} // credit 업데이트 함수 전달
            onClose={onCloseModal}
          />
        );
      case 'creditLack':
        return <CreditLackModal />;
      case 'donation':
        if (!donations) return null;
        return (
          <DonationModal
            data={donations}
            credit={credit}
            updateCredit={updateCredit}
            onClose={onCloseModal}
          />
        );
      case 'vote':
        return <VoteModal gender={gender} updateCredit={updateCredit} />;
      default:
        return null;
    }
  };

  return (
    <Modal isOpen={modalType !== null} onClose={onCloseModal}>
      {renderModalContent()}
    </Modal>
  );
};

export default ListModal;
