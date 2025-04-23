import creditWhiteImg from '@/assets/images/credit-white.png';
import creditImg from '@/assets/images/credit.png';
import CustomButton from '@/components/customButton';
import RadioButton from '@/components/radioButton';
import mockData from '@/data/mockData';
import { useState } from 'react';
import * as S from './creditChargeModal.styles';

const CreditChargeModal = () => {
  // 로컬 스토리지 데이터 연동할 예정
  const [localStorage, setLocalStorage] = useState(null);

  return (
    <div css={S.modalContent}>
      <h2>크레딧 충전하기</h2>
      <div css={S.radioButtons}>
        {mockData.prices.map((price) => (
          <RadioButton
            key={price.id}
            name={price.value}
            itemLabel={price.name}
            style={S.labelStyle}
          >
            <div css={S.radioButtonContent}>
              <img src={creditImg} alt="크레딧" />
              <span>{price.value}</span>
            </div>
          </RadioButton>
        ))}
      </div>
      <CustomButton onClick={setLocalStorage} style={S.buttonStyle}>
        <img src={creditWhiteImg} alt="크레딧" />
        <p>충전하기</p>
      </CustomButton>
    </div>
  );
};

export default CreditChargeModal;
