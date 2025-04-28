import { css, keyframes } from '@emotion/react';
import starImg from '@/assets/images/star.png';

const rotate = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const twinkle = keyframes` 
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const backgroundStarsStyle = css`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
`;

export const baseStarStyle = css`
  position: absolute;
  background: url(${starImg}) no-repeat center center;
  background-size: contain;
  opacity: 0.3;
  animation: ${twinkle} 3s infinite;
`;

export const pendingStyle = css`
  display: flex;
  overflow: hidden;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: var(--black-deep);

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 300px;
    background: url(${starImg}) no-repeat center center;
    background-size: contain;
    animation: ${rotate} 10s linear infinite;
    transform: translate(-50%, -50%);
    content: '';
    opacity: 0.5;
  }
`;
