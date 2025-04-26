import media from '@/styles/responsive';
import { css, keyframes } from '@emotion/react';

const marquee = keyframes`
  0%   { transform: translateX(30%); }
  100% { transform: translateX(-100%); }
`;

export const card = css`
  width: 28.5rem;
  height: 100%;
  ${media({
    width: ['15.8rem', '15.8rem', '28.2rem', '28.2rem'],
  })}
`;

export const wrapper = css`
  overflow: hidden;
  position: relative;
  width: 100%;
  border-radius: 8px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: linear-gradient(360deg, #000, transparent);
    pointer-events: none; ;
  }
`;

export const image = css`
  display: inline;
  z-index: 0;
  width: 100%;
  height: 20.6rem;
  ${media({
    height: ['20.6rem', '20.6rem', '29.3rem', '29.3rem'],
  })}
  object-fit: cover;
  object-position: center;
`;

export const button = css`
  position: absolute;
  bottom: 7%;
  left: 50%;
  z-index: 2;
  transform: translateX(-50%);
`;

export const content = css`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  ${media({
    gap: ['2rem', '2rem', '2.4rem', '2.4rem'],
  })}
`;

export const header = css`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 1.2rem;

  p {
    font-size: 1.6rem;
    ${media({
      fontSize: ['1.4rem', '1.4rem', '1.6rem', '1.6rem'],
    })}
    font-weight: 400;
    color: var(--gray);
  }

  h2 {
    font-size: 1.8rem;
    ${media({
      fontSize: ['1.4rem', '1.4rem', '1.8rem', '1.8rem'],
    })}
    font-weight: 500;
    white-space: nowrap;
    color: var(--white);

    &:hover {
      animation: ${marquee} 8s linear infinite; 
    }
  }
`;

export const info = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const statusBar = css`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 1.2rem;
    font-weight: 400; 
    color: var(--white);
  }

  & > div > p {
    color: var(--orange);
  }
`;

export const statusLeft = css`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const icon = css`
  width: 1.2rem;
  height: 1.2rem;
`;

export const progressBar = css`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 0.1rem;
  background-color: var(--white);
`;

export const progressFill = (percent) => css`
  width: ${percent};
  height: 100%;
  background-color: var(--pink);
`;
