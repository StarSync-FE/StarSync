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
