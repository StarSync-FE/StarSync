import { css } from '@emotion/react';

export const buttonArea = css`
  border-bottom: solid 1px #FFFFFF1A;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  input[type="radio"] {
    width: 16px;
    height: 16px;
    border: 4px solid white;
    border-radius: 50%;
    outline: none;
    background-color: var(--gray-cool);
    appearance: none;
  }

  input[type="radio"]:checked {
    border: 4px solid #fff;
    box-shadow: 0 0 0 1.6px var(--orange);
    background-color: var(--orange);
  }
`;
