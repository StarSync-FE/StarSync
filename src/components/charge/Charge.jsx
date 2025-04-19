import credit from '@/assets/images/credit.jpg';
import chargeComma from '@/utils/chargeComma';
/** @jsxImportSource @emotion/react */
import * as S from './charge.styles';

function Charge() {
  return (
    <div css={S.creditWrapper}>
      <div>
        <div>내 크레딧</div>
        <div css={S.credit}>
          <img src={credit} alt="크레딧" />
          <span>{chargeComma(1000000)}</span>
        </div>
      </div>
      <button type="button">충전하기</button>
    </div>
  );
}

export default Charge;
