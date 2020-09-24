import React from 'react';
import './Modal.scss';

const Modal = ({ hideModal }) => {
  return (
    <div className='modal'>
      <div className='modal__container'>
        <p>This is modal text</p>
        <button onClick={hideModal}> Close Modal</button>
      </div>
    </div>
  );
};

export default Modal;
