import { css } from '@emotion/react';

const getButtonStyle = (type, isRound, disabled, color, border) => css`
width: ${type.width}rem;
height: ${type.height}rem;
border-radius: ${isRound ? '2.4rem' : '0.3rem'};
border: ${border || 'none'};
background: ${disabled ? 'var(--gray)' : color || 'linear-gradient(90deg, #f96d69 0%, #fe5493 100%)'};
`;

export default getButtonStyle;
