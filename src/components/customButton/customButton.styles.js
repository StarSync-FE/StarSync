import { css } from '@emotion/react';

const getButtonStyle = (type, isRound, disabled) => css`
width: ${type.width}rem;
height: ${type.height}rem;
border-radius: ${isRound ? '2.4rem' : '0.3rem'};
background: ${disabled ? 'var(--gray)' : 'linear-gradient(90deg, #f96d69 0%, #fe5493 100%)'};


`;

export default getButtonStyle;
