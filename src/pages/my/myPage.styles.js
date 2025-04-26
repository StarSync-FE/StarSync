import media from '@/styles/responsive';
import { css } from '@emotion/react';

export const myPageWrapper = css`
  margin: auto;
  
  ${media({ width: ['calc(100% - 4.8rem)', 'calc(100% - 4.8rem)', 'calc(100% - 4.8rem)', 'calc(100% - 72rem)', 'calc(100% - 72rem)'] })}
  h2:nth-of-type(3) {
    ${media({ margin: ['3.2rem 0 1.6rem', '3.2rem 0 1.6rem', '3.2rem 0 5.7rem', '4rem 0 3.2rem', '4rem 0 3.2rem'] })}
    margin: 3.2rem 0 5.7rem;
  }
`;

export const scrollStyle = css`
  overflow-y: auto;
  padding-right: 12px; 

  &::-webkit-scrollbar {
    height: 8px;
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

export const horizonList = css`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  ${media({ gap: ['3.2rem', '3.2rem', '2.4rem', '2.4rem', '2.4rem'] })}
  min-height: 12.3rem;
  padding: 0 2.4rem 3.2rem;
  border-bottom: 1px solid var(--white-alpha-10);
`;

export const allProfileSize = css`
  margin: 0 2.4rem;
  ${media({ height: ['15.1rem', '15.1rem', '18.3rem', '18.3rem', '18.3rem'] })}
  ${media({ width: ['9.8rem', '9.8rem', '12.8rem', '12.8rem', '12.8rem'] })}
`;

export const idolName = css`
  margin: 0.8rem 0 0.2rem;
  font-size: 1.6rem;
  font-weight: 700;
  text-align: center;
  color: var(--white);
`;

export const groupName = css`
  margin: 0.2rem;
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
  color: var(--white-alpha-60);
`;

export const title = css`
  margin: 1.4rem;
  ${media({ fontSize: ['1.6rem', '1.6rem', '2rem', '2.4rem', '2.4rem'] })}
  font-weight: 700;
`;

export const idolListWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.7rem;
  width: 100%;
  margin: 4rem 0 0;
`;

export const idolList = css`
  display: grid;
  min-width: fit-content;

  ${media({ gap: ['1.7rem', '1.7rem', '2.4rem', '2.4rem', '2.4rem'] })}
  ${media({ gridTemplateColumns: ['repeat(3, 9.8rem)', 'repeat(3, 9.8rem)', 'repeat(4, 12.8rem)', 'repeat(8, 12.8rem)', 'repeat(8, 12.8rem)'] })}
  ${media({ gridTemplaterRows: ['1fr 1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr'] })};
  justify-items: center;
`;

export const customButtonWrapper = css`
  display: flex;
  justify-content: center;
  margin: 2.4rem 6.4rem 3.4rem;
`;

export const customButtonStyle = css`
  width: 25.5rem;
  height: 4.8rem;
`;

export const buttonIcon = css`
  width: 2.4rem;
`;

// 이전, 다음 버튼 컴포넌트
export const arrowButton = css`
  z-index: 1111;
  min-width: 2.9rem;
  height: 13.5rem;
  background-color: var(--gray-dark-alpha-80);

  &:active {
    background-color: var(--gray-light-02);
  }
`;

export const prev = css`
  top: 40%;
  left: 32rem;
`;

export const next = css`
  top: 40%;
  right: 0;
`;
