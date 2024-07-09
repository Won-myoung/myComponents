import React, { useState } from "react";
import styles from "./css/SideMenuBackUp.module.css";
import Accordi from "./Accordi";

export default function SideMenuBackUp({ hamburgerClass }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isBgVisible, setIsBgVisible] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsBgVisible(!isBgVisible);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsBgVisible(false);
  };

  return (
    <div className={`${styles.SideMenu} ${hamburgerClass}`}>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
        <Accordi />
      </div>
      <button className={`${styles["toggleButton"]} ${isOpen ? styles.open : styles.closed}`} onClick={toggleMenu}>
        <span className={`${styles.icon} ${isOpen ? styles["closeIcon"] : styles["openIcon"]}`}></span>
      </button>
      <div className={`${styles.blackBg} ${isBgVisible ? styles.visible : ""}`} onClick={handleClose}></div>
    </div>
  );
}