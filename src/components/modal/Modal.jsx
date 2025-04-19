import exit from '@/assets/icons/exit-icon.png';
/** @jsxImportSource @emotion/react */
import * as S from './modal.styles';

function Modal({ isOpen, onClose, children, style }) {
  if (!isOpen) return null;

  return (
    <div>
      <div>
        <button type="button" onClick={onClose} css={[S.modalStyles, style]}>
          <img src={exit} alt="닫기" />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
