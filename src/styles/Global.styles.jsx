import { Global, css } from '@emotion/react';

const resetStyle = css`
:root {
  --black: #181D26; 
  --black-deep: #02000E;
  --black-full: #000;
  --black-alpha-70: #000000B3;
  --black-eerie-alpha-80: #1B1B1BCC;
  --gray: #828282;
  --gray-dark: #67666E;
  --gray-light: #A3A5A8;
  --gray-light-02: #B8B8B8;
  --gray-cool: #8C92AB;
  --white: #F7F7F8;
  --white-full: #FFF;
  --white-alpha-05: #FFFFFF0D;
  --white-alpha-10: #FFFFFF1A;
  --white-alpha-20: #FFF3;
  --white-alpha-30: #FFFFFF4D;
  --white-alpha-60: #FFF9;
  --white-alpha-70: #FFFFFFB3;
  --orange: #F96D69;
  --orange-deep: #F86F65;
  --orange-alpha-50: #F96E6880;
  --pink: #FE5493;
  --pink-bright: #ED56C2;
  --pink-purple: #EA2FB6;
  --pink-soft: #FFF0F0;
  --pink-rose-alpha-50: #FE578F80;
  --blue-sky: #1C9EFB;
  --blue-dark: #3D2FA9;
  --blue-navy: #272F3D;
  --purple: #8D42FB;
  --light-green: #A6FF4D;
  --brown-dark: #5C4D4D; 
  --error-red: #FF2626;
  --cyan-alpha-20: #0FF3;
  --cyan-alpha-40: #0FF6;
} 

*, *::before, *::after {
  box-sizing: border-box;
}

html {
  font-family: Pretendard, sans-serif;
  font-size: 62.5%; /* 62.5% = 10px */
  word-break: keep-all;
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
