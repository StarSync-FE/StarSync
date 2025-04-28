import { useState } from 'react';
import { CustomButton, RadioButton } from '@/components/button';
import { Prices } from '@/constants/creditPrice';
import starTwoImg from '@/assets/images/2-star.png';
import starThreeImg from '@/assets/images/3-star.png';
import starImg from '@/assets/images/star.png';
import * as S from './creditChargeModal.styles';

const imageMap = {
  1: starImg,
  2: starTwoImg,
  3: starThreeImg,
};

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
        {Prices.map((price) => {
          const imgSrc = imageMap[price.id] || starImg;
          return (
            <RadioButton
              key={price.id}
              name={price.value}
              itemLabel={price.name}
              style={[S.buttonStyle]} // ✅ 이렇게 배열로 전달
              handleSelect={() => handleRadioSelect(price.value)}
            >
              <div css={S.radioButtonContent}>
                <img src={imgSrc} alt="크레딧" />
                <span>{price.value}</span>
              </div>
            </RadioButton>
          );
        })}
      </div>

      <CustomButton
        onButtonClick={handleCharge}
        onKeyDown={(e) => e.key === 'Enter' && handleCharge()}
        style={S.customButton}
      >
        <p>충전하기</p>
      </CustomButton>
    </div>
  );
};

export default CreditChargeModal;
