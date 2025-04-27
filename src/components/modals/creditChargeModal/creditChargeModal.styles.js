import media from '@/styles/responsive';
import { css } from '@emotion/react';

export const modalContent = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  
  ${media({
    margin: ['2.4rem 1.6rem', '2.4rem 1.6rem', '3rem 3rem', '3rem 3rem', '3rem 3rem'],
    gap: ['1rem', '1rem', '2rem', '2rem', '2rem'],
  })}

  h2 {
    margin-block: 0.2rem 1rem;
    font-size: 1.8rem;
  }
`;

export const radioButtons = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  box-sizing: border-box;
  width: 29.5rem;
  margin-bottom: 0.5rem;
  padding: 0.4rem;
  font-size: 1rem;
  cursor: pointer;
`;

export const buttonStyle = css`
  ${media({
    width: ['28rem', '29rem', '29rem', '32rem', '32rem'],
    height: ['7rem', '7rem', '7rem', '8rem', '8rem'],
  })}
  border: 1px solid var(--white);
  border-radius: 8px;
  transition: border-color 0.3s ease;
  
  input {
      margin-right: 2.3rem;
  }

  &:has(input[type="radio"]:checked) { 
    border-color: var(--orange); 
    color: var(--gray);
  } 
  
  img {
    width: 2rem;
  }
`;

export const customButton = css`
  ${media({
    width: ['28.7rem', '29.8rem', '29.8rem', '32.8rem', '32.8rem'],
    height: ['3.8rem', '4rem', '4rem', '5rem', '5rem'],
  })}
  img {
    height: 2rem;
  }
`;

export const radioButtonContent = css`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-left: 1rem;
  padding: 0.5rem;

  img {
    width: 2.4rem;
    height: 2.4rem;
  }

  span {
    margin: 0.2rem 0 0 0.3rem;
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const imgStyle = css`
  width: 2.3rem;
  height: 2.4rem;
`;

export const ChargeContent = css` 
  margin-right: 1.2rem;
  font-size: 1.4rem;
  font-weight: 700;
`;
