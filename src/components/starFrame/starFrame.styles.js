import { css } from '@emotion/react';
import frameImage from '@/assets/images/handle-frame.png';
import media from '@/styles/responsive';
export const wrapper = css`
  position: relative;
  padding-top: 1rem;

  img {
  position: absolute;
  bottom: 1rem; 
  z-index: 2;
  ${media({
    width: ['50%', '82%', '82%', '82%', '90%'],
    left: ['2rem', '2rem', '2rem', '2.4rem', '2rem'],
  })}
  height: auto;
  
  }
`;

export const frame = css`
  z-index: 2;
  width: 34.5rem;
  min-height: 47.9rem;
  background-image: url(${frameImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;
