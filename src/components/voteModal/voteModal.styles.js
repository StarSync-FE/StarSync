import { css } from '@emotion/react';

export const ModalWrapper = css`
  width: 47.7rem;
  height: 69.3rem;
  background-color: var(--black);
  border-radius: 1.2rem;
`;

export const headerBox = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const voteRadioButton = css`
  margin: auto;
  width: 32.7rem;
  height: 7rem;
  padding-bottom: 0.8rem;
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
  color: var(--orange);
  font-size: 1.4rem;
  font-weight: 400;
  padding: 0 1.2rem;
`;

export const memberInfoBox = css`
  display: flex;
  align-items: center;
  & p {
    font-size: 1.4rem;
    margin: 0;
  };
`;

export const voteBox = css`
  display: flex;
  flex-direction: column;
`;

export const idolName = css`
  color: var(--white);
  font-weight: 500;
`;

export const votes = css`
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
`;

export const guideQuote = css`
  text-align: center;
  color: var(--white);
  font-size: 1.2rem;
  font-weight: 500;
`;

export const highlightText = css`
  color: var(--orange);
`;
