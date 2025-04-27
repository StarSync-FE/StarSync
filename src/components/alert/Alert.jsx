import successIcon from '@/assets/icons/success-icon.png';
import warningIcon from '@/assets/icons/warning-icon.png';
import * as S from './alert.styles';

const Alert = ({ content = 'toast content', type = 'warning', customStyle }) => {
  const iconSrc = type === 'success' ? successIcon : warningIcon;

  return (
    <div css={[customStyle, S.alertWrapper]}>
      <div css={S.contentBox}>
        <img src={iconSrc} alt={`${type}-icon`} />
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Alert;
