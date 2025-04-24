import { css } from '@emotion/react';

export const errorButtonStyle = css`
  display: inline-block;
  padding: 1.2rem 2.4rem;
  border: 2px solid rgb(255 255 255 / 30%);
  box-shadow: 0 0 12px rgb(0 255 255 / 20%);
  font-weight: 600;
  color: var(--white);
  background: linear-gradient(
    135deg,
    rgb(255 255 255 / 10%) 0%,
    rgb(255 255 255 / 5%) 100%
  );
  transition: all 0.3s ease-in-out;
  backdrop-filter: blur(8px);

  &:hover {
    border-color: rgb(255 255 255 / 60%);
    box-shadow: 0 0 16px rgb(0 255 255 / 40%);
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const logoIconStyle = css`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin-right: 0.8rem;
  vertical-align: middle;
`;
