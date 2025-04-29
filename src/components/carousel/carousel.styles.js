import { css } from '@emotion/react';
import media from '@/styles/responsive';

export const wrapper = css`
  width: 100%;
  margin-block: 4rem;

  ${media({
    marginBlock: ['4rem', '4rem', '4rem 6rem', '4rem 6rem', '4rem 6rem'],
  })}
`;

export const carouselTitle = css`
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--white);

  ${media({
    fontSize: ['2rem', '2rem', '2.4rem', '2.4rem'],
    marginBottom: ['1.6rem', '1.6rem', '2.4rem', '3.2rem'],
  })}
`;

export const viewportArea = css`
  position: relative;
`;

export const carouselContainer = css`
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  width: 100%;


  &::-webkit-scrollbar {
    display: none;
  }
`;

export const carouselTrack = (slide) => css`
  display: flex;
  gap: 1.2rem;
  transition: transform 0.4s ease-in-out;

  ${media({
    transition: [
      'transform 0.4s ease-in-out',
      'transform 0.6s ease-in-out',
      'transform 0.7s ease-in-out',
      'transform 0.9s ease-in-out',
    ],
    transform: ['none', 'none', `translateX(-${slide}px)`, `translateX(-${slide}px)`],
  })}
`;

export const carouselItem = css`
  flex-basis: 15.8rem;
  min-width: 15.8rem;
  scroll-snap-align: start;

  ${media({
    flexBasis: ['15.8rem', '15.8rem', '28.2rem', '28.2rem'],
    minWidth: ['15.8rem', '15.8rem', '28.2rem', '28.2rem'],
  })}
`;

export const navigationButton = (isRight) => css`
  position: absolute;
  top: 50%;
  ${isRight ? 'right: 0.5%' : 'left: 0.5%'};
  z-index: 1;
  width: 3rem;
  opacity: 0.5;
  transition: opacity 0.3s ease-in-out; /* 버튼에 부드러운 비활성화 효과 추가 */
  transform: translateY(-125%);
`;

export const notthingTitle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-block: 7rem;
`;
