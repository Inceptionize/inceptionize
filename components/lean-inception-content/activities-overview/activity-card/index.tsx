/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactElement, useContext } from "react";
import styles from "../activities-overview.module.scss";
import ReactTooltip from "react-tooltip";
import Modal from "react-modal";
import { AppContext } from "../../../context/app-context";
import { selectModalVisible } from "../../../../state/selector";

interface ActivityCardProps {
  title: string;
  description: string;
}

function ActivityCard({ title, description }: ActivityCardProps): ReactElement {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { state } = useContext(AppContext);
  const isModalVisible = selectModalVisible(state);

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
    <div className={styles.card}>
      <button onClick={openModal} className={styles.activityCardTitle}>
        <h3>{title}</h3>
      </button>
      {isModalVisible ? (
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      ) : null}
      <a data-tip={description} data-event="click focus">
        i
      </a>
      <ReactTooltip type="light" globalEventOff="click" className={styles.information}></ReactTooltip>
    </div>
  );
}

export default ActivityCard;
