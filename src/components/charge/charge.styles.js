import { css, keyframes } from '@emotion/react';
import media from '@/styles/responsive';
import { chargeButtonFlow } from '@/utils/animation';

export const creditWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  border: 1px solid var(--white);
  border-radius: 0.5rem;
  font-weight: 700;

  ${media({
    padding: ['2.5rem 3rem', '2.5rem 3.5rem', '4rem 6rem', '4rem 6rem', '4rem 6rem'],
  })}
`;

export const creditContent = css`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const myCredit = css`
  ${media({
    fontSize: ['1rem', '1.2rem', '1.6rem', '1.6rem', '1.6rem'],
  })}
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

export const buttonStyle = css`
  width: 8rem;
  height: 4rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  color: var(--white);
  background: linear-gradient(45deg, var(--pink-purple) 0%, var(--white) 51%, var(--pink-purple) 100%);
  background-color: var(--white-alpha-10);
  background-position: left center; /* 기본 시작 위치 */
  background-size: 300%; /* 배경 크기 확장 */
  transition: all 0.1s ease;
  animation: ${chargeButtonFlow} 4s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  &:hover {
    opacity: 0.9;
    animation-duration: 4s; /* hover하면 천천히 흐르기 */
  }

  &:active {
    transform: scale(0.97);
    }
`;
