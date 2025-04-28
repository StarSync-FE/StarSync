import { css } from '@emotion/react';

export const wrapper = css`
  min-width: 30rem;
  max-width: 120rem;
  margin: 0 auto;

  @media (width <= 1280px) {
    margin-right: 4rem;
    margin-left: 4rem;
  }
`;

export const listTheme = css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    width: 250px;
    height: 250px;
    border-radius: 300px;
    background: rgb(20 195 254 / 20%);
    pointer-events: none;
    filter: blur(100px);
    transform: translateX(-30%) translateY(-20%);
`;
