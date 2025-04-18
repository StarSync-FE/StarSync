import { css } from '@emotion/react';

export const creditWrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid white;
  border-radius: 8px;
  font-weight: 700;

  div {
    margin-left: 0.7rem;
  }

  button {
    width: 5rem;
    height: 3rem;
    border: none;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 700;
    color: #F96D69;
    background-color: black;
    cursor: pointer;
  }
`;

export const credit = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;

  img {
    margin-top: 0.2rem;
    width: 24px;
    height: 24px;
  }

  span {
    font-size: 18px;
    font-weight: 700;
    color: #F96D69;
  }
`;
