import React from "react";
import './Modal.css';

const Modal = ({isOpen, closeModal, children}) => {

  const handleModalDialogClick = (event)=> {
    event.stopPropagation()
  };

  return (
    <div className={`modal ${isOpen && "modal-open"}`} onClick={closeModal}>
      <div className="modal-dialog" onClick={handleModalDialogClick}>
        <span onClick={closeModal} className="close">x</span>
        {children}
      </div>
    </div>
  ) 
};

export default Modal;