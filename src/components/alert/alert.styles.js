import media from '@/styles/responsive';
import { css, keyframes } from '@emotion/react';

const bounceIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
  70% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
`;

export const alertWrapper = css`
  display: flex;
  position: fixed;
  z-index: 1111;
  width: 30.7rem;
  height: 6rem;
  margin: auto;
  padding: 2.7rem ;
  border-radius: 3.6rem;
  color: #5C4D4D;
  background-color: #FFF0F0;
  ${media({
    top: ['10rem', '10rem', '10rem', '2rem', '2rem'],
  })}
  animation: ${bounceIn} 0.5s ease forwards;
`;

export const contentBox = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  p {
    width: 100%;
    font-size: 1.6rem;
    font-weight: 600;
    text-align: center;
  }

  img {
    width: 3rem;
    height: 3rem;
  }
`;
