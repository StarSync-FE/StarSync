import { css } from '@emotion/react';
import frameImage from '@/assets/images/handle-frame.png';
import media from '@/styles/responsive';
export const wrapper = css`
  position: relative;
  padding-top: 1rem;

  img {
  position: absolute;
  z-index: 2;
  ${media({
    bottom: ['2rem', '2rem', '2rem', '1rem', '1rem'],
    width: ['82%', '82%', '82%', '75%', '90%'],
    left: ['2rem', '2rem', '2rem', '3.5rem', '2rem'],
  })}
  height: auto;
  
  }
`;

export const frame = css`
  z-index: 2;
  ${media({
    width: ['22.5rem', '22.5rem', '24.5rem', '29.5rem', '34.5rem'],
    height: ['33.9rem', '33.9rem', '33.9rem', '33.9rem', '45.9rem'],
  })}
  background-image: url(${frameImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;
