import creditImg from '@/assets/images/credit.png';
import { CustomButton } from '@/components/button';
import { ENDPOINTS } from '@/constants/api';
import { requestPut } from '@/utils/api';
import { showAlert } from '@/utils/alert/alertController';
import { useRef, useState } from 'react';
import { useRevalidator } from 'react-router-dom';
import * as S from './donationModal.styles';

const DonationModal = ({ data, credit, updateCredit, onClose }) => {
  const [donateAmount, setDonateAmount] = useState('');
  const [hasNoMoney, setHasNoMoney] = useState(false);
  const [isDonating, setIsDonating] = useState(false);
  const [isInvalidNumber, setIsInvalidNumber] = useState(false);
  const inputRef = useRef(null);
  const prevCredit = credit;
  const revalidator = useRevalidator();

  const handleChangeAmount = (e) => {
    const amount = e.target.value;

    if (amount.startsWith('0') || Number.isNaN(Number(amount))) {
      setHasNoMoney(false);
      setIsInvalidNumber(true);
      setDonateAmount('');
      return;
    }

    if (prevCredit < Number(amount)) {
      setIsInvalidNumber(false);
      setHasNoMoney(true);
      setDonateAmount(amount);
      return;
    }

    setHasNoMoney(false);
    setIsInvalidNumber(false);
    setDonateAmount(amount);
  };

  const handleKeyDown = (e) => {
    if (e.key === '.' || e.key === ' ') {
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
      showAlert('투표에 성공했습니다', 'success');
      setTimeout(() => {
        onClose();
        revalidator.revalidate();
      }, 700);
    } catch (e) {
      showAlert('투표에 실패했습니다.', 'warning');
      console.error('후원 처리 중 오류 발생', e);
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
      <div css={S.inputContent(hasNoMoney, isInvalidNumber)}>
        <img src={creditImg} alt="크레딧" />
        <input
          type="text"
          placeholder="크레딧 입력"
          value={donateAmount}
          onChange={handleChangeAmount}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        {isInvalidNumber ? (
          <p>1 이상의 숫자만 입력할 수 있어요</p>
        ) : hasNoMoney ? (
          <p>갖고 있는 크레딧보다 더 많이 후원할 수 없어요</p>
        ) : null}
      </div>

      <CustomButton
        onButtonClick={handleClick}
        onKeyDown={(e) => e.key === 'Enter' && onClose()}
        disabled={!donateAmount || isDonating || isInvalidNumber || hasNoMoney}
        style={{ marginTop: '1.2rem' }}
      >
        후원하기
      </CustomButton>
    </div>
  );
};

export default DonationModal;
