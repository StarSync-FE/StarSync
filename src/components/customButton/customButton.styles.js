import { css } from '@emotion/react';

const getButtonStyle = (type, isRound) => css`
width: ${type.width}rem;
height: ${type.height}rem;
border-radius: ${isRound ? '2.4rem' : '0.3rem'};
`;

export default getButtonStyle;
