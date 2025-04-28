import { css } from '@emotion/react';
import media from '@/styles/responsive';

export const wrapper = css`
  max-width: 480px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid var(--white);
  border-radius: 12px;
  text-align: center;
  color: var(--black);
  background: var(--white);

  h2 {
    margin-bottom: 2rem;
    line-height: 2rem;
    white-space: pre-line;
    ${media({ whiteSpace: ['pre-line', 'pre-line', 'normal', 'normal', 'normal'] })}
  }
`;

export const retryButtonStyle = css`
  width: 100%;
  border-radius: 8px;
  color: var(--white-full); 
`;
