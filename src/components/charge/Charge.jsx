// Charge.tsx
import creditImg from '@/assets/images/star.png';
import { addCommas } from '@/utils/format';
import * as S from './charge.styles';

const Charge = ({ setModalType, credit }) => {
  return (
    <div css={S.creditWrapper}>
      <div css={S.creditContent}>
        <div css={S.myCredit}>내 스타</div>
        <div css={S.credit}>
          <img src={creditImg} alt="스타" />
          <span>{addCommas(credit)}</span>
        </div>
      </div>
      <button type="button" onClick={() => setModalType('creditCharge')} css={S.buttonStyle}>
        충전하기
      </button>
    </div>
  );
};

export default Charge;
