import { useState } from "react";
import styles from "./css/Modal.module.css";

export default function Modal() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };
  return (
    /*  <> //모달첫번째
      <a href="#myPopover" id="openPopoverBtn">
        Open Popover
      </a>

      <div id="myPopover" className="popover">
        <div className="popover-content">
          <a href="#" className="close">
            &times;
          </a>
          <h2>Popover Header</h2>
          <p>This is a simple popover example.</p>
        </div>
      </div>
    </> */
    /*     <> //유튜브용 - 실행안됨
      <div className="modalBtn">
        <button popovertarget="mypopover" popovertargetaction="show">
          Show popover
        </button>
        <button popovertarget="mypopover" popovertargetaction="hide">
          Hide popover
        </button>
        <div id="mypopover" popover>
          Popover content
        </div>
      </div>
    </> */

    //   유튜브용 -react용으로 번형
    <>
      <div className={styles.modalBtn}>
        <button onClick={showModal}>Show Modal</button>
        {isModalVisible && (
          <div className={styles.modalOverlay} onClick={hideModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <span className={styles.close} onClick={hideModal}>
                &times;
              </span>
              <h2>Modal Header</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo reprehenderit provident, in distinctio quidem quo debitis maxime aperiam libero sequi et vitae, officia adipisci similique possimus perspiciatis id labore? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo reprehenderit provident, in distinctio quidem quo debitis maxime aperiam libero sequi et vitae, officia adipisci similique possimus perspiciatis id labore? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quia explicabo reprehenderit provident, in distinctio quidem quo debitis maxime aperiam libero sequi et vitae, officia adipisci similique possimus perspiciatis id labore? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quia explicabo reprehenderit provident, in distinctio quidem quo debitis maxime aperiam libero sequi et vitae, officia adipisci similique possimus perspiciatis id labore?
              </p>
              <img src="" alt="" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
