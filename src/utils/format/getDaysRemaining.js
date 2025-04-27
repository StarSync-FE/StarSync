/**
 * 주어진 마감일에 대해 남은 일수를 계산하는 함수.
 *
 * 이 함수는 주어진 마감일이 현재 날짜보다 이전인지 여부를 판단하여,
 * 남은 일수를 반환합니다. 마감일이 지나면 `0`을 반환하며,
 * 마감일이 주어지지 않거나 잘못된 날짜가 전달되면 `null`을 반환합니다.
 *
 * @param {string|Date} deadline - 마감일을 나타내는 날짜. `Date` 객체이거나 날짜 문자열을 받을 수 있습니다.
 * @returns {number|null} 남은 일수. 마감일이 유효하지 않거나 제공되지 않으면 `null`을 반환합니다.
 *
 * @example
 * const daysLeft = getDaysRemaining('2025-05-01');
 * console.log(daysLeft); // 예: 7 (남은 일수)
 *
 * @example
 * const daysLeft = getDaysRemaining('2025-04-21');
 * console.log(daysLeft); // 예: 0 (마감 완료)
 *
 * @example
 * const daysLeft = getDaysRemaining('invalid-date');
 * console.log(daysLeft); // 예: null (유효하지 않은 날짜)
 */
const getDaysRemaining = (deadline) => {
  if (!deadline) return null;

  const deadlineDate = new Date(deadline);
  if (Number.isNaN(deadlineDate.getTime())) return null;

  const now = new Date();
  const deadlineKST = new Date(deadlineDate.getTime() + 9 * 60 * 60 * 1000);
  const nowKST = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  const timeDifference = deadlineKST - nowKST;
  const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysLeft > 0 ? daysLeft : 0;
};

export default getDaysRemaining;
