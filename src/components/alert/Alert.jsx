import successIcon from '@/assets/icons/success-icon.png';
import warningIcon from '@/assets/icons/warning-icon.png';
import * as S from './alert.styles';
const Alert = ({ content = 'toast content', isSuccess }) => {
  return (
    <div css={S.alertWrapper}>
      <div css={S.contentBox}>
        <img src={isSuccess ? successIcon : warningIcon} alt="warning-icon" />
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Alert;
