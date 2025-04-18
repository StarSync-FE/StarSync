/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import getButtonStyle from './customButton.styles';

/**
 * CustomButton 컴포넌트는 다양한 스타일과 크기를 가진 버튼을 렌더링합니다.
 * 각기 다른 버튼 유형에 따라 크기 및 스타일을 동적으로 변경할 수 있습니다.
 *
 * @param {string} [type='button'] 버튼의 유형. 기본값은 'button'입니다.
 * @param {('modal'|'modalChart'|'carousel'|'vote'|'landing')} [variant='modal'] 버튼의 스타일 변형을 정의하는 속성입니다.
 * @param {boolean} [isRound=false] 버튼을 둥근 형태로 만들지 여부를 결정합니다.
 * @param {boolean} [disabled=false] 버튼의 비활성화 상태를 설정합니다.
 * @param {Object} [style] 버튼에 추가적인 CSS 스타일을 적용할 수 있습니다.
 * @param {Function} [onClick] 버튼이 클릭될 때 실행되는 클릭 이벤트 핸들러 함수입니다.
 * @param {ReactNode} children 버튼 내부에 렌더링할 자식 요소입니다.
 *
 * @returns {JSX.Element} CustomButton 컴포넌트의 JSX 요소
 *
 *  @example
 * // 버튼을 클릭 시 알림을 띄우는 예시
 * <CustomButton
 *   type="submit"
 *   variant="carousel"
 *   isRound={true} //bool 값일 경우 true면 isRound로 사용해도 무방
 *   disabled={false}
 *   onClick={() => alert('버튼 클릭!')}
 * >
 *   클릭하세요
 * </CustomButton>
 */

const CustomButton = ({
  type = 'button',
  variant = 'modal',
  isRound = false,
  disabled = false,
  style,
  onClick,
  children,
}) => {
  const sizeMap = {
    modal: { width: 29.5, height: 4.2, fontSize: 1.4 },
    modalChart: { width: 47.7, height: 4.2, mobileWidth: 32.7, fontSize: 1.4 },
    carousel: { width: 23.4, height: 4, mobileWidth: 14.2, mobileHeight: 3.1, fontSize: 1.3 },
    vote: { width: 12.8, height: 3.2, fontSize: 1.3 },
    landing: { width: 47.7, height: 4.8, mobileWidth: 23, fontSize: 1.4 },
  };

  const selectedSize = sizeMap[variant] || sizeMap.modal;

  const buttonStyle = getButtonStyle(selectedSize, isRound, disabled);

  return (
    <button
      type={type}
      css={[buttonStyle, style && css(style)]}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
