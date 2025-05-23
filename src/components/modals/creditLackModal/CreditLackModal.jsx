import { CustomButton } from '@/components/button';
import creditImg from '@/assets/images/logo-star.png';
import * as S from './creditLackModal.styles';

const CreditLackModal = ({ setModalType }) => {
  return (
    <div css={S.modalContent}>
      <div css={S.contentWrapper}>
        <img src={creditImg} alt="스타 부족" css={S.image} />
        <p css={S.message}>
          앗! 투표하기 위한 <span>스타</span>가 부족해요
        </p>
      </div>
      <CustomButton
        onButtonClick={() => setModalType('creditCharge')}
        onKeyDown={(e) => e.key === 'Enter' && setModalType('creditCharge')}
        style={S.buttonStyle}
      >
        확인
      </CustomButton>
    </div>
  );
};

export default CreditLackModal;
