import { css } from '@emotion/react';
import media from '@/styles/responsive';

export const avatarWrapper = css`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const avatarBox = css`
  position: relative;
  ${media({ width: ['10rem', '7rem', '10rem', '10rem', '10rem'] })}
`;

export const exitButton = css`
  position: absolute;
  right: 0;
  z-index: 1;
  box-sizing: border-box;
  ${media({ width: ['3.1rem', '2.2rem', '3.1rem', '3.1rem', '3.1rem'] })}
  ${media({ height: ['3.1rem', '2.2rem', '3.1rem', '3.1rem', '3.1rem'] })}
  padding: 0.5rem;
  border: 2px solid var(--black-deep);
  border-radius: 50%;
  background-color: var(--white);
`;

export const buttonImage = css`
  ${media({ width: ['0.8rem', '0.8rem', '1.1rem', '1.1rem', '1.1rem'] })}
  width: 100%;
  margin: auto;
`;
