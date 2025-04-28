import { css, keyframes } from '@emotion/react';
import media from '@/styles/responsive';

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

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const moreButton = css`
  ${flexCenter};
  margin-inline: auto;
  margin-block: 3rem;
  border-radius: 8px;
  background: linear-gradient(45deg, var(--black) 0%, var(--white-alpha-20) 51%, var(--white-alpha-10) 100%);
  background-position: left center; /* 기본 시작 위치 */
  background-size: 400%; /* 배경 크기 확장 */
  transition: all 0.1s ease;

  ${media({
    fontSize: ['1.1rem', '1.2rem', '1.4rem', '1.6rem'],
    width: ['10rem', '15rem', '20rem', '25rem'],
    height: ['2.3rem', '2.7rem', '3.5rem', '4rem'],
  })}

  &:hover {
    background-position: right center; /* hover 시 배경 이동 */
    animation: ${voteButtonFlow} 4s ease infinite; /* 애니메이션 흐름 */
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
