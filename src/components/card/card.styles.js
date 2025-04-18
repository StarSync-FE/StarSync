import { css } from '@emotion/react';

export const wrapper = css`
  position: relative;
  width: 28.2rem;
  height: 29.3rem;
`;

export const gradient = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(360deg, #000000, transparent);
  border-radius: 0.8rem;
  z-index: 1;
  pointer-events: none;
`;

export const image = css`
  width: 28.2rem;
  height: 28.3rem;
  object-fit: cover;
  object-position: center;
  border-radius: 0.8rem;
`;

export const button = css`
  position: absolute;
  bottom: 7%;
  left: 50%;
  transform: translateX(-50%);
  width: 23.3rem;
  height: 4rem;
  background: lightcoral;
  z-index: 1;
`;

export const content = css`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const header = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 1.2rem;
`;

export const subTitle = css`
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--gray);
`;

export const title = css`
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--white);
`;

export const info = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const statusBar = css`
  display: flex;
  justify-content: space-between;
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
  position: relative;
  width: 28.2rem;
  height: 0.1rem;
  background-color: var(--white);
  overflow: hidden;
`;

export const progressFill = css`
  background-color: var(--pink);
  width: 50%;
  height: 100%;
`;
