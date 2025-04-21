import creditImg from '@/assets/images/credit.png';
import addCommas from '@/utils/format';
import * as S from './charge.styles';

const Charge = ({ setModalType }) => {
  return (
    <div css={S.creditWrapper}>
      <div>
        <div>내 크레딧</div>
        <div css={S.credit}>
          <img src={creditImg} alt="크레딧" />
          <span>{addCommas(1000000)}</span>
        </div>
      </div>
      <button type="button" onClick={() => setModalType('creditCharge')}>
        충전하기
      </button>
    </div>
  );
};

export default Charge;
