import { css } from '@emotion/react';
import * as S from './arrowButton.styles';

/**
 * ArrowButton 컴포넌트는 좌/우 방향을 나타내는 화살표 버튼을 렌더링합니다.
 * 버튼 클릭 시 `onButtonClick` 콜백 함수가 호출됩니다.
 *
 * @component
 * @example
 * // 좌측 화살표 버튼을 렌더링하는 예시
 * <ArrowButton direction="left" onButtonClick={handleClick} />
 *
 * @param {Object} props - 컴포넌트의 속성
 * @param {'left' | 'right'} [props.direction='left'] - 버튼의 방향을 결정합니다. 기본값은 'left'입니다.
 * @param {Object} [props.styles={}] - 추가적인 CSS 스타일을 객체 형태로 전달할 수 있습니다.
 * @param {Function} [props.onButtonClick={}] - 버튼 클릭 시 호출되는 콜백 함수입니다. 기본값은 빈 객체입니다.
 * @param {boolean} [props.disabled=false] - 버튼의 활성화 여부를 결정합니다. 기본값은 `false`입니다.
 *
 * @returns {JSX.Element|null} 좌측 또는 우측 화살표 버튼을 반환하며, 방향에 따라 다르게 렌더링됩니다.
 */
const ArrowButton = ({
  direction = 'left',
  styles = {},
  onButtonClick = () => {},
  disabled = false,
}) => {
  return (
    <>
      {direction === 'left' ? (
        <button
          type="button"
          onClick={onButtonClick}
          css={[S.navigationButton, css(styles)]}
          disabled={disabled}
          aria-label="이전"
        >
          <svg css={S.arrowIcon} viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
            <title>이전</title>
            <path d="M7 1L1 7L7 13" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      ) : direction === 'right' ? (
        <button
          type="button"
          onClick={onButtonClick}
          css={[S.navigationButton, css(styles)]}
          disabled={disabled}
          aria-label="다음"
        >
          <svg css={S.arrowIcon} viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
            <title>다음</title>
            <path d="M1 1L7 7L1 13" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      ) : null}
    </>
  );
};

export default ArrowButton;
