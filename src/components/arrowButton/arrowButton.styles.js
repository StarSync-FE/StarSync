import media from '@/styles/responsive';
import { css } from '@emotion/react';

export const arrowIcon = css`
  height: 1.4rem;
  fill: none;
  stroke: var(--white);
  stroke-width: 0.3rem;
`;

export const navigationButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 78px;
  border-radius: 6px;
  background-color: var(--black);
  transition: opacity 0.2s;

  &:disabled {
    opacity: 0;
    cursor: default;
    pointer-events: none;
  }

  &:hover {
    opacity: 0.8;
  }

  ${media({
    display: ['none', 'none', 'flex', 'flex'],
  })}
`;
