import { css } from '@emotion/react';

export const ModalWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 52.5rem;
  height: 69.3rem;
  padding: 2.4rem;
  border-radius: 1.2rem;
  background-color: var(--black);
`;
export const itemsWrapper = css`
  overflow-y: scroll;
  width: 47.7rem;
  height: 51.4rem;
`;

export const scrollStyle = css`
  overflow-y: auto;
  padding-right: 12px; 

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: linear-gradient(90deg, var(--orange) 0%, var(--pink) 100%);
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgb(255 255 255 / 70%);
  }
`;
export const headerBox = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const idolItem = css`
  padding: 0.8rem 0;
  border-bottom: 1px solid #FFFFFF1A;
`;
export const voteRadioButton = css`
  width: 32.7rem;
  height: 7rem;
  margin: auto;
  padding-bottom: 0.8rem;
`;

export const exitIcon = css`
  width: 2.4rem;
  height: 2.4rem;
`;

export const title = css`
  width: 100%;
  margin: 0.5rem 0;
  font-size: 1.8rem;
  font-weight: 500;
  text-align: left;
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
  height: 7rem;

  & p {
    margin: 0;
    font-size: 1.4rem;
  };
`;
export const avatar = css`
  width: 7rem;
  height: 7rem;
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

export const buttonStyle = css`
  margin: 2rem 0 1.2rem;
`;
