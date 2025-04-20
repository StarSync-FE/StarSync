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

const glow = keyframes`
  0%, 100% {
    text-shadow: 0 0 8px var(--pink), 0 0 16px var(--blue-sky), 0 0 24px var(--purple);
  }
  50% {
    text-shadow: 0 0 12px var(--pink), 0 0 24px var(--blue-sky), 0 0 36px var(--purple);
  }
`;

export const auroraStyle = css`
  display: flex;
  overflow: hidden;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: var(--white);
  background: var(--black-deep);
  text-shadow: 2px 2px 4px rgb(0 0 0 / 70%);

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, var(--pink), transparent 70%),
                radial-gradient(circle, var(--blue-sky), transparent 70%),
                radial-gradient(circle, var(--purple), transparent 70%);
    background-position: 0% 0%, 100% 0%, 50% 100%;
    background-size: 50% 50%;
    animation: ${auroraMove} 10s infinite alternate;
    content: '';
    opacity: 0.5;
  }
`;

export const textStyle = css`
  z-index: 1;
  padding: 0 2rem;
  text-align: center;

 
  h1 {
    margin-bottom: 1rem;
    font-size: 6rem;
    font-weight: 900;
    letter-spacing: 0.5rem;
    color: var(--white);
    animation: ${glow} 2s infinite ease-in-out;
    ${media({ fontSize: ['6rem', '8rem', '10rem', '12rem', '14rem'] })}
}

  

  h2 {
    margin-bottom: 2rem;
    font-size: 3rem;
    font-weight: 700;
    color: var(--white);
    ${media({ fontSize: ['3rem', '3rem', '4rem', '5rem', '6rem'] })}
  }

  p {
    font-size: 1.8rem; 
    font-weight: 400;
    color: var(--pink);
    ${media({ fontSize: ['1.8rem', '2rem', '2.4rem', '2.8rem', '3rem'] })}
  }
`;
