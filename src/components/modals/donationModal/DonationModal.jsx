import creditImg from '@/assets/images/credit.png';
import CustomButton from '@/components/customButton';
import { ENDPOINTS } from '@/constants/api';
import { requestPut } from '@/utils/api';
import { useRef, useState } from 'react';
import * as S from './donationModal.styles';

const DonationModal = ({ data, credit, updateCredit, onClose }) => {
  const [donateAmount, setDonateAmount] = useState('');
  const [hasNoMoney, setHasNoMoney] = useState(false);
  const [isDonating, setIsDonating] = useState(false);
  const inputRef = useRef(null);
  const prevCredit = credit;

  const handleChangeAmount = (e) => {
    const amount = e.target.value;

    if (amount.startsWith('0') || Number.isNaN(Number(amount))) {
      return;
    }

    if (prevCredit < Number(amount)) {
      setHasNoMoney(true);
      return;
    }

    setHasNoMoney(false);
    setDonateAmount(amount);
  };

  const handleKeyDown = (e) => {
    if (e.key === '.') {
      e.preventDefault();
    }
  };

  const handleClick = async () => {
    const donateAmountNum = Number(donateAmount);
    setIsDonating(true);

    try {
      await requestPut(ENDPOINTS.CONTRIBUTE_DONATION(data.id), {
        amount: donateAmountNum,
      });
      const total = prevCredit - donateAmountNum;
      localStorage.setItem('selectedCredit', total);
      updateCredit(total);

      alert(`후원 성공 기존 : ${prevCredit}  현재 : ${total}`);
      onClose();
    } catch (e) {
      console.error('후원 처리 중 오류 발생', e);
      alert('후원 처리 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsDonating(false);
    }
  };

  return (
    <div css={S.modalContent}>
      <h2>후원하기</h2>
      <div css={S.wrapper}>
        <figure>
          <img src={data.idol.profilePicture} alt={data.idol.name} />
        </figure>
        <div css={S.titleContent}>
          <p>{data.subtitle}</p>
          <h3>{data.title}</h3>
        </div>
      </div>
      <div css={S.inputContent(hasNoMoney)}>
        <img src={creditImg} alt="크레딧" />
        <input
          placeholder="크레딧 입력"
          value={donateAmount}
          onChange={handleChangeAmount}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        {hasNoMoney && <p>갖고 있는 크레딧보다 더 많이 후원할 수 없어요</p>}
      </div>
      <CustomButton
        onClick={handleClick}
        disabled={!inputRef.current?.value || isDonating || hasNoMoney}
        style={{ marginTop: '1.2rem' }}
      >
        후원하기
      </CustomButton>
    </div>
  );
};

export default DonationModal;
