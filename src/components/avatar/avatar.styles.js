import checkIcon from '@/assets/icons/check-icon.png';
import { css } from '@emotion/react';
export const imageWrapper = css`
  position: relative;
  user-select: none;
`;
export const imageSelected = css`
  &::after {
    position: absolute;
    top: 0;
    bottom: 0;
    box-sizing: border-box;
    width: 60px;
    height: 60px;
    border: 4px solid var(--black);
    border-radius: 50%;
    background-color: var(--orange);
    background-image: url(${checkIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
    content:"";
    opacity: 0.5;
  }
`;
export const image = css`
  box-sizing: border-box;
  width: 60px;
  height: 60px;
  border: 4px solid var(--black);
  border-radius: 50%;
  box-shadow: 0 0 0 1px var(--orange);
  object-fit: cover;

  
`;
