import React from "react";
import ReactDOM from "react-dom";
import Form from "../form/Form";
import FocusTrap from "focus-trap-react";
import Profile from '../../pages/Profile'

export const Modal2 = ({
  onClickOutside,
  onKeyDown,
  modalRef,
  buttonRef,
  closeModal,
  onSubmit,
  props
}) => {
  return ReactDOM.createPortal(
    <React.Fragment >
      <FocusTrap>
        <aside
          tag="aside"
          role="dialog"
          tabIndex="-1"
          aria-modal="true"
          className="modal-cover"
          onClick={onClickOutside}
          onKeyDown={onKeyDown}
        >
          <div className="modal-area" ref={modalRef}>
            <button
              ref={buttonRef}
              aria-label="Close Modal"
              aria-labelledby="close-modal"
              className="_modal-close"
              onClick={closeModal}
            >
              <span id="close-modal" className="_hide-visual">
                Close
              </span>
              <svg className="_modal-close-icon" viewBox="0 0 40 40">
                <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
              </svg>
            </button>
            <div className="modal-body">
              <Profile {...props} onSubmit={onSubmit} />
            </div>
          </div>
        </aside>
      </FocusTrap>
    </React.Fragment>,
    document.body
  );
};
export default Modal2;
