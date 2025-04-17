import { css } from '@emotion/react';

const getButtonStyle = (type) => css`
width: ${type.width}rem;
height: ${type.height}rem;
`;

export default getButtonStyle;
