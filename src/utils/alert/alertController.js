let externalTriggerAlert = null;

export const registerAlertTrigger = (fn) => {
  externalTriggerAlert = fn;
};

/**
 * 토스트 알림창을 띄울 수 있는 함수입니다. 내용과 타입은 꼭 적어주세요
 * @example
 * // 함수 호출 예시
 *
 * showAlert('투표에 성공했습니다', 'success' css`~~`)
 * 직접 css 리터럴 방식으로 적어서 아규먼트로 넣는 경우만 알림창이 잘 작동됩니다.
 * S.변수명 형식은 알림창 자체가 호출이 되지 않습니다.
 *
 * @param {string} message - 알림창의 내용을 입력합니다.
 * @param {'warning' | 'success'} - 알림창의 타입을 결정합니다.
 * @param {Object} - 추가적으로 입힐 스타일을 입력합니다.
 *
 * @returns {void} - 함수만 호출할뿐 아무 값도 반환하지 않습니다.
 */
export const showAlert = (message = 'toast content', type = 'warning', style = {}) => {
  console.log('showAlert called:', { message, type, style });
  if (externalTriggerAlert) {
    externalTriggerAlert(message, type, style);
  } else {
    console.warn('Alert system not ready');
  }
};
