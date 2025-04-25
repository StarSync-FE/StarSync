import creditWhiteImg from '@/assets/images/credit-white.png';
import creditImg from '@/assets/images/credit.png';
import CustomButton from '@/components/customButton';
import RadioButton from '@/components/radioButton';
import { prices } from '@/data/mockData';
import { useState } from 'react';
import * as S from './creditChargeModal.styles';

const CreditChargeModal = ({ credit, updateCredit, onClose }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleRadioSelect = (value) => {
    setSelectedValue(value);
  };

  const handleCharge = () => {
    if (!selectedValue) {
      alert('충전할 크레딧을 선택해주세요!');
      return;
    }

    const prev = credit; // ListPage에서 전달받은 credit
    const newTotal = prev + Number(selectedValue);
    localStorage.setItem('selectedCredit', newTotal);
    updateCredit(newTotal); // 업데이트된 credit을 ListPage에 전달
    alert(`크레딧 ${selectedValue} 충전 완료! 총 보유: ${newTotal}`);

    // 모달 닫기 로직
    onClose();
  };

  return (
    <div css={S.modalContent}>
      <h2>크레딧 충전하기</h2>
      <div css={S.radioButtons}>
        {prices.map((price) => (
          <RadioButton
            key={price.id}
            name={price.value}
            itemLabel={price.name}
            style={S.buttonStyle} // ✅ 스타일 prop으로 전달
            handleSelect={() => handleRadioSelect(price.value)}
          >
            <div css={S.radioButtonContent}>
              <img src={creditImg} alt="크레딧" />
              <span>{price.value}</span>
            </div>
          </RadioButton>
        ))}
      </div>
      <CustomButton onClick={handleCharge}>
        <img src={creditWhiteImg} alt="크레딧" css={S.imgStyle} />
        <span css={S.chargeContent}>충전하기</span>
      </CustomButton>
    </div>
  );
};

export default CreditChargeModal;
