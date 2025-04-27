import { css } from '@emotion/react';

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
  background-color: var(--black-alpha-70);
  backdrop-filter: blur(0.5px); /* 배경 흐림 효과 */
`;

export const container = css`
  position: relative;
  border-radius: 8px;
  background-color: var(--black);
`;

export const buttonStyles = css`
  position: absolute;
  top: 2.4rem;
  right: 2.2rem;
  width: 2rem;
  height: 2rem;
  padding: 0;
  border: none;
  background: transparent;
`;
