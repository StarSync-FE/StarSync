import media from '@/styles/responsive';
import { css } from '@emotion/react';

export const wrapper = css`
  max-width: 120rem;
  margin: 0 auto;

  @media (width <= 1280px) {
    margin-right: 4rem;
    margin-left: 4rem;
  }
`;
