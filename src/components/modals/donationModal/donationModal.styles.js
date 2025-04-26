import { css, keyframes } from '@emotion/react';

const shakeTitle = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(4px); }
  50% { transform: translateX(-4px); }
  75% { transform: translateX(2px); }
  100% { transform: translateX(0); }
`;

/*
이스터 에그용 체험 하고 싶으시면 
animation: ${crazyAnimation} 1.5s ease-in-out infinite; 이걸로 요소 하나만 보시면 알아요 ^^7
const crazyAnimation = keyframes`
  0% {
    transform: rotate(0deg) translateX(0) scale(1);
  }
  10% {
    transform: rotate(45deg) translateX(-10px) scale(1.1);
  }
  20% {
    transform: rotate(-45deg) translateX(10px) scale(0.9);
  }
  30% {
    transform: rotate(90deg) translateX(-15px) scale(1.2);
  }
  40% {
    transform: rotate(-90deg) translateX(15px) scale(0.8);
  }
  50% {
    transform: rotate(180deg) translateX(-20px) scale(1);
  }
  60% {
    transform: rotate(-180deg) translateX(20px) scale(1.1);
  }
  70% {
    transform: rotate(360deg) translateX(-25px) scale(0.9);
  }
  80% {
    transform: rotate(-360deg) translateX(25px) scale(1.2);
  }
  90% {
    transform: rotate(540deg) translateX(-30px) scale(0.8);
  }
  100% {
    transform: rotate(0deg) translateX(0) scale(1);
  }
`;
*/

export const modalContent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 32.7rem;
  height: 50.9rem;
  padding-top: 2.4rem;

  h2 {
    align-self: flex-start;
    padding-left: 1.6rem;
    font-size: 1.8rem;
    font-weight: 600;
  }

  figure > img {
    width: 15.8rem;
    height: 20.6rem;
    border-radius: 8px;
    object-fit: cover;
    object-position: center;
  }
`;

export const wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  img {
    align-self: center;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 15.4rem;
  }
`;

export const titleContent = css`
  p {
    font-size: 1.2rem;
    color: var(--gray);
  }

  h3 {
    overflow: hidden;
    font-size: 1.4rem;
    font-weight: 500;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: var(--white-full);
  }
`;

export const inputContent = (hasNomoney) => css`
  position: relative;
  width: 29.5rem;
  height: 5.8rem;

  input {
    width: 100%;
    height: 100%;
    padding: 1.6rem 4rem 1.6rem 1.6rem; 
    border: 1px solid ${hasNomoney ? '#FF2626' : 'var(--white-full)'}; /* 색상 변수로 변경 예정 */
    border-radius: 8px;
    font-size: 2rem;
    font-weight: 700;
    background-color: #272f3d; /* 색상 변수로 변경 예정 */
    

    &::placeholder {
      font-size: 2rem;
      font-weight: 700;
      text-align: left;
    } 
    
    ${
      hasNomoney &&
      css`
      animation: ${shakeTitle} 0.3s ease-in-out;
    `
    }
  }

  img {
    position: absolute;
    top: 50%;
    right: 5%;
    z-index: 1;
    width: 3.6rem;
    height: 3.6rem;
    transform: translateY(-50%);
  }

  p {
    margin-top: 0.6rem;
    font-size: 1.2rem;
    font-weight:500;
    color: #ff2626 /* 색상 변수로 변경 예정 */
  }
`;
