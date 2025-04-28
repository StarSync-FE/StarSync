import { css, keyframes } from '@emotion/react';
import media from '@/styles/responsive';

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
  top: 8vh;
  left: 35%;
  z-index: 1111;
  width: 30%;
  height: 6rem;
  padding: 2.7rem ;
  border-radius: 3.6rem;
  color: var(--brown-dark);
  background-color: var(--pink-soft);
    ${media({
      width: [
        '50%',
        '50%', // 모바일 (375px 이하)
        '50%', // 작은 태블릿 (744px 이하)
        '30%', // 노트북 (1280px 이하)
        '30%', // 데스크탑 (1920px 이하)
      ],
      left: ['25%', '25%', '25%', '35%', '35%'],
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
