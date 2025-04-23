import media from '@/styles/responsive';
import { css } from '@emotion/react';

export const arrowIcon = css`
  width: 0.8rem;
  height: 1.4rem;
  fill: none;
  stroke: var(--white);
  stroke-width: 0.2rem;
`;

export const wrapper = css`
  width: 100%;
`;

export const carouselTitle = css`
  margin: 4rem 0 2rem;
  padding: 0 2rem;
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--white);

  ${media({
    fontSize: ['2rem', '2rem', '2.4rem', '2.4rem'],
    marginTop: ['3rem', '3rem', '4rem', '4rem'],
  })}
`;

export const viewportArea = css`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;

  ${media({
    gap: ['0', '0', '2rem', '2rem'],
  })}
`;

export const carouselContainer = css`
  width: 100%;
  margin: 0 auto;

  ${media({
    overflowX: ['scroll', 'scroll', 'hidden', 'hidden'],
    scrollSnapType: ['x mandatory', 'x mandatory', 'none', 'none'],
    scrollBehavior: ['smooth', 'smooth', 'auto', 'auto'],
  })}

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const carouselTrack = css`
  display: flex;
  gap: 1.2rem;
  transition: transform 0.3s ease-in-out;

  ${media({
    transform: [
      'none',
      'none',
      'translateX(var(--slide-offset))',
      'translateX(var(--slide-offset))',
    ],
    gap: ['1.2rem', '1.2rem', '1.2rem', '1.2rem'],
  })}
`;

export const carouselItem = css`
  flex: 0 0 28.5rem;
  min-width: 28.5rem;
  scroll-snap-align: start;

  ${media({
    flex: ['0 0 15.8rem', '0 0 15.8rem', '0 0 28.2rem', '0 0 28.2rem'],
    minWidth: ['15.8rem', '15.8rem', '28.2rem', '28.2rem'],
  })}
`;

export const navigationButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 7.8rem;
  border-radius: 0.6rem;
  background-color: var(--black);
  transition: opacity 0.2s;

  &:disabled {
    opacity: 0;
    cursor: default;
  }

  &:not(:disabled):hover {
    opacity: 0.8;
  }

  ${media({
    display: ['none', 'none', 'flex', 'flex'],
  })}
`;
