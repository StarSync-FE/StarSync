import checkIcon from '@/assets/icons/check-icon.png';
import { css } from '@emotion/react';
export const imageWrapper = css`
  user-select: none;
  position: relative;
`;
export const imageSelected = css`
  &::after {
    content:"";
    position: absolute;
    top: 0;
    bottom: 0;
    border: 4px solid var(--black);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    box-sizing: border-box;
    background-color: var(--orange);
    opacity: 0.5;
    background-image: url(${checkIcon});
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
export const image = css`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  border: 4px solid var(--black);
  box-shadow: 0 0 0 1px var(--orange);
  box-sizing: border-box;
  object-fit: cover;

  
`;
