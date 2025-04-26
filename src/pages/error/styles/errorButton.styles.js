import { css } from '@emotion/react';

export const errorButtonStyle = css`
  display: inline-block;
  width: 16rem;
  padding: 1.2rem 2.4rem;
  border: 2px solid var(--white-alpha-30);
  box-shadow: 0 0 12px var(--cyan-alpha-20);
  font-weight: 600;
  color: var(--white);
  background: linear-gradient(
    135deg,
    var(--white-alpha-10) 0%,
    var(--white-alpha-05) 100%
  );
  transition: all 0.3s ease-in-out;
  backdrop-filter: blur(8px);

  &:hover {
    border-color: var(--white-alpha-60);
    box-shadow: 0 0 16px var(--cyan-alpha-40);
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
