/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

const resetStyle = css`
:root {
  --black: #181d26;
  --black-deep: #00200E;
  --gray: #828282;
  --gray-dark: #67666E;
  --gray-light: #A3A5A8;
  --white: #F7F7F8;
  --white-soft: #8C92AB;
  --orange: #F96D69;
  --pink: #FE5493;
  --pink-purple: #ea2fb6;
  --sky-blue: #1c9efb;
  --indigo: #3d2fa9;
  --bright-pink: #ed56c2;
  --violet: #8d42fb;
}

html {
  box-sizing: border-box;
  font-size: 62.5%; /* 1rem = 10px */
}

*, *::before, *::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Pretendard', sans-serif !important;
  color: var(--white);
  background: var(--black);
  -webkit-font-smoothing: antialiased; /* 텍스트를 부드럽게 렌더링 (WebKit) */
  -moz-osx-font-smoothing: grayscale;  /* 텍스트를 부드럽게 렌더링 (macOS Firefox) */
  line-height: 1.4;
}

ul, ol, li {
  list-style: none;
}

a, button {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

label,
input,
select,
textarea {
  font: inherit;
  color: inherit;
  border: none;
  outline: none;
  box-shadow: none;
}


h1, h2, h3, h4, h5, h6,
p, span, strong,
ul, ol, li,
div, a, img, 
form, label, article, footer, header, nav, section {
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
