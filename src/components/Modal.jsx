import  { useEffect } from "react";

function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27 || event.keyCode === 'Escape' && isOpen) {
        onClose();
      }
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest(".modal-content") && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">{children}</div>
        </div>
      )}
    </>
  );
}

export default Modal;
