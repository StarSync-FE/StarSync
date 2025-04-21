import { css } from '@emotion/react';

export const modalContent = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 30rem;
  padding: 2rem;
`;

export const radioButtons = css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
`;

export const radioButtonContent = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 2rem;
    height: 2rem;
  }

  span {
    font-size: 1.2rem;
    font-weight: 700;
  }
`;
