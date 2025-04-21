import { css } from '@emotion/react';

export const buttonArea = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & input[type="radio"] {
    width: 1.6rem;
    height: 1.6rem;
    border: 0.4rem solid var(--white);
    border-radius: 50%;
    outline: none;
    background-color: var(--gray-cool);
    appearance: none;
  }

  & input[type="radio"]:checked {
    border: 0.4rem solid var(--white);
    box-shadow: 0 0 0 0.1rem var(--orange);
    background-color: var(--orange);
  }
`;
