import { css } from '@emotion/react';
import frameImage from '@/assets/images/handle-frame.png';

export const wrapper = css`
  position: relative;
  padding-top: 1rem;
  transform: scale(0.9);
  transform-origin: top center;

  img {
    position: absolute;
    bottom: 1.5rem;
    left: 4%;
    z-index: 1;
    width: 92%;
    height: auto;
  }
`;

export const frame = css`
  z-index: 2;
  width: 34.5rem;
  min-height: 47.9rem;
  background-image: url(${frameImage});
  background-size: contain;
`;
