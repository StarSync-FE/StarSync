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

export const modalContent = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 32.7rem;
  height: 37.2rem;
  padding: 2.4rem 1.6rem;
`;

export const modalTitle = css`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  img {
    width: 2.2rem;
    height: 2.2rem;
    margin-right: 0.5rem;
  }

  h2 {
      font-size: 1.8rem;
  }
`;

export const radioButtons = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  box-sizing: border-box;
  width: 29.5rem;
  margin-bottom: 0.5rem;
  padding: 0.4rem;
  font-size: 1rem;
  cursor: pointer;
`;

export const buttonStyle = css`
  width: 29rem;
  height: 6.8rem;
  border: 1px solid var(--white);
  border-radius: 8px;
  transition: border-color 0.3s ease;
  
  input {
      margin-right: 2.3rem;
  }

  &:has(input[type="radio"]:checked) { 
    border-color: var(--orange); 
    color: var(--gray);
    transform: scale(1.015);
  } 
`;

export const creditImg = (id) => css`
  margin-inline: ${id === 1 ? '0.8rem' : id === 2 ? '0.2rem' : '0.1rem'};
  width: ${id === 1 ? '2.5rem' : id === 2 ? '3.7rem' : '4rem'};
  height: ${id === 1 ? '2.45rem' : id === 2 ? '2.6rem' : '3rem'};
`;

export const customButton = css`
  background: linear-gradient(45deg, var(--pink-purple) 0%, var(--orange) 51%, var(--pink-purple) 100%);
  background-color: var(--white-alpha-10);
  background-position: left center; /* 기본 시작 위치 */
  background-size: 400%; /* 배경 크기 확장 */
  transition: all 0.1s ease;
  animation: ${voteButtonFlow} 3s ease infinite; /* 애니메이션 흐름 */
  
  p {
    font-weight: 700;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  &:hover {
    animation-play-state: paused;
  }

  &:active {
    transform: scale(0.97);
  }  
`;

export const radioButtonContent = css`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-left: 1rem;
  padding: 0.5rem;

  span {
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const ChargeContent = css` 
  margin-right: 1.2rem;
  font-size: 1.4rem;
  font-weight: 700;
`;
