import { Modal } from '@/components/modal';
import { CreditChargeModal } from '@/components/modals/creditChargeModal';
import { CreditLackModal } from '@/components/modals/creditLackModal';
import { DonationModal } from '@/components/modals/donationModal';
import { VoteModal } from '@/components/modals/voteModal';

const ListModal = ({ modalType, setModalType }) => {
  const closeModal = () => setModalType(null);

  const renderModalContent = () => {
    switch (modalType) {
      case 'creditCharge':
        return <CreditChargeModal />;
      case 'creditLack':
        return <CreditLackModal />;
      case 'donation':
        return <DonationModal />;
      case 'vote':
        return <VoteModal />;
      default:
        return null;
    }
  };

  return (
    <Modal isOpen={modalType !== null} onClose={closeModal}>
      {renderModalContent()}
    </Modal>
  );
};

export default ListModal;
