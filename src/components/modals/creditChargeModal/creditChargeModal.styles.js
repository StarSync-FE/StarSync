import { css } from '@emotion/react';

export const modalContent = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 20rem;
  max-width: 30rem;
  height: 22rem;

  h2 {
    margin: 0.5rem 0;
    font-size: 1.125rem;
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
    gap: 0.4rem;
    padding: 0.1rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;

    label {
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 8px;
    }
`;

export const radioButtonContent = css`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  img {
    width: 2rem;
    height: 2rem;
  }

  span {
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

export const buttonStyle = css` 
  height: 3rem;
`;
