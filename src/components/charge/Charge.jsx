import credit from '@/assets/images/credit.jpg';
import addCommas from '@/utils/addCommas';
import * as S from './charge.styles';

const Charge = () => {
  return (
    <div css={S.creditWrapper}>
      <div>
        <div>내 크레딧</div>
        <div css={S.credit}>
          <img src={credit} alt="크레딧" />
          <span>{addCommas(1000000)}</span>
        </div>
      </div>
      <button type="button">충전하기</button>
    </div>
  );
};

export default Charge;
