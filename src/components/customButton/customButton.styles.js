import media from '@/styles/responsive';
import { css } from '@emotion/react';

const getButtonStyle = (size, isRound) => css`
  display:inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: ${size.mobileWidth ?? size.width}; 
  height: ${size.mobileHeight ?? size.height};
  ${media({
    width: [size.mobileWidth ?? size.width, size.mobileWidth ?? size.width, size.width, size.width],
    height: [
      size.mobileHeight ?? size.height,
      size.mobileHeight ?? size.height,
      size.height,
      size.height,
    ],
  })};
  border: none;
  border-radius: ${isRound ? '24px' : '3px'};
  font-size: ${size.fontSize};
  font-weight: 600;
  line-height: 1;
  background: linear-gradient(90deg, var(--orange) 0%, var(--pink) 100%);

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
  color: var(--white);
  background: var(--gray);
  cursor: not-allowed;

  &:hover {
    opacity: 1;
  }
}
`;

export default getButtonStyle;
