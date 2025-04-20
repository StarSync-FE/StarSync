import media from '@/styles/responsive';
import { css } from '@emotion/react';

const auroraStyle = css`
  height: 100vh;
  width: 100vw;
  background: var(--black-deep);
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  font-family: Arial, sans-serif;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, var(--pink), transparent 70%),
                radial-gradient(circle, var(--blue-sky), transparent 70%),
                radial-gradient(circle, var(--purple), transparent 70%);
    background-size: 50% 50%;
    background-position: 0% 0%, 100% 0%, 50% 100%;
    animation: auroraMove 10s infinite alternate;
    opacity: 0.5;
  }

  @keyframes auroraMove {
    0% {
      background-position: 0% 0%, 100% 0%, 50% 100%;
    }
    50% {
      background-position: 50% 50%, 50% 0%, 0% 100%;
    }
    100% {
      background-position: 100% 100%, 0% 50%, 50% 0%;
    }
  }
`;

const textStyle = css`
  text-align: center;
  z-index: 1;
  padding: 0 2rem;

  h1 {
    font-size: 6rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: var(--pink);
    ${media({ fontSize: ['4rem', '5rem', '6rem', '7rem'] })}
  }

  p {
    font-size: 2.4rem;
    font-weight: 400;
    color: var(--gray-cool);
    ${media({ fontSize: ['1.8rem', '2rem', '2.4rem', '2.8rem'] })}
  }
`;

const NotFoundPage = () => {
  return (
    <div css={auroraStyle}>
      <div css={textStyle}>
        <h1>Page Not Found</h1>
        <p>요청하신 페이지를 찾을 수 없습니다.</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
