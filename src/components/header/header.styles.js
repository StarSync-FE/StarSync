import { LAYOUT } from '@/constants/layout';
import media from '@/styles/responsive';
import { css } from '@emotion/react';

export const headerWrapper = css`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  justify-content: center;
  align-items: center;
  height: ${LAYOUT.HEADER_HEIGHT}px;
  background-color: var(--black-deep);
`;

export const landingButton = css`
  position: absolute;
  left: 2rem;
  border: none;
  background: none;

  ${media({
    left: ['2rem', '4rem', '6rem', '8rem'],
  })}
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
  right: 2rem;
  border: none;
  background: none;

  ${media({
    right: ['2rem', '4rem', '6rem', '8rem'],
  })}
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
