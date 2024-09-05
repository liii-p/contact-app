import React, { useState } from "react";
import styles from "./Modal.module.scss";

function Modal({ props }) {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <div className={`${open ? "active " : ""}`}>
      <button className={styles.btnModal} onClick={toggleModal}>
        View Note
      </button>
      {open && (
        <div className={styles.modal}>
          <div onClick={toggleModal} className={styles.overlay}></div>
          <div className={styles.modalContent}>
            <p>{props}</p>
          </div>
          <button className={styles.closeModal} onClick={toggleModal}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Modal;
