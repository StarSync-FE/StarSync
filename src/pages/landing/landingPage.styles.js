import starImg from '@/assets/images/star.png';
import media from '@/styles/responsive';
import { css, keyframes } from '@emotion/react';

const auroraMove = keyframes`
  0% {
    background-position: 0% 0%, 100% 0%, 50% 100%;
  }
  50% {
    background-position: 50% 50%, 50% 0%, 0% 100%;
  }
  100% {
    background-position: 100% 100%, 0% 50%, 50% 0%;
  }
`;

const twinkle = keyframes` 
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
`;

const glow = keyframes`
  0%, 100% {
    text-shadow: 0 0 8px var(--pink), 0 0 16px var(--blue-sky), 0 0 24px var(--purple);
  }
  50% {
    text-shadow: 0 0 12px var(--pink), 0 0 24px var(--blue-sky), 0 0 36px var(--purple);
  }
`;

export const pageContainer = css`
  overflow: hidden auto;
  position: relative;
  width: 100vw;
  height: 100vh;
  color: var(--white);
  background: var(--black-deep);
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &::before {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, var(--purple), transparent 70%),
                radial-gradient(circle, var(--blue-dark), transparent 70%),
                radial-gradient(circle, var(--pink-purple), transparent 70%);
    background-position: 0% 0%, 100% 0%, 50% 100%;
    background-size: 50% 50%;
    animation: ${auroraMove} 10s infinite alternate;
    content: '';
    opacity: 0.5;
  }
`;

export const backgroundStarsWrapper = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const starStyle = ({ top, left, width, height }) => css`
  position: absolute;
  top: ${top};
  left: ${left};
  width: ${width}px;
  height: ${height}px;
  background: url(${starImg}) no-repeat center center;
  background-size: contain;
  opacity: 0.3;
  animation: ${twinkle} 3s infinite;
`;

export const section = css`
  display: flex;
  position: relative;
  z-index: 2;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0 2rem;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

export const sectionContent = css`
  display: flex;
  position: relative;
  z-index: 1;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 144rem;
  margin: 0 auto;
  padding: 2rem;
  padding-bottom: 6rem;
  text-align: center;

  ${media({
    gap: ['2.4rem', '2.8rem', '2rem', '2rem'],
    padding: ['2.4rem', '2.8rem', '3.2rem', '3.6rem'],
    paddingBottom: ['8rem', '8rem', '8rem', '10rem'],
  })}

  h1 {
    font-size: 3.2rem;
    font-weight: 900;
    line-height: 1.3;
    letter-spacing: 0.2rem;
    word-break: keep-all;
    color: var(--white);
    text-shadow: 2px 2px 4px var(--black-alpha-70);
    cursor: default;
    transition: opacity 0.3s ease;
    animation: ${glow} 2s infinite ease-in-out;
    
    &:hover {
      opacity: 0.8;
    }
    
    ${media({
      fontSize: ['3.2rem', '4rem', '5rem', '6rem'],
      letterSpacing: ['0.2rem', '0.3rem', '0.4rem', '0.5rem'],
      lineHeight: ['1.3', '1.2', '1.2', '1.2'],
    })}
  }

  p {
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 1.6rem;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.6;
    white-space: pre-line;
    word-break: keep-all;
    color: var(--white);
    text-shadow: 2px 2px 4px var(--black-alpha-70);
    cursor: default;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
    
    ${media({
      fontSize: ['1.6rem', '1.8rem', '2rem', '2.4rem'],
      maxWidth: ['30rem', '50rem', '60rem', '80rem'],
      lineHeight: ['1.7', '1.7', '1.7', '1.7'],
      padding: ['1.6rem', '1.6rem', '2rem', '2.4rem'],
    })}
  }

  a {
    margin-top: 1.6rem;
    
    ${media({
      marginTop: ['1.6rem', '2rem', '2.4rem', '2.8rem'],
    })}
  }
`;

export const navDots = css`
  display: flex;
  position: fixed;
  top: 50%;
  right: 1rem;
  z-index: 10;
  flex-direction: column;
  gap: 1rem;
  transform: translateY(-50%);
  
  ${media({
    right: ['1rem', '1.5rem', '2rem', '3rem'],
    gap: ['0.8rem', '1rem', '1.2rem', '1.4rem'],
  })}
`;

export const dot = css`
  width: 0.8rem;
  height: 0.8rem;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: var(--white);
  opacity: 0.5;
  cursor: pointer;
  transition: all 0.4s ease;
  

  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
  
  ${media({
    width: ['0.8rem', '1rem', '1.2rem', '1.4rem'],
    height: ['0.8rem', '1rem', '1.2rem', '1.4rem'],
  })}
`;

export const activeDot = css`
  opacity: 1;
  transform: scale(1.2);
`;

export const scrollGuide = css`
  display: inline-flex;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  align-items: center;
  gap: 1.2rem;
  padding: 1rem;
  border: none;
  font-size: 1.4rem;
  white-space: nowrap;
  color: var(--white);
  background: none;
  cursor: pointer;
  transition: opacity 0.3s ease;
  animation: bounce 2s infinite;
  transform: translateX(-50%);
  
  &::before {
    content: '↓';
    font-size: 2rem;
    order: -1;
  }

  &:hover {
    opacity: 0.8;
  }
  
  ${media({
    fontSize: ['1.2rem', '1.4rem', '1.6rem', '1.8rem'],
    bottom: ['1rem', '1.4rem', '1.8rem', '2.2rem'],
  })}

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }

    40% {
      transform: translateX(-50%) translateY(-0.5rem);
    }

    60% {
      transform: translateX(-50%) translateY(-0.3rem);
    }
  }
`;
