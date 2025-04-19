import { css } from '@emotion/react';

export const creditWrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid var(--white);
  border-radius: 0.5rem;
  font-weight: 700;

  div {
    margin-left: 0.7rem;
  }

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
    margin-top: 0.2rem;
    width: 1.5rem;
    height: 1.5rem;
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
