import { css, keyframes } from '@emotion/react';

const shakeTitle = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(4px); }
  50% { transform: translateX(-4px); }
  75% { transform: translateX(2px); }
  100% { transform: translateX(0); }
`;

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

export const inputContent = (hasNomoney, isInvalidNumber) => css`
  position: relative;
  width: 29.5rem;
  height: 5.8rem;

  input {
    width: 100%;
    height: 100%;
    padding: 1.6rem 1.6rem 1.6rem 6rem; 
    border: 1px solid ${hasNomoney || isInvalidNumber ? 'var(--error-red)' : 'var(--white-full)'};
    border-radius: 8px;
    font-size: 2rem;
    font-weight: 700;
    background-color: var(--blue-navy);
    

    &::placeholder {
      font-size: 2rem;
      font-weight: 700;
      text-align: left;
    } 
    
    ${
      (hasNomoney || isInvalidNumber) &&
      css`
        animation: ${shakeTitle} 0.3s ease-in-out;
      `
    }
  }

  img {
    position: absolute;
    top: 50%;
    left: 5%;
    z-index: 1;
    width: 3rem;
    height: 3rem;
    transform: translateY(-50%);
  }

  p {
    margin-top: 0.6rem;
    font-size: 1.2rem;
    font-weight:500;
    color: var(--error-red);
  }
`;
