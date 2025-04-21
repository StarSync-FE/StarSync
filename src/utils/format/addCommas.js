import { UI_ERRORS } from '@/constants/errors';

/**
 * 숫자를 천 단위로 콤마(,)를 추가한 문자열로 변환합니다.
 *
 * @param {number|null|undefined} num - 포맷팅할 숫자. null 또는 undefined인 경우 빈 문자열을 반환합니다.
 * @returns {string} - 천 단위 콤마가 포함된 문자열. 입력이 0이면 "0"을 반환합니다.
 *
 * @throws {Error} - 입력값이 숫자가 아닌 경우 에러를 발생시킵니다.
 *
 * @example
 * chargeComma(1234567); // "1,234,567"
 * chargeComma(0);       // "0"
 * chargeComma(null);    // "0"
 * chargeComma(undefined); // "0"
 */
const addCommas = (num) => {
  if (num === null || num === undefined) return '0';
  if (num === 0) return '0';
  if (typeof num !== 'number') {
    throw new Error(UI_ERRORS.REQUIRE_NUMBER);
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export default addCommas;
