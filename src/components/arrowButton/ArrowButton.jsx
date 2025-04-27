import { css } from '@emotion/react';
import * as S from './arrowButton.styles';

const ArrowButton = ({ direction = 'left', styles = {}, onButtonClick = {}, disabled = false }) => {
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
