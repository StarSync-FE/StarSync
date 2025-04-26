import { css } from '@emotion/react';

export const modalContent = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32.7rem;
  height: auto;
  margin: 0 auto;
  padding: 2.4rem 1.6rem; /* 다른 모달들과 동일한 패딩 값 */
  text-align: center;
  color: var(--white-full);
  background-color: var(--black); 
`;

export const contentWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

export const image = css`
  width: 113px;
  height: auto; 
  margin-bottom: 1rem;
`;

export const message = css`
  margin-bottom: 1rem;
  font-size: 16px; 
  font-weight: 500; 
  color: var(--white-full);

  span {
    font-weight: 700; 
    color: var(--orange);
  }
`;

export const buttonStyle = css`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-weight: 700;
  color: var(--white-full);
 
`;
