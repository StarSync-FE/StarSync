import { css } from '@emotion/react';

export const ModalWrapper = css`
  width: 47.7rem;
  height: 69.3rem;
  border-radius: 1.2rem;
  background-color: var(--black);
`;

export const headerBox = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const voteRadioButton = css`
  width: 32.7rem;
  height: 7rem;
  margin: auto;
  border-bottom: solid 1px #FFFFFF1A;
`;

export const exitIcon = css`
  width: 2.4rem;
  height: 2.4rem;
`;

export const title = css`
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--white);
`;

export const rankNumber = css`
  padding: 0 1.2rem;
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--orange);
`;

export const memberInfoBox = css`
  display: flex;
  align-items: center;

  & p {
    margin: 0;
    font-size: 1.4rem;
  };
`;

export const voteBox = css`
  display: flex;
  flex-direction: column;
`;

export const idolName = css`
  font-weight: 500;
  color: var(--white);
`;

export const votes = css`
  font-weight: 400;
  color: rgb(255 255 255 / 60%);
`;

export const guideQuote = css`
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  color: var(--white);
`;

export const highlightText = css`
  color: var(--orange);
`;
