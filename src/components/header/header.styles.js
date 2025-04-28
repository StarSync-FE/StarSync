import { css } from '@emotion/react';
import { LAYOUT } from '@/constants/layout';
import media from '@/styles/responsive';

export const headerWrapper = css`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  justify-content: center;
  align-items: center;
  min-width: 30rem;
  max-width: 120rem;
  height: ${LAYOUT.HEADER_HEIGHT}px;
  margin: 0 auto;
  background-color: transparent;
  backdrop-filter: blur(10px);

  ${media({
    margin: ['0 4rem', '0 4rem', '0 4rem', '0 auto'],
  })}
`;

export const landingButton = css`
  position: absolute;
  left: 0;
  border: none;
  background: none;
`;

export const landingImage = css`
  width: 2.4rem;
  height: 2.4rem;
  object-fit: contain;

  ${media({
    width: ['2.4rem', '3rem', '3.6rem', '3.6rem'],
    height: ['2.4rem', '3rem', '3.6rem', '3.6rem'],
  })}
`;

export const textLogoButton = css`
  position: absolute;
  left: 50%;
  max-width: 10rem;
  border: none;
  background: none;
  transform: translateX(-50%);

  ${media({
    maxWidth: ['10rem', '12rem', '14rem', '18rem'],
  })}
`;

export const textLogoImage = css`
  width: 100%;
  object-fit: contain;
`;

export const profileButton = css`
  position: absolute;
  right: 0;
  border: none;
  background: none;
`;

export const profileImage = css`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  object-fit: cover;

  ${media({
    width: ['2.4rem', '3rem', '3.6rem', '3.6rem'],
    height: ['2.4rem', '3rem', '3.6rem', '3.6rem'],
  })}
`;
