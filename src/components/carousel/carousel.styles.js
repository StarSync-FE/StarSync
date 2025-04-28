import media from '@/styles/responsive';
import { css } from '@emotion/react';

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

  &::before {
    content: '';
    background: linear-gradient(to bottom, rgb(0 0 0 / 50%), rgb(0 0 0 / 70%));
  }
 
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
  gap: 1.2rem;
  transition: transform 1.5s ease-in-out;

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
  flex-basis: 15.8rem;
  min-width: 15.8rem;

  ${media({
    flexBasis: ['15.8rem', '15.8rem', '28.2rem', '28.2rem'],
    minWidth: ['15.8rem', '15.8rem', '28.2rem', '28.2rem'],
  })}
`;

export const navigationButton = (isRight, isAnimating) => css`
  position: absolute;
  top: 50%;
  ${isRight ? 'right: 0.5%' : 'left: 0.5%'};
  z-index: 1;
  width: 3rem;
  background-color: var(--black);
  pointer-events: ${isAnimating ? 'none' : 'auto'}; /* 애니메이션 중 버튼 클릭 방지 */
  transition: opacity 0.3s ease-in-out; /* 버튼에 부드러운 비활성화 효과 추가 */
  transform: translateY(-125%);
  opacity: ${isAnimating ? 0.3 : 0.5}; /* 애니메이션 중 버튼의 불투명도 변경 */
`;
