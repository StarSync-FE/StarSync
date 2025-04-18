import { css } from '@emotion/react';

export const buttonArea = css`
  border-bottom: solid 1px #FFFFFF1A,
  display: flex,
  justify-content: space-between,
  align-items: center,

  & input[type="radio"] {
    appearance: none,
    width: 1.6rem,
    height: 1.6rem,
    border: 0.4rem solid white,
    background-color: #8C92AB,
    border-radius: 50%,
    outline: none,
    cursor: pointer,
  },
  & input[type="radio"]:checked {
    background-color: #F96D69,
    border: 0.4rem solid #ffffff,
    box-shadow: 0 0 0 0.1rem #F96D69,
  },
`;
