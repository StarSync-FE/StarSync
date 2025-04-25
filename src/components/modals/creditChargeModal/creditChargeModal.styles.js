import { css } from '@emotion/react';

export const modalContent = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 32.7rem;
  height: 37.2rem;
  padding: 24px 16px 0;

  h2 {
    margin: 0.2rem 0 1rem;
    font-size: 1.8rem;
  }

  button {
    width: 100%;
    margin: 0.5rem 0;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    color: white;
    background-color: var(--orange);
    transition: background-color 0.3s ease;
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

    label {
      width: 29rem;
      height: 6.2rem;
      border: 1px solid var(--white);
      border-radius: 8px;
      transition: border-color 0.3s ease;

      input {
        margin-right: 2.3rem;
      }
    }

    label:has(input[type="radio"]:checked) { 
      border-color: var(--orange); 
      color: var(--gray);
    } 
`;

export const radioButtonContent = css`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-left: 1rem;
  padding: 0.5rem;

  img {
    width: 2.4rem;
    height: 2.4rem;
  }

  span {
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const buttonStyle = css` 

  img {
    width: 2.3rem;
    height: 2.4rem;
  }
  
  p {
    margin-right: 1.2rem;
    font-size: 1.4rem;
    font-weight: 700;
  }
`;
