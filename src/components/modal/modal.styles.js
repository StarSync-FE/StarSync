import { css } from '@emotion/react';

export const modalStyles = css`
  background: transparent;
  border: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  width: 32px;
  height: 32px;
  padding: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    pointer-events: none; /* 이미지가 클릭 이벤트 먹지 않도록 */
  }
`;
