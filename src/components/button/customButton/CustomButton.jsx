import { css } from '@emotion/react';
import getButtonStyle from './customButton.styles';

/**
 * @typedef {Object} CustomButtonProps
 * @property {'button' | 'submit' | 'reset'} [type='button'] - 버튼의 동작 유형 (예: 'button', 'submit', 'reset'). 기본값은 'button'.
 * @property {'modal' | 'modalChart' | 'carousel' | 'vote' | 'landing'} [variant='modal'] - 버튼의 변형 유형 (예: 'modal', 'carousel', 'vote', 'landing' 등). 기본값은 'modal'.
 * @property {boolean} [isRound=false] - 버튼이 원형인지 여부. 기본값은 false.
 * @property {boolean} [disabled=false] - 버튼이 비활성화 상태인지 여부. 기본값은 false.
 * @property {React.CSSProperties} [style] - 버튼에 추가적인 스타일을 적용할 수 있는 객체.
 * @property {(e: React.MouseEvent<HTMLButtonElement>) => void} [onClick] - 버튼 클릭 시 실행될 이벤트 핸들러.
 * @property {React.ReactNode} children - 버튼 내부에 표시될 내용.
 *
 */

/**
 * CustomButton 컴포넌트는 다양한 스타일과 크기를 가진 버튼을 렌더링합니다.
 * 버튼의 타입, 스타일, 크기, 클릭 이벤트 등을 설정할 수 있습니다.
 *
 * @param {CustomButtonProps} props - 버튼의 설정을 포함한 객체입니다.
 * @param {string} [props.type='button'] - 버튼의 동작 유형 (예: 'button', 'submit', 'reset'). 기본값은 'button'.
 * @param {string} [props.variant='modal'] - 버튼의 변형 유형 (예: 'modal', 'carousel', 'vote', 'landing' 등). 기본값은 'modal'.
 * @param {boolean} [props.isRound=false] - 버튼이 원형인지 여부. 기본값은 false.
 * @param {boolean} [props.disabled=false] - 버튼이 비활성화 상태인지 여부. 기본값은 false.
 * @param {React.CSSProperties} [props.style] - 버튼에 추가적인 스타일을 적용할 수 있는 객체.
 * @param {(e: React.MouseEvent<HTMLButtonElement>) => void} [props.onButtonClick] - 버튼 클릭 시 실행될 이벤트 핸들러.
 * @param {(e: React.KeyboardEvent<HTMLButtonElement>) => void} [props.onKeyDown] - 키보드 이벤트 핸들러.
 * @param {React.ReactNode} [props.children] - 버튼 내부에 표시될 내용.
 *
 * @returns {JSX.Element} 렌더링된 버튼 요소
 *
 * @example
 * // 여러 props를 사용한 CustomButton 예시
 * <CustomButton
 *   type="submit"
 *   variant="carousel"
 *   isRound={true} // true일 경우 isRound만 작성해도 true로 취급된다.
 *   disabled={false}
 *   style={{ backgroundColor: 'blue', color: 'white', borderRadius: '12px' }}
 *   onButtonClick={() => alert('버튼이 클릭되었습니다!')}
 * >
 *   스타일이 적용된 원형 버튼
 * </CustomButton>
 */

const CustomButton = ({
  type = 'button',
  variant = 'modal',
  isRound = false,
  disabled = false,
  style,
  onButtonClick,
  onKeyDown,
  children,
}) => {
  const sizeMap = {
    modal: { width: '29.5rem', height: '4.2rem', fontSize: '1.4rem' },
    modalChart: { width: '47.7rem', height: '4.2rem', mobileWidth: '32.7rem', fontSize: '1.4rem' },
    carousel: {
      width: '23.4rem',
      height: '4rem',
      mobileWidth: '14.2rem',
      mobileHeight: '3.1rem',
      fontSize: '1.3rem',
    },
    vote: { width: '12rem', height: '3.2rem', fontSize: '2rem' },
    landing: { width: '47.7rem', height: '4.8rem', mobileWidth: '23rem', fontSize: '1.4rem' },
    error: {
      height: '4.2rem',
      fontSize: '1.4rem',
    },
  };

  const selectedSize = sizeMap[variant] || sizeMap.modal;

  const buttonStyle = getButtonStyle(selectedSize, isRound, disabled);

  return (
    <button
      type={type}
      css={[buttonStyle, style && css(style)]}
      disabled={disabled}
      onClick={onButtonClick}
      onKeyDown={onKeyDown}
    >
      {children}
    </button>
  );
};

export default CustomButton;
