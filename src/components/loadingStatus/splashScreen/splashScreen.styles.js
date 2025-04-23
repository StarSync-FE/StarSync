import { css, keyframes } from '@emotion/react';

const rollToCenter = keyframes`
  0% {
    transform: rotate(0deg);
    left: -100px;
  }
  100% {
    transform: rotate(720deg);
    left: calc(50% - 40px);
  }
`;

const pauseAndFade = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
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

export const splashWrapper = css`
  display: flex;
  overflow: hidden;
  position: fixed;
  inset: 0;
  z-index: 9999;
  justify-content: center;
  align-items: center;
  background: var(--black-deep);
`;

export const rollingStar = css`
  position: absolute;
  left: -100px;
  width: 80px;
  height: 80px;
  animation: ${rollToCenter} 2s ease-in-out forwards,
             ${pauseAndFade} 0.5s ease 2s forwards;
`;

export const finalStar = css`
  width: 100px;
  height: 100px;
  opacity: 0;
  animation: ${fadeIn} 0.3s ease 2.5s forwards,
             ${pulse} 1.5s 2.8s infinite ease-in-out;
`;
