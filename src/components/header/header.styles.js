import { LAYOUT } from '@/constants/layout';
import { css } from '@emotion/react';

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
  height: ${LAYOUT.HEADER_HEIGHT}px;
  background-color: var(--black-deep);
`;

export const logoButton = css`
  position: absolute;
  left: 50%;
  border: none;
  background: none;
  transform: translateX(-50%);
`;

/* 텍스트 로고 변경시 추가 구현 예정 */
export const logoImage = css`
  width: 100%;
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
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  object-fit: cover;
`;
