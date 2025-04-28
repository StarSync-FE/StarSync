import {
  CreditChargeModal,
  CreditLackModal,
  DonationModal,
  Modal,
  VoteModal,
} from '@/components/modals';

const ListModal = ({
  modalType,
  setModalType,
  credit,
  updateCredit,
  setVoteSuccessTrigger,
  gender,
  donations,
}) => {
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
        return <CreditLackModal onClose={onCloseModal} setModalType={setModalType} />;
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
        return (
          <VoteModal
            gender={gender}
            updateCredit={updateCredit}
            setVoteSuccessTrigger={setVoteSuccessTrigger}
            setModalType={setModalType}
          />
        );
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
