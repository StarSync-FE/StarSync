import creditImg from '@/assets/images/credit.png';
import CustomButton from '@/components/customButton';
import RadioButton from '@/components/radioButton';
import mockData from '@/data/mockData';
import * as S from './creditChargeModal.styles';

const CreditChargeModal = ({ onClose }) => {
  return (
    <div css={S.modalContent}>
      <h2>크레딧 충전하기</h2>
      <div css={S.radioButtons}>
        {mockData.prices.map((price) => (
          <RadioButton key={price.id} name={price.value} itemLabel={price.name}>
            <div css={S.radioButtonContent}>
              <img src={creditImg} alt="크레딧" />
              <span>{price.value}</span>
            </div>
          </RadioButton>
        ))}
      </div>
      <CustomButton onClick={onClose} style={S.buttonStyle}>
        충전하기
      </CustomButton>
    </div>
  );
};

export default CreditChargeModal;
