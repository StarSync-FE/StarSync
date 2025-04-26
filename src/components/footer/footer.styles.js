import { LAYOUT } from '@/constants/layout';
import media from '@/styles/responsive';
import { css } from '@emotion/react';

export const footerWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${LAYOUT.FOOTER_HEIGHT}px;
  padding: 1.6rem 2rem;
  border-top: 1px solid var(--white-alpha-20);
  font-size: 1.2rem;
  color: var(--gray-light);
  background-color: var(--black-deep);

  ${media({
    padding: ['1.6rem 2rem', '1.6rem 4rem', '1.6rem 6rem', '1.6rem 8rem'],
  })}
`;

export const leftSection = css`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const rightSection = css`
  display: flex;
  align-items: center;
`;

export const githubLink = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background-color: var(--gray-dark);
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--gray-cool);
  }
`;

export const githubIcon = css`
  width: 1.6rem;
  height: 1.6rem;
  object-fit: contain;
`;
