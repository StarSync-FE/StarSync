/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import getButtonStyle from './customButton.styles';

const CustomButton = ({
  type = 'button',
  variant = 'modal',
  isRound = false,
  disabled = false,
  style,
  onClick,
  children,
}) => {
  const sizeMap = {
    modal: { width: 29.5, height: 4.2, fontSize: 1.4 },
    modalChart: { width: 47.7, height: 4.2, mobileWidth: 32.7, fontSize: 1.4 },
    carousel: { width: 23.4, height: 4, mobileWidth: 14.2, mobileHeight: 3.1, fontSize: 1.3 },
    vote: { width: 12.8, height: 3.2, fontSize: 1.3 },
    landing: { width: 47.7, height: 4.8, mobileWidth: 23, fontSize: 1.4 },
  };

  const selectedSize = sizeMap[variant] || sizeMap.modal;

  const buttonStyle = getButtonStyle(selectedSize, isRound, disabled);

  return (
    <button
      type={type}
      css={[buttonStyle, style && css(style)]}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
