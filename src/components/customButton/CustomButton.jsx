/** @jsxImportSource @emotion/react */

import getButtonStyle from './customButton.styles';

const CustomButton = ({ type, isRound = false, disabled = false, custom = {} }) => {
  const { color, border } = custom;
  const sizeMap = {
    modal: { width: 29.5, height: 4.2 },
    modalChart: { width: 47.7, height: 4.2, mobileWidth: 32.7 },
    carousel: { width: 23.4, height: 4, mobileWidth: 14.2, mobileHeight: 3.1 },
    vote: { width: 12.8, height: 3.2 },
    landing: { width: 47.7, height: 4.8, mobileWidth: 23 },
  };

  const selectedSize = sizeMap[type] || sizeMap.modal;

  const buttonStyle = getButtonStyle(selectedSize, isRound, disabled, color, border);

  return (
    <button type="button" css={buttonStyle} disabled={disabled}>
      TEST
    </button>
  );
};

export default CustomButton;
