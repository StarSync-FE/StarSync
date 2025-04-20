import credit from '@/assets/images/credit.jpg';
import mockData from '@/data/mockData';
import addCommas from '@/utils/addCommas';
import { useState } from 'react';
import Modal from '../modal';
import RadioButton from '../radioButton';
import * as S from './charge.styles';

const Charge = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

  return (
    <div css={S.creditWrapper}>
      <div>
        <div>내 크레딧</div>
        <div css={S.credit}>
          <img src={credit} alt="크레딧" />
          <span>{addCommas(1000000)}</span>
        </div>
      </div>
      <button type="button" onClick={() => setIsModalOpen(true)}>
        충전하기
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div css={S.modalContent}>
          <h2>크레딧 충전하기</h2>
          <div css={S.radioButtons}>
            {mockData.prices.map((price) => (
              <RadioButton key={price.id} name="charge" priceLabel={price.name} isSelected={false}>
                <div css={S.radioButtonContent}>
                  <img src={credit} alt="크레딧" />
                  <span>{price.value}</span>
                </div>
              </RadioButton>
            ))}
          </div>
          <button type="button" onClick={() => setIsModalOpen(false)}>
            충전하기
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Charge;
