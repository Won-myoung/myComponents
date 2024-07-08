import React from "react";
import styles from "./css/MovingText.module.css";

export default function MovingText() {
  return (
    <div className={styles.flowContainer}>
      <div className={styles.flowText}>
        <div className={styles.flowWrap}>THE MOST DELICIOUS CHOICE!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FRED PIZZA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div className={styles.flowWrap}>THE MOST DELICIOUS CHOICE!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FRED PIZZA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
      </div>
      <div>
        <div className={`${styles.flowText} ${styles.flowText02}`}>
          <div className={`${styles.flowWrap} ${styles.flowWrap02}`}>THE MOST DELICIOUS CHOICE!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DOMINO PIZZA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <div className={`${styles.flowWrap} ${styles.flowWrap02}`}>THE MOST DELICIOUS CHOICE!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DOMINO PIZZA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
      </div>
      <div>
        <div className={`${styles.flowText} ${styles.flowText03}`}>
          <div className={`${styles.flowWrap} ${styles.flowWrap03}`}>THE MOST DELICIOUS CHOICE!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DOMINO PIZZA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <div className={`${styles.flowWrap} ${styles.flowWrap03}`}>THE MOST DELICIOUS CHOICE!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DOMINO PIZZA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
      </div>
      <div>
        <div className={`${styles.flowText} ${styles.flowText03}`}>
          <div className={`${styles.flowWrap} ${styles.flowWrap04}`}>THE MOST DELICIOUS CHOICE!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DOMINO PIZZA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <div className={`${styles.flowWrap} ${styles.flowWrap04}`}>THE MOST DELICIOUS CHOICE!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DOMINO PIZZA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
      </div>
    </div>
  );
}

/* 
npx create-react-app moving-text
 */
