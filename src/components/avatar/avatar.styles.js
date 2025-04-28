import { css } from '@emotion/react';
import checkIcon from '@/assets/icons/check-icon.png';

export const imageWrapper = (imgSize) => css`
  position: relative;
  user-select: none;
`;
export const imageSelected = css`
  &::before {
    position: absolute;
    inset: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    border: 4px solid var(--black);
    border-radius: 50%;
    background: linear-gradient(
      271.36deg,
      var(--orange-alpha-50) -9.84%,
      var(--pink-rose-alpha-50) 107.18%
    );
    content: ""; 
  }

  &::after {
    position: absolute;
    inset: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-image: url(${checkIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
    content: "";  
  }
`;
export const image = (size) => css`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  border: 4px solid var(--black);
  border-radius: 50%;
  box-shadow: 0 0 0 2px var(--orange);
  object-fit: cover;
`;
