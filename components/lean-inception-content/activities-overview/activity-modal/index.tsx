/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactElement, useEffect } from "react";
import styles from "../activities-overview.module.scss";
import Modal from "react-modal";

interface ActivityCardProps {
  title: string;
  description: string;
}

function ActivityModal({ title, description }: ActivityCardProps): ReactElement {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  useEffect(() => {
    Modal.setAppElement("#modal");
  });

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div id="modal">
      <button onClick={openModal} className={styles.activityCardTitle}>
        <h3>{title}</h3>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{ content: { background: "#6b6b6b" } }}
      >
        <button onClick={closeModal}>close</button>
        <h2>{title}</h2>
        <p>{description}</p>
      </Modal>
    </div>
  );
}

export default ActivityModal;
