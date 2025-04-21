import { Global, css } from '@emotion/react';
import media from './responsive';

const resetStyle = css`
:root {
  --black: #181D26; 
  --black-deep: #02000E;
  --black-full: #000;
  --gray: #828282;
  --gray-dark: #67666E;
  --gray-light: #A3A5A8;
  --gray-cool: #8C92AB;
  --white: #F7F7F8;
  --white-full: #FFF;
  --orange: #F96D69;
  --pink: #FE5493;
  --pink-bright: #ED56C2;
  --pink-purple: #EA2FB6;
  --blue-sky: #1C9EFB;
  --blue-dark: #3D2FA9;
  --purple: #8D42FB;
  --light-green: #A6FF4D;
}

*, *::before, *::after {
  box-sizing: border-box;
}

html {
  font-family: Pretendard, sans-serif;
  font-size: 10px;
  ${media({
    fontSize: ['10px', '10px', '12px', '14px', '14px'],
  })}
}


body {
  margin: 0;
  padding: 0;
  line-height: 1;
  color: var(--white);
  background: var(--black-deep);
  -webkit-font-smoothing: antialiased; /* 텍스트를 부드럽게 렌더링 (WebKit) */
  -moz-osx-font-smoothing: grayscale;  /* 텍스트를 부드럽게 렌더링 (macOS Firefox) */
}

ul, ol, li {
  list-style: none;
}

a{
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

label,
input,
select,
textarea,
button {
  border: none;
  outline: none;
  box-shadow: none;
  font: inherit;
  color: inherit;
}

button {
  background: none;
  cursor: pointer;
}

input[type="radio"] {
  cursor: pointer;
}


h1, h2, h3, h4, h5, h6,
p, span, strong,
ul, ol, li,
div, a, img, 
form, label, article, figure, footer, header, nav, section {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-weight: normal;
}

strong {
  font-weight: bold;
}
`;

const GlobalStyle = () => {
  return <Global styles={resetStyle} />;
};

export default GlobalStyle;
