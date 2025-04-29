import { css } from '@emotion/react';
import { LAYOUT } from '@/constants/layout';
import media from '@/styles/responsive';

export const headerWrapper = css`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: ${LAYOUT.HEADER_HEIGHT}px;
  padding: 0 2rem;
  background-color: transparent;
  backdrop-filter: blur(10px);

  ${media({
    padding: ['0 2rem', '0 4rem', '0 6rem', '0 8rem'],
  })}
`;

export const headerContent = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 25rem;
  max-width: 120rem;
  height: 100%;
  margin: 0 auto;
`;

export const landingButton = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 12rem;
  border: none;
  background: none;

  ${media({
    maxWidth: ['12rem', '12rem', '14rem', '18rem'],
  })}
`;

export const textLogoImage = css`
  width: 100%;
  object-fit: contain;
`;

export const profileButton = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
