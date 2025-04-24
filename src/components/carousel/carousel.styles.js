import media from '@/styles/responsive';
import { css } from '@emotion/react';

export const arrowIcon = css`
  height: 1.4rem;
  fill: none;
  stroke: var(--white);
  stroke-width: 0.3rem;
`;

export const wrapper = css`
  width: 100%;
  margin-block: 4rem;
`;

export const carouselTitle = css`
  margin-inline: 2rem;
  margin-bottom: 1.6rem;
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--white);

  ${media({
    fontSize: ['2rem', '2rem', '2.4rem', '2.4rem'],
    marginInline: ['2rem', '2rem', '8rem', '8rem'],
    marginBottom: ['1.6rem', '1.6rem', '2.4rem', '3.2rem'],
  })}
`;

export const viewportArea = css`
  display: flex;
  align-items: center;
  gap: 0;
  padding-inline: 2rem;

  ${media({
    gap: ['0', '0', '2rem', '2rem'],
  })}
`;

export const carouselContainer = css`
  overflow-x: scroll;
  width: 100%;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const carouselTrack = css`
  display: flex;
  position: relative;
  gap: 1.2rem;
  transition: transform 0.3s ease-in-out;

  ${media({
    transform: [
      'none',
      'none',
      'translateX(var(--slide-offset))',
      'translateX(var(--slide-offset))',
    ],
  })}
`;

export const carouselItem = css`
  flex-basis: 28.5rem;
  min-width: 28.5rem;

  ${media({
    flexBasis: ['15.8rem', '15.8rem', '28.2rem', '28.2rem'],
    minWidth: ['15.8rem', '15.8rem', '28.2rem', '28.2rem'],
  })}
`;

export const navigationButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 78px;
  border-radius: 6px;
  background-color: var(--black);
  transition: opacity 0.2s;

  &:disabled {
    opacity: 0;
    cursor: default;
    pointer-events: none;
  }

  &:hover {
    opacity: 0.8;
  }

  ${media({
    display: ['none', 'none', 'flex', 'flex'],
  })}
`;
