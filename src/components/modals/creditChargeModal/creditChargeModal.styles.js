import { css } from '@emotion/react';

export const modalContent = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 327px;
  height: 372px;
  padding: 24px 16px 0;

  h2 {
    margin: 0.2rem 0 0.7rem;
    font-size: 18px;
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
    gap: 8px;
    box-sizing: border-box;
    width: 295px;
    padding: 0.4rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;

    label {
      width: 290px;
      height: 62px;
      border: 1px solid var(--white);
      border-radius: 8px;
      transition: border-color 0.3s ease;

      input {
        margin-right: 23px;
      }
    }
`;

export const radioButtonContent = css`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.5rem;

  img {
    width: 24px;
    height: 24px;
  }

  span {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const buttonStyle = css` 
  img {
    width: 24px;
    height: 24px;
  }
  
  p {
    margin-right: 12px;
    font-size: 14px;
    font-weight: 700;
  }
`;
