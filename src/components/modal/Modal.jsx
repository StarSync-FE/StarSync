import exitImg from '@/assets/icons/exit-icon.png';
import * as S from './modal.styles';

/**
 * 모달 공통 컴포넌트
 *
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {boolean} props.isOpen - 모달의 열림 여부
 * @param {() => void} props.onClose - 모달 닫기 핸들러
 * @param {React.ReactNode} props.children - 모달 내부에 표시될 내용
 * @returns {JSX.Element|null} isOpen이 false일 경우 null 반환
 *
 * @example
 * <Modal isOpen={isModalOpen} onClose={handleClose}>
 *   <p>모달 내용</p>
 * </Modal>
 */

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div css={S.overlay}>
      <div css={S.container}>
        <button type="button" onClick={onClose} css={S.modalStyles}>
          <img src={exitImg} alt="닫기" />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
