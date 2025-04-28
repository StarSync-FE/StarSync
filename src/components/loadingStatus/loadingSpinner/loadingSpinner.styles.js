import { css } from '@emotion/react';

export const spinnerOverlay = css` 
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1234; /* 충분히 높은 z-index */
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgb(0 0 0 / 30%);
`;

export const spinner = css`
  width: 20rem;
  height: 20rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
