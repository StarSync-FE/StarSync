import { css } from '@emotion/react';

export const creditWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  padding: 2.5rem 4rem;
  border: 1px solid var(--white);
  border-radius: 0.5rem;
  font-weight: 700;

  button {
    width: 5rem;
    height: 3rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--orange);
    background-color: var(--black);
    cursor: pointer;
  }
`;

export const credit = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  border-radius: .5rem;
  font-size: .9rem;
  font-weight: 500;

  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 0.2rem;
  }

  span {
    font-size: 18px;
    font-weight: 700;
    color: var(--orange);
  }
`;

export const radioButtonContent = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 1rem;
    height: 1rem;
  }

  span {
    font-weight: 700;
  }
`;
