import { css, keyframes } from '@emotion/react';

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

export const creditWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  padding: 4rem 6rem;
  border: 1px solid var(--white);
  border-radius: 0.5rem;
  font-weight: 700;
  

  button {
    width: 8rem;
    height: 4rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
    color: var(--white);
    background: linear-gradient(45deg, var(--pink) 0%, var(--orange-pink) 51%, var(--pink) 100%);
    background-color: var(--white-alpha-10);
    background-position: left center; /* 기본 시작 위치 */
    background-size: 400%; /* 배경 크기 확장 */
    transition: all 0.1s ease;
    animation: ${voteButtonFlow} 3s ease infinite; /* 애니메이션 흐름 */

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }

    &:hover {
      animation-play-state: paused;
    }
  }
`;

export const creditContent = css`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const myCredit = css`
  font-size: 1.6rem;
  color: var(--white-alpha-60);
`;

export const credit = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  margin-top: 0.5rem;
  border-radius: .5rem;
  font-weight: 500;

  img {
    width: 2.5rem;
    height: 2.5rem;
    margin-top: 0.2rem;
  }

  span {
    margin-top: 0.3rem;
    font-size: 2rem;
    font-weight: 700;
  }
`;
