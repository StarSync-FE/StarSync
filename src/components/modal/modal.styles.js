import { css } from '@emotion/react';

export const modalStyles = css`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    pointer-events: none; /* 이미지가 클릭 이벤트 먹지 않도록 */
    object-fit: contain;
  }
`;

export const overlay = css`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000; /* 모달이 다른 요소 위에 오도록 설정 */
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 70%);
  backdrop-filter: blur(0.8px); /* 배경 흐림 효과 */
`;

export const container = css`
  position: relative;
  width: 90%;
  max-width: 525px;
  height: 693px;
  max-height: calc(100% - 4rem);
  padding: 2rem;
  border-radius: 8px;
  background-color: var(--black);
`;
