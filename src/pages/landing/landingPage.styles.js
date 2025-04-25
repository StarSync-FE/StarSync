import starImg from '@/assets/images/star.png';
import { css, keyframes } from '@emotion/react';

const auroraMove = keyframes`
  0% {
    background-position: 0% 0%, 100% 0%, 50% 100%;
  }
  50% {
    background-position: 50% 50%, 50% 0%, 0% 100%;
  }
  100% {
    background-position: 100% 100%, 0% 50%, 50% 0%;
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

export const auroraBackground = css`
  display: flex;
  overflow: hidden;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: var(--white);
  background: var(--black-deep);

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, var(--purple), transparent 70%),
                radial-gradient(circle, var(--blue-dark), transparent 70%),
                radial-gradient(circle, var(--pink-purple), transparent 70%);
    background-position: 0% 0%, 100% 0%, 50% 100%;
    background-size: 50% 50%;
    animation: ${auroraMove} 10s infinite alternate;
    content: '';
    opacity: 0.5;
  }
`;

export const backgroundStarsWrapper = css`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

export const starStyle = ({ top, left, width, height }) => css`
  position: absolute;
  top: ${top};
  left: ${left};
  width: ${width}px;
  height: ${height}px;
  background: url(${starImg}) no-repeat center center;
  background-size: contain;
  opacity: 0.3;
  animation: ${twinkle} 3s infinite;
`;

export const contentSection = css`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 2rem;
  text-align: center;
  color: var(--white);

  h1 {
    margin-bottom: 1.5rem;
    font-size: 3.2rem;
    font-weight: 700;
  }

  p {
    margin-bottom: 3rem;
    font-size: 1.8rem;
    line-height: 1.6;
    color: var(--white);
  }
`;
