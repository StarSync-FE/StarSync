import creditImg from '@/assets/images/credit.jpg';
import RadioButton from '@/components/radioButton';
import mockData from '@/data/mockData';
import * as S from './creditLackModal.styles';

const CreditLackModal = ({ onClose }) => {
  return (
    <div css={S.modalContent}>
      <h2>크레딧 충전하기</h2>
      <div css={S.radioButtons}>
        {mockData.prices.map((price) => (
          <RadioButton key={price.id} name="charge" priceLabel={price.name} isSelected={false}>
            <div css={S.radioButtonContent}>
              <img src={creditImg} alt="크레딧" />
              <span>{price.value}</span>
            </div>
          </RadioButton>
        ))}
      </div>
      <button type="button" onClick={onClose}>
        충전하기
      </button>
    </div>
  );
};

export default CreditLackModal;
