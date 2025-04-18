function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  const handleModalClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <button type="button" className="" onClick={handleModalClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
