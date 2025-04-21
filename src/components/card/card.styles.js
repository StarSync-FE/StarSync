import { css } from '@emotion/react';

export const card = css`
  width: 28.5rem;
  height: 100%;
`;

export const wrapper = css`
  overflow: hidden;
  position: relative;
  width: 100%;
  border-radius: 8px;
`;

export const gradient = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: linear-gradient(360deg, #000, transparent);
  pointer-events: none;
`;

export const image = css`
  z-index: 0;
  width: 100%;
  height: 28.3rem;
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
