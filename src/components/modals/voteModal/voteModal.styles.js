import media from '@/styles/responsive';
import { css } from '@emotion/react';

export const ModalWrapper = css`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${media({
    width: ['100vw', '80vw', '47.7rem', '47.7rem', '47.7rem'],
    height: ['100vh', '80vh', '51.4rem', '51.4rem', '69.3rem'],
  })}  
  padding: 2.4rem;
  border-radius: 1.2rem;
  background-color: var(--black);
`;

export const itemsWrapper = css`
  overflow-y: scroll;
  width: 100%;
  ${media({
    height: ['100%', '100%', '51.4rem', '51.4rem', '51.4rem'],
  })}  
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
    background-color: var(--white-alpha-70);
  }
`;

export const headerBox = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const idolItem = css`
  padding: 0.8rem 1rem;
  border-bottom: 1px solid var(--white-alpha-10);
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
  margin: 0.5rem 0 1.9rem 1rem;
  font-size: 1.8rem;
  ${media({ fontSize: ['1.4rem', '1.4rem', '1.8rem', '1.8rem', '1.8rem'] })}
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
  margin: 0.4rem 0 ;
  font-weight: 400;
  color: var(--white-alpha-60);
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
