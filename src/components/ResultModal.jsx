import React from 'react';
import Modal from 'react-modal';
import css from 'components/styles/ResultModal.module.css';

export default function ResultModal({
  resultMessage,
  isError,
  isOpen,
  onRequestClose,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      appElement={document.getElementById('root')}
      overlayClassName={css.modalOverlay}
      className={css.modal}>
      <div className={isError ? css.error : css.success}>
        <div className={css.content}>
          <span>{resultMessage}</span>
          <a href="#" onClick={onRequestClose} className={css.close}>
            ✖
          </a>
        </div>
      </div>
    </Modal>
  );
}
