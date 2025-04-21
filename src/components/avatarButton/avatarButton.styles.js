import { css } from '@emotion/react';

export const avatarWrapper = css`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  width: max-content;
  
`;

export const avatarBox = (boxSize = 6) => css`
  position: relative;
  width: ${boxSize}rem;
  `;

export const exitButton = () => css`
  position: absolute;
  right: 0;
  z-index: 1;
  box-sizing: border-box;
  width: 22px;
  padding: 5px;
  border: 2px solid var(--black-deep);
  border-radius: 50%;
  background-color: var(--white);
  `;

export const buttonImage = css`
  width: 100%;
`;
