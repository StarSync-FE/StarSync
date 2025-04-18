import { css } from '@emotion/react';

const getButtonStyle = (type, isRound, disabled) => css`
  display:inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: ${type.width}rem;
  height: ${type.height}rem;
  border: none;
  border-radius: ${isRound ? '2.4rem' : '0.3rem'};
  font-size: ${type.fontSize}rem;
  font-weight: 600;
  line-height: 1;
  background: ${disabled ? 'var(--gray)' : 'linear-gradient(90deg, var(--orange) 0%, var(--pink) 100%)'};

  &:hover {
      opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;

    &:hover {
        opacity: 1;
    }
}
`;

export default getButtonStyle;
