/**
 * 목표 금액과 받은 금액을 기준으로 기부 달성률(%)을 계산합니다.
 *
 * @param {number} targetAmount - 전체 목표 금액입니다. 0보다 큰 숫자여야 합니다.
 * @param {number} receivedAmount - 현재까지 받은 금액입니다. 숫자여야 합니다.
 * @returns {string} 기부 목표 대비 달성률을 소수점 둘째 자리까지 문자열로 반환합니다.
 *                   100%를 초과할 경우 100%로 제한되며,
 *                   유효하지 않은 입력이 들어올 경우 "0"을 반환합니다.
 */
const getDonationPercentage = (targetAmount, receivedAmount) => {
  if (typeof receivedAmount !== 'number' || typeof targetAmount !== 'number' || targetAmount <= 0) {
    return 0;
  }
  const percentage = (receivedAmount / targetAmount) * 100;

  return Math.min(percentage, 100).toFixed(2);
};

export default getDonationPercentage;
