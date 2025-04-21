import { css } from '@emotion/react';

export const buttonArea = css`
  border-bottom: solid 1px #FFFFFF1A;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & input[type="radio"] {
    width: 1.6rem;
    height: 1.6rem;
    border: 0.4rem solid white;
    border-radius: 50%;
    outline: none;
    background-color: var(--gray-cool);
    cursor: pointer;
    appearance: none;
  }

  & input[type="radio"]:checked {
    border: 0.4rem solid #fff;
    box-shadow: 0 0 0 0.1rem var(--orange);
    background-color: var(--orange);
  }
`;
