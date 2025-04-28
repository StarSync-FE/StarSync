import { keyframes } from '@emotion/react';

// 배경 흐름 애니메이션
export const chargeButtonFlow = keyframes`
  0% {
    background-position: 0% 50%;
  }
  40% {
    background-position: 100% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  60% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// 배경 흐름 애니메이션
export const voteButtonFlow = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// y축 기준 360도 회전
export const rotateWithPause = keyframes`
  0% {
    transform: rotateY(0deg);
    animation-timing-function: ease-in;
  }
  25% {
    transform: rotateY(90deg);
    animation-timing-function: ease-out;
  }
  50% {
    transform: rotateY(180deg);
    animation-timing-function: ease-in;
  }
  75% {
    transform: rotateY(270deg);
    animation-timing-function: ease-out;
  }
  100% {
    transform: rotateY(360deg);
    animation-timing-function: ease-in;
  }

  100% {
    transform: rotateY(360deg); /* 360도 회전 후 멈춤 */
  }

  /* 회전 후 3초 멈추기 */
  100%, 100.01% {
    animation-timing-function: linear;
  }
`;

// 심장 박동 느낌
export const heartbeat = keyframes`
  0%, 100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }
`;
