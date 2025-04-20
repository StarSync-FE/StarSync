import exit from '@/assets/icons/exit-icon.png';
import * as S from './modal.styles';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div css={S.overlay}>
      <div css={S.container}>
        <button type="button" onClick={onClose} css={S.modalStyles}>
          <img src={exit} alt="닫기" />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
