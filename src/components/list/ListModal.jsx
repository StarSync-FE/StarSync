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

  return (
    <Modal isOpen={modalType !== null} onClose={closeModal}>
      {renderModalContent()}
    </Modal>
  );
};

export default ListModal;
