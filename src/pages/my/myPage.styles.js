import { css } from '@emotion/react';
import media from '@/styles/responsive';

export const myPageWrapper = css`
  /* ${media({ padding: ['0 4rem', '0 4rem', '0 6rem', '0 7rem', '0 7rem'] })} */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;
export const contentBox = css`
  ${media({ width: ['calc(100% - 4.7rem)', 'calc(100% - 4.7rem)', 'calc(100% - 4.8rem)', 'calc(100% - 25.8rem)', 'calc(100% - 37.8rem)'] })}
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
  padding: 1rem 2.4rem 3.2rem;
  border-bottom: 1px solid var(--white-alpha-10);
`;
export const allProfileSize = css`
  width: 100%; 
  min-width: 9.8rem; 
  max-width: 12.8rem; 
  margin: 0 2.4rem; 
  aspect-ratio: 1 / 1;
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
  ${media({ fontSize: ['1.6rem', '1.6rem', '2rem', '2.4rem', '2.4rem'] })}
  font-weight: 700;
`;
export const myIdolTitle = css`
  ${media({ margin: ['1.4rem 0 0.2rem', '1.4rem 0 0.2rem', '1.4rem 0 1.5rem', '7.6rem 0 2.2rem', '7.6rem 0 2.2rem'] })}
  `;
export const allIdolTitle = css`
  ${media({ margin: ['3.2rem 0 1.6rem', '3.2rem 0 1.6rem', '3.2rem 0 5.7rem', '4rem 0 3.2rem', '4rem 0 3.2rem'] })}
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
  justify-items: center;
  justify-content: center;
  width: 100%;
  ${media({
    columnGap: ['1.7rem', '1.7rem', '2.4rem', '2.4rem', '2.4rem'],
    rowGap: ['1rem', '1rem', '2.4rem', '2.4rem', '2.4rem'],
    gridTemplateColumns: [
      'repeat(3, minmax(9.8rem, 1fr))',
      'repeat(3, minmax(9.8rem, 1fr))',
      'repeat(4, minmax(12.8rem, 1fr))',
      'repeat(8, minmax(9.8rem, 1fr))',
      'repeat(8, minmax(12.8rem, 1fr))',
    ],
    gridTemplateRows: ['1fr 1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr'],
  })}
  
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
  min-width: 2.9rem;
  height: 13.5rem;
`;

export const prev = css`
  left: 0;
`;
export const next = css`
  right: 0;
`;
