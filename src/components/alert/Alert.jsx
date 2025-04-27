import successIcon from '@/assets/icons/success-icon.png';
import warningIcon from '@/assets/icons/warning-icon.png';
import React from 'react';
import * as S from './alert.styles';

const Alert = ({ content = 'toast content', type = 'warning', isSmall = false }) => {
  const iconSrc = type === 'success' ? successIcon : warningIcon;

  return (
    <div css={S.alertWrapper(isSmall)}>
      <div css={S.contentBox}>
        <img src={iconSrc} alt={`${type}-icon`} />
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Alert;
